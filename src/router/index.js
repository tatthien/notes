import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import TIL from '@/components/TIL.vue'
import Post from '@/components/Post.vue'
import About from '@/components/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/til',
      name: 'til',
      component: TIL
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Post
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
