<template>
  <transition name="slide-r-l">
    <div class="til">
      <til-list></til-list>
    </div>
  </transition>
</template>

<script>
  import TilList from '@/components/til/TilList.vue'
  export default {
    components: {
      TilList
    }
  }
</script>

