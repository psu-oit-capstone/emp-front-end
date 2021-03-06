import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LogoutPage from './views/LogoutPage.vue'
import store from './store'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './components/LoginForm.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './components/LoginForm.vue')
    },
    {
      path: '/emergency-information',
      name: 'emergency-information',
      component: () => import(/* webpackChunkName: "emergency-information" */ './views/EmergencyInformation.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('./views/LogoutPage.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(store.getters.isLoggedIn) {
      next();
      return;
    }
    next('/login');
  }
  else {
    next();
  }
})

export default router;
