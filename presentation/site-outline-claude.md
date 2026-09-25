# CCE 2026 — Website Outline (page by page)

> Source material: `lecture-outline-detailed.md`, `plan-gpt.md`, `official-session-description.md`.
> This outline is the spec for the four Markdown files in `docs/content/`, which `docs/build.py` renders into the four public pages.

## Site map

| # | Page | File | URL | Role |
|---|---|---|---|---|
| 1 | Intro | `docs/content/intro.md` → `index.html` | `/` | Title screen. What attendees see when they scan the QR. |
| 2 | Lecture | `lecture.md` → `lecture.html` | `/lecture.html` | What we are doing today and what you will leave with. |
| 3 | Explanation | `explanation.md` → `explanation.html` | `/explanation.html#brain` … | The concepts. One long page, seven anchored sections. |
| 4 | Examples | `examples.md` → `examples.html` | `/examples.html` | The demos, the prompts, the files, and the resources. |

**Global elements on every page**

- Sticky top nav: **Intro · Lecture · Explanation · Examples**. Current page highlighted.
- Footer: "AI Agents in VS Code for Academic Work · CCE 2026 · Nim Dvir" · GitHub repository link · "Built with AI agents in VS Code."
- Every page ends with a **Next →** link to the following page (Examples loops back to Intro).
- Light and dark mode. Phone-width friendly. Large type so a section can be projected during demos.
- Recurring diagrams are inline SVG or styled text blocks, never screenshots of text.

---

## Page 1 — Intro (`index.html`)

**Purpose:** the first thing on the phone after the QR scan, and the first thing on the projector. Must load fast and say what this is in one screen.

### 1.1 Hero

- Title: **AI Agents in VS Code for Academic Work**
- Subtitle: *From Prompting to Workflows*
- Presenter line: **Nim Dvir, PhD, MBA** · University at Albany, Massry School of Business
- Event line: Cengage Computing Experience 2026 · Trends and Emerging Technologies in Computing Education
- Headshot: `assets/images/headshot2025-cloud.jpg` (alt: "Nim Dvir")
- Large QR code linking to this site (`assets/images/qr-site.png`) with the short URL printed beneath it
- Three buttons:
  - **Start the Lecture** → `lecture.html`
  - **Download Slides** → `assets/slides.pdf`
  - **GitHub Repository** → `https://github.com/nimdvir/cce-2026`

### 1.2 Live banner (Demo 0 target)

A single, visibly editable line under the hero, styled as a banner:

> 🔴 Live from CCE 2026 — *this line will change during the session.*

This is the line the agent edits in the opening demo. It must be easy to find in `intro.md` and obvious on screen when it changes.

### 1.3 Opening idea

Pull quote, large:

> **This website is the presentation — and AI agents helped me build it.**

One short paragraph: during the session you will see how it was built, how agents work on academic tasks, and you will watch part of this site change live.

### 1.4 About me (brief and visual)

Four short cards or one compact row:

- **Teaching:** databases, SQL, programming, analytics, information systems, responsible AI use
- **Research:** artificial intelligence, human-computer interaction, user experience, business analytics
- **Building:** courseware, course websites, a database and MIS textbook, academic workflows
- **Why agents:** one or two sentences, in Nim's own words, on how agents moved from a novelty to a daily tool for course design, writing, and analysis

Links: nimdvir.com · linkedin.com/in/nimdvir · albany.edu/business/faculty/nim-dvir

### 1.5 Next →

"Start the lecture" → `lecture.html`

---

## Page 2 — Lecture (`lecture.html`)

**Purpose:** the roadmap. Shown once near the start, and it is what an attendee returns to when they want the big picture.

### 2.1 What are we doing today?

Intro sentence: this session moves from *what an agent is* to *how to work with one reliably*, in five parts.

The five-part map (the recurring visual of the whole site):

```text
🧠 THE BRAIN            Agents · Chat · Models · Tokens · Context
        ↓
🖥️ THE INFRASTRUCTURE   Text Editor · VS Code · Repository · Git · GitHub · Copilot
        ↓
🎯 THE TASK             Goal · Context · Constraints
        ↓
🔄 THE WORKFLOW         Ask · Plan · Agent · Review · Skills
        ↓
🚀 THE EXAMPLES         Website · Syllabus · Course Site · Data · Grading
```

