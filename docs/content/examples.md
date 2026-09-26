# Examples

Every demo from the session, with the exact prompt, the input files, what to watch for, and the result, so you can reproduce it later. Resources and contact are at the bottom.

[This website](#this-website) · [Syllabus](#syllabus) · [Course site](#course-site) · [Data](#data) · [Grading](#grading) · [More uses](#more-uses) · [What to try first](#try-first) · [Resources](#resources)
{: .section-menu }

Each example uses the same layout: **Inputs · Prompt (copyable) · Mode (Ask / Plan / Agent) · What to watch for · Output · Clip**.

## Example 1 — How I built this website (Demo 0, live) {#this-website}

```text
outlines + prompts + template → AGENT → this website
```

**The finished product:** the site you are reading.

**Inputs (source materials):** Cengage template · official session description · lecture outlines · saved prompts · headshot.

**Repository tree:**

```text
cce-2026/
├── presentation/   outlines, plans, prompts, slides
├── docs/           this website (Markdown source → HTML)
├── live/           demo material
├── assets/images/
├── AGENTS.md
└── README.md
```

**What is GitHub Pages?** GitHub can publish a folder of a repository as a public website, free, with no server to manage. This site lives in the `docs/` folder of the repository; GitHub Pages serves that folder.

```text
VS Code → Git → GitHub repository → GitHub Pages → this website
```

**Process:**

```text
Idea → GitHub repository → clone → VS Code → agent work → commit + push → GitHub Pages → website
```

This example has three prompts, in the order they were used. Each one is saved as a file in [`.github/prompts/`](https://github.com/nimdvir/cce-2026/tree/main/.github/prompts) so you can run it yourself.

**Prompt 1 (the clone step):** gets the repository onto a computer before any work starts. Saved as [`clone-repository.prompt.md`](https://github.com/nimdvir/cce-2026/blob/main/.github/prompts/clone-repository.prompt.md).

<details markdown="1">
<summary>View the full prompt</summary>

```prompt
I want to work locally on the CCE 2026 repository:

https://github.com/nimdvir/cce-2026

Clone it into my normal local GitHub workspace as `cce-2026` if it is not already present.

If the repository already exists locally, **do not overwrite or discard any local work**. First inspect the repository and run `git status`. If there are uncommitted changes, stop and tell me what you found before pulling anything. If the working tree is clean, fetch from `origin` and update the local `main` branch using a safe fast-forward-only pull.

Verify before finishing:
- the remote `origin` points to `https://github.com/nimdvir/cce-2026`
- the current branch is `main`
- the local branch is up to date with `origin/main`
- the repository opens correctly as the VS Code workspace

Do not create, edit, delete, commit, or push project files yet. This task is only to get the repository safely available locally and ready for work.

When finished, report the local folder path, current branch, Git status, and whether it is synchronized with GitHub.
```

</details>

**Prompt 2 (writing the pages):** the prompt that produced the four Markdown pages you are reading. It was given the site outline and the other planning files in `presentation/`. Saved as [`write-site-content.prompt.md`](https://github.com/nimdvir/cce-2026/blob/main/.github/prompts/write-site-content.prompt.md).

<details markdown="1">
<summary>View the full prompt</summary>

```prompt
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
```

</details>

Notice the shape: one goal, one authoritative source, a list of other sources with a rule for each, explicit boundaries, and a report to check the work against. That is Part III's checklist in practice.

**Prompt 3 (the live moment):** edits the banner on the Intro page, then commits and pushes. Saved as [`update-live-banner.prompt.md`](https://github.com/nimdvir/cce-2026/blob/main/.github/prompts/update-live-banner.prompt.md).

<!-- TODO: drafted, not yet run. Confirm the wording before the session. -->
```prompt
In docs/content/intro.md, find the line marked LIVE BANNER and replace the text after the red dot with a short greeting to the CCE 2026 audience. Keep it one line. Rebuild the site with python docs/build.py, then commit with the message "Update live banner" and push to main.
```

**Mode:** Agent.

**What to watch for:** the agent edits one Markdown file, rebuilds the HTML, commits, and pushes. Then everyone refreshes the Intro page.

**Output:** a changed line on the [Intro page](index.html).

**Clip:** <!-- TODO clip slot: Demo 0 recording -->

**Lesson:** content lives in Markdown; a small script renders it; Git and Pages publish it. Nothing here needed a web developer.

**Take it with you.** This repository is the example. The text of every page is in [`docs/content/`](https://github.com/nimdvir/cce-2026/tree/main/docs/content) as plain Markdown. Every prompt used to build it and to run the demos is a file in [`.github/prompts/`](https://github.com/nimdvir/cce-2026/tree/main/.github/prompts), indexed in [`presentation/prompts.md`](https://github.com/nimdvir/cce-2026/blob/main/presentation/prompts.md). The standing rules the agents followed are in [`AGENTS.md`](https://github.com/nimdvir/cce-2026/blob/main/AGENTS.md). Clone or fork the repository, open it in VS Code, and use it as the starting point for your own project.

## Example 2 — Update a syllabus (Demo 1, live) {#syllabus}

```text
4 course files with inconsistent dates → AGENT → updated files + flagged decisions
```

**Inputs:** `live/syllabus/` — syllabus, schedule, policies, and assignments for a fictional course, with a few deliberately inconsistent dates.

**Prompt:** saved as [`update-syllabus.prompt.md`](https://github.com/nimdvir/cce-2026/blob/main/.github/prompts/update-syllabus.prompt.md). In Copilot Chat, type `/update-syllabus`.

```prompt
The course files are in live/syllabus/.

Update the course for Spring 2027 without changing grading weights. Identify inconsistent dates and flag anything requiring judgment.
```

**Mode:** Plan first, then Agent.

**What to watch for:** the agent reads all four files, proposes changes, edits several files, and the diff shows exactly what moved.

**Output:** updated files plus a short list of flagged items. A reference copy of the expected result is kept in `live/generated/expected/syllabus/`.

**Clip:** <!-- TODO clip slot: Demo 1 recording -->

## Example 3 — Turn a syllabus into an interactive course website {#course-site}

```text
syllabus + schedule + policies + assignments → AGENT → six-page course website
```

**Inputs:** the same course material as Example 2.

**Prompt:** saved as [`build-course-site.prompt.md`](https://github.com/nimdvir/cce-2026/blob/main/.github/prompts/build-course-site.prompt.md). In Copilot Chat, type `/build-course-site`.

<!-- TODO: drafted, not yet run. Confirm the wording before the session. -->
```prompt
Using only the files in live/syllabus/, build a simple course website in live/generated/course-site/ with these pages: homepage, weekly schedule, assignments, grading, policies, and resources. Plain HTML and CSS, no frameworks. Do not invent any dates, policies, or grading weights that are not in the source files. Make it readable on a phone.
```

**Mode:** Agent.

**What to watch for:** one set of source files becomes six linked pages, and nothing on those pages is new information.

**Output:** homepage · weekly schedule · assignments · grading · policies · resources.

**Clip:** shown as screenshots or a short clip, not live. <!-- TODO clip slot: Example 3 screenshots or recording -->

**Lesson:** one set of source information can support multiple outputs.

## Example 4 — Data analysis (Demo 2, live) {#data}

```text
student-feedback.csv → AGENT → chart + interpretation
```

**Input:** `live/data/student-feedback.csv` (synthetic).

**Workflow:**

```text
CSV → Inspect → Analyze → Visualize → Interpret → Publish
```

**Prompt:** saved as [`analyze-feedback.prompt.md`](https://github.com/nimdvir/cce-2026/blob/main/.github/prompts/analyze-feedback.prompt.md). In Copilot Chat, type `/analyze-feedback`.

```prompt
The file is live/data/student-feedback.csv.

Inspect this feedback file, summarize the main patterns by section and week, create one clear chart, and write a short interpretation. Do not invent data.
```

**Mode:** Agent.

**What to watch for:** the agent looks at the columns before analyzing; runs Python; produces a chart; writes an interpretation; adds it to a report page.

**Output:** chart image + summary. A reference copy of the expected result is kept in `live/generated/expected/data/`.

**Clip:** <!-- TODO clip slot: Demo 2 recording -->

## Example 5 — Grading and repetitive work (recorded) {#grading}

```text
rubric + 3 submissions → AGENT → one structured result per submission
```

**Inputs:** `live/grading/` — assignment, rubric, three synthetic submissions.

**Workflow:**

```text
inspect submission → apply rubric → identify evidence → calculate score → draft feedback → output structured results
```

**The skill:** [`.github/skills/grade-submission/SKILL.md`](https://github.com/nimdvir/cce-2026/blob/main/.github/skills/grade-submission/SKILL.md). It standardizes the procedure, the rubric conventions, and the output format, so every submission is graded the same way.

**Prompt:** saved as [`grade-submission.prompt.md`](https://github.com/nimdvir/cce-2026/blob/main/.github/prompts/grade-submission.prompt.md). In Copilot Chat, type `/grade-submission`.

<!-- TODO: drafted, not yet run. Confirm the wording once the skill exists. -->
```prompt
Use the grade-submission skill. Grade every file in live/grading/submissions/ against live/grading/rubric.md for the assignment in live/grading/assignment.md. For each submission, write the score, the rubric evidence, and draft feedback to live/generated/grading/. Do not change the rubric.
```

**Mode:** Agent.

**What to watch for:** the same steps repeat for each submission, and the output has the same structure every time.

**Output:** one structured result per submission.

**Clip:** 20–30 second accelerated recording. <!-- TODO clip slot: grading recording -->

> **One submission can be a prompt. A hundred submissions require a workflow.**

Doing it once is a prompt. Doing it reliably every semester is a workflow.

## Example 6 — Other academic uses {#more-uses}

No demos here, just a gallery of where the same approach applies.

- **Course redesign** — restructure a course from its existing files.
- **Lecture materials** — draft slides and handouts from notes.
- **Research coding** — apply a codebook to interview transcripts.
- **Literature organization** — sort and summarize a folder of papers.
- **Document conversion** — Word to Markdown, Markdown to PDF.
- **Data cleaning** — fix headers, blanks, and mistyped cells.
- **Website maintenance** — update dates and links across a course site.
- **Administrative tasks** — reports and forms from the same source files.
- **Repetitive file processing** — the same change across many files.
- **Documentation** — write up how a project works.

## What should you try first? {#try-first}

1. Open a real project folder in VS Code.
2. Ask Copilot to inspect it.
3. Give it a multi-file task.
4. Create an `AGENTS.md`.
5. Turn something repetitive into a reusable workflow.

## Resources {#resources}

**Downloads**

- Slides (PDF): [assets/slides.pdf](assets/slides.pdf) <!-- TODO: file does not exist yet -->
- This repository: [github.com/nimdvir/cce-2026](https://github.com/nimdvir/cce-2026)
- Saved prompts: [.github/prompts/](https://github.com/nimdvir/cce-2026/tree/main/.github/prompts), one file per prompt, with an index in [presentation/prompts.md](https://github.com/nimdvir/cce-2026/blob/main/presentation/prompts.md)
- Example files: [live/](https://github.com/nimdvir/cce-2026/tree/main/live)
- Setup guide: [Setup](explanation.html#setup)

**GitHub**

- GitHub Education: TODO <!-- TODO: URL not in the repository files -->
- GitHub Copilot setup: [Set up GitHub Copilot in VS Code](https://code.visualstudio.com/docs/setup/copilot)
- VS Code download: [code.visualstudio.com/download](https://code.visualstudio.com/download)
- Copilot documentation: [Copilot Chat overview](https://code.visualstudio.com/docs/chat/chat-overview)
- VS Code agent guides: [Introduction to agent-first development](https://code.visualstudio.com/learn/foundations/introduction-to-agent-first-development) · [Reviewing and controlling agent changes](https://code.visualstudio.com/learn/foundations/reviewing-and-controlling-agent-changes) · [Using tools with agents](https://code.visualstudio.com/learn/agents/1-using-tools-with-agents)

**Beyond Copilot**

- Model documentation: [Changing the AI model for Copilot Chat](https://docs.github.com/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat)
- Claude: TODO <!-- TODO: URL not in the repository files -->
- Codex: TODO <!-- TODO: URL not in the repository files -->
- Other agents in VS Code: [Using third-party agents in VS Code](https://code.visualstudio.com/learn/agents/4-using-third-party-agents-in-vs-code)
- APIs: TODO <!-- TODO: URL not in the repository files -->
- MCP: [Extending agents with MCP servers](https://code.visualstudio.com/learn/agents/2-extending-agents-with-mcp-servers)
- Extensions: [Agent plugins](https://code.visualstudio.com/learn/agents/3-agent-plugins)

**Media**

- Demo recordings, clips, and screenshots will be added here as they are produced. <!-- TODO: media list -->

## Contact

Nim Dvir · University at Albany · [nimdvir.com](https://nimdvir.com) · [LinkedIn](https://linkedin.com/in/nimdvir/) · [GitHub](https://github.com/nimdvir)

![QR code linking to this website](assets/images/qr-site.png)
<!-- TODO: same QR image as the Intro page; generate once the site URL is final -->

**Short URL:** TODO <!-- TODO: short URL not chosen yet -->

---

**Next →** [Back to the start](index.html)
