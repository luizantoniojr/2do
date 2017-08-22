<template>
  <div class="hero-head">
    <header class="nav">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <a class="nav-item fonte medium-text">2do</a>
          </a>
        </div>
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <app-auth></app-auth>
            </p>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import Auth from './Auth'
export default {
  name: 'app-nav',
  components: { 'app-auth': Auth }
}
</script>

<style scoped>
.fonte {
  font-family: 'Sedgwick Ave Display';
  font-size: 30px
}

.nav-left {
  overflow: hidden
}
</style>
