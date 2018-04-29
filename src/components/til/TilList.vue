<template>
    <div class="posts" v-if="posts">
        <til-item v-for="(post, index) in posts" :key="index" :til="post"></til-item>
        <div class="loadmore" v-if="hasLoadMore">
            <a href="#" @click.prevent="loadMore">Load more</a>
        </div>
    </div>
</template>

<script>
  import TilItem from './TilItem.vue'
  import bus from '@/utils/event-bus'
  export default {
    components: {
      TilItem
    },
    data () {
      return {
        isLoadMore: false,
        limit: 40,
        skip: 0
      }
    },
    computed: {
      posts () {
        return this.$store.getters.tils
      },
      totalPosts () {
        return this.$store.getters.totalTils
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
        this.$store.dispatch('getTils', {
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

