<template>
    <article class="til post">
        <h2 class="entry-title">
            <time>{{ til.date }}</time>
        </h2>
        <div class="entry-content" v-html="til.content"></div>
    </article>
</template>

<script>
  export default {
    props: ['til']
  }
</script>

<style lang="scss" scoped>
</style>
