import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import './plugins/element.js'

import './assets/css/global.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://8.131.76.94:3131'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

// eslint-disable no-new
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
