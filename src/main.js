import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import styles from './styles/styles.css'
import axios from 'axios'

Vue.config.productionTip = false

// Set our headers to include Auth tokens by default
if(localStorage.getItem('token'))
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
