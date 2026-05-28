<template>
  <section class="hero d-flex align-items-center">
    <div class="hero-grid"></div>

    <div class="container">
        <div class="row align-items-center g-4">

        <!-- LEFT -->
        <div class="col-lg-6 col-md-12 order-2 order-lg-1 ps-lg-4 ps-3">
          <div class="hero-content">

            <div class="hero-badge mb-3" data-aos="fade-up" data-aos-delay="100">
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
              A 16-year-old student building modern web experiences
              with Vue.js — focused on clean code, pixel-perfect UI,
              and smooth interactions.
            </p>

            <div class="hero-btns" data-aos="fade-up" data-aos-delay="500">
              <a href="#projects" class="btn-primary-hero">
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#contact" class="btn-outline-hero">Let's Talk</a>
            </div>

          </div>
        </div>

        <!-- RIGHT - TERMINAL -->
         <div class="col-lg-6 d-none d-lg-flex justify-content-start order-1 order-lg-2 ps-5" data-aos="zoom-in" data-aos-delay="300">
          <div class="terminal-wrapper">
            <div class="terminal">

              <!-- Title bar -->
              <div class="term-bar">
                <div class="term-dots">
                  <span class="dot dot-r"></span>
                  <span class="dot dot-y"></span>
                  <span class="dot dot-g"></span>
                </div>
                <span class="term-title">~/portfolio/farrel</span>
                <div class="term-status">
                  <span class="live-dot"></span>
                  <span>live</span>
                </div>
              </div>

              <!-- Terminal body -->
              <div class="term-body">

                <div class="term-line" :class="{ visible: v[0] }">
                  <span class="prompt">$</span><span class="cmd"> whoami</span>
                </div>
                <div class="term-line" :class="{ visible: v[1] }">
                  <span class="out-cyan">Farrel</span>
                  <span class="out-dim"> // Vue.js Developer, Indonesia</span>
                </div>

                <div class="term-line gap" :class="{ visible: v[2] }">
                  <span class="prompt">$</span><span class="cmd"> cat skills.json</span>
                </div>
                <div class="term-line" :class="{ visible: v[3] }">
                  <span class="out-dim">{</span>
                </div>
                <div class="term-line ind" :class="{ visible: v[3] }">
                  <span class="out-key">"frontend"</span><span class="out-dim">: [</span><span class="out-str">"Vue.js"</span><span class="out-dim">, </span><span class="out-str">"HTML"</span><span class="out-dim">, </span><span class="out-str">"CSS"</span><span class="out-dim">],</span>
                </div>
                <div class="term-line ind" :class="{ visible: v[4] }">
                  <span class="out-key">"backend"</span><span class="out-dim">: [</span><span class="out-str">"Node.js"</span><span class="out-dim">, </span><span class="out-str">"Express"</span><span class="out-dim">],</span>
                </div>
                <div class="term-line ind" :class="{ visible: v[5] }">
                  <span class="out-key">"tools"</span><span class="out-dim">: [</span><span class="out-str">"Docker"</span><span class="out-dim">, </span><span class="out-str">"MySQL"</span><span class="out-dim">, </span><span class="out-str">"Git"</span><span class="out-dim">]</span>
                </div>
                <div class="term-line" :class="{ visible: v[5] }">
                  <span class="out-dim">}</span>
                </div>

                <div class="term-line gap" :class="{ visible: v[6] }">
                  <span class="prompt">$</span><span class="cmd"> git log --oneline -3</span>
                </div>
                <div class="term-line" :class="{ visible: v[7] }">
                  <span class="out-hash">a3f1c2e</span><span class="out-dim"> ✨ portfolio v2 redesign</span>
                </div>
                <div class="term-line" :class="{ visible: v[7] }">
                  <span class="out-hash">b8d4e1f</span><span class="out-dim"> 🐳 dockerize full stack app</span>
                </div>
                <div class="term-line" :class="{ visible: v[7] }">
                  <span class="out-hash">c2a9d3b</span><span class="out-dim"> 🚀 ship weather dashboard</span>
                </div>

                <div class="term-line gap" :class="{ visible: v[8] }">
                  <span class="prompt">$</span><span class="cmd"> </span><span class="term-cursor">█</span>
                </div>

              </div>

              <!-- Status bar -->
              <div class="term-footer">
                <span class="tf-item"><span class="tf-dot tf-green"></span> main</span>
                <span class="tf-item">Vue 3.4</span>
                <span class="tf-item tf-r"><span class="tf-dot tf-cyan"></span> Node v20</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>

  </section>
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

