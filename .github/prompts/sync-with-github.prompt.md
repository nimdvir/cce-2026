---
mode: agent
description: Check what changed on GitHub, commit the local work, integrate both sides safely, and push so the live and local repositories match. Run before build-site-shell.
---

The local repository and GitHub have diverged, and I want them brought back together without losing anything on either side.

What I know:

- On GitHub, screenshots were added to `assets/images/` through the web interface in three commits ("Add official interface screenshots for CCE presentation", "Add second batch of instructional screenshots", "Add final utility screenshot batch"). About twenty PNG files, all small.
- Locally, `main` has four commits that were never pushed: the Cengage template and headshot, the folder skeleton, `AGENTS.md`, and the README.
- Locally there is also uncommitted work: the four site pages in `docs/content/`, the prompt files in `.github/prompts/`, `presentation/prompts.md`, `presentation/site-outline-claude.md`, and a one-paragraph edit to `AGENTS.md`.
- The two sides should not touch the same files. GitHub added new files under `assets/images/`; local added `assets/images/headshot2025-cloud.jpg` and files elsewhere.

Read `AGENTS.md` first. Then work in this order and stop to report at any surprise.

1. **Inspect before changing anything.** Run `git status`, `git fetch origin`, `git log --oneline --left-right main...origin/main`, and `git diff --stat main...origin/main` (three dots, so it shows only what changed on GitHub). Report the list of files added or changed on GitHub with their sizes, and confirm that none of them overlaps a file that is modified or untracked locally. If anything overlaps, stop and show me.
2. **Check what is coming in.** Confirm the incoming files are only images under `assets/images/`, that none is a raw recording or larger than a couple of megabytes, and that nothing in them or in the commit messages suggests real student data or secrets. If something looks wrong, stop and show me.
3. **Commit the local work** in two commits with short imperative subjects, and nothing else:
   - `Add site outline and Markdown source for the four site pages` for `presentation/site-outline-claude.md` and `docs/content/*.md`.
   - `Consolidate prompts into .github/prompts and index them` for `.github/prompts/*.prompt.md`, `presentation/prompts.md`, and `AGENTS.md`.
   After this, `git status` must be clean. Do not add ignored files and do not use `git add -A` blindly; add the listed paths.
4. **Integrate.** Run `git rebase origin/main` so the local commits replay on top of the GitHub commits and history stays linear. If the rebase reports a conflict, do not resolve it by discarding either side; stop and show me the conflicting files. Do not use `git reset --hard`, `git clean`, `git checkout -- .`, or any force option at any point.
5. **Verify before pushing.** Confirm: the branch is `main`; `git status` is clean; `git log --oneline origin/main..main` shows only the local commits; every screenshot from step 1 is present in `assets/images/`; `assets/images/headshot2025-cloud.jpg` and `presentation/cengage-template.pptx` are still present; `docs/content/` has its four pages; `.github/prompts/` has all its prompt files.
6. **Push** with a plain `git push origin main`. Then confirm `git rev-parse main` and `git rev-parse origin/main` are identical.
7. **Report:**
   - a table of the files that came from GitHub: file name, size, and the section of `docs/content/explanation.md` it most likely illustrates, judged from the file name (this is a suggestion for a later step; do not edit any content now);
   - the two commits made locally, with their hashes;
   - the final state: branch, whether local and remote are identical, and the last five commits on `main`.
