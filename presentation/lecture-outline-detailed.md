# CCE 2026 — Complete Lecture & Website Outline

## Page 1 — Intro

### AI Agents in VS Code for Academic Work
**From Prompting to Workflows**

Topics/content:
- Nim Dvir, PhD, MBA
- University at Albany, Massry School of Business
- Cengage Computing Experience 2026
- Headshot
- Large QR code linking to this website
- Short URL
- Buttons:
  - **Start the Lecture**
  - **Download Slides**
  - **GitHub Repository**

### About Me
Keep this brief and visual.

Expand on:
- Teaching: databases, analytics, information systems, AI
- Research: HCI, UX, AI
- Building: courseware, websites, academic workflows
- Why you started using agents for academic work

### Opening Idea
> **This website is the presentation—and AI agents helped me build it.**

Briefly tell them they will see how it was created and modify parts of it during the session.

---

# Page 2 — Lecture Intro

## What Are We Doing Today?

Use the five-part visual:

**🧠 Brain → 🖥️ Infrastructure → 🎯 Task → 🔄 Workflow → 🚀 Examples**

### Part 1 — The Brain
What makes an agent intelligent?

Topics:
- AI agents
- models
- tokens
- context
- chat vs agents

### Part 2 — The Infrastructure
Where does the agent work?

Topics:
- text editors
- VS Code
- repositories
- Git
- GitHub
- GitHub Copilot
- extensions
- GitHub Education

### Part 3 — The Task
How do we tell agents what we want?

Topics:
- goals
- context
- constraints
- files and source material
- good instructions

### Part 4 — The Workflow
How do we work with agents repeatedly and reliably?

Topics:
- Ask
- Plan
- Agent
- review
- verification
- workspaces
- `AGENTS.md`
- prompts
- skills
- reusable workflows

### Part 5 — Examples
What can this actually do for academic work?

Examples:
- this presentation website
- syllabus revision
- syllabus → interactive website
- data analysis
- repetitive academic work / grading

---

## Learning Outcomes

By the end, participants should understand:

- what an AI agent is
- how an agent differs from normal AI chat
- what models, tokens, and context mean
- how VS Code, GitHub, and Copilot fit together
- what a repository is
- how to set up the basic environment
- how to give an agent a useful task
- how Ask, Plan, and Agent modes differ
- how to review agent work
- how project instructions and skills create repeatable workflows
- how agents can support real academic tasks

---

# Page 3 — Explanation

# Part I — 🧠 The Brain

## What Is an AI Agent?

Start here because this is the subject of the session.

### Simple definition
> An AI agent uses a model, context, instructions, and tools to work toward a goal through multiple steps.

### Simple process

**Goal → Inspect → Plan → Act → Check → Revise**

Expand on:
- agents can do more than generate an answer
- they can inspect their environment
- they can take actions
- they can work through multiple steps
- they can evaluate results and continue

---

## Chat vs. Agent

### Traditional web AI/chat

**You → Prompt → Response → Copy/Paste → Ask Again**

Expand on:
- conversational
- excellent for questions, writing, brainstorming
- user generally carries the output back into their work
- user coordinates most multi-step work

### Agentic workflow

**You → Goal → Agent works on the project**

Agent may:
- inspect files
- search
- create files
- edit existing files
- run commands
- analyze data
- use tools
- inspect results
- make corrections

### Important distinction
**Chat is the interface. An agent is a way the AI can operate.**

You personally use chat as the primary interface, but what happens behind that interface can range from answering a question to taking agentic actions.

---

## Copilot Chat: Ask, Plan, and Agent

This deserves a prominent section.

### Ask
Use when you want to:
- understand something
- ask questions
- explain code/files
- explore possibilities
- troubleshoot conceptually

### Plan
Use when you want the AI to:
- inspect the problem
- understand the project
- propose a sequence of changes
- identify affected files
- let you review the approach before execution

### Agent
Use when you want it to:
- modify files
- create files
- run commands
- use tools
- perform multi-step work
- verify and iterate

### Recurring lecture visual

**ASK → PLAN → AGENT → REVIEW**

Use this again during the demonstrations.

---

## What Can an Agent Do?

Examples:
- read one or many files
- search a workspace
- write and edit
- create websites
- run Python
- analyze CSVs
- generate visualizations
- call APIs
- use external tools
- interact with Git
- test output
- detect errors and revise

