import request from '@/utils/request'

// 登录
// return promise对象
export const login = (data) => {
  return request({
    url: '/api/sys/login',
    method: 'POST',
    data
  })
}
