module.exports = {
  posts: state => {
    return state.posts.items
  },
  totalPosts: state => {
    return state.posts.total
  }
}