const v = ref(Array(9).fill(false))

onMounted(() => {
  setTimeout(loop, 400)
  ;[300,620,1020,1320,1620,1920,2350,2650,3050].forEach((d, i) => {
    setTimeout(() => { v.value[i] = true }, d)
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Fira+Code:wght@300;400;500&display=swap');

.hero {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 100px 0 80px;
}

.hero-grid {
  position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(0,191,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,191,255,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
}
[data-theme="light"] .hero-grid {
  background-image:
    linear-gradient(rgba(0,140,140,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,140,140,0.05) 1px, transparent 1px);
}

/* ===== LEFT ===== */
.hero-content { position: relative; z-index: 2; }

.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(0,191,255,0.1);
  border: 1px solid rgba(0,191,255,0.28);
  padding: 6px 16px; border-radius: 40px;
  font-size: 0.82rem; font-weight: 500; color: #00BFFF;
}
[data-theme="light"] .hero-badge {
  background: rgba(0,140,140,0.08);
  border-color: rgba(0,140,140,0.25); color: #008C8C;
}

.badge-pulse {
  width: 7px; height: 7px; background: #22c55e;
  border-radius: 50%; box-shadow: 0 0 8px #22c55e;
  animation: pg 1.8s infinite;
}
@keyframes pg {
  0%,100%{opacity:1;transform:scale(1)}
  50%{opacity:0.4;transform:scale(1.5)}
}

.hero-title {
  font-family: 'Nunito', sans-serif;
  font-size: clamp(2.8rem, 6vw, 4.8rem);
  font-weight: 800; line-height: 1.05;
  color: var(--text-primary); letter-spacing: -0.03em;
  margin-bottom: 0.75rem;
}

.gradient-text {
  background: linear-gradient(120deg, #00BFFF 0%, #008C8C 60%, #ffffff 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
[data-theme="light"] .gradient-text {
  background: linear-gradient(120deg, #00BFFF 0%, #008C8C 100%);
  -webkit-background-clip: text; background-clip: text;
}

.hero-role {
  display: flex; align-items: center; gap: 2px;
  margin-bottom: 1.4rem; min-height: 2rem;
}

.role-typed {
  font-family: 'Nunito', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.35rem);
  font-weight: 700; color: #008C8C;
}

.cursor-blink {
  font-size: 1.3rem; color: #00BFFF;
  animation: bc 1s step-end infinite;
}
@keyframes bc { 0%,100%{opacity:1} 50%{opacity:0} }

.hero-desc {
  font-size: 0.9rem; line-height: 1.8;
  color: var(--text-secondary); max-width: 430px;
  margin-bottom: 2rem;
}

.hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }

.btn-primary-hero {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 26px;
  background: linear-gradient(135deg, #00BFFF 0%, #008C8C 100%);
  border-radius: 12px; font-weight: 700; font-size: 0.9rem;
  color: #001828; text-decoration: none; transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0,191,255,0.28);
}
.btn-primary-hero:hover {
  transform: translateY(-3px); color: #001828;
  box-shadow: 0 8px 28px rgba(0,191,255,0.42);
}
.btn-primary-hero svg { transition: transform 0.3s ease; }
.btn-primary-hero:hover svg { transform: translateX(4px); }

.btn-outline-hero {
  display: inline-flex; align-items: center;
  padding: 11px 24px; background: transparent;
  border: 1.5px solid rgba(0,191,255,0.28);
  border-radius: 12px; font-weight: 600; font-size: 0.9rem;
  color: var(--text-primary); text-decoration: none; transition: all 0.3s ease;
}
.btn-outline-hero:hover {
  border-color: #00BFFF; color: #00BFFF;
  background: rgba(0,191,255,0.08); transform: translateY(-3px);
}

/* ===== TERMINAL WRAPPER ===== */
.terminal-wrapper {
  position: relative;
  max-width: 480px;
  width: 100%;
  margin-left: 0;
  margin-right: auto;
}
/* ===== TERMINAL ===== */
.terminal {
  background: linear-gradient(150deg, #001a33 0%, #071420 50%, #091622 100%);
  border: 1px solid rgba(0,191,255,0.2);
  border-radius: 18px; overflow: hidden;
  box-shadow:
    0 0 50px rgba(0,31,63,0.55),
    0 0 25px rgba(0,140,140,0.12),
    inset 0 1px 0 rgba(0,191,255,0.1);
  animation: tf 7s ease-in-out infinite;
}
@keyframes tf {
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-8px)}
}

/* Bar */
.term-bar {
  display: flex; align-items: center; gap: 10px;
  padding: 11px 16px;
  background: rgba(0,10,22,0.6);
  border-bottom: 1px solid rgba(0,191,255,0.09);
}
.term-dots { display: flex; gap: 6px; }
.dot { width: 11px; height: 11px; border-radius: 50%; }
.dot-r{background:#ff5f57} .dot-y{background:#febc2e} .dot-g{background:#28c840}

.term-title {
  flex: 1; text-align: center;
  font-family: 'Fira Code', monospace;
  font-size: 0.7rem; color: rgba(0,191,255,0.45);
  letter-spacing: 0.04em;
}

.term-status {
  display: flex; align-items: center; gap: 5px;
  font-family: 'Fira Code', monospace;
  font-size: 0.68rem; color: #22c55e;
}
.live-dot {
  width: 6px; height: 6px; background: #22c55e;
  border-radius: 50%; box-shadow: 0 0 5px #22c55e;
  animation: pg 2s infinite;
}

/* Body */
.term-body {
  padding: 16px 18px 12px;
  font-family: 'Fira Code', monospace;
  font-size: 0.78rem;
  line-height: 1.65;
}

.term-line {
  display: flex; flex-wrap: wrap; align-items: baseline;
  opacity: 0; transform: translateY(5px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.term-line.visible { opacity: 1; transform: translateY(0); }
.gap { margin-top: 10px; }
.ind { padding-left: 14px; }

/* Syntax */
.prompt { color: #008C8C; font-weight: 500; }
.cmd { color: #cde8f8; }
.out-cyan { color: #00BFFF; font-weight: 500; }
.out-dim { color: rgba(100,160,200,0.65); }
.out-key { color: #79b8d4; }
.out-str { color: #4ec9b0; }
.out-hash { color: rgba(0,191,255,0.55); }

.term-cursor {
  color: #00BFFF;
  animation: bc 1s step-end infinite;
  font-size: 0.72rem;
}

/* Footer */
.term-footer {
  display: flex; align-items: center; gap: 14px;
  padding: 7px 18px;
  background: rgba(0,8,18,0.55);
  border-top: 1px solid rgba(0,191,255,0.07);
  font-family: 'Fira Code', monospace;
  font-size: 0.65rem;
}
.tf-item { display: flex; align-items: center; gap: 5px; color: rgba(100,160,200,0.55); }
.tf-r { margin-left: auto; }
.tf-dot { width: 5px; height: 5px; border-radius: 50%; }
.tf-green { background: #22c55e; }
.tf-cyan { background: #00BFFF; box-shadow: 0 0 4px #00BFFF; }

/* ===== SCROLL HINT ===== */
.scroll-hint {
  position: absolute; bottom: 2rem; left: 50%;
  transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 6px; z-index: 2;
}
.scroll-line {
  width: 1px; height: 36px;
  background: linear-gradient(to bottom, #00BFFF, transparent);
  animation: sd 2s ease-in-out infinite;
}
@keyframes sd {
  0%{transform:scaleY(0);transform-origin:top;opacity:1}
  50%{transform:scaleY(1);transform-origin:top;opacity:1}
  100%{transform:scaleY(1);transform-origin:bottom;opacity:0}
}
.scroll-hint span {
  font-size: 0.6rem; letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--text-muted);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 991px) {
  .hero { padding: 100px 0 80px; }
  .hero-content { text-align: center; }
  .hero-desc { max-width: 100%; }
  .hero-btns { justify-content: center; }
  .terminal-wrapper { max-width: 400px; margin-bottom: 2rem; }
  .scroll-hint { display: none; }
}
@media (max-width: 480px) {
  .hero-btns { flex-direction: column; align-items: stretch; }
  .btn-primary-hero, .btn-outline-hero { justify-content: center; }
  .term-body { font-size: 0.7rem; padding: 12px 12px 10px; }
}
</style>