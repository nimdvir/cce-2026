
# CCE 2026 — Final Project & Lecture Plan

## Goal

Build a conference presentation about **AI Agents in VS Code for Academic Work** in which the **website is part of the presentation itself**.

The audience will scan a QR code at the beginning and open the live site. During the session, you will explain the concepts, show how the project was built, demonstrate agents working on academic tasks, and potentially modify/publish part of the website live.

The presentation should remain understandable to faculty with little or no technical background.

---

# 1. Core lecture structure

Everything should fit into five memorable concepts:

```text
🧠 THE BRAIN
Agents · Chat · Models · Tokens · Context

        ↓

🖥️ THE INFRASTRUCTURE
Text Editor · VS Code · Repository · Git · GitHub · Copilot · Extensions

        ↓

🎯 THE TASK
Goal · Context · Constraints

        ↓

🔄 THE WORKFLOW
Ask · Plan · Agent · Review · Skills

        ↓

🚀 THE EXAMPLES
Website · Syllabus · Course Site · Data · Grading
```

This becomes the main roadmap shown near the beginning and revisited throughout the talk.

---

# 2. Website structure

Keep the public website to **four pages**, not one page per slide.

## Page 1 — Intro

The opening/title experience.

Include:

- **AI Agents in VS Code for Academic Work**
- *From Prompting to Workflows*
- your headshot
- Nim Dvir, PhD, MBA
- University at Albany
- Cengage Computing Experience 2026
- large QR code
- short URL
- GitHub repository link
- Download Slides button

Opening idea:

> **This website is the presentation—and AI agents helped me build it.**

Also include a very short **About Me** section:

- teaching
- research
- what you build
- why you started using agents

---

## Page 2 — Lecture Intro

Explain what participants are about to learn.

### Main roadmap

```text
Brain → Infrastructure → Task → Workflow → Examples
```

### Learning outcomes

Participants should leave understanding:

- what an AI agent is
- agent vs normal AI chat
- Ask vs Plan vs Agent
- models, tokens, and context
- VS Code
- repositories
- Git and GitHub
- GitHub Copilot
- how to set up the environment
- how to give an agent a useful task
- how to review its work
- how reusable instructions and skills become workflows

---

# 3. Explanation page

This is the main conceptual teaching page.

## Part I — 🧠 The Brain

### What is an AI agent?

Start the lecture here.

Simple definition:

> An AI agent uses a model, context, instructions, and tools to work toward a goal through multiple steps.

Simple process:

```text
Goal → Inspect → Plan → Act → Check → Revise
```

### Chat vs Agent

Use a very simple comparison:

```text
CHAT
You ask → AI answers → You do the work


AGENT
You give a goal → AI examines → plans → acts → checks
```

Important distinction:

> **Chat is the interface. Agent is a way the AI can operate.**

You primarily use Chat, but within Copilot Chat there are different modes.

### Copilot Chat: Ask, Plan, Agent

This needs to be prominent.

**Ask**

- understand
- explain
- investigate
- answer questions

**Plan**

- inspect the project
- identify what needs to change
- propose an approach
- let you review the approach first

**Agent**

- create/edit files
- run commands
- use tools
- perform multi-step work
- test and revise

Recurring visual:

```text
ASK → PLAN → AGENT → REVIEW
```

### What can agents do?

Examples:

- inspect files
- search projects
- create and edit content
- write code
- run commands
- analyze data
- generate visualizations
- use APIs and tools
- test results
- fix problems

Also explain that they can still misunderstand requirements or produce incorrect results.

---

## Models

Explain:

```text
MODEL = reasoning/generation engine

AGENT = model + context + instructions + tools + actions
```

Models differ in:

- quality
- reasoning
- speed
- coding strength
- multimodal ability
- context size
- cost

Provider comparisons come later.

---

## Tokens

Explain simply:

- AI models process tokens rather than exact words.
- prompts consume tokens
- files consume tokens
- conversation history consumes tokens
- output consumes tokens

Why attendees should care:

- context limits
- long documents
- API costs
- efficiency
- unnecessary context

---

## Context

Simple visual:

```text
Prompt
+
Conversation
+
Files
+
Instructions
+
Tool results
=
CONTEXT
```

Key lesson:

> **Good context is often more important than a giant prompt.**

---

# Part II — 🖥️ The Infrastructure

