import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/style/index.scss'
// 导入 svgIcon
import installIcons from '@/icons/index'
// 导入路由鉴权
import './permission'

const app = createApp(App)
installIcons(app)

app.use(ElementPlus).use(store).use(router).mount('#app')
