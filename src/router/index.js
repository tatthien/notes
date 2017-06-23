import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import TIL from '@/components/TIL.vue'
import Post from '@/components/Post.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    }
  ]
})
