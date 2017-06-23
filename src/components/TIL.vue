<template>
    <div class="til">
        <type-switcher></type-switcher>
        <til-list></til-list>
    </div>
</template>

<script>
  import TypeSwitcher from './TypeSwitcher.vue'
  import TilList from './TIL/List.vue'
  export default {
    components: {
      TypeSwitcher,
      TilList
    }
  }
</script>

<style lang="scss" scoped>

</style>
