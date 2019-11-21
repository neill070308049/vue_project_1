import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index.vue'),
    children:[
        { 
            path: 'news',
            name: 'news',
            component: () => import('../views/News.vue'),
            children:[
              {
                path: 'zhengce',
                name: 'zhengce',
                component: () => import('../views/Zhengce.vue')
              },
              {
                path: '*',
                redirect: {
                  name: 'zhengce'
                }
              }
            ]
        },
        { 
            path: ':id',
            name: 'shenpishixiang',
            component: () => import('../views/Shenpishixiang.vue'),
        },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
