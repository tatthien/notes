import { cdaClient } from './../../api/contentful'

const state = {
  items: [],
  cacheItem: false,
  total: ''
}

const actions = {
  getPosts ({ commit }, payload) {
    let params = Object.assign({
      'content_type': 'blogPost',
      order: '-sys.createdAt'
    }, payload)

    cdaClient.getEntries(params).then((entries) => {
      commit('GET_POSTS', entries.items)
      commit('GET_TOTAL', entries.total)
    })
  },
  getPost ({ commit }, id) {
    cdaClient.getEntry(id)
      .then((entry) => {
        commit('GET_POST', entry)
      })
  }
}

const mutations = {
  'GET_POSTS' (state, items) {
    if (state.cacheItem) {
      let index = state.items.findIndex(item => item.sys.id === state.cacheItem.sys.id)
      state.items = state.items.slice(index, -1)
    }
    state.items = state.items.concat(items)
  },
  'GET_POST' (state, item) {
    state.cacheItem = item
    state.items.push(item)
  },
  'GET_TOTAL' (state, total) {
    state.total = total
  }
}

export default {
  state,
  actions,
  mutations
}
