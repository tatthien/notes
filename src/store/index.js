import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import posts from './modules/posts'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    posts
  },
  strict: process.env.NODE_ENV !== 'production'
})
