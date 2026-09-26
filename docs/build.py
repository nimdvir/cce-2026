#!/usr/bin/env python3
"""Build the CCE 2026 website.

Renders every Markdown file in docs/content/ into a page in docs/ using
docs/template.html, and mirrors assets/images/ into docs/assets/images/ so
the image paths written in the content resolve on GitHub Pages.

Usage:  python docs/build.py

The Markdown files are the source of truth. Never edit the generated HTML.
Requires Python 3 and the `markdown` package (tested with 3.10.3).
"""

from __future__ import annotations

import html
import re
import shutil
import sys
from pathlib import Path

import markdown

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
CONTENT = DOCS / "content"
TEMPLATE = DOCS / "template.html"
IMAGES_SRC = ROOT / "assets" / "images"
IMAGES_DST = DOCS / "assets" / "images"

# The content was written for exactly these extensions. Do not add or remove
# any without re-checking every page.
EXTENSIONS = ["toc", "attr_list", "fenced_code", "tables", "md_in_html"]

# Source stem, output file name, nav label. Order is the nav order.
PAGES = [
    ("intro", "index.html", "Intro"),
    ("lecture", "lecture.html", "Lecture"),
    ("explanation", "explanation.html", "Explanation"),
    ("examples", "examples.html", "Examples"),
]

# attr_list attaches a trailing `{: .class }` after a list to the last <li>,
# not to the list itself. Classes named here are hoisted to the parent list.
LIST_CLASSES = {"buttons"}


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def write_text(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8", newline="\n")


def first_h1(md_text: str) -> str:
    for line in md_text.splitlines():
        if line.startswith("# "):
            title = line[2:].strip()
            title = re.sub(r"\s*\{[^}]*\}\s*$", "", title)  # drop {#id} tags
            return title
    return "Untitled"


def render_markdown(md_text: str) -> str:
    return markdown.markdown(md_text, extensions=EXTENSIONS, output_format="html")


def strip_comments(page_html: str) -> str:
    """Remove HTML comments (TODO markers, the LIVE BANNER marker)."""
    page_html = re.sub(r"<!--.*?-->", "", page_html, flags=re.S)
    page_html = re.sub(r"[ \t]+\n", "\n", page_html)  # trailing spaces left behind
    page_html = re.sub(r"\n{3,}", "\n\n", page_html)
    return page_html


def hoist_list_classes(page_html: str) -> str:
    """Move a class from the last <li> of a list to the <ul>/<ol> around it."""
    for cls in LIST_CLASSES:
        marker = f'<li class="{cls}">'
        while marker in page_html:
            pos = page_html.index(marker)
            start = max(page_html.rfind("<ul>", 0, pos), page_html.rfind("<ol>", 0, pos))
            if start == -1:
                break
            tag_name = page_html[start + 1:start + 3]
            page_html = (
                page_html[:start]
                + f'<{tag_name} class="{cls}">'
                + page_html[start + 4:pos]
                + "<li>"
                + page_html[pos + len(marker):]
            )
    return page_html


def wrap_tables(page_html: str) -> str:
    """Let wide tables scroll inside themselves instead of widening the page."""
    page_html = page_html.replace("<table>", '<div class="table-wrap">\n<table>')
    page_html = page_html.replace("</table>", "</table>\n</div>")
    return page_html


def mark_code_blocks(page_html: str) -> str:
    """Tag fenced blocks. `text` fences are diagrams. `prompt` fences become
    copyable prompt boxes with a label bar; site.js adds the Copy button."""
    page_html = page_html.replace(
        '<pre><code class="language-text">',
        '<pre class="diagram"><code class="language-text">',
    )
    page_html = re.sub(
        r'<pre><code class="language-prompt">(.*?)</code></pre>',
        lambda m: (
            '<div class="prompt-box">\n'
            '<div class="prompt-bar"><span class="prompt-label">Prompt</span></div>\n'
            f'<pre class="prompt"><code class="language-prompt">{m.group(1)}</code></pre>\n'
            "</div>"
        ),
        page_html,
        flags=re.S,
    )
    return page_html


def mark_next_link(page_html: str) -> str:
    return page_html.replace(
        "<p><strong>Next →</strong>", '<p class="next"><strong>Next →</strong>'
    )


def build_nav(current: str) -> str:
    items = []
    for _stem, out_name, label in PAGES:
        if out_name == current:
            items.append(
                f'<a href="{out_name}" class="current" aria-current="page">{label}</a>'
            )
        else:
            items.append(f'<a href="{out_name}">{label}</a>')
    return '<nav class="site-nav" aria-label="Site">\n' + "\n".join(items) + "\n</nav>"


def build_page(stem: str, out_name: str, template: str) -> str:
    md_text = read_text(CONTENT / f"{stem}.md")
    body = render_markdown(md_text)
    body = strip_comments(body)
    body = hoist_list_classes(body)
    body = wrap_tables(body)
    body = mark_code_blocks(body)
    body = mark_next_link(body)
    page = template.replace("{{title}}", html.escape(first_h1(md_text)))
    page = page.replace("{{nav}}", build_nav(out_name))
    page = page.replace("{{content}}", body.strip() + "\n")
    return page


def copy_images() -> None:
    if IMAGES_DST.exists():
        shutil.rmtree(IMAGES_DST)
    shutil.copytree(IMAGES_SRC, IMAGES_DST)


def check_links(pages: dict[str, str]) -> list[str]:
    """Report local links and images that do not resolve inside docs/."""
    problems = []
    ids = {name: set(re.findall(r'\bid="([^"]+)"', body)) for name, body in pages.items()}
    for name, body in pages.items():
        for ref in re.findall(r'\b(?:href|src)="([^"]+)"', body):
            if re.match(r"^(https?:|mailto:|//)", ref):
                continue
            target, _, frag = ref.partition("#")
            target = target or name
            if not (DOCS / target).exists():
                problems.append(f"{name}: missing file {ref}")
                continue
            if frag and target in ids and frag not in ids[target]:
                problems.append(f"{name}: no id #{frag} in {target}")
    return problems


def main() -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except AttributeError:
        pass
    template = read_text(TEMPLATE)
    copy_images()
    pages = {}
    for stem, out_name, _label in PAGES:
        page = build_page(stem, out_name, template)
        write_text(DOCS / out_name, page)
        pages[out_name] = page
        print(f"wrote docs/{out_name}  <- docs/content/{stem}.md")
    print("copied assets/images/ -> docs/assets/images/")
    for problem in check_links(pages):
        print(f"warning: {problem}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
