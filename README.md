<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 黄药师AI-术语大全

一个基于 React + Vite 构建的 AI 术语知识库项目，用于集中展示常见 AI 概念、术语解释与相关内容，方便学习、检索和内部分享。

## 项目特点

- 基于 `React 19` 与 `Vite` 构建，启动和构建速度快
- 支持术语分类浏览与关键词搜索
- 前端界面简洁，适合做内部知识库或演示项目
- 支持 Docker 镜像化部署，可直接运行在 `8082` 端口
- 不依赖 `nginx`，可直接用轻量静态服务启动

## 技术栈

- React
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lucide React

## 本地开发

### 环境要求

- Node.js 20 及以上
- npm

### 安装依赖

```bash
npm install
```

### 配置环境变量

在项目根目录创建 `.env.local` 文件，并配置：

```env
GEMINI_API_KEY=你的_Gemini_API_Key
```

项目中已提供示例文件 [`.env.example`](./.env.example) 可供参考。

### 启动开发环境

```bash
npm run dev
```

默认启动地址：

```text
http://localhost:3000
```

## 生产构建

```bash
npm run build
```

构建完成后会生成 `dist` 目录。

## Docker 部署

本项目支持构建为 Docker 镜像，并直接通过 `8082` 端口提供服务，无需额外配置 `nginx`。

### 构建镜像

```bash
docker build -t harbor.tsingyun.net/platform/ai-terminology-encyclopedia:1.0 .
```

### 启动容器

```bash
docker run -d \
  --name ai-terminology-encyclopedia \
  --restart unless-stopped \
  -p 8082:8082 \
  harbor.tsingyun.net/platform/ai-terminology-encyclopedia:1.0
```

启动后访问：

```text
http://服务器IP:8082
```

## Harbor 镜像地址

当前镜像仓库地址：

```text
harbor.tsingyun.net/platform/ai-terminology-encyclopedia:1.0
```

## 注意事项

- `.env`、`.env.local` 等环境变量文件不要提交到仓库
- 当前项目中的 `GEMINI_API_KEY` 设计为前端构建时注入，若用于公网环境，需要特别注意密钥暴露风险
- 如果需要更安全的线上部署方式，建议改造成后端代理调用模型接口

## 后续可优化方向

- 增加术语详情页或路由结构
- 支持术语标签、收藏和分类筛选
- 接入后端服务，避免前端直接暴露模型密钥
- 补充自动化部署和 CI/CD 配置
