<template>
  <div class="type-switcher">
    <nav>
      <router-link :to="{ name: 'home' }" exact>Notes</router-link>
      <router-link :to="{ name: 'til' }" exact class="til">TIL</router-link>
    </nav><!-- end #switch-type -->
  </div>
</template>

<script>
  export default {
    computed: {},
    data () {
      return {
        type: 'blog'
      }
    },
    methods: {
      change (type) {
        this.type = type
      }
    }
  }
</script>

<style lang="scss" scoped>
  .type-switcher {
    @media screen and (min-width: 991px){
      position: absolute;
      left: -110px;
      top: 100px;
      nav {
        position: fixed;
        transform: rotate(90deg) translate3d(0,0,0);
      }
    }
    a {
      color: rgba($color--dark, .4);
      padding: 5px 0;
      margin-right: 15px;
      display: inline-block;
      font-weight: 600;
      &:hover {
          color: $color--primary-hover;
      }
      &.router-link-active {
          color: $color--primary-hover;
      }
    }
  }
</style>
