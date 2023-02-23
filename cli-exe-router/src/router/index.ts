import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import introAll from '@/components/introAll.vue'
import introMM from '@/components/introZn.vue'
import introBB from '@/components/introSl.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,

  },{
    path: '/introAll',
    component: introAll,
    children:[{
      path: 'mm',
      name:'introMM',
      component: introMM,
    },{
      path: 'bb',
      name:'introBB',
      component: introBB,
    },

    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
