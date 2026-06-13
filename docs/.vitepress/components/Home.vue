<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isLoaded = ref(false)
const isVisible = ref(false)
const featuresRef = ref<HTMLElement | null>(null)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      })
    },
    { threshold: 0.1 }
  )

  if (featuresRef.value) {
    observer.observe(featuresRef.value)
  }
})

const features = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </svg>`,
    title: '快速搜索',
    description: '支持关键词快速搜索你的表情包，一秒找到需要的表情'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>`,
    title: '收藏管理',
    description: '收藏常用表情，随时取用，让你的最爱触手可及'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
    </svg>`,
    title: '本地/云端混合存储',
    description: '本地与云端数据同步，灵活管理你的表情资源'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
      <line x1="7" y1="7" x2="7.01" y2="7"></line>
    </svg>`,
    title: '多标签搜索',
    description: '支持多维度标签分类，快速筛选符合条件的表情'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      <circle cx="11" cy="11" r="1"></circle>
      <circle cx="15" cy="15" r="1"></circle>
    </svg>`,
    title: '聚合搜索',
    description: '多来源数据聚合，一站式搜索全网热门表情'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>`,
    title: '多种图床支持',
    description: '支持多种图床服务，灵活配置图片存储方案'
  }
]
</script>

<template>
  <div class="home">
    <div class="hero" :class="{ loaded: isLoaded }">
      <div class="hero-background">
        <div class="bg-gradient"></div>
        <div class="bg-mesh"></div>
        <div class="bg-orb orb-1"></div>
        <div class="bg-orb orb-2"></div>
        <div class="bg-particles">
          <div class="particle" v-for="n in 8" :key="n"></div>
        </div>
      </div>

      <div class="hero-content">
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

        <p class="tagline">一个 uTools 表情包管理插件</p>
        <p class="description">
          让你的聊天更有趣，轻松搜索、收藏和发送表情
        </p>

        <div class="actions">
          <a href="https://www.u-tools.cn/plugins/detail/%E8%A1%A8%E6%83%85%E7%BD%90%E5%A4%B4/" target="_blank" class="action-button primary">
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
          <div class="hero-feature">
            <span class="feature-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v4"></path>
                <path d="m16.2 7.8 2.9-2.9"></path>
                <path d="M18 12h4"></path>
                <path d="m16.2 16.2 2.9 2.9"></path>
                <path d="M12 18v4"></path>
                <path d="m4.9 19.1 2.9-2.9"></path>
                <path d="M2 12h4"></path>
                <path d="m4.9 4.9 2.9 2.9"></path>
              </svg>
            </span>
            <span class="feature-label">轻量高效</span>
          </div>
          <div class="hero-feature-divider"></div>
          <div class="hero-feature">
            <span class="feature-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </span>
            <span class="feature-label">简单易用</span>
          </div>
          <div class="hero-feature-divider"></div>
          <div class="hero-feature">
            <span class="feature-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </span>
            <span class="feature-label">安全可靠</span>
          </div>
        </div>
      </div>
    </div>

    <div class="features" ref="featuresRef" :class="{ visible: isVisible }">
      <div class="section-header">
        <h2 class="section-title">核心功能</h2>
        <p class="section-description">精心设计的功能，让表情管理变得简单有趣</p>
      </div>

      <div class="feature-grid">
        <div
          class="feature-card"
          v-for="(feature, index) in features"
          :key="index"
          :style="{ animationDelay: `${index * 0.08}s` }"
        >
          <div class="feature-icon-wrapper">
            <div class="feature-icon-bg"></div>
            <div class="feature-icon" v-html="feature.icon"></div>
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>

    <div class="stats-section">
      <div class="stats-container">
        <div class="stat-item">
          <div class="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
          </div>
          <div class="stat-content">
            <span class="stat-number">免费使用</span>
            <span class="stat-label">无需付费</span>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <div class="stat-content">
            <span class="stat-number">隐私保护</span>
            <span class="stat-label">本地存储</span>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
          </div>
          <div class="stat-content">
            <span class="stat-number">持续更新</span>
            <span class="stat-label">不断迭代</span>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-section">
      <div class="footer-content">
        <p class="footer-text">
          输入 <code>表情罐头</code> 或 <code>表情包</code> 快速启动
        </p>
        <div class="footer-links">
          <a href="https://www.u-tools.cn/plugins/detail/%E8%A1%A8%E6%83%85%E7%BD%90%E5%A4%B4/" target="_blank">下载插件</a>
          <span class="divider">|</span>
          <a href="/guide/getting-started">使用文档</a>
          <span class="divider">|</span>
          <a href="/guide/faq">常见问题</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700;800&display=swap');

