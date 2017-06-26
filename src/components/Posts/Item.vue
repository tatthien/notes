<template>
    <transition name="slideup">
        <article class="post" v-if="post">
            <div class="entry-meta">
                <time>{{ post.fields.publishDate | formatDate }}</time>
            </div>
            <h2 class="entry-title">
                <router-link :to="{ name: 'post', params: { id: post.sys.id }}" v-text="post.fields.title"></router-link>
            </h2>
        </article><!-- .post -->
    </transition>
</template>

<script>
  export default {
    props: ['post']
  }
</script>

<style lang="scss" scoped>
    .slideup-enter-active {
        transition: all .5s ease;
    }

    .slideup-enter {
        transform: translateY(20px);
        opacity: 0;
    }
</style>
