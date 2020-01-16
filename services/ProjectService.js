import axios from '@/plugins/axios'

export default {
  getProjects() {
    return axios.get('/wp/v2/projects')
  },
  getProject(id) {
    return axios.get('/wp/v2/projects/' + id)
  },
  getProjectBySlug(slug) {
    return axios.get('/wp/v2/projects?slug=' + slug)
  }
}
