import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import router from './router'
import store from './store'
import VueLazyloadNext from 'vue-lazyload-next'
import toast from '@/components/common/toast'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueLazyloadNext)
app.use(toast)
// 挂载事务总线
app.config.globalProperties.$bus = new mitt()
app.mount('#app')
