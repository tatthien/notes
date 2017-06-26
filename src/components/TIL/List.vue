<template>
    <div class="posts" v-if="posts">
        <til-item v-for="(post, index) in posts" :key="index" :til="post"></til-item>
        <div class="loadmore" v-if="hasLoadMore">
            <a href="#" @click.prevent="loadMore" v-text="loadMoreText"></a>
        </div>
    </div>
</template>

<script>
  import TilItem from './Item.vue'
  export default {
    components: {
      TilItem
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
        return this.$store.getters.tils
      },
      totalPosts () {
        return this.$store.getters.totalTils
      },
      hasLoadMore () {
        return this.posts.length < this.totalPosts
      },
      loadMoreText () {
        return this.isLoadMore ? 'Loading...' : 'Load more'
      }
    },
    created () {
      this.getItems()
    },
    methods: {
      getItems () {
        if (this.isLoadMore) return false
        this.isLoadMore = true
        this.$store.dispatch('getTils', {
          limit: this.limit,
          skip: this.skip
        }).then(() => {
          this.isLoadMore = false
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