.home {
  min-height: 100vh;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  overflow-x: hidden;
  width: 100%;
  max-width: none;
  font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.home,
.home * {
  box-sizing: border-box;
}

.hero {
  position: relative;
  padding: clamp(80px, 12vw, 140px) clamp(20px, 5vw, 48px) clamp(72px, 10vw, 112px);
  text-align: center;
  opacity: 0;
  transform: translateY(24px);
  transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
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
  top: -30%;
  left: -30%;
  width: 160%;
  height: 160%;
  background: radial-gradient(ellipse at 50% 30%, var(--vp-c-brand-soft) 0%, transparent 60%);
  opacity: 0.5;
  animation: drift 20s ease-in-out infinite;
}

@keyframes drift {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(2%, 2%) rotate(1deg); }
  66% { transform: translate(-1%, 1%) rotate(-1deg); }
}

.bg-mesh {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--vp-c-divider) 1px, transparent 1px),
    linear-gradient(90deg, var(--vp-c-divider) 1px, transparent 1px);
  background-size: clamp(40px, 7vw, 72px) clamp(40px, 7vw, 72px);
  opacity: 0.08;
}

.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.15;
  animation: floatOrb 12s ease-in-out infinite;
}

.orb-1 {
  width: clamp(200px, 35vw, 400px);
  height: clamp(200px, 35vw, 400px);
  top: -10%;
  right: -10%;
  background: var(--vp-c-brand-1);
  animation-delay: 0s;
}

.orb-2 {
  width: clamp(150px, 28vw, 320px);
  height: clamp(150px, 28vw, 320px);
  bottom: -5%;
  left: -5%;
  background: var(--vp-c-brand-2);
  animation-delay: -6s;
}

@keyframes floatOrb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(3%, -3%) scale(1.05); }
}

.bg-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: var(--vp-c-brand-1);
  border-radius: 50%;
  opacity: 0.3;
  animation: particleFloat 10s ease-in-out infinite;
}

.particle:nth-child(1) { top: 15%; left: 8%; animation-delay: 0s; }
.particle:nth-child(2) { top: 25%; right: 12%; animation-delay: 1.2s; }
.particle:nth-child(3) { top: 55%; left: 4%; animation-delay: 2.4s; }
.particle:nth-child(4) { top: 65%; right: 8%; animation-delay: 3.6s; }
.particle:nth-child(5) { top: 35%; left: 18%; animation-delay: 0.8s; }
.particle:nth-child(6) { top: 75%; right: 18%; animation-delay: 4.8s; }
.particle:nth-child(7) { top: 85%; left: 12%; animation-delay: 2s; }
.particle:nth-child(8) { top: 45%; right: 22%; animation-delay: 5.2s; }

@keyframes particleFloat {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
  50% { transform: translateY(-16px) scale(1.3); opacity: 0.6; }
}

.hero-content {
  max-width: 860px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  width: 100%;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: clamp(28px, 5vw, 48px);
}

.logo-wrapper {
  position: relative;
  display: inline-block;
}

.logo-glow {
  position: absolute;
  inset: -24px;
  background: radial-gradient(circle, var(--vp-c-brand-1) 0%, transparent 70%);
  opacity: 0;
  filter: blur(24px);
  transition: opacity 0.5s ease;
}

