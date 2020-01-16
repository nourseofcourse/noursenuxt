import MenuService from '@/services/MenuService'

export const state = () => ({
  menuOpen: false,
  status: ''
})

export const mutations = {
  TOGGLE_MENU(state) {
    state.menuOpen = !state.menuOpen
  },
  UPDATE_STATUS(state, status) {
    state.status = status
  },
  SET_MENU(state, menu) {
    state.items = menu
  }
}

export const actions = {
  toggleMenu({ commit }) {
    commit('TOGGLE_MENU')
  },
  statusUpdate({ commit }, status) {
    commit('UPDATE_STATUS', status)
  },
  fetchMenu({ commit }) {
    return MenuService.getMenu().then(response => {
      commit('SET_MENU', response.data.items)
    })
  }
}
