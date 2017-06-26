<template>
    <transition name="fade">
    <div class="single" v-if="this.post">
        <article class="post">
            <header class="entry-header">
                <h1 class="entry-title" v-text="post.fields.title"></h1>
            </header>
            <div class="entry-meta">
                <time v-text="post.fields.publishDate"></time>
            </div>
            <div class="entry-content" v-html="markedBody"></div>
        </article>
    </div>
    </transition>
</template>

<script>
  import marked from 'marked'
  export default {
    data () {
      return {}
    },
    computed: {
      id () {
        return this.$route.params.id
      },
      post () {
        let post = this.$store.getters.posts.filter(post => post.sys.id === this.id)
        if (post.length === 0) { return false }
        return post[0]
      },
      markedBody () {
        return marked(this.post.fields.body)
      }
    },
    created () {
      let post = this.$store.getters.posts.filter(post => post.sys.id === this.id)
      if (post.length === 0) { this.getPost() }
    },
    methods: {
      getPost () {
        this.$store.dispatch('getPost', this.id)
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "./../assets/scss/global/variables";

    .single {
        .entry-content {
            margin-top: 50px;
        }
    }

    /* Transition */
    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s ease-in-out;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0
    }
</style>
