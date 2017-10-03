<template>
    <nav id="switch-type" class="site-main__switcher">
        <router-link :to="{ name: 'home' }" exact>Notes</router-link>
        <router-link :to="{ name: 'til' }" exact class="til">#TIL</router-link>
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
    #switch-type {
        margin-bottom: 40px;
        a {
            font-weight: 700;
            color: $color--dark;
            padding: 5px 0;
            margin-right: 10px;
            display: inline-block;
            &:hover,
            &.til {
                color: $color--primary-hover;
            }
            &.router-link-active {
                cursor: default;
                border-bottom: 2px solid $color--primary;
            }
        }
        @media (max-width: 414px) {
            margin-bottom: 20px;
        }
    }
</style>
