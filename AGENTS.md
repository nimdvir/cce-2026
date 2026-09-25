# AGENTS.md — Standing instructions for this project

These rules apply to any AI agent (GitHub Copilot, Claude, Codex, or others) working in this repository. A prompt says "do this now." This file says "always work this way."

## What this project is

A conference presentation for the Cengage Computing Experience 2026 (CCE 2026):
**AI Agents in VS Code for Academic Work — From Prompting to Workflows** by Nim Dvir.

The project has three outputs that share one source of truth:

1. A public website on GitHub Pages, served from `docs/`.
2. A slide deck built on the Cengage template, in `presentation/`.
3. Live and recorded demos, using synthetic material in `live/`.

The website *is* part of the presentation. The plan is in `presentation/plan-claude.md`.

## Folder map

| Folder | Purpose | Agent may edit? |
|---|---|---|
| `presentation/` | Authoritative reference: session description, outlines, plans, prompts, slides | Yes, except the file marked read-only below |
| `docs/content/*.md` | **Source of truth for the website.** Four Markdown files: intro, lecture, explanation, examples | Yes |
| `docs/*.html` | Generated from `docs/content/` by `docs/build.py` | **No.** Edit the Markdown, then rebuild |
| `docs/assets/` | Stylesheet, script, QR image, slides PDF | Yes |
| `live/` | Synthetic demo fixtures (fake course, fake data, fake submissions) | Yes, during demos |
| `live/generated/` | Outputs produced during demos; only `expected/` is tracked | Yes |
| `assets/images/` | Headshot, QR code, diagrams, screenshots, short clips | Yes |
| `.github/prompts/` | Reusable prompt files | Yes |
| `.github/skills/` | Reusable skills (for example, grading) | Yes |

## Rules

1. **Do not invent facts.** Dates, names, policies, numbers, and links must come from files in this repository or from the user. If something is missing, say so and ask.
2. **Inspect before editing.** Read the relevant files and check `git status` before changing anything.
3. **`presentation/official-session-description.md` is read-only.** It preserves the wording submitted to Cengage. Quote it; never rewrite it.
4. **Never edit generated HTML by hand.** Change `docs/content/*.md`, then run `python docs/build.py`.
5. **Demo work goes in `live/`.** Do not touch the website or the reference files during a demo unless the task is explicitly about the website.
6. **Synthetic data only.** Nothing in this repository may contain real student names, grades, or any FERPA-sensitive material.
7. **Never commit secrets.** No API keys, tokens, or `.env` files. If you see one, stop and report it.
8. **Do not commit or push unless asked.** Leave changes in the working tree for review. When asked to commit, use a short imperative subject line.
9. **Keep it accessible.** Every image gets alt text. Keep color contrast readable in light and dark mode. Pages must work at phone width with no horizontal scroll.
10. **Keep it simple.** No frameworks, no build tooling beyond the Python script. Reject additions that do not sit under the five-part lecture structure: Brain, Infrastructure, Task, Workflow, Examples.
11. **Verify.** After a change, rebuild the site if content changed, open the result, and report what you checked, not just what you did.

## How to rebuild the website

```bash
python docs/build.py
python -m http.server -d docs 8000   # then open http://localhost:8000
```

## How to reset the demos

The clean demo state is tagged `demo-start` (created once the fixtures exist).

```bash
git checkout demo-start -- live/ docs/content/intro.md
git clean -fd live/
```

## Where prompts live

Every prompt used to build and demonstrate this project is a Copilot prompt file in `.github/prompts/`, one file each. `presentation/prompts.md` is the index of those files and does not repeat their text. Prompts shown in the session also appear verbatim on the website pages.
