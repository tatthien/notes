import { cdaClient } from './../../api/contentful'
const state = {
  items: [],
  total: ''
}

const actions = {
  getTils ({ commit }, payload) {
    let params = Object.assign({
      'content_type': 'til',
      order: '-sys.createdAt'
    }, payload)

    return new Promise((resolve) => {
      cdaClient.getEntries(params).then((entries) => {
        commit('GET_TILS', entries.items)
        commit('GET_TOTAL_TILS', entries.total)
        resolve()
      })
    })
  }
}

const mutations = {
  'GET_TILS' (state, items) {
    state.items = state.items.concat(items)
  },
  'GET_TOTAL_TILS' (state, total) {
    state.total = total
  }
}

export default { state, actions, mutations }
