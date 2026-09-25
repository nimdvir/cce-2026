# CCE 2026 — Presentation Website + Slides Plan (simplified)

## Context

Nim is presenting **"AI Agents in VS Code for Academic Work — From Prompting to Workflows"** at Cengage Computing Experience 2026: a 45-minute solo session for faculty with little technical background. The repo `nimdvir/cce-2026` holds the official description, summary and detailed outlines, saved prompts, the Cengage PPT template, a headshot, and `presentation/plan-gpt.md`, which this plan adopts as the canonical shape.

The website **is** part of the presentation. Attendees scan a QR code in minute one; the site carries the detail, the slides are visual signposts, and the site is the target of the opening live demo.

This is a 45-minute talk, not a production project. Anything that does not sit under **Brain → Infrastructure → Task → Workflow → Examples** gets cut.

## Decisions (confirmed by user)

| Topic | Decision |
|---|---|
| Length | 45 minutes |
| Site | **Four public pages** (Intro, Lecture, Explanation, Examples) with anchors inside Explanation |
| Content flow | Markdown is the source of truth → a **tiny Python build script** renders the four HTML pages. No frameworks, no npm. |
| Projector | Slides primary; switch to VS Code + site for demos |
| Slides | 18–22 content slides + Cengage housekeeping/survey/questions/thank-you |
| Live demos | Three live (this website, syllabus, data). Grading is **recorded**. One optional 60-second cameo (Claude *or* Codex). All other providers live on the site. |
| Assets | `assets/images/` only (headshot, logos, screenshots, QR, diagrams, GIF thumbnails). Add `assets/video/` only if needed. |

## Canonical lecture architecture

```text
🧠 THE BRAIN            Agents · Chat · Models · Tokens · Context
🖥️ THE INFRASTRUCTURE   Text Editor · VS Code · Repository · Git · GitHub · Copilot · Extensions
🎯 THE TASK             Goal · Context · Constraints
🔄 THE WORKFLOW         Ask · Plan · Agent · Review · Skills
🚀 THE EXAMPLES         Website · Syllabus · Course Site · Data · Grading
```

Two additions from my review that fit under the spine (no new headings):
- Under **Brain**, one bridge to the VS Code "five pillars" (harness, model, context, tools, prompt) so terminology matches Microsoft's docs. Source: the saved article `presentation/Introduction to agent-first development.html`.
- Under **Workflow**, the ladder Prompt → Reusable prompt → Project instructions → Skill → Workflow points at real files in this repo (`prompts.md`, `.github/prompts/*.prompt.md`, `AGENTS.md`, `.github/skills/*/SKILL.md`).

## Repository structure (target)

```text
cce-2026/
├── README.md
├── AGENTS.md
├── .gitignore
├── presentation/
│   ├── official-session-description.md      (read-only)
│   ├── lecture-outline-summary.md
│   ├── lecture-outline-detailed.md
│   ├── plan-gpt.md
│   ├── prompts.md
│   ├── cengage-template.pptx                (renamed from cce-2026-ppt-template-5087730_r1.pptx)
│   ├── slides-outline.md                    NEW
│   ├── run-of-show.md                       NEW (timing + fallbacks + reset command)
│   ├── build-log.md                         NEW (why each build session happened)
│   └── cce-2026-slides.pptx                 NEW
├── docs/
│   ├── content/  intro.md · lecture.md · explanation.md · examples.md
│   ├── template.html                        one shared page shell (nav, header, footer)
│   ├── build.py                             Markdown → HTML, ~60 lines, uses the installed `markdown` package
│   ├── index.html · lecture.html · explanation.html · examples.html   (generated)
│   ├── assets/  site.css · site.js · slides.pdf
│   └── .nojekyll
├── live/
│   ├── syllabus/   syllabus.md · schedule.md · policies.md · assignments.md
│   ├── data/       student-feedback.csv
│   ├── grading/    assignment.md · rubric.md · submissions/ ×3
│   └── generated/  outputs produced during demos (gitignored except expected/ fallbacks)
├── assets/images/  headshot · qr-site.png · diagrams · screenshots
└── .github/
    ├── prompts/    update-syllabus.prompt.md · analyze-feedback.prompt.md · grade-submission.prompt.md
    └── skills/     grade-submission/SKILL.md
```

The saved third-party VS Code article stays untracked (add to `.gitignore`) — it is reference only.

## Website (four pages)