Also discuss what agents **cannot safely be assumed to do correctly**:
- know facts they were not given
- interpret ambiguous requirements correctly every time
- determine what matters pedagogically without guidance
- replace human review

---

## What Is a Model?

### Model vs. agent

**Model = reasoning/generation engine**

**Agent = model + context + instructions + tools + actions**

Expand on:
- models can differ in capability
- reasoning ability
- speed
- coding strength
- multimodal support
- context capacity
- cost

Do not dive into provider comparisons yet.

---

## What Are Tokens?

Explain simply:
- models process text in units called tokens
- tokens are not exactly words
- prompts use tokens
- documents use tokens
- conversation history uses tokens
- model output uses tokens

### Why faculty should care
- context limits
- long documents
- API pricing
- unnecessary context
- efficiency

---

## What Is Context?

### Visual

**Prompt + conversation + files + instructions + tool results = context**

Expand on:
- the agent can only reason from information it has access to
- relevant context usually matters more than making a prompt artificially elaborate
- project files can provide persistent context
- good project organization improves agent usefulness

Key idea:

> **Don't keep explaining the project. Put the project where the agent can understand it.**

---

# Part II — 🖥️ The Infrastructure

## What Is a Text Editor?

Explain from zero.

Examples:
- Notepad
- VS Code

Difference from Word:
- edits plain-text files directly
- doesn't hide structure behind a document format

Examples of text-based files:
- `.txt`
- `.md`
- `.html`
- `.css`
- `.js`
- `.py`
- `.json`
- `.csv`

### Why it matters for agents
Agents can inspect and directly modify these files.

---

## What Is VS Code?

> **A text editor that has evolved into a complete project workspace.**

Expand on:
- files and folders
- editor
- terminal
- extensions
- source control
- Git
- AI tools
- agents

### Visual

```text
VS CODE

Files
Editor
Terminal
Git
Extensions
AI Agents
```

Emphasize:
- attendees do not need to become software engineers
- VS Code is useful because many forms of academic work can be represented as files and projects

---

## What Is a Repository?

Very important beginner concept.

> **A repository is a project folder whose files and history are tracked with Git.**

### Local repository
Lives on your computer.

### Remote repository
Stored online, commonly on GitHub.

### What a repository contains
Potentially:
- documents
- data
- code
- websites
- instructions
- media references
- project history

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

## What Is Git?

Keep this practical.

Git:
- records changes
- lets you compare versions
- lets you restore earlier versions
- makes agent changes safer

Main message:

> **When an agent can change many files, version control becomes especially valuable.**

---

## What Is GitHub?

GitHub:
- hosts repositories online
- synchronizes projects
- supports collaboration
- stores version history
- integrates with Copilot
- can publish websites

---

## What Is GitHub Pages?

Explain using your presentation:

```text
VS Code
   ↓
Git
   ↓
GitHub Repository
   ↓
GitHub Pages
   ↓
This Website
```

This becomes important later when you show how this presentation was created.

---

## What Is GitHub Copilot?

Explain it as the AI layer inside the workspace.

Topics:
- Copilot Chat
- code suggestions
- Ask
- Plan
- Agent
- model selection
- tools
- project context

Simple visual:

**VS Code + Your Files + Copilot = Agentic Workspace**

---

# Configuration

## Create a GitHub Account

Brief walkthrough:
- account
- authentication
- profile
- repository access

Detailed step-by-step instructions should live on the website rather than consume lecture time.

---

## GitHub Education

This should be explicit because the audience is academic.

Cover:
- GitHub Education
- faculty/teacher verification
- student verification
- education benefits
- Copilot access/eligibility
- where to apply

Have:
- QR/link
- screenshots
- written instructions

---

## Install VS Code

Basic steps:
- download
- install
- launch
- sign into GitHub

---

## Clone the Repository Into VS Code

This is an important bridge between the online GitHub repository and the local workspace where the agent will work.

Explain:
- the repository is created or stored on GitHub
- **clone** means making a local copy of that repository on your computer
- the cloned folder is still connected to the GitHub remote
- you work locally in VS Code
- Git tracks changes locally
- **push** sends committed changes back to GitHub

### Visual

```text
GitHub repository
       ↓ clone
Local repository in VS Code
       ↓ edit / agent work
      Git
       ↓ commit + push
GitHub repository
```

### CCE 2026 example

Repository:
`https://github.com/nimdvir/cce-2026`

