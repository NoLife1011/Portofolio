<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-header text-center mb-5">
        <div class="section-badge">Get to know me</div>
        <h2 class="section-title">About <span class="gradient-text">Me</span></h2>
        <div class="section-divider"></div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="about-card">
            <div class="row g-4">
              <div class="col-md-12">
                <div class="about-intro">
                  <div class="quote-mark">"</div>
                  <p class="intro-text">
                    Hello! I'm <span class="highlight">Farrel</span>, a passionate student
                    who loves turning ideas into beautiful, functional websites.
                  </p>
                </div>
              </div>

              <div class="col-md-4" v-for="card in cards" :key="card.title" data-aos="fade-up">
                <div class="info-card">
                  <div class="card-icon" v-html="card.icon"></div>
                  <h4>{{ card.title }}</h4>
                  <p>{{ card.desc }}</p>
                </div>
              </div>
            </div>

            <div class="personal-info mt-5">
              <h3 class="info-title">Personal Information</h3>
              <div class="info-grid">
                <div class="info-item" v-for="item in infos" :key="item.label">
                  <span class="info-label">{{ item.label }}</span>
                  <span class="info-value" :class="{ 'gradient-text': item.accent }">{{ item.value }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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

const infos = [
  { label: 'Name', value: 'Farrel' },
  { label: 'Age', value: '16' },
  { label: 'Status', value: 'Student' },
  { label: 'Focus', value: 'Web Developer', accent: true },
  { label: 'Based In', value: 'Indonesia' },
  { label: 'Email', value: 'ezfarelez1011@gmail.com' },
]
</script>

<style scoped>
.about { padding: 100px 0; background: transparent; }

.section-badge {
  display: inline-flex; align-items: center;
  background: rgba(0,191,255,0.1);
  border: 1px solid rgba(0,191,255,0.25);
  padding: 6px 16px; border-radius: 40px;
  font-size: 0.82rem; font-weight: 500;
  color: #00BFFF; margin-bottom: 1rem;
}

[data-theme="light"] .section-badge {
  background: rgba(0,140,140,0.08);
  border-color: rgba(0,140,140,0.25);
  color: #008C8C;
}

.section-title {
  font-family: 'Syne', sans-serif;
  font-size: 2.8rem; font-weight: 800;
  margin-bottom: 1rem; color: var(--text-primary);
}

.gradient-text {
  background: linear-gradient(120deg, #00BFFF 0%, #008C8C 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}

.section-divider {
  width: 60px; height: 3px;
  background: linear-gradient(90deg, #00BFFF, #008C8C);
  border-radius: 4px; margin: 0 auto;
}

.about-card {
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  border-radius: 28px; padding: 2.5rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.about-card:hover {
  border-color: var(--border-hover);
  box-shadow: 0 0 40px var(--glow);
}

.about-intro {
  background: rgba(0,31,63,0.3);
  border-radius: 20px; padding: 2rem;
  border-left: 3px solid #00BFFF;
  position: relative;
}

[data-theme="light"] .about-intro {
  background: rgba(0,191,255,0.06);
  border-left-color: #008C8C;
}

.quote-mark {
  font-size: 5rem; line-height: 1;
  color: #00BFFF; opacity: 0.2;
  position: absolute; top: 0.2rem; left: 1.2rem;
  font-family: serif;
}

.intro-text {
  font-size: 1.15rem; line-height: 1.75;
  color: var(--text-secondary); margin-bottom: 0;
}

.highlight { color: #00BFFF; font-weight: 700; }
[data-theme="light"] .highlight { color: #008C8C; }

.info-card {
  background: var(--bg-elevated);
  border-radius: 20px; padding: 1.5rem; height: 100%;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-6px);
  border-color: rgba(0,191,255,0.4);
  box-shadow: 0 12px 30px rgba(0,0,0,0.2);
}

.card-icon {
  width: 52px; height: 52px;
  background: linear-gradient(135deg, rgba(0,31,63,0.8), rgba(0,140,140,0.2));
  border: 1px solid rgba(0,191,255,0.2);
  border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1.2rem; color: #00BFFF;
}

[data-theme="light"] .card-icon {
  background: linear-gradient(135deg, rgba(0,140,140,0.1), rgba(0,191,255,0.05));
  color: #008C8C;
}

.info-card h4 {
  font-family: 'Syne', sans-serif;
  font-size: 1.1rem; font-weight: 700;
  margin-bottom: 0.8rem; color: var(--text-primary);
}

.info-card p {
  font-size: 0.88rem; line-height: 1.65;
  color: var(--text-secondary); margin-bottom: 0;
}

.personal-info {
  background: var(--bg-elevated);
  border-radius: 20px; padding: 1.8rem;
  border: 1px solid var(--border-color);
}

.info-title {
  font-family: 'Syne', sans-serif;
  font-size: 1.1rem; font-weight: 700;
  margin-bottom: 1.5rem; color: var(--text-primary);
  position: relative; display: inline-block;
}

.info-title::after {
  content: '';
  position: absolute; bottom: -6px; left: 0;
  width: 36px; height: 2px;
  background: linear-gradient(90deg, #00BFFF, #008C8C);
  border-radius: 2px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.info-item {
  display: flex; justify-content: space-between; align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--border-color);
}

.info-label {
  font-size: 0.85rem; font-weight: 500; color: var(--text-muted);
}

.info-value {
  font-size: 0.9rem; font-weight: 600; color: var(--text-primary);
}

@media (max-width: 768px) {
  .about { padding: 60px 0; }
  .about-card { padding: 1.5rem; }
  .info-grid { grid-template-columns: 1fr; gap: 0; }
  .section-title { font-size: 2rem; }
}
</style>