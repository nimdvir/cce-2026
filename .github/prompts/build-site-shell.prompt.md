---
mode: agent
description: Plan step 6. Create the page template, stylesheet, script, build script, and .nojekyll, then build and verify the four site pages. Run after sync-with-github.
---

Build the shell that turns the four Markdown pages in `docs/content/` into the public website served by GitHub Pages from `docs/`.

Read `AGENTS.md` first. The spec is Step 6 in `presentation/plan-claude.md` plus the "Global elements on every page" list at the top of `presentation/site-outline-claude.md`. The Markdown files are the source of truth; never hand-edit generated HTML. Before starting, confirm `git status` is clean and `assets/images/` contains the headshot and the screenshots (run `sync-with-github` first if not).

Facts about the content you are building for:

- The four files render correctly with the Python `markdown` package (version 3.10.3 is installed) and exactly these extensions: `toc`, `attr_list`, `fenced_code`, `tables`, `md_in_html`. `md_in_html` renders the Markdown inside the `<details markdown="1">` blocks on the Lecture and Examples pages. The explicit section ids such as `{#brain}` and the `{: .live-banner }` class depend on `attr_list`. Do not add or remove extensions without re-checking every page.
- `intro.md` becomes `index.html`; the other three keep their names.
- Image paths in the content are written relative to `docs/` (for example `assets/images/headshot2025-cloud.jpg`), but the image files live at the repository root under `assets/images/`.
- Fenced blocks tagged `text` are of two kinds: visuals (diagrams, trees, arrows) and prompts. The prompt blocks are the ones introduced by a "Prompt" label in the surrounding text; their contents match the files in `.github/prompts/`. Two of the prompt blocks on the Examples page sit inside a `<details>` block.
- The pages contain HTML comments that are TODO markers and the `LIVE BANNER` marker. They belong in the source, not in the published HTML.
- `assets/images/qr-site.png` does not exist yet. It is created in Step 7. Leave the reference in place and report it; do not invent a QR code.

Create these files and nothing else outside `docs/`:

1. `docs/build.py`. Python 3, standard library plus `markdown` only. For each `docs/content/*.md`: read, render with the five extensions above, take the page title from the first H1, inject into the template, and write `docs/<name>.html`. Strip HTML comments from the output. Copy `assets/images/` into `docs/assets/images/` on every build so the content's image paths resolve on GitHub Pages. Running it twice in a row must produce no diff.
2. `docs/template.html`. One shell with `{{title}}`, `{{nav}}`, and `{{content}}` placeholders. `lang="en"`, UTF-8, viewport meta. Sticky top nav with **Intro · Lecture · Explanation · Examples**, the current page highlighted by the build script, not by JavaScript. Footer with exactly this text: "AI Agents in VS Code for Academic Work · CCE 2026 · Nim Dvir", a link to `https://github.com/nimdvir/cce-2026`, and "Built with AI agents in VS Code."
3. `docs/assets/site.css`. Colors as tokens on `:root`, dark mode via `prefers-color-scheme` with an explicit `body` background, large readable type because sections will be projected, a comfortable maximum content width, 16px side gutters at phone width, and no horizontal page scroll anywhere. Contrast must stay readable in both modes. Specific styles:
   - `.live-banner` on the Intro page: a full-width banner that looks clearly different from everything else, because Demo 0 changes it live and the audience must notice.
   - Blockquotes: boxed, large. They are the key ideas and definitions.
   - Fenced `text` blocks: diagram style, monospace, centered, no scrollbar where the content fits.
   - Prompt blocks: retag their fences in `docs/content/*.md` from ```` ```text ```` to ```` ```prompt ```` without changing a character of the contents, and style `.language-prompt` as a copyable box: left-aligned, long lines wrap, with a Copy button.
   - The three-link list under the Short URL on the Intro page: buttons. The lines of `·`-separated links at the top of the Explanation and Examples pages: a sticky in-page section menu. Prefer `attr_list` class tags in the Markdown (`{: .buttons }`, `{: .section-menu }`); if they do not attach to the right element, handle it in `build.py`. The wording of the content must not change.
   - `<details>` / `<summary>`: a boxed, clearly clickable summary line; the open state must be obvious; the Copy button must work on prompt blocks inside a `<details>`.
   - Tables: scroll inside themselves on a phone rather than widening the page.
   - Images: never wider than the content; the headshot moderate; the QR large.
   - The **Next →** line at the bottom of each page: prominent.
4. `docs/assets/site.js`. Minimal and dependency-free: the Copy button for prompt blocks, and optionally a light/dark toggle. Every page must work with JavaScript disabled.
5. `docs/.nojekyll`, empty. Without it GitHub Pages runs Jekyll and publishes `docs/content/*.md` as a second set of broken pages.
6. Remove the placeholders `docs/README.md`, `docs/content/.gitkeep`, and `docs/assets/.gitkeep`, since real files now exist.

Constraints: no frameworks, no npm, no CDN, no fetched web fonts; the Python script is the only build tooling. Do not change the wording of any content file; the only edits allowed in `docs/content/` are the fence retags and the class tags described above. Do not commit or push; leave everything in the working tree for review.

Verify, then report what you checked, not only what you did:

- `python docs/build.py` runs twice with no diff the second time.
- `python -m http.server -d docs 8000` serves the site; open all four pages.
- The nav highlights the current page on every page.
- The four **Next →** links and every `explanation.html#...` link from the Lecture and Examples pages resolve to an existing id.
- The live banner is visibly distinct on the Intro page.
- The headshot loads; the QR reference is reported as the known missing file.
- No horizontal scroll at 375px width on any page, including pages with wide tables, trees, and long prompt boxes.
- Dark mode is readable on every page.
- The Copy button copies a prompt exactly.
- The generated HTML contains no HTML comments.
- `git status` shows only new files under `docs/`, the two removed placeholders, and the small fence and class edits in `docs/content/`.

End the report with what remains for Step 7: push, enable Pages from `main` and `/docs`, generate the QR for the final URL, and fill the short URL TODOs.
