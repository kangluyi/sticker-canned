import DefaultTheme from 'vitepress/theme'
import Home from '../components/Home.vue'
import './custom.css'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Home', Home)
  }
}
