<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isLoaded = ref(false)
const isVisible = ref(false)
const featuresRef = ref<HTMLElement | null>(null)

let loadTimer: number | undefined
let observer: IntersectionObserver | null = null

onMounted(() => {
  loadTimer = window.setTimeout(() => {
    isLoaded.value = true
  }, 100)

  if (!featuresRef.value) return

  if (!('IntersectionObserver' in window)) {
    isVisible.value = true
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer?.disconnect()
        }
      })
    },
    { threshold: 0.12 }
  )

  observer.observe(featuresRef.value)
})

onBeforeUnmount(() => {
  if (loadTimer) {
    window.clearTimeout(loadTimer)
  }

  observer?.disconnect()
})

const heroHighlights = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v4"></path>
      <path d="m16.2 7.8 2.9-2.9"></path>
      <path d="M18 12h4"></path>
      <path d="m16.2 16.2 2.9 2.9"></path>
      <path d="M12 18v4"></path>
      <path d="m4.9 19.1 2.9-2.9"></path>
      <path d="M2 12h4"></path>
      <path d="m4.9 4.9 2.9 2.9"></path>
    </svg>`,
    label: '一键呼出'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    </svg>`,
    label: '本地优先'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
      <path d="m9 12 2 2 4-4"></path>
    </svg>`,
    label: '隐私可靠'
  }
]

const previewTags = ['收藏', '摸鱼', '开会', '猫咪', '回复']

const previewItems = [
  { title: '收到', desc: '确认回复' },
  { title: '稍等', desc: '缓冲一下' },
  { title: '在忙', desc: '快速说明' },
  { title: '赞同', desc: '顺手表达' },
  { title: '加油', desc: '鼓励一下' },
  { title: '下班', desc: '今日收工' }
]

const features = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </svg>`,
    title: '快速搜索',
    description: '输入关键词即可定位表情，减少翻找文件夹和聊天收藏的时间。'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>`,
    title: '收藏管理',
    description: '将高频表情沉淀为收藏，常用内容可以更快被呼出和发送。'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
    </svg>`,
    title: '本地/云端混合存储',
    description: '兼顾本地隐私与云端同步，按自己的使用方式管理资源。'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
      <line x1="7" y1="7" x2="7.01" y2="7"></line>
    </svg>`,
    title: '多标签搜索',
    description: '通过多维标签筛选表情，将复杂的表情库整理成清晰索引。'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      <circle cx="11" cy="11" r="1"></circle>
      <circle cx="15" cy="15" r="1"></circle>
    </svg>`,
    title: '聚合搜索',
    description: '整合多个来源的表情资源，用同一个入口完成查找。'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>`,
    title: '多种图床支持',
    description: '支持多种图床配置，按需选择更适合自己的图片存储方案。'
  }
]

const stats = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
    </svg>`,
    title: '免费使用',
    label: '安装即可开始整理'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>`,
    title: '隐私保护',
    label: '优先保存在本地'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="17 8 12 3 7 8"></polyline>
      <line x1="12" y1="3" x2="12" y2="15"></line>
    </svg>`,
    title: '持续更新',
    label: '围绕真实使用迭代'
  }
]
</script>

