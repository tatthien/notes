<template>
    <footer id="colophon" class="site-footer" role="contentinfo">
        <div class="container">
            <div id="copyright">
                <p>© 2017 Thien Nguyen. Made with <a href="https://vuejs.org" target="_blank" class="link">Vue.js</a> and <a
                        href="https://www.contentful.com/" target="_blank" class="link">Contentful</a></p>
            </div><!-- #copyright -->
        </div>
    </footer><!-- .site-footer -->
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
    .site-footer {
        color: #a9a9a9;
        padding: 50px 0;
        @media (max-width: 414px) {
            padding: 25px 0;
        }
    }
</style>
