import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// Set our headers to include Auth tokens by default
if(localStorage.getItem('token'))
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')

// Make Axios play nice with Django CSRF
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token) {
      state.status = 'success'
      state.token = token
    },
    auth_error(state) {
      state.status = 'error'
    },
    auth_logout(state) {
      state.token = ''
      state.status = 'not logged in'
    }
  },
  actions: {
    // Called from the LoginForm
    login({commit}, user) {
      return new Promise((resolve, reject) => {
        // Temporary state
        commit('auth_request');

        // Attempt login
        axios({url: 'http://localhost:8000/login/', data: user, method: 'POST' })
        .then(resp => {
          // Extract token and save in Vuex store
          const token = resp.data
          localStorage.setItem('token', token)

          // Set our headers to include Auth tokens by default
          axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')

          // Commit the state to the Vuex store
          commit('auth_success', token)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    logout({commit}){
      return new Promise((resolve, reject) => {
        commit('auth_logout')
        delete axios.defaults.headers.common['Authorization']
        localStorage.removeItem('token')
        resolve()
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
})
