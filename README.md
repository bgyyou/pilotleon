# PilotLeon

郑浩文 (Leon Zheng) 的个人作品集网站 —— AI 产品经理 · 多 Agent 系统 · 企业 SaaS。

## 项目概览

- **WDA** — 企业级工作流挖掘 Agent SaaS（决策式 Agent 架构 + 三层证据链评分）
- **OPC** — One Prompt Creates · 一句话生成全栈应用的多 Agent 协作系统
- **MediaPilot** — 新媒体自动化 Agent 系统（数据采集 + AI 生成 + 内容分发）
- **Lumora** — 思念具象化 Agent · Flutter 桌面应用 · 情感 AI
- **JobHunter** — 企业级智能求职 Agent · 多轮对话 + pgvector
- **Poker GTO Trainer** — 德州扑克 GTO 训练工具 · PyQt6 桌面客户端

## 技术栈

- React 19.2 + React Router 7（v2 SPA 架构）
- Vite 5.4 构建
- framer-motion（动效） + Lenis（smooth scroll）
- i18next（中/英双语）
- CSS Modules + Design Tokens（无 Tailwind）

## 本地开发

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # 产物 → dist/
npm run preview    # 预览 dist
```

## 部署

### 腾讯 EdgeOne Pages

控制台：<https://console.tencentcloud.com/edgeone/makers/new?repo=pilotleon&namespace=bgyyou&from=within>

构建配置：

| 项 | 值 |
|---|---|
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 20+ |
| Install command | `npm install` |

> 仓库已配置 `base: '/'`（`vite.config.js`），无需特殊 base path 调整。

### 域名

EdgeOne Pages 提供免费子域名 `pilotleon.edgeone.app`；如需自定义域名（如 `pilotleon.com`），在控制台 → 域名管理 添加 CNAME 解析到 EdgeOne 分配的接入域名即可。

## 目录结构

```
src/
├── pages/                  # 路由级页面 (Home, Project)
├── components/
│   ├── home/               # 首页模块 (Hero, Trilogy, WorkGrid, About, ...)
│   ├── project/            # 项目详情模块 (CodeBlock, ...)
│   ├── layout/             # 布局 (TopNav, Footer, ...)
│   └── common/             # 通用 (Logo, Slogan, ...)
├── data/                   # 静态数据 (projects.js, experience.js, profile.js, ...)
├── i18n/                   # 中/英双语 locales
├── styles/                 # 全局 CSS 变量 + 重置
└── hooks/                  # 自定义 hooks
public/
├── images/                 # 静态资源 (hero bg, project covers, profile)
└── models/                 # 3D 模型 (gitignored)
```

## 仓库

- GitHub: <https://github.com/bgyyou/pilotleon>
- Branch: `main`
- Author: Leon Zheng <bgyyou99@163.com>

## License

Private · All rights reserved.
