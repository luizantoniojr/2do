<template>
  <div id="app">
    <section class="hero is-dark is-fullheight">
      <app-nav></app-nav>
      <router-view></router-view>
      <app-footer></app-footer>
    </section>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    'app-nav': Nav,
    'app-footer': Footer
  }
}
</script>