.logo-ring {
  position: absolute;
  inset: -12px;
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 50%;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.logo-wrapper:hover .logo-glow {
  opacity: 0.4;
}

.logo-wrapper:hover .logo-ring {
  opacity: 0.3;
  transform: scale(1.1);
}

.logo {
  width: clamp(100px, 15vw, 160px);
  height: clamp(100px, 15vw, 160px);
  object-fit: contain;
  border-radius: clamp(22px, 3.5vw, 36px);
  box-shadow: 0 20px 60px var(--vp-c-brand-soft);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  z-index: 1;
}

.logo:hover {
  transform: translateY(-6px) scale(1.06) rotate(3deg);
  box-shadow: 0 28px 80px var(--vp-c-brand-soft);
}

html:not(.dark) .logo:hover {
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.18);
}

html.dark .logo:hover {
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.5);
}

.title {
  margin: 0 0 clamp(16px, 3vw, 24px);
  line-height: 1.2;
}

.title-sub {
  display: block;
  font-size: clamp(44px, 9vw, 76px);
  font-weight: 800;
  letter-spacing: clamp(-2px, -0.4vw, -1px);
  color: var(--vp-c-text-1);
  font-family: 'Noto Sans SC', sans-serif;
}

.title-main {
  display: block;
  font-size: clamp(16px, 2.8vw, 24px);
  font-weight: 500;
  color: var(--vp-c-text-3);
  letter-spacing: clamp(4px, 1vw, 8px);
  margin-top: clamp(10px, 2vw, 16px);
  text-transform: uppercase;
  font-family: 'Noto Sans SC', sans-serif;
}

.tagline {
  font-size: clamp(18px, 3.5vw, 26px);
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 14px;
  letter-spacing: 0.5px;
}

.description {
  font-size: clamp(15px, 2.2vw, 18px);
  color: var(--vp-c-text-2);
  margin: 0 0 clamp(36px, 6vw, 56px);
  line-height: 1.75;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
}

.actions {
  display: flex;
  gap: clamp(14px, 2.8vw, 24px);
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: clamp(44px, 7vw, 68px);
}

.action-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  min-height: 50px;
  padding: clamp(12px, 2vw, 15px) clamp(26px, 4vw, 40px);
  border-radius: 12px;
  font-size: clamp(14px, 1.8vw, 16px);
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  font-family: 'Noto Sans SC', sans-serif;
}

.action-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.08) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.action-button:hover::before {
  opacity: 1;
}

.action-button .icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.action-button:hover .icon {
  transform: translateY(-2px);
}

.action-button.primary {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
  border-color: var(--vp-c-brand-1);
}

.action-button.primary:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 14px 36px var(--vp-c-brand-soft);
}

html:not(.dark) .action-button.primary:hover {
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.22);
}

html.dark .action-button.primary:hover {
  box-shadow: 0 14px 36px rgba(255, 255, 255, 0.15);
}

.action-button.secondary {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-divider);
}

.action-button.secondary:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 14px 36px var(--vp-c-brand-soft);
}

html:not(.dark) .action-button.secondary:hover {
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.1);
}

html.dark .action-button.secondary:hover {
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.35);
}

.hero-features {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: center;
  gap: clamp(20px, 4vw, 48px);
  width: 100%;
  max-width: 720px;
  padding: clamp(22px, 4vw, 36px);
  background: var(--vp-c-bg-soft);
  border-radius: 18px;
  border: 1px solid var(--vp-c-divider);
  margin: 0 auto;
  backdrop-filter: blur(12px);
  box-sizing: border-box;
}

.hero-feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(8px, 1.6vw, 12px);
  min-width: 0;
}

.hero-feature .feature-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(44px, 5.5vw, 52px);
  height: clamp(44px, 5.5vw, 52px);
  margin-bottom: 0;
  background: var(--vp-c-brand-soft);
  border-radius: 12px;
  color: var(--vp-c-brand-1);
  transition: all 0.3s ease;
}

