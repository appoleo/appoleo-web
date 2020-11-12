import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'
import Welcome from '../pages/Welcome.vue'
import Users from '../pages/user/Users.vue'
import Auths from '../pages/auth/Auths.vue'
import Rules from '../pages/auth/Rules.vue'
import Goods from '../pages/goods/Goods.vue'
import Categorys from '../pages/goods/Categorys.vue'
import GoodsCategorys from '../pages/goods/GoodsCategorys.vue'
import Orders from '../pages/order/Orders.vue'
import Datas from '../pages/data/Datas.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: Users },
        { path: '/auths', component: Auths },
        { path: '/rules', component: Rules },
        { path: '/goods', component: Goods },
        { path: '/categorys', component: Categorys },
        { path: '/goodsCategorys', component: GoodsCategorys },
        { path: '/orders', component: Orders },
        { path: '/datas', component: Datas }
      ]
    }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')
  return next()
})

export default router
