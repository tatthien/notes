<template>
    <div class="posts">
        <post-item v-for="(post, index) in posts" :key="index" :post="post"></post-item>
    </div>
</template>

<script>
  import PostItem from './Item.vue'
  export default {
    components: {
      PostItem
    },
    data () {
      return {
        posts: [
          {
            title: 'TIL – Engineering Best Practices from 10up',
            date: 'May 10, 2017'
          },
          {
            title: '🐄 🍉 Vì sao con bò ghét màu đỏ?',
            date: 'May 9, 2017'
          },
          {
            title: 'TIL – Engineering Best Practices from 10up',
            date: 'May 10, 2017'
          },
          {
            title: '🐄 🍉 Vì sao con bò ghét màu đỏ?',
            date: 'May 9, 2017'
          },
          {
            title: 'TIL – Engineering Best Practices from 10up',
            date: 'May 10, 2017'
          },
          {
            title: '🐄 🍉 Vì sao con bò ghét màu đỏ?',
            date: 'May 9, 2017'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
