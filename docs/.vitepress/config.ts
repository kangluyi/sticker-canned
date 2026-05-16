import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '表情罐头',
  description: '一个 uTools 表情包管理插件',
  lang: 'zh-CN',
  base: '/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/getting-started' },
      { text: '使用指南', link: '/guide/usage' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '使用指南', link: '/guide/usage' },
            { text: '常见问题', link: '/guide/faq' },
          ],
        },
      ],
    },

    search: {
      provider: 'local'
    },

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024 表情罐头'
    },


  }
})
