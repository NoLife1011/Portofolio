<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  // Add scrolled class when page is scrolled
  isScrolled.value = window.scrollY > 50;
  
  // Update active nav link based on scroll position
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
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

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  const navbarCollapse = document.getElementById("navbarNav");
  if (navbarCollapse) {
    navbarCollapse.classList.remove("show");
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // Trigger initial check
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav :class="['navbar navbar-expand-lg fixed-top custom-navbar', { scrolled: isScrolled }]">
    <div class="container">
      <!-- BRAND with animated gradient -->
      <a class="navbar-brand fw-bold" href="#hero">
        <span class="brand-text">Farrel</span>
        <span class="brand-dot"></span>
      </a>

      <!-- TOGGLE BUTTON with animation -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <div class="hamburger" :class="{ open: isMobileMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <!-- MENU -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#about" @click="closeMobileMenu">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills" @click="closeMobileMenu">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects" @click="closeMobileMenu">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact" @click="closeMobileMenu">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* ===== VARIABLES ===== */
:root {
  --primary: #3b82f6;
  --primary-dark: #2563eb;
  --primary-glow: rgba(59, 130, 246, 0.4);
  --bg-dark: rgba(10, 10, 20, 0.85);
  --text-light: #efefef;
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ===== BASE NAVBAR ===== */
.custom-navbar {
  padding: 1rem 0;
  background: transparent;
  transition: var(--transition-smooth);
  backdrop-filter: blur(0px);
}

/* Scrolled state */
.custom-navbar.scrolled {
  background: var(--bg-dark);
  backdrop-filter: blur(12px);
  padding: 0.6rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* ===== BRAND STYLES ===== */
.navbar-brand {
  position: relative;
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #ffffff 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transition: var(--transition-smooth);
}

.custom-navbar.scrolled .navbar-brand {
  font-size: 1.5rem;
}

.brand-dot {
  position: absolute;
  bottom: 2px;
  right: -8px;
  width: 6px;
  height: 6px;
  background: var(--primary);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}

/* ===== NAVIGATION LINKS ===== */
.nav-link {
  position: relative;
  margin-left: 1.5rem;
  color: var(--text-light);
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0;
  transition: var(--transition-smooth);
  opacity: 0.85;
}

.nav-link:hover {
  opacity: 1;
  color: white;
}

/* Underline effect */
.nav-link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -2px;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), #60a5fa);
  transition: width 0.3s ease, left 0.3s ease;
  transform: translateX(-50%);
  border-radius: 2px;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 70%;
}

.nav-link.active {
  opacity: 1;
  color: white;
}

.nav-link.active::after {
  width: 70%;
  background: linear-gradient(90deg, var(--primary), #60a5fa);
}

/* ===== HAMBURGER MENU (Mobile) ===== */
.navbar-toggler {
  border: none;
  padding: 0.5rem;
  background: transparent;
  outline: none;
  box-shadow: none;
}

.navbar-toggler:focus {
  box-shadow: none;
  outline: none;
}

.hamburger {
  width: 28px;
  height: 20px;
  position: relative;
  cursor: pointer;
}

.hamburger span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: white;
  border-radius: 2px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

.hamburger span:nth-child(1) {
  top: 0px;
}

.hamburger span:nth-child(2) {
  top: 9px;
}

.hamburger span:nth-child(3) {
  top: 18px;
}

.hamburger.open span:nth-child(1) {
  top: 9px;
  transform: rotate(135deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.hamburger.open span:nth-child(3) {
  top: 9px;
  transform: rotate(-135deg);
}

/* ===== MOBILE MENU STYLES ===== */
@media (max-width: 991.98px) {
  .custom-navbar.scrolled {
    padding: 0.5rem 0;
  }
  
  .navbar-collapse {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(10, 10, 20, 0.95);
    backdrop-filter: blur(16px);
    padding: 1.5rem;
    border-radius: 0 0 20px 20px;
    box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    transform: translateY(-10px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  
  .navbar-collapse.show {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .navbar-nav {
    gap: 0.5rem;
    margin-bottom: 0;
  }
  
  .nav-item {
    width: 100%;
  }
  
  .nav-link {
    margin-left: 0;
    padding: 0.75rem 1rem;
    border-radius: 12px;
    display: block;
    text-align: center;
    font-size: 1.1rem;
  }
  
  .nav-link::after {
    display: none;
  }
  
  .nav-link:hover,
  .nav-link.active {
    background: rgba(59, 130, 246, 0.2);
    color: white;
  }
  
  .nav-link.active {
    background: rgba(59, 130, 246, 0.3);
  }
}

/* ===== ANIMATIONS ===== */
.custom-navbar {
  animation: slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* ===== DESKTOP HOVER EFFECTS ===== */
@media (min-width: 992px) {
  .custom-navbar {
    padding: 1.2rem 0;
  }
  
  .custom-navbar.scrolled {
    padding: 0.7rem 0;
  }
  
  /* Glow effect on brand */
  .navbar-brand:hover {
    text-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
  }
}

/* ===== SCROLL PROGRESS BAR ===== */
.custom-navbar::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), #60a5fa, var(--primary));
  transition: width 0.1s ease;
  pointer-events: none;
}

.custom-navbar.scrolled::before {
  width: var(--scroll-width, 0%);
}

/* Smooth scroll behavior for anchor links */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}
</style>

<script>
// Add scroll progress bar width update
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.documentElement.style.setProperty('--scroll-width', `${scrolled}%`);
  });
}
</script>