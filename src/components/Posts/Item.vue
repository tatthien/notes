<template>
    <article class="post">
        <h2 class="entry-title">
            <a href="#" v-text="post.title"></a>
        </h2>
        <div class="entry-meta">
            <time v-text="post.date"></time>
        </div>
    </article><!-- .post -->
</template>

<script>
  export default {
    props: ['post']
  }
</script>

<style lang="scss" scoped>
    @import './../../assets/scss/global/variables';

    .post {
        margin: 20px 0;
        padding: 20px 0;
        border-bottom: 1px solid #efefef;
        .entry-title a {
            color: #000;
            font-size: 2em;
            transition: color .2s ease-in-out;
            &:hover {
                color: $color--primary-hover;
            }
        }
        .entry-meta {
            font-size: 12px;
        }
    }
</style>
