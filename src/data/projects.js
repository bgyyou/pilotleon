/**
 * PilotLeon v2.0 — 6 Projects Data
 *
 * 排序: 三部曲 (WDA → OPC → MediaPilot) + 探索项目 (Lumora, JobHunter, PokerGTO)
 * 每个项目都有 problem / solution / architecture / code / metrics
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
    repo: 'https://github.com/haowenzheng-art/searchengine',

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
    repo: 'https://github.com/haowenzheng-art/opc',

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
    repo: 'https://github.com/haowenzheng-art/MediaPilot',

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
      { value: '5', label: { zh: '热点源', en: 'Trending sources' } },
      { value: '3×3', label: { zh: '平台×风格矩阵', en: 'platform × style' } },
      { value: '70%', label: { zh: '内容时间下降', en: 'time saved' } },
      { value: '∞', label: { zh: '已上线运营', en: 'Live & running' } },
    ],

    highlights: [
      { zh: '全网五端热点聚合 + AI 总结', en: '5-source trending aggregation' },
      { zh: '话题订阅 + 每日 08:00 自动推送', en: 'Daily subscription push' },
      { zh: 'Whisper 本地音视频转写', en: 'Local Whisper transcription' },
      { zh: 'AI 产品导师：兜底回答功能问题', en: 'AI tutor for product Q&A' },
      { zh: '限流 + Sentry + 请求链路追踪', en: 'Rate limit + Sentry + tracing' },
    ],
  },

  // ============================================
  //  EXPLORATION · Lumora
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
    status: { zh: '探索项目 · v2.2', en: 'Exploration · v2.2' },
    color: '#FF6B9D',
    repo: 'https://github.com/haowenzheng-art/Lumora',

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

    highlights: [
      { zh: '产品宪法: "希望你不再需要我"', en: 'Product constitution' },
      { zh: '三层记忆系统（profile/events/messages）', en: '3-tier memory system' },
      { zh: '图层分解眨眼 + 双 player 无缝视频', en: 'Layer-decomposed blink + seamless video' },
      { zh: '火山豆包声音克隆 + 手动触发仪式感', en: 'Voice clone + manual trigger ritual' },
      { zh: '危机拦截 + 模糊语境关切性追问', en: 'Crisis intervention' },
    ],
  },

  // ============================================
  //  EXPLORATION · Job Hunter
  // ============================================
  {
    id: 'jobhunter',
    name: { zh: 'Job Hunter · 本地 AI 求职闭环', en: 'Job Hunter · Local AI Job Loop' },
    tagline: {
      zh: '简历解析 + JD 抓取 + 匹配评分 + RAG 检索 + Cover Letter，零云依赖。',
      en: 'Resume parse + JD scrape + match score + RAG + cover letter, zero cloud dep.',
    },
    cover: '/projects/jobhunter-cover.png',
    coverGradient: 'linear-gradient(135deg, #4FC3F7 0%, #2196F3 50%, #1565C0 100%)',
    tags: ['Streamlit', 'RAG', 'PyInstaller', 'Local-first'],
    role: 'Sole PM + Engineer',
    year: '2024 — 2025',
    status: { zh: 'v2.1 · PyInstaller 打包', en: 'v2.1 · PyInstaller bundled' },
    color: '#4FC3F7',
    repo: 'https://github.com/haowenzheng-agent/job-hunter',

    problem: {
      zh: '求职是个链路断裂的事 — 简历在 Notion，JD 在 Boss，匹配靠肉眼，Cover Letter 又要重新写。**需要一款本地工具，把整条链路打通，零云依赖**。',
      en: "Job hunting is a broken pipeline — resume on Notion, JD on Boss, matching by eye, cover letter rewritten from scratch. **Need a local tool that closes the loop, zero cloud dependency**.",
    },
    solution: {
      zh: 'Streamlit 写的本地 app。PDF/MD 简历 → LLM 结构化抽取 → JD 来源支持单条/批量/URL 抓取/站点爬虫（Boss、JobsDB、猎聘）→ 匹配评分 + 缺口清单 → 段落级改写建议 → Cover Letter 生成。**PyInstaller 打成 8.6MB exe**，双击即用。',
      en: "Streamlit local app. PDF/MD resume → LLM structured extract → JD sources (single/batch/URL/scraper for Boss, JobsDB, Liepin) → match score + gap analysis → paragraph-level rewrite → cover letter. **PyInstaller bundled to 8.6MB exe**, double-click to run.",
    },
    architecture: {
      zh: 'SQLite 默认 + PostgreSQL+pgvector 进阶（**BGE-small-zh 512 维，pgvector cosine + chunk_type 加权**）。爬虫支持站点登录态失效时打印明确"请重跑 login_xxx.py"提示，不静默失败。loguru 20MB/7 天日志轮转。',
      en: 'SQLite default + PostgreSQL+pgvector advanced (**BGE-small-zh 512d, pgvector cosine + chunk_type weighted**). Scrapers print explicit "re-run login_xxx.py" prompts on session expiry, no silent failure. loguru 20MB/7d log rotation.',
    },
    tech: [
      'Python 3.11', 'Streamlit', 'BGE-small-zh', 'pgvector', 'SQLite/PostgreSQL',
      'Playwright', 'loguru', 'PyInstaller', 'pre-commit (secrets guard)',
    ],
    metrics: [
      { value: '35/35', label: { zh: '测试通过', en: 'Tests passing' } },
      { value: '60%', label: { zh: '核心模块覆盖率', en: 'Core coverage' } },
      { value: '8.6MB', label: { zh: 'exe 体积', en: 'exe size' } },
      { value: '3', label: { zh: '爬虫站点', en: 'scraper sites' } },
    ],

    highlights: [
      { zh: '零云依赖，所有数据存本机', en: 'Zero cloud, local-first' },
      { zh: 'RAG 检索：pgvector cosine + chunk_type 加权', en: 'RAG with weighted chunk types' },
      { zh: '8.6MB PyInstaller exe，双击即用', en: '8.6MB PyInstaller exe' },
      { zh: 'pre-commit 防 LLM key 泄露钩子', en: 'pre-commit secrets guard' },
      { zh: 'Internal Beta 模式：企业 Key 内置', en: 'Internal beta mode' },
    ],
  },

  // ============================================
  //  EXPLORATION · Poker GTO Trainer
  // ============================================
  {
    id: 'pokergto',
    name: { zh: 'Poker GTO Trainer', en: 'Poker GTO Trainer' },
    tagline: {
      zh: '开源德州扑克 GTO 训练工具：实时策略提示 + 漏失检测 + PyQt6 客户端。',
      en: 'Open-source Texas Hold\'em GTO trainer. Real-time strategy hints + leak detector.',
    },
    cover: '/projects/pokergto-cover.png',
    coverGradient: 'linear-gradient(135deg, #26C485 0%, #0F8B5C 50%, #054E32 100%)',
    tags: ['PyQt6', 'TexasSolver', 'SQLite', 'Open Source'],
    role: 'Sole PM + Engineer',
    year: '2024',
    status: { zh: '开源 · v1.0 · GitHub Release', en: 'Open source · v1.0 · GitHub release' },
    color: '#26C485',
    repo: 'https://github.com/haowenzheng-art/poker-gto-trainer',

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

export const trilogyOrder = ['wda', 'opc', 'mediapilot'];
export const otherOrder = ['lumora', 'jobhunter', 'pokergto'];
