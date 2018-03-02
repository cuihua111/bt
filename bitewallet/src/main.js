// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from '@/assets/js/http.js'
import VueI18n from 'vue-i18n'
// import en from 'iview/dist/locale/en-US'
// import zh from 'iview/dist/locale/zh-CN'

Vue.use(iView)
Vue.use(VueI18n)
// Vue.locale = () => {}
Vue.prototype.$http = axios
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'cn', // 语言标识
  messages: {
    'cn': require('./assets/lang/zh.js'), // 中文语言包
    'en': require('./assets/lang/en.js') // 英文语言包
  }
})
// const messages = {
//   en: Object.assign(require('./assets/lang/en.js'), en),
//   zh: Object.assign(require('./assets/lang/zh.js'), zh)
// }
// // Create VueI18n instance with options
// const i18n = new VueI18n({
//   locale: 'zh', // set locale
//   messages // set locale messages
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
