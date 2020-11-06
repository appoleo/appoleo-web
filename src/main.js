import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Form, FormItem, Input, Button } from 'element-ui';
import './assets/css/global.css'

Vue.config.productionTip = false

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
