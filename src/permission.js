import router from '@/router'
import store from '@/store'
// import getters from '@/store/getters'

// 白名单
const whiteList = ['/login']

// 处理路由前置守卫
router.beforeEach((to, form, next) => {
  // 用户已登录
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    console.log(whiteList.indexOf(to.path))
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
