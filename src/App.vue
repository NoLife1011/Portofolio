<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'
import Contact from './components/Contact.vue'
import { onMounted } from "vue";

onMounted(() => {
  // Animasi scroll untuk section
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
  
  // Active navigation link update
  const updateActiveLink = () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");
    let current = "";
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        current = section.getAttribute("id");
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  };
  
  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();
});
</script>

<template>
  <div class="app-wrapper">
    <Navbar />

    <!-- HERO SECTION -->
    <section id="hero" class="hero-section">
      <Hero />
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="section section-anim">
      <div class="container">
        <About />
      </div>
    </section>

    <!-- SKILLS SECTION -->
    <section id="skills" class="section section-anim">
      <div class="container">
        <Skill />
      </div>
    </section>

    <!-- PROJECTS SECTION -->
    <section id="projects" class="section section-anim">
      <div class="container">
        <Projects />
      </div>
    </section>

    <!-- CONTACT & FOOTER -->
    <section id="contact" class="section contact-section section-anim">
      <div class="container">
        <Contact />
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<style>
/* ===== RESET & GLOBAL ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #0a0e1a 0%, #0d0d1f 50%, #0a0e1a 100%);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #ffffff;
  overflow-x: hidden;
}

/* Wrapper utama dengan gradien konsisten */
.app-wrapper {
  background: linear-gradient(135deg, #0a0e1a 0%, #0d0d1f 50%, #0a0e1a 100%);
  min-height: 100vh;
  position: relative;
}

/* Decorative background elements */
.app-wrapper::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

/* ===== HERO SECTION ===== */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: transparent;
}

/* ===== COMMON SECTION STYLES ===== */
.section {
  min-height: 100vh;
  padding: 80px 0;
  position: relative;
  background: transparent;
}

/* Section dengan sedikit transisi warna untuk variasi */
.section:nth-child(even) {
  background: rgba(10, 14, 26, 0.5);
}

.contact-section {
  padding-bottom: 60px;
}

/* ===== CONTAINER ===== */
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
}

/* ===== ANIMATION CLASSES ===== */
.section-anim {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.section-anim.show {
  opacity: 1;
  transform: translateY(0);
}

/* ===== CUSTOM SCROLLBAR ===== */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a2e;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .section {
    padding: 60px 0;
  }
  
  .container {
    padding: 0 20px;
  }
  
  html {
    scroll-padding-top: 70px;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 50px 0;
  }
  
  .container {
    padding: 0 16px;
  }
}

/* ===== UTILITY CLASSES ===== */
.text-gradient {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Smooth transitions */
a, button, .nav-link, .btn {
  transition: all 0.3s ease;
}

/* Selection color */
::selection {
  background: rgba(59, 130, 246, 0.3);
  color: white;
}
</style>