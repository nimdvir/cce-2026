---
mode: agent
description: Clone the CCE 2026 repository into the local GitHub workspace, or safely update it if it already exists. Run before any work on the project.
---

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
