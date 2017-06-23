<template>
    <transition name="slide">
        <div class="posts">
            <post-item v-for="(post, index) in posts" :key="index" :post="post"></post-item>
            <div class="loadmore" v-if="isLoadmore">
                <a href="#" @click.prevent="loadMore">Load more</a>
            </div>
        </div>
    </transition>
</template>

<script>
  import PostItem from './Item.vue'
  export default {
    components: {
      PostItem
    },
    data () {
      return {
        limit: 10,
        skip: 0
      }
    },
    computed: {
      posts () {
        return this.$store.getters.posts
      },
      totalPosts () {
        return this.$store.getters.totalPosts
      },
      isLoadmore () {
        return this.posts.length < this.totalPosts
      }
    },
    created () {
      this.getItems()
    },
    methods: {
      getItems () {
        this.$store.dispatch('getPosts', {
          limit: this.limit,
          skip: this.skip
        })
      },
      loadMore () {
        this.skip += this.limit
        this.getItems()
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import './../../assets/scss/global/variables';

    .loadmore {
        margin-top: 30px;
        text-align: center;
        a {
            font-size: 18px;
            color: $color--primary;
            &:hover {
                color: $color--primary-hover
            }
        }
    }
</style>
