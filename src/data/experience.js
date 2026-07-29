/**
 * Experience timeline (按简历重写)
 * 顺序: 最新的在最上
 */
export const experience = [
  {
    period: { zh: '2026.05 — 至今', en: 'May 2026 — Present' },
    role: { zh: 'AI 产品经理 (独立)', en: 'AI Product Manager (Independent)' },
    company: { zh: 'WDA · Workflow Thief Arena', en: 'WDA · Workflow Thief Arena' },
    location: { zh: '深圳', en: 'Shenzhen' },
    bullets: {
      zh: [
        '产品定义:输入工作流描述,Agent 自动输出原始流程图、AI 优化方案、7 天 MVP 落地计划与 ROI 分析(含真实证据链)',
        'Agent 架构升级:从硬编码流水线升级为基于 LLM 自主选择工具调用的决策架构',
        '商业化落地:三层评分机制(规则 → 轻量模型 → 大模型)保障证据链质量,完成可部署 SaaS 闭环',
      ],
      en: [
        'Product definition: input a workflow description, Agent outputs raw flow diagram, AI-optimized plan, 7-day MVP roadmap, and ROI analysis with real evidence chain',
        'Agent architecture upgrade: from hard-coded pipeline to LLM-driven tool selection / decision-style architecture',
        'Commercialized: 3-tier scoring (rules → Haiku → Sonnet) ensures evidence quality, closing the deployable SaaS loop',
      ],
    },
  },
  {
    period: { zh: '2026.03 — 至今', en: 'Mar 2026 — Present' },
    role: { zh: 'AI 产品经理 (独立)', en: 'AI Product Manager (Independent)' },
    company: { zh: 'JobHunter · 企业级智能求职 Agent', en: 'JobHunter · Enterprise AI Recruiting Agent' },
    location: { zh: '深圳', en: 'Shenzhen' },
    bullets: {
      zh: [
        '产品设计:搭建多轮对话 Agent 交互流程,基于 PostgreSQL + pgvector 向量知识库沉淀 500+ 条 JD 数据,实现简历定向匹配',
        '多智能体编排:设计「对话管理 - 任务拆解 - RAG 检索 - 定向优化 - 结果校验」五段式 Agent 协作链路',
        '业务成果:上线企业付费使用,简历产出效率提升 70%,NPS +65',
      ],
      en: [
        'Product design: multi-turn dialog Agent on PostgreSQL + pgvector (500+ JD entries) for resume-JD targeted matching',
        'Multi-agent orchestration: 5-stage chain — dialog / task / RAG retrieval / targeted optimization / result validation',
        'Business outcome: live paid enterprise users, 70% faster resume output, NPS +65',
      ],
    },
  },
  {
    period: { zh: '2026.01 — 至今', en: 'Jan 2026 — Present' },
    role: { zh: 'AI 产品经理 (独立)', en: 'AI Product Manager (Independent)' },
    company: { zh: 'OPC · One Prompt Creates', en: 'OPC · One Prompt Creates' },
    location: { zh: '深圳', en: 'Shenzhen' },
    bullets: {
      zh: [
        '产品定义:用户输入一句话想法,多 Agent 系统(CEO/PM/FE/BE/Test/Ops)自动输出 PRD、前后端代码、Schema 与部署配置',
        '架构设计:六角色 Agent 协作链路,支持多租户隔离与异步生成',
        '业务成果:核心流程跑通,支持本地一键部署与商业化交付',
      ],
      en: [
        'Product definition: one prompt → 6-agent system (CEO/PM/FE/BE/Test/Ops) outputs PRD, code, schema, deploy config',
        'Architecture: 6-role Agent collaboration, multi-tenant isolation, async generation',
        'Business outcome: core pipeline working, one-click local deploy, commercial delivery ready',
      ],
    },
  },
  {
    period: { zh: '2025.12 — 2026.05', en: 'Dec 2025 — May 2026' },
    role: { zh: 'AI 产品负责人', en: 'AI Product Lead' },
    company: { zh: 'Fans Media', en: 'Fans Media' },
    location: { zh: '香港', en: 'Hong Kong' },
    bullets: {
      zh: [
        '端到端负责 MediaPilot 从 0 到 1 定义、迭代交付,输出 PRD 与 Roadmap,协调研发/设计/业务团队对齐排期',
        '基于 200+ 竞品数据分析输出产品优先级矩阵,推动核心 AI 生成功能落地',
        '产品上线后完成 3 轮迭代,团队内容产出效率提升 70%,服务数十家企业客户',
      ],
      en: [
        'End-to-end ownership of MediaPilot (0→1): PRD, Roadmap, and cross-functional alignment with eng/design/ops',
        'Prioritization matrix from 200+ competitor data points; drove core AI generation features to ship',
        '3 iteration cycles post-launch, 70% content production efficiency gain, serving dozens of enterprise clients',
      ],
    },
  },
  {
    period: { zh: '2024.07 — 2025.12', en: 'Jul 2024 — Dec 2025' },
    role: { zh: '产品运营和数据分析', en: 'Product Operations & Data Analytics' },
    company: { zh: 'Sun Life Hong Kong', en: 'Sun Life Hong Kong' },
    location: { zh: '香港', en: 'Hong Kong' },
    bullets: {
      zh: [
        '负责小红书渠道产品化运营与需求管理,输出 15 份数据分析报告,推动 3 次功能迭代',
        '主导 50+ 用户痛点调研,撰写标准化需求文档,协同产品/法务/合规推动青年储蓄险上线,实现营收 120 万港币',
        '将用户反馈转化为可落地需求,反哺数字化经营工具优化,用户留存显著提升',
      ],
      en: [
        'Xiaohongshu channel product operations + requirements, 15 data analysis reports, drove 3 feature iterations',
        'Led 50+ user pain-point research, wrote standardized PRDs, coordinated product/legal/compliance to ship a youth savings insurance — HKD 1.2M revenue',
        'Translated user feedback into shipped requirements, fed digital ops tooling, measurable retention lift',
      ],
    },
  },
  {
    period: { zh: '2022.02 — 2023.11', en: 'Feb 2022 — Nov 2023' },
    role: { zh: '创始人', en: 'Founder' },
    company: { zh: 'Inside No.7', en: 'Inside No.7' },
    location: { zh: '爱丁堡', en: 'Edinburgh' },
    bullets: {
      zh: [
        '全权负责会员产品与运营活动全流程,对接 10+ 外部合作伙伴,交付 20 场付费活动,整体完售率 90%',
        '通过社群分层、活动形式迭代,搭建银/金/黑卡 VIP 会员体系,会员贡献 70% GMV,复购率提升 30%',
      ],
      en: [
        'Owned member product + event ops end-to-end, 10+ external partners, 20 paid events, 90% sell-through',
        'Built silver/gold/black VIP tier system via community segmentation, 70% GMV from members, 30% repeat-purchase lift',
      ],
    },
  },
  {
    period: { zh: '2017.09 — 2020.07', en: 'Sep 2017 — Jul 2020' },
    role: { zh: '英语语言学学士', en: 'BA English Language & Linguistics' },
    company: { zh: '爱丁堡大学 (QS 16)', en: 'The University of Edinburgh (QS 16)' },
    location: { zh: '爱丁堡', en: 'Edinburgh' },
    bullets: {
      zh: [
        '英文读写流利,可独立阅读海外 AI 论文、对接海外 SDK/客户',
        '语言学背景擅长 Prompt 工程、对话交互设计、大模型输出调优,差异化于理工科产品',
      ],
      en: [
        'Fluent English reader — can consume AI papers and talk to overseas SDKs / customers directly',
        'Linguistics background → strong prompt engineering, dialog interaction design, and LLM output tuning, differentiated from CS peers',
      ],
    },
  },
];
