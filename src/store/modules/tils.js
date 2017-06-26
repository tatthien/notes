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

    cdaClient.getEntries(params).then((entries) => {
      console.log(entries.items)
      commit('GET_TILS', entries.items)
      commit('GET_TOTAL_TILS', entries.total)
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
