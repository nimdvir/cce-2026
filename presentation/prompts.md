# CCE 2026: saved prompts

This page is the index of the prompts in this repository. The prompt text is not repeated here, so there is only one copy to keep correct.

## How to run a prompt file

1. Open this repository in VS Code.
2. Open Copilot Chat.
3. Type `/` followed by the file name without the extension, for example `/update-syllabus`, and press Enter.

Copilot loads the file as the prompt. The `agent: agent` line at the top makes it run in Agent mode. You can also open the file and paste the text into any chat.

## Project prompts in `.github/prompts/`

| Prompt | File | What it does | Where it appears on the site |
|---|---|---|---|
| Clone the repository | [`clone-repository.prompt.md`](../.github/prompts/clone-repository.prompt.md) | Clones `nimdvir/cce-2026` locally, or safely updates it, before any work | Explanation, section 2.8 |
| Update a syllabus | [`update-syllabus.prompt.md`](../.github/prompts/update-syllabus.prompt.md) | A three-line teaching example. `syllabus/` stands for your own course folder | Explanation, sections 3.1 and 4.5 |
| Write the site content | [`write-site-content.prompt.md`](../.github/prompts/write-site-content.prompt.md) | The original prompt that wrote the first four pages of the site. Kept as written. The outline files it names were in the working folder and are not in this repository | Website walkthrough, step 2 |

## Example prompts in `docs/examples/`

Each walkthrough keeps the prompts it uses next to it.

| Example | Prompt folder |
|---|---|
| From outline to conference website | [`docs/examples/site/prompts/`](../docs/examples/site/prompts/) |
| From Word syllabus to HTML | [`docs/examples/syllabus/prompts/`](../docs/examples/syllabus/prompts/) |
| One dataset, two AI analyses | [`docs/examples/data-analysis/prompts/`](../docs/examples/data-analysis/prompts/) |
| Building interactive courseware | [`docs/examples/courseware/prompts/`](../docs/examples/courseware/prompts/) |

## Adding a prompt

1. Save it as `.github/prompts/<name>.prompt.md` with `agent` and `description` lines at the top.
2. Add a row to the table above.
3. If it is shown in the session, paste it word for word into the matching section of `docs/content/explanation.md` or `docs/content/examples.md`, then run `python docs/build.py`.
