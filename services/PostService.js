import axios from '@/plugins/axios'

export default {
  getPosts() {
    return axios.get('/wp/v2/posts')
  },
  getPost(id) {
    return axios.get('/wp/v2/posts/' + id)
  },
  getPostBySlug(slug) {
    return axios.get('/wp/v2/posts?slug=' + slug)
  }
}
