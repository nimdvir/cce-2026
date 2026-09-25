# CCE 2026 — Saved Prompts

These prompts are used while building and demonstrating the CCE 2026 project.

## Clone / Update the Repository Locally

Use this with a local VS Code agent before beginning work on the project.

> I want to work locally on the CCE 2026 repository:
>
> https://github.com/nimdvir/cce-2026
>
> Clone it into my normal local GitHub workspace as `cce-2026` if it is not already present.
>
> If the repository already exists locally, **do not overwrite or discard any local work**. First inspect the repository and run `git status`. If there are uncommitted changes, stop and tell me what you found before pulling anything. If the working tree is clean, fetch from `origin` and update the local `main` branch using a safe fast-forward-only pull.
>
> Verify before finishing:
> - the remote `origin` points to `https://github.com/nimdvir/cce-2026`
> - the current branch is `main`
> - the local branch is up to date with `origin/main`
> - the repository opens correctly as the VS Code workspace
>
> Do not create, edit, delete, commit, or push project files yet. This task is only to get the repository safely available locally and ready for work.
>
> When finished, report the local folder path, current branch, Git status, and whether it is synchronized with GitHub.

### What this demonstrates

```text
GitHub repository
       ↓ clone
Local repository
       ↓
VS Code workspace
       ↓
Work locally
       ↓
commit + push
       ↓
GitHub
```

This is a core infrastructure step in the lecture because it connects the online repository to the workspace where the agent can inspect and modify project files.
