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
import NProgress from 'nprogress'
import bus from './utils/event-bus'
import TheHeader from '@/components/shared/TheHeader.vue'
import TheFooter from '@/components/shared/TheFooter.vue'
export default {
  name: 'app',
  components: {
    TheHeader,
    TheFooter
  },
  created () {
    bus.$on('start_loading', function () {
      NProgress.start()
    })
    bus.$on('stop_loading', function () {
      NProgress.done()
    })
  }
}
</script>

<style lang="scss">
  @import "assets/scss/main.scss";
  @import "~highlight.js/styles/monokai-sublime.css";
  @import "~nprogress/nprogress.css";
  // Custom nprogress bar
  #nprogress .bar {
    background: $color--primary !important;
  }
  #nprogress .peg {
    box-shadow: none !important;
  }
  #nprogress .spinner-icon {
    border-top-color: $color--primary !important;
    border-left-color: $color--primary !important;
  }
</style>
