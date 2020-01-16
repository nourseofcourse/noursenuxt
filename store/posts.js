import PostService from '@/services/PostService'

export const mutations = {
  SET_POSTS(state, posts) {
    state.all = posts
  },
  SET_POST(state, post) {
    state.post = post
  }
}

export const actions = {
  fetchPosts({ commit }) {
    return PostService.getPosts().then(response => {
      commit('SET_POSTS', response.data)
    })
  },
  fetchPost({ commit }, id) {
    return PostService.getPost(id).then(response => {
      // Pop the result because WordPress returns an array
      commit('SET_POST', response.data.pop())
    })
  },
  fetchPostBySlug({ commit}, slug) {
    return PostService.getPostBySlug(slug).then(response => {
      // Pop the result because WordPress returns an array
      commit('SET_POST', response.data.pop())
    })
  }
}
