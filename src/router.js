import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './components/dumbLogin.vue'),
    },
    {
      path: '/EARegistry',
      name: 'EA-Registry',
      component: () => import(/* webpackChunkName: "EA-Registry" */ './components/evac_assist.vue')
    },
  ]
})
