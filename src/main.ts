import { createApp } from 'vue'
import App from './App.vue'
import routes from '@/router/index'
import store from '@/store/index'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)

app.use(routes).use(store).use(ElementPlus)

app.mount('#app')
