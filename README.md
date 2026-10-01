# AI Agents in VS Code for Academic Work

*From Prompting to Workflows*

A session by **Nim Dvir, PhD, MBA** (University at Albany, Massry School of Business) for the **Cengage Computing Experience 2026**.

**Website:** <https://nimdvir.github.io/cce-2026/> (short link: <https://spoo.me/cHzhyF2>)

**Slides:** [PDF](https://nimdvir.github.io/cce-2026/assets/cce-2026-slides.pdf) · [PowerPoint](presentation/cce-2026-slides.pptx)

The website is the presentation. I built it with AI agents inside VS Code, and the session shows how. This repository holds everything the site is made of, so you can read it, copy it, or build your own from it.

## What is in here

```text
cce-2026/
├── README.md            this file
├── AGENTS.md            standing instructions for any AI agent working here
├── requirements.txt     the one Python package the build needs
├── docs/                the website (GitHub Pages serves this folder)
│   ├── content/         the five pages, written in Markdown
│   ├── build.py         turns the Markdown into HTML and checks every link
│   ├── template.html    the shared page layout
│   ├── assets/          stylesheets, script, images, slides PDF
│   └── examples/        four walkthroughs with their prompts, reports and screenshots
├── presentation/        the slide deck, the official session description, the prompt index
└── .github/prompts/     saved prompts you can run from Copilot Chat
```

## The session in five parts

```text
🧠 THE BRAIN            Agents · Chat · Models · Tokens · Context
🖥️ THE INFRASTRUCTURE   Text Editor · VS Code · Repository · Git · GitHub · Copilot
🎯 THE TASK             Goal · Context · Constraints
🔄 THE WORKFLOW         Ask · Plan · Agent · Review · Skills
🚀 THE EXAMPLES         Website · Syllabus · Data Analysis · Courseware
```

Parts 1 to 4 are on the [Explanation page](https://nimdvir.github.io/cce-2026/explanation.html). Part 5 is the [Examples page](https://nimdvir.github.io/cce-2026/examples.html).

## The four examples

| Example | Walkthrough |
|---|---|
| From outline to conference website | [docs/examples/site/](docs/examples/site/) |
| From Word syllabus to HTML | [docs/examples/syllabus/](docs/examples/syllabus/) |
| One dataset, two AI analyses | [docs/examples/data-analysis/](docs/examples/data-analysis/) |
| Building interactive courseware | [docs/examples/courseware/](docs/examples/courseware/) |

Each folder has an `index.html` walkthrough, the prompts used, and screenshots. The data example shares aggregate results only. The raw course data and the analysis scripts are not in this repository.

## Build the site yourself

You need Python 3.

```bash
pip install -r requirements.txt
python docs/build.py
python -m http.server -d docs 8000
```

Then open <http://localhost:8000>. To change a page, edit the Markdown in `docs/content/` and run the build again. Don't edit the HTML files in `docs/` by hand, because the build overwrites them. The build stops with an error if a link, image, or anchor is broken.

If you want an agent to make the change, have it read `AGENTS.md` first.

## Notes

- The slides PDF may be one revision behind the PowerPoint file.
- `presentation/official-session-description.md` is the text submitted to Cengage. It is kept as submitted.

## License

MIT. See `LICENSE`.
