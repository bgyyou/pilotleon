/**
 * PilotLeon v2.0 — Projects Data
 *
 * 通用项目结构（v2.1）:
 *   - 头部: id / name / tagline / cover / coverGradient / tags / role / year / status / color / repo
 *   - 5 段正文: background / challenge / approach / results
 *   - 可选: tech[] / metrics[] / highlights[] / codeSnippet{} / gallery[] / links[]
 *
 * 排序: trilogyOrder (三部曲) + otherOrder (其他独立项目)。
 * 添加新项目:
 *   1. 在本文件末尾追加项目对象
 *   2. 把 id 加进 trilogyOrder 或 otherOrder
 *   3. 新项目的 5 段字段可以留空 (UI 会显示「待补」占位)
 *   4. 老项目不补 5 段字段也没事，组件会自动 fallback 到 problem/solution/architecture
 */

export const projects = [
  // ============================================
  //  TRILOGY · ACT 1
  // ============================================
  {
    id: 'wda',
    name: { zh: 'WDA · Workflow Discovery Agent', en: 'WDA · Workflow Discovery Agent' },
    tagline: {
      zh: '把"我该怎么用 AI"的焦虑，拆成 7 天 MVP 计划。',
      en: 'Turn "how do I use AI?" into a 7-day MVP plan.',
    },
    cover: '/projects/wda-cover.png',
    coverGradient: 'linear-gradient(135deg, #00FFD1 0%, #00C9A7 50%, #008B7A 100%)',
    tags: ['Agent', 'SaaS', 'Anthropic SDK', 'FastAPI'],
    role: 'Sole PM + Engineer',
    year: '2025 — 2026',
    status: { zh: '已上线 · 内测中', en: 'Live · Private beta' },
    color: '#00FFD1',
    repo: 'https://github.com/bgyyou/searchengine',

    gallery: [
      {
        image: '/images/projects/gallery/wda-cover-new.png',
        alt: { zh: "WDA 营销页 hero - AI Agent 驱动的业务流程研究助手", en: "WDA marketing hero - AI Agent-powered business research assistant" },
        title: { zh: "AI Agent 驱动的业务流程研究助手", en: "AI Agent-powered business research assistant" },
        body: { zh: "把\"我想做一个 X 流程的 AI 改造\"变成可执行方案。WDA 自动检索行业资料,拆解标准工作流,识别痛点,输出 7 天 MVP 计划——5 分钟拿到一份有据可查的产品方案,而不是一份模糊的咨询 PPT", en: "Turn \"I want to AI-transform process X\" into an executable plan. WDA auto-searches industry material, decomposes standard workflows, identifies pain points, outputs a 7-day MVP plan — get a data-backed product proposal in 5 minutes, not a vague consulting deck." }
      },
      {
        image: '/images/projects/gallery/wda-08-q-and-a.png',
        alt: { zh: "WDA 问一个问题 → 拿一份方案 - 智能检索 / 流程拆解 / MVP 方案", en: "WDA: question to proposal - smart search / workflow decomp / MVP plan" },
        title: { zh: "问一个问题，拿一份方案：智能检索 + 流程拆解 + MVP", en: "Ask one question, get a plan: smart search + workflow decomp + MVP" },
        body: { zh: "传统 AI 聊天只能给建议,WDA 把研究 + 拆解 + 方案三件事一次做完。① 智能检索:Agent 自动搜索公开资料 + 三层过滤(规则/LLM/关键词加权),留下真实流程文章,过滤掉产品页/百科/AI 工具站 ② 流程拆解:9 步状态机硬约束,工具调用顺序 100% 稳定,不再靠 LLM \"自觉\" ③ MVP 方案:7 天详细任务清单 + ROI 测算 + 证据链,每条结论标注来源 URL + 原文片段,可直接交付给老板或客户", en: "Traditional AI chat only gives advice; WDA does research + decomp + plan in one go. ① Smart search: agent auto-searches public material + 3-layer filter (rules / LLM / keyword weighting) — keeps real workflow articles, filters out product pages / wiki / AI tool sites ② Workflow decomp: 9-step state machine hard constraints, 100% stable tool call order, no LLM \"self-awareness\" ③ MVP plan: 7-day task list + ROI calc + evidence chain, every conclusion tagged with source URL + original snippet, directly deliverable to boss or client." }
      },
      {
        image: '/images/projects/gallery/wda-09-why-wda.png',
        alt: { zh: "WDA 设计初衷 - 为什么是 WDA 而不是又一个聊天 AI", en: "WDA design rationale - why WDA, not another chat AI" },
        title: { zh: "为什么是 WDA，而不是又一个聊天 AI？", en: "Why WDA, not just another chat AI?" },
        body: { zh: "调研 100 个真实业务场景后发现:用户最痛的不是\"问不到\",而是\"问到的不敢用\"。传统 AI 助手能回答\"怎么做银行贷款审批\",但答案像维基百科——读起来都对,用起来抓瞎。WDA 的解法:每条结论背后都有真实证据链 (URL + 原文片段 + 相关度评分) / 9 步状态机硬约束,工具调用顺序 100% 稳定 / force_finish 兜底,即便 LLM 抽风也会强制生成报告 / 三层证据过滤,产品页/百科/字典污染全部 hard cap / 5-10 分钟出一份可执行方案,30 天内可二次迭代", en: "After 100 real business scenarios: the pain isn't \"can't find an answer\" — it's \"the answer isn't trustworthy\". Traditional AI can answer \"how to do bank loan approval\" but the answer reads like Wikipedia — sounds right, useless in practice. WDA's fix: every conclusion backed by real evidence chain (URL + original snippet + relevance score) / 9-step state machine hard constraints, 100% stable tool order / force_finish fallback forces report output even if LLM hallucinates / 3-layer evidence filter, product pages / wiki / dictionary contamination all hard-capped / executable plan in 5-10 minutes, re-iterable within 30 days." }
      },
      {
        image: '/images/projects/gallery/wda-02-evidence-chain.png',
        alt: { zh: "WDA 工作流证据链", en: "WDA workflow evidence chain" },
        title: { zh: "证据链：18 条来源 + 三层评分 + LLM 摘要", en: "Evidence chain: 18 sources + 3-layer score + LLM summary" },
        body: { zh: "每条证据带 4 个标签:标题 / URL / score 8.0 (满分 10) / Layer 2 (LLM 评分) / 字数 / LLM 摘要。Dev.to 文章命中关键词 \"verify_customer_eligibility + AI workflow\",URL 路径深但内容专业——内容农场检测(知乎/百度百科)会自动降权", en: "Each evidence tagged: title / URL / score 8.0 (out of 10) / Layer 2 (LLM scoring) / char count / LLM summary. Dev.to article hits \"verify_customer_eligibility + AI workflow\", URL deep but content expert — content farm detection (Zhihu/Baidu Baike) auto down-weights." }
      },
      {
        image: '/images/projects/gallery/wda-03-workflow-comparison.png',
        alt: { zh: "WDA 流程图对比 - 原始 vs AI 介入", en: "WDA workflow comparison - manual vs AI-augmented" },
        title: { zh: "流程图对比：8 步人工痛点 vs AI 全自动", en: "Workflow comparison: 8 manual pain points vs AI automated" },
        body: { zh: "左列红框 = 原始业务工作流(全人工,客户寄回商品占 60% 耗时);右列绿框 = AI 介入后工作流,8 步全 AI 处理。客户寄回商品从\"物理瓶颈 60%\"变成\"物流 API 实时追踪+超时催收\"——瓶颈消除", en: "Left red boxes = original business workflow (fully manual, customer return shipping = 60% time); right green boxes = AI-augmented, all 8 steps AI-handled. \"Customer return shipping\" went from \"60% physical bottleneck\" to \"logistics API real-time tracking + timeout recovery\" — bottleneck eliminated." }
      },
      {
        image: '/images/projects/gallery/wda-04-mvp-overview.png',
        alt: { zh: "WDA 7 天 MVP 落地方案 - 概览", en: "WDA 7-day MVP landing plan - overview" },
        title: { zh: "7 天 MVP 方案：RefundPilot 退款智能助手", en: "7-day MVP: RefundPilot refund assistant" },
        body: { zh: "WDA 给\"客服退款流程\"业务问题生成的完整 7 天 MVP 方案:产品名 RefundPilot,6 核心功能(多渠道工单聚合+意图识别 / 一键资格预审 / 决策辅助卡片 / RMA+面单自动生成 / 物流智能追踪台 / 退款金额计算引擎),5 类技术栈(LLM+前后端+集成+存储+部署)", en: "WDA's complete 7-day MVP for the \"customer refund\" business question: product = RefundPilot, 6 core features (multi-channel ticket aggregation + intent recognition / one-click eligibility pre-check / decision aid cards / RMA + shipping label auto-gen / smart logistics tracking / refund calculation engine), 5 tech stack layers." }
      },
      {
        image: '/images/projects/gallery/wda-05-mvp-day-4-7.png',
        alt: { zh: "WDA 7 天 MVP - Day 4-7 实施细节", en: "WDA 7-day MVP - Day 4-7 execution" },
        title: { zh: "Day 4-7：实施 → 联调 → 试运行 → 规模化", en: "Day 4-7: implementation → integration → trial run → scale" },
        body: { zh: "WDA 把 7 天拆到每日交付物:Day 4 (RMA+物流追踪+金额计算 100 case 零误差) → Day 5 (联调+内部灰度 ≥60% 愿意后续使用) → Day 6 (试运行+数据埋点,自助闭环率≥30%、平均时长下降≥15%) → Day 7 (复盘+规模化方案,客户签 Go-live 决议)", en: "WDA breaks the 7 days into per-day deliverables: Day 4 (RMA + tracking + calc, 100 cases zero error) → Day 5 (integration + internal gray release, ≥60% willing to continue) → Day 6 (trial run + telemetry, self-service close rate ≥30%, avg duration down ≥15%) → Day 7 (review + scale plan, customer signs Go-live)." }
      },
      {
        image: '/images/projects/gallery/wda-06-painpoints.png',
        alt: { zh: "WDA 痛点分析报告", en: "WDA pain-point analysis report" },
        title: { zh: "痛点分析：8 步骤 × 耗时占比 × 根因", en: "Pain points: 8 steps × time share × root cause" },
        body: { zh: "WDA 自动提取的 8 个痛点,每个带耗时占比+根因:多渠道分散(1%)/ 意图路由靠人工(3%)/ 规则未串联(5%)/ 决策引擎缺位(10%)/ 系统未联动(5%)/ 物理瓶颈(60%)/ 质检靠人工(10%)/ 缺自动计算引擎(3%)。根因是\"结构化条件已成熟但缺决策引擎\"", en: "WDA auto-extracted 8 pain points, each with time share + root cause: scattered channels (1%) / manual intent routing (3%) / unchained rules (5%) / missing decision engine (10%) / no system linkage (5%) / physical bottleneck (60%) / manual QC (10%) / no auto calc engine (3%). Root cause: \"structured conditions mature but decision engine missing.\"" }
      },
      {
        image: '/images/projects/gallery/wda-07-roi-estimate.png',
        alt: { zh: "WDA ROI 预估报告", en: "WDA ROI estimate report" },
        title: { zh: "ROI 预估：年化成本 9.7 万 / 收益 58.6 万 / 502%", en: "ROI: ¥97.2K cost / ¥585.6K benefit / 502%" },
        body: { zh: "WDA 输出的 ROI 报告:年化成本 ¥97,200 (AI 调费 ¥13,200 + 开发摊销 ¥60,000 + 运维 ¥24,000) vs 年化收益 ¥585,600 (11 介入点中 7 个非决策点完全替代+复核节省 70% 人时)。关键假设 8 条全部透明列出,实际值可能存在 ±20% 波动——给客户判断风险留足空间", en: "WDA's ROI report: ¥97,200/yr cost (AI calls ¥13,200 + dev amortization ¥60,000 + ops ¥24,000) vs ¥585,600/yr benefit (7 of 11 intervention points fully replaced + 70% review time saved). All 8 key assumptions transparent, ±20% actual variance — room for client risk judgment." }
      }
    ],

    // === 5 段正文 (v2.1) — Leon 填 ===
    background: { zh: `WDA（Workflow Discovery Agent）是一个 SaaS 形态的业务流程智能分析平台。用户输入一个业务问题（如"招聘筛选流程"），Agent 自动去公网搜资料、抽工作流、识别痛点、测算 ROI，<strong>最终交付一份带完整证据链的 7 天 MVP 落地方案</strong>——含流程图、核心功能清单、Day 1-7 详细任务、可追溯的引用出处。<br/><br/>真实痛点：80% 中小企业没人能答清"AI 改造客服流程"怎么改、ROI 多少、MVP 怎么起步；咨询公司每单 30 万、5 天交付；SaaS 产品经理要看 50 篇资料。WDA 把"行业研究 + 方案设计"从<strong>人天级压到分钟级，且每条结论都标了证据来源</strong>。<br/><br/>技术原始动机：LLM tool_use 刚稳定，想用原生 Anthropic SDK + 自研 agent loop、<strong>零依赖 LangChain / AutoGPT</strong>，验证能否做出企业级真实产品。<strong>目标用户</strong>：中小企业 CTO / 产品经理 / 数字化转型咨询顾问。`, en: '' },
    challenge:  { zh: `<strong>2.1 Agent 决策不稳【最致命】</strong><br/>同一 query 跑 5 次，3 次完整、2 次空白。LLM 偶尔跳过 extract_workflow 直接 generate_mvp_plan；偶尔在 save_report 把 JSON 字段填成字符串；偶尔 30 轮迭代没产出就触发 max_iterations。根因：底层 GLM-5.2（火山方舟 Anthropic 兼容）指令遵循弱一档——<strong>靠 prompt 根本约束不了工具调用顺序</strong>，这是 SLA 问题不是技术瑕疵。<br/><br/><strong>2.2 证据链质量坍塌</strong><br/>用户搜"银行贷款审批流程"，第一条证据是工行企业网银（产品页，8 分），第二条是"大_大怎么读"（字典类，6 分），真正的流程文章被挤到后面。根因：LLM 评分标准宽泛，URL 或标题里有"流程"就给高分，没区分"流程文章 vs 产品入口 vs 百科概念"。<strong>证据是用户信任的来源，错一半整份报告的可信度坍塌</strong>。<br/><br/><strong>2.3 短文全军覆没 + 多租户零防护 + 工程玄学</strong><br/>知乎/公众号/小红书文章普遍 300 字，corpus &lt; 500 字符硬阈值导致 agent 死循环重试 9 次最后跑飞，这部分用户全军覆没等于放弃大半个市场。A 公司账号能直接 GET B 公司 workflow（演示穿帮、上线即违法 GDPR）。Celery 启动 5 次后台挂 5 个 worker 抢 Redis 任务随机失败，调试两周。`, en: '' },
    approach:   { zh: `<strong>3.1 Agent 稳定性：9 步状态机 + 三层防御</strong><br/>思路：不在 LLM 层做约束，<strong>在 orchestrator 层维护硬状态机</strong>——LLM 只给"专业意见"，状态转换由代码强制。<br/>方法：9 步管线 SEARCHING → SCORING → FETCHING → EXTRACTING → IDENTIFYING → DESIGNING → ROI_CALC → MVP_PLANNING → SAVING；Layer 1 <code>tool_choice</code> 强制末步只调 save_report，Layer 2 force_finish 兜底（max_iterations 触发时用缓存的 MVP 强制收尾，把 failed 转 completed），Layer 3 真值校验（corpus 短返占位 + 提示继续，不死循环）。<br/>关键决策：不上 LangChain / AutoGPT——这些框架抽象太粗，<strong>自研 1363 行状态机 = 区别于"调包侠"的核心竞争力</strong>。不换 Claude Sonnet——成本贵 5 倍，让弱模型稳定工作的工程 ROI 更高。<br/><br/><strong>3.2 证据质量：规则 + LLM + 关键词加权</strong><br/>思路：不要指望 LLM 一次评分稳定。三层各管一段，单层失稳不击穿整套。<br/>方法：Layer 1 规则 0 LLM 成本（招聘首页 / AI 工具站 / 百科 hard cap）；Layer 2 LLM 评分（query 拆核心词 + 修饰词，没命中核心词硬 cap 4 分）；Layer 3 内容农场检测（标题含"知乎/百度百科"视为导航页，zhihu.com / wikipedia.org 整站低相关）。<br/>关键决策：<strong>黑名单精准打击——sohu/163/qq/weibo 误杀率高不进黑名单</strong>，只对 baike.baidu.com 做路径规则。<br/><br/><strong>3.3 多租户：单库行级隔离 + 测试守护</strong><br/>思路：不光加 tenant_id 字段，更要写测试防 PR 引入跨租户漏洞。<br/>方法：所有业务表加 tenant_id FK；_seed_default_org autouse fixture 保 Organization(id=1) 存在 + PG sequence 不漂移；3 个隔离测试覆盖跨租户/同租户/跨租户工具调用。跨租户访问返 <strong>404 而非 403</strong>——避免泄露资源存在性（参考 GitHub 私有仓库设计）。<br/>关键决策：<strong>不直接拆库——单库 + tenant_id 行级隔离成本最低、运维最简单</strong>，足够撑到 1000 企业规模（YAGNI）。<br/><br/><strong>3.4 短文兼容 + 工程纪律</strong><br/>短文：corpus < 500 字符返 <code>{"corpus_too_short": true, "hint": "使用现有 events 继续"}</code>，<strong>软降级代替硬失败</strong>——"粗一点总比没结果好"。<br/>工程纪律：<code>--max-tasks-per-child=20</code> 强制 worker 定期自杀重启；启动时检查端口占用；<code>--concurrency=1</code> 串行避免抢连接；登录 <code>slowapi</code> 5/min/IP 限流 + argon2id + 失败 5 次锁 15 分钟。<br/><strong>工程纪律的本质是消除变量——dev 随机失败 80% 是因为缺约束</strong>。`, en: '' },
    results:    { zh: `<strong>4.1 量化指标（升级前后）</strong><br/>后端测试通过率 88% → <strong>100%</strong>（178 passed）；88 query 黄金集 47% → <strong>100%</strong>（retry=3 稳态）；工具调用顺序稳定性 75% → <strong>100%</strong>；多租户 ❌ → ✅ + 3 测试守护；<strong>综合产品评分 63 → 90.7 / 100</strong>。<br/><br/><strong>4.2 现在的产品能力</strong><br/>- <strong>SLA 99%</strong>：30 轮 LLM 内必出报告（force_finish 兜底到死）<br/>- <strong>可重复部署</strong>：<code>docker compose -f infra/docker-compose.prod.yml up</code> 一键起<br/>- <strong>可计费</strong>：usage_records 自动落库，接 Stripe 只差 webhook<br/>- <strong>可扩展</strong>：messages JSONB 完整保留 → 断点续跑 + 跨 run 分析<br/>- <strong>可观测</strong>：SSE 实时进度 + 限流可视化 + token 用量统计<br/><br/><strong>4.3 架构亮点</strong><br/>- <strong>原生 agent loop</strong>：0 行 LangChain / AutoGPT，1363 行 orchestrator + 状态机撑起全部能力<br/>- <strong>三层证据打分</strong>：规则 → LLM → 关键词加权，成本可控且稳定<br/>- <strong>force_finish 兜底</strong>：把"agent 跑飞"从产品灾难降级为内部日志<br/>- <strong>JSONB messages</strong>：完整对话历史持久化，断点续跑 + 离线分析两不误<br/><br/><strong>4.4 工程实践</strong><br/>- <strong>测试金字塔</strong>：178 后端测试（端到端/多租户/状态机/证据/token 黑名单）+ 14 前端单测<br/>- <strong>autouse fixture</strong>：每个测试独立 DB + 独立 Redis 键清理<br/>- <strong>CI 友好</strong>：CI 跑 tests/agent tests/api，本地跑全套 + golden set<br/><br/><strong>4.5 给后续迭代的钩子</strong><br/>messages JSONB → 用户行为分析；evidence + tool_calls 全字段 → 行业 playbook / 经验固化；usage_records → 接 Stripe 报表只差一步；多租户 schema → 拆库/跨区部署随时可做。`, en: '' },

    // === fallback / 兼容老数据 ===
    problem: {
      zh: '企业主普遍陷入 AI 焦虑：知道要接入，但不知道从哪里开始。咨询公司卖 7 位数方案；自学又沉在零散案例里。**真正缺的是"7 天可落地的 MVP 路径"**。',
      en: "Enterprise leaders are stuck in AI anxiety: they know they should adopt, but don't know where to start. Consultancies sell 7-figure roadmaps; self-study drowns in scattered case studies. The real gap is a **7-day MVP path that's actually executable**.",
    },
    solution: {
      zh: 'WDA 是一个真 Agent SaaS。用户输入一句话（如"招聘筛选流程"），Agent 会：①全网搜证 ②三层评分过滤噪音 ③抓取高分证据正文 ④提取工作流+痛点+AI 介入点 ⑤计算 ROI ⑥生成 7 天 MVP 计划 ⑦交付完整报告。',
      en: "WDA is a true-agent SaaS. User types a one-liner (e.g. \"recruiting workflow\"). The agent: ① searches the web, ② 3-layer scoring to kill noise, ③ scrapes high-score evidence, ④ extracts workflow + pain points + agent fit, ⑤ computes ROI, ⑥ generates 7-day MVP plan, ⑦ ships a complete report.",
    },
    architecture: {
      zh: '后端 FastAPI + SQLAlchemy 2.0 async + PostgreSQL 16，Celery + Redis 异步任务。Agent 核心用 Anthropic SDK 原生 tool use，**9 步强制状态机**控制流程稳定。证据链三层评分：规则 → Haiku → Sonnet，断点续跑，token 用量统计。',
      en: 'Backend: FastAPI + SQLAlchemy 2.0 async + PostgreSQL 16, Celery + Redis for async. Agent core uses Anthropic SDK native tool use, with a **9-step forced state machine** for stability. 3-layer evidence scoring (rules → Haiku → Sonnet), checkpoint resume, token usage tracking.',
    },
    tech: [
      'Python 3.11', 'FastAPI', 'Anthropic SDK', 'PostgreSQL 16', 'Redis 7', 'Celery',
      'Playwright', 'BeautifulSoup', 'React 18', 'TypeScript', 'TanStack Query', 'Zustand', 'shadcn/ui',
    ],
    metrics: [
      { value: '−85%', label: { zh: '输入 tokens', en: 'Input tokens' } },
      { value: '−39%', label: { zh: 'Agent 迭代', en: 'Agent iterations' } },
      { value: '38+', label: { zh: '单元测试', en: 'Unit tests' } },
      { value: '9', label: { zh: '步强制状态机', en: 'step state machine' } },
    ],

    codeSnippet: {
      language: 'python',
      filename: 'app/agent/orchestrator.py',
      highlight: '9-step forced state machine',
      description: {
        zh: '真 Agent 循环的核心：把"LLM 自己决定调用顺序"改成"硬约束 9 步管线"。失败 ≥ 2 次的步骤自动降级，最终一定调 save_report 收尾 — 避免 Agent 跑飞或沉默失败。',
        en: "The heart of a true agent loop: instead of letting the LLM freely pick its tool order, hard-enforce a 9-step pipeline. Steps that fail ≥ 2 times auto-degrade. `save_report` is always called last, even on max-iterations — no silent failures.",
      },
      code: `# Agent 9 步强制管线 (state machine)
_MANDATORY_PIPELINE = (
    "search_web",              # 1. 必: 全网搜证
    "score_evidence_batch",    # 2. 必: 三层评分
    "fetch_page_batch",        # 3. 必: 抓取证据
    "extract_workflow",        # 4. 必: 提工作流
    "identify_pain_points",    # 5. 必: 痛点
    "design_agent_flow",       # 6. 必: Agent 接入点
    "calculate_roi",           # 7. 必: ROI
    "generate_mvp_plan",       # 8. 可选 (失败2次跳过)
    "save_report",             # 9. 必: 收尾交付
)

def _decide_tool_choice(executed_tools, failed_counts, is_last):
    """第 3 层: 完整 9 步强制状态机."""
    executed_set = set(executed_tools)

    def _exhausted(pipeline):
        return all(t in executed_set or failed_counts.get(t, 0) >= 2
                   for t in pipeline)

    # 0. 兜底: max_iter 到了, evidence 尽力就 save_report
    if is_last and _exhausted(_EVIDENCE_PIPELINE):
        return {"type": "tool", "name": "save_report"}

    # 1. evidence 没尽力 → 强制补缺失 (失败≥2 视为已尽人事)
    if not _exhausted(_EVIDENCE_PIPELINE):
        for tool_name in _EVIDENCE_PIPELINE:
            if tool_name in executed_set: continue
            if failed_counts.get(tool_name, 0) >= 2: continue
            return {"type": "tool", "name": tool_name}

    # 2. evidence 尽力后, save_report 收尾 (优先)
    if "generate_mvp_plan" in executed_set:
        return {"type": "tool", "name": "save_report"}

    # 3. analyze 渐进约束, 4. mvp 强制, 失败 2 次跳 save_report
    ...

    return None`,
    },

    highlights: [
      { zh: '真 Agent 循环（不是硬编码流水线）', en: 'True agent loop (not hardcoded pipeline)' },
      { zh: '三层证据评分：规则 → Haiku → Sonnet', en: '3-layer evidence scoring' },
      { zh: '9 步强制状态机，避免 LLM 跑飞', en: '9-step forced state machine' },
      { zh: '断点续跑：messages 存 JSONB，进程崩了能从 DB 恢复', en: 'Checkpoint resume from DB' },
      { zh: 'Celery 异步队列，长任务不阻塞 API', en: 'Celery async, no API blocking' },
    ],
  },

  // ============================================
  //  TRILOGY · ACT 2
  // ============================================
  {
    id: 'opc',
    name: { zh: 'OPC · One Prompt Creates', en: 'OPC · One Prompt Creates' },
    tagline: {
      zh: '一句话 → 可运行的应用。6 个 Agent 协作，把 MVP 跑成真产品。',
      en: 'One prompt → runnable app. 6 agents collaborate to ship the MVP.',
    },
    cover: '/projects/opc-cover.png',
    coverGradient: 'linear-gradient(135deg, #FFB648 0%, #FF8C42 50%, #E85D2F 100%)',
    tags: ['Multi-Agent', 'Next.js 16', 'FastAPI', 'Celery'],
    role: 'Sole PM + Engineer',
    year: '2025 — 2026',
    status: { zh: '已完成核心 · 计费与部署在路', en: 'Core done · billing & deploy in progress' },
    color: '#FFB648',
    repo: 'https://github.com/bgyyou/opc',

    gallery: [
      {
        image: '/images/projects/gallery/opc-01-landing.png',
        alt: { zh: 'OPC 营销首页', en: 'OPC marketing landing' },
        title: { zh: '营销首页：让一句话变成产品', en: 'Marketing landing: turn a prompt into a product' },
        body: { zh: '"一家公司通常需要 CEO、PM、设计师、前后端工程师、QA，OPC 让 7 个 AI Agent 同时接管这些角色——你只需要说一句话，然后看着进度条跑完。" 营销首页把价值主张压在一屏，背景是细密网格 + 黑底色，CTA 是免费开始。', en: 'One-pane marketing pitch: "A company usually needs CEO, PM, designer, frontend + backend engineers, QA — OPC lets 7 AI agents run all those roles. You just say a sentence, then watch the progress bar." Grid background, black canvas, "Get started" CTA.' },
      },
      {
        image: '/images/projects/gallery/opc-02-login.png',
        alt: { zh: 'OPC 登录页', en: 'OPC login page' },
        title: { zh: '登录 / 注册：低摩擦入门', en: 'Login / register: low-friction entry' },
        body: { zh: '极简登录页 — 邮箱 + 密码就够了。OPC 故意把注册门槛做得很低：5/hour/IP 限流 + 邮件格式校验，没有社交登录、没有验证码。10 秒钟进 dashboard。', en: 'Minimal login page — email + password is enough. OPC deliberately keeps the entry friction low: 5/hour/IP rate limit + email format validation, no social login, no captcha. 10 seconds to dashboard.' },
      },
      {
        image: '/images/projects/gallery/opc-03-dashboard.png',
        alt: { zh: 'OPC Dashboard 空状态', en: 'OPC dashboard empty state' },
        title: { zh: 'Dashboard：第一个项目的零摩擦起步', en: 'Dashboard: zero-friction first project' },
        body: { zh: '刚注册的用户看到的 dashboard：欢迎语 + "还没有工作流" 空状态 + 居中的"创建第一个"按钮 + 右上角"新建工作流"。整个 dashboard 没有多余元素 — 只有一个目标：让用户点"创建"。', en: 'First-time dashboard: greeting + "No projects yet" empty state + centered "Create Project" CTA + top-right "New Project" button. The entire dashboard has no superfluous elements — one goal: get the user to click "Create".' },
      },
      {
        image: '/images/projects/gallery/opc-04-projects-new.png',
        alt: { zh: 'OPC 创建项目表单', en: 'OPC new project form' },
        title: { zh: '创建项目：3 字段就够了', en: 'New project: 3 fields is enough' },
        body: { zh: '创建项目的全部输入：Project Name + Description (optional) + Your Idea。Your Idea 字段是 6-AGENT 协作的入口 — 模板路由 + 关键词意图分类会从这里决定走 landing / todo / CRUD 哪个原子模板。', en: 'The full input surface for a new project: Project Name + Description (optional) + Your Idea. Your Idea is the entry point for 6-agent collaboration — the template router + keyword intent classifier decide which atomic template (landing / todo / CRUD) to use.' },
      },
      {
        image: '/images/projects/gallery/opc-05-pricing.png',
        alt: { zh: 'OPC 定价页', en: 'OPC pricing page' },
        title: { zh: '4 档定价：Free / Lite / Pro / Max', en: '4 tiers: Free / Lite / Pro / Max' },
        body: { zh: '4 档定价（Free / $19 / $49 / $129 月），Monthly + Yearly (Save 17%) 切换。每档明确给出 credits / projects / team members / 高级功能（API / private / priority）的配额差。Stripe 还没接 — 提示 "Self-service checkout 暂未开通，但你可以用 free credits 试 OPC"。', en: 'Four tiers (Free / $19 / $49 / $129 mo) with Monthly + Yearly (Save 17%) toggle. Each tier spells out credits / projects / team members / advanced features (API / private / priority) quota diff. Stripe is not yet wired — banner says "Self-service checkout is unavailable, but you can still try OPC with free credits."' },
      },
      {
        image: '/images/projects/gallery/opc-06-settings-billing.png',
        alt: { zh: 'OPC 计费设置', en: 'OPC settings billing' },
        title: { zh: '计费 & 用量：透明配额', en: 'Billing & usage: transparent quota' },
        body: { zh: 'Billing & Usage 页面：Current Plan + Credits Balance (20) + Monthly Limit (20) + Used This Period (0)。下方"Usage Details"把当前周期的 Projects Created / Completed / Failed / Input Tokens / Output Tokens / Credits Used 全部列出来 — 用户能在 credits 归零前看到自己用了多少。', en: 'Billing & Usage page: Current Plan + Credits Balance (20) + Monthly Limit (20) + Used This Period (0). Below, "Usage Details" lists every metric for the current billing period — Projects Created / Completed / Failed / Input Tokens / Output Tokens / Credits Used — so the user sees the spend before credits run out.' },
      },
      {
        image: '/images/projects/gallery/opc-07-new-project-prompt.png',
        alt: { zh: 'OPC 创建 BrewLog 项目(已填 prompt)', en: 'OPC create BrewLog project (prompt filled)' },
        title: { zh: '端到端 demo①:从一句话到明确指令', en: 'End-to-end demo ①: one sentence → clear spec' },
        body: { zh: 'Project Name="BrewLog — 咖啡冲煮记录"。Your Idea 字段是入口:豆种/产地/烘焙日期/研磨度/水温/粉水比/注水时间/萃取时间/风味标签 9 个参数要采集,列表页按时间倒序,可按豆种筛选,详情页全参数展示,设计走专业咖啡主题(深棕配色+奶白底),标题用衬线字体,整体克制精致。', en: 'Project Name "BrewLog — Coffee Brewing Log". Your Idea field is the entry: 9 parameters to capture (bean/origin/roast date/grind/water temp/ratio/pour time/brew time/flavor tags), list sorted by time desc, filter by bean, detail page shows all params, design professional coffee theme (dark brown + cream), serif headlines, restrained & refined.' },
      },
      {
        image: '/images/projects/gallery/opc-08-brewlog-app.png',
        alt: { zh: 'OPC 生成的 BrewLog 应用', en: 'OPC-generated BrewLog app' },
        title: { zh: '端到端 demo②:几分钟内跑起来的应用', en: 'End-to-end demo ②: a working app in minutes' },
        body: { zh: 'OPC 把上面那段话变成可运行的应用:BrewLog · 手冲冲煮记录,9 个输入字段(豆种*/产地/yyyy/mm/日/研磨度/水温(°C)*/粉水比*/注水时间(秒)/萃取时间(秒)/风味标签),"记录这次冲煮" 按钮。下方已有 1 条记录示例(好喝的咖啡豆 · Ethiopia · 93°C · 1:15)。这正是 Path A 模板+LLM 填空架构的产物——明确指令 → 路由到 CRUD 模板 → 表单+列表完整生成。', en: 'OPC turned that paragraph into a working app: "BrewLog · Pour-Over Record", 9 input fields (with required markers), "记录这次冲煮" button. Below already 1 record (好喝的咖啡豆 · Ethiopia · 93°C · 1:15). This is exactly the Path A architecture — clear spec → route to CRUD template → form + list generated end-to-end.' },
      },
    ],

    // === 5 段正文 (v2.1) — Leon 填 ===
    background: { zh: `OPC（One Prompt Creates）是一个 AI 全栈应用生成器：用户用一句自然语言描述需求，系统在数分钟内交付一个<strong>可运行、可预览、可迭代</strong>的全栈 Web 应用（含前端、后端、数据库、预览链接），并支持在同一项目上以自然语言追加需求做增量迭代。<br/><br/>三层核心交付物：<br/>1. <strong>AppSpec DSL</strong>——结构化应用规格描述语言，作为用户意图与代码生成之间的"协议层"<br/>2. <strong>模板路由 + spec_renderer</strong>——确定性代码生成器，按规格产出前后端代码，避免 LLM 直接吐代码带来的不可控<br/>3. <strong>多 Agent 闭环验证</strong>——静态扫描 + 动态 TestAgent 双层 fallback，验证生成结果是否真的能跑起来<br/><br/>痛点：AI 代码生成赛道 2024-2025 集中爆发（Bolt / Lovable / v0 / Cline 等），但纯 LLM 项目首屏可用率在 50% 左右徘徊——剩下的是依赖缺失或结构漂移；用户看不到代码、无法定位失败、修改门槛高（失败要么静默降级到 CRUD 模板，要么干脆伪装成功）。OPC 用 <strong>Path A 架构（模板 + LLM 填空）</strong>把成功率推到 70%+，并把每一轮失败/降级/边界都暴露给用户。<br/><br/><strong>目标用户</strong>：非工程师独立创业者/小团队（验证 MVP）、产品经理/设计师（快速原型）、企业内部"公民开发者"（部门工具）。`, en: '' },
    challenge:  { zh: `<strong>2.1 产品视角</strong><br/>- <strong>用户看不到代码，但生成质量全靠代码</strong>：非工程师用户拿到跑不起来的应用，唯一的反馈通道是报错截图<br/>- <strong>一句话需求天然歧义</strong>："做一个记账 App"可以是记账本、订阅管理、报销流程、家族分账，路线完全不同<br/>- <strong>诚实问题</strong>：失败不能糊弄——默默把高级需求降级到 CRUD 模板，会让用户对系统能力边界失去判断<br/>- <strong>迭代的可控性</strong>：第二轮追加需求时，绝不能误改 auth/数据库/基础模型——一次误改，整盘崩塌<br/><br/><strong>2.2 技术视角</strong><br/>- <strong>LLM 不可控</strong>：模型自由发挥引入模板外 npm 包，不拦截就 ERR_MODULE_NOT_FOUND<br/>- <strong>代码执行隔离</strong>：用户生成的项目要 npm install + 启 dev server + 暴露端口，任何一条路径漏掉都是 RCE<br/>- <strong>Preview 生命周期</strong>：状态在进程内 singleton，多副本/重启后用户看到"Preview 没了"，但项目磁盘还在——体验割裂<br/>- <strong>Webhook 重投</strong>：Stripe/用户自定义 webhook 在网络抖动下必重投，credits 链路如果幂等性弱，重复事件会重复加钱<br/>- <strong>SSRF</strong>：用户填任意 webhook URL，恶意构造 metadata IP/内网段/localhost 都能让后端成为攻击代理<br/>- <strong>核心文件巨型化</strong>：单 iteration.py 1018 行，状态机/渲染/验证/持久化全混在一起，新人接手与单测都做不动<br/><br/><strong>2.3 真实碰到的坎</strong><br/>项目 24 stuck loop（spec 模板里字符串归一化 bug 触发无限重试）；主页 CTA + fetch URL prefix 错配（油绘画记事本案例，AuthModal 不挂载，前端 404）；Webhook 幂等性 race（重投场景下 credits 翻倍）；test_auth.py 3 failed + 57 errors（respx 未装、Request 注解缺 import，测试基建薄弱）；uvicorn --reload 留 orphan worker（Windows 上 dev server 启动卡死）；Billing bypass 默认放过（旧的 <code>if env == "OPC_DISABLE_BILLING": return</code> 没校验 app_env，production 也能误开）。`, en: '' },
    approach:   { zh: `<strong>3.1 思路框架</strong><br/>把 OPC 当成"<strong>领域协议 + 流水线 + 防御纵深</strong>"三件事设计，而不是"LLM 写代码"那么简单：<br/><code>需求 → [意图分类] → 模板路由 → AppSpec DSL → spec_renderer (deterministic) → TestAgent (static + dynamic)</code><br/>LLM 不直接吐代码，只在 spec_renderer 模板的填空位做局部微调；任何不符合规格的代码都必须被验证，否则不上线。<br/><br/><strong>3.2 关键方法</strong><br/><strong>A. AppSpec DSL + 模板路由</strong>：把需求结构化成 AppSpec（页面/数据/交互的 schema），用 spec_renderer 模板（landing/todo/CRUD）做确定性代码生成——LLM 只填空，不写骨架。<br/><strong>B. 诚实路由 + 边界声明</strong>：模板能力矩阵明确写出"哪些需求模板原生支持 / 哪些要组合 / 哪些走 fallback / 哪些拒绝"，A/B 路线清晰分轨，指标可收敛。<br/><strong>C. 闭环验证双层</strong>：静态扫描（依赖白名单、模块路径、import 完整性）+ 动态 TestAgent（启 dev server + 跑测试 + HTTP 200 验证）。<strong>失败不静默降级——显式告知用户"模板不支持"</strong>，让用户决定继续还是换方向。<br/><strong>D. 防御纵深</strong>：<br/>- Webhook 幂等：<code>operation_id</code> UNIQUE 约束，重复事件直接拒；<br/>- SSRF 防护：webhook URL 解析后做 IP 黑名单（内网段/localhost/metadata IP 全拦）；<br/>- 限流：登录/创建项目 5/hour/IP；<br/>- JWT 密钥 fail-fast：production 环境默认值拒绝启动。<br/><br/><strong>3.3 关键决策</strong><br/><strong>决策 1：Path A（模板 + LLM 填空）vs Path B（LLM 自由生成）</strong>——Path B 上限高但下限低，<strong>PM 视角下"可控性 > 创造性"</strong>，先把首屏可用率从 50% 推到 70%+，再考虑扩展模板能力。<br/><strong>决策 2：iteration 包拆分</strong>——单文件 1018 行巨型化阻碍接手与单测；按状态机/渲染/验证/持久化拆 4 个子模块，单测覆盖率从 25% 提到 67%。<br/><strong>决策 3：失败显式 vs 静默降级</strong>——默默降级到 CRUD 模板 = 欺骗用户；显式告知 + 用户决策 = 信任。`, en: '' },
    results:    { zh: `<strong>4.1 工程指标</strong><br/>- <strong>后端</strong> FastAPI + SQLAlchemy 2.0 async + Celery + asyncpg + Redis + Stripe：<strong>744 tests passing, 0 fails</strong>（B2-B4 三批次治理后稳定）<br/>- <strong>前端</strong> Next.js 16 + React 19.2 + Tailwind 4：<strong>55 vitest tests passing</strong>；Docker non-root user + standalone build + healthcheck<br/>- <strong>生成器</strong>：3 个原子模板（landing/todo/CRUD）+ 模板路由 + 关键词意图分类；<strong>18 个真实项目端到端跑通</strong><br/><br/><strong>4.2 关键能力（已上线）</strong><br/>- 自然语言 → 完整全栈应用（landing/todo/CRUD 三类）<br/>- 同一项目自然语言追加需求做增量迭代（auth/数据库/基础模型不可改）<br/>- Preview 一键启动（含 npm install + dev server + 端口暴露）<br/>- 多 Agent 闭环验证（静态扫描 + TestAgent 两层 fallback）<br/>- 计费：credits 原子扣减 + operation_id 幂等 + 失败退款<br/>- Webhook：Stripe 订阅 + 用户自定义 URL（带 SSRF 防护 + 指数退避重试）<br/>- 多租户：组织、成员、邀请、角色<br/><br/><strong>4.3 当前边界（PM 视角下诚实列出）</strong><br/>- 真实成功率仍需更大评测集量化（当前 18 个样本，规模偏小）<br/>- 模板能力矩阵偏窄，复杂业务（支付/工作流/多角色权限）仍走 fallback<br/>- 生成代码隔离是"静态扫描 + 进程级隔离"，还没上容器级沙箱（生产高敏客户场景需要）<br/>- 前端测试覆盖 auth/api/preview 状态机，组件级 + E2E 待补<br/><br/><strong>4.4 治理成果（B0-B4）</strong><br/>- B0 任务边界：B1 基础设施（JWT fail-fast + CI 基线）/ B2 正确性安全（billing 幂等 + SSRF + Webhook 幂等 + preview 生命周期）/ B3 架构治理（iteration 拆分 + codegen_guard 静态门禁 + 诚实路由）/ B4 前端部署仓库（真实前端测试 + Docker 加固 + 仓库卫生）。`, en: '' },

    problem: {
      zh: 'AI coding 工具让"写代码"变简单，但做完整产品还要拼架构、拼部署、拼测试。**独立 PM 想做 MVP 还要再花 3 个月学 DevOps。**',
      en: "AI coding tools made 'writing code' easy, but shipping a complete product still requires architecture, deploy, and tests. **Indie PMs spend another 3 months learning DevOps just to launch an MVP.**",
    },
    solution: {
      zh: 'OPC 跑 6 个 Agent：PM 写 PRD → Frontend/Backend 并行写代码 → Test 跑测试 → Ops 生成部署配置 → CEO 把关。**带回环验证 + 两级 fallback**：测试失败就回 developing 修，最多触发 Level 1（简化 PRD）和 Level 2（fallback 模板）。',
      en: "OPC runs 6 agents: PM writes PRD → Frontend/Backend write code in parallel → Test runs tests → Ops generates deploy config → CEO reviews. **With closed-loop validation + two-level fallback**: test failures roll back to `developing`, then trigger Level 1 (simplified PRD) and Level 2 (fallback template) if stuck.",
    },
    architecture: {
      zh: '前端 Next.js 16 + Tailwind v4 + shadcn/ui。后端 FastAPI + SQLAlchemy async + PostgreSQL + Redis + Celery。**ProjectStateMachine 状态机**控制 6 个 Agent 协同：idle → planning → developing → testing → deploying → learning → done。Docker Compose 一键起。',
      en: 'Frontend: Next.js 16 + Tailwind v4 + shadcn/ui. Backend: FastAPI + SQLAlchemy async + PostgreSQL + Redis + Celery. **ProjectStateMachine** orchestrates 6 agents: idle → planning → developing → testing → deploying → learning → done. Docker Compose one-liner.',
    },
    tech: [
      'Python 3.11', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Anthropic SDK',
      'Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui', 'Docker Compose', 'Alembic',
    ],
    metrics: [
      { value: '6', label: { zh: '协作 Agent', en: 'Collaborative agents' } },
      { value: '7', label: { zh: '状态机节点', en: 'State machine nodes' } },
      { value: '2', label: { zh: '级 fallback', en: '-level fallback' } },
      { value: '∞', label: { zh: '项目想法 → 部署', en: 'idea → deploy' } },
    ],

    codeSnippet: {
      language: 'python',
      filename: 'app/agent/project_orchestrator.py',
      highlight: 'ProjectStateMachine — 闭环验证 + 两级 fallback',
      description: {
        zh: 'OPC 的核心：把 6 个 Agent 协作抽象成显式状态机。测试失败自动回 developing，最多触发 Level 1（简化 PRD）和 Level 2（fallback 模板）。任何阶段崩了 → failed，错误堆栈沉淀到 context 供后续 Agent 反思。',
        en: "OPC's core: 6-agent collaboration as an explicit state machine. Test failures auto-rollback to `developing`. After N retries, trigger Level 1 (simplified PRD) or Level 2 (fallback template). Any stage crash → `failed`, with error trace stored in context for the next agent's reflection.",
      },
      code: `class ProjectStateMachine:
    """状态机: idle → planning → developing → testing → deploying → learning → done."""
    states = ["idle", "planning", "developing", "testing",
              "deploying", "learning", "done", "failed"]

    def send(self, event: str, payload: Any = None) -> None:
        old = self.current_state
        # ERROR 事件优先级最高: 任何 state 都能转 failed
        if event == "ERROR":
            self.context["errors"].append(payload)
            self.current_state = "failed"
        elif self.current_state == "idle" and event == "START":
            self.current_state = "planning"
        elif self.current_state == "planning" and event == "PRD_DONE":
            self.context["prd"] = payload
            self.current_state = "developing"
        elif self.current_state == "developing":
            # 前后端都 ready 才进 testing
            if event == "BACKEND_DONE":
                self.context["backend_ready"] = True
            elif event == "FRONTEND_DONE":
                self.context["frontend_ready"] = True
            if self.context["backend_ready"] and self.context["frontend_ready"]:
                self.current_state = "testing"
        elif self.current_state == "testing":
            if event == "TESTS_PASS":
                self.current_state = "deploying"
            elif event == "TESTS_FAIL":
                # 回环 developing, 重置 readiness 触发重做
                self.current_state = "developing"
                self.context["backend_ready"] = False
                self.context["frontend_ready"] = False
        # ... deploying → learning → done 链路省略
        log.info("state_transition", old=old, new=self.current_state, event=event)`,
    },

    highlights: [
      { zh: '6 个 Agent 协作（PM/Frontend/Backend/Test/Ops/CEO）', en: '6 agents collaborate' },
      { zh: 'ProjectStateMachine 显式状态机', en: 'Explicit ProjectStateMachine' },
      { zh: '测试失败自动回环 developing 重做', en: 'Test failure auto-rollback' },
      { zh: 'Level 1 (简化 PRD) / Level 2 (fallback 模板) 两级降级', en: 'Two-level fallback (PRD → template)' },
      { zh: 'Docker Compose 一键起完整栈', en: 'Docker Compose one-liner' },
    ],
  },

  // ============================================
  //  TRILOGY · ACT 3
  // ============================================
  {
    id: 'mediapilot',
    name: { zh: 'MediaPilot', en: 'MediaPilot' },
    tagline: {
      zh: '当 AI 让"做出来"变得简单，营销自己就是新护城河。',
      en: "When AI makes building trivial, distribution is the new moat.",
    },
    cover: '/projects/mediapilot-cover.png',
    coverGradient: 'linear-gradient(135deg, #B388FF 0%, #7C4DFF 50%, #5E2EE6 100%)',
    tags: ['New Media', 'AI', 'Whisper', 'Full Stack'],
    role: 'Sole PM + Engineer',
    year: '2025 — Present',
    status: { zh: '已上线 · 持续运营', en: 'Live · in operation' },
    color: '#B388FF',
    repo: 'https://github.com/bgyyou/MediaPilot',

    // === 5 段正文 (v2.1) — Leon 填 (修订版: B 端团队工作流) ===
    background: { zh: `为前司 <strong>Fans Media</strong> 新媒体团队打造的 AI 工作流工具——把"找对标→找热点→写文案→拍脚本→粗剪"全链路接入 AI，让团队从"人肉产能"切换到"AI 产能"。<br/><br/><strong>服务对象</strong>：Fans Media 新媒体团队（10+ 编导/文案/剪辑）。<strong>终端客户</strong>：金融保险、国际教育、投资移民、房产中介等高客单价行业的个人 IP。<strong>分发平台</strong>：小红书、抖音、视频号。<br/><br/>典型客户特征：①高客单价（理财/移民/留学/置业顾问）②个人 IP 强绑定，账号调性差异极大 ③客户本人出镜居多，多为第一次面对镜头（紧张/气口/口头禅多）④单条视频潜在转化价值高（一条线索可能值几万到几十万）。<br/><br/>三个最痛的业务瓶颈：①<strong>文案产能不稳定</strong>——行业跨度大（金融/教育/移民/房产调性完全不同），一周 40 篇质量参差，50% 没水花 ②<strong>粗剪效率极低</strong>——客户第一次上镜的紧张/口头禅/气口停顿/大量重复，一条 1 小时素材粗剪半天，团队一周只能交付 2-3 条成片 ③<strong>找不到稳定爆款公式</strong>——每个行业爆款规律不同，新人入职要带 2-3 个月才能产出稳定质量。<br/><br/><strong>产品形态定位</strong>：不是"AI 替代文案/剪辑"，而是 <strong>"AI 把粗活干完，人干精活"</strong>。`, en: '' },
    challenge:  { zh: `<strong>2.1 技术难点</strong><br/>- <strong>T1 行业垂直 prompt 的工程化</strong>：4+ 行业（金融/教育/移民/房产）合规边界/调性/爆款公式完全不同，单一 prompt 模板不可能同时服务所有行业——必须行业垂直化，每个行业 few-shot 黄金示例需要持续积累<br/>- <strong>T2 本地爆款知识库的结构化</strong>：不是爬全网热点，而是用本团队验证过的爆款作为知识库；需要把"为什么这个视频爆了"结构化（钩子类型/节奏点/行业术语/合规红线）；知识库要可更新、可版本管理<br/>- <strong>T3 粗剪的多模态决策</strong>：1 小时原始素材 + 转写字幕，要识别沉默段/口头禅/重复段/语气词，输出可剪辑时间轴 + 删除原因（让人能理解 AI 判断）；<strong>不能剪错——剪错了客户返工成本高</strong><br/>- <strong>T4 客户化适配最后一公里</strong>：每个客户 IP 调性不同（理财顾问 vs 移民顾问语速差 2 倍），需客户级别配置（人设描述/行业关键词/禁忌词），不能让 AI 生成"标准模板"——必须是"这个客户的话"<br/><br/><strong>2.2 产品难点</strong><br/>- <strong>P1 客户合规生死线</strong>：金融/保险/投资有强监管（不能承诺收益/不能暗示保本），移民/教育涉及具体法规；AI 生成内容必须可审计——所有违规风险都要兜住；<strong>本地爆款知识库是核心</strong>——已经被法务/合规验证过的话术<br/>- <strong>P2 AI 产能 vs 客户个人 IP 的矛盾</strong>：通用 AI 文案 = 没个人特色 → 客户不愿用；行业模板太深 = 失去跨客户复用价值；需要"行业模板 × 客户人设"的二维矩阵<br/>- <strong>P3 第一次上镜的特殊处理</strong>：老客户/网红类节奏快、信息密度高；新客户/专业人士停顿多、信息密度低、紧张；剪辑策略不能一刀切，需要客户级别调节<br/><br/><strong>2.3 过程困难</strong><br/>PM 需懂 4 个行业合规边界（不是"AI 写得了"的问题，是"我能不能判断 AI 写得好不好"）；知识库冷启动 2-3 个月（从团队历史作品挖掘/整理/标注）；粗剪效果的客户验收（AI 剪错任一关键镜头 = 客户投诉，必须提供"AI 决策日志"让剪辑师快速修正）。`, en: '' },
    approach:   { zh: `<strong>3.1 阶段路线</strong><br/>- <strong>v1 阶段</strong>：解决文案产能 → 40 → 100 篇/周（行业 prompt）<br/>- <strong>v2 阶段</strong>：解决粗剪效率 → 10 分钟/条（多层删减架构）<br/>- <strong>v3 阶段</strong>：建立爆款知识库 → 稳定爆款率（数据真实性）<br/>- <strong>v4 阶段</strong>：客户级个性化 → 跨客户复用 + 个人特色保留<br/><br/><strong>3.2 关键方法</strong><br/><br/><strong>A. 行业垂直 Prompt + 本地爆款知识库</strong>（数据真实性原则的实现）<br/>行业"数据真实性"不是爬全网热点，而是用本团队已验证的爆款作为 AI 的"事实来源"：<br/><code>prompt = build_prompt(industry="金融保险", persona="理财顾问，30+ 女性，温和专业", knowledge_base=local_kb.search("理财","新手友好","干货",hook_type="颠覆认知"), constraints=compliance_rules["金融"], forbidden_words=["保本","稳赚","必涨"])</code><br/><strong>核心区别</strong>：行业知识库 = 合规/可信/有历史 ROI 数据；爬虫热点 = 时效但不可控（金融行业抓到的可能是错的）；<strong>对 B 端高客单价行业，可信 &gt; 时效</strong>。<br/><br/><strong>B. 粗剪的多层删减架构</strong>（让 AI 干粗活）<br/>把粗剪拆成 4 层独立判断：<br/>- <strong>Layer 1 死沉默检测</strong>：静音 &gt;1.5s 必删（机械判断）<br/>- <strong>Layer 2 句级 LLM</strong>："这整句是废话吗？"（语义判断）<br/>- <strong>Layer 3 停顿检测</strong>：句内停顿 &gt;0.8s 标记（节奏判断）<br/>- <strong>Layer 4 词级 LLM</strong>："这个词是口癖吗？"（细节判断）<br/><br/>关键设计：<strong>每一层独立可调（轻/中/重），让剪辑师根据客户情况现场调节</strong>。透明决策：每条删除都标注原因，剪辑师 30 秒判断是否恢复。不是"AI 自动剪完直接出片"——是"AI 剪完 + 决策日志 + 人工一键调整"。<br/><br/><strong>C. 人机分工的产品哲学</strong><br/>- <strong>AI</strong>：粗活/批量/标准化 | <strong>不干</strong>：客户化决策/最终判断<br/>- <strong>文案</strong>：微调/加入客户本人语气 | <strong>不干</strong>：从零写稿<br/>- <strong>剪辑</strong>：精剪/节奏/字幕 | <strong>不干</strong>：粗剪删气口<br/>- <strong>客户</strong>：实拍/本人出镜 | <strong>不干</strong>：拍摄技法<br/><br/>带来的好处：团队不被取代——AI 把"最烦最累"的部分干了；产能提升 = 团队产出多了，不是裁员；客户感受到"还是你们团队在做，只是更快了"。<br/><br/><strong>D. 客户级配置矩阵</strong><br/>行业模板（金融/教育/移民/房产）× 客户人设（个人 IP 调性/语速/禁忌词/平台偏好）= 这个客户的专属 prompt。新客户入职只需填一份"客户档案"，系统自动生成专属配置。<br/><br/><strong>3.3 关键决策</strong><br/><strong>决策 1：通用 AI 工具 vs 行业垂直工具</strong>——4 套独立工具 = 维护成本 4 倍但极致；1 套通用 = 维护 1 倍但不深入；<strong>对高客单价客户（线索价值几万到几十万）行业深度 = 转化率</strong>。先金融保险做到极致，其他行业复用架构 + 行业 prompt 微调。`, en: '' },
    results:    { zh: `<strong>4.1 量化交付</strong><br/>- <strong>文案周产能</strong>：40 篇 → <strong>400 篇（10×）</strong><br/>- <strong>粗剪效率</strong>：1 条/半天 → <strong>10 分钟/条（24×）</strong><br/>- <strong>累计视频浏览量</strong>：几百万<br/>- <strong>服务行业</strong>：金融保险 / 国际教育 / 投资移民 / 房产中介（4 个高客单价赛道）<br/>- <strong>服务客户数</strong>：多家头部个人 IP<br/><br/><strong>4.2 关键能力沉淀</strong><br/><strong>产品能力</strong><br/>- 完整"找对标→找热点→写文案→拍脚本→粗剪"工作流<br/>- 行业垂直化能力（4 个高客单价行业）<br/>- 人机协作产品方法论<br/><br/><strong>技术能力</strong><br/>- 行业垂直 Prompt Engineering（金融/教育/移民/房产各一套）<br/>- 本地爆款知识库（结构化、可版本管理）<br/>- 视频粗剪 4 层删减架构（自研算法）<br/>- 多模态决策日志（AI 删了什么 + 为什么）<br/><br/><strong>4.3 团队价值</strong><br/>- <strong>对 Fans Media 团队</strong>：文案从"写不出来"变"挑不过来"；剪辑从"粗剪排满档期"变"专注精剪"；<strong>新人入职培训周期缩短 50%</strong>（AI 兜底行业理解）<br/>- <strong>对客户</strong>：内容产能提升 = 账号活跃度提升；粗剪成本下降 = 客户付费下降（但更愿意加量）；个人 IP 调性保留 = 客户满意度上升<br/><br/><strong>4.4 战略沉淀</strong><br/>- <strong>B 端 AI 工具方法论</strong>：数据真实性 ≠ 爬虫抓全网，而是用领域内可信数据；<strong>AI 替代的不是人，是"人不想干的粗活"</strong>——这才是 AI 在垂直行业的真正位置；行业垂直比通用更有壁垒<br/>- <strong>人机协作最佳实践</strong>：AI 干"批量、标准化、有客观标准的活"，人干"客户化决策、审美判断、最终负责的活"，透明决策日志（AI 删了什么 + 为什么）= 信任基础<br/><br/><strong>最深的认知</strong>：<strong>AI 时代最稀缺的不是"会用 AI 的人"，而是"懂业务且能用 AI 杠杆放大业务的人"</strong>。`, en: '' },

    problem: {
      zh: '2024 年我做过小红书运营，单篇最高 20 万阅读，账号涨到 5000+ 粉。后来把方法论沉淀成工具：把"发现热点 → 生成内容 → 复盘"整条链路缩到几分钟。',
      en: "In 2024 I ran a Xiaohongshu account — top post hit 200K reads, account grew to 5K+ followers. I productized the playbook: compress 'find trending → create content → review' from hours to minutes.",
    },
    solution: {
      zh: 'MediaPilot 串了新媒体人的日常链路：全网五端热点聚合（百度/微博/知乎/抖音/小红书），订阅话题每日 08:00 自动推送，三平台 × 三风格口播文案 + 分镜头脚本生成，Whisper 本地音视频转写，AI 产品导师兜底问答。',
      en: "MediaPilot strings together the daily new-media pipeline: 5-source trending aggregation (Baidu/Weibo/Zhihu/Douyin/Xiaohongshu), topic subscription with daily 8AM push, 3-platform × 3-style copy & shooting script, local Whisper transcription, AI tutor as fallback Q&A.",
    },
    architecture: {
      zh: '前端 React 19 + Vite + Tailwind。后端 FastAPI + SQLAlchemy + Pydantic v2 + Alembic。AI 走火山引擎 Ark API。**Redis + ARQ 异步任务，APScheduler 调度订阅推送**。JWT 双 token 鉴权，限流 + Sentry + 请求链路追踪。',
      en: 'Frontend: React 19 + Vite + Tailwind. Backend: FastAPI + SQLAlchemy + Pydantic v2 + Alembic. AI: Volcengine Ark API. **Redis + ARQ for async, APScheduler for subscription push**. JWT dual-token auth, rate limiting, Sentry, request tracing.',
    },
    tech: [
      'React 19', 'Vite', 'Tailwind CSS', 'FastAPI', 'SQLAlchemy', 'Pydantic v2',
      'Whisper', 'Redis', 'ARQ', 'APScheduler', 'JWT', 'Sentry', '火山引擎 Ark',
    ],
    metrics: [
      { value: '10×', label: { zh: '文案周产能', en: 'Weekly copy output' } },
      { value: '24×', label: { zh: '粗剪效率', en: 'Rough-cut speed' } },
      { value: '50%', label: { zh: '新人培训周期缩短', en: 'Onboarding cut' } },
      { value: '4', label: { zh: '高客单价行业', en: 'High-ticket industries' } },
    ],

    gallery: [
      {
        image: '/images/projects/gallery/mediapilot-cover-new.png',
        alt: { zh: "MediaPilot 营销页 hero - 内容创作全流程一站式解决方案", en: "MediaPilot marketing hero - end-to-end content creation solution" },
        title: { zh: "内容创作全流程，一站式解决方案", en: "End-to-end content creation, one-stop solution" },
        body: { zh: "从热点发现到内容创作,从数据分析到发布规划——让每一个创作环节都更高效。六大核心模块:拍摄脚本 / 热点搜索 / 口播文案 / 视频分析 / 语音转写 / 话题订阅", en: "From trend discovery to content creation, from data analysis to publishing planning — make every creative step more efficient. Six core modules: shoot script / trending search / voiceover copy / video analysis / voice-to-text / topic subscription." }
      },
      {
        image: '/images/projects/gallery/mediapilot-02-voiceover-input.png',
        alt: { zh: "MediaPilot 口播文案生成(功能介绍页)", en: "MediaPilot voiceover copy generation (intro page)" },
        title: { zh: "口播文案生成：人设 + 模式 + 时长 + 话题", en: "Voiceover copy: persona + mode + duration + topic" },
        body: { zh: "功能页介绍:大标题\"口播文案生成\"+ 副标题\"输入人设,AI 自动生成口播文案\"。四段输入控制生成:①人设(决定文案风格/视角,如\"资深健身博主\")②生成模式:从 0 到 1 / 热点框架 / 改写旧文 ③口播时长:30/60/90 秒对应 130/260/400 字 ④输入话题。\"深度思考\"开关启用 thinking model——大改写场景下质量更稳。底部\"保存当前人设\"把好的人设沉淀为复用模板", en: "Feature intro page: big title \"口播文案生成\" + subtitle \"Input persona, AI auto-generates voiceover copy\". Four-step input: ① Persona ② Mode: from scratch / hot framework / rewrite existing ③ Duration: 30/60/90s → 130/260/400 chars ④ Topic. \"Deep thinking\" toggle enables thinking model for stable big rewrites. \"Save persona\" bottom persists good personas as reusable templates." }
      },
      {
        image: '/images/projects/gallery/mediapilot-03-voiceover-result.png',
        alt: { zh: "MediaPilot 口播文案生成结果", en: "MediaPilot voiceover copy result" },
        title: { zh: "口播文案：标题 + 3 钩子 + 正文 + 一键改写", en: "Voiceover: title + 3 hooks + body + one-click rewrite" },
        body: { zh: "标题、3 条钩子(可点击复用)、文案正文 481/400 字(超字数时标红)。底部 3 个改写快捷键:更口语化 / 加情绪 / 加观点——不是从头生成,是在原文基础上精确调整。右侧\"v2(当前)\"显示历史版本,\"复制全文\"一键带走", en: "Title, 3 hook variants (click to use), body 481/400 chars (over-limit flagged red). Bottom 3 rewrite shortcuts: more colloquial / add emotion / add opinion — not regenerate, but precise tweak. \"v2 (current)\" shows version history, \"Copy all\" one-click export." }
      },
      {
        image: '/images/projects/gallery/mediapilot-04-shootscript-input.png',
        alt: { zh: "MediaPilot 拍摄脚本输入", en: "MediaPilot shoot script input" },
        title: { zh: "脚本输入：人设 + 话题 + 平台 + 时长 + 风格", en: "Script input: persona + topic + platform + length + style" },
        body: { zh: "5 个维度控制脚本生成:①人设(资深健身教练)②话题(练一个月就要马甲线?)③目标平台(抖音竖屏/小红书竖屏/B站横屏 5-10 分钟深度)④视频时长 60/120/180 秒(对应 5/8/10 个分镜)⑤脚本风格(激情热血/轻松幽默/专业分析)。\"深度思考\"开关按需启用", en: "5 dimensions: ① Persona ② Topic ③ Target platform (Douyin vertical / Xiaohongshu vertical / Bilibili horizontal 5-10min) ④ Duration 60/120/180s (5/8/10 shots) ⑤ Style (energetic / humorous / professional). \"Deep thinking\" toggle on demand." }
      },
      {
        image: '/images/projects/gallery/mediapilot-05-shootscript-result.png',
        alt: { zh: "MediaPilot 拍摄脚本生成结果", en: "MediaPilot shoot script result" },
        title: { zh: "脚本结果：基于平台 + 风格 + 时长自动生成", en: "Script result: platform + style + duration-aware generation" },
        body: { zh: "预计时长 74 秒(基于小红书平台特点生成 energetic 风格脚本)。输出:标题 + 3 条钩子(反常识+提问式 / 损失厌恶 / 提问式+身份代入)+ 行动号召 + 9 个平台标签。底部\"复制脚本\"和\"重新生成\"两个动作,导出 JSON / TXT / CSV", en: "Predicted 74-second duration (based on Xiaohongshu platform + energetic style). Output: title + 3 hook variants (counterintuitive + question / loss aversion / question + identity substitution) + CTA + 9 platform tags. Bottom: \"Copy Script\" / \"Regenerate\", export JSON / TXT / CSV." }
      },
      {
        image: '/images/projects/gallery/mediapilot-06-shootscript-storyboard.png',
        alt: { zh: "MediaPilot 分镜头脚本", en: "MediaPilot shot-by-shot storyboard" },
        title: { zh: "分镜头：5 镜头 × 画面/台词/场景/运镜/时间码", en: "Storyboard: 5 shots × frame/dialogue/scene/movement/timecode" },
        body: { zh: "每个镜头拆 5 要素:画面(特写教练额角带汗手指点镜头)/ 台词(练一个月就想要马甲线?醒醒!)/ 场景(健身房背景虚化暖光侧打)/ 运镜(快推从特写拉回中景)/ 时间码 0:00-0:08。客户第一次面对镜头的紧张/气口/口癖,剪辑师一目了然", en: "Each shot = 5 elements: frame (close-up trainer sweating, finger pointing) / dialogue (Want abs in a month? Wake up!) / scene (gym BG blurred, warm side light) / camera move (quick push from close-up to mid-shot) / timecode 0:00-0:08. First-time-on-camera tension/breath/fillers — all visible to editor." }
      },
      {
        image: '/images/projects/gallery/mediapilot-07-content-library.png',
        alt: { zh: "MediaPilot 内容库", en: "MediaPilot content library" },
        title: { zh: "内容库：13 内容 5 类型,搜索 + 类型 + 日期过滤", en: "Library: 13 items / 5 types, search + type + date filter" },
        body: { zh: "顶部 5 个类型计数器:13 全部 / 5 拍摄脚本 / 5 口播文案 / 3 视频 / 0 音频(标 0 防误用)。搜索 + 类型下拉 + 起止日期三重过滤,卡片列出 video_edit / shoot_script / 口播文案,每条带原始 101s→剪辑后 75s 的对比。客户级资产库,不再是一次性输入", en: "Top 5 type counters: 13 all / 5 scripts / 5 copy / 3 video / 0 audio (0s flagged to prevent misuse). Search + type dropdown + date range triple filter. Cards show video_edit / shoot_script / 口播文案 with original 101s → edited 75s comparison. Client-level asset library, not one-off input." }
      },
      {
        image: '/images/projects/gallery/mediapilot-08-video-edit.png',
        alt: { zh: "MediaPilot AI 视频剪辑", en: "MediaPilot AI video edit" },
        title: { zh: "AI 剪辑：原始 1:41 → 剪后 1:14,删除 20 段", en: "AI edit: 1:41 raw → 1:14 final, 20 segments removed" },
        body: { zh: "左:上传视频 + 剪辑强度(轻柔=仅删语气词 / 标准=语气词+停顿 / 强力=全面清理)。右:剪辑结果 + 360p 预览,鼠标悬停看删除原因。原始 1:41 → 剪后 1:14,删除 20 段,红色=删除 绿色=保留的时间轴可视化。每分钟视频消耗 15 配额,处理时间 ≈ 视频时长 2-3 倍", en: "Left: upload + intensity (light = filler words / standard = filler + pauses / strong = full cleanup). Right: result + 360p preview, hover to see why a segment was cut. 1:41 raw → 1:14 final, 20 segments removed, red=cut green=keep timeline. 15 credits/min, processing 2-3x video length." }
      },
      {
        image: '/images/projects/gallery/mediapilot-09-transcribe.png',
        alt: { zh: "MediaPilot 语音转文字", en: "MediaPilot voice-to-text transcription" },
        title: { zh: "语音转文字：上传音视频 + 带时间戳的逐句转录", en: "Voice-to-text: upload audio/video + timestamped line-by-line transcript" },
        body: { zh: "左:上传文件 / 实时录音 两种入口,支持 MP3/WAV/M4A/MP4/MOV 格式,建议音频 < 100MB(清晰度越高转录越准)。右:转录结果,每行带 [10:02] [10:05] 时间戳,\"复制全部\"一键带走。素材不再是黑盒——可搜索可复盘可二次创作", en: "Left: upload file / live record two entry points, supports MP3/WAV/M4A/MP4/MOV, audio < 100MB recommended (clearer audio = more accurate transcript). Right: transcript with [10:02] [10:05] timestamps per line, \"Copy all\" one-click. Media no longer a black box — searchable, reviewable, re-editable." }
      }
    ],

    highlights: [
      { zh: '行业垂直 Prompt × 4 套（金融/教育/移民/房产）', en: '4 industry-vertical prompt sets' },
      { zh: '本地爆款知识库（结构化、可版本管理）', en: 'Local viral-formula KB' },
      { zh: '4 层粗剪删减架构（自研算法）', en: '4-layer rough-cut algorithm' },
      { zh: '客户级配置矩阵（行业 × 人设）', en: 'Client × industry config matrix' },
      { zh: 'AI 决策日志（透明化，30 秒判断是否恢复）', en: 'AI decision log' },
      { zh: '人机分工产品哲学（AI 干粗活、人干精活）', en: 'Human-AI division of labor' },
    ],
  },

  // ============================================
  //  COMMERCIAL EXTENSION · Lumora
  // ============================================
  {
    id: 'lumora',
    name: { zh: 'Lumora · 思念具象化 Agent', en: 'Lumora · Longing Made Tangible' },
    tagline: {
      zh: '把"想念一个人"变成可以再次对话的存在。Flutter 桌面应用。',
      en: 'Turn "I miss someone" into someone you can talk to again. Flutter desktop app.',
    },
    cover: '/projects/lumora-cover.png',
    coverGradient: 'linear-gradient(135deg, #FF6B9D 0%, #C44E8E 50%, #6B2C5F 100%)',
    tags: ['Flutter', 'Emotion AI', 'Voice Clone', 'Product'],
    role: 'Sole PM + Engineer',
    year: '2025',
    status: { zh: '产品验证中 · 订阅路线', en: 'Product validation · subscription path' },
    color: '#FF6B9D',
    repo: 'https://github.com/bgyyou/Lumora',

    // 5 段字段全部留空，让 fallback 接管
    background: { zh: '', en: '' },
    challenge:  { zh: '', en: '' },
    approach:   { zh: '', en: '' },
    results:    { zh: '', en: '' },

    problem: {
      zh: '市面上 AI 陪伴产品大多解决"现在没人陪"的问题。Lumora 想解决另一种缺失 — **"我曾经有这个人，现在没有了"**。精灵不是替代品，而是过渡性客体。',
      en: 'Most AI companion products solve "I have no one right now." Lumora solves another kind of absence — **"I used to have this person, now I don\'t."** Not a replacement, a transitional object.',
    },
    solution: {
      zh: '一个 Windows 桌面应用。文生图 / 图生图生成精灵 → 三层记忆系统（profile / events / messages）→ 手动触发的火山豆包声音克隆 → 危机拦截。产品宪法明文规定"希望你不再需要我"是态度，不是 KPI。',
      en: 'A Windows desktop app. Text-to-image / image-to-image spirit gen → 3-tier memory (profile / events / messages) → manual-triggered voice clone via Volcengine → crisis intervention. The product constitution states: "I hope you no longer need me" is an attitude, not a KPI.',
    },
    architecture: {
      zh: 'Flutter 3.5+ Windows target。**图层分解眨眼** + 双 player 无缝循环视频 + 鼠标 perspective tilt 是体验层亮点。记忆检索锚定人脑认知科学：tag 预筛 → weight+recency 砍 40 → LLM rerank top-K。Cowan 工作记忆 4±1 + 扩散激活 3-7。',
      en: 'Flutter 3.5+ Windows target. **Layer-decomposed blinking** + dual-player seamless video loop + mouse perspective tilt are the experience highlights. Memory retrieval anchored in cognitive science: tag pre-filter → weight+recency cut to 40 → LLM rerank top-K.',
    },
    tech: [
      'Flutter 3.5+', 'Dart', 'Agnes AI (image)', 'ARK (LLM)', '火山豆包 TTS',
      'edge-tts', 'Local file storage', 'Isolate processing',
    ],
    metrics: [
      { value: '3', label: { zh: '层记忆系统', en: 'tier memory' } },
      { value: '5/8', label: { zh: '默认/深度 top-K', en: 'top-K (default/deep)' } },
      { value: 'v2.2', label: { zh: '当前版本', en: 'Current version' } },
      { value: '1', label: { zh: '产品宪法', en: 'constitution' } },
    ],

    gallery: [
      {
        image: '/images/projects/gallery/lumora-01-splash.png',
        alt: { zh: 'Lumora 启动页 + 选精灵', en: 'Lumora splash + spirit selection' },
        title: { zh: '启动页不是空聊天框,是精灵卡片网格', en: 'Splash is a spirit gallery, not an empty chat' },
        body: { zh: '副标题"陪你走过这段,然后,希望你不再需要我。"——产品宪法从第一屏就立住了。下面是温柔/灵动两只精灵卡片,点击进入对话。情绪从第一屏就落在"思念被保存下来",而不是"又来一个 AI 聊天框"。', en: 'Subtitle \"Walk with you through this, then I hope you no longer need me.\" The product constitution is set from screen one. Below: two spirit cards (温柔/灵动), click to enter chat. The mood is \"memories preserved\", not \"another AI chat box\".' },
      },
      {
        image: '/images/projects/gallery/lumora-02-text-custom.png',
        alt: { zh: 'Lumora 文字描述创建精灵', en: 'Lumora text-based spirit creation' },
        title: { zh: '文字描述:性别/气质/画风三段配置', en: 'Text config: gender / temperament / art style' },
        body: { zh: '三段配置:①性别(女/男/中性)②气质(温柔/灵动/沉稳/清冷/阳光/文艺/酷飒/治愈,可多选)③画风(阳光日漫/清冷月色/暖调暮色)。额外描述支持自由输入,如"短发,戴眼镜,穿白衬衫,浅笑"。底部"生成"按钮,生成约 30-60 秒', en: 'Three-step config: ① Gender (F/M/neutral) ② Temperament (8 options, multi-select) ③ Art style (3 options). Free-text extra description supported. Bottom \"Generate\" takes 30-60s.' },
      },
      {
        image: '/images/projects/gallery/lumora-03-photo-custom.png',
        alt: { zh: 'Lumora 照片生成精灵', en: 'Lumora photo-to-spirit generation' },
        title: { zh: '照片生成:上传一张图,保持脸不变换画风', en: 'Photo gen: upload one image, keep face change style' },
        body: { zh: '上传一张照片,系统自动保留原图的性别/年龄/五官/神态,无需在 prompt 里重复。只换画风——你认识 ta,只是让 ta 进入 Lumora 的世界。"生成"同样 30-60 秒,失败可重试。', en: 'Upload one photo. System auto-preserves the subject\'s gender/age/features/expression, so you don\'t repeat in prompt. Only the art style changes — you still recognize them, they just step into Lumora\'s world. Same 30-60s generation, retryable on failure.' },
      },
      {
        image: '/images/projects/gallery/lumora-04-spirit-awakening.png',
        alt: { zh: 'Lumora 精灵觉醒页', en: 'Lumora spirit awakening screen' },
        title: { zh: '精灵觉醒:立绘 + 状态文字 + 仪式感', en: 'Spirit awakening: portrait + status line + ritual' },
        body: { zh: '"罗罗 抱着抱枕坐著,没在想什么。"——状态文字不是 AI 自我描述,而是用户的视角。"正在唤醒..."过渡后,底部"点我说话"按钮亮起。第一次交互不是问问题,而是让 ta 先"在"。', en: 'Status line is from the user\'s perspective, not AI self-description. After \"正在唤醒...\" transition, the \"点我说话\" button lights up. First interaction is not a question — it lets the spirit just \"be there\" first.' },
      },
      {
        image: '/images/projects/gallery/lumora-05-chat.png',
        alt: { zh: 'Lumora 聊天页', en: 'Lumora chat screen' },
        title: { zh: '聊天页:立绘 + 多轮对话 + 主动提问', en: 'Chat: portrait + multi-turn + proactive questions' },
        body: { zh: '立绘居中、对话气泡两侧展开、tilt + 眨眼让"ta 在这里"。左下角小头像 + "罗" 是用户气泡,右侧"你认识我吗"是 ta 主动发问——AI 不是应答器,是有"主动好奇"的。记忆中提到"ENTP·处女座·吃软不吃硬·喜欢撒娇"等具体细节都被记住。', en: 'Portrait centered, bubbles on both sides, tilt + blink maintain presence. Left: user bubble with mini avatar. Right: spirit proactively asks \"你认识我吗\" — AI is not a responder, it has genuine curiosity. Memory recalls specific details like ENTP / Virgo / soft-but-stubborn / likes to act cute.' },
      },
      {
        image: '/images/projects/gallery/lumora-06-memory-editor.png',
        alt: { zh: 'Lumora 记忆编辑', en: 'Lumora memory editor' },
        title: { zh: '记忆编辑:可改可加,不让黑盒绑架用户', en: 'Memory editor: editable, no black-box lock-in' },
        body: { zh: '"整理 ta 记得的事"——profile 区显示整体印象(可改),下面是 1/15 记忆卡片(可加可删)。每条带重要度(低/中/高) + 标签(地铁/雪/围中等)。"系统自动保留原图的性别/年龄/五官/神态"——用户掌握所有关于 ta 的真相,AI 只是把真相接住。', en: '"整理 ta 记得的事" — profile shows overall impression (editable), below: 1/15 memory cards (add/remove). Each card has importance (low/mid/high) + tags. \"系统自动保留...\" — the user owns all the truth about their person, AI just holds it for them.' },
      },
    ],

    highlights: [
      { zh: '产品宪法: "希望你不再需要我"', en: 'Product constitution' },
      { zh: '三层记忆系统（profile/events/messages）', en: '3-tier memory system' },
      { zh: '图层分解眨眼 + 双 player 无缝视频', en: 'Layer-decomposed blink + seamless video' },
      { zh: '火山豆包声音克隆 + 手动触发仪式感', en: 'Voice clone + manual trigger ritual' },
      { zh: '危机拦截 + 模糊语境关切性追问', en: 'Crisis intervention' },
    ],
  },

  // ============================================
  //  COMMERCIAL EXTENSION · Job Hunter
  // ============================================
  {
    id: 'jobhunter',
    name: { zh: 'Job Hunter · 求职智能体', en: 'Job Hunter · Job-Seeking AI Agent' },
    tagline: {
      zh: '面向求职者的 AI 全流程助手：Flow A 从零生成 / Flow B 改写已有简历 + 跨语言 JD 知识库 + 模式 A/B 自动路由。',
      en: 'AI assistant for job seekers: Flow A from-scratch / Flow B rewrite + bilingual JD KB + auto mode A/B routing.',
    },
    cover: '/projects/jobhunter-cover.png',
    coverGradient: 'linear-gradient(135deg, #4FC3F7 0%, #2196F3 50%, #1565C0 100%)',
    tags: ['Enterprise SaaS', 'RAG', 'PyInstaller', 'Local-first'],
    role: 'Sole PM + Engineer',
    year: '2024 — 至今',
    status: { zh: '企业内测中 · 走 SaaS 路线', en: 'Enterprise beta · SaaS roadmap' },
    color: '#4FC3F7',
    repo: 'https://github.com/bgyyou/job-hunter',

    // === 5 段正文 (v2.1) — Leon 填 (C 端求职者版) ===
    background: { zh: `<strong>Job Hunter</strong> 是一个面向求职者的 AI 全流程助手，覆盖三个核心场景：<br/>- <strong>Flow A 从零生成</strong>：选行业 → 多轮对话采集 → RAG 检索同类 JD 提炼骨架 → 一页纸简历生成 + 导出 Word/PDF<br/>- <strong>Flow B 修改已有</strong>：上传简历 → 匹配 JD → 优化建议 → 定制化简历 + Cover Letter<br/>- <strong>JD 知识库</strong>：爬取 JobsDB / 猎聘 / 51job 三平台共 <strong>4485 条真实 JD</strong>，切成 <strong>24608 个语义 chunk</strong>，跨语言翻译 backfill 入库做 RAG 检索<br/><br/>技术栈：Streamlit（前端）+ 多 Agent 协作（orchestrator + chat + match + retrieval + rewritter）+ SQLite / PostgreSQL 双后端 + BGE-small-zh 嵌入 + cross-encoder rerank + MiniMax-M3 LLM + 一键 Docker 部署。<br/><br/>我自己就是目标用户：每天海投 50 份简历，<strong>每份要花 40 分钟改内容/改格式/对齐 JD 关键词</strong>。市面上的产品有三个真痛点：<br/>- <strong>JD 信息噪音大</strong>：招聘平台 JD 平均 800-2000 字，岗位职责/任职要求/公司福利混杂，没有"用户真正关心的能力"的结构化抽象<br/>- <strong>简历模板化</strong>：ChatGPT 生成的简历 70% 是 <code>[您的姓名]</code> <code>202X 年</code> 占位符——LLM 默认行为是"补完看似合理的内容"而非"标记 unknown"<br/>- <strong>改简历效率低</strong>：同一份简历要针对不同 JD 反复改 bullet/关键词/量化成果，缺少"以 JD 为锚点的自动改写 + 自动对齐评分"工具链<br/><br/><strong>第一性原理</strong>：求职市场是<strong>信息不对称 + 模板化同质化</strong>的双重困境。AI 助手真正的价值不是"帮你写简历"，而是：①把 JD 里"用人方真正想要的"抽出来（结构化 + RAG）②把你的"真实经历"按 JD 需求重排（不是编造，是裁剪+视角切换）③把"机械改简历"的时间从 40 分钟/份压到 5 分钟/份。<br/><br/><strong>项目定位</strong>：不是 ChatGPT 套壳（核心壁垒在数据 4485 JD + 评测体系 50 query baseline + Spearman 校准 + 工程化 Docker + 多用户隔离 + 配额熔断）；不是 ToB SaaS（先做工具级产品验证 PMF）；不是简历模板站（模板是 5 分钟的活儿，价值 80% 在"理解 JD"）。`, en: '' },
    challenge:  { zh: `<strong>2.1 技术难点（4 个）</strong><br/>- <strong>Bilingual RAG 跨语言召回 gap</strong>：中文 query vs 英文 JD title，cosine 相似度被拉到 0.3 以下，<strong>NDCG@10 = 0.46 / Recall@10 = 0.30 / 15/50 zero-relevant-in-top-10</strong>。根因：BGE-small-zh 是中文模型，跨语言语义空间不对齐<br/>- <strong>LLM 编造内容（占位符）</strong>：Flow A 生成的简历满是 <code>[您的姓名]</code> <code>[待补充]</code>。<strong>真值排查</strong>：<code>MiniMax-M3</code> 是 thinking model，把 <code>reasoning_content</code> 算进 <code>max_tokens</code> 预算——<code>extract_section(max_tokens=1000)</code> 预算被 reasoning 全部吃光，content 返回空串<br/>- <strong>SQLite 性能瓶颈</strong>：24608 chunks，O(N) 全表扫描每条 query 6.3 秒。根因：embedding 存成 JSON BLOB（每条 11KB），向量检索靠 numpy 手算 cosine<br/>- <strong>thinking model 流式截断</strong>：<code>analyze_stream</code> 到结尾 <code>reasoning_content</code> 把 <code>content</code> 顶掉，用户看到空回答<br/><br/><strong>2.2 产品难点（3 个）</strong><br/>- <strong>对话式生成 vs 模板填空的拉锯</strong>：LLM 自主收尾 = 主观判断"信息够了" = 不可靠；用户讲 1 段经历就生成通篇简历；用户记不清细节 LLM 帮"补全"出错误内容<br/>- <strong>信息量不足时的兜底</strong>：应届生只有教育 + 实习，现有 AI 工具仍按"高级模板"生成 → 占位符泛滥 → 不可用。必须<strong>降级到模式 B（无公司名模板）</strong> + 强制标注 <code>[AI 模板生成]</code><br/>- <strong>评测体系缺失</strong>：做 RAG 改造时无法回答"这次改动变好还是变差"。50 query 自动评测没有人工标 <code>relevant_jd_ids</code>；LLM-as-judge 能不能信没校验。健康门槛：LLM judge 与人工 golden 的 Spearman ρ ≥ 0.8`, en: '' },
    approach:   { zh: `<strong>3.1 思路转变：LLM 自主 → 代码层状态机</strong><br/><strong>最初设计（失败）</strong>：Flow A 是单一 <code>chat()</code> 方法，LLM 自主决定何时输出 <code>[DONE]</code>。4 轮 bugfix 仍不可靠。<br/><strong>关键反思</strong>："作为 Agent 应该具备这样的能力——一轮一轮生成，最后汇总。"<br/><strong>架构重构</strong>：<br/>- 引入 <strong>section 状态机</strong>：8 段（header/education/experience/projects/skills/languages/summary/core_competencies），每段独立 chat + extract<br/>- <strong>代码层判定完成</strong>：本地 validator 检查 experience/projects 必填项是否齐全，不再信任 LLM 文本标记<br/>- <strong>LLM 退化为"措辞工具"</strong>：状态推进/流程控制/错误兜底全在代码层<br/><strong>收益</strong>：把"问什么/什么时候算问完/什么时候推进"三件事拿回代码层，可控性提升一个量级。<br/><br/><strong>3.2 关键决策 1：chunk_type 加权 + cross-encoder rerank</strong><br/>BGE 检索找到的 top-50 chunk 不一定按"对用户最有价值"排序。<strong>决策树</strong>：<br/>1. <strong>chunk_type 加权</strong>（<code>responsibility=1.2 / requirement=1.3 / overview=0.8</code>）——招聘方"任职要求"对求职者改简历权重最高<br/>2. <strong>over-fetch × 5</strong>：<code>candidate_k = max(top_k×5, 50)</code><br/>3. <strong>BGE-reranker-base 精排</strong>：~280MB 模型，sigmoid logits 归一化到 [0,1]<br/>4. <strong>复合打分</strong>：<code>0.7 × rerank_score + 0.3 × sim × type_weight × industry_weight</code><br/><strong>量化验证</strong>：NDCG@10 0.4791 → <strong>0.5379 (+12.3%)</strong>；MRR 0.3798 → <strong>0.4601 (+21.1%)</strong>；Hit Rate 0.68 → 0.70。MRR +21% 是最强信号——rerank 把"真相关但 cosine 低"的 chunk 拉到前面。<br/><br/><strong>3.3 关键决策 2：跨语言翻译 backfill（替代 query 改写）</strong><br/>中文 query vs 英文 JD title 召回 gap：<code>n_zero_relevant_in_top-10 = 15/50</code>。<br/>候选方案：<br/>- A. <strong>query 改写</strong>（中文 → 英文多路召回）——工程量大，需 query 分类 + 双 embedding<br/>- B. <strong>chunk 翻译 backfill</strong>（英文 chunk → 中文翻译入库）——一次性成本，但 corpus 永久统一<br/>- C. <strong>多语模型</strong>（换 embedder）——风险大，BGE-small-zh 在中文已是 SOTA<br/><strong>决策：方案 B</strong>——一次性翻译 24608 chunks，corpus 统一为中文向量空间。量化：<strong>NDCG@10 0.5379 → 0.6033 / Recall@10 0.3620 → 0.4880 / Hit Rate 0.70 → 0.90 / n_zero_relevant 15 → 5</strong>。<br/><br/><strong>3.4 关键决策 3：sqlite-vec HNSW 替代 numpy 暴力扫描</strong><br/>24k chunks 6.3s/query 不可接受。迁移 sqlite-vec HNSW 后 67ms/query（<strong>94× 加速</strong>），同时支持双后端（SQLite 本地优先 + PostgreSQL+pgvector 企业部署）。<br/><br/><strong>3.5 评测体系：LLM-as-judge + Spearman 校准</strong><br/>用 LLM judge 自动评分，<strong>同时用 50 query 人工 golden 校准</strong>——Spearman ρ ≥ 0.8 才算合格。评测不准，所有 RAG 改造都是盲改。<br/><br/><strong>3.6 配额熔断 + 审计日志</strong><br/>用户日限 50 + 全局日限 2000，超限 <code>QuotaExceededError</code>；14 种 action 审计日志（注册/登录/简历创建/JD 创建/匹配/优化）便于追溯。`, en: '' },
    results:    { zh: `<strong>4.1 数据资产</strong><br/>- <strong>JD 库</strong>：4485 条真实 JD（51job 3954 / jobsdb 467 / liepin 55 / 手动+PDF+URL 9）<br/>- <strong>RAG 语料</strong>：24608 个语义 chunk，<strong>99.99% 已翻译入中文向量空间</strong><br/>- <strong>LLM 调用埋点</strong>：120327 条 <code>llm_calls</code>（成功/失败/缓存命中 三状态可分）<br/>- <strong>审计日志</strong>：14 条关键操作<br/><br/><strong>4.2 RAG 评测体系（50 query baseline）</strong><br/>- <strong>NDCG@10</strong>：M0 0.4625 → v4-2 0.4791 → +rerank 0.5379 → +翻译 backfill 0.6033 → <strong>最终 0.646（+40%）</strong><br/>- <strong>Recall@10</strong>：0.304 → <strong>0.538（+77%）</strong><br/>- <strong>MRR</strong>：0.3337 → <strong>0.442（+33%）</strong><br/>- <strong>Hit Rate</strong>：0.68 → <strong>0.96（+41%）</strong><br/>- <strong>n_zero_relevant</strong>：16 → 15 → 5 → <strong>2</strong><br/>- <strong>mock fallback</strong>：8/50 → 6/50 → <strong>0/50</strong>（429 retry + 串行 = 根因治理）<br/><br/><strong>4.3 测试覆盖</strong><br/>- <strong>测试基线</strong>：35 → <strong>545 passed</strong>（+1500%，覆盖 8 轮迭代新增所有模块）<br/>- <strong>核心模块覆盖率</strong>：database 67% / services 82% / tools 25%<br/>- <strong>CI</strong>：GitHub Actions 跑 pytest + secret-scan + docker-build，三条 workflow 全 success<br/><br/><strong>4.4 工程化交付</strong><br/>- <strong>Docker 一键部署</strong>：<code>Dockerfile</code>（python:3.11-slim + requirements.lock + playwright chromium）+ <code>docker-compose.prod.yml</code>（app + postgres(pg16+pgvector) + caddy）<br/>- <strong>自动迁移</strong>：SQLite / PG 两套迁移链按文件名顺序幂等执行<br/>- <strong>多用户隔离</strong>：登录门 + user_id 归属校验 + 10 条数据隔离测试<br/>- <strong>配额熔断</strong>：用户日限 50 + 全局日限 2000，超限 <code>QuotaExceededError</code>（区分用户档/全局档）<br/>- <strong>审计日志</strong>：14 种 action（<code>user.register</code> / <code>user.login.failure</code> / <code>resume.create</code> / <code>jd.create</code> / <code>match.run</code> / <code>resume.optimize</code> 等）`, en: '' },

    problem: {
      zh: '企业 HR 的简历筛选是一条断链 — 简历在邮箱，JD 在招聘平台，匹配靠 HR 肉眼，候选人评估标准又因人而异。**需要一套本地优先、可私有化部署的 AI 工具，把"解析 → 匹配 → 评估 → 推荐"全链路打通，HR 数据不出企业内网**。',
      en: 'Enterprise HR screening is a broken pipeline — resumes in mailboxes, JDs on job boards, matching by eye, candidate scoring depending on whoever reviews. **We need a local-first, on-prem-deployable AI tool that closes the parse → match → score → shortlist loop, with HR data never leaving the company network**.',
    },
    solution: {
      zh: '面向 HR 团队的 Streamlit 本地 app。批量 PDF/MD 简历 → LLM 结构化抽取 → JD 来源支持单条/批量/URL 抓取/站点爬虫（Boss、JobsDB、猎聘、LinkedIn）→ 匹配评分 + 缺口清单 + 段落级改写建议 → Cover Letter 模板库 → 团队协作的 shortlist 工作流。**PyInstaller 打成 8.6MB exe**，单台 HR 工作站即可运行。',
      en: 'Streamlit local app for HR teams. Batch PDF/MD resumes → LLM structured extract → JD sources (single/batch/URL/scraper for Boss, JobsDB, Liepin, LinkedIn) → match score + gap analysis + paragraph-level rewrite → cover-letter template library → team shortlist workflow. **PyInstaller bundled to 8.6MB exe**, runs on a single HR workstation.',
    },
    architecture: {
      zh: '**企业部署优先**: SQLite 默认 + PostgreSQL+pgvector 进阶（**BGE-small-zh 512 维，pgvector cosine + chunk_type 加权**）。支持单租户私有部署，HR 数据完全本地化。爬虫支持站点登录态失效时打印明确"请重跑 login_xxx.py"提示，不静默失败。loguru 20MB/7 天日志轮转便于审计。',
      en: '**Enterprise-deploy first**: SQLite default + PostgreSQL+pgvector advanced (**BGE-small-zh 512d, pgvector cosine + chunk_type weighted**). Single-tenant on-prem ready — HR data never leaves the company. Scrapers print explicit "re-run login_xxx.py" prompts on session expiry, no silent failure. loguru 20MB/7d log rotation for audit.',
    },
    tech: [
      'Python 3.11', 'Streamlit', 'SQLite/PostgreSQL', 'pgvector',
      'BGE-small-zh', 'BGE-reranker-base', 'sqlite-vec (HNSW)',
      'MiniMax-M3 (thinking model)', 'Multi-Agent', 'Docker',
      'gitleaks', 'pre-commit (secrets guard)', 'pytest', 'GitHub Actions',
    ],
    metrics: [
      { value: '8×', label: { zh: '改简历效率', en: 'Resume-rewrite speed' } },
      { value: '0.65', label: { zh: 'NDCG@10', en: 'NDCG@10 (RAG)' } },
      { value: '24608', label: { zh: 'RAG chunks', en: 'RAG chunks' } },
      { value: '545', label: { zh: '测试通过', en: 'Tests passing' } },
    ],

    gallery: [
      {
        image: '/images/projects/gallery/jobhunter-01-landing.png',
        alt: { zh: "JobHunter 求职智能体营销首页", en: "JobHunter marketing landing" },
        title: { zh: "求职智能体：2w+ JD / 30+ 岗位 / 100+ 公司", en: "Job-seeking agent: 2w+ JDs / 30+ categories / 100+ companies" },
        body: { zh: "\"你的全能求职智能体\" 营销首页:整理全行业 2w+ 真实 JD 数据,自动分析差距、改写经历、生成定制简历。底部 4 个数据 metric:2w+ 真实 JD 数据 / 30+ 岗位类目 / 100+ 覆盖公司 / 5+ 主流招聘源——5 分钟生成定制简历,不是套模板", en: "\"Your all-in-one job-seeking agent\" landing: 2w+ real JDs across industries, auto gap analysis / experience rewrite / custom resume. Bottom 4 metrics: 2w+ real JDs / 30+ categories / 100+ companies / 5+ sources — 5-min custom resume, not template fill." }
      },
      {
        image: '/images/projects/gallery/jobhunter-02-capabilities.png',
        alt: { zh: "JobHunter 核心能力 + 三步生成定制简历", en: "JobHunter core capabilities + 3-step resume generation" },
        title: { zh: "4 核心能力 + 3 步生成定制简历(全程 < 5 分钟)", en: "4 core capabilities + 3-step custom resume (<5 min)" },
        body: { zh: "4 个核心能力:JD 库智能检索(2w+ 真实 JD 全文索引,按岗位/行业/公司/来源多维筛选)/ RAG 差距分析(BGE 语义检索召回 top-N 高相似 JD,识别经历能力缺口)/ 多岗位定位(AI PM/数据产品/LLM 工程师一键切换)/ 一键导出(Markdown/HTML/PDF 排版适配主流招聘平台)。三步流程:选目标岗位 → 拉取相关 JD → 生成定制简历", en: "4 capabilities: smart JD search (2w+ full-text indexed, multi-dim filter by role/industry/company) / RAG gap analysis (BGE top-N similar JD, identify experience gaps) / multi-role targeting (AI PM / data PM / LLM engineer one-click switch) / one-click export (Markdown/HTML/PDF, layout adapted to major platforms). 3-step flow: pick target → pull relevant JD → generate custom resume." }
      },
      {
        image: '/images/projects/gallery/jobhunter-03-rewrite-case.png',
        alt: { zh: "JobHunter 简历修改案例 Before/After", en: "JobHunter resume rewrite case Before/After" },
        title: { zh: "案例：产品经理 → AI 产品经理(召回 +35%)", en: "Case: PM → AI PM (recall +35%)" },
        body: { zh: "Before:产品经理,负责产品需求分析,参与 AI 工具设计,具备一定数据分析能力(模糊、无量化、缺关键词)。After:AI 产品经理,主导 0→1 大模型问答产品上线,DAU 50w+,基于 RAG 检索召回提升 35%(具体到产品/数字/动作/结果)。左侧 AI 用 RAG 找到目标岗位真正的关键能力,右侧重排经历把同事实表达成目标岗位关心的证据", en: "Before: Product Manager — responsible for product req analysis, participated in AI tool design, has some data analysis ability (vague, unquantified, missing keywords). After: AI PM — led 0→1 LLM Q&A product launch, DAU 50w+, RAG recall improved 35% (specific product/numbers/actions/results). Left: AI uses RAG to find real key abilities. Right: rearrange same facts as evidence the target role cares about." }
      },
      {
        image: '/images/projects/gallery/jobhunter-04-faq.png',
        alt: { zh: "JobHunter 常见问题 FAQ", en: "JobHunter FAQ" },
        title: { zh: "FAQ：数据/隐私/能力/导出/计费,6 个最关心的问题", en: "FAQ: data / privacy / capability / export / billing, top 6 questions" },
        body: { zh: "6 个用户最关心的问题:①JD 数据来源(JobsDB/猎聘/Boss/51job 公开爬取 + 手动添加,仅保留结构化字段)②简历数据安全(本地 SQLite 或自建 PG,LLM 只传必要上下文不留存)③支持的岗位方向(30+ 岗位类目,可基于 JD 库持续扩展)④LLM 模型(默认 Agnes,可在 .env 切换火山/OpenAI/DeepSeek)⑤能否导出 PDF(支持 Markdown/HTML,PDF 通过浏览器\"打印→另存\")⑥是否需要付费(当前完全开源免费,API Key 自带,0.05-0.2 元/份)", en: "Top 6 user questions: ① JD source (JobsDB/Liepin/Boss/51job public crawl + manual, only structured fields) ② Privacy (local SQLite or self-hosted PG, LLM only gets necessary context, no retention) ③ Supported roles (30+ categories, expandable via JD library) ④ LLM (default Agnes, switch to Volcengine/OpenAI/DeepSeek in .env) ⑤ PDF export (Markdown/HTML direct, PDF via browser print) ⑥ Pricing (currently open source free, your own API key, ¥0.05-0.2 per resume)." }
      },
      {
        image: '/images/projects/gallery/jobhunter-05-flow-selection.png',
        alt: { zh: "JobHunter 两个入口", en: "JobHunter two entry points" },
        title: { zh: "两个入口：Flow A 从零生成 / Flow B 改写已有", en: "Two entries: Flow A from-scratch / Flow B rewrite existing" },
        body: { zh: "用户进来先选动作:Flow A 适合没有现成简历/想按目标岗位重新组织经历的人(选行业→多轮对话采集→基于 JD 库生成岗位化简历);Flow B 适合已有简历,需要针对某个 JD 做匹配分析和定制改写(上传简历+JD→分析匹配度与差距→生成优化简历+Cover Letter)", en: "Pick action first: Flow A for those without a resume or who want to reorganize experience around a target role (pick industry → multi-turn intake → role-specific resume from JD library). Flow B for those with a resume, who need to match a specific JD and rewrite (upload resume + JD → gap analysis → optimized resume + cover letter)." }
      },
      {
        image: '/images/projects/gallery/jobhunter-06-flow-step2.png',
        alt: { zh: "JobHunter Flow A 第 2 步 - 填写简历内容", en: "JobHunter Flow A step 2 - fill resume content" },
        title: { zh: "Step 2 填写：基本信息 + 教育经历(可加多段)", en: "Step 2 fill: basic info + education (multi-section)" },
        body: { zh: "目标岗位未选也能继续——填一次表,后续能产出多份匹配不同岗位的简历。表单字段:基本信息(姓名/手机/现居地/性别/邮箱/出生年/求职意向)+ 教育经历(学校/学历/专业/入学/毕业/GPA,可加多段)。左下\"添加教育经历\"扩展,\"返回 Step 1 改 JD\"/\"重置草稿\"/\"重新开始\"三个动作顶部对齐", en: "Works even without target role picked — fill once, generate multiple role-matched resumes. Form fields: basic info (name/phone/location/gender/email/DOB/intent) + education (school/degree/major/enroll/grad/GPA, multi-section). Bottom-left \"Add education\" extends; \"Back to Step 1\" / \"Reset draft\" / \"Start over\" top-aligned." }
      },
      {
        image: '/images/projects/gallery/jobhunter-07-flow-step1.png',
        alt: { zh: "JobHunter Flow A 第 1 步 - 确定目标 JD", en: "JobHunter Flow A step 1 - pick target JD" },
        title: { zh: "Step 1 选 JD：库推荐 / 粘贴文本 / 上传截图 OCR", en: "Step 1 pick JD: library / paste text / upload screenshot OCR" },
        body: { zh: "三种 JD 输入方式二选一:①从行业/职能/岗位推荐(2w+ JD 库,行业→职能→岗位三级下拉,可加级别 senior/junior 过滤)②粘贴 JD 文本(直接复制粘贴)③上传 JD 截图(OCR 识别)。底部红色\"从 JD 库调出\"按钮——从选择到下一步,3 步完成", en: "Three JD input modes: ① From library (2w+ JDs, industry → function → role 3-level dropdown, level filter senior/junior) ② Paste JD text ③ Upload JD screenshot (OCR). Bottom red \"Pull from JD library\" — 3 clicks to next step." }
      }
    ],

    highlights: [
      { zh: '跨语言翻译 backfill（99.99% 覆盖，NDCG +12% / Recall +35%）', en: 'Bilingual translation backfill (99.99% coverage)' },
      { zh: 'chunk_type 加权 + cross-encoder rerank（MRR +21%）', en: 'chunk_type weighting + cross-encoder rerank' },
      { zh: '信息量评分 → 模式 A/B 自动路由（不编占位符）', en: 'Info-score → mode A/B auto-routing' },
      { zh: 'sqlite-vec HNSW（24k chunks 查询 67ms，94× 加速）', en: 'sqlite-vec HNSW (94× speedup)' },
      { zh: '评测体系：50 query LLM-as-judge + Spearman ρ ≥ 0.8 + 0% mock fallback', en: 'Eval system: 50 query + Spearman ≥ 0.8 + 0% mock' },
    ],
  },

  // ============================================
  //  COMMERCIAL EXTENSION · Poker GTO Trainer
  // ============================================
  {
    id: 'pokergto',
    name: { zh: 'Poker GTO Trainer', en: 'Poker GTO Trainer' },
    tagline: {
      zh: '德州扑克 GTO 训练工具：实时策略提示 + 漏失检测 + PyQt6 客户端，开源核心 + 付费训练版路线。',
      en: 'Texas Hold\'em GTO trainer: real-time strategy hints + leak detector, open-core with a paid trainer path.',
    },
    cover: '/projects/pokergto-cover.png',
    coverGradient: 'linear-gradient(135deg, #26C485 0%, #0F8B5C 50%, #054E32 100%)',
    tags: ['PyQt6', 'TexasSolver', 'SQLite', 'Open Core'],
    role: 'Sole PM + Engineer',
    year: '2024',
    status: { zh: '开源核心 · 付费版规划中', en: 'Open core · paid trainer planned' },
    color: '#26C485',
    repo: 'https://github.com/bgyyou/poker-gto-trainer',

    background: { zh: '', en: '' },
    challenge:  { zh: '', en: '' },
    approach:   { zh: '', en: '' },
    results:    { zh: '', en: '' },

    problem: {
      zh: '市面训练工具逼你在"真玩"和"solver 准确"之间二选一。我想两个都要 — 真客户端体验 + solver 级别反馈 + 量化的漏失分析。',
      en: 'Most training tools force you to choose between "real play" and "solver accuracy." I want both — real client experience + solver-grade feedback + quantified leak analysis.',
    },
    solution: {
      zh: 'PyQt6 桌面应用，**535 preflop + 2,602 postflop 场景预计算**（TexasSolver C++），P95 = 2.1ms 决策延迟。每手牌结束漏失检测（VPIP/PFR/AF/EV 4 维度），生成 Markdown/HTML/PDF 报告。PyInstaller + NSIS 打 Windows 安装包。',
      en: "PyQt6 desktop app, **535 preflop + 2,602 postflop scenarios pre-computed** (TexasSolver C++), P95 = 2.1ms decision latency. Per-hand leak detection (VPIP/PFR/AF/EV, 4 dimensions), Markdown/HTML/PDF reports. PyInstaller + NSIS Windows installer.",
    },
    architecture: {
      zh: '**3 层决策管线**: Cache hit (~0.2ms) → fast equity (~2ms) → solver fallback (~5-50ms)。97% 命中率在普通对局。SQLite 自动 + 手动 + 增量备份。14 个程序化生成的音效，无外部资源依赖。',
      en: '**3-layer decision pipeline**: cache hit (~0.2ms) → fast equity (~2ms) → solver fallback (~5-50ms). 97% cache hit rate in normal play. SQLite with auto + manual + incremental backup. 14 procedurally-generated SFX, no external assets.',
    },
    tech: [
      'Python 3.8+', 'PyQt6', 'TexasSolver (C++)', 'treys', 'SQLite', 'Rich',
      'PyInstaller', 'NSIS', 'pytest', '535+2602 预计算场景',
    ],
    metrics: [
      { value: '193/193', label: { zh: '核心测试通过', en: 'Core tests passing' } },
      { value: '85%+', label: { zh: '覆盖率', en: 'Coverage' } },
      { value: '2.1ms', label: { zh: 'P95 决策延迟', en: 'P95 decision latency' } },
      { value: '3137', label: { zh: '预计算场景', en: 'pre-computed scenarios' } },
    ],

    gallery: [
      {
        image: '/images/projects/gallery/pokergto-01-gto-advisor.png',
        alt: { zh: 'Poker GTO Trainer 目标 UI 概览(mockup)', en: 'Poker GTO Trainer target UI overview (mockup)' },
        title: { zh: '目标 UI:6-Max 桌 + GTO Advisor 实时建议', en: 'Target UI: 6-Max table + GTO Advisor in real time' },
        body: { zh: '6-Max 桌 + 中央 5 张公共牌 + 6 玩家位置 + 底部 RAISE 滑块 + Fold/Call/Raise/All-In 4 按钮。右侧 GTO Advisor 实时显示:YOUR HAND(手牌)/ RECOMMENDATION(Action / Size / Equity / Confidence)/ ACTION FREQUENCIES(Raise 68% / Call 22% / Fold 10% 频率条)/ SESSION(Hands 42 / Win Rate +8.3 BB)。H 键唤起 GTO 提示。', en: '6-Max table + 5 community cards + 6 player positions + bottom RAISE slider + Fold/Call/Raise/All-In 4 buttons. Right side: GTO Advisor — YOUR HAND / RECOMMENDATION (Action / Size / Equity / Confidence) / ACTION FREQUENCIES (Raise 68% / Call 22% / Fold 10% bars) / SESSION (Hands 42 / Win Rate +8.3 BB). Press H to invoke GTO hint.' },
      },
      {
        image: '/images/projects/gallery/pokergto-02-preflop-ak.png',
        alt: { zh: 'Poker GTO Trainer BTN 拿到 AK 起手', en: 'Poker GTO Trainer AK offsuit on BTN' },
        title: { zh: '实战瞬间①:BTN 拿到 AK,preflop 决策点', en: 'Live play ①: AK on BTN, preflop decision' },
        body: { zh: 'Hand #1 / BTN 位置拿到 AK offsuit,5 玩家剩余。UTG (BluffMaster $8,200) 已下 $25。GTO Advisor 给出 4 个动作建议(1/3=13 / 1/2=20 / 2/3=26 / 3/4=30 / Pot $40 / 1.2x $48),底部 Fold/Call($10)/Raise($20)/All-In 4 按钮。训练模式 Source 标识 "GTO solver"。', en: 'Hand #1 / BTN with AK offsuit, 5 players left. UTG (BluffMaster $8,200) put in $25. GTO Advisor shows 4 raise sizes (1/3=13 / 1/2=20 / 2/3=26 / 3/4=30 / Pot $40 / 1.2x $48), bottom Fold/Call($10)/Raise($20)/All-In. Training Mode source: GTO solver.' },
      },
      {
        image: '/images/projects/gallery/pokergto-03-flop-decision.png',
        alt: { zh: 'Poker GTO Trainer Flop 阶段决策', en: 'Poker GTO Trainer Flop decision' },
        title: { zh: '实战瞬间②:Flop A7K,TPTK 面对多人下注', en: 'Live play ②: Flop A7K, TPTK vs multi-way bet' },
        body: { zh: 'Hand #42 / BTN 持 AK / Flop 公共牌 A♥7♣K♦ / Pot $1,260。GTO Advisor 给出建议:Action=Raise $600,Equity 68.4%,Confidence=High,Action Frequencies 68% Raise / 22% Call / 10% Fold。HJ Nova $14,750 下 $1,800,CO Maverick $12,000 下 $2,500。Session: Hands 42 / Win Rate +8.3 BB — 长期正收益。', en: 'Hand #42 / BTN with AK / Flop A♥7♣K♦ / Pot $1,260. GTO Advisor: Action=Raise $600, Equity 68.4%, Confidence=High, Frequencies 68/22/10. HJ Nova $14,750 bets $1,800, CO Maverick $12,000 bets $2,500. Session: 42 hands, Win Rate +8.3 BB — long-term positive edge.' },
      },
    ],

    highlights: [
      { zh: 'TexasSolver C++ 集成 + Python fallback', en: 'TexasSolver C++ + Python fallback' },
      { zh: '4 维度漏失检测 (VPIP/PFR/AF/EV)', en: '4-dim leak detection' },
      { zh: 'PyQt6 客户端 + Rich 控制台双模式', en: 'PyQt6 + Rich dual mode' },
      { zh: '14 个程序化生成的音效（无外部资源）', en: '14 procedural SFX' },
      { zh: 'PyInstaller + NSIS 安装包流水线', en: 'PyInstaller + NSIS pipeline' },
    ],
  },
];

export const getProject = (id) => projects.find((p) => p.id === id);

// 排序：home 页 Trilogy 组件用 trilogyOrder，其他 WorkGrid 组件用 otherOrder
export const trilogyOrder = ['wda', 'opc', 'mediapilot'];
export const otherOrder = ['lumora', 'jobhunter', 'pokergto'];
