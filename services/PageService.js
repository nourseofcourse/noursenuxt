import axios from '@/plugins/axios'

export default {
  getPages() {
    return axios.get('/wp/v2/pages')
  },
  getPage(id) {
    return axios.get('/wp/v2/pages/' + id)
  },
  getPageBySlug(slug) {
    return axios.get('/wp/v2/pages?slug=' + slug)
  }
}
