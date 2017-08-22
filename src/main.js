// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    firebase: null,
    token: null,
    user: null,
    signinError: null
  },
  mutations: {
    startFirebase (state, firebase) {
      state.firebase = firebase
    },
    changeToken (state, token) {
      state.token = token
    },
    changeUser (state, user) {
      state.user = user
    },
    changeSigninError (state, signinError) {
      state.signinError = signinError
    }
  },
  getters: {
    firebase: state => {
      return state.firebase
    },
    token: state => {
      return state.token
    },
    user: state => {
      return state.user
    },
    signinError: state => {
      return state.signinError
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  mounted: function () {
    this.iniciarFirebase()
  },
  methods: {
    iniciarFirebase: function () {
      var config = {
        apiKey: 'AIzaSyAMSYk5U_GLYOnaWstQcyYMhBi5WR2TXNw',
        authDomain: 'twodo-d55f6.firebaseapp.com',
        databaseURL: 'https://twodo-d55f6.firebaseio.com',
        projectId: 'twodo-d55f6',
        storageBucket: '',
        messagingSenderId: '898555721971'
      }
      this.$store.commit('startFirebase', firebase.initializeApp(config))
    }
  }
})
