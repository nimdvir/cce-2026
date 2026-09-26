# Image directory

Six single-panel diagrams cut from `generated/gpt-all-six.png`, saved in `generated/`. The numbered title at the top of each panel was removed, so every file stands alone and can be dropped into slides, pages, or handouts. The original combined image (with titles) stays at `generated/gpt-all-six.png`.

| File | Description |
|---|---|
| `generated/1-what-makes-an-agent.png` | Inputs (context) feed a reasoning core that plans and decides, acts through tools, and produces results such as files, terminals, and apps. |
| `generated/2-tokens-and-the-context-window.png` | Every source (files, code, data, command output) consumes tokens; the context window has finite capacity, and material that exceeds it is not included in the model's response. |
| `generated/3-plain-text-vs-complex-file-formats.png` | Why plain text files are directly readable, transparent, and easy to edit, while Word, Excel, and PDF documents may need built-in support, an extension, or conversion before an agent can reliably inspect or edit them. |
| `generated/4-from-one-prompt-to-a-workflow.png` | The path from a single prompt and result, to reusable prompts, to persistent project instructions and skills, to a repeatable multi-step workflow with verification. |
| `generated/5-from-course-files-to-an-interactive-website.png` | Course source files (syllabus, schedule, assignments, grading, policies) are organized and transformed by an agent into an interactive course website. |
| `generated/6-ai-assisted-grading-workflow.png` | Assignment instructions, a grading rubric, and a student submission go in; structured scores and evidence-based feedback come out for instructor review, edit, and approval. |
| `generated/five-part-structure.png` | The five-part map of the session as five stacked, arrow-linked panels — 🧠 The Brain, 🖥️ The Infrastructure, 🎯 The Task, 🔄 The Workflow, 🚀 The Examples — each with its keywords. Generated with Nano Banana (Gemini); known defect: the Infrastructure subtitle reads "INFRASTRCTURE" (missing U). |

The first-party interface screenshots in this folder are catalogued separately in `README.md`.

For the website, `python docs/build.py` mirrors `assets/images/` into `docs/assets/images/`, so these panels appear at `docs/assets/images/generated/`. Standalone copies also live in `docs/assets/`.
