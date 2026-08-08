<template>
  <div class="hero d-flex align-items-center">
    <div class="hero-grid"></div>

    <div class="container">
        <div class="row align-items-center g-4">

        <!-- LEFT -->
        <div class="col-lg-6 col-md-12 order-2 order-lg-1 ps-lg-4 ps-3">
          <div class="hero-content">

            <div class="hero-badge comic-font mb-3" data-aos="fade-up" data-aos-delay="100">
              <span class="badge-pulse"></span>
              Available for projects
            </div>

            <h1 class="hero-title" data-aos="fade-up" data-aos-delay="200">
              Hi, I'm <span class="gradient-text">Farrel</span>
            </h1>

            <div class="hero-role" data-aos="fade-up" data-aos-delay="300">
              <span class="role-typed">{{ typed }}</span>
              <span class="cursor-blink">|</span>
            </div>

            <p class="hero-desc" data-aos="fade-up" data-aos-delay="400">
              Seorang pelajar berusia 17 tahun yang membangun pengalaman web modern menggunakan Vue.js — berfokus pada kode yang rapi, UI yang presisi hingga ke detail terkecil (pixel-perfect), serta interaksi yang mulus.
            </p>

            <div class="hero-btns" data-aos="fade-up" data-aos-delay="500">
              <a href="#projects" class="btn-primary-hero comic-btn">
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#contact" class="btn-outline-hero comic-btn">Let's Talk</a>
            </div>

          </div>
        </div>

        <!-- RIGHT - POP-ART PHOTO -->
         <div class="col-lg-6 d-none d-lg-flex justify-content-start order-1 order-lg-2 ps-5" data-aos="zoom-in" data-aos-delay="300">
          <div class="photo-wrapper">

            <!-- comic caption tab -->
            <div class="photo-caption comic-font">IT'S-A ME, FARREL!</div>

            <div class="pop-art-frame">
              <!-- action burst behind photo -->
              <svg class="burst-bg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <polygon points="200,0 230,150 400,100 260,200 400,300 230,250 200,400 170,250 0,300 140,200 0,100 170,150"
                  fill="var(--accent)" opacity="0.9"/>
              </svg>

              <!-- swap this src for your own photo -->
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=700&h=800&fit=crop"
                alt="Farrel"
                class="hero-photo"
              />

              <!-- halftone dot overlay for pop-art texture -->
              <div class="halftone-overlay"></div>

              <!-- thick comic border + corner rivets -->
              <span class="rivet rivet-tl"></span>
              <span class="rivet rivet-tr"></span>
              <span class="rivet rivet-bl"></span>
              <span class="rivet rivet-br"></span>
            </div>

            <div class="photo-tag comic-font">WEB DEV</div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const typed = ref('')
const roles = ['Web Developer', 'Vue.js Enthusiast', 'UI Craftsman', 'Student Builder']
let rIdx = 0, cIdx = 0, del = false

const loop = () => {
  const cur = roles[rIdx]
  if (!del) {
    typed.value = cur.slice(0, ++cIdx)
    if (cIdx === cur.length) { del = true; setTimeout(loop, 1800); return }
  } else {
    typed.value = cur.slice(0, --cIdx)
    if (cIdx === 0) { del = false; rIdx = (rIdx + 1) % roles.length }
  }
  setTimeout(loop, del ? 48 : 78)
}

onMounted(() => { setTimeout(loop, 400) })
</script>

<style scoped>
.hero {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 100px 0 80px;
}

.hero-grid {
  position: absolute; inset: 0; pointer-events: none;
  background-image: radial-gradient(var(--halftone-color) 1.6px, transparent 1.6px);
  background-size: 18px 18px;
}

/* ===== LEFT ===== */
.hero-content { position: relative; z-index: 2; }

.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--accent);
  border: var(--border-w) solid var(--ink);
  padding: 7px 18px; border-radius: 40px;
  font-size: 0.95rem; color: #fff;
  box-shadow: var(--panel-shadow-sm);
  transform: rotate(-2deg);
}

.badge-pulse {
  width: 8px; height: 8px; background: #fff;
  border-radius: 50%; border: 1.5px solid var(--ink);
  animation: pg 1.8s infinite;
}
@keyframes pg {
  0%,100%{opacity:1;transform:scale(1)}
  50%{opacity:0.4;transform:scale(1.5)}
}

.hero-title {
  font-size: clamp(2.8rem, 6vw, 4.8rem);
  font-weight: 900; line-height: 1;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  -webkit-text-stroke: 1px var(--ink);
}

