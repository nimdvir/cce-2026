# Examples

Four projects I finished with an agent. Each one starts with the result. Open the walkthrough if you want to see the prompts I used, the steps, and what I checked.

[1. Website](#this-website) · [2. Syllabus](#syllabus) · [3. Data analysis](#data) · [4. Courseware](#courseware) · [Resources](#resources)
{: .section-menu }

**During the session:** keep this page open. Results and walkthroughs open in a new tab, so you can always come back here. I prepared every project ahead of time. If we do anything live, it will be one small change.

<ol class="project-overview" markdown="1">

<li markdown="block" id="this-website">

## From outline to conference website

A lecture outline becomes Markdown pages, the pages become HTML, and GitHub Pages puts them online.

1. Outline the pages and the order you'll teach them in.
2. Ask the agent to draft the pages and build the site.
3. Read what it made, fix what's wrong, then publish.

<figure><a href="examples/site/images/result.png" target="_blank" rel="noopener" aria-label="Enlarge image: Conference website introduction page with session title and presenter photo"><img src="examples/site/images/result.png" alt="Conference website introduction page with session title and presenter photo" loading="lazy"></a><figcaption>Prepared screenshot of the finished result. Click to enlarge.</figcaption></figure>

**What this teaches:** The agent builds the pages. Your outline and your review decide what they say.

<div class="example-actions"><a href="https://nimdvir.github.io/cce-2026/" target="_blank" rel="noopener">Finished website <span class="new-window">↗<span class="sr-only"> (opens in new tab)</span></span></a> <a href="examples/site/index.html" target="_blank" rel="noopener">Detailed walkthrough <span class="new-window">↗<span class="sr-only"> (opens in new tab)</span></span></a> <a href="https://github.com/nimdvir/cce-2026/tree/main" target="_blank" rel="noopener">Public repository <span class="new-window">↗<span class="sr-only"> (opens in new tab)</span></span></a></div>

</li>

<li markdown="block" id="syllabus">

## From Word syllabus to HTML

An older Word syllabus becomes a web page you can navigate. The content changes get reviewed separately from the formatting.

1. Look at the Word file and keep its content intact.
2. Build the web layout, then review what changed for the new semester.
3. Check the dates, the grading weights, and the links.

<figure><a href="examples/syllabus/images/html-title.png" target="_blank" rel="noopener" aria-label="Enlarge image: Title area of the current BITM 330 HTML syllabus"><img src="examples/syllabus/images/html-title.png" alt="Title area of the current BITM 330 HTML syllabus" loading="lazy"></a><figcaption>Prepared screenshot of the finished result. Click to enlarge.</figcaption></figure>

**What this teaches:** Converting a document doesn't check it. You still have to read it.

<div class="example-actions"><a href="https://database-textbook.dimapublishing.com/files/bitm330/fall26/syllabus" target="_blank" rel="noopener">Finished syllabus <span class="new-window">↗<span class="sr-only"> (opens in new tab)</span></span></a> <a href="examples/syllabus/index.html" target="_blank" rel="noopener">Detailed walkthrough <span class="new-window">↗<span class="sr-only"> (opens in new tab)</span></span></a></div>

</li>

<li markdown="block" id="data">

## One dataset, two AI analyses

Claude and DeepSeek each analyzed the same BITM 330 form export. Their reports and charts sit side by side, so you can see where they made different choices.

1. Say what the task is, which file to use, and what counts as one row.
2. Open both reports and compare the charts on the same question.
3. Check how each one grouped the answers and what it divided by.

<figure><a href="examples/data-analysis/images/claude-submissions.png" target="_blank" rel="noopener" aria-label="Enlarge image: Claude report bar chart of form submissions across eight class sessions, from 310 to 283"><img src="examples/data-analysis/images/claude-submissions.png" alt="Claude report bar chart of form submissions across eight class sessions, from 310 to 283" loading="lazy"></a><figcaption>Prepared screenshot of the Claude session chart; both reports are linked below. Click to enlarge.</figcaption></figure>

**What this teaches:** Two AIs can get different numbers from the same data. Ask how each number was counted.

<div class="example-actions"><a href="examples/data-analysis/claude/BITM330-Fall2026-analysis.html" target="_blank" rel="noopener">Claude result <span class="new-window">↗<span class="sr-only"> (opens in new tab)</span></span></a> <a href="examples/data-analysis/deepseek/report.html" target="_blank" rel="noopener">DeepSeek result <span class="new-window">↗<span class="sr-only"> (opens in new tab)</span></span></a> <a href="examples/data-analysis/index.html" target="_blank" rel="noopener">Comparison walkthrough <span class="new-window">↗<span class="sr-only"> (opens in new tab)</span></span></a></div>

</li>

<li markdown="block" id="courseware">

## Building interactive courseware

A look at how the live courseware is put together: the chapters, the reader, student accounts, and hosting.

1. Organize the chapter and lab files.
2. Connect the reader, the accounts, and the build.
3. Review each change, then deploy through Vercel.

<figure><a href="examples/courseware/images/result.png" target="_blank" rel="noopener" aria-label="Enlarge image: Public courseware landing page with title, book cover and chapter navigation"><img src="examples/courseware/images/result.png" alt="Public courseware landing page with title, book cover and chapter navigation" loading="lazy"></a><figcaption>Prepared screenshot of the finished result. Click to enlarge.</figcaption></figure>

**What this teaches:** A big project is the same routine repeated: one small task, then a review.

<div class="example-actions"><a href="https://database-textbook.dimapublishing.com/" target="_blank" rel="noopener">Live courseware <span class="new-window">↗<span class="sr-only"> (opens in new tab)</span></span></a> <a href="examples/courseware/index.html" target="_blank" rel="noopener">Project walkthrough <span class="new-window">↗<span class="sr-only"> (opens in new tab)</span></span></a></div>

</li>

</ol>

## What to try first {#try-first}

1. Pick a small task where you'll know when it's done.
2. Open the files it needs and tell the agent what it's allowed to change.
3. Ask for a plan first. Check the result. If the prompt worked, save it.

## Other applications {#more-uses}

The same routine works for lecture materials, course redesign, research coding, document conversion, and any file chore you repeat. Start with one small task and check the result before you take on more.

## Resources {#resources}

**Presentation**

<div class="slides-embed"><iframe src="https://drive.google.com/file/d/1J1QZxjWu0DPT4La-KMcts4lXj50kY68j/preview" title="CCE 2026 presentation slides" loading="lazy" allowfullscreen></iframe></div>

- [Download the presentation (PDF)](assets/cce-2026-slides.pdf)

**This project**

- [Setup guide](explanation.html#setup)
- [Public CCE repository](https://github.com/nimdvir/cce-2026){: target="_blank" rel="noopener" }
- Each walkthrough links to its saved prompts and files.

**GitHub and VS Code**

- GitHub Copilot setup: [Set up GitHub Copilot in VS Code](https://code.visualstudio.com/docs/setup/copilot)
- VS Code download: [code.visualstudio.com/download](https://code.visualstudio.com/download)
- Copilot documentation: [Copilot Chat overview](https://code.visualstudio.com/docs/chat/chat-overview)
- VS Code agent guides: [Introduction to agent-first development](https://code.visualstudio.com/learn/foundations/introduction-to-agent-first-development) · [Reviewing and controlling agent changes](https://code.visualstudio.com/learn/foundations/reviewing-and-controlling-agent-changes) · [Using tools with agents](https://code.visualstudio.com/learn/agents/1-using-tools-with-agents)

**Beyond Copilot**

- Model documentation: [Changing the AI model for Copilot Chat](https://docs.github.com/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat)
- Other agents in VS Code: [Using third-party agents in VS Code](https://code.visualstudio.com/learn/agents/4-using-third-party-agents-in-vs-code)
- MCP: [Extending agents with MCP servers](https://code.visualstudio.com/learn/agents/2-extending-agents-with-mcp-servers)
- Extensions: [Agent plugins](https://code.visualstudio.com/learn/agents/3-agent-plugins)

## Stay in touch {#contact}

Nim Dvir · University at Albany · [nimdvir.com](https://nimdvir.com) · [LinkedIn](https://linkedin.com/in/nimdvir/) · [GitHub](https://github.com/nimdvir)

![QR code for the conference website](assets/images/qr-site.png)

**Next →** [Stay in touch](about.html)
