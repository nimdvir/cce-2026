# Explanation

The concepts behind the session, written for faculty with no technical background. Each section opens with one sentence on why it matters for academic work.

[Brain](#brain) · [Infrastructure](#infrastructure) · [Setup](#setup) · [Task](#task) · [Workflow](#workflow) · [Beyond Copilot](#beyond) · [Responsible Use](#responsible-use)

## Part I: 🧠 The Brain {#brain}

**Why it matters:** you cannot direct something well if you do not know what is doing the thinking.

### Introduction: the key elements in one sentence each

These are the terms you will meet in this part. Read them once now, so they feel familiar when they are explained.

- **Agent** — AI that works toward a goal in steps, using tools, instead of only answering.
- **Chat** — the conversation window you type into; it is the interface, not the agent.
- **Model** — the AI "brain" that reasons and writes; agents are built around one.
- **Tokens** — the small pieces of text a model reads and writes; they set limits and cost.
- **Context** — everything the model can see right now: your prompt, the conversation, files, instructions, results.
- **Tools** — the actions an agent can take: read, search, edit, run, fetch.
- **GitHub Copilot** — the AI layer inside VS Code that we use today to run agents on our own files.

The rest of Part I explains each of these, in this order.

### What is an AI agent?

> An AI agent uses a model, context, instructions, and tools to work toward a goal through multiple steps.

An agent follows a simple loop:

```text
Goal → Inspect → Plan → Act → Check → Revise
```

Agents do more than generate an answer. They can:

- inspect their environment
- take actions
- work through several steps
- evaluate results
- continue until the goal is reached

### Chat vs. agent

```text
CHAT                                    AGENT
You ask → AI answers → You do the work  You give a goal → AI examines → plans → acts → checks
```

**Chat** is conversational. It is excellent for questions, writing, and brainstorming. You carry the output back into your work, and you coordinate the steps yourself.

**Agent** starts from a goal. The agent may inspect files, search, create and edit files, run commands, analyze data, use tools, inspect results, and correct itself.

> **Chat is the interface. An agent is a way the AI can operate.**

You still use a chat window as your main interface. What happens behind that window can range from answering a question to taking agentic actions.

### Where can you run models and agents?

The same model can be reached from many places.

- **A website chat** — ChatGPT, Claude, Copilot on the web. You bring the material to the AI.
- **An app** — desktop or mobile chat apps. Same idea, closer to your files.
- **Inside a tool you already use** — Word, Excel, a browser, an email client.
- **Through an API** — one program calling a model from another (more in [Beyond Copilot](#beyond)).
- **Locally, on your own computer, inside your project** — the AI works where your files are.

> **In this session we run agents locally, inside a text editor, with GitHub Copilot.** There are many other ways; this one puts the agent next to your files, where it can read them, edit them, and run commands on your machine. The editor itself is explained in Part II.

### What is GitHub Copilot?

GitHub Copilot is the AI layer inside the VS Code workspace. It has several parts:

- **Copilot Chat** — the conversation panel where you talk to the agent.
- **Code suggestions** — inline completions while you type (useful, but not the focus today).
- **Ask, Plan, Agent** — three modes of the same chat panel, explained next.
- **Model selection** — pick which model does the thinking.
- **Tools** — the actions the agent can take in your workspace.
- **Project context** — the agent can see your files and instructions.

```text
VS Code + Your Files + Copilot = Agentic Workspace
```

Copilot is free for verified faculty and students through GitHub Education (see [Setup](#setup)).

### Copilot Chat: Ask, Plan, Agent

The same chat panel works in three modes.

| Ask | Plan | Agent |
|---|---|---|
| Understand, explain, answer questions, explore possibilities, troubleshoot conceptually. | Inspect the problem, understand the project, propose a sequence of changes, identify affected files. | Create and edit files, run commands, use tools, perform multi-step work. |
| No edits, no commands. | Waits for your approval before anything changes. | Verifies and iterates until the task is done. |

Copilot Chat is the interface. Ask, Plan, and Agent are different ways of using that interface.

```text
ASK → PLAN → AGENT → REVIEW
```

You will see this again in every demo.

### What can an agent do?

**An agent can:**

- read one or many files
- search a workspace
- write and edit
- create websites
- run Python
- analyze CSVs
- generate visualizations
- call APIs
- use external tools
- work with Git
- test output
- detect errors and revise

**An agent cannot be assumed to do these correctly:**

- know facts it was not given
- interpret ambiguous requirements every time
- decide what matters pedagogically without guidance
- replace human review

### What is a model?

```text
MODEL = the reasoning and generation engine
AGENT = model + context + instructions + tools + actions
```

Models differ in reasoning ability, speed, coding strength, multimodal support, context capacity, and cost.

### Which models are out there?

The main model families, kept short. Names change every few months, so check the date below.

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

*Last checked: TODO* <!-- TODO: verify family names and makers, then replace with the check date -->

What actually differs between them, in plain words:

- **Open weights vs. closed.** Open-weight models (Llama, DeepSeek, Qwen, GLM, MiMo) can be downloaded and run on your own hardware or a university server. Closed models (GPT, Claude, Gemini) are used through the maker's service.
- **Where your data goes.** A closed model sends your text to the provider's servers; a local open-weight model keeps it on your machine. This matters for student data and unpublished research.
- **Reasoning vs. speed.** Some models "think" longer and are better at multi-step tasks; others answer fast and cheaply. Many families offer both.
- **Context size.** How much material fits in one conversation.
- **Cost.** From free (local) to premium (largest closed models). Chinese open-weight models pushed prices down sharply.
- **Availability inside Copilot.** Copilot's model picker offers a subset (GPT, Claude, Gemini, and others); other models can be used with your own API key or a local runner such as Ollama (see [Beyond Copilot](#beyond)).

> **Models are interchangeable brains. The workflow you learn today does not depend on which one you pick.**

### What are tokens?

Models do not read words. They process text in small units called tokens.

Tokens are not exactly words. A short word may be one token. A long word may be several.

Everything counts. The prompt uses tokens. The documents you attach use tokens. The conversation history uses tokens. The answer uses tokens.

Why faculty should care:

- **Context limits.** A model can hold only so many tokens at once.
- **Long documents.** A whole textbook may not fit; a chapter will.
- **API pricing.** When you pay per use, you pay per token.
- **Unnecessary context.** Extra material costs tokens and can distract the model.
- **Efficiency.** Give the agent what it needs, not everything you have.

### What is context?

```text
Prompt + Conversation + Files + Instructions + Tool results = CONTEXT
```

- The agent can only reason from what it can see.
- Relevant context matters more than an elaborate prompt.
- Project files provide persistent context.
- Good project organization makes agents more useful.

> **Don't keep explaining the project. Put the project where the agent can understand it.**

### The five pillars (bridge to the VS Code docs)

VS Code's own guide describes five pillars of good agent results: harness, model, context, tools, and prompt. This table maps this lecture's words to those terms.

| This lecture | VS Code docs | What it is |
|---|---|---|
| The Brain | Model | the AI that reasons and generates |
| The Infrastructure | Harness + Tools | Copilot Chat in VS Code, plus the actions it can take (read, edit, run, search) |
| The Task | Prompt + Context | what you ask, plus what the agent can see |

Read the original: [Introduction to agent-first development](https://code.visualstudio.com/learn/foundations/introduction-to-agent-first-development) on code.visualstudio.com.

## Part II: 🖥️ The Infrastructure {#infrastructure}

**Why it matters:** an agent works on files in a project. The tools in this section are how you give it a project.

### What is a text editor?

A text editor is a program for writing and changing plain-text files. Notepad is one. VS Code is one.

Unlike Word, a text editor edits the file directly. It does not hide the structure inside a document format.

Text-based file types: `.txt` `.md` `.html` `.css` `.js` `.py` `.json` `.csv`

Why it matters for agents: agents can inspect and directly modify these files.

### What is VS Code?

> **A text editor that has evolved into a complete project workspace.**

```text
VS CODE = Files · Editor · Terminal · Git · Extensions · AI Agents
```

You do not need to become a software engineer. VS Code is useful because most academic work can be represented as files in a project.

### Where do the files live?

- **A local folder** — the normal case. You open a folder on your computer and VS Code treats it as the project. The agent reads and writes inside that folder.
- **A synced cloud folder** — a OneDrive, Google Drive, or Dropbox folder works the same way, because it is still a folder on your computer that happens to sync. Useful for keeping course material in one place; watch out for sync conflicts while an agent is editing.
- **A repository** — a folder whose history Git tracks and GitHub backs up. This is what the rest of this section is about.

### What files can it work on?

Short answer: **all of them.** VS Code opens any file, and an agent can read most formats, including PDF, Word, and Excel.

Preferred answer: **simple text.** Plain-text files (`.md`, `.txt`, `.csv`, `.html`, `.py`) are the ones an agent can inspect, edit precisely, and Git can track line by line. A Word document is a sealed box; a Markdown file is an open page.

> **If you can, keep the source in plain text. Export to Word or PDF at the end.**

### What is a repository?

> **A repository is a project folder whose files and history are tracked with Git.**

A **local repository** lives on your computer. A **remote repository** lives online, usually on GitHub.

A repository can contain documents, data, code, websites, instructions, media, and the project's history.

```text
course-project/
├── syllabus.md
├── assignments/
├── data/
├── website/
└── AGENTS.md
```

### What is Git?

Git is the tool that tracks a repository's history. In practice it:

- records changes
- compares versions
- restores earlier versions
- makes agent changes safer

> **When an agent can change many files, version control becomes especially valuable.**

### What is GitHub?

GitHub is a website that stores repositories. It:

- hosts repositories online
- synchronizes projects between computers
- supports collaboration
- stores history
- integrates with Copilot
- publishes websites

### Clone: GitHub → VS Code

```text
GitHub repository
      ↓ clone
Local repository in VS Code
      ↓ edit / agent work
     Git
      ↓ commit + push
GitHub repository
```

**Clone** makes a local copy of a GitHub repository on your computer, still connected to the original.

**Commit** records a set of changes as a checkpoint in the local history.

**Push** sends your commits back up to GitHub.

You can ask an agent to do the clone for you. This is the exact prompt used for this project. It is saved as [`clone-repository.prompt.md`](https://github.com/nimdvir/cce-2026/blob/main/.github/prompts/clone-repository.prompt.md) in the repository, and it appears again on the [Examples page](examples.html#this-website).

```text
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

Notice what the prompt does: it states the goal, names the exact repository, says what must not happen, asks the agent to inspect before acting, and asks for a report at the end. Part III explains why each of those matters.

GitHub can also publish a repository as a website (GitHub Pages). This site is the example, explained on the [Examples page](examples.html#this-website).

### Copilot in the workspace

GitHub Copilot was introduced in Part I. Here it is simply the AI layer of the workspace, installed as an extension. Extensions are explained next.

### What are extensions?

> **Extensions are apps for VS Code. VS Code is the platform; extensions are the apps.**

Examples: GitHub Copilot · Python · Markdown tools · database tools · visualization tools · other AI assistants (Claude, Codex).

## Setup guide (do this before or after the session) {#setup}

**Why it matters:** everything in the demos runs on this setup. It takes about twenty minutes, and most of it is free for faculty and students.

<!-- TODO screenshots, one per step, to be added when the build step supports images inside list items:
1. GitHub sign-up page
2. GitHub Education application page
3. VS Code first launch
4. VS Code Accounts menu
5. Clone Repository dialog
6. Copilot Chat panel with the mode picker
7. Extensions view
-->

1. **Create a GitHub account.** Sign up at [github.com](https://github.com). Turn on two-factor authentication. Fill in a profile. *You are done when* you can sign in at github.com.
2. **Apply for GitHub Education.** Faculty and teachers apply for teacher verification; students apply for student verification. The benefits include GitHub Copilot. Link: TODO. *You are done when* your application is approved. <!-- TODO: GitHub Education application URL is not in the repository files -->
3. **Install VS Code.** Download from [code.visualstudio.com/download](https://code.visualstudio.com/download), install, and launch. *You are done when* VS Code opens.
4. **Sign in to GitHub from VS Code.** Use the Accounts menu in the bottom-left corner. *You are done when* your GitHub name shows in the corner.
5. **Clone a repository.** Create or locate one on GitHub, then clone it into VS Code. Use `https://github.com/nimdvir/cce-2026` as the example, or let an agent do it with the [clone prompt](https://github.com/nimdvir/cce-2026/blob/main/.github/prompts/clone-repository.prompt.md) shown above. *You are done when* the folder opens as a workspace.
6. **Enable GitHub Copilot.** Follow [Set up GitHub Copilot in VS Code](https://code.visualstudio.com/docs/setup/copilot). Sign in, open Copilot Chat, find Ask / Plan / Agent, and pick a model. *You are done when* Copilot Chat answers a question.
7. **Add extensions as needed.** Python, Markdown, database tools.

Key repository workflow: GitHub repository → clone → work in VS Code → commit → push.

## Part III: 🎯 The Task {#task}

**Why it matters:** the quality of what you get back depends mostly on what you asked for and what you gave the agent to work with.

### What makes a good agent task?

```text
GOAL + CONTEXT + CONSTRAINTS = TASK
```

- **Goal** — what outcome do you want? Bad: "Fix my course." Better: "Update this syllabus and schedule for Spring 2027."
- **Context** — what does the agent need? Syllabus, schedule, policy files, screenshots, URLs, CSVs, an existing site, reference documents.
- **Constraints** — what must it preserve or avoid? Do not change grading weights · do not invent missing dates · preserve the existing design · do not commit · flag uncertainty · use only supplied data.

> **Goal:** Update my syllabus for Spring 2027.
>
> **Context:** Here are the syllabus, schedule, and assignments.
>
> **Constraints:** Don't change grading weights; flag anything uncertain.

That worked example is, almost word for word, the prompt for Demo 1. Here it is as it is saved in the repository, in [`update-syllabus.prompt.md`](https://github.com/nimdvir/cce-2026/blob/main/.github/prompts/update-syllabus.prompt.md):

```text
The course files are in live/syllabus/.

Update the course for Spring 2027 without changing grading weights. Identify inconsistent dates and flag anything requiring judgment.
```

The first line is the context. The second sentence is the goal and one constraint. The last sentence is two more constraints. Three lines, and the agent has everything it needs.

### Prompting agents

A checklist for any task you give an agent:

- be explicit about outcomes
- provide the source files
- name the authoritative source
- state boundaries
- tell the agent when to ask
- tell it to inspect before editing
- ask it to verify afterward

In Copilot Chat, you can attach files with the **+** button, or type **#** to point at a file or the whole workspace.

The prompt that wrote the pages you are reading follows every item on this checklist. It names the spec, lists the source files, says which one wins, sets boundaries, tells the agent what to leave as a TODO instead of inventing, and asks for a report. Read it in [Example 1](examples.html#this-website) on the Examples page, or open [`write-site-content.prompt.md`](https://github.com/nimdvir/cce-2026/blob/main/.github/prompts/write-site-content.prompt.md) in the repository.

### Context instead of giant prompts

| Giant prompt | Project context |
|---|---|
| Re-explains the course, policies, preferences, and conventions every time. | Those things already live in source files, `README`, `AGENTS.md`, and the workspace structure. |

> **Move knowledge from the prompt into the workspace.**

## Part IV: 🔄 The Workflow {#workflow}

**Why it matters:** one good result is luck. A repeatable result is a workflow.

### A reliable agent workflow

```text
UNDERSTAND → PLAN → ACT → REVIEW → VERIFY → REPEAT
```

Mapped to Copilot:

- **Ask** → understand
- **Plan** → decide how
- **Agent** → execute
- **You** → review and verify

### Reviewing agent work

What to inspect after an agent finishes:

- files changed
- diffs
- terminal output
- generated output
- previews
- tests
- Git status

Copilot also pauses before it runs a terminal command for the first time and asks for your permission. Read the command before you allow it.

> **"Completed" does not necessarily mean "correct."**

### What is a workspace?

A workspace is the environment holding related project materials.

```text
course/
├── source/
├── assignments/
├── data/
├── website/
├── prompts/
└── AGENTS.md
```

A well-organized workspace helps in five ways:

- **Organization.** Related material is in one place.
- **Discoverability.** The agent can find what it needs.
- **Relevant context.** What the agent sees is what matters.
- **Separating inputs from outputs.** Source material stays untouched; generated material has its own folder.
- **Reducing accidental changes.** Clear structure makes it harder to edit the wrong file.

### What is `AGENTS.md`?

```text
Prompt:      "Do this now."
AGENTS.md:   "Always work this way in this project."
```

`AGENTS.md` is a plain-text file at the top of a project. Agents read it before they work. Example rules:

- don't invent facts
- inspect existing files first
- preserve accessibility
- use existing naming conventions
- don't commit or push unless told
- verify changes

See [this repository's own `AGENTS.md`](https://github.com/nimdvir/cce-2026/blob/main/AGENTS.md) on GitHub.

### Reusable prompts

Save prompts you expect to repeat. Keep a prompt library. Parameterize repeated tasks so one prompt serves many semesters.

Examples: semester updates, feedback analysis, course sites, grading.

In VS Code, a saved prompt is a small file in the `.github/prompts/` folder whose name ends in `.prompt.md`. The top of the file says what the prompt is for. The rest is the prompt. This is the Demo 1 prompt from Part III, now saved as a file:

```text
---
mode: agent
description: Demo 1. Update the fictional course in live/syllabus/ for Spring 2027. Use Plan mode first, then Agent.
---

The course files are in live/syllabus/.

Update the course for Spring 2027 without changing grading weights. Identify inconsistent dates and flag anything requiring judgment.
```

To run it, open Copilot Chat and type `/update-syllabus`. Next semester, change one year in the file and run it again.

Every prompt used in this project is saved this way. See [`.github/prompts/`](https://github.com/nimdvir/cce-2026/tree/main/.github/prompts) in this repository, and the index in [`presentation/prompts.md`](https://github.com/nimdvir/cce-2026/blob/main/presentation/prompts.md).

### Skills

> **A skill is a reusable set of instructions and procedures for performing a type of task.**

A skill contains:

- the procedure
- domain conventions
- validation steps
- tool use
- standardized outputs

See [the grading skill in `.github/skills/`](https://github.com/nimdvir/cce-2026/tree/main/.github/skills) in this repository.

### From prompt to workflow

```text
PROMPT                 → one task, typed once
REUSABLE PROMPT        → .github/prompts/update-syllabus.prompt.md
PROJECT INSTRUCTIONS   → AGENTS.md
SKILL                  → .github/skills/grade-submission/SKILL.md
WORKFLOW               → several steps, chained and repeatable
```

The files on the ladder are real. Open them: [`update-syllabus.prompt.md`](https://github.com/nimdvir/cce-2026/blob/main/.github/prompts/update-syllabus.prompt.md) · [`AGENTS.md`](https://github.com/nimdvir/cce-2026/blob/main/AGENTS.md) · [`grade-submission/SKILL.md`](https://github.com/nimdvir/cce-2026/blob/main/.github/skills/grade-submission/SKILL.md).

This is the subtitle of the talk. **From Prompting to Workflows.**

### Git in the workflow

With Git, changes remain visible, reviewable, and reversible.

Commit before an agent task. Review the diff after. Revert if needed.

## Beyond Copilot: models, other agents, APIs, MCP {#beyond}

**Why it matters:** Copilot is the environment used today, but the "brain" can be swapped, and the same workflow carries over. These are alternatives and additions, not prerequisites.

- **Models and model selection** — Copilot's model picker lets you choose among available models. They behave differently: quality vs. speed vs. cost. Match the model to the task. Some models also let you set a thinking effort, from low (fast, simple fixes) to high (deep reasoning, multi-file work).
- **Other agents in VS Code** — Claude (Anthropic), Codex (OpenAI), other AI extensions and specialized coding agents. They read the same `AGENTS.md`.
- **Bring your own key** — Copilot and other tools can use a model from another provider (for example DeepSeek, Qwen, MiMo, or a local model) with an API key.
- **What is an API?** — "An API lets one piece of software communicate with another service." Keys, cost, permissions, and security all come with it. **Never publish an API key in a repository.**

```text
Agent → API → External Service
```

- **MCP and external tools** — a standard way to connect agents to outside tools and data: databases, GitHub, Drive, web services, enterprise systems. Advanced and optional.

Links for each item are in the [Resources](examples.html#resources) section of the Examples page.

## Responsible agent use {#responsible-use}

**Why it matters:** the agent works for you, but you remain responsible for the result.

- **Hallucinations and errors** — agents can invent plausible information, misunderstand ambiguous requirements, and make technically valid but undesirable changes.
- **Privacy** — student data, grades, FERPA-sensitive material, research participants, unpublished research, institutional information. Keep them out of prompts, files, and repositories. Everything in this repository's demos is synthetic.
- **Human review** — the core principle:

> **Delegate work, not responsibility.**

- **Version control and reversibility** — inspect changes, commit checkpoints, revert, recover.
- **Academic integrity** — be explicit with students about how AI is used in a course. Say what the agent did and what you did. Use agents for preparation and feedback, not as a substitute for judgment. The grade, the policy, and the decision remain yours.

---

**Next →** [Part 5: The Examples](examples.html)