Each part is a link to its anchor on the Explanation page (Examples links to the Examples page).

### 2.2 The five parts, one paragraph each

- **Part 1 — The Brain.** What makes an agent intelligent? Agents, chat versus agents, where models and agents run, GitHub Copilot, what agents can do, models and which ones exist, tokens, context.
- **Part 2 — The Infrastructure.** Where does the agent work? Text editors, VS Code, local and synced folders, which files, repositories, Git, GitHub, extensions, GitHub Education.
- **Part 3 — The Task.** How do we tell an agent what we want? Goals, context, constraints, source files, good instructions.
- **Part 4 — The Workflow.** How do we work with agents repeatedly and reliably? Ask, Plan, Agent, review, verification, workspaces, `AGENTS.md`, prompts, skills, workflows.
- **Part 5 — The Examples.** What can this do for academic work? This website, syllabus revision, syllabus to course site, data analysis, grading and repetitive work.

### 2.3 Learning outcomes

By the end, you should be able to explain:

- what an AI agent is, and how it differs from a normal AI chat
- what models, tokens, and context mean
- what a repository is, and how VS Code, Git, GitHub, and Copilot fit together
- how to set up the basic environment
- how to give an agent a useful task
- how Ask, Plan, and Agent modes differ
- how to review an agent's work
- how project instructions and skills turn one-off prompts into repeatable workflows
- how agents can support real academic tasks

### 2.4 How to use this site during the session

Three lines: follow along on your phone; every section has its own link; the Examples page has the exact prompts and files so you can try them later.

### 2.5 Next →

"Part 1: The Brain" → `explanation.html#brain`

---

## Page 3 — Explanation (`explanation.html`)

**Purpose:** the conceptual teaching page. One long page with a sticky in-page section menu, seven anchored sections. Written from zero for faculty with no technical background. Each section opens with one sentence on why it matters for academic work.

In-page menu: **Brain · Infrastructure · Setup · Task · Workflow · Beyond Copilot · Responsible Use**

### 3.1 `#brain` — Part I: 🧠 The Brain

**Why it matters:** you cannot direct something well if you do not know what is doing the thinking.

#### Introduction: the key elements in one sentence each

A short glossary card at the top of the section, so the terms are familiar before they are explained:

- **Agent** — AI that works toward a goal in steps, using tools, instead of only answering.
- **Chat** — the conversation window you type into; it is the interface, not the agent.
- **Model** — the AI "brain" that reasons and writes; agents are built around one.
- **Tokens** — the small pieces of text a model reads and writes; they set limits and cost.
- **Context** — everything the model can see right now: your prompt, the conversation, files, instructions, results.
- **Tools** — the actions an agent can take: read, search, edit, run, fetch.
- **GitHub Copilot** — the AI layer inside VS Code that we use today to run agents on our own files.

One line: the rest of Part I explains each of these, in this order.

#### What is an AI agent?

Definition, large:

> An AI agent uses a model, context, instructions, and tools to work toward a goal through multiple steps.

Simple process visual: **Goal → Inspect → Plan → Act → Check → Revise**

Bullets: agents do more than generate an answer; they can inspect their environment, take actions, work through several steps, evaluate results, and continue.

#### Chat vs. agent

Side-by-side visual:

```text
CHAT                                    AGENT
You ask → AI answers → You do the work  You give a goal → AI examines → plans → acts → checks
```

Chat: conversational; excellent for questions, writing, brainstorming; you carry the output back into your work and coordinate the steps yourself.
Agent: you give a goal; the agent may inspect files, search, create and edit files, run commands, analyze data, use tools, inspect results, and correct itself.

Key distinction, boxed:

> **Chat is the interface. An agent is a way the AI can operate.**

#### Where can you run models and agents?

The same model can be reached from many places. Simple list, each with one line:

