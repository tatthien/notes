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
    position: fixed;
    left: 0;
    right: 0;
    top:54px;
    z-index: 98;
    nav {
      display: flex;
      justify-content: space-between;
      background-color: #fff;
      a {
        color: rgba($color--dark, .4);
        padding: 5px 0;
        display: block;
        font-weight: 600;
        flex: 1;
        text-align: center;
        border-bottom: 1px solid rgba($color--dark, .2);
        border-right: 1px solid rgba($color--dark, .2);
        &:last-child {
          border-right: 0;
        }
        &:hover {
          color: $color--primary-hover;
        }
        &.router-link-active {
          color: #fff;
          background-color: $color--primary-hover;
        }
      }
    }
    @media screen and (min-width: 991px){
      position: absolute;
      left: -110px;
      top: 100px;
      nav {
        position: fixed;
        transform: rotate(90deg) translate3d(0,0,0);
        a {
          border: 0;
          margin-right: 15px;
          &.router-link-active {
            color: $color--primary-hover;
            background-color: transparent;
          }
        }
      }
    }
  }
</style>
