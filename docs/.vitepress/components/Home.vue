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
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
      <line x1="9" y1="9" x2="9.01" y2="9"></line>
      <line x1="15" y1="9" x2="15.01" y2="9"></line>
    </svg>`,
    title: '简洁界面',
    description: '黑白配色，简约美观的界面设计，带来愉悦的使用体验'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>`,
    title: '高效便捷',
    description: '深度集成 uTools，随时呼出，即用即走'
  }
]
</script>

<template>
  <div class="home">
    <div class="hero" :class="{ loaded: isLoaded }">
      <div class="hero-background">
        <div class="bg-gradient"></div>
        <div class="bg-mesh"></div>
        <div class="bg-particles">
          <div class="particle" v-for="n in 6" :key="n"></div>
        </div>
      </div>
      
      <div class="hero-content">
        <div class="logo-container">
          <div class="logo-wrapper">
            <div class="logo-glow"></div>
            <img src="/logo.png" alt="表情罐头 Logo" class="logo">
          </div>
        </div>
        
        <h1 class="title">
          <span class="title-main">表情罐头</span>
          <span class="title-sub">Emoji Can</span>
        </h1>
        
        <p class="tagline">一个 uTools 表情包管理插件</p>
        <p class="description">
          让你的聊天更有趣，轻松搜索、收藏和发送表情
        </p>
        
        <div class="actions">
          <a href="https://www.u-tools.cn/plugins/detail/%E8%A1%A8%E6%83%85%E7%BD%90%E5%A4%B4/" target="_blank" class="action-button primary">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            下载插件
          </a>
          <a href="/guide/getting-started" class="action-button secondary">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            使用文档
          </a>
        </div>
        
        <div class="hero-features">
          <div class="hero-feature">
            <span class="feature-number">1000+</span>
            <span class="feature-label">精选表情</span>
          </div>
          <div class="hero-feature-divider"></div>
          <div class="hero-feature">
            <span class="feature-number">5000+</span>
            <span class="feature-label">活跃用户</span>
          </div>
          <div class="hero-feature-divider"></div>
          <div class="hero-feature">
            <span class="feature-number">4.8</span>
            <span class="feature-label">用户评分</span>
          </div>
        </div>
      </div>
      
      <div class="hero-decoration">
        <div class="decoration-grid">
          <div class="grid-line horizontal" v-for="n in 3" :key="n"></div>
          <div class="grid-line vertical" v-for="n in 3" :key="n"></div>
        </div>
        <div class="decoration-circle"></div>
        <div class="decoration-dots">
          <span v-for="n in 12" :key="n"></span>
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
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="feature-icon-wrapper">
            <div class="feature-icon-bg"></div>
            <div class="feature-icon" v-html="feature.icon"></div>
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
          <div class="feature-card-decoration">
            <div class="decoration-line"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="stats-section">
      <div class="stats-container">
        <div class="stat-item">
          <div class="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
.home {
  min-height: 100vh;
  background: linear-gradient(180deg, var(--vp-c-bg) 0%, var(--vp-c-bg-soft) 100%);
  color: var(--vp-c-text-1);
  overflow-x: hidden;
  transition: background 0.3s ease, color 0.3s ease;
}

.hero {
  position: relative;
  padding: 120px 24px 100px;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
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
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 50% 50%, var(--vp-c-brand-soft) 0%, transparent 50%);
  opacity: 0.3;
  animation: rotate 30s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.bg-mesh {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(var(--vp-c-divider) 1px, transparent 1px),
    linear-gradient(90deg, var(--vp-c-divider) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.1;
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
  background: var(--vp-c-brand-1);
  border-radius: 50%;
  opacity: 0.4;
  animation: float 8s ease-in-out infinite;
}

.particle:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
.particle:nth-child(2) { top: 30%; right: 15%; animation-delay: 1s; }
.particle:nth-child(3) { top: 60%; left: 5%; animation-delay: 2s; }
.particle:nth-child(4) { top: 70%; right: 10%; animation-delay: 3s; }
.particle:nth-child(5) { top: 40%; left: 20%; animation-delay: 4s; }
.particle:nth-child(6) { top: 80%; right: 20%; animation-delay: 5s; }

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
  50% { transform: translateY(-20px) scale(1.2); opacity: 0.8; }
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.logo-wrapper {
  position: relative;
  display: inline-block;
}

.logo-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, var(--vp-c-brand-1) 0%, transparent 70%);
  opacity: 0;
  filter: blur(20px);
  transition: opacity 0.5s ease;
}

