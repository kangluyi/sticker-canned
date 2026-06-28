import { defineConfig, type DefaultTheme } from 'vitepress'
import type { GreenCandyThemeConfig } from 'greencandy'

type ThemeConfig = DefaultTheme.Config & GreenCandyThemeConfig

export default defineConfig({
  title: '表情罐头',
  description: '一个 uTools 表情包管理插件',
  lang: 'zh-CN',
  base: '/',
  appearance: 'dark',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '使用指南', link: '/guide' },
    ],
    socialLinks: [
      { 
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>'
        },
        link: 'https://www.u-tools.cn/plugins/detail/%E8%A1%A8%E6%83%85%E7%BD%90%E5%A4%B4/'
      }
    ],

    outline: {
      level: [2, 4],
      label: 'On this page'
    },

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '开始', link: '/guide/'},
            {
              text: '存储配置',
              items: [
                { text: '存储服务', link: '/guide/storage/' },
                { text: 'imgBB', link: '/guide/storage/imgbb' },
                { text: '图仓', link: '/guide/storage/tucang' },
              ]
            }
          ]
        }
      ],
    },

    footer: {
      message: '<a href="https://beian.miit.gov.cn/">鲁ICP备2026008616号-2</a>',
      copyright: 'Copyright © 2026 <a href="https://www.moruteaven.com/">抹露茶柒</a>'
    },

    colors: {
      primary: '#ffffff',
      primaryDark: '#e0e0e0'
    },
    radius: 0.5,
    shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
    busuanzi: {
      enable: true,
      rootDomain: 'busuanzi.ibruce.info',
      sitePv: true,
      siteUv: true,
      pagePv: true
    },
    externalRedirect: {
      enable: true,
      countdown: 5,
      skipDomains: []
    },
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },
    download: {
      title: '客户端下载',
      clients: [
        {
          type: 'uTools 插件',
          icon: 'UT',
          variants: [
            {
              name: 'uTools 插件包',
              system: 'uTools 6.0+',
              links: [{ text: '下载 upx', link: '/downloads/app-utools.upx', type: 'primary' }]
            }
          ]
        }
      ]
    },
    changelog: {
      title: '更新日志',
      description: '表情罐头各客户端的更新记录。',
      clients: [
        {
          type: 'uTools 插件',
          icon: 'UT',
          badge: '插件',
          latestVersion: '1.0.0',
          lastUpdated: '2026-06-25',
          entries: [
            {
              version: '1.0.0',
              date: '2026-06-25',
              title: '首个公开版本',
              changes: ['提供 uTools 插件版本。']
            }
          ]
        }
      ]
    },
  } as ThemeConfig
})
