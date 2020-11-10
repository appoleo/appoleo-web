import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import axios from './axios/axios.js'
import './plugins/element.js'
import './assets/css/global.css'

Vue.prototype.$http = axios

Vue.config.productionTip = false

// eslint-disable no-new
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
