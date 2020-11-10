import axios from 'axios'

// 请求基础路径
axios.defaults.baseURL = 'http://8.131.76.94:3131'

// 请求拦截器
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

axios.interceptors.response.use(
  res => {
    return res
  },
  error => {
    this.$message.error('请求失败，请稍后重试！')
    return Promise.reject(error)
  }
)

export default axios
