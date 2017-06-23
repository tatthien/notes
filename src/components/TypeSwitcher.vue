<template>
    <nav id="switch-type" class="site-main__switcher">
        <router-link :to="{ name: 'home' }" exact>Blog</router-link>
        <router-link :to="{ name: 'til' }" exact>TIL</router-link>
    </nav><!-- end #switch-type -->
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
    @import "./../assets/scss/global/variables";
    #switch-type {
        margin-bottom: 40px;
        a {
            font-weight: 700;
            color: #000;
            padding: 8px 20px;
            border-radius: 3px;
            display: inline-block;
            transition: all .2s ease-in-out;
            &:hover {
                color: $color--primary-hover;
            }
            &.router-link-active {
                background-color: $color--primary;
                color: #fff;
                cursor: default;
            }
        }
    }
</style>