.hero-feature:hover .feature-icon-wrapper {
  transform: scale(1.1);
  background: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
}

.hero-feature-divider {
  width: 1px;
  height: 36px;
  background: var(--vp-c-divider);
}

.feature-label {
  font-size: clamp(12px, 1.5vw, 13px);
  color: var(--vp-c-text-2);
  font-weight: 500;
  letter-spacing: 0.3px;
  white-space: nowrap;
  font-family: 'Noto Sans SC', sans-serif;
}

.features {
  width: 100%;
  margin: 0;
  padding: clamp(64px, 9vw, 104px) clamp(20px, 8vw, 120px) clamp(72px, 10vw, 112px);
  opacity: 0;
  transform: translateY(32px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.features.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-header {
  text-align: center;
  margin-bottom: clamp(40px, 6vw, 64px);
}

.section-title {
  font-size: clamp(30px, 5.5vw, 44px);
  font-weight: 800;
  color: var(--vp-c-text-1);
  margin: 0 0 14px;
  letter-spacing: -0.5px;
  font-family: 'Noto Sans SC', sans-serif;
}

.section-description {
  font-size: clamp(15px, 2.2vw, 17px);
  color: var(--vp-c-text-2);
  margin: 0;
  max-width: 460px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: clamp(16px, 2.8vw, 28px);
}

.feature-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
  padding: clamp(28px, 4vw, 40px) clamp(20px, 3vw, 32px);
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  opacity: 0;
  transform: translateY(24px);
}

.features.visible .feature-card {
  animation: cardSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-6px);
}

html:not(.dark) .feature-card:hover {
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.08);
}

html.dark .feature-card:hover {
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35);
}

.feature-icon-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
}

.feature-icon-bg {
  position: absolute;
  inset: -8px;
  background: var(--vp-c-brand-soft);
  border-radius: 14px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover .feature-icon-bg {
  opacity: 1;
}

.feature-icon {
  position: relative;
  z-index: 1;
  width: 44px;
  height: 44px;
  margin: 0 auto;
  display: block;
  color: var(--vp-c-brand-1);
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.08);
}

.feature-card h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 10px;
  font-family: 'Noto Sans SC', sans-serif;
}

.feature-card p {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.7;
  margin: 0;
}

.stats-section {
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
  padding: clamp(52px, 8vw, 84px) clamp(16px, 4vw, 24px);
}

.stats-container {
  width: 100%;
  max-width: none;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: clamp(16px, 3.5vw, 36px);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: clamp(14px, 2.5vw, 20px);
  padding: clamp(18px, 3vw, 24px);
  background: var(--vp-c-bg);
  border-radius: 14px;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
}

.stat-item:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-3px);
}

html:not(.dark) .stat-item:hover {
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
}

html.dark .stat-item:hover {
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25);
}

.stat-icon {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-brand-soft);
  border-radius: 12px;
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.stat-content {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}

.stat-number {
  font-size: 18px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  font-family: 'Noto Sans SC', sans-serif;
}

.stat-label {
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.footer-section {
  background: var(--vp-c-text-1);
  color: var(--vp-c-bg);
  padding: clamp(44px, 7vw, 68px) clamp(16px, 4vw, 24px);
  text-align: center;
  transition: background 0.3s ease, color 0.3s ease;
}

.footer-content {
  width: 100%;
  max-width: none;
  margin: 0;
}

.footer-text {
  font-size: clamp(15px, 2.4vw, 18px);
  margin: 0 0 26px;
  color: var(--vp-c-bg-soft);
  line-height: 1.8;
}

.footer-text code {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  display: inline-block;
  padding: 5px clamp(10px, 2vw, 14px);
  border-radius: 6px;
  font-family: 'SF Mono', Monaco, 'Courier New', monospace;
  font-size: clamp(13px, 2vw, 16px);
  font-weight: 600;
  margin: 0 2px;
}

.footer-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.footer-links a {
  color: var(--vp-c-bg-soft);
  text-decoration: none;
  font-size: 15px;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--vp-c-bg);
}

