import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')
export default {
  getUsers() {
    return apiHelper.get('/admin/users', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
}