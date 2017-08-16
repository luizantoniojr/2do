<template>
  <div class="hero-foot">
    <nav class="tabs">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>2do</strong> by Luiz Antônio Version 0.1.
            <a class="icon link-github" href="https://github.com/luizantoniojr">
              <i class="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>

<style scoped>
.footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: center;
}

.link-github {
  display: inline
}
</style>
