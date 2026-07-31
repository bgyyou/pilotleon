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

线上站点 <https://pilotleon.online> 由**自建 nginx** 提供服务，纯静态托管，没有 CI —— `git push` 只是备份代码，**不会触发上线**。

```bash
npm run deploy     # build + 上传 + 同步，一步到位
```

`scripts/deploy.sh` 做的事：本地 `vite build` → `tar` 流式传到服务器暂存目录 → 服务器端 `rsync -a --delete` 同步进站点根目录 → `curl` 校验入口状态码。

| 项 | 值 |
|---|---|
| 服务器 | `ubuntu@124.156.140.217`（免密 ssh，可用 `DEPLOY_HOST` 覆盖）|
| 站点根目录 | `/var/www/pilotleon`（`ubuntu:ubuntu`，无需 sudo）|
| 暂存目录 | `/home/ubuntu/pilotleon-dist` |
| nginx 配置 | `scripts/nginx-pilotleon.conf`（`/etc/nginx/sites-available/`）|

注意事项：

- **构建必须在本地做** —— 服务器上没有装 Node。
- `--delete` 会清掉上一版带 hash 的旧产物，站点根目录下不要手工放额外文件。
- `index.html` 设了 `Cache-Control: no-cache`，`/assets/` 长缓存 + 内容 hash，所以发版即时生效，不需要清缓存。
- HTTPS 证书由 Certbot 自动续期，部署流程不涉及。

### 域名

`pilotleon.online` / `www.pilotleon.online` A 记录指向 `124.156.140.217`，nginx 侧统一 301 到 https。

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
