import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App).mount('#app')
AOS.init({
    duration: 800,
    once: false, // animasi hanya sekali
    easing: 'ease-in-out',
    mirror: true
})
