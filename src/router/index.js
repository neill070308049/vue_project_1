import Vue from 'vue'
import VueRouter from 'vue-router'
import Haha from '../views/Haha.vue'
import Xixi from '../views/Xixi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/haha',
    name: 'haha',
    component: Haha
  },
  {
    path: '/xixi',
    name: 'xixi',
    component: Xixi
  }
]

const router = new VueRouter({
  routes
})

export default router
