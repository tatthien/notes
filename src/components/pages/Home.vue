<template>
    <div class="home">
        <type-switcher></type-switcher>
        <post-list></post-list>
    </div>
</template>

<script>
  import TypeSwitcher from '@/components/TypeSwitcher.vue'
  import PostList from '@/components/post/PostList.vue'
  export default {
    components: {
      TypeSwitcher,
      PostList
    }
  }
</script>

