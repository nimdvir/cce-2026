# CCE 2026 — AI Agents in VS Code for Academic Work

*From Prompting to Workflows*

A presentation by **Nim Dvir, PhD, MBA** (University at Albany, Massry School of Business) for the **Cengage Computing Experience 2026**.

This repository is the presentation. It holds the source for the public website, the slide deck, and the live demos. AI agents working inside VS Code helped build all of it, and the session shows how.

**Website:** *coming soon — published from `docs/` via GitHub Pages*

## What is in here

```text
cce-2026/
├── AGENTS.md            standing instructions for any AI agent working here
├── README.md            this file
├── presentation/        session description, lecture outlines, plans, prompts, slides
├── docs/                the public website (Markdown source in docs/content/, generated HTML)
├── live/                synthetic material for live demos (fake course, data, submissions)
├── assets/images/       headshot, QR code, diagrams, screenshots
└── .github/             reusable prompt files and skills
```

## The lecture in five parts

```text
🧠 THE BRAIN            Agents · Chat · Models · Tokens · Context
🖥️ THE INFRASTRUCTURE   Text Editor · VS Code · Repository · Git · GitHub · Copilot
🎯 THE TASK             Goal · Context · Constraints
🔄 THE WORKFLOW         Ask · Plan · Agent · Review · Skills
🚀 THE EXAMPLES         Website · Syllabus · Course Site · Data · Grading
```

## How this repository was built

The content started as Markdown outlines in `presentation/`. An agent turned those into the four Markdown pages in `docs/content/`, and a small Python script renders them into the website. The slides were generated from the same content on the Cengage template. The plan that guided the build is `presentation/plan-claude.md`, and the prompts used along the way are in `presentation/prompts.md`.

## Working on it yourself

1. Clone the repository and open the folder in VS Code.
2. Read `AGENTS.md` before asking an agent to change anything.
3. Edit `docs/content/*.md`, then run `python docs/build.py` to regenerate the site.

## License

MIT. See `LICENSE`.
