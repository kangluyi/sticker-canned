<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})
</script>

<template>
  <div class="home">
    <div class="hero" :class="{ loaded: isLoaded }">
      <div class="hero-content">
        <div class="logo-container">
          <img src="/logo.png" alt="表情罐头 Logo" class="logo">
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
      </div>
      <div class="hero-decoration">
        <div class="decoration-line"></div>
        <div class="decoration-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <div class="features">
      <div class="feature-card">
        <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
        <h3>快速搜索</h3>
        <p>支持关键词快速搜索你的表情包，一秒找到需要的表情</p>
      </div>
      <div class="feature-card">
        <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
        <h3>收藏管理</h3>
        <p>收藏常用表情，随时取用，让你的最爱触手可及</p>
      </div>
      <div class="feature-card">
        <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
        <h3>简洁界面</h3>
        <p>黑白配色，简约美观的界面设计，带来愉悦的使用体验</p>
      </div>
      <div class="feature-card">
        <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
        <h3>高效便捷</h3>
        <p>深度集成 uTools，随时呼出，即用即走</p>
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
  padding: 120px 24px 80px;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.hero.loaded {
  opacity: 1;
  transform: translateY(0);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
}

.logo {
  width: 160px;
  height: 160px;
  object-fit: contain;
  border-radius: 32px;
  box-shadow: 0 20px 60px var(--vp-c-brand-soft);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.logo:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.2);
}

html:not(.dark) .logo:hover {
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.15);
}

html.dark .logo:hover {
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.4);
}

.title {
  margin: 0 0 16px;
  line-height: 1.2;
}

.title-main {
  display: block;
  font-size: 64px;
  font-weight: 800;
  letter-spacing: -2px;
  background: linear-gradient(135deg, var(--vp-c-text-1) 0%, var(--vp-c-text-2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-sub {
  display: block;
  font-size: 20px;
  font-weight: 400;
  color: var(--vp-c-text-3);
  letter-spacing: 4px;
  margin-top: 8px;
  text-transform: uppercase;
}

.tagline {
  font-size: 24px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 12px;
}

.description {
  font-size: 18px;
  color: var(--vp-c-text-2);
  margin: 0 0 40px;
  line-height: 1.6;
}

.actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.action-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.action-button .icon {
  width: 20px;
  height: 20px;
}

.action-button.primary {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
  border-color: var(--vp-c-brand-1);
}

.action-button.primary:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--vp-c-brand-soft);
}

html:not(.dark) .action-button.primary:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

html.dark .action-button.primary:hover {
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.15);
}

.action-button.secondary {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-divider);
}

.action-button.secondary:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--vp-c-brand-soft);
}

html:not(.dark) .action-button.secondary:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

html.dark .action-button.secondary:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.hero-decoration {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.decoration-line {
  position: absolute;
  top: 20%;
  right: 10%;
  width: 200px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--vp-c-divider));
}

.decoration-dots {
  position: absolute;
  bottom: 30%;
  left: 10%;
  display: flex;
  gap: 8px;
}

.decoration-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--vp-c-divider);
}

.features {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px 80px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.feature-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px var(--vp-c-brand-soft);
}

html:not(.dark) .feature-card:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}

html.dark .feature-card:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

.feature-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
  display: block;
}

.feature-card h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 12px;
}

.feature-card p {
  font-size: 15px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0;
}

.footer-section {
  background: var(--vp-c-text-1);
  color: var(--vp-c-bg);
  padding: 48px 24px;
  text-align: center;
  transition: background 0.3s ease, color 0.3s ease;
}

.footer-content {
  max-width: 600px;
  margin: 0 auto;
}

.footer-text {
  font-size: 18px;
  margin: 0 0 24px;
  color: var(--vp-c-bg-soft);
}

.footer-text code {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  padding: 4px 12px;
  border-radius: 6px;
  font-family: 'SF Mono', Monaco, 'Courier New', monospace;
  font-size: 16px;
}

.footer-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
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
  opacity: 0.5;
}

@media (max-width: 768px) {
  .hero {
    padding: 80px 20px 60px;
  }

  .logo {
    width: 120px;
    height: 120px;
  }

  .title-main {
    font-size: 48px;
  }

  .title-sub {
    font-size: 16px;
  }

  .tagline {
    font-size: 20px;
  }

  .description {
    font-size: 16px;
  }

  .actions {
    flex-direction: column;
    align-items: center;
  }

  .action-button {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }

  .features {
    padding: 40px 20px 60px;
  }

  .feature-card {
    padding: 24px;
  }
}
</style>
