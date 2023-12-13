import { createApp, onMounted } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'

// The app needs to use the router before being mounted.
createApp(App).use(router).mount('#app')
