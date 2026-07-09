/**
 * Tech stack data — grouped by category
 */

export const stack = [
  {
    id: 'ai',
    items: [
      { name: 'Anthropic SDK', level: 95, note: 'tool use / prompt caching / streaming' },
      { name: 'OpenAI / 兼容协议', level: 90, note: 'Agnes / 火山方舟 / OpenRouter' },
      { name: 'Claude Code / Cursor', level: 95, note: '主力 AI coding 工具' },
      { name: 'BGE / Embedding', level: 80, note: 'RAG / 语义检索' },
      { name: 'Whisper', level: 85, note: '本地音视频转写' },
    ],
  },
  {
    id: 'frontend',
    items: [
      { name: 'React 19', level: 92 },
      { name: 'Next.js 16', level: 85 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 80 },
      { name: 'shadcn/ui', level: 88 },
      { name: 'Vite', level: 90 },
      { name: 'Zustand / TanStack Query', level: 80 },
    ],
  },
  {
    id: 'backend',
    items: [
      { name: 'Python 3.11+', level: 90 },
      { name: 'FastAPI', level: 88 },
      { name: 'SQLAlchemy 2.0 async', level: 80 },
      { name: 'Celery / ARQ', level: 78 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Redis', level: 78 },
      { name: 'Node.js', level: 70 },
    ],
  },
  {
    id: 'infra',
    items: [
      { name: 'Docker Compose', level: 85 },
      { name: 'Alembic', level: 78 },
      { name: 'Sentry', level: 80 },
      { name: 'Playwright', level: 78 },
      { name: 'BeautifulSoup', level: 75 },
      { name: 'PyQt6 / Flutter', level: 70 },
    ],
  },
  {
    id: 'tools',
    items: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Vercel / 阿里云', level: 80 },
      { name: 'Figma', level: 70 },
      { name: 'Notion / Obsidian', level: 85 },
      { name: 'Linear / Trello', level: 80 },
    ],
  },
];