<template>
  <div class="home">
    <section class="hero" :class="{ loaded: isLoaded }">
      <div class="hero-background" aria-hidden="true">
        <div class="bg-gradient"></div>
        <div class="bg-mesh"></div>
        <div class="bg-orb orb-1"></div>
        <div class="bg-orb orb-2"></div>
        <div class="bg-particles">
          <span class="particle" v-for="n in 10" :key="n"></span>
        </div>
      </div>

      <div class="hero-content">
        <div class="hero-copy">
          <div class="eyebrow">
            <span class="eyebrow-dot"></span>
            uTools 表情包管理插件
          </div>

          <div class="brand-lockup">
            <div class="logo-container">
              <div class="logo-wrapper">
                <div class="logo-glow"></div>
                <div class="logo-ring"></div>
                <img src="/logo.png" alt="表情罐头 Logo" class="logo">
              </div>
            </div>

            <h1 class="title">
              <span class="title-sub">表情罐头</span>
              <span class="title-main">Emoji Can</span>
            </h1>
          </div>

          <p class="tagline">把常用表情装进一个更快的入口</p>
          <p class="description">
            聚合搜索、收藏、标签和本地/云端存储，把零散表情整理成随叫随到的个人素材库。
          </p>

          <div class="actions">
            <a
              href="https://www.u-tools.cn/plugins/detail/%E8%A1%A8%E6%83%85%E7%BD%90%E5%A4%B4/"
              target="_blank"
              rel="noreferrer"
              class="action-button primary"
            >
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              下载插件
            </a>
            <a href="/guide/getting-started" class="action-button secondary">
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              使用文档
            </a>
          </div>

          <div class="hero-features">
            <div class="hero-feature" v-for="item in heroHighlights" :key="item.label">
              <span class="hero-feature-icon" v-html="item.icon"></span>
              <span class="feature-label">{{ item.label }}</span>
            </div>
          </div>
        </div>

        <div class="hero-preview" aria-label="表情搜索界面预览">
          <div class="preview-shell">
            <div class="preview-toolbar">
              <div class="window-dots" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="preview-title">表情罐头</span>
              <span class="preview-shortcut">Alt Space</span>
            </div>

            <div class="preview-search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <span>搜索 摸鱼 猫咪 回复</span>
            </div>

            <div class="preview-tags">
              <span v-for="tag in previewTags" :key="tag">{{ tag }}</span>
            </div>

            <div class="preview-grid">
              <div
                class="preview-card"
                v-for="(item, index) in previewItems"
                :key="item.title"
                :style="{ animationDelay: `${index * 0.06}s` }"
              >
                <span class="preview-card-mark">{{ index + 1 }}</span>
                <span class="preview-card-title">{{ item.title }}</span>
                <span class="preview-card-desc">{{ item.desc }}</span>
              </div>
            </div>

            <div class="preview-status">
              <span class="status-dot"></span>
              已连接本地素材库
            </div>
          </div>

          <div class="preview-floating-card card-search">
            <span class="floating-number">01</span>
            <span>聚合搜索</span>
          </div>
          <div class="preview-floating-card card-sync">
            <span class="floating-number">02</span>
            <span>云端备份</span>
          </div>
        </div>
      </div>
    </section>

    <section class="features" ref="featuresRef" :class="{ visible: isVisible }">
      <div class="section-header">
        <span class="section-kicker">Core Features</span>
        <h2 class="section-title">核心功能</h2>
        <p class="section-description">从搜索到存储，围绕日常聊天场景减少每一次重复操作。</p>
      </div>

      <div class="feature-grid">
        <article
          class="feature-card"
          v-for="(feature, index) in features"
          :key="feature.title"
          :style="{ animationDelay: `${index * 0.08}s` }"
        >
          <span class="feature-index">{{ String(index + 1).padStart(2, '0') }}</span>
          <div class="feature-icon-wrapper">
            <div class="feature-icon-bg"></div>
            <div class="feature-icon" v-html="feature.icon"></div>
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </article>
      </div>
    </section>

    <section class="stats-section">
      <div class="stats-shell">
        <div class="stats-heading">
          <span class="section-kicker">Designed For Chat</span>
          <h2>让表情管理更贴近真实使用</h2>
          <p>保持轻量、简单和可控，不把整理表情变成另一件麻烦事。</p>
        </div>

        <div class="stats-container">
          <div class="stat-item" v-for="stat in stats" :key="stat.title">
            <div class="stat-icon" v-html="stat.icon"></div>
            <div class="stat-content">
              <span class="stat-number">{{ stat.title }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="footer-section">
      <div class="footer-content">
        <p class="footer-text">
          输入 <code>表情罐头</code> 或 <code>表情包</code> 快速启动，也可以把常用内容固定为收藏。
        </p>
        <div class="footer-links">
          <a href="https://www.u-tools.cn/plugins/detail/%E8%A1%A8%E6%83%85%E7%BD%90%E5%A4%B4/" target="_blank" rel="noreferrer">下载插件</a>
          <span class="divider">|</span>
          <a href="/guide/getting-started">使用文档</a>
          <span class="divider">|</span>
          <a href="/guide/storage/">存储配置</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700;800&display=swap');

.home {
  --home-max-width: 1180px;
  --home-accent: #ff7a45;
  --home-accent-2: #7c5cff;
  --home-surface: rgba(255, 255, 255, 0.76);
  --home-surface-strong: rgba(255, 255, 255, 0.94);
  --home-border: rgba(26, 26, 26, 0.1);
  --home-shadow: 0 28px 80px rgba(26, 26, 26, 0.12);
  --home-soft-shadow: 0 18px 48px rgba(26, 26, 26, 0.08);
  min-height: 100vh;
  width: 100%;
  max-width: none;
  overflow-x: hidden;
  color: var(--vp-c-text-1);
  background:
    radial-gradient(circle at 12% 16%, rgba(255, 122, 69, 0.14), transparent 30%),
    radial-gradient(circle at 90% 6%, rgba(124, 92, 255, 0.12), transparent 28%),
    var(--vp-c-bg);
  font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

html.dark .home {
  --home-accent: #ff9a76;
  --home-accent-2: #a998ff;
  --home-surface: rgba(18, 18, 18, 0.74);
  --home-surface-strong: rgba(24, 24, 24, 0.94);
  --home-border: rgba(255, 255, 255, 0.12);
  --home-shadow: 0 28px 90px rgba(0, 0, 0, 0.45);
  --home-soft-shadow: 0 18px 54px rgba(0, 0, 0, 0.32);
}

.home,
.home * {
  box-sizing: border-box;
}

.hero {
  position: relative;
  min-height: calc(100vh - var(--vp-nav-height, 64px));
  display: flex;
  align-items: center;
  padding: clamp(72px, 10vw, 132px) clamp(20px, 5vw, 56px) clamp(64px, 8vw, 108px);
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero.loaded {
  opacity: 1;
  transform: translateY(0);
}

.hero-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}

.bg-gradient {
  position: absolute;
  inset: -32% -18% auto;
  height: 78%;
  background:
    radial-gradient(ellipse at 35% 30%, rgba(255, 122, 69, 0.18), transparent 56%),
    radial-gradient(ellipse at 66% 20%, rgba(124, 92, 255, 0.15), transparent 52%),
    radial-gradient(ellipse at 50% 50%, var(--vp-c-brand-soft), transparent 64%);
  filter: blur(4px);
  opacity: 0.95;
  animation: drift 22s ease-in-out infinite;
}

@keyframes drift {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
  33% { transform: translate3d(2%, 2%, 0) rotate(1deg); }
  66% { transform: translate3d(-1%, 1%, 0) rotate(-1deg); }
}

.bg-mesh {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--vp-c-divider) 1px, transparent 1px),
    linear-gradient(90deg, var(--vp-c-divider) 1px, transparent 1px);
  background-size: clamp(48px, 7vw, 76px) clamp(48px, 7vw, 76px);
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent 72%);
  opacity: 0.12;
}

