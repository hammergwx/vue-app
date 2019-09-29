import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/list',
      name: 'List',
      component: () => import('./views/List.vue')
    },
    {
      path: '/car',
      name: 'Car',
      component: () => import('./views/Car.vue')
    },
    {
      path: '/',
      redirect: '/list'
    }
  ]
})
