// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
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
      firebase.initializeApp(config)
    }
  }
})