.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(54px);
  opacity: 0.2;
  animation: floatOrb 13s ease-in-out infinite;
}

.orb-1 {
  width: clamp(220px, 34vw, 420px);
  height: clamp(220px, 34vw, 420px);
  top: 8%;
  right: -8%;
  background: var(--home-accent);
}

.orb-2 {
  width: clamp(180px, 30vw, 340px);
  height: clamp(180px, 30vw, 340px);
  bottom: 10%;
  left: -9%;
  background: var(--home-accent-2);
  animation-delay: -6s;
}

@keyframes floatOrb {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(3%, -4%, 0) scale(1.06); }
}

.bg-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background: var(--vp-c-brand-1);
  opacity: 0.22;
  animation: particleFloat 11s ease-in-out infinite;
}

.particle:nth-child(1) { top: 14%; left: 8%; animation-delay: 0s; }
.particle:nth-child(2) { top: 22%; right: 16%; animation-delay: 1.1s; }
.particle:nth-child(3) { top: 48%; left: 4%; animation-delay: 2.2s; }
.particle:nth-child(4) { top: 64%; right: 7%; animation-delay: 3.3s; }
.particle:nth-child(5) { top: 36%; left: 18%; animation-delay: 0.7s; }
.particle:nth-child(6) { top: 78%; right: 21%; animation-delay: 4.4s; }
.particle:nth-child(7) { top: 84%; left: 14%; animation-delay: 1.8s; }
.particle:nth-child(8) { top: 44%; right: 30%; animation-delay: 5.1s; }
.particle:nth-child(9) { top: 18%; left: 48%; animation-delay: 2.8s; }
.particle:nth-child(10) { top: 72%; left: 44%; animation-delay: 3.8s; }

