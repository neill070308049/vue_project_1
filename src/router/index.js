import Vue from 'vue'
import VueRouter from 'vue-router'
import Haha from '../views/Haha.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/haha',
    name: 'haha',
    component: () => import('../views/Haha.vue'),
    children: [
      {
        path: 'daxiao',
        name: 'daxiao',
        component: () => import('../views/Daxiao.vue')
      },
      {
        path: 'kuangxiao',
        name: 'kuangxiao',
        component: () => import('../views/Kuangxiao.vue')
      }
    ]
  },
  {
    path: '/xixi',
    name: 'xixi',
    component: () => import('../views/Xixi.vue'),
    children: [
      {
        path: ':id',
        name: 'xiaohua',
        component: () => import('../views/Xiaohua.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