- **A website chat** — ChatGPT, Claude, Copilot on the web. You bring the material to the AI.
- **An app** — desktop or mobile chat apps. Same idea, closer to your files.
- **Inside a tool you already use** — Word, Excel, a browser, an email client.
- **Through an API** — one program calling a model from another (more in Beyond Copilot).
- **Locally, on your own computer, inside your project** — the AI works where your files are.

Boxed, the choice for this session:

> **In this session we run agents locally, inside a text editor, with GitHub Copilot.** There are many other ways; this one puts the agent next to your files, where it can read them, edit them, and run commands on your machine. The editor itself is explained in Part II.

#### What is GitHub Copilot?

The AI layer inside the VS Code workspace. One sentence each:

- **Copilot Chat** — the conversation panel where you talk to the agent.
- **Code suggestions** — inline completions while you type (useful, but not the focus today).
- **Ask, Plan, Agent** — three modes of the same chat panel, explained next.
- **Model selection** — pick which model does the thinking.
- **Tools** — the actions the agent can take in your workspace.
- **Project context** — the agent can see your files and instructions.

Visual: **VS Code + Your Files + Copilot = Agentic Workspace**

Note: Copilot is free for verified faculty and students through GitHub Education (see Setup).

#### Copilot Chat: Ask, Plan, Agent

Three columns:

- **Ask** — understand, explain, answer questions, explore possibilities, troubleshoot conceptually. No edits, no commands.
- **Plan** — inspect the problem, understand the project, propose a sequence of changes, identify affected files, wait for your approval.
- **Agent** — create and edit files, run commands, use tools, perform multi-step work, verify and iterate.

Recurring visual: **ASK → PLAN → AGENT → REVIEW**. Note: "You will see this again in every demo."

#### What can an agent do?

Two lists side by side.

Can: read one or many files · search a workspace · write and edit · create websites · run Python · analyze CSVs · generate visualizations · call APIs · use external tools · work with Git · test output · detect errors and revise.

Cannot be assumed to do correctly: know facts it was not given · interpret ambiguous requirements every time · decide what matters pedagogically without guidance · replace human review.

#### What is a model?

Boxed contrast:

```text
MODEL = the reasoning and generation engine
AGENT = model + context + instructions + tools + actions
```

Models differ in reasoning ability, speed, coding strength, multimodal support, context capacity, and cost.

#### Which models are out there?

A table of the main model families, kept short and marked with the date it was last checked (verify names and versions when building the page; they change every few months).

| Family | Maker | Where from | Notes |
|---|---|---|---|
| GPT | OpenAI | US | Default in ChatGPT and in many Copilot plans; strong all-rounder |
| Claude | Anthropic | US | Strong at long documents, writing, and agentic coding; the "Claude" cameo in this session |
| Gemini | Google | US | Very large context, strong multimodal; built into Google Workspace |
| Llama | Meta | US | Open weights; you can download and run it yourself |
| Mistral | Mistral AI | France | Open and hosted models; popular in Europe |
| Grok | xAI | US | Tied to X; available by API |
| DeepSeek | DeepSeek | China | Open weights; very low cost; strong reasoning models |
| Qwen | Alibaba | China | Open weights, many sizes, strong coding; widely used locally |
| Kimi | Moonshot AI | China | Long context, agentic use |
| GLM | Zhipu AI | China | Open weights, strong coding |
| MiMo | Xiaomi | China | Open weights, reasoning-focused |

What actually differs between them, in plain words:

- **Open weights vs. closed.** Open-weight models (Llama, DeepSeek, Qwen, GLM, MiMo) can be downloaded and run on your own hardware or a university server. Closed models (GPT, Claude, Gemini) are used through the maker's service.
- **Where your data goes.** A closed model sends your text to the provider's servers; a local open-weight model keeps it on your machine. This matters for student data and unpublished research.
- **Reasoning vs. speed.** Some models "think" longer and are better at multi-step tasks; others answer fast and cheaply. Many families offer both.
- **Context size.** How much material fits in one conversation.
- **Cost.** From free (local) to premium (largest closed models). Chinese open-weight models pushed prices down sharply.
- **Availability inside Copilot.** Copilot's model picker offers a subset (GPT, Claude, Gemini, and others); other models can be used with your own API key or a local runner such as Ollama (see Beyond Copilot).