@keyframes particleFloat {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.22; }
  50% { transform: translateY(-18px) scale(1.35); opacity: 0.52; }
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: var(--home-max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 0.86fr);
  gap: clamp(42px, 7vw, 96px);
  align-items: center;
}

.hero-copy {
  min-width: 0;
}

.eyebrow,
.section-kicker {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  width: fit-content;
  padding: 8px 13px;
  border: 1px solid var(--home-border);
  border-radius: 999px;
  background: var(--home-surface);
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 28px rgba(26, 26, 26, 0.05);
}

.eyebrow-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--home-accent), var(--home-accent-2));
  box-shadow: 0 0 0 6px rgba(255, 122, 69, 0.12);
}

.brand-lockup {
  display: flex;
  align-items: center;
  gap: clamp(20px, 3vw, 30px);
  margin: clamp(24px, 4vw, 38px) 0 clamp(18px, 3vw, 24px);
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}

.logo-wrapper {
  position: relative;
  display: inline-flex;
}

.logo-glow {
  position: absolute;
  inset: -24px;
  background: radial-gradient(circle, var(--home-accent) 0%, transparent 70%);
  opacity: 0.18;
  filter: blur(24px);
  transition: opacity 0.45s ease;
}

.logo-ring {
  position: absolute;
  inset: -12px;
  border: 1px solid var(--home-border);
  border-radius: 31%;
  opacity: 0.8;
  transform: rotate(6deg);
  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.45s ease;
}

.logo-wrapper:hover .logo-glow {
  opacity: 0.34;
}

.logo-wrapper:hover .logo-ring {
  border-color: var(--home-accent);
  transform: rotate(-3deg) scale(1.05);
}

.logo {
  position: relative;
  z-index: 1;
  width: clamp(92px, 11vw, 126px);
  height: clamp(92px, 11vw, 126px);
  object-fit: contain;
  border-radius: clamp(22px, 3vw, 30px);
  box-shadow: var(--home-shadow);
  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.45s ease;
}

.logo:hover {
  transform: translateY(-6px) scale(1.04) rotate(2deg);
  box-shadow: 0 34px 90px rgba(26, 26, 26, 0.18);
}

html.dark .logo:hover {
  box-shadow: 0 34px 90px rgba(0, 0, 0, 0.56);
}

.title {
  margin: 0;
  line-height: 1.08;
}

.title-sub {
  display: block;
  font-size: clamp(46px, 7vw, 82px);
  font-weight: 800;
  letter-spacing: clamp(-2.6px, -0.45vw, -1px);
  color: var(--vp-c-text-1);
}

.title-main {
  display: block;
  margin-top: clamp(10px, 1.8vw, 14px);
  color: var(--vp-c-text-3);
  font-size: clamp(14px, 2.1vw, 21px);
  font-weight: 600;
  letter-spacing: clamp(4px, 0.9vw, 8px);
  text-transform: uppercase;
}

.tagline {
  max-width: 660px;
  margin: 0 0 14px;
  color: var(--vp-c-text-1);
  font-size: clamp(22px, 3.4vw, 34px);
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: -0.02em;
}

