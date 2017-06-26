<template>
  <div id="app" class="site grid">
    <site-header></site-header>
      <main id="main" class="site-main" role="main">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
      </main><!-- .site-main -->
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from './components/Header.vue'
import SiteFooter from './components/Footer.vue'
export default {
  name: 'app',
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style lang="scss">
  @import "assets/scss/main.scss";
  #main {
      margin-top: 95px;
      margin-bottom: 40px;
  }
</style>
