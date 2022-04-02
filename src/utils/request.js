import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use((config) => {
  // 添加icode
  config.headers.icode = '9A64CD26AF2337E9'
  // 必须返回config
  return config
})

export default service