## What is a text editor?

Explain from zero.

Examples:

- Notepad
- VS Code

Unlike Word, a text editor works directly with plain-text files such as:

`.md`, `.html`, `.css`, `.js`, `.py`, `.json`, `.csv`

Why this matters:

> Agents can directly read and modify these files.

---

## What is VS Code?

> **A text editor that has evolved into a complete project workspace.**

Show:

```text
VS CODE

Files
Editor
Terminal
Git
Extensions
AI Agents
```

Make clear that attendees do **not** need to become developers to benefit from it.

---

## What is a repository?

Important beginner concept:

> **A repository is a project folder whose files and history are tracked with Git.**

Explain:

**Local repository**
Lives on your computer.

**GitHub repository**
Online version of the project.

Example:

```text
course-project/
├── syllabus.md
├── assignments/
├── data/
├── website/
└── AGENTS.md
```

---

## What is Git?

Keep it practical:

- tracks changes
- shows differences
- creates checkpoints
- lets you restore older versions

Key point:

> When an agent can modify many files, version control becomes especially valuable.

---

## What is GitHub?

Explain:

- hosts repositories
- stores project history
- syncs local and online work
- supports collaboration
- connects with Copilot
- can publish websites

---

## Clone: GitHub → VS Code

This is now an explicit important step.

```text
GitHub Repository
       ↓ clone
Local Repository
       ↓
VS Code Workspace
       ↓
Work locally
       ↓
commit + push
       ↓
GitHub
```

You already have the exact agent prompt saved for this.

---

## What is GitHub Pages?

Use your presentation as the example:

```text
VS Code
   ↓
Git
   ↓
GitHub
   ↓
GitHub Pages
   ↓
This Website
```

The website lives under `/docs` because GitHub Pages can publish directly from that folder on `main`.

---

## What is GitHub Copilot?

Explain:

> Copilot brings the AI/model/agent capabilities into the VS Code workspace.

Cover:

- Copilot Chat
- Ask mode
- Plan mode
- Agent mode
- model selection
- project context
- tools

---

# Configuration

Keep configuration useful but relatively short during the live lecture. The website can contain detailed instructions.

## GitHub

Cover:

- create an account
- login/security basics
- repositories

## GitHub Education

This is especially important for your academic audience.

Include:

- teacher/faculty verification
- student verification
- Copilot benefits/eligibility
- direct setup links
- screenshots if useful

## VS Code

- download
- install
- open
- sign into GitHub
- clone/open repository

## GitHub Copilot

- enable/install
- authenticate
- open Chat
- find Ask / Plan / Agent
- select models if needed

## Extensions

Explain:

> **Extensions are apps for VS Code.**

Examples:

- GitHub Copilot
- Python
- Markdown
- database tools
- visualization tools
- other AI assistants

---

# Part III — 🎯 The Task

Use one simple formula:

```text
GOAL
+
CONTEXT
+
CONSTRAINTS
=
TASK
```

## Goal

What result do you want?

Weak:

> Fix my course.

Better:

> Update this syllabus and course schedule for Spring 2027.

## Context

What should the agent use?

Examples:

- syllabus
- schedule
- assignment files
- policies
- CSV
- screenshots
- existing website
- URLs
- reference material

## Constraints

What should it preserve or avoid?

Examples:

- don't change grading weights
- don't invent dates
- preserve existing design
- flag uncertainty
- do not commit or push
- use only the supplied data

---

# Part IV — 🔄 The Workflow

Main visual:

```text
UNDERSTAND
   ↓
PLAN
   ↓
ACT
   ↓
REVIEW
   ↓
VERIFY
   ↓
REPEAT
```

Connect it directly to Copilot:

```text
ASK → understand

PLAN → decide how

AGENT → execute

YOU → review and verify
```

---

## Reviewing work

Show:

- changed files
- diffs
- terminal output
- browser preview
- generated results
- Git status

Core message:

> **Completed does not necessarily mean correct.**

---

## Workspace

Explain how a well-organized workspace provides useful context.

Example:

```text
course/
├── source/
├── assignments/
├── data/
├── website/
├── prompts/
└── AGENTS.md
```

---

## AGENTS.md

Contrast:

```text
Prompt:
"Do this."

AGENTS.md:
"Always work this way."
```

Examples of project rules:

