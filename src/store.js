import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    }
  },
  actions: {
    // Called from the LoginForm
    login({commit}, user){
    return new Promise((resolve, reject) => {
      // Temporary state
      commit('auth_request');

      // Attempt login
      axios({url: 'http://localhost:8000/login/', data: user, method: 'POST' })
      .then(resp => {
        alert("Our token is: " + JSON.stringify(resp))

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
        alert("Path 1")
      })
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
})
