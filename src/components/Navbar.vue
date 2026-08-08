<script setup>
import { onMounted, onUnmounted, ref, inject } from "vue"

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isDark = inject('isDark')
const toggleTheme = inject('toggleTheme')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")
  let current = ""
  sections.forEach(section => {
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

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  const el = document.getElementById("navbarNav")
  if (el) el.classList.remove("show")
}

const scrollToHero = (e) => {
  e.preventDefault()
  document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })
  closeMobileMenu()
}

onMounted(() => { window.addEventListener("scroll", handleScroll); handleScroll() })
onUnmounted(() => window.removeEventListener("scroll", handleScroll))
</script>

<template>
  <nav :class="['navbar navbar-expand-lg fixed-top custom-navbar', { scrolled: isScrolled }]">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#hero" @click="scrollToHero">
        <span class="brand-text">FARREL</span>
        <span class="brand-dot"></span>
      </a>

      <div class="nav-right-mobile">
        <!-- Theme Toggle -->
        <button class="theme-btn" @click="toggleTheme" :title="isDark ? 'Light mode' : 'Dark mode'">
          <transition name="icon-swap" mode="out-in">
            <svg v-if="isDark" key="sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <svg v-else key="moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </transition>
        </button>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <div class="hamburger" :class="{ open: isMobileMenuOpen }">
            <span></span><span></span><span></span>
          </div>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item"><a class="nav-link" href="#hero" @click="scrollToHero">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#about" @click="closeMobileMenu">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#skills" @click="closeMobileMenu">Skills</a></li>
          <li class="nav-item"><a class="nav-link" href="#projects" @click="closeMobileMenu">Projects</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact" @click="closeMobileMenu">Contact</a></li>
          <!-- Theme toggle desktop -->
          <li class="nav-item ms-2 d-none d-lg-block">
            <button class="theme-btn" @click="toggleTheme">
              <transition name="icon-swap" mode="out-in">
                <svg v-if="isDark" key="sun2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
                <svg v-else key="moon2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              </transition>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.custom-navbar {
  padding: 1rem 0;
  background: transparent;
  border-bottom: 0 solid transparent;
  transition: all 0.3s ease;
}

.custom-navbar.scrolled {
  background: var(--bg-main);
  padding: 0.6rem 0;
  border-bottom: var(--border-w) solid var(--ink);
}

/* Brand */
.navbar-brand {
  position: relative;
  font-size: 1.7rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
}

.brand-text {
  -webkit-text-stroke: 1px var(--ink);
  color: var(--accent);
}

.brand-dot {
  display: inline-block;
  width: 9px;
  height: 9px;
  background: var(--accent);
  border: 2px solid var(--ink);
  border-radius: 50%;
  margin-bottom: 16px;
  animation: blink 2.5s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}

/* Nav links */
.nav-link {
  position: relative;
  margin-left: 0.5rem;
  color: var(--text-secondary) !important;
  font-weight: 700;
  font-size: 0.92rem;
  padding: 6px 14px !important;
  border-radius: 8px;
  border: 2px solid transparent;
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: var(--text-primary) !important;
  background: var(--accent-soft);
  border-color: var(--ink);
}

.nav-link.active {
  color: var(--text-primary) !important;
  background: var(--accent);
  border-color: var(--ink);
}

/* Theme Button */
.theme-btn {
  width: 38px;
  height: 38px;
  border-radius: 8px;
  border: 2px solid var(--ink);
  background: var(--bg-card);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.theme-btn:hover {
  background: var(--accent);
  color: #fff;
  transform: translate(-1px, -1px);
  box-shadow: 3px 3px 0 var(--ink);
}

/* Icon swap animation */
.icon-swap-enter-active, .icon-swap-leave-active { transition: all 0.2s ease; }
.icon-swap-enter-from { opacity: 0; transform: rotate(-80deg) scale(0.7); }
.icon-swap-leave-to { opacity: 0; transform: rotate(80deg) scale(0.7); }

/* Mobile nav-right */
.nav-right-mobile {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Hamburger */
.navbar-toggler {
  border: none;
  padding: 4px;
  background: transparent;
  outline: none;
  box-shadow: none !important;
}

.hamburger {
  width: 26px;
  height: 18px;
  position: relative;
  cursor: pointer;
}

.hamburger span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: var(--text-primary);
  border-radius: 2px;
  transition: 0.25s ease-in-out;
}

.hamburger span:nth-child(1) { top: 0; }
.hamburger span:nth-child(2) { top: 8px; }
.hamburger span:nth-child(3) { top: 16px; }

.hamburger.open span:nth-child(1) { top: 8px; transform: rotate(135deg); background: var(--accent); }
.hamburger.open span:nth-child(2) { opacity: 0; left: -40px; }
.hamburger.open span:nth-child(3) { top: 8px; transform: rotate(-135deg); background: var(--accent); }

/* Mobile menu */
@media (max-width: 991.98px) {
  .navbar-collapse {
    position: absolute;
    top: 100%;
    left: 0; right: 0;
    background: var(--bg-main);
    padding: 1.5rem;
    border: var(--border-w) solid var(--ink);
    border-top: none;
    border-radius: 0 0 16px 16px;
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

  .nav-link {
    margin-left: 0 !important;
    padding: 12px 16px !important;
    text-align: center;
    border-radius: 10px;
    font-size: 1rem !important;
    display: block;
  }

  /* Hide desktop theme btn on mobile - shown in nav-right-mobile */
  .d-none.d-lg-block { display: none !important; }
}

@media (min-width: 992px) {
  .nav-right-mobile .theme-btn { display: none; }
  .nav-right-mobile .navbar-toggler { display: none; }
}

/* Scroll progress */
.custom-navbar::after {
  content: '';
  position: absolute;
  bottom: -3px; left: 0;
  height: 3px;
  width: var(--scroll-width, 0%);
  background: var(--accent);
  transition: width 0.1s ease;
  pointer-events: none;
}

/* Slide down animation */
.custom-navbar {
  animation: slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideDown {
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
</style>

<script>
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (winScroll / height) * 100
    document.documentElement.style.setProperty('--scroll-width', `${scrolled}%`)
  })
}
</script>