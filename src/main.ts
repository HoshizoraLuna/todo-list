import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

import App from './App.vue'
import router from './router'

import VueToast from 'vue-toast-notification'

import 'vue-toast-notification/dist/theme-default.css'
import './main.css'
import 'animate.css'

const protocol = import.meta.env.VITE_SERVER_PROTOCOL
const address = import.meta.env.VITE_SERVER_ADDRESS
const port = import.meta.env.VITE_SERVER_PORT

const serverAddress = `${protocol}://${address}:${port}`

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPersist)

app.config.globalProperties.$serverAddress = serverAddress

app.use(pinia).use(router).use(VueToast)
app.mount('#app')