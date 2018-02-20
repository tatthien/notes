<template>
    <transition name="slide-r-l">
      <div class="home">
        <post-list></post-list>
      </div>
    </transition>
</template>

<script>
  import PostList from '@/components/post/PostList.vue'
  export default {
    components: {
      PostList
    }
  }
</script>