Use the saved prompt in `presentation/prompts.md` to have the local agent clone or safely update the repository before working.

---

## Enable GitHub Copilot

Show:
- sign into GitHub
- enable/install Copilot
- open Copilot Chat
- locate Ask / Plan / Agent
- choose a model when appropriate

---

## What Are Extensions?

> **Extensions are apps/plugins that add capabilities to VS Code.**

Examples:
- GitHub Copilot
- Python support
- Markdown tools
- database tools
- visualization tools
- AI assistants

Analogy:
> **VS Code is the platform; extensions are the apps.**

---

# Part III — 🎯 The Task

## What Makes a Good Agent Task?

Use:

**Goal + Context + Constraints = Task**

### Goal
What outcome do you want?

Bad:
> Fix my course.

Better:
> Update this syllabus and schedule for Spring 2027.

### Context
What information does the agent need?

Examples:
- syllabus
- schedule
- policy files
- screenshots
- URLs
- CSVs
- existing site
- reference documents

### Constraints
What must it preserve or avoid?

Examples:
- do not change grading weights
- do not invent missing dates
- preserve existing design
- don't commit changes
- flag uncertainty
- use only supplied data

---

## Prompting Agents

Topics to expand:
- be explicit about outcomes
- provide useful source files
- identify authoritative sources
- state boundaries
- tell the agent when to ask questions
- tell it when to inspect before editing
- request verification

---

## Context Instead of Giant Prompts

Contrast:

### Giant prompt
Repeatedly explains:
- course
- policies
- preferences
- conventions

### Project context
Those things already live in:
- source files
- `README`
- `AGENTS.md`
- workspace structure

Main message:

> **Move knowledge from the prompt into the workspace.**

---

# Part IV — 🔄 The Workflow

## A Reliable Agent Workflow

Main visual:

**UNDERSTAND → PLAN → ACT → REVIEW → VERIFY → REPEAT**

Map it to Copilot:

### Ask
Understand.

### Plan
Determine how to proceed.

### Agent
Execute.

### Human
Review and verify.

---

## Reviewing Agent Work

Show attendees how to inspect:
- files changed
- diffs
- terminal output
- generated output
- previews
- tests
- Git status

Teach:
> “Completed” does not necessarily mean “correct.”

---

## What Is a Workspace?

A workspace is the environment containing related project materials.

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

Discuss:
- organization
- discoverability
- relevant context
- separating inputs from outputs
- reducing accidental changes

---

## What Is `AGENTS.md`?

Very important section.

### Prompt
> Do this now.

### `AGENTS.md`
> Always work this way in this project.

Examples:
- don't invent facts
- inspect existing files first
- preserve accessibility
- use existing naming conventions
- don't commit or push unless told
- verify changes

Explain why persistent instructions improve consistency.

---

## Reusable Prompts

Topics:
- saving successful prompts
- prompt libraries
- parameterizing repeated tasks
- examples for semester updates, analysis, grading, websites

---

## Skills

Explain as:

> A reusable set of instructions and procedures for performing a type of task.

Topics:
- repeated task knowledge
- domain conventions
- validation steps
- tool use
- standardized outputs

---

## From Prompt to Workflow

Main visual:

**Prompt → Reusable Prompt → Project Instructions → Skill → Workflow**

Explain:

### Prompt
One task.

### Reusable prompt
A task you expect to repeat.

### Project instructions
Standing rules.

### Skill
Reusable expertise/procedure.

### Workflow
Multiple coordinated steps.

This directly supports the talk subtitle:

**From Prompting to Workflows**

---

# Advanced Ecosystem

## Models and Model Selection

Now expand beyond the default setup.

Topics:
- selecting among available models
- why different models behave differently
- quality vs speed vs cost
- choosing based on task

Keep provider comparisons secondary.

---

## Other Model Providers and Coding Agents

Only introduce these after attendees understand the default GitHub/VS Code/Copilot path.

Topics:
- OpenAI / Codex
- Anthropic / Claude
- other model providers
- other AI extensions
- specialized coding agents

Explain:
> These are alternatives or additions—not prerequisites.

---

## What Is an API?

Simple definition:

> **An API lets one piece of software communicate with another service.**

Examples:
- AI model APIs
- databases
- web services

Visual:

**Agent → API → External Service**

Topics:
- API keys
- cost
- permissions
- security
- never publishing API keys in repositories

---

## MCP and External Tools

