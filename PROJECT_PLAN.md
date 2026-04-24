# PilotLeon 项目规划文档

## 项目概述

**项目名称**：PilotLeon  
**项目类型**：个人作品集网站（公开访问）  
**项目目标**：展示AI应用能力，投递AI产品经理/应用工程师岗位  
**部署目标**：Vercel（公开访问）

---

## 设计要求

### 1. 视觉风格
- **整体风格**：极简黑白
- **背景交替**：Hero(黑) → About(白) → Projects(黑) → Contact(白)
- **主字体**：San Francisco（系统字体）
- **配色**：纯黑白，无额外装饰色

### 2. 页面结构（单页应用，4个板块）

```
┌─────────────────────────────────────┐
│           [顶部Logo]              │ ← 所有页面显示
├─────────────────────────────────────┤
│                                     │
│   [Hero板块 - 水晶球主页]        │ ← 黑色背景
│         （粒子球+波纹）              │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   [About Me - 自我介绍]           │ ← 白色背景
│         （照片+简介+时间轴）          │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   [Project Sets - 作品展示]        │ ← 黑色背景
│         （MediaPilot+InsuranceHub）     │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   [Contact Me - 联系方式]          │ ← 白色背景
│         （邮箱+电话+简历下载）         │
│                                     │
└─────────────────────────────────────┘
```

### 3. 导航系统

**左侧悬浮导航**
- 默认状态：左侧边缘一条细线/小图标
- 鼠标靠近：导航面板滑出
- 鼠标移开：3秒后自动隐藏

**导航结构**
```
Home
About Me
Project Sets ↓         ← 下拉展开
  ├── MediaPilot
  └── InsuranceHub
Contact Me
```

**导航交互**
- 点击主标签：直接跳转到对应板块（淡入淡出，不滑过中间页）
- 点击子标签（MediaPilot/InsuranceHub）：进入项目详情页
- Project Sets展开：下拉展示子标签

### 4. Hero板块（水晶球主页）

**布局**
```
┌─────────────────────────────────────┐
│           PilotLeon               │ ← 顶部Logo
│                                     │
│         Slogan（球体上方）          │
│   "在AI时代，营销自己是             │
│    最重要的能力"                   │
│   "In the age of AI,             │
│    Marketing yourself is             │
│    the most important skill"        │
│                                     │[logo]
│        [粒子水晶球]                │ ← 占据中心
│        （可拖动旋转）               │
│        （点击波纹）                 │
│                                     │
└─────────────────────────────────────┘
```

**水晶球效果**
- 粒子组成球体
- 拖动：球体旋转（3D效果）
- 点击：水波纹从点击点扩散
- 粒子有呼吸/脉动效果
- 只在Hero页面显示，其他页面消失

**Slogan**
- 位置：球体上方
- 中英文上下排列
- 打字机效果逐字显示

### 5. Logo组件

**要求**
- 名称：PilotLeon
- 位置：顶部居中
- 颜色：根据背景色自动切换
  - 黑色背景 → 白色字体
  - 白色背景 → 黑色字体
- 切换时：渐入渐出效果

### 6. Project Sets板块

**卡片布局**
```
┌──────────────┬──────────────┐
│              │              │
│ [MediaPilot] │[InsuranceHub]│
│    卡片       │    卡片       │
│              │              │
└──────────────┴──────────────┘
```

**卡片交互**
- 默认：小卡片 + 标题
- 悬浮：弹出大图 + 简介（跟随卡片）
- 点击：进入项目详情页（淡入）

### 7. 项目详情页

**要求**
- 左侧导航：保留
- Logo：保留
- 顶部：返回按钮（极简箭头，颜色随背景变化）
- 内容：左侧信息 + 右侧交互Demo
- 返回：点击返回按钮回到Project Sets
- 体验：从任何页面点击导航子标签，直接淡入详情页，不滑过中间页

### 8. 翻页动画

**触发方式**
- 点击导航按钮
- 滚轮滚动
- 键盘方向键

**动画效果**
- 旧板块：向上淡出 + 轻微缩放
- 新板块：从下淡入 + 放大
- 背景：黑白平滑过渡
- 时长：600-800ms

### 9. About Me板块

**内容**
- 个人照片
- 一句话简介
- 时间轴（教育/工作经历）

### 10. Contact Me板块

**内容**
- 感谢文字
- 邮件链接
- 电话
- 简历下载按钮

---

## 技术栈

