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
    @import './../../assets/scss/global/variables';

    .til {
        margin: 20px 0;
        padding: 20px 0;
        border-bottom: 1px solid #efefef;
        .entry-meta {
            color: #000;
            font-size: 2em;
        }
        .entry-content {
            margin-top: 20px;
        }
    }
</style>