.logo-wrapper:hover .logo-glow {
  opacity: 0.5;
}

.logo {
  width: 180px;
  height: 180px;
  object-fit: contain;
  border-radius: 40px;
  box-shadow: 0 25px 80px var(--vp-c-brand-soft);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  z-index: 1;
}

.logo:hover {
  transform: translateY(-8px) scale(1.08) rotate(5deg);
  box-shadow: 0 30px 100px var(--vp-c-brand-soft);
}

html:not(.dark) .logo:hover {
  box-shadow: 0 30px 100px rgba(0, 0, 0, 0.2);
}

html.dark .logo:hover {
  box-shadow: 0 30px 100px rgba(0, 0, 0, 0.5);
}

.title {
  margin: 0 0 20px;
  line-height: 1.2;
}

.title-main {
  display: block;
  font-size: 72px;
  font-weight: 800;
  letter-spacing: -3px;
  background: linear-gradient(135deg, var(--vp-c-text-1) 0%, var(--vp-c-brand-1) 50%, var(--vp-c-text-2) 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 8s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.title-sub {
  display: block;
  font-size: 22px;
  font-weight: 400;
  color: var(--vp-c-text-3);
  letter-spacing: 6px;
  margin-top: 12px;
  text-transform: uppercase;
}

.tagline {
  font-size: 28px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 16px;
  letter-spacing: 1px;
}

.description {
  font-size: 20px;
  color: var(--vp-c-text-2);
  margin: 0 0 48px;
  line-height: 1.7;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 60px;
}

.action-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 36px;
  border-radius: 14px;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.action-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.action-button:hover::before {
  opacity: 1;
}

.action-button .icon {
  width: 22px;
  height: 22px;
  transition: transform 0.3s ease;
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
  box-shadow: 0 12px 32px var(--vp-c-brand-soft);
}

html:not(.dark) .action-button.primary:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}

html.dark .action-button.primary:hover {
  box-shadow: 0 12px 32px rgba(255, 255, 255, 0.2);
}

.action-button.secondary {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-divider);
}

.action-button.secondary:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 12px 32px var(--vp-c-brand-soft);
}

html:not(.dark) .action-button.secondary:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

html.dark .action-button.secondary:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
}

.hero-features {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 32px;
  background: var(--vp-c-bg-soft);
  border-radius: 20px;
  border: 1px solid var(--vp-c-divider);
  max-width: 600px;
  margin: 0 auto;
  backdrop-filter: blur(10px);
}

.hero-feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.hero-feature-divider {
  width: 1px;
  height: 40px;
  background: var(--vp-c-divider);
}

.feature-number {
  font-size: 28px;
  font-weight: 800;
  color: var(--vp-c-brand-1);
  letter-spacing: -1px;
}

