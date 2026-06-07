# 你不知道的 AI Coding：非技术人的上手、场景与实战

> 原文：https://tw93.fun/2026-04-26/ai-coding.html
> 作者：Tw93
> 发布时间：2026-04-26
> 分类：Share

## 太长不读

给产品和业务同学分享如何上手 AI Coding（非技术人也能用），重点推荐 Claude Code。核心要点：会用对话框 AI 就能上手命令行；把项目背景写进 CLAUDE.md；需求描述要精确；任务完成要验收。长文涵盖：命令行入门、技术通识、账号订阅、CLAUDE.md 写法、需求精确化、复杂任务处理、Skill 沉淀等。

---

## 第一道坎：命令行

推荐工具：**Kaku**（Tw93 做的 AI Coding 专用终端）
- 深色浅色跟随系统
- 分屏 `Cmd + D`，文件管理器 `Cmd + Shift + Y`
- 内置 AI 辅助：命令报错自动给修复建议

安装 Claude Code：
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

## 技术通识（补一点就不懵）

- **常用框架**：React、Vue、Next.js 大概解决什么问题
- **常用软件基础**：终端命令、Git、VS Code、Chrome 开发者工具
- **编程核心思想**：函数、变量和状态、为什么要拆成多个文件
- **读代码和读报错**：比自己会写代码更早派上用场

推荐入门易读书：
- 《启示录》— 产品判断
- 《Linux/Unix 设计思想》— 工程哲学
- 《左耳听风》— 程序员专家视野

## 账号与订阅

**账号注意：**
- 用 Gmail 注册，尽量用美国 IP，稳定网络环境
- 新账号不要直接包 Max，容易被封
- 不要合租或共用账号
- 付款用靠谱实体卡，虚拟卡（尤其是币圈渠道）容易秒封
- 用老 Gmail，别用新注册 Outlook

**订阅档次：**
| 档位 | 价格 | 包含 |
|------|------|------|
| Free | $0 | 基础对话，不含 Claude Code |
| Pro | $20/月 | 解锁 Claude Code，入门首选 |
| Max | $100 或 $200/月 | 5x 或 20x 用量，重度使用 |

## Claude Code 适合什么样的活

最适合：**目标清楚、结果好验收**的任务

- 做原型和内部小工具
- 处理 CSV、做销售报表
- 几十页合同提炼条款、对比版本差异
- 给链接或 PDF 从特定视角提炼信息

## Software for One

不做给一百万人用的 App，做只给你一个人用的软件。
- 语音批注转会议纪要
- 每天提醒你三件事的小仪表盘
- 产品/业务同学最容易做成，因为只有你最懂自己的麻烦在哪

**节奏：**
- 第 1 天：试水，让它改一个现成的 Excel 或 Markdown
- 第 1 周：做一个单页个人主页或日报大盘
- 第 1 个月：挑一件每周重复做两三遍的事变成一条命令或一个页面
- 第 3 个月：做一个只给自己用的 "software for one" 小工具

## OpenCLI：把网页操作变成命令

**OpenCLI**（卡比做的）内置小红书、知乎、Twitter/X、Bilibili 等站点 CLI 适配器。

- 小红书调研：Claude Code 调 `opencli xiaohongshu` 抓数据，分类和热词提炼
- 舆情汇总：Twitter/X、Reddit、HackerNews 同一关键词多平台自动拼成日报

## CLAUDE.md 写法

放在项目根目录，Claude Code 每次启动都会先读。

**四条最值钱的规则：**
1. 先问清楚再动手
2. 简单优先（能两行解决的不写两百行）
3. 只动该动的（不要顺手重构没让它改的代码）
4. 做完要验证（跑通构建和测试才算完）

**"压缩时保留"很重要**（长对话被自动压缩时保留优先级）：
1. 架构决策和背后的理由
2. 改过哪些文件、改了什么
3. 当前进展状态
4. 还没做完的 TODO

## 需求描述越精确越好

