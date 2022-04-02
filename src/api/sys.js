import request from '@/utils/request'

// 登录
// return promise对象
export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