| Page | File | Content |
|---|---|---|
| Intro | `index.html` | Title, subtitle, headshot, Nim / UAlbany / CCE 2026, large QR + short URL, buttons **Start the Lecture** · **Download Slides** · **GitHub Repository**, short About Me, opening line "This website is the presentation—and AI agents helped me build it." Plus one obviously editable line (e.g. a "Live from CCE" banner) for Demo 0. |
| Lecture | `lecture.html` | Five-part roadmap visual + learning outcomes. |
| Explanation | `explanation.html` | `#brain` · `#infrastructure` · `#setup` (account, GitHub Education, VS Code, clone, Copilot, extensions — the pre-session guide) · `#task` · `#workflow` · `#beyond` (models, other agents, APIs, MCP) · `#responsible-use`. Content lifted from the detailed outline, tightened. |
| Examples | `examples.html` | Examples 1–5 + gallery, each with the exact prompt, inputs in `live/`, expected output, and a clip/GIF slot; **Resources + contact + final QR at the bottom**. |

Build: `python docs/build.py` reads `docs/content/*.md`, wraps each in `template.html`, writes the four HTML files. Headings get stable ids so anchors work. Shared CSS: light/dark aware, phone-width friendly, readable at projector size. Recurring diagrams (five-part map, chat vs agent, Ask→Plan→Agent→Review, workflow loop, ladder, clone/commit/push, VS Code→Git→GitHub→Pages) as inline SVG or simple styled blocks. `.nojekyll` so Pages serves files as-is and Demo 0 round-trips in seconds.

## Slides (`presentation/cce-2026-slides.pptx`)

From the Cengage template (15 layouts: Event Title, Session Title, 1/2/3/4-column, 6 boxes, icon columns, Survey, Image). Keep the template's Housekeeping, Survey, Questions, Thank-you slides. ~20 content slides:

1. Session title · 2. About me + QR · 3. "This website is the presentation" · 4. Lecture map · 5. What is an agent · 6. Chat vs agent · 7. Ask / Plan / Agent · 8. Model · tokens · context (one slide) · 9. Five pillars bridge · 10. Text editor → VS Code workspace · 11. Repository · Git · GitHub · Pages (clone → commit → push) · 12. Copilot in the workspace · 13. Setup: one QR slide · 14. Goal + Context + Constraints · 15. Workflow loop mapped to Ask/Plan/Agent/You · 16. Prompt → Instructions → Skill → Workflow · 17. Demo card: syllabus · 18. Demo card: data · 19. Other brains + grading clip ("one submission = prompt, a hundred = workflow") · 20. Responsible use + what to try first · 21. Resources + QR.

Write `slides-outline.md` first (title, template layout, body, speaker notes per slide), then generate with python-pptx from the template. Export PDF to `docs/assets/slides.pdf` for the Download button.

## Demos

| Demo | Mode | Fixture | Fallback |
|---|---|---|---|
| 0 — This website | Live | edit the banner line in `docs/content/intro.md` → `build.py` → commit → push → audience refreshes | pre-pushed commit ready to cherry-pick |
| 1 — Syllabus | Live | `live/syllabus/` fake course with deliberately inconsistent dates; Plan → Agent → diff | `live/generated/expected/syllabus/` |
| 2 — Data | Live | `live/data/student-feedback.csv` (synthetic, ~200 rows, a few messy columns) → analysis → chart → add to site | `live/generated/expected/data/` + PNG chart |
| 3 — Grading | Recorded | `live/grading/` rubric + 3 fake submissions run through the skill | 20–30 s accelerated clip |
| Cameo | Optional, 60 s | same syllabus prompt in Claude or Codex (choose one; pre-signed-in) | skip, or 15 s clip |

Reset before any run: `git tag demo-start` on the clean state; `git checkout demo-start -- live/ docs/content/intro.md && git clean -fd live/`.

Synthetic data only. Nothing FERPA-adjacent on screen.

## 45-minute run of show (`presentation/run-of-show.md`)

| Time | Section |
|---:|---|
| 0–3 | Intro + QR + about me |
| 3–6 | **Demo 0:** show/modify the presentation website |
| 6–13 | 🧠 Brain |
| 13–19 | 🖥️ Infrastructure |
| 19–23 | 🎯 Task |
| 23–27 | 🔄 Workflow |
| 27–33 | **Demo 1:** syllabus |
| 33–38 | **Demo 2:** data analysis |
| 38–40 | Other agents/models + grading clip |
| 40–43 | Responsible use + what to try first |
| 43–45 | Resources / survey / questions |

## Recording and documentation

For each meaningful build session: start recording → do the work → save the important prompt to `prompts.md` → review → commit → stop recording → update `build-log.md`. Raw recordings stay out of git; trim useful parts into short MP4/GIF/screenshots under `assets/images/` (or `assets/video/` only if it grows).

## Step-by-step execution

