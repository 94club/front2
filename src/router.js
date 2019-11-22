import Vue from 'vue'
import router from 'vue-router'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./components/HelloWorld.vue'),
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('./components/home.vue'),
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('./components/404.vue')
    }
  ]
})
export default router