.description {
  max-width: 590px;
  margin: 0 0 clamp(30px, 4.6vw, 46px);
  color: var(--vp-c-text-2);
  font-size: clamp(15px, 1.8vw, 18px);
  line-height: 1.85;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: clamp(28px, 4.8vw, 44px);
}

.action-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  padding: 13px clamp(24px, 3vw, 34px);
  border: 1px solid transparent;
  border-radius: 999px;
  overflow: hidden;
  color: inherit;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease, border-color 0.35s ease, background 0.35s ease, color 0.35s ease;
}

.action-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.24), transparent 54%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.action-button:hover::before {
  opacity: 1;
}

.action-button .icon {
  position: relative;
  z-index: 1;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.action-button:hover .icon {
  transform: translateY(-2px);
}

.action-button.primary {
  background: var(--vp-c-text-1);
  color: var(--vp-c-bg);
  border-color: var(--vp-c-text-1);
  box-shadow: 0 16px 36px rgba(26, 26, 26, 0.16);
}

.action-button.primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 22px 48px rgba(26, 26, 26, 0.24);
}

html.dark .action-button.primary {
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.38);
}

html.dark .action-button.primary:hover {
  box-shadow: 0 22px 54px rgba(0, 0, 0, 0.55);
}

.action-button.secondary {
  background: var(--home-surface);
  color: var(--vp-c-text-1);
  border-color: var(--home-border);
  backdrop-filter: blur(14px);
}

.action-button.secondary:hover {
  color: var(--vp-c-text-1);
  border-color: rgba(255, 122, 69, 0.52);
  transform: translateY(-3px) scale(1.02);
  box-shadow: var(--home-soft-shadow);
}

.hero-features {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  width: 100%;
  max-width: 560px;
}

.hero-feature {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  padding: 12px 14px;
  border: 1px solid var(--home-border);
  border-radius: 18px;
  background: var(--home-surface);
  backdrop-filter: blur(16px);
  box-shadow: 0 12px 28px rgba(26, 26, 26, 0.05);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.hero-feature:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 122, 69, 0.5);
  box-shadow: var(--home-soft-shadow);
}

.hero-feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex: 0 0 auto;
  border-radius: 12px;
  color: var(--vp-c-text-1);
  background: linear-gradient(135deg, rgba(255, 122, 69, 0.16), rgba(124, 92, 255, 0.14));
}

.hero-feature-icon :deep(svg) {
  width: 19px;
  height: 19px;
}

.feature-label {
  min-width: 0;
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
}

.hero-preview {
  position: relative;
  min-width: 0;
  perspective: 1200px;
}

.preview-shell {
  position: relative;
  z-index: 2;
  padding: clamp(18px, 3vw, 26px);
  border: 1px solid var(--home-border);
  border-radius: clamp(24px, 3vw, 32px);
  background: var(--home-surface-strong);
  backdrop-filter: blur(22px);
  box-shadow: var(--home-shadow);
  transform: rotateX(3deg) rotateY(-7deg);
  transform-origin: center;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
}

.hero-preview:hover .preview-shell {
  transform: rotateX(0deg) rotateY(0deg) translateY(-6px);
  box-shadow: 0 36px 100px rgba(26, 26, 26, 0.16);
}

html.dark .hero-preview:hover .preview-shell {
  box-shadow: 0 36px 100px rgba(0, 0, 0, 0.58);
}

.preview-shell::before {
  content: '';
  position: absolute;
  inset: 1px;
  z-index: -1;
  border-radius: inherit;
  background:
    radial-gradient(circle at 18% 8%, rgba(255, 122, 69, 0.16), transparent 32%),
    radial-gradient(circle at 88% 18%, rgba(124, 92, 255, 0.14), transparent 30%);
}

.preview-toolbar {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.window-dots {
  display: flex;
  gap: 7px;
}

.window-dots span {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--vp-c-divider);
}

