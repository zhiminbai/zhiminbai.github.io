---
layout: post
title: AI Coding You Didn't Know About: Getting Started, Use Cases, and Practice for Non-Techies
date: 2026-04-2 07:00:00 +0800
summary: A comprehensive guide for product and business folks on how to get started with AI Coding — no technical background required. Covers Claude Code, CLAUDE.md best practices, precise prompting, and real-world use cases.
categories: Share
---

> Original: https://tw93.fun/2026-04-26/ai-coding.html
> Author: Tw93
> Published: 2026-04-26

## TL;DR

A guide for product managers and business folks on how to get started with AI Coding (even non-technical people can use it), with a strong recommendation for **Claude Code**. Core takeaways: if you can use a chatbot, you can use the command line; put project context in `CLAUDE.md`; be precise with requirements; always verify completed tasks. Covers: CLI basics, technical fundamentals, account setup, CLAUDE.md writing, precise requirements, complex task handling, and Skill templates.

---

## First Hurdle: The Command Line

Recommended tool: **[Kaku](https://github.com/tw93/kaku)** (an AI Coding terminal built by Tw93)
- Dark/light mode follows system settings
- Split panes with `Cmd + D`, file manager with `Cmd + Shift + Y`
- Built-in AI assistance: auto-suggested fixes when commands error

Install Claude Code:
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

## Tech Fundamentals (A Little Goes a Long Way)

- **Common frameworks**: what React, Vue, Next.js roughly solve
- **Basic software skills**: terminal commands, Git, VS Code, Chrome DevTools
- **Core programming concepts**: functions, variables and state, why code is split across files
- **Reading code and reading errors**: you'll do this before writing your own code

Recommended beginner-friendly books:
- *Inspired* — Product sense
- *The Unix Philosophy* — Engineering philosophy
- *Left Ear Listening* (左耳听风) — Expert developer perspective

## Account & Subscription

**Account tips:**
- Register with Gmail, preferably using a US IP with a stable network
- Don't subscribe to Max immediately on a new account — risk of being banned
- Don't share or co-own accounts
- Use a reliable physical card for payment; virtual cards (especially crypto channels) often get banned
- Use an older Gmail, not a newly registered Outlook

**Subscription tiers:**
| Tier | Price | What's Included |
|------|-------|-----------------|
| Free | $0 | Basic chat, no Claude Code |
| Pro | $20/mo | Unlocks Claude Code, best for starters |
| Max | $100 or $200/mo | 5× or 20× usage, heavy users |

## What Claude Code Is Good At

Best for: **tasks with clear goals and verifiable results**

- Building prototypes and internal tools
- Processing CSVs, creating sales reports
- Extracting terms from multi-page contracts, comparing document versions
- Summarizing links or PDFs from a specific perspective

## Software for One

Don't build apps for a million users — build software for *you*.
- Voice notes → meeting minutes
- A small dashboard reminding you of three priorities each day
- Product/business folks have the biggest advantage: no one knows your pain points better than you

**Pacing:**
- Day 1: Dip your toes in — have it modify an existing Excel or Markdown file
- Week 1: Build a single-page personal homepage or daily dashboard
- Month 1: Pick something you do 2-3 times a week and turn it into one command or one page
- Month 3: Build a "software for one" tool — for your eyes only

## OpenCLI: Turning Web Actions into Commands

**OpenCLI** (built by Kabi) comes with built-in CLI adapters for Xiaohongshu (Little Red Book), Zhihu, Twitter/X, Bilibili, and more.

- Xiaohongshu research: Claude Code calls `opencli xiaohongshu` to fetch data, classify, and extract trending keywords
- Sentiment roundup: Twitter/X, Reddit, and HackerNews — auto-compile a daily brief for the same keyword across platforms

## How to Write CLAUDE.md

Place it in your project root — Claude Code reads it every time it starts.

**Four most valuable rules:**
1. Ask questions first before taking action
2. Simplicity first (don't write 200 lines when 2 will do)
3. Only touch what you're asked to touch (don't refactor code it wasn't asked to change)
4. Verify when done (build and tests must pass)

**"Compress and preserve" matters** (priority items preserved when long conversations are auto-compressed):
1. Architecture decisions and their rationale
2. What files were changed and what changed
3. Current progress status
4. Pending TODOs

## Be Precise with Requirements

**Vague**: Build me a customer follow-up tool.
**Precise**: Build me a sales follow-up tool — a single-file web page saved locally. Left column shows company name, next follow-up time, and status. Right column shows conversation history, date, and key points. Add three filters on top: status, time, and keyword. Store data in browser localStorage, no backend required.

## Complex Tasks: Plan First with Plan & Auto Modes

- Press `Shift+Tab` twice to switch to **Plan mode** — review the approach before executing
- Enable **Auto mode** with `Shift+Tab` to auto mode — safe operations like reading files run directly; risky operations like modifying databases or deleting files still prompt for confirmation

## How to Verify It Did Things Right

Check three things:
1. **Did the commands pass** — build and tests all green
2. **See for yourself** — open the page and look, verify the numbers
3. **Check against the checklist** — go through every acceptance criterion in the requirements

## How to Recover When Things Go Wrong

- **Git snapshots**: before major changes, have it run `git status`, confirm, then commit a checkpoint
- **Undo last step**: say `"undo all changes from just now"` or use `/rewind`

## Avoid the "Try and See" Loop

Before touching any code, make sure the root cause is clear. Have it first answer "which file and which line is the problem, and why" — only then should it make changes.

## Max Advanced Configuration

```bash
alias c='CLAUDE_CODE_AUTO_COMPACT_WINDOW=400000 claude --dangerously-skip-permissions'
```

Use the **opusplan** model: type `/model opusplan` — planning goes to Opus, execution goes to Sonnet, saving both money and time.

Long sessions: **run `/clear` after each task** — one session, one task. Before ending a long task, have it write a `HANDOFF.md` (what was done, what was tried but failed, and what to do next).

## Waza: Turning Good Habits into Skills

8 skills that map to habits every good engineer should have:

| Skill | Purpose |
|-------|---------|
| `/think` | Think through the technical approach before coding |
| `/design` | Design product-grade pages — no AI template vibes |
| `/hunt` | Troubleshoot — don't touch code before root cause is clear |
| `/check` | Review the diff before wrapping up |
| `/read` | Convert web pages or PDFs into clean Markdown |
| `/write` | Make your expression clearer |
| `/learn` | Research workflow from reading to publishing |
| `/health` | Health check for CLAUDE.md |

Install: `npx skills add tw93/Waza -g`

## Kami: AI Formatting Tool

Throw your content at it and say "format this into one page" or "make a portfolio" — it generates a downloadable PDF. 8 templates: One Pager, Portfolio, Slides, Resume, Long Document, Letter, Research Report, Changelog.

Install: `npx skills add tw93/Kami -g`

## Claude Design (Official)

Released by Anthropic in April 2026: upload a screenshot or document, and it generates interactive prototypes, slides, or landing pages.

## Security Habits

- Have it explain before acting (add this to `CLAUDE.md`: before every Bash command, explain in one sentence what it's about to do)
- Ask about commands you don't understand
- Don't practice on production environments
- Never paste secrets directly into the chat — use environment variables or `.env` files
- It runs doesn't mean it's secure — use existing services like Clerk or Stripe for authentication and payments

## Further Reading

- [The Claude Code You Didn't Know: Architecture, Governance & Engineering Practices](https://tw93.fun/2025-05-12/claude-code.html)
- [The Agent You Didn't Know: Principles, Architecture & Engineering Practices](https://tw93.fun/2025-03-15/agent.html)
- [The LLM Training You Didn't Know: Principles, Paths & New Practices](https://tw93.fun/2025-03-01/llm-train.html)
- [Claude Code Best Practices - Anthropic Official](https://docs.anthropic.com/en/docs/claude-code)
- [vibe coding - Andrej Karpathy](https://x.com/karpathy/status/1894718733491690505)
- [Claude Skills are awesome - Simon Willison](https://simonwillison.net/2025/Mar/22/claude-skills/)
- [Malleable software in the age of LLMs - Geoffrey Litt](https://geoffreylitt.com/2025/03/malleable-software-llms)

---

*Tags: #AICoding #ClaudeCode #AITools #NonTechnical #Tw93 #Productivity*