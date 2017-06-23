<template>
    <nav id="switch-type" class="site-main__switcher">
        <a href="#"
           id="blog"
           title="Blog Posts"
           :class="{ active: type === 'blog' }"
           @click.prevent="change('blog')"
        >Blog
        </a>
        <a href="#"
           id="til"
           title="Today I Learned"
           :class="{ active: type === 'til' }"
           @click.prevent="change('til')"
        >TIL;
        </a>
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
            &.active {
                background-color: $color--primary;
                color: #fff;
                cursor: default;
            }
        }
    }
</style>
