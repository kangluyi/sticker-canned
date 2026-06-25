import DefaultTheme from 'vitepress/theme'
import GreenCandyTheme from 'greencandy'
import 'greencandy/styles'
import Home from '../components/Home.vue'

export default {
  extends: DefaultTheme,
  ...GreenCandyTheme,
  enhanceApp({ app }) {
    app.component('Home', Home)
  }
}
