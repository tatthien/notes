<template>
  <transition name="slide-r-l">
    <div class="single" v-if="this.post">
      <article class="post">
        <header class="entry-header">
          <h1 class="entry-title" v-text="post.fields.title"></h1>
        </header>

        <div class="entry-meta">
          <time>{{ post.fields.publishDate | formatDate }}</time>
        </div>

        <div class="entry-content" v-html="markedBody"></div>

        <div class="comment-ps">Tính năng bình luận đang được xây dựng.</div>
      </article>
    </div>
  </transition>
</template>

<script>
  import marked, { Renderer } from 'marked'
  import highlightjs from 'highlight.js'

  const renderer = new Renderer()
  renderer.code = (code, language) => {
    // Check whether the given language is valid for highlight.js.
    const validLang = !!(language && highlightjs.getLanguage(language))
    // Highlight only if the language is valid.
    const highlighted = validLang ? highlightjs.highlight(language, code).value : code
    // Render the highlighted code with `hljs` class.
    return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`
  }

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  })

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
      url () {
        return window.location.href
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
  .comment-ps {
    font-family: 'Cousine', monospace;
    font-size: 14px;
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid #efefef;
    strong {
      font-weight: 700;
    }
  }
</style>
