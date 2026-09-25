# CCE 2026 Lecture Outline — Summary

## 1. The Brain
**What is actually doing the thinking?**

### What is an AI agent?
An agent is AI that can work toward a goal by using context and tools, not just answer a question.

Core concepts:
- Model — the AI "brain"
- Tokens — the units the model processes
- Context — what the model currently knows/sees
- Agent — model + context + instructions + tools + ability to act

### Chat vs. agent

**Regular AI chat**

```text
You ask → AI answers → You do the work
```

**Agent**

```text
You give a goal → AI examines → plans → acts → checks
```

Important distinction:
**Copilot Chat is the interface. Ask, Plan, and Agent are different ways of using that interface.**

### Copilot Chat modes

**Ask**
- explain something
- answer questions
- help understand code/files
- explore possibilities

**Plan**
- inspect the problem
- understand the project
- propose an implementation approach
- identify affected files before execution

**Agent**
- inspect files
- edit/create files
- run commands/tools
- perform multi-step work
- verify and iterate

---

## 2. The Infrastructure
**Where does the agent work?**

### What is a text editor?
A tool for directly editing plain-text files such as Markdown, HTML, CSS, JavaScript, Python, JSON, and CSV.

### What is VS Code?
A text editor plus a complete project workspace containing:
- files and folders
- editor
- terminal
- extensions
- Git
- AI agents

### What is a repository?
A project folder whose files and history are managed with Git.

**Local repository**
- lives on your computer

**GitHub repository**
- online copy of the project

### What is Git?
Tracks changes and versions.

### What is GitHub?
Hosts repositories online.

### What is GitHub Pages?
Publishes repository content as a public website.

### What is GitHub Copilot?
The AI/agent layer inside VS Code that can work with the project.

### Getting started
1. Create a GitHub account
2. Apply for **GitHub Education**
3. Install VS Code
4. Create or locate the GitHub repository
5. **Clone the repository into VS Code so you have a local working copy**
6. Enable GitHub Copilot
7. Sign in
8. Configure extensions as needed

**Key repository workflow:** GitHub repository → clone locally → work in VS Code → commit → push back to GitHub.

### Extensions
Extensions are apps for VS Code. Examples:
- GitHub Copilot
- Python
- database tools
- Markdown tools
- other AI assistants

Later/advanced:
- other model providers
- Codex
- Claude
- APIs
- MCP

---

## 3. The Task
**What do you actually tell the agent to do?**

Main idea:

```text
GOAL
+
CONTEXT
+
CONSTRAINTS
=
TASK
```

Example:

> Goal: Update my syllabus for Spring 2027.  
> Context: Here are the syllabus, schedule, and assignments.  
> Constraints: Don't change grading weights; flag anything uncertain.

Topics:
- files and folders
- URLs
- screenshots
- CSVs and data
- authoritative sources
- telling the agent what not to change
- asking it to inspect before editing
- asking it to verify afterward

---

## 4. The Workflow
**How do we work with an agent reliably?**

Main workflow:

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

Connection to Copilot:
- **Ask** → understand
- **Plan** → decide what should happen
- **Agent** → perform the work
- **You** → review and verify

### Workspace
Keep related project files together.

### `AGENTS.md`
Standing project instructions: "Always work this way."

### Reusable prompts
Save tasks you expect to repeat.

### Skills
Reusable task knowledge and procedures.

### Workflow
Multiple steps connected into a repeatable process.

Progression:

```text
PROMPT
  ↓
INSTRUCTIONS
  ↓
SKILL
  ↓
WORKFLOW
```

### Git in the workflow
Changes remain visible, reviewable, and reversible.

---

## 5. Examples
**This should be the largest section of the lecture.**

### Example 1 — How I built this presentation
Show the real repository and how the website is published with GitHub Pages.

### Example 2 — Update a syllabus
Demonstrate multi-file reasoning and document editing.

### Example 3 — Syllabus → interactive website
Show existing academic information transformed into a new digital artifact.

### Example 4 — Data analysis
CSV → analysis → visualization → interpretation.

### Example 5 — Repetitive academic work
Use grading or course maintenance to show why reusable workflows matter.

Key lesson:

> Doing it once = prompt.  
> Doing it reliably every semester = workflow.

---

## Simple Lecture Map

```text
🧠 THE BRAIN
Agent · Model · Tokens · Context
        ↓
🖥️ THE INFRASTRUCTURE
VS Code · Repository · GitHub · Copilot
        ↓
🎯 THE TASK
Goal · Context · Constraints
        ↓
🔄 THE WORKFLOW
Ask · Plan · Agent · Review · Verify
        ↓
🚀 EXAMPLES
Website · Syllabus · Data · Grading
```
