# 开发规范

## 近期更新

### 2026-05-18
- 实现了右侧栏四级菜单嵌套结构
- 优化了文档导航的组织方式，将存储配置按层级分类
- 在 config.ts 中配置了包含 imgBB 和图仓的嵌套菜单

## 开发规范

### 代码规范
- 前端开发不要使用 emoji
- 使用 MIT 或 Apache 开源协议的符号库
- 不要使用 GPL 协议的库

### 文件管理
- 进行比较大的更改时，记得更新本 AGENTS.md 文件

## 技术栈
- VitePress 1.3.4
- Vue 3
- TypeScript

## 项目结构
```
docs/
  .vitepress/       # VitePress 配置
    config.ts      # 主配置文件
    theme/         # 主题配置
  guide/           # 用户指南文档
  public/          # 静态资源
```
