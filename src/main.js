import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Menu, MenuItem, Submenu } from 'element-ui';
import './assets/css/global.css'

Vue.config.productionTip = false

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
