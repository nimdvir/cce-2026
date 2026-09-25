---
mode: agent
description: Write the four Markdown source files for the CCE 2026 website from the site outline, checking the other reference files for anything the outline missed.
---

Write the four Markdown source files for the CCE 2026 website in `docs/content/`:
`intro.md`, `lecture.md`, `explanation.md`, `examples.md`.

Primary spec: `presentation/site-outline-claude.md`. Follow its page order,
section order, headings, anchors, boxed quotes, visuals, and content rules
exactly. Every `####` heading in the outline becomes a section in the
corresponding file. Give each H2 in `explanation.md` an explicit id
(`brain`, `infrastructure`, `setup`, `task`, `workflow`, `beyond`, `responsible-use`).

Before writing, read these files and check whether they contribute anything
the outline does not already cover:

- `presentation/lecture-outline-detailed.md`
- `presentation/lecture-outline-summary.md`
- `presentation/plan-gpt.md`
- `presentation/official-session-description.md` (read-only; quote, never edit)
- `presentation/prompts.md`
- `presentation/plan-claude.md`
- `presentation/Introduction to agent-first development.html` (third-party
  VS Code article; use only for the five-pillars mapping and correct
  Copilot terminology)

For each of those files, decide one of three things:

1. Already covered by the outline: use the outline's wording.
2. Adds a useful detail, example, quote, or link that fits under an existing
   outline section: include it there, and note it in your final report.
3. Adds something that does not fit under Brain, Infrastructure, Task,
   Workflow, or Examples: leave it out, and list it in your final report
   so I can decide.

Do not add sections the outline does not have. Do not reorder it.

Writing rules:

- Audience is faculty with no technical background. Every section must read
  cold. One idea per paragraph. Short sentences.
- Where the outline gives a definition or boxed quote, use that wording
  verbatim; the slides will reuse it.
- Where the outline says "visual", write it as a fenced text block for now;
  the build step will style it later.
- Every prompt mentioned on the Examples page appears verbatim in a fenced
  block so it can be copied.
- Use real facts only from the files above. Where the outline leaves a
  placeholder (short URL, QR image, slides PDF, screenshots, clip slots,
  the "why agents" sentences in About Me, the model table's "last checked"
  date), keep a clearly marked TODO rather than inventing content.
- The model table in the Brain section: keep the families and the
  "what differs" list from the outline, omit version numbers, and add a
  "Last checked: TODO" line.
- End each page with a "Next →" link as specified in the outline.
- Do not create HTML, CSS, or the build script. Do not edit any file
  outside `docs/content/`. Do not commit or push.

When finished, report:

- the four files written and their approximate word counts
- which items from the other files were merged in, and where
- which items were left out, and why
- every TODO placeholder you left, by file and section
