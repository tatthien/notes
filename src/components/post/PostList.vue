<template>
    <div class="posts" v-if="posts">
        <post-item v-for="(post, index) in posts" :key="index" :post="post"></post-item>
        <div class="loadmore" v-if="hasLoadMore">
            <a href="#" @click.prevent="loadMore">Load more</a>
        </div>
    </div>
</template>

<script>
  import bus from '@/utils/event-bus'
  import PostItem from './PostItem.vue'
  export default {
    components: {
      PostItem
    },
    data () {
      return {
        isLoadMore: false,
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
      hasLoadMore () {
        return this.posts.length < this.totalPosts
      }
    },
    created () {
      this.getItems()
    },
    methods: {
      getItems () {
        if (this.isLoadMore) return false
        this.isLoadMore = true
        bus.$emit('start_loading')
        this.$store.dispatch('getPosts', {
          limit: this.limit,
          skip: this.skip
        }).then(() => {
          this.isLoadMore = false
          bus.$emit('stop_loading')
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
</style>
