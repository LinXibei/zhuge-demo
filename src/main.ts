import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import sensors from "./sensors"

const app = createApp(App);
// app.config.globalProperties.$zhuge = window.zhuge;
app.mount('#app')