Takeaway, boxed:

> **Models are interchangeable brains. The workflow you learn today does not depend on which one you pick.**

#### What are tokens?

Plain explanation: models process text in units called tokens; tokens are not exactly words; the prompt, the documents, the conversation history, and the output all use tokens.

Why faculty should care: context limits · long documents · API pricing · unnecessary context · efficiency.

#### What is context?

Visual:

```text
Prompt + Conversation + Files + Instructions + Tool results = CONTEXT
```

Bullets: the agent can only reason from what it can see; relevant context matters more than an elaborate prompt; project files provide persistent context; good project organization makes agents more useful.

Key idea, boxed:

> **Don't keep explaining the project. Put the project where the agent can understand it.**

#### The five pillars (bridge to the VS Code docs)

Short table mapping this lecture's words to the terms in VS Code's own guide:

| This lecture | VS Code docs | What it is |
|---|---|---|
| The Brain | Model | the AI that reasons and generates |
| The Infrastructure | Harness + Tools | Copilot Chat in VS Code, plus the actions it can take (read, edit, run, search) |
| The Task | Prompt + Context | what you ask, plus what the agent can see |

Link: "Introduction to agent-first development" on code.visualstudio.com.

### 3.2 `#infrastructure` — Part II: 🖥️ The Infrastructure

**Why it matters:** an agent works on files in a project. The tools in this section are how you give it a project.

#### What is a text editor?

From zero. Examples: Notepad, VS Code. Unlike Word, a text editor edits plain-text files directly and does not hide structure inside a document format.

Text-based file types: `.txt` `.md` `.html` `.css` `.js` `.py` `.json` `.csv`

Why it matters for agents: agents can inspect and directly modify these files.

#### What is VS Code?

> **A text editor that has evolved into a complete project workspace.**

Visual block: **VS CODE** = Files · Editor · Terminal · Git · Extensions · AI Agents

Emphasis: you do not need to become a software engineer. VS Code is useful because most academic work can be represented as files in a project.

#### Where do the files live?

- **A local folder** — the normal case. You open a folder on your computer and VS Code treats it as the project. The agent reads and writes inside that folder.
- **A synced cloud folder** — a OneDrive, Google Drive, or Dropbox folder works the same way, because it is still a folder on your computer that happens to sync. Useful for keeping course material in one place; watch out for sync conflicts while an agent is editing.
- **A repository** — a folder whose history Git tracks and GitHub backs up. This is what the rest of this section is about.

#### What files can it work on?

Short answer: **all of them.** VS Code opens any file, and an agent can read most formats, including PDF, Word, and Excel.

Preferred answer: **simple text.** Plain-text files (`.md`, `.txt`, `.csv`, `.html`, `.py`) are the ones an agent can inspect, edit precisely, and Git can track line by line. A Word document is a sealed box; a Markdown file is an open page.

Rule of thumb, boxed:

> **If you can, keep the source in plain text. Export to Word or PDF at the end.**

#### What is a repository?

> **A repository is a project folder whose files and history are tracked with Git.**

Local repository (on your computer) vs. remote repository (on GitHub).

What a repository can contain: documents, data, code, websites, instructions, media, and the project's history.

Example tree:

```text
course-project/
├── syllabus.md
├── assignments/
├── data/
├── website/
└── AGENTS.md
```

#### What is Git?

Practical: records changes · compares versions · restores earlier versions · makes agent changes safer.

> **When an agent can change many files, version control becomes especially valuable.**

#### What is GitHub?

Hosts repositories online · synchronizes projects · supports collaboration · stores history · integrates with Copilot · publishes websites.

#### Clone: GitHub → VS Code

Visual:

```text
GitHub repository
      ↓ clone
Local repository in VS Code
      ↓ edit / agent work
     Git
      ↓ commit + push
GitHub repository
```

Explain clone, commit, push in one sentence each. Link to the saved clone prompt in `prompts.md` (and on the Examples page).