.footer-links .divider {
  color: var(--vp-c-text-2);
  opacity: 0.4;
}

@media (max-width: 768px) {
  .hero {
    padding: 68px 20px 64px;
  }

  .logo {
    width: clamp(96px, 24vw, 130px);
    height: clamp(96px, 24vw, 130px);
  }

  .title-sub {
    font-size: clamp(38px, 10vw, 48px);
    letter-spacing: -1px;
  }

  .title-main {
    font-size: clamp(13px, 4vw, 16px);
    letter-spacing: 3px;
  }

  .tagline {
    font-size: clamp(17px, 5vw, 20px);
  }

  .description {
    font-size: 15px;
  }

  .actions {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-bottom: 40px;
  }

  .action-button {
    width: 100%;
    max-width: 300px;
  }

  .hero-features {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    max-width: 400px;
    padding: 18px;
    gap: 12px;
  }

  .hero-feature-divider {
    display: none;
  }

  .features {
    padding: 52px 20px 64px;
  }

  .section-title {
    font-size: 30px;
  }

  .section-description {
    font-size: 15px;
  }

  .feature-card {
    padding: 28px 20px;
  }

  .stats-section {
    padding: 52px 20px;
  }

  .stat-item {
    padding: 18px;
  }

  .stat-icon {
    width: 48px;
    height: 48px;
  }

  .stat-number {
    font-size: 17px;
  }

  .footer-section {
    padding: 44px 20px;
  }

  .footer-text {
    font-size: 16px;
  }

  .footer-text code {
    font-size: 14px;
    padding: 4px 10px;
  }

  .orb-1, .orb-2 {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 60px 16px 52px;
  }

  .logo-container {
    margin-bottom: 20px;
  }

  .logo {
    width: 96px;
    height: 96px;
    border-radius: 22px;
  }

  .title-sub {
    font-size: 36px;
    letter-spacing: -0.5px;
  }

  .title-main {
    margin-top: 8px;
    letter-spacing: 2.5px;
  }

  .tagline {
    font-size: 17px;
  }

  .description {
    margin-bottom: 28px;
    line-height: 1.6;
  }

  .actions {
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .action-button {
    max-width: none;
    min-height: 46px;
    padding: 12px 16px;
    border-radius: 10px;
    font-size: 14px;
  }

  .hero-features {
    max-width: 340px;
    padding: 14px 8px;
    gap: 8px;
    border-radius: 14px;
  }

  .hero-feature .feature-icon-wrapper {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }

  .hero-feature .feature-icon-wrapper svg {
    width: 20px;
    height: 20px;
  }

  .feature-label {
    font-size: 11px;
  }

  .features {
    padding: 44px 16px 56px;
  }

  .section-title {
    font-size: 28px;
  }

  .feature-grid {
    gap: 14px;
  }

  .feature-card {
    padding: 24px 16px;
    border-radius: 14px;
  }

  .feature-card h3 {
    font-size: 18px;
  }

  .stats-section {
    padding: 44px 16px;
  }

  .stat-item {
    padding: 16px;
  }

  .stat-icon {
    width: 44px;
    height: 44px;
    border-radius: 10px;
  }

  .stat-number {
    font-size: 16px;
  }

  .footer-section {
    padding: 40px 16px;
  }

  .footer-text {
    margin-bottom: 20px;
  }

  .footer-text code {
    margin: 2px;
    padding: 3px 8px;
  }

  .footer-links {
    gap: 10px;
  }
}

@media (hover: none) {
  .logo:hover,
  .action-button.primary:hover,
  .action-button.secondary:hover,
  .feature-card:hover,
  .stat-item:hover {
    transform: none;
  }
}
</style>
