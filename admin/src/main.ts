// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import instance from '@/util/axios.config'
import 'element-plus/dist/index.css'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

// import icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)

// register all icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)

app.mount('#app')
