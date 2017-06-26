<template>
    <transition name="slideup">
        <article class="post" v-if="post">
            <h2 class="entry-title">
                <router-link :to="{ name: 'post', params: { id: post.sys.id }}" v-text="post.fields.title"></router-link>
            </h2>
            <div class="entry-meta">
                <time v-text="post.fields.publishDate"></time>
            </div>
        </article><!-- .post -->
    </transition>
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
            transition: color .2s ease-in-out;
            &:hover {
                color: $color--primary-hover;
            }
        }
    }

    .slideup-enter-active {
        transition: all .5s ease;
    }

    .slideup-enter {
        transform: translateY(20px);
        opacity: 0;
    }
</style>
