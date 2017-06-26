import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import posts from './modules/posts'
import tils from './modules/tils'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    posts,
    tils
  },
  strict: process.env.NODE_ENV !== 'production'
})