Treat as advanced/optional.

Explain:
- connecting agents to outside tools
- external data/services
- expanding capabilities beyond files

Examples:
- databases
- GitHub
- Drive
- web services
- enterprise systems

---

# Responsible Agent Use

## Hallucinations and Errors
Agents can:
- invent plausible information
- misunderstand ambiguous requirements
- make technically valid but undesirable changes

---

## Privacy
Especially important academically:
- student data
- grades
- FERPA-sensitive material
- research participants
- unpublished research
- institutional information

---

## Human Review
Core principle:

> **Delegate work—not responsibility.**

---

## Version Control and Reversibility
Tie Git back into safety:
- inspect changes
- commit checkpoints
- revert
- recover

---

# Page 4 — Examples

# Example 1 — How I Built This Presentation Website

## The Finished Product
Start with the site attendees are currently viewing.

### Source materials
Show:
- Cengage template
- official session description
- outline
- prompts
- assets

### Repository

```text
cce-2026/
├── presentation/
├── live/
├── docs/
├── assets/
├── AGENTS.md
└── README.md
```

### Process

```text
Idea
 ↓
GitHub Repository
 ↓ clone
Local VS Code Workspace
 ↓
Presentation Source Material
 ↓
Agent
 ↓
Website
 ↓
GitHub
 ↓
GitHub Pages
```

### Live component
Ask the agent to modify something visible.

Push it.

Audience refreshes.

---

# Example 2 — Update a Syllabus

## Inputs
- syllabus
- schedule
- policies
- assignments

## Task
Example:
> Update the course for the new semester without changing grading weights. Identify inconsistent dates and flag anything requiring judgment.

## Demonstrate
- context
- multi-file reasoning
- Plan mode
- Agent mode
- diff/review

---

# Example 3 — Turn a Syllabus Into an Interactive Course Website

## Inputs
Same academic material.

## Output
- homepage
- weekly schedule
- assignments
- grading
- policies
- resources

### Lesson
One set of source information can support multiple outputs.

---

# Example 4 — Data Analysis

## Input
`student-feedback.csv`

## Agent workflow

**CSV → Inspect → Analyze → Visualize → Interpret → Publish**

Expand on:
- understanding columns
- choosing analysis
- running Python
- visualizations
- summarizing findings
- adding results to a report/site

---

# Example 5 — Grading / Repetitive Academic Work

## Inputs
- assignment
- rubric
- student submission

## Potential workflow
- inspect submission
- apply rubric
- identify evidence
- calculate score
- draft feedback
- output structured results

### Main lesson

> **One submission can be a prompt.  
> A hundred submissions require a workflow.**

Perfect transition back to skills and reusable systems.

---

# Example 6 — Other Academic Uses

Brief gallery rather than full demos.

Possible examples:
- course redesign
- lecture materials
- research coding
- literature organization
- document conversion
- data cleaning
- website maintenance
- administrative tasks
- repetitive file processing
- documentation

---

# Final Section — What Should You Try First?

## Beginner
Open a real project folder in VS Code.

## Next
Ask Copilot to inspect it.

## Then
Give it a multi-file task.

## Then
Create an `AGENTS.md`.

## Finally
Turn something repetitive into a reusable workflow.

---

# Resources

At the bottom of the Examples page.

## Downloads
- presentation slides
- example repository
- prompts
- example files
- setup guide

## GitHub Resources
- GitHub Education
- GitHub Copilot setup
- VS Code
- GitHub Copilot documentation
- prompting resources

## Advanced Resources
- models
- APIs
- Codex
- Claude
- MCP
- extensions

## Media
- demo recordings
- GIF/video clips
- screenshots

## Contact
- Nim Dvir
- University at Albany
- website
- LinkedIn
- GitHub

## Final QR Code
Return to the same QR code from the opening.

---

# Final Lecture Map

The simplest visual for the entire session should be:

**🧠 THE BRAIN**  
Agents · Chat · Models · Tokens · Context

↓  

**🖥️ THE INFRASTRUCTURE**  
VS Code · Repository · Git · GitHub · Copilot · Extensions

↓  

**🎯 THE TASK**  
Goal · Context · Constraints

↓  

**🔄 THE WORKFLOW**  
Ask · Plan · Agent · Review · Skills

↓  

**🚀 THE EXAMPLES**  
Website · Syllabus · Course Site · Data · Grading

This is the structure to use for the lecture and the website.