Each step ends with a commit (message in brackets). Steps 1–6 are one working session; 7–10 are content; 11–14 are demos; 15–17 are slides and rehearsal. Nothing is pushed until Nim says so, except where a step explicitly needs GitHub Pages to update.

### Stage A — Repo foundation

**Step 1 — Clean up the presentation folder**
- Rename `presentation/cce-2026-ppt-template-5087730_r1.pptx` → `presentation/cengage-template.pptx`.
- Create `.gitignore` at the root with: `presentation/Introduction to agent-first development.html`, `~$*.pptx`, `.DS_Store`, `Thumbs.db`, `desktop.ini`, `.env`, `*.key`, `live/generated/*` (except `live/generated/expected/`), `*.mp4`, `*.mov`.
- Stage the template and `assets/images/headshot2025-cloud.jpg`.
- Commit: *Add Cengage template, headshot, and gitignore.*

**Step 2 — Create the folder skeleton**
- Create empty folders with a `.gitkeep` where needed:
  `docs/content/`, `docs/assets/`, `live/syllabus/`, `live/data/`, `live/grading/submissions/`, `live/generated/expected/`, `.github/prompts/`, `.github/skills/grade-submission/`.
- Delete `docs/README.md` and `live/README.md` placeholders once real content exists (keep `assets/README.md`).
- Commit: *Create project folder skeleton.*

**Step 3 — Write `AGENTS.md`**
- Sections: Project purpose · Folder map · Rules (don't invent facts; inspect before editing; `presentation/official-session-description.md` is read-only; demo work goes in `live/`; site source is `docs/content/*.md`, never edit generated HTML by hand; run `python docs/build.py` after editing content; never commit secrets or API keys; don't commit or push unless asked; keep alt text and contrast) · How to rebuild the site · How to reset demos.
- Commit: *Add AGENTS.md project instructions.*

**Step 4 — Rewrite `README.md`**
- Title, one-paragraph description, site URL placeholder, folder map, "how this repo was built" (agents + this plan), license line.
- Commit: *Expand README with project overview.*

### Stage B — Site scaffold

**Step 5 — Create the four Markdown source files**
- `docs/content/intro.md` — title block, About Me, opening line, buttons as links, the editable "Live from CCE" banner line.
- `docs/content/lecture.md` — roadmap + learning outcomes.
- `docs/content/explanation.md` — H2 sections in order: Brain, Infrastructure, Setup, Task, Workflow, Beyond Copilot, Responsible Use. Content lifted from `lecture-outline-detailed.md`, tightened; each H2 gets an explicit id (`{#brain}` etc.).
- `docs/content/examples.md` — Examples 1–5, gallery, Resources, Contact, QR placeholder.
- Commit: *Add Markdown source for the four site pages.*

**Step 6 — Build script, template, stylesheet**
- `docs/template.html` — one HTML shell with `{{title}}`, `{{nav}}`, `{{content}}` placeholders; sticky nav with the four pages; footer with repo link.
- `docs/assets/site.css` — CSS tokens on `:root`, dark mode via `prefers-color-scheme`, 16px gutter at phone width, large type for projector, styles for diagram blocks and buttons.
- `docs/assets/site.js` — minimal: active-nav highlight, optional theme toggle.
- `docs/build.py` — for each `content/*.md`: read → `markdown.markdown(text, extensions=["toc","attr_list","fenced_code","tables"])` → inject into template → write `docs/<page>.html` (`intro.md` → `index.html`).
- `docs/.nojekyll` (empty file).
- Run `python docs/build.py`; open with `python -m http.server -d docs`; check nav + anchors.
- Commit: *Add site template, stylesheet, and build script.*

**Step 7 — Publish and generate the QR**
- Push `main`. Enable Pages: Settings → Pages → Deploy from branch → `main` / `/docs` (or `gh api repos/nimdvir/cce-2026/pages -X POST -f "source[branch]=main" -f "source[path]=/docs"`). Confirm the URL loads.
- `pip install "qrcode[pil]"`; generate `assets/images/qr-site.png` for the final URL (or short URL once chosen); copy into `docs/assets/`.
- Replace the QR placeholder in `intro.md` and `examples.md`; rebuild.
- Commit: *Add site QR code and Pages URL.*

### Stage C — Content

**Step 8 — Intro and Lecture pages**
- Finish `intro.md` (headshot from `assets/images/`, buttons, About Me) and `lecture.md` (five-part map as inline SVG or styled blocks).
- Rebuild; check on a phone-width viewport.
- Commit: *Complete Intro and Lecture pages.*

