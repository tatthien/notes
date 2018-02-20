<template>
    <transition name="item-slide-r-l">
        <article class="post" v-if="post">
            <h2 class="entry-title">
                <router-link :to="{ name: 'post', params: { id: post.sys.id }}" v-text="post.fields.title"></router-link>
            </h2>

            <div class="entry-meta">
                <time>{{ post.fields.publishDate | formatDate }}</time>
            </div>
        </article><!-- .post -->
    </transition>
</template>

<script>
  export default {
    props: ['post']
  }
</script>
