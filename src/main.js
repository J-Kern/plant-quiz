import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/tailwind.css'

const vm = createApp(App)

vm.use(router).mount('#app')
