import { createApp } from 'vue'
import './styles/tailwind.css'
import './styles/style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import config from './config'

if (config.hosts.includes(window.location.host)) {
    const app = createApp(App)

    app.use(router)
    app.use(store)
    app.mount('#app')
}
