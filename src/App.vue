<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'
import Contact from './components/Contact.vue'
import Home from './views/Home.vue'
import { onMounted } from "vue";
onMounted(() => {
  const sections = document.querySelectorAll(".section-anim");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach(sec => observer.observe(sec));
});
</script>

<template>
  <Navbar />

  <!-- HERO -->
  <section id="hero" class="hero d-flex align-items-center">
    <div class="container text-white">
      <Hero />
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about" class="section">
    <div class="container text-white">
      <About />
    </div>
  </section>

<Skill />

  <!-- PROJECTS -->
  <section id="projects" class="section">
    <div class="container text-white">
      <Projects />
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="section">
    <div class="container text-white">
      <Contact />
    </div>

    <Footer />
  </section>
</template>

<style>
body {
  margin: 0;
  background: #0d0d1f;
  font-family: sans-serif;
}

/* HERO (biar navbar nyatu) */
.hero {
  min-height: 100vh;
  background: radial-gradient(
    circle at 80% 20%,
    rgba(59, 130, 246, 0.15),
    transparent 40%
  ),
  #0d0d1f;
}

/* Section biasa */
.section {
  min-height: 100vh;
  padding: 100px 0;
  background: #0a0a14;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

.section-anim {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

/* aktif saat muncul */
.section-anim.show {
  opacity: 1;
  transform: translateY(0);
}
</style>