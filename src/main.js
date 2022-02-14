import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store)
app.use(router)
// 挂载事务总线
app.config.globalProperties.$bus = new mitt()
app.mount('#app')
