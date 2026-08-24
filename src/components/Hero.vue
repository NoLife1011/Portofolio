<template>
  <div class="hero d-flex align-items-center">
    <div class="hero-grid"></div>

    <div class="container">
        <div class="row align-items-center g-4">

        <!-- LEFT -->
        <div class="col-lg-6 col-md-12 order-2 order-lg-1 ps-lg-4 ps-3">
          <div class="hero-content">

            <div class="hero-badge tech-font mb-3" data-aos="fade-up" data-aos-delay="100">
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
              <a href="#projects" class="btn-primary-hero glow-btn">
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#contact" class="btn-outline-hero glow-btn">Let's Talk</a>
            </div>

          </div>
        </div>

        <!-- RIGHT - HUD PHOTO -->
         <div class="col-lg-6 d-none d-lg-flex justify-content-start order-1 order-lg-2 ps-5" data-aos="zoom-in" data-aos-delay="300">
          <div class="photo-wrapper">

            <!-- HUD status tab -->
            <div class="photo-caption tech-font">SYSTEM: FARREL.EXE</div>

            <div class="hud-frame">

              <!-- swap this src for your own photo -->
              <img
                src="../assets/images/profile.png"
                alt="Farrel"
                class="hero-photo"
              />

              <!-- scanline overlay -->
              <div class="scanline-overlay"></div>

              <!-- HUD corner brackets -->
              <span class="bracket bracket-tl"></span>
              <span class="bracket bracket-tr"></span>
              <span class="bracket bracket-bl"></span>
              <span class="bracket bracket-br"></span>
            </div>

            <div class="photo-tag tech-font">WEB DEV</div>
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
  background-image:
    linear-gradient(var(--grid-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
  background-size: 36px 36px;
}

/* ===== LEFT ===== */
.hero-content { position: relative; z-index: 2; }

.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--accent-soft);
  border: 1px solid var(--accent);
  padding: 7px 18px; border-radius: 40px;
  font-size: 0.8rem; color: var(--accent);
  box-shadow: var(--panel-shadow-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-pulse {
  width: 8px; height: 8px; background: var(--accent);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--accent);
  animation: pg 1.8s infinite;
}
@keyframes pg {
  0%,100%{opacity:1;transform:scale(1)}
  50%{opacity:0.4;transform:scale(1.5)}
}

.hero-title {
  font-size: clamp(2.6rem, 6vw, 4.4rem);
  font-weight: 800; line-height: 1.05;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.hero-role {
  display: flex; align-items: center; gap: 2px;
  margin-bottom: 1.4rem; min-height: 2rem;
}

.role-typed {
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: var(--accent);
}

.cursor-blink {
  font-size: 1.3rem; color: var(--accent);
  animation: bc 1s step-end infinite;
}
@keyframes bc { 0%,100%{opacity:1} 50%{opacity:0} }

.hero-desc {
  font-size: 0.94rem; line-height: 1.8;
  color: var(--text-secondary); max-width: 430px;
  margin-bottom: 2rem;
}

.hero-btns { display: flex; gap: 14px; flex-wrap: wrap; }

.btn-primary-hero {
  padding: 12px 26px;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  border-color: transparent;
  border-radius: 10px; font-weight: 600; font-size: 0.9rem;
  color: var(--ink); text-decoration: none;
}
.btn-primary-hero svg { transition: transform 0.3s ease; }
.btn-primary-hero:hover svg { transform: translateX(4px); }

.btn-outline-hero {
  padding: 11px 24px; background: transparent;
  border-radius: 10px; font-weight: 600; font-size: 0.9rem;
  color: var(--text-primary); text-decoration: none;
}

/* ===== HUD PHOTO ===== */
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
  background: var(--bg-card-alpha);
  backdrop-filter: blur(10px);
  border: 1px solid var(--accent);
  padding: 6px 16px; border-radius: 6px;
  font-size: 0.78rem; color: var(--accent);
  box-shadow: var(--panel-shadow-sm);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.photo-tag {
  position: absolute; bottom: -14px; right: -6px; z-index: 5;
  background: var(--ink);
  color: var(--accent);
  border: 1px solid var(--accent);
  padding: 6px 14px; border-radius: 6px;
  font-size: 0.8rem;
  box-shadow: var(--panel-shadow-sm);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.hud-frame {
  position: relative;
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 3 / 4;
  background: var(--bg-card);
  box-shadow: var(--panel-shadow);
  animation: tf 7s ease-in-out infinite;
}
@keyframes tf {
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-8px)}
}



.hero-photo {
  position: relative; z-index: 2;
  width: 100%; height: 100%;
  object-fit: cover;
  filter: grayscale(0.6) contrast(1.15) brightness(0.95) saturate(1.1);
}
[data-theme="light"] .hero-photo { filter: grayscale(0.4) contrast(1.1) brightness(1.05); }

/* Scanline overlay tinted with accent */
.scanline-overlay {
  position: absolute; inset: 0; z-index: 3;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 229, 255, 0.06) 0px,
    rgba(0, 229, 255, 0.06) 1px,
    transparent 1px,
    transparent 3px
  );
  mix-blend-mode: screen;
  pointer-events: none;
}

.bracket {
  position: absolute; width: 26px; height: 26px; z-index: 4;
  pointer-events: none;
}
.bracket-tl { top: 10px; left: 10px; border-top: 2px solid var(--accent); border-left: 2px solid var(--accent); }
.bracket-tr { top: 10px; right: 10px; border-top: 2px solid var(--accent); border-right: 2px solid var(--accent); }
.bracket-bl { bottom: 10px; left: 10px; border-bottom: 2px solid var(--accent); border-left: 2px solid var(--accent); }
.bracket-br { bottom: 10px; right: 10px; border-bottom: 2px solid var(--accent); border-right: 2px solid var(--accent); }

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