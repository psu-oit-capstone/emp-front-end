import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import styles from './styles/styles.css'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