```
前端框架：React 19 + Vite
动画库：Framer Motion
3D效果：Three.js（粒子水晶球）
样式方案：CSS Modules + CSS Variables
路由管理：单页应用（状态切换，非React Router）
部署平台：Vercel
包管理：npm
```

---

## 完整文件结构

```
PilotLeon/
├
├── src/
│   │
│   ├── App.jsx                          # 主入口，管理页面状态和路由
│   ├── index.jsx                        # React入口
│   ├── main.jsx                         # Vite入口
│   │
│   ├── data/                            # 所有数据集中管理
│   │   ├── config.js                    # 全局配置（颜色、字体、导航项）
│   │   ├── projects.js                  # 项目数据（MediaPilot、InsuranceHub）
│   │   ├── skills.js                   # 技能数据
│   │   └── contact.js                  # 联系方式数据
│   │
│   ├── hooks/                           # 可复用逻辑
│   │   ├── useSectionScroll.js          # 滚动翻页逻辑
│   │   ├── useTheme.js                  # 主题色切换逻辑
│   │   ├── useNavigation.js              # 导航交互逻辑
│   │   └── useRipple.js                # 水波纹效果逻辑
│   │
│   ├── components/                       # UI组件（纯展示）
│   │   │
│   │   ├── common/                      # 通用组件
│   │   │   ├── Logo.jsx                # Logo组件（PilotLeon）
│   │   │   ├── Slogan.jsx              # Slogan组件
│   │   │   └── BackButton.jsx           # 返回箭头
│   │   │
│   │   ├── navigation/                  # 导航相关
│   │   │   ├── Navigation.jsx           # 导航容器
│   │   │   ├── NavItem.jsx              # 单个导航项
│   │   │   ├── SubMenu.jsx              # Project Sets子菜单
│   │   │   └── NavDropdown.jsx           # 下拉菜单
│   │   │
│   │   ├── hero/                        # Hero板块组件
│   │   │   ├── HeroSection.jsx          # Hero容器
│   │   │   ├── ParticleBall.jsx          # 粒子水晶球
│   │   │   └── RippleEffect.jsx          # 水波纹效果
│   │   │
│   │   ├── about/                       # About板块组件
│   │   │   ├── AboutSection.jsx          # About容器
│   │   │   ├── Profile.jsx                # 个人照片和介绍
│   │   │   └── Timeline.jsx              # 时间轴
│   │   │
│   │   ├── projects/                    # Projects板块组件
│   │   │   ├── ProjectsSection.jsx       # Projects容器
│   │   │   ├── ProjectCard.jsx           # 项目卡片
│   │   │   ├── ProjectDetail.jsx         # 项目详情页
│   │   │   └── ProjectDemo.jsx           # 交互Demo区域
│   │   │
│   │   ├── contact/                     # Contact板块组件
│   │   │   ├── ContactSection.jsx        # Contact容器
│   │   │   └── ContactLink.jsx          # 联系链接
│   │   │
│   │   └── layout/                      # 布局组件
│   │       ├── PageWrapper.jsx           # 页面容器（处理过渡）
│   │       └── SectionWrapper.jsx        # 板块容器
│   │
│   ├── styles/                          # 样式文件
│   │   ├── global.css                  # 全局样式
│   │   ├── variables.css               # CSS变量（颜色、间距、字体）
│   │   ├── animations.css              # 动画定义
│   │   └── reset.css                 # CSS重置
│   │
│   └── utils/                           # 工具函数
│       ├── scrollUtils.js              # 滚动相关工具
│       ├── colorUtils.js              # 颜色工具
│       └── animationUtils.js           # 动画工具
│
├── public/                             # 静态资源
│   └── images/
│       ├── profile.jpg
│       ├── projects/
│       │   ├── mediapilot-preview.jpg
│       │   ├── insurancehub-preview.jpg
│       │   ├── mediapilot-detail.jpg
│       │   └── insurancehub-detail.jpg
│       └── icons/
│
├── index.html                          # HTML入口
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 开发阶段分解

### 阶段 0：项目初始化 ✅
- [x] 创建项目目录结构
- [x] 初始化 Vite + React 项目
- [x] 安装依赖
- [x] 配置 Vite
- [x] 创建基础文件结构（空文件占位）
- [x] 配置 .gitignore

### 阶段 1：基础配置 ✅
- [x] 创建 CSS 变量
- [x] 创建全局样式
- [x] 创建数据配置文件
- [x] 配置字体（San Francisco）

### 阘段 2：通用组件 ✅
- [x] 实现 Logo 组件
- [x] 实现 Slogan 组件
- [x] 实现 BackButton 组件

### 阶段 3：导航系统 ✅
- [x] 实现 NavItem 组件
- [x] 实现 SubMenu 组件
- [x] 实现 NavDropdown 组件
- [x] 实现 Navigation 容器组件
- [x] 实现 useNavigation hook
- [x] 导航悬停动画
- [x] 导航点击交互

### 阶段 4：Hero板块 ✅
- [x] 实现 RippleEffect 组件
- [x] 实现 ParticleBall 组件（Three.js粒子球）
- [x] 实现 HeroSection 容器
- [x] 水晶球拖动旋转效果
- [x] 水波纹点击效果
- [x] 粒子呼吸动画

### 阶段 5：About板块 ✅
- [x] 实现 Timeline 组件
- [x] 实现 Profile 组件
- [x] 实现 AboutSection 容器
- [x] 时间轴动画（滚动淡入）

### 阶段 6：Projects板块 ✅
- [x] 实现 ProjectCard 组件
- [x] 实现 ProjectDemo 组件（交互Demo）
- [x] 实现 ProjectDetail 组件
- [x] 实现 ProjectsSection 容器
- [x] 卡片悬浮效果
- [x] 项目详情页切换

### 阶段 7：Contact板块 ✅
- [x] 实现 ContactLink 组件
- [x] 实现 ContactSection 容器

### 阶段 8：页面状态管理 ✅
- [x] 实现 App 主入口
- [x] 实现 useSectionScroll hook
- [x] 实现 useTheme hook
- [x] 页面切换逻辑
- [x] 翻页动画（Framer Motion）

### 阶段 9：动画优化
- [ ] 打字机效果（Slogan）
- [ ] 翻页过渡动画
- [ ] 滚动淡入效果
- [ ] Logo颜色渐变

### 阶段 10：响应式设计
- [ ] 移动端适配
- [ ] 平板适配
- [ ] 导航移动端优化

### 阶段 11：内容填充
- [ ] 添加项目数据
- [ ] 添加个人介绍
- [ ] 添加技能数据
- [ ] 添加联系方式

### 阶段 12：图片准备
- [ ] 准备个人照片
- [ ] 准备项目预览图
- [ ] 准备项目详情图
- [ ] 图片优化压缩

### 阶段 13：测试和调试
- [ ] 功能测试
- [ ] 动画性能测试
- [ ] 跨浏览器测试
- [ ] Bug修复

### 阶段 14：部署准备
- [ ] SEO优化（meta标签）
- [ ] 性能优化
- [ ] 配置 Vercel
- [ ] 自定义域名（如需要）

### 阶段 15：最终发布
- [ ] 部署到 Vercel
- [ ] 验证线上功能
- [ ] 性能监控设置
- [ ] 项目文档更新

---

## 关键功能清单

### 视觉效果
- [x] 极简黑白风格
- [x] 粒子水晶球（Three.js）
- [x] 水波纹效果
- [x] 翻页淡入淡出动画
- [x] 打字机效果
- [x] Logo颜色自适应

### 交互功能
- [x] 水晶球拖动旋转
- [x] 导航悬停展开
- [x] 下拉子菜单
- [x] 直接跳转页面
- [x] 返回按钮
- [x] 项目卡片悬浮预览

### 页面内容
- [x] Hero：Slogan + 水晶球
- [x] About：个人介绍 + 时间轴
- [x] Projects：MediaPilot + InsuranceHub
- [x] Project Detail：交互Demo
- [x] Contact：联系方式 + 简历下载

---

## 模块化原则

1. **单一职责**：每个文件只做一件事
2. **数据驱动**：内容改数据文件，不改组件
3. **样式分离**：颜色、动画单独管理
4. **逻辑复用**：hooks放共享逻辑
5. **可维护性**：改一个文件不影响其他

---

## 重要提醒

### 维护指南
- 改Logo → `components/common/Logo.jsx`
- 改Slogan → `components/common/Slogan.jsx`
- 改导航项 → `data/config.js`
- 改项目数据 → `data/projects.js`
- 改水晶球效果 → `components/hero/ParticleBall.jsx`
- 改翻页速度 → `styles/animations.css`

### 开发顺序建议
建议按阶段0→15顺序执行，每阶段完成后验证再进入下一阶段。

---

## 项目创建日期

创建时间：2026-04-21
最后更新：2026-04-21