**Step 9 — Explanation page**
- Fill all seven sections. Add the diagrams: chat vs agent, Ask→Plan→Agent→Review, model/tokens/context, five-pillars bridge, VS Code workspace, clone→commit→push, VS Code→Git→GitHub→Pages, Goal+Context+Constraints, workflow loop, the ladder.
- Setup section: numbered steps for GitHub account, GitHub Education, VS Code, clone (link to the saved prompt in `prompts.md`), Copilot, extensions; screenshot slots.
- Beyond section: model selection, Codex/Claude extensions, bring-your-own-key, APIs, MCP; each a short paragraph + link.
- Rebuild. Commit: *Complete Explanation page.*

**Step 10 — Examples page**
- For each example: inputs, exact prompt, what to watch for, expected output, clip slot. Resources list, contact, final QR.
- Rebuild. Commit: *Complete Examples page.*

### Stage D — Demos and reusable workflow files

**Step 11 — Synthetic demo fixtures in `live/`**
- `live/syllabus/`: fake course (e.g., "BITM 330 — Spring 2026") as `syllabus.md`, `schedule.md`, `policies.md`, `assignments.md`, with two or three deliberately inconsistent dates and a grading table that must not change.
- `live/data/student-feedback.csv`: ~200 synthetic rows (section, week, rating columns, free-text comment, a couple of blank or mistyped cells).
- `live/grading/`: `assignment.md`, `rubric.md`, three short fake submissions.
- Commit: *Add synthetic demo fixtures.*

**Step 12 — Prompt files and skill in `.github/`**
- Check current VS Code docs for prompt-file and skill locations; adjust paths if they changed.
- `.github/prompts/update-syllabus.prompt.md`, `analyze-feedback.prompt.md`, `grade-submission.prompt.md`.
- `.github/skills/grade-submission/SKILL.md`: procedure, rubric conventions, output format.
- Append each prompt to `presentation/prompts.md` for the website.
- Commit: *Add reusable prompt files and grading skill.* Then `git tag demo-start`.

**Step 13 — Run and time the live demos**
- From `demo-start`, run Demo 1 (syllabus, Plan → Agent → diff) and Demo 2 (data, CSV → chart → add to site) in Copilot. Time each.
- Save outputs to `live/generated/expected/syllabus/` and `live/generated/expected/data/`. Reset with `git checkout demo-start -- live/ docs/content/intro.md && git clean -fd live/`.
- Commit: *Add expected demo outputs.*

**Step 14 — Record the grading demo and cameo**
- Run the grading skill on the three submissions while screen-recording; trim to a 20–30 s clip. Record a 15 s Claude-or-Codex cameo as fallback.
- Store trimmed MP4/GIF under `assets/images/` (or `assets/video/` if more than a couple); reference from `examples.md`. Raw recordings stay out of git.
- Commit: *Add grading and cameo demo clips.*

### Stage E — Slides and rehearsal

**Step 15 — Slides outline**
- `presentation/slides-outline.md`: one block per slide — number, title, template layout name, body bullets, speaker notes. ~20 content slides per the list above.
- Commit: *Add slides outline.*

**Step 16 — Build the deck**
- Generate `presentation/cce-2026-slides.pptx` from `cengage-template.pptx` with python-pptx using the named layouts; keep Housekeeping, Survey, Questions, Thank-you slides.
- Export `docs/assets/slides.pdf`; wire the Download Slides button; rebuild site.
- Commit: *Add CCE 2026 slide deck and PDF.*

**Step 17 — Run of show and rehearsal**
- `presentation/run-of-show.md`: the 45-minute table, per-demo prompt, fallback path, reset command, pre-session checklist (Wi-Fi, signed in to Copilot and the cameo tool, `demo-start` restored, site pushed, offline copy of `docs/` open).
- `presentation/build-log.md`: dated entries for each build session.
- Full timed rehearsal; trim anything over budget; cut anything outside the five-part spine.
- Commit: *Add run of show and build log.*

## Verification

- `python docs/build.py` regenerates all four pages with no diff drift; `python -m http.server -d docs` → nav, anchors, and buttons resolve; no horizontal scroll at phone width; dark mode readable.
- Push → Pages URL serves within a minute; QR decodes to it; Demo 0 round-trip works end to end.
- From `demo-start`, each prompt file runs in Copilot within its time budget and matches `live/generated/expected/`.
- Deck opens in PowerPoint with Cengage branding, housekeeping/survey slides intact; PDF export matches.
- `git status` clean; no API keys or real student data anywhere.

## Open items (resolve during implementation)

- Confirm current Copilot file locations for prompt files and skills in VS Code docs before finalizing `.github/` paths.
- Short URL for the QR (nimdvir.com redirect vs. `nimdvir.github.io/cce-2026`).
- Which cameo (Claude or Codex) — pick the one already signed in on the presenting laptop.