**模糊版**：帮我做一个客户跟进工具。
**精确版**：帮我做个销售用的跟进工具，单文件网页存本地。左边列表显示公司名、下次跟进时间、状态，右边详情包括沟通记录、日期、要点。顶部加三个筛选：状态、时间、关键词。数据存浏览器 localStorage，不调后端。

## 复杂任务先对答案：Plan 与 Auto 模式

- 按两次 `Shift+Tab` 切到 **Plan 模式**，先过方案再执行
- 开 **Auto 模式**，`Shift+Tab` 切到 auto 档，读文件这类安全操作直接跑，改数据库/删文件这类风险操作才来问

## 怎么确认它真的做对了

看三件事：
1. **命令过没过** — 构建和测试跑完绿灯
2. **眼见为实** — 页面打开看一眼、数字对一下
3. **对照清单** — 需求里写好的验收标准逐条过

## 改坏了怎么救回来

- **Git 快照**：大改前让它跑 `git status`，确认后 commit 检查点
- **撤销上一步**：`"撤销刚才所 有改动"` 或按 `/rewind`

## 避免"改了试试"死循环

根因没说清楚之前**先别动代码**。让它先答"问题出在哪个文件的哪一行，为什么会这样"，答清楚再改。

## Max 进阶配置

```bash
alias c='CLAUDE_CODE_AUTO_COMPACT_WINDOW=400000 claude --dangerously-skip-permissions'
```

模型用 **opusplan**：输入 `/model opusplan`，规划交给 Opus，执行交给 Sonnet，省钱省时间。

长会话：**任务做完就 `/clear`**，一个会话只做一件事。长任务结束前让它写 `HANDOFF.md`（包括做了什么、试过什么没成功、下一步该做什么）。

## Waza：把好习惯沉淀成 Skill

8 个技能对应一个好工程师该有的习惯：

| Skill | 用途 |
|-------|------|
| `/think` | 动手前先想技术方案 |
| `/design` | 设计产品化页面，拒绝 AI 模板感 |
| `/hunt` | 排查问题，根因没说清楚前先别动代码 |
| `/check` | 收工前 diff 审一遍 |
| `/read` | 把网页或 PDF 转成干净 Markdown |
| `/write` | 让表达更清晰 |
| `/learn` | 从收到出文章的研究流程 |
| `/health` | 给 CLAUDE.md 做体检 |

安装：`npx skills add tw93/Waza -g`

## Kami：AI 排版工具

把内容丢给它，说"帮我排成一页纸"或"做个作品集"，生成可下载 PDF。8 套模板：一页纸、作品集、幻灯片、Resume、长文档、信件、研报、Changelog。

安装：`npx skills add tw93/Kami -g`

## Claude Design（官方）

2026 年 4 月 Anthropic 官方推出：上传截图或文档，直接给能交互的原型、幻灯片或落地页。

## 安全习惯

- 让它先解释再动手（`CLAUDE.md` 里加一条：每次执行 Bash 命令前先用一句话解释要做什么）
- 看不懂的命令先问
- 生产环境不要拿来练手
- 密钥别直接粘到对话里，用环境变量或 `.env` 文件
- 能跑不代表安全，涉及登录、支付的功能用 Clerk 或 Stripe 现有服务

## 延伸阅读

- [你不知道的 Claude Code：架构、治理与工程实践](https://tw93.fun/2025-05-12/claude-code.html)
- [你不知道的 Agent：原理、架构与工程实践](https://tw93.fun/2025-03-15/agent.html)
- [你不知道的大模型训练：原理、路径与新实践](https://tw93.fun/2025-03-01/llm-train.html)
- [Claude Code Best Practices - Anthropic 官方](https://docs.anthropic.com/en/docs/claude-code)
- [vibe coding - Andrej Karpathy](https://x.com/karpathy/status/1894718733491690505)
- [Claude Skills are awesome - Simon Willison](https://simonwillison.net/2025/Mar/22/claude-skills/)
- [Malleable software in the age of LLMs - Geoffrey Litt](https://geoffreylitt.com/2025/03/malleable-software-llms)

---

*标签：#AI Coding #Claude Code #AI工具 #非技术人 #Tw93 #效率工具*
