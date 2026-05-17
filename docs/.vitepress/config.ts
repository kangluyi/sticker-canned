import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '表情罐头',
  description: '一个 uTools 表情包管理插件',
  lang: 'zh-CN',
  base: '/',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/getting-started' },
      { text: '使用指南', link: '/guide/usage' },
    ],
    socialLinks: [
      { 
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>'
        },
        link: 'https://www.u-tools.cn/plugins/detail/%E8%A1%A8%E6%83%85%E7%BD%90%E5%A4%B4/'
      }
    ],

    search: {
      provider: 'local'
    },

    sidebar: {
      '/guide/': [
        {
          text: "指南",
          items: [
            { text: "开始", link: "/guide/"},
            { text: "存储配置", link: "/guide/storage"},
            { text: "imgBB", link: "/guide/storage/imgbb"},
            { text: "图仓", link: "/guide/storage/tucang"},
          ]
        }
      ],
    },

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024 表情罐头'
    },

  }
})
