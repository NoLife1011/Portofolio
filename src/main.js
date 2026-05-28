import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.mount('#app')

AOS.init({
  duration: 800,
  once: false,
  mirror: true,
  offset: 50,
  easing: 'ease-in-out',
})

window.addEventListener('load', () => { AOS.refresh() })