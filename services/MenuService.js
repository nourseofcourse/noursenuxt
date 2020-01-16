import axios from '@/plugins/axios'

export default {
  getMenu() {
    return axios.get('/menus/v1/locations/primary')
  }
}
