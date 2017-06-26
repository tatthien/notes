<template>
    <div class="tils">
        <til-item v-for="(til, index) in tils" :key="index" :til="til"></til-item>
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
        tils: [
          {
            date: '23/6/2017',
            content: '<p>To day is Friday</p><p>Tomorrow is Saturday</p>'
          },
          {
            date: '23/6/2017',
            content: '<p>To day is Friday</p><p>Tomorrow is Saturday</p>'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