.window-dots span:nth-child(1) { background: #ff7a45; }
.window-dots span:nth-child(2) { background: #f5b84b; }
.window-dots span:nth-child(3) { background: #62c078; }

.preview-title {
  color: var(--vp-c-text-1);
  font-size: 15px;
  font-weight: 700;
}

.preview-shortcut {
  padding: 5px 9px;
  border: 1px solid var(--home-border);
  border-radius: 999px;
  color: var(--vp-c-text-3);
  font-size: 12px;
  font-weight: 700;
}

.preview-search {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 54px;
  padding: 0 16px;
  border: 1px solid var(--home-border);
  border-radius: 18px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.preview-search svg {
  width: 20px;
  height: 20px;
  color: var(--home-accent);
  flex: 0 0 auto;
}

.preview-search span {
  overflow: hidden;
  font-size: 14px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.preview-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin: 18px 0;
}

.preview-tags span {
  padding: 7px 10px;
  border: 1px solid var(--home-border);
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 700;
}

.preview-tags span:first-child {
  border-color: rgba(255, 122, 69, 0.36);
  color: var(--vp-c-text-1);
  background: rgba(255, 122, 69, 0.12);
}

.preview-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.preview-card {
  position: relative;
  min-height: 108px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 5px;
  padding: 14px;
  border: 1px solid var(--home-border);
  border-radius: 18px;
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(255, 122, 69, 0.13), rgba(124, 92, 255, 0.09)),
    var(--vp-c-bg);
  opacity: 0;
  transform: translateY(18px);
  animation: previewItemIn 0.58s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.preview-card::before {
  content: '';
  position: absolute;
  top: 14px;
  right: 14px;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.36), transparent),
    var(--vp-c-brand-soft);
}

@keyframes previewItemIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.preview-card-mark {
  position: absolute;
  top: 14px;
  left: 14px;
  color: var(--vp-c-text-3);
  font-size: 12px;
  font-weight: 800;
}

.preview-card-title {
  position: relative;
  z-index: 1;
  color: var(--vp-c-text-1);
  font-size: 18px;
  font-weight: 800;
}

.preview-card-desc {
  position: relative;
  z-index: 1;
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 600;
}

.preview-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 600;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #62c078;
  box-shadow: 0 0 0 6px rgba(98, 192, 120, 0.14);
}

.preview-floating-card {
  position: absolute;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 11px 14px;
  border: 1px solid var(--home-border);
  border-radius: 16px;
  background: var(--home-surface-strong);
  color: var(--vp-c-text-1);
  font-size: 13px;
  font-weight: 800;
  box-shadow: var(--home-soft-shadow);
  backdrop-filter: blur(18px);
}

.floating-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background: var(--vp-c-text-1);
  color: var(--vp-c-bg);
  font-size: 11px;
}

.card-search {
  top: 12%;
  left: -38px;
  animation: floatBadge 7s ease-in-out infinite;
}

.card-sync {
  right: -34px;
  bottom: 14%;
  animation: floatBadge 7.5s ease-in-out -2.5s infinite;
}

