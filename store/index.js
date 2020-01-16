export const getters = {
  getNextProject(state) {

  },
  getPrevProject(state) {

  }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('menu/fetchMenu')
    await dispatch('posts/fetchPosts')
    await dispatch('projects/fetchProjects')
  }
}
