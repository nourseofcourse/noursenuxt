import PageService from '@/services/PageService'

export const mutations = {
  SET_PAGES(state, pages) {
    state.all = pages
  },
  SET_PAGE(state, page) {
    state.page = page
  }
}

export const actions = {
  fetchPages({ commit }) {
    return PageService.getPages().then(response => {
      commit('SET_PAGES', response.data)
    })
  },
  fetchPage({ commit }, id) {
    return PageService.getPage(id).then(response => {
      // Pop the result because WordPress returns an array
      commit('SET_PAGE', response.data.pop())
    })
  },
  fetchPageBySlug({ commit}, slug) {
    return PageService.getPageBySlug(slug).then(response => {
      // Pop the result because WordPress returns an array
      commit('SET_PAGE', response.data.pop())
    })
  }
}
