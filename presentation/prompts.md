# CCE 2026 — Saved Prompts

Every prompt used to build and demonstrate this project lives in `.github/prompts/`, one file per prompt, in the GitHub Copilot prompt-file format (`<name>.prompt.md` with a short front matter). This page is the index. The prompt text is not repeated here, so there is only one copy to keep correct.

The prompts that are shown in the session also appear verbatim, as copyable code boxes, on the website: `docs/content/explanation.md` and `docs/content/examples.md`.

## How to run a prompt file

1. Open this repository in VS Code.
2. Open Copilot Chat.
3. Type `/` followed by the file name without the extension, for example `/update-syllabus`, and press Enter.

Copilot loads the file as the prompt. If the front matter says `mode: agent`, it runs in Agent mode. You can also open the file and paste the text into any chat.

## The prompts

| Prompt | File | What it does | Where it appears on the site | Status |
|---|---|---|---|---|
| Clone the repository | [`clone-repository.prompt.md`](../.github/prompts/clone-repository.prompt.md) | Clones `nimdvir/cce-2026` locally, or safely updates it, before any work | Explanation → Infrastructure → Clone; Examples → Example 1 | Used |
| Write the site content | [`write-site-content.prompt.md`](../.github/prompts/write-site-content.prompt.md) | Wrote the four Markdown pages in `docs/content/` from the site outline | Examples → Example 1 | Used |
| Update the live banner | [`update-live-banner.prompt.md`](../.github/prompts/update-live-banner.prompt.md) | Demo 0. Edits the banner on the Intro page, rebuilds, commits, pushes | Examples → Example 1 | Draft |
| Update a syllabus | [`update-syllabus.prompt.md`](../.github/prompts/update-syllabus.prompt.md) | Demo 1. Updates the fictional course in `live/syllabus/` for Spring 2027 | Explanation → Task and Workflow; Examples → Example 2 | Draft |
| Build a course site | [`build-course-site.prompt.md`](../.github/prompts/build-course-site.prompt.md) | Example 3. Turns the same course files into a simple website | Examples → Example 3 | Draft |
| Analyze feedback | [`analyze-feedback.prompt.md`](../.github/prompts/analyze-feedback.prompt.md) | Demo 2. Summarizes `live/data/student-feedback.csv`, one chart, short interpretation | Examples → Example 4 | Draft |
| Grade submissions | [`grade-submission.prompt.md`](../.github/prompts/grade-submission.prompt.md) | Demo 3 (recorded). Runs the grading skill over `live/grading/submissions/` | Examples → Example 5 | Draft; needs the skill |
| Sync with GitHub | [`sync-with-github.prompt.md`](../.github/prompts/sync-with-github.prompt.md) | Commits local work, rebases onto the screenshots added on GitHub, pushes | Not shown on the site (project maintenance) | Ready to run |
| Build the site shell | [`build-site-shell.prompt.md`](../.github/prompts/build-site-shell.prompt.md) | Plan step 6. Template, stylesheet, script, `build.py`, `.nojekyll`; builds and verifies the four pages | Not shown on the site (project maintenance) | Ready to run, after Sync |

"Used" means the prompt has been run on this project. "Draft" means the wording is written but has not been run yet; confirm it against the fixtures in `live/` before the session. "Ready to run" is a maintenance prompt for the next work session, in the order listed.

## Adding a prompt

1. Save it as `.github/prompts/<name>.prompt.md` with `mode` and `description` front matter.
2. Add a row to the table above.
3. If it is shown in the session, paste it verbatim into the matching section of `docs/content/explanation.md` or `docs/content/examples.md`, then run `python docs/build.py`.
