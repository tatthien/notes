<template>
  <div id="app" class="site grid">
    <site-header></site-header>
      <main id="main" class="site-main" role="main">
        <type-switcher></type-switcher>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
      </main><!-- .site-main -->
    <site-footer></site-footer>
  </div>
</template>

<script>
import NProgress from 'nprogress'
import bus from './utils/event-bus'
import SiteHeader from '@/components/shared/SiteHeader.vue'
import SiteFooter from '@/components/shared/SiteFooter.vue'
import TypeSwitcher from '@/components/TypeSwitcher.vue'
export default {
  name: 'app',
  components: {
    SiteHeader,
    SiteFooter,
    TypeSwitcher
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
