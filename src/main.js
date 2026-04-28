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

// Konfigurasi AOS agar animasi berulang setiap scroll
AOS.init({
    duration: 800,
    once: false,     // false = animasi akan berulang
    mirror: true,    // true = animasi juga aktif saat scroll ke atas
    offset: 50,      // jarak trigger dari viewport
    easing: 'ease-in-out',
    delay: 0,
    disable: false
})

// Refresh AOS setelah komponen terload
window.addEventListener('load', () => {
    AOS.refresh()
})