@keyframes floatBadge {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.features {
  width: 100%;
  margin: 0;
  padding: clamp(72px, 9vw, 116px) clamp(20px, 6vw, 56px) clamp(82px, 10vw, 124px);
  background: linear-gradient(180deg, transparent 0%, var(--vp-c-bg-soft) 100%);
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.features.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-header {
  max-width: var(--home-max-width);
  margin: 0 auto clamp(38px, 6vw, 62px);
  text-align: center;
}

.section-header .section-kicker {
  margin-bottom: 16px;
}

.section-title {
  margin: 0 0 14px;
  color: var(--vp-c-text-1);
  font-size: clamp(32px, 5vw, 50px);
  font-weight: 800;
  line-height: 1.16;
  letter-spacing: -0.04em;
}

.section-description {
  max-width: 520px;
  margin: 0 auto;
  color: var(--vp-c-text-2);
  font-size: clamp(15px, 2vw, 17px);
  line-height: 1.8;
}

.feature-grid {
  width: 100%;
  max-width: var(--home-max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(16px, 2.4vw, 24px);
}

.feature-card {
  position: relative;
  min-height: 268px;
  padding: clamp(26px, 3.5vw, 34px);
  border: 1px solid var(--home-border);
  border-radius: 26px;
  overflow: hidden;
  background:
    linear-gradient(145deg, var(--home-surface-strong), var(--vp-c-bg-soft)),
    var(--vp-c-bg);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.16) inset;
  opacity: 0;
  transform: translateY(24px);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.35s ease, box-shadow 0.35s ease;
}

.features.visible .feature-card {
  animation: cardSlideUp 0.64s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes cardSlideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.feature-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 18% 0%, rgba(255, 122, 69, 0.18), transparent 34%),
    radial-gradient(circle at 100% 12%, rgba(124, 92, 255, 0.13), transparent 28%);
  opacity: 0;
  transition: opacity 0.35s ease;
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-card:hover {
  border-color: rgba(255, 122, 69, 0.46);
  transform: translateY(-6px);
  box-shadow: var(--home-soft-shadow);
}

.feature-index {
  position: absolute;
  top: 22px;
  right: 24px;
  color: var(--vp-c-text-3);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.feature-icon-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  margin-bottom: 28px;
}

.feature-icon-bg {
  position: absolute;
  inset: 0;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(255, 122, 69, 0.18), rgba(124, 92, 255, 0.14));
  transform: rotate(-6deg);
  transition: transform 0.35s ease, opacity 0.35s ease;
}

.feature-card:hover .feature-icon-bg {
  transform: rotate(0deg) scale(1.08);
}

.feature-icon {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: var(--vp-c-text-1);
  transition: transform 0.35s ease;
}

.feature-icon :deep(svg) {
  width: 34px;
  height: 34px;
}

.feature-card:hover .feature-icon {
  transform: scale(1.08);
}

.feature-card h3 {
  position: relative;
  z-index: 1;
  margin: 0 0 12px;
  color: var(--vp-c-text-1);
  font-size: 21px;
  font-weight: 800;
  line-height: 1.35;
}

.feature-card p {
  position: relative;
  z-index: 1;
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.85;
}

.stats-section {
  padding: clamp(64px, 8vw, 96px) clamp(20px, 6vw, 56px);
  background: var(--vp-c-text-1);
  color: var(--vp-c-bg);
}

.stats-shell {
  width: 100%;
  max-width: var(--home-max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
  gap: clamp(28px, 6vw, 74px);
  align-items: center;
}

.stats-heading .section-kicker {
  border-color: rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.08);
  color: var(--vp-c-bg-soft);
}

.stats-heading h2 {
  margin: 18px 0 14px;
  color: var(--vp-c-bg);
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 800;
  line-height: 1.22;
  letter-spacing: -0.04em;
}

.stats-heading p {
  max-width: 420px;
  margin: 0;
  color: rgba(255, 255, 255, 0.68);
  font-size: 15px;
  line-height: 1.8;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  min-height: 190px;
  padding: clamp(20px, 3vw, 26px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.07);
  transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.24);
  background: rgba(255, 255, 255, 0.1);
}

.stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 17px;
  color: var(--vp-c-bg);
  background: rgba(255, 255, 255, 0.12);
}

.stat-icon :deep(svg) {
  width: 27px;
  height: 27px;
}

.stat-content {
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 0;
}

.stat-number {
  color: var(--vp-c-bg);
  font-size: 19px;
  font-weight: 800;
}

.stat-label {
  color: rgba(255, 255, 255, 0.62);
  font-size: 13px;
  line-height: 1.6;
}

.footer-section {
  position: relative;
  padding: clamp(44px, 7vw, 70px) clamp(20px, 5vw, 40px);
  overflow: hidden;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  text-align: center;
}

.footer-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(255, 122, 69, 0.1), transparent 28%),
    radial-gradient(circle at 82% 30%, rgba(124, 92, 255, 0.08), transparent 28%);
  pointer-events: none;
}

.footer-content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
}

.footer-text {
  margin: 0 0 24px;
  color: var(--vp-c-text-2);
  font-size: clamp(15px, 2vw, 18px);
  line-height: 1.85;
}