.hero-role {
  display: flex; align-items: center; gap: 2px;
  margin-bottom: 1.4rem; min-height: 2rem;
}

.role-typed {
  font-family: 'Bangers', cursive;
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: var(--accent);
  -webkit-text-stroke: 0.6px var(--ink);
}

.cursor-blink {
  font-size: 1.3rem; color: var(--ink);
  animation: bc 1s step-end infinite;
}
@keyframes bc { 0%,100%{opacity:1} 50%{opacity:0} }

.hero-desc {
  font-size: 0.92rem; line-height: 1.8;
  color: var(--text-secondary); max-width: 430px;
  margin-bottom: 2rem;
}

.hero-btns { display: flex; gap: 14px; flex-wrap: wrap; }

.btn-primary-hero {
  padding: 12px 26px;
  background: var(--accent);
  border-radius: 12px; font-weight: 800; font-size: 0.9rem;
  color: #fff; text-decoration: none;
}
.btn-primary-hero svg { transition: transform 0.3s ease; }
.btn-primary-hero:hover svg { transform: translateX(4px); }

.btn-outline-hero {
  padding: 11px 24px; background: var(--bg-card);
  border-radius: 12px; font-weight: 700; font-size: 0.9rem;
  color: var(--text-primary); text-decoration: none;
}

/* ===== POP-ART PHOTO ===== */
.photo-wrapper {
  position: relative;
  max-width: 420px;
  width: 100%;
  margin-left: 0;
  margin-right: auto;
  padding-top: 20px;
}

.photo-caption {
  position: absolute; top: -6px; left: -10px; z-index: 5;
  background: var(--bg-card);
  border: var(--border-w) solid var(--ink);
  padding: 6px 16px; border-radius: 14px;
  font-size: 1.1rem; color: var(--text-primary);
  box-shadow: var(--panel-shadow-sm);
  transform: rotate(-3deg);
}

.photo-tag {
  position: absolute; bottom: -14px; right: -6px; z-index: 5;
  background: var(--ink);
  color: var(--paper);
  border: var(--border-w) solid var(--accent);
  padding: 6px 14px; border-radius: 10px;
  font-size: 0.95rem;
  transform: rotate(2deg);
  box-shadow: var(--panel-shadow-sm);
}

.pop-art-frame {
  position: relative;
  border: 5px solid var(--ink);
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 3 / 4;
  box-shadow: 10px 10px 0 var(--accent), 10px 10px 0 4px var(--ink);
  animation: tf 7s ease-in-out infinite;
}
@keyframes tf {
  0%,100%{transform:translateY(0) rotate(0deg)}
  50%{transform:translateY(-8px) rotate(-0.6deg)}
}

.burst-bg {
  position: absolute; inset: -10%; width: 120%; height: 120%;
  z-index: 1;
}

.hero-photo {
  position: relative; z-index: 2;
  width: 100%; height: 100%;
  object-fit: cover;
  filter: grayscale(1) contrast(1.35) brightness(1.05);
}
[data-theme="light"] .hero-photo { filter: grayscale(1) contrast(1.25) brightness(1.1); }

/* Ben-Day dot halftone overlay tinted with accent */
.halftone-overlay {
  position: absolute; inset: 0; z-index: 3;
  background-image: radial-gradient(var(--accent) 1.5px, transparent 1.6px);
  background-size: 6px 6px;
  mix-blend-mode: multiply;
  opacity: 0.55;
  pointer-events: none;
}
[data-theme="light"] .halftone-overlay { opacity: 0.4; }

.rivet {
  position: absolute; width: 10px; height: 10px;
  background: var(--ink); border-radius: 50%; z-index: 4;
  border: 2px solid var(--accent);
}
.rivet-tl { top: 8px; left: 8px; }
.rivet-tr { top: 8px; right: 8px; }
.rivet-bl { bottom: 8px; left: 8px; }
.rivet-br { bottom: 8px; right: 8px; }

/* ===== RESPONSIVE ===== */
@media (max-width: 991px) {
  .hero { padding: 100px 0 80px; }
  .hero-content { text-align: center; }
  .hero-desc { max-width: 100%; }
  .hero-btns { justify-content: center; }
}
@media (max-width: 480px) {
  .hero-btns { flex-direction: column; align-items: stretch; }
  .btn-primary-hero, .btn-outline-hero { justify-content: center; text-align: center; }
}
</style>