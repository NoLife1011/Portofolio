<template>
  <div class="about">
    <div class="container">
      <div class="section-header text-center mb-5">
        <div class="section-badge">Get to know me</div>
        <h2 class="section-title">About <span class="gradient-text">Me</span></h2>
        <div class="section-divider"></div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="about-card comic-panel">
            <div class="row g-4">
              <div class="col-md-12">
                <div class="about-intro speech-bubble">
                  <p class="intro-text">
                    Hello! I'm <span class="highlight">Farrel</span>, a passionate student
                    who loves turning ideas into beautiful, functional websites.
                  </p>
                </div>
              </div>

              <div class="col-md-4" v-for="card in cards" :key="card.title" data-aos="fade-up">
                <div class="info-card comic-panel comic-halftone">
                  <div class="card-icon" v-html="card.icon"></div>
                  <h4>{{ card.title }}</h4>
                  <p>{{ card.desc }}</p>
                </div>
              </div>
            </div>

            <div class="monologue-row mt-5">
              <!-- Manga-style caption/narration box for a personal quote -->
              <div class="caption-box">
                <span class="caption-label comic-font">MONOLOGUE</span>
                <p class="caption-text">
                  "{{ quote }}"
                </p>
              </div>

              <!-- Fun facts as comic stamp chips instead of a data table -->
              <div class="stamp-row">
                <span class="stamp" v-for="fact in facts" :key="fact">{{ fact }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    title: 'My Journey',
    desc: 'I started coding as a student and quickly fell in love with web development, especially creating modern, responsive websites.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`
  },
  {
    title: 'My Focus',
    desc: 'Vue.js is my go-to framework. I love building interactive UIs with clean code, great performance, and smooth user experiences.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
  },
  {
    title: 'My Strength',
    desc: 'I work best independently, focusing deeply on clean designs, efficient solutions, and delivering quality results.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
  },
]

// TODO: ganti dengan kata-kata kamu sendiri — ini yang bikin bagian ini
// kerasa personal, bukan cuma template.
const quote = "Setiap bug yang kutemukan bukan akhir dunia — itu cuma plot twist sebelum aku jadi lebih kuat."

// TODO: ganti fun facts ini sesuai dirimu. Format bebas, bisa emoji + teks singkat.
const facts = [
  '🎓 Kelas XI · SMK',
  '💻 Backend-leaning Fullstack',
  '📚 Sedang bangun Perpustakaan App',
  '📍 Indonesia',
]
</script>

<style scoped>
.about { padding: 100px 0; background: transparent; }

.about-card { padding: 2.5rem; }

.about-intro {
  margin-left: 8px;
  margin-bottom: 0.5rem;
}

.intro-text {
  font-size: 1.15rem; line-height: 1.75;
  color: var(--text-secondary); margin-bottom: 0;
}

.highlight { color: var(--accent); font-weight: 800; }

.info-card {
  padding: 1.6rem; height: 100%;
}

.card-icon {
  width: 54px; height: 54px;
  background: var(--accent);
  border: var(--border-w) solid var(--ink);
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1.2rem; color: #fff;
}

.info-card h4 {
  font-size: 1.1rem; font-weight: 900;
  margin-bottom: 0.8rem; color: var(--text-primary);
}

.info-card p {
  font-size: 0.88rem; line-height: 1.65;
  color: var(--text-secondary); margin-bottom: 0;
}

.monologue-row {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 1.5rem;
  align-items: stretch;
}

/* Manga narration/caption box - rectangular, no tail, sits like a
   monologue panel you'd see boxed in the corner of a comic frame */
.caption-box {
  position: relative;
  background: var(--ink);
  border: var(--border-w) solid var(--accent);
  border-radius: 4px;
  padding: 1.6rem 1.6rem 1.4rem;
  box-shadow: var(--panel-shadow);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.caption-label {
  display: inline-block;
  font-size: 0.8rem;
  color: var(--accent);
  background: var(--paper);
  padding: 2px 10px;
  border-radius: 4px;
  margin-bottom: 0.9rem;
  align-self: flex-start;
  letter-spacing: 0.05em;
}

.caption-text {
  font-size: 1.1rem; line-height: 1.7;
  color: var(--paper);
  font-style: italic;
  margin-bottom: 0;
}

.stamp-row {
  display: flex; flex-direction: column;
  gap: 0.7rem;
  justify-content: center;
}

.stamp {
  display: inline-flex; align-items: center;
  background: var(--bg-elevated);
  border: 2px solid var(--ink);
  border-radius: 40px;
  padding: 9px 16px;
  font-size: 0.85rem; font-weight: 800;
  color: var(--text-primary);
  transform: rotate(-1deg);
  box-shadow: 3px 3px 0 var(--ink);
}
.stamp:nth-child(even) { transform: rotate(1deg); }

@media (max-width: 768px) {
  .monologue-row { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .about { padding: 60px 0; }
  .about-card { padding: 1.5rem; }
  .section-title { font-size: 2rem; }
}
</style>