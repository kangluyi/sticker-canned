# 表情罐头 - 文档站

这是表情罐头 for uTools 的官方文档站点，使用 VitePress 构建。

## 特点

- 🎨 **黑白配色** - 简洁优雅的视觉设计
- 📱 **响应式布局** - 完美适配各种设备
- ⚡ **快速加载** - 基于 VitePress 的极致性能
- 🌙 **暗色模式** - 自动适配系统主题

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 部署到 Vercel

1. 将代码推送到 GitHub 仓库
2. 在 Vercel 中导入该仓库
3. Vercel 会自动识别并部署

## 项目结构

```
├── docs/
│   ├── .vitepress/
│   │   ├── components/
│   │   │   └── Home.vue       # 自定义首页组件
│   │   ├── theme/
│   │   │   ├── index.ts       # 主题配置
│   │   │   └── custom.css     # 自定义样式
│   │   └── config.ts          # VitePress 配置
│   ├── guide/
│   │   ├── getting-started.md
│   │   ├── usage.md
│   │   └── faq.md
│   └── index.md               # 首页
├── vercel.json                # Vercel 部署配置
└── package.json
```

## 自定义首页

首页使用自定义 Vue 组件 `Home.vue`，具有以下特点：

- 黑白配色设计
- 流畅的加载动画
- 响应式布局
- 暗色模式支持
- 特性展示卡片

## License

MIT
