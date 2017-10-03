<template>
    <div class="til">
        <type-switcher></type-switcher>
        <til-list></til-list>
    </div>
</template>

<script>
  import TypeSwitcher from '@/components/TypeSwitcher.vue'
  import TilList from '@/components/til/TilList.vue'
  export default {
    components: {
      TypeSwitcher,
      TilList
    }
  }
</script>

