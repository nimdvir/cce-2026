# AGENTS.md: standing instructions for this project

These rules apply to any AI agent (GitHub Copilot, Claude, Codex, or others) working in this repository. A prompt says "do this now." This file says "always work this way."

## What this project is

The public website and slides for a Cengage Computing Experience 2026 (CCE 2026) session:
**AI Agents in VS Code for Academic Work: From Prompting to Workflows** by Nim Dvir.

The website is the presentation. It is served by GitHub Pages from `docs/` on the `main` branch. This repository is public, so everything committed here is published.

## Folder map

| Folder | Purpose | Agent may edit? |
|---|---|---|
| `docs/content/*.md` | **Source of truth for the website.** Five Markdown files: intro, lecture, explanation, examples, about | Yes |
| `docs/*.html` | Generated from `docs/content/` by `docs/build.py` | **No.** Edit the Markdown, then rebuild |
| `docs/build.py`, `docs/template.html` | The build script and the shared page layout | Yes |
| `docs/assets/` | Stylesheets, script, images, slides PDF | Yes |
| `docs/examples/` | Four walkthroughs. Their `index.html` files are written by hand, not generated | Yes |
| `presentation/` | The slide deck, the official session description, the prompt index | Yes, except the file marked read-only below |
| `.github/prompts/` | Saved prompt files | Yes |

## Rules

1. **Do not invent facts.** Dates, names, policies, numbers, and links must come from files in this repository or from the user. If something is missing, say so and ask.
2. **Inspect before editing.** Read the relevant files and check `git status` before changing anything.
3. **`presentation/official-session-description.md` is read-only.** It preserves the wording submitted to Cengage. Quote it. Never rewrite it.
4. **Never edit generated HTML by hand.** Change `docs/content/*.md`, then run `python docs/build.py`. The walkthrough pages under `docs/examples/` are the exception: they are hand-written, so edit them directly.
5. **No raw student data.** Nothing here may contain student names, IDs, quoted responses, grades, or any FERPA-sensitive material. Aggregate counts with no identifiers are allowed. Raw exports, the scripts that read them, and original Word or PDF course documents stay out of the repository.
6. **Never commit secrets.** No API keys, tokens, or `.env` files. If you see one, stop and report it.
7. **Do not commit or push unless asked.** Leave changes in the working tree for review. When asked to commit, use a short imperative subject line.
8. **Keep it accessible.** Every image gets alt text. Keep color contrast readable in light and dark mode. Pages must work at phone width with no horizontal scroll.
9. **Keep it simple.** No frameworks, no build tooling beyond the Python script. Reject additions that do not sit under the five-part structure: Brain, Infrastructure, Task, Workflow, Examples.
10. **Write like a person.** Short plain sentences. No em dashes or en dashes anywhere, including comments and commit messages. Quoted prompts keep their original wording.
11. **Check before removing a file.** `docs/assets/site.js` loads `agent-theme.css` and `lecture-responsive.css` at runtime, so no `<link>` tag names them. Search the Markdown, HTML, CSS, and JS for a file name before deciding it is unused.
12. **Verify.** After a change, rebuild the site, open the result, and report what you checked, not just what you did.

## How to rebuild the website

```bash
pip install -r requirements.txt
python docs/build.py
python -m http.server -d docs 8000   # then open http://localhost:8000
```

`build.py` checks every local link, image, and anchor in the five pages and in the walkthroughs. It exits with an error if any are broken. Fix them before committing.

## Publishing from the working folder

Nim's working copy lives in a private Google Drive folder. Its `website/docs/` folder mirrors this repository's `docs/` folder. To publish:

1. Edit and build in the working folder until `python docs/build.py` passes.
2. Copy `website/docs/` over `docs/` here, skipping `desktop.ini`:

   ```powershell
   robocopy "<working folder>\website\docs" "docs" /E /XF desktop.ini
   ```

3. A plain copy does not delete files that were removed at the source. Run `git status` and remove any stray files yourself.
4. Run `python docs/build.py` here. Then check the staged list for anything that must not be public: `.csv`, `.docx`, source PDFs, `analyze.py`, recordings, `.env`.
5. Commit and push only when asked.

The slide generator, the Cengage template, the outlines, and the planning notes are kept in the working folder, not here.

## Where prompts live

Saved prompts are in `.github/prompts/`, one file each, and `presentation/prompts.md` is their index. Each walkthrough also keeps its own prompts in `docs/examples/<name>/prompts/`. Prompts shown on the website appear there word for word, so if you change a prompt file, change the matching block in `docs/content/` and rebuild.