.feature-label {
  font-size: 13px;
  color: var(--vp-c-text-2);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-decoration {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.decoration-grid {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  opacity: 0.1;
}

.grid-line {
  position: absolute;
  background: var(--vp-c-divider);
}

.grid-line.horizontal {
  width: 100%;
  height: 1px;
  left: 0;
}

.grid-line.horizontal:nth-child(1) { top: 33.33%; }
.grid-line.horizontal:nth-child(2) { top: 50%; }
.grid-line.horizontal:nth-child(3) { top: 66.66%; }

.grid-line.vertical {
  width: 1px;
  height: 100%;
  top: 0;
}

.grid-line.vertical:nth-child(4) { left: 33.33%; }
.grid-line.vertical:nth-child(5) { left: 50%; }
.grid-line.vertical:nth-child(6) { left: 66.66%; }

.decoration-circle {
  position: absolute;
  top: 10%;
  right: 5%;
  width: 300px;
  height: 300px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 50%;
  opacity: 0.2;
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.2; }
  50% { transform: scale(1.1); opacity: 0.3; }
}

.decoration-dots {
  position: absolute;
  bottom: 20%;
  left: 8%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  opacity: 0.3;
}

.decoration-dots span {
  width: 6px;
  height: 6px;
  background: var(--vp-c-brand-1);
  border-radius: 50%;
  animation: twinkle 2s ease-in-out infinite;
}

.decoration-dots span:nth-child(odd) {
  animation-delay: 0.5s;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}

.features {
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 24px 120px;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.features.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 48px;
  font-weight: 800;
  color: var(--vp-c-text-1);
  margin: 0 0 16px;
  letter-spacing: -1px;
}

.section-description {
  font-size: 18px;
  color: var(--vp-c-text-2);
  margin: 0;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.feature-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  padding: 40px 32px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  opacity: 0;
  transform: translateY(30px);
}

.features.visible .feature-card {
  animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slideUp {
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
  transition: transform 0.4s ease;
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-8px);
  box-shadow: 0 20px 60px var(--vp-c-brand-soft);
}

html:not(.dark) .feature-card:hover {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

html.dark .feature-card:hover {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.feature-icon-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 24px;
}

.feature-icon-bg {
  position: absolute;
  inset: -10px;
  background: var(--vp-c-brand-soft);
  border-radius: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover .feature-icon-bg {
  opacity: 1;
}

.feature-icon {
  position: relative;
  z-index: 1;
  width: 48px;
  height: 48px;
  margin: 0 auto;
  display: block;
  color: var(--vp-c-brand-1);
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
}

.feature-card h3 {
  font-size: 22px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 12px;
}

.feature-card p {
  font-size: 15px;
  color: var(--vp-c-text-2);
  line-height: 1.7;
  margin: 0;
}

.feature-card-decoration {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  pointer-events: none;
  overflow: hidden;
}

.feature-card-decoration .decoration-line {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
  border: 1px solid var(--vp-c-brand-soft);
  border-radius: 50%;
  opacity: 0;
  transition: all 0.4s ease;
}

.feature-card:hover .feature-card-decoration .decoration-line {
  opacity: 0.5;
  transform: translateX(-50%) scale(1.5);
}

.stats-section {
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 80px 24px;
}

.stats-container {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  background: var(--vp-c-bg);
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
}

.stat-item:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px var(--vp-c-brand-soft);
}

html:not(.dark) .stat-item:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

html.dark .stat-item:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.stat-icon {
  width: 56px;
  height: 56px;
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
  gap: 4px;
}

.stat-number {
  font-size: 20px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.stat-label {
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.footer-section {
  background: var(--vp-c-text-1);
  color: var(--vp-c-bg);
  padding: 64px 24px;
  text-align: center;
  transition: background 0.3s ease, color 0.3s ease;
}

.footer-content {
  max-width: 600px;
  margin: 0 auto;
}

.footer-text {
  font-size: 20px;
  margin: 0 0 28px;
  color: var(--vp-c-bg-soft);
}

.footer-text code {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  padding: 6px 16px;
  border-radius: 8px;
  font-family: 'SF Mono', Monaco, 'Courier New', monospace;
  font-size: 18px;
  font-weight: 600;
}

.footer-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-links a {
  color: var(--vp-c-bg-soft);
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--vp-c-bg);
}

.footer-links .divider {
  color: var(--vp-c-text-2);
  opacity: 0.5;
}

@media (max-width: 768px) {
  .hero {
    padding: 80px 20px 80px;
  }

  .logo {
    width: 140px;
    height: 140px;
  }

  .title-main {
    font-size: 48px;
  }

  .title-sub {
    font-size: 16px;
  }

  .tagline {
    font-size: 22px;
  }

  .description {
    font-size: 16px;
  }

  .actions {
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }

  .action-button {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  .hero-features {
    padding: 24px;
    gap: 24px;
    flex-wrap: wrap;
  }

  .hero-feature-divider {
    display: none;
  }

  .feature-number {
    font-size: 24px;
  }

  .features {
    padding: 60px 20px 80px;
  }

  .section-title {
    font-size: 36px;
  }

  .section-description {
    font-size: 16px;
  }

  .feature-card {
    padding: 32px 24px;
  }

  .stats-section {
    padding: 60px 20px;
  }

  .stat-item {
    padding: 20px;
  }

  .footer-section {
    padding: 48px 20px;
  }

  .footer-text {
    font-size: 18px;
  }

  .footer-text code {
    font-size: 16px;
    padding: 4px 12px;
  }

  .decoration-circle,
  .decoration-grid,
  .decoration-dots {
    display: none;
  }
}
</style>