One line pointing forward: GitHub can also publish a repository as a website (GitHub Pages). This site is the example, explained on the Examples page.

#### Copilot in the workspace

One-line reminder: GitHub Copilot was introduced in Part I. Here it is simply the AI layer of the workspace, installed as an extension (next).

#### What are extensions?

> **Extensions are apps for VS Code. VS Code is the platform; extensions are the apps.**

Examples: GitHub Copilot · Python · Markdown tools · database tools · visualization tools · other AI assistants (Claude, Codex).

### 3.3 `#setup` — Setup guide (do this before or after the session)

**Why it matters:** everything in the demos runs on this setup. It takes about twenty minutes, and most of it is free for faculty and students.

Numbered, each with a link, a screenshot slot, and a "you are done when…" line:

1. **Create a GitHub account** — account, two-factor authentication, profile. Done when you can sign in at github.com.
2. **Apply for GitHub Education** — faculty/teacher verification, student verification, what the benefits include, Copilot eligibility, where to apply. Done when your application is approved.
3. **Install VS Code** — download, install, launch. Done when VS Code opens.
4. **Sign in to GitHub from VS Code** — Accounts menu. Done when your GitHub name shows in the corner.
5. **Clone a repository** — create or locate one on GitHub, clone it into VS Code. Use `https://github.com/nimdvir/cce-2026` as the example. Done when the folder opens as a workspace.
6. **Enable GitHub Copilot** — install/enable, sign in, open Copilot Chat, find Ask / Plan / Agent, pick a model. Done when Copilot Chat answers a question.
7. **Add extensions as needed** — Python, Markdown, database tools.

Closing line: "Key repository workflow: GitHub repository → clone → work in VS Code → commit → push."

### 3.4 `#task` — Part III: 🎯 The Task

**Why it matters:** the quality of what you get back depends mostly on what you asked for and what you gave the agent to work with.

#### What makes a good agent task?

Formula, large:

```text
GOAL + CONTEXT + CONSTRAINTS = TASK
```

- **Goal** — what outcome do you want? Bad: "Fix my course." Better: "Update this syllabus and schedule for Spring 2027."
- **Context** — what does the agent need? Syllabus, schedule, policy files, screenshots, URLs, CSVs, an existing site, reference documents.
- **Constraints** — what must it preserve or avoid? Do not change grading weights · do not invent missing dates · preserve the existing design · do not commit · flag uncertainty · use only supplied data.

Worked example, boxed:

> **Goal:** Update my syllabus for Spring 2027.
> **Context:** Here are the syllabus, schedule, and assignments.
> **Constraints:** Don't change grading weights; flag anything uncertain.

#### Prompting agents

Checklist: be explicit about outcomes · provide the source files · name the authoritative source · state boundaries · tell the agent when to ask · tell it to inspect before editing · ask it to verify afterward.

#### Context instead of giant prompts

Two columns. **Giant prompt:** re-explains the course, policies, preferences, and conventions every time. **Project context:** those things already live in source files, `README`, `AGENTS.md`, and the workspace structure.

> **Move knowledge from the prompt into the workspace.**

### 3.5 `#workflow` — Part IV: 🔄 The Workflow

**Why it matters:** one good result is luck. A repeatable result is a workflow.

#### A reliable agent workflow

Main visual: **UNDERSTAND → PLAN → ACT → REVIEW → VERIFY → REPEAT**

Mapped to Copilot: **Ask** → understand · **Plan** → decide how · **Agent** → execute · **You** → review and verify.

#### Reviewing agent work

What to inspect: files changed · diffs · terminal output · generated output · previews · tests · Git status.

> **"Completed" does not necessarily mean "correct."**

#### What is a workspace?

The environment holding related project materials. Example tree (`course/` with `source/`, `assignments/`, `data/`, `website/`, `prompts/`, `AGENTS.md`). Discuss organization, discoverability, relevant context, separating inputs from outputs, reducing accidental changes.

#### What is `AGENTS.md`?

Contrast, boxed:

```text
Prompt:      "Do this now."
AGENTS.md:   "Always work this way in this project."
```

Example rules: don't invent facts · inspect existing files first · preserve accessibility · use existing naming conventions · don't commit or push unless told · verify changes.

Link: this repository's own `AGENTS.md` on GitHub.

#### Reusable prompts

Save prompts you expect to repeat; keep a prompt library; parameterize repeated tasks. Examples: semester updates, feedback analysis, course sites, grading. Link: `.github/prompts/` in this repository.

#### Skills

> **A skill is a reusable set of instructions and procedures for performing a type of task.**

Contains: the procedure · domain conventions · validation steps · tool use · standardized outputs. Link: the grading skill in `.github/skills/`.

#### From prompt to workflow

Ladder visual with the real file next to each rung:

```text
PROMPT                 → one task, typed once
REUSABLE PROMPT        → .github/prompts/update-syllabus.prompt.md
PROJECT INSTRUCTIONS   → AGENTS.md
SKILL                  → .github/skills/grade-submission/SKILL.md
WORKFLOW               → several steps, chained and repeatable
```

Closing line: this is the subtitle of the talk. **From Prompting to Workflows.**

#### Git in the workflow

Changes remain visible, reviewable, and reversible. Commit before an agent task, review the diff after, revert if needed.

### 3.6 `#beyond` — Beyond Copilot: models, other agents, APIs, MCP

**Why it matters:** Copilot is the environment used today, but the "brain" can be swapped, and the same workflow carries over. These are alternatives and additions, not prerequisites.

- **Models and model selection** — choosing among available models; why they behave differently; quality vs. speed vs. cost; match the model to the task.
- **Other agents in VS Code** — Claude (Anthropic), Codex (OpenAI), other AI extensions and specialized coding agents. Note: they read the same `AGENTS.md`.
- **Bring your own key** — Copilot and other tools can use a model from another provider (for example DeepSeek, Qwen, MiMo, or a local model) with an API key.
- **What is an API?** — "An API lets one piece of software communicate with another service." Visual: **Agent → API → External Service.** Keys, cost, permissions, security. **Never publish an API key in a repository.**
- **MCP and external tools** — a standard way to connect agents to outside tools and data: databases, GitHub, Drive, web services, enterprise systems. Advanced and optional.

Links for each item go in the Resources section of the Examples page.

### 3.7 `#responsible-use` — Responsible agent use

**Why it matters:** the agent works for you, but you remain responsible for the result.

- **Hallucinations and errors** — agents can invent plausible information, misunderstand ambiguous requirements, and make technically valid but undesirable changes.
- **Privacy** — student data, grades, FERPA-sensitive material, research participants, unpublished research, institutional information. Keep them out of prompts, files, and repositories. Everything in this repository's demos is synthetic.
- **Human review** — core principle, boxed: **Delegate work, not responsibility.**
- **Version control and reversibility** — inspect changes, commit checkpoints, revert, recover.
- **Academic integrity** — one paragraph on being explicit with students about how AI is used in a course, and on using agents for preparation and feedback rather than as a substitute for judgment.

### 3.8 Next →

"Part 5: The Examples" → `examples.html`

---

## Page 4 — Examples (`examples.html`)

**Purpose:** the largest practical page. Every demo from the session, with the exact prompt, the input files, what to watch for, and the result, so an attendee can reproduce it. Resources and contact live at the bottom.

In-page menu: **This website · Syllabus · Course site · Data · Grading · More uses · What to try first · Resources**

Each example uses the same card layout: **Inputs · Prompt (copyable) · Mode (Ask / Plan / Agent) · What to watch for · Output · Clip**.

### 4.1 Example 1 — How I built this website (Demo 0, live)

- **The finished product:** the site you are reading.
- **Source materials:** Cengage template · official session description · lecture outlines · saved prompts · headshot.
- **Repository tree:**

```text
cce-2026/
├── presentation/   outlines, plans, prompts, slides
├── docs/           this website (Markdown source → HTML)
├── live/           demo material
├── assets/images/
├── AGENTS.md
└── README.md
```

