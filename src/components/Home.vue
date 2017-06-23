<template>
    <div class="home">
        <type-switcher></type-switcher>
        <post-list></post-list>
    </div>
</template>

<script>
  import TypeSwitcher from './TypeSwitcher.vue'
  import PostList from './Posts/List.vue'
  export default {
    components: {
      TypeSwitcher,
      PostList
    }
  }
</script>

<style lang="scss" scoped>

</style>
