<template>
  <div>
    <button class="button is-danger vermelhor-google" type="button" v-on:click="openGoogleSigninModal">
      <i class="fa fa-google" aria-hidden="true"></i>
      <span class="text">Acessar com Google</span>
    </button>
    <p  class="salutation">
      <span>Olá, {{ userDisplayName }}</span>
      <a v-on:click="signout">
        <i class="fa fa-sign-out" aria-hidden="true"></i>
      </a>
    </p>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'app-auth',
  computed: mapGetters(['userIsSignIn', 'userDisplayName']),
  methods: {
    openGoogleSigninModal: function () {
      var _this = this
      var firebase = _this.$store.getters.firebase.firebase_
      var provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(function (result) {
        var token = result.credential.accessToken
        _this.$store.commit('changeToken', token)
        var user = result.user
        _this.$store.commit('changeUser', user)
        window.location.href = `${window.location.origin}/#/list`
      }).catch(function (error) {
        _this.$store.commit('changeSigninError', error)
      })
    },
    signout: function () {
      var firebase = this.$store.getters.firebase.firebase_
      firebase.auth().signOut().then(function () {
        window.location.href = window.location.origin
      }, function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.vermelhor-google {
  background-color: #ea4335
}

.vermelhor-google:hover {
  background-color: #ea4335
}

.text {
  padding-left: 10px;
}

.salutation {
  font-weight: bolder;
  color: rgba(245, 245, 245, .7);
}
</style>
