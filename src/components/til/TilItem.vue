<template>
    <article class="til post">
        <h2 class="entry-title">
            <time>{{ til.fields.publishDate | formatDate }}</time>
        </h2>
        <div class="entry-content" v-html="tilContent"></div>
    </article>
</template>

<script>
  import marked from 'marked'
  export default {
    props: ['til'],
    computed: {
      tilContent () {
        return marked(this.til.fields.body)
      }
    }
  }
</script>

<style lang="scss" scoped>
    .entry-content {
        margin-top: 20px;
    }
</style>
