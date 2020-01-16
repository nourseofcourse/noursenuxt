import ProjectService from '@/services/ProjectService'

export const mutations = {
  SET_PROJECTS(state, projects) {
    state.all = projects
  },
  SET_PROJECT(state, project) {
    state.project = project
  }
}

export const actions = {
  fetchProjects({ commit }) {
    return ProjectService.getProjects().then(response => {
      commit('SET_PROJECTS', response.data)
    })
  },
  fetchProject({ commit }, id) {
    return ProjectService.getProject(id).then(response => {
      // Pop the result because WordPress returns an array
      commit('SET_PROJECT', response.data.pop())
    })
  },
  fetchProjectBySlug({ commit}, slug) {
    return ProjectService.getProjectBySlug(slug).then(response => {
      // Pop the result because WordPress returns an array
      commit('SET_PROJECT', response.data.pop())
    })
  }
}