- don't invent facts
- inspect existing files first
- follow naming conventions
- preserve accessibility
- verify meaningful changes
- don't push unless instructed

---

## Reusable prompts

Save successful prompts for tasks you expect to repeat.

Examples:

- update semester dates
- analyze feedback
- build course site
- grade submissions

---

## Skills

Explain:

> A skill packages reusable instructions and procedures for a class of tasks.

Could include:

- process
- conventions
- tools
- validation
- output requirements

---

## From Prompting to Workflows

Important lecture visual:

```text
PROMPT
   ↓
REUSABLE PROMPT
   ↓
PROJECT INSTRUCTIONS
   ↓
SKILL
   ↓
WORKFLOW
```

This is the payoff of the talk title.

---

# Advanced ecosystem

Put this **after** the core Copilot workflow so beginners are not overwhelmed.

## Models and model selection

Explain why different models may be chosen:

- quality
- speed
- reasoning
- coding
- cost

## Other providers and agents

Examples:

- OpenAI / Codex
- Anthropic / Claude
- other providers
- other VS Code AI extensions

Make clear:

> These are alternatives and additions—not prerequisites.

## APIs

Simple definition:

> An API allows software to communicate with another service.

Explain:

- API keys
- pricing
- permissions
- security
- never putting API keys in a public repository

## MCP

Advanced/optional.

Explain it simply as another way for agents to connect to tools and external data.

Examples:

- databases
- GitHub
- Drive
- web services
- enterprise systems

---

# Responsible use

Cover briefly:

## Hallucinations

Agents can invent plausible information.

## Privacy

Especially:

- student records
- grades
- FERPA-sensitive information
- research participants
- unpublished data

## Human responsibility

> **Delegate work, not responsibility.**

## Reversibility

Use Git:

- inspect
- checkpoint
- revert
- recover

---

# 4. Examples page

This should be the largest practical section.

## Example 1 — How I Built This Website

Start with the finished product everyone is currently viewing.

Show the real repo:

```text
cce-2026/
├── presentation/
├── live/
├── docs/
├── assets/
│   └── images/
├── AGENTS.md
└── README.md
```

Show:

- Cengage template
- official session description
- lecture outline
- prompts
- GitHub repo
- GitHub Pages

Process:

```text
Idea
 ↓
GitHub Repository
 ↓ clone
VS Code
 ↓
Agent Work
 ↓
Commit + Push
 ↓
GitHub Pages
 ↓
Website
```

Potential live moment:
change something visible → push → audience refreshes.

---

## Example 2 — Update a Syllabus

Inputs:

- syllabus
- course schedule
- policies
- assignments

Demonstrate:

- Ask/Plan
- context
- constraints
- Agent mode
- multi-file changes
- diff
- verification

---

## Example 3 — Turn a Syllabus Into an Interactive Site

Use the same course content.

Transform it into:

- homepage
- weekly schedule
- assignment display
- grading information
- policies
- resources

Lesson:

> **One set of source material can support multiple outputs.**

---

## Example 4 — Data Analysis

Input:

`student-feedback.csv`

Workflow:

```text
CSV
 ↓
INSPECT
 ↓
ANALYZE
 ↓
VISUALIZE
 ↓
INTERPRET
 ↓
PUBLISH
```

Show:

- Python/code execution
- charts
- interpretation
- integration into a report/site

---

## Example 5 — Grading / Repetitive Work

Inputs:

- assignment
- rubric
- submission

Potential workflow:

- inspect
- evaluate
- identify rubric evidence
- calculate
- draft feedback
- produce structured output

Key line:

> **One submission can be a prompt. A hundred submissions require a workflow.**

This can be a prerecorded demo rather than a risky live demonstration.

---

## Other examples

Brief gallery:

- research coding
- literature organization
- course redesign
- lecture materials
- data cleaning
- website maintenance
- document conversion
- administrative tasks

---

# Resources

Keep Resources at the bottom of the **Examples** page rather than adding another top-level page.

Include:

- downloadable PowerPoint
- GitHub repository
- setup guide
- saved prompts
- sample files
- GitHub Education
- Copilot documentation
- prompting resources
- Codex/Claude/API/MCP resources
- screen recordings
- GIFs
- contact information
- final QR code

---

# Repository structure

Keep the repo simple:

```text
cce-2026/
│
├── README.md
├── AGENTS.md
├── .gitignore
│
├── presentation/
│   ├── cengage-template.pptx
│   ├── official-session-description.md
│   ├── lecture-outline-summary.md
│   ├── lecture-outline-detailed.md
│   ├── prompts.md
│   ├── slides-outline.md
│   ├── speaker-notes.md
│   ├── run-of-show.md
│   └── cce-2026-slides.pptx
│
├── docs/
│   ├── content/
│   │   ├── intro.md
│   │   ├── lecture.md
│   │   ├── explanation.md
│   │   └── examples.md
│   │
│   ├── index.html
│   ├── lecture.html
│   ├── explanation.html
│   ├── examples.html
│   └── assets/
│
├── live/
│   ├── syllabus/
│   ├── data/
│   ├── grading/
│   └── generated/
│
├── assets/
│   └── images/
│
└── .github/
    ├── prompts/
    └── skills/
```

We do **not** add more asset subfolders unless we actually need them.

---

# Website content model

The website has only:

**Intro | Lecture | Explanation | Examples**

Within `Explanation`, use anchors:

```text
explanation.html#brain
explanation.html#infrastructure
explanation.html#task
explanation.html#workflow
```

That gives direct links without creating lots of pages.

---

# Markdown and HTML

If Markdown is the source of truth, we should not manually maintain duplicate content indefinitely.

Conceptually:

```text
docs/content/explanation.md
            ↓
      simple build step
            ↓
docs/explanation.html
```

Keep the technology deliberately lightweight—no need to turn this into a large web-development project.

---

# Slides

The PowerPoint should mirror the website, but it should be **much more concise**.

Aim for roughly **18–22 substantive slides**, plus Cengage-required housekeeping/survey/questions slides.

Slides provide:

- visual explanation
- diagrams
- transitions
- demo setup

Website provides:

- detail
- instructions
- links
- prompts
- files
- recordings
- resources

---

# Live demos

Keep live risk controlled.

### Live Demo 1 — This website

Change something visible, push it, refresh.

### Live Demo 2 — Syllabus

Plan → Agent → review differences.

### Live Demo 3 — Data analysis

CSV → analysis → visualization.

### Recorded Demo — Grading

Use a polished short recording or accelerated clip.

### Optional cameo

Show **one** alternative agent/provider such as Codex or Claude—not several.

---

# Recording and documentation plan

Use four complementary records:

```text
VIDEO
How it happened

GIT
Exactly what changed

BUILD LOG
Why you did it

PROMPTS
What you told the agent
```

For each meaningful development session:

```text
Start recording
      ↓
Do the work
      ↓
Save the important prompt
      ↓
Review results
      ↓
Commit
      ↓
Stop recording
      ↓
Update build log
```

Raw recordings should **not** go into GitHub. Later turn the useful parts into:

- short MP4s
- GIFs
- screenshots
- fallback live-demo clips

---

# 45-minute run of show

|   Time | Topic                                |
| -----: | ------------------------------------ |
|   0–3 | Intro + QR + about me                |
|   3–6 | Show/modify the presentation website |
|  6–13 | 🧠 Brain                             |
| 13–19 | 🖥️ Infrastructure                  |
| 19–23 | 🎯 Task                              |
| 23–27 | 🔄 Workflow                          |
| 27–33 | Syllabus demo                        |
| 33–38 | Data-analysis demo                   |
| 38–40 | Other agents/models + grading clip   |
| 40–43 | Responsible use + next steps         |
| 43–45 | Resources / questions / survey       |

---

# Build order

1. Finish repo structure.
2. Add Cengage PPTX to `presentation/`.
3. Create `README.md` and `AGENTS.md`.
4. Create the four Markdown source files.
5. Build the four-page website shell.
6. Configure GitHub Pages from `/docs`.
7. Generate the permanent QR code.
8. Build the opening and lecture-roadmap pages.
9. Build the Explanation content.
10. Build the Examples page.
11. Prepare synthetic demo data.
12. Build/test the syllabus demo.
13. Build/test the data demo.
14. Build the grading workflow and record it.
15. Create short fallback videos/GIFs.
16. Build the PowerPoint from the finalized website content.
17. Rehearse.
18. Cut anything that does not directly support **Brain → Infrastructure → Task → Workflow → Examples**.

That should now be the **canonical execution plan**.