.footer-text code {
  display: inline-block;
  margin: 0 2px;
  padding: 5px 11px;
  border: 1px solid var(--home-border);
  border-radius: 9px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-family: 'SF Mono', Monaco, 'Courier New', monospace;
  font-size: clamp(13px, 1.8vw, 15px);
  font-weight: 700;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.footer-links a {
  color: var(--vp-c-text-1);
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--home-accent);
}

.footer-links .divider {
  color: var(--vp-c-divider);
}

@media (max-width: 1080px) {
  .hero-content {
    grid-template-columns: minmax(0, 1fr);
    max-width: 760px;
  }

  .hero-copy {
    text-align: center;
  }

  .eyebrow,
  .section-kicker {
    margin-left: auto;
    margin-right: auto;
  }

  .brand-lockup,
  .actions,
  .hero-features {
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

  .description,
  .tagline {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-preview {
    max-width: 620px;
    margin: 0 auto;
  }

  .preview-shell {
    transform: none;
  }

  .feature-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .stats-shell {
    grid-template-columns: minmax(0, 1fr);
  }

  .stats-heading {
    text-align: center;
  }

  .stats-heading p {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 62px 20px 58px;
  }

  .bg-orb {
    display: none;
  }

  .brand-lockup {
    flex-direction: column;
    gap: 18px;
  }

  .logo {
    width: 104px;
    height: 104px;
    border-radius: 24px;
  }

  .title-sub {
    font-size: clamp(38px, 10vw, 52px);
    letter-spacing: -1px;
  }

  .title-main {
    font-size: clamp(13px, 3.5vw, 16px);
    letter-spacing: 3.2px;
  }

  .tagline {
    font-size: clamp(20px, 5.8vw, 28px);
  }

  .description {
    font-size: 15px;
    line-height: 1.75;
  }

  .actions {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 320px;
  }

  .action-button {
    width: 100%;
  }

  .hero-features {
    grid-template-columns: minmax(0, 1fr);
    max-width: 320px;
  }

  .hero-feature {
    justify-content: center;
  }

  .preview-floating-card {
    display: none;
  }

  .preview-shell {
    border-radius: 24px;
  }

  .feature-grid,
  .stats-container {
    grid-template-columns: minmax(0, 1fr);
  }

  .features {
    padding: 58px 20px 70px;
  }

  .feature-card {
    min-height: auto;
  }

  .stats-section {
    padding: 58px 20px;
  }

  .stat-item {
    min-height: auto;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 54px 16px 50px;
  }

  .eyebrow,
  .section-kicker {
    font-size: 12px;
    padding: 7px 11px;
  }

  .logo {
    width: 92px;
    height: 92px;
    border-radius: 22px;
  }

  .title-sub {
    font-size: 36px;
  }

  .preview-toolbar {
    grid-template-columns: auto 1fr;
  }

  .preview-shortcut {
    display: none;
  }

  .preview-grid {
    gap: 10px;
  }

  .preview-card {
    min-height: 96px;
    padding: 12px;
    border-radius: 16px;
  }

  .preview-card-title {
    font-size: 16px;
  }

  .features {
    padding: 50px 16px 58px;
  }

  .section-title {
    font-size: 30px;
  }

  .feature-card {
    padding: 24px 20px;
    border-radius: 22px;
  }

  .stats-section {
    padding: 50px 16px;
  }

  .footer-section {
    padding: 42px 16px;
  }

  .footer-links {
    gap: 10px;
  }
}

@media (hover: none) {
  .logo:hover,
  .action-button.primary:hover,
  .action-button.secondary:hover,
  .hero-feature:hover,
  .feature-card:hover,
  .stat-item:hover,
  .hero-preview:hover .preview-shell {
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero,
  .features,
  .feature-card,
  .preview-card,
  .bg-gradient,
  .bg-orb,
  .particle,
  .preview-floating-card {
    animation: none !important;
    transition: none !important;
  }

  .hero,
  .features,
  .feature-card,
  .preview-card {
    opacity: 1;
    transform: none;
  }
}
</style>
