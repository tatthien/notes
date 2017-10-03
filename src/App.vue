<template>
  <div id="app" class="site grid">
    <the-header></the-header>
      <main id="main" class="site-main" role="main">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
      </main><!-- .site-main -->
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '@/components/shared/TheHeader.vue'
import TheFooter from '@/components/shared/TheFooter.vue'
export default {
  name: 'app',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
  @import "assets/scss/main.scss";
</style>
