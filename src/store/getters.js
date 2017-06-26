module.exports = {
  posts: state => {
    return state.posts.items
  },
  totalPosts: state => {
    return state.posts.total
  },
  tils: state => {
    return state.tils.items
  },
  totalTils: state => {
    return state.tils.total
  }
}