- **What is GitHub Pages?** GitHub can publish a folder of a repository as a public website, free, with no server to manage. This site lives in the `docs/` folder of the repository; GitHub Pages serves that folder. Visual:

```text
VS Code → Git → GitHub repository → GitHub Pages → this website
```

- **Process visual:** Idea → GitHub repository → clone → VS Code → agent work → commit + push → GitHub Pages → website.
- **Live moment:** the prompt that edits the banner on the Intro page, then commit, push, and refresh.
- **Lesson:** content lives in Markdown; a small script renders it; Git and Pages publish it. Nothing here needed a web developer.

### 4.2 Example 2 — Update a syllabus (Demo 1, live)

- **Inputs:** `live/syllabus/` — syllabus, schedule, policies, assignments for a fictional course, with a few deliberately inconsistent dates.
- **Prompt:** "Update the course for Spring 2027 without changing grading weights. Identify inconsistent dates and flag anything requiring judgment."
- **Mode:** Plan first, then Agent.
- **What to watch for:** the agent reads all four files, proposes changes, edits several files, and the diff shows exactly what moved.
- **Output:** updated files plus a short list of flagged items.

### 4.3 Example 3 — Turn a syllabus into an interactive course website

- **Inputs:** the same course material.
- **Output:** homepage · weekly schedule · assignments · grading · policies · resources.
- **Prompt:** provided.
- **Lesson:** one set of source information can support multiple outputs.
- Shown as screenshots or a short clip, not live.

### 4.4 Example 4 — Data analysis (Demo 2, live)

- **Input:** `live/data/student-feedback.csv` (synthetic).
- **Workflow visual:** CSV → Inspect → Analyze → Visualize → Interpret → Publish.
- **Prompt:** "Inspect this feedback file, summarize the main patterns by section and week, create one clear chart, and write a short interpretation. Do not invent data."
- **What to watch for:** the agent looks at the columns before analyzing; runs Python; produces a chart; writes an interpretation; adds it to a report page.
- **Output:** chart image + summary.

### 4.5 Example 5 — Grading and repetitive work (recorded)

- **Inputs:** `live/grading/` — assignment, rubric, three synthetic submissions.
- **Workflow:** inspect submission → apply rubric → identify evidence → calculate score → draft feedback → output structured results.
- **The skill:** link to `.github/skills/grade-submission/SKILL.md`, with a short explanation of what it standardizes.
- **Clip:** 20–30 second accelerated recording.
- **Main lesson, boxed:**

> **One submission can be a prompt. A hundred submissions require a workflow.**

### 4.6 Example 6 — Other academic uses (gallery)

Short cards, no demos: course redesign · lecture materials · research coding · literature organization · document conversion · data cleaning · website maintenance · administrative tasks · repetitive file processing · documentation.

### 4.7 What should you try first?

Five steps, numbered:

1. Open a real project folder in VS Code.
2. Ask Copilot to inspect it.
3. Give it a multi-file task.
4. Create an `AGENTS.md`.
5. Turn something repetitive into a reusable workflow.

### 4.8 Resources

- **Downloads:** slides (PDF) · this repository · saved prompts · example files · setup guide
- **GitHub:** GitHub Education · GitHub Copilot setup · VS Code download · Copilot documentation · VS Code agent guides
- **Beyond Copilot:** model documentation · Claude · Codex · APIs · MCP · extensions
- **Media:** demo recordings, clips, screenshots (added as they are produced)

### 4.9 Contact

Nim Dvir · University at Albany · nimdvir.com · LinkedIn · GitHub

### 4.10 Final QR code

The same QR code as the Intro page, large, with the short URL.

### 4.11 Next →

"Back to the start" → `index.html`

---

## Content rules for all four pages

- Faculty with no technical background must be able to read every section cold.
- One idea per paragraph. Prefer a visual block over a paragraph when the idea has a shape.
- Every definition that appears in the slides appears here with the same wording.
- Every prompt shown in the session is on the Examples page, verbatim and copyable.
- Nothing is added that does not sit under Brain, Infrastructure, Task, Workflow, or Examples.
