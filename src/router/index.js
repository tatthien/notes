import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '@/components/pages/Home')
const SingleTil = () => import(/* webpackChunkName: "til" */ '@/components/pages/SingleTil')
const SinglePost = () => import(/* webpackChunkName: "post" */ '@/components/pages/SinglePost')

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
      component: SingleTil
    },
    {
      path: '/post/:id',
      name: 'post',
      component: SinglePost
    }
  ]
})
