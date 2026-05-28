<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'
import Contact from './components/Contact.vue'
import { onMounted, ref, provide } from "vue"

// ===== THEME TOGGLE =====
const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

provide('isDark', isDark)
provide('toggleTheme', toggleTheme)

onMounted(() => {
  // Load saved theme
  const saved = localStorage.getItem('theme')
  if (saved === 'light') {
    isDark.value = false
    document.documentElement.setAttribute('data-theme', 'light')
  }

  // Scroll animation
  const sections = document.querySelectorAll(".section-anim")
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show")
    })
  }, { threshold: 0.15 })
  sections.forEach(sec => observer.observe(sec))

  // Active nav link
  const updateActiveLink = () => {
    const navLinks = document.querySelectorAll(".nav-link")
    const sectionEls = document.querySelectorAll("section[id]")
    let current = ""
    sectionEls.forEach(section => {
      const top = section.offsetTop - 100
      if (window.scrollY >= top && window.scrollY < top + section.offsetHeight) {
        current = section.getAttribute("id")
      }
    })
    navLinks.forEach(link => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) link.classList.add("active")
    })
  }
  window.addEventListener("scroll", updateActiveLink)
  updateActiveLink()
})
</script>

<template>
  <div class="app-wrapper">
    <Navbar />
    <section id="hero" class="hero-section"><Hero /></section>
    <section id="about" class="section section-anim"><div class="container"><About /></div></section>
    <section id="skills" class="section section-anim"><div class="container"><Skill /></div></section>
    <section id="projects" class="section section-anim"><div class="container"><Projects /></div></section>
    <section id="contact" class="section contact-section section-anim"><div class="container"><Contact /></div></section>
    <Footer />
  </div>
</template>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
</style>