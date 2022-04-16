import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import 'animate.css'
import './index.css'

let app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
