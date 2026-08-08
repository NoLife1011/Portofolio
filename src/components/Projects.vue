<template>
  <div class="projects">
    <div class="container">
      <div class="section-header text-center mb-5">
        <div class="section-badge">Recent Works</div>
        <h2 class="section-title">My <span class="gradient-text">Projects</span></h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">Here are some of my recent projects</p>
      </div>

      <div class="row g-4">
        <div class="col-lg-4 col-md-6"
          v-for="(project, index) in projects" :key="project.title"
          data-aos="fade-up" :data-aos-delay="index * 100">
          <div class="project-card comic-panel">
            <div class="image-wrapper">
              <img :src="project.image" class="project-img" :alt="project.title" />
              <div class="halftone-overlay"></div>
              <div class="image-overlay">
                <div class="overlay-buttons">
                  <a :href="project.demo" target="_blank" class="overlay-btn" title="Live Demo">
                    <i class="bi bi-eye"></i>
                  </a>
                  <a :href="project.github" target="_blank" class="overlay-btn" title="Source Code">
                    <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="project-content">
              <div class="tech-stack">
                <span class="tech-badge" v-for="tech in project.tech" :key="tech">{{ tech }}</span>
              </div>
              <h5 class="project-title">{{ project.title }}</h5>
              <p class="project-description">{{ project.desc }}</p>
              <div class="project-links">
                <a :href="project.demo" target="_blank" class="btn-live comic-btn">
                  Live Demo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a :href="project.github" target="_blank" class="btn-code comic-btn">
                  <i class="bi bi-github"></i> Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  { title: "Portfolio Website", desc: "Modern personal portfolio built with Vue.js featuring smooth animations and responsive design.", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop", tech: ["Vue.js", "Bootstrap", "AOS"], demo: "#", github: "#" },
  { title: "E-Commerce Platform", desc: "Fully responsive e-commerce platform with product filtering, cart system, and checkout flow.", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop", tech: ["Vue.js", "Node.js", "Express", "MongoDB"], demo: "#", github: "#" },
  { title: "Task Management App", desc: "Productivity app for managing tasks with drag-and-drop functionality and local storage.", image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop", tech: ["JavaScript", "HTML", "CSS"], demo: "#", github: "#" },
  { title: "Weather Dashboard", desc: "Real-time weather application using OpenWeatherMap API with beautiful UI and forecasts.", image: "https://images.unsplash.com/photo-1592210454359-9043ad067a5f?w=800&h=500&fit=crop", tech: ["Vue.js", "API", "Axios"], demo: "#", github: "#" },
  { title: "Blog CMS", desc: "Content management system for blogs with markdown support and user authentication.", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop", tech: ["Express.js", "MySQL", "Vue.js"], demo: "#", github: "#" },
  { title: "Dockerized App", desc: "Full-stack application containerized with Docker for easy deployment and scaling.", image: "https://images.unsplash.com/photo-1605745341112-85968b19335d?w=800&h=500&fit=crop", tech: ["Docker", "Node.js", "MySQL"], demo: "#", github: "#" },
]
</script>

<style scoped>
.projects { padding: 100px 0; background: transparent; }

.section-subtitle { color: var(--text-muted); font-size: 0.95rem; max-width: 500px; margin: 0 auto; }

.project-card {
  overflow: hidden;
  height: 100%; display: flex; flex-direction: column;
}

.image-wrapper { position: relative; overflow: hidden; aspect-ratio: 16/10; border-bottom: var(--border-w) solid var(--ink); }
.project-img {
  width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;
  filter: grayscale(0.6) contrast(1.1);
}
.project-card:hover .project-img { transform: scale(1.08); filter: grayscale(0) contrast(1.1); }

.halftone-overlay {
  position: absolute; inset: 0;
  background-image: radial-gradient(var(--accent) 1.5px, transparent 1.6px);
  background-size: 7px 7px;
  mix-blend-mode: multiply;
  opacity: 0.3;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.project-card:hover .halftone-overlay { opacity: 0.1; }

.image-overlay {
  position: absolute; inset: 0;
  background: rgba(10, 10, 10, 0.75);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.3s ease;
}

.project-card:hover .image-overlay { opacity: 1; }

.overlay-buttons { display: flex; gap: 14px; }

.overlay-btn {
  width: 46px; height: 46px;
  background: var(--accent);
  border: 2px solid #fff;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 1.1rem;
  text-decoration: none; transition: all 0.2s ease;
}

.overlay-btn:hover {
  transform: scale(1.1) rotate(-6deg);
}

.project-content { padding: 1.4rem; flex: 1; display: flex; flex-direction: column; }

.tech-stack { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 0.9rem; }

.tech-badge {
  background: var(--ink);
  color: var(--paper); padding: 3px 10px;
  border-radius: 20px; font-size: 0.68rem; font-weight: 700;
  letter-spacing: 0.03em;
}
[data-theme="light"] .tech-badge { background: var(--ink); color: var(--bg-main); }

.project-title {
  font-size: 1.2rem; font-weight: 900;
  color: var(--text-primary); margin-bottom: 0.7rem;
}

.project-description {
  font-size: 0.84rem; color: var(--text-secondary);
  line-height: 1.65; margin-bottom: 1.2rem; flex: 1;
}

.project-links { display: flex; gap: 10px; margin-top: auto; }

.btn-live {
  padding: 8px 18px;
  background: var(--accent);
  color: #fff; text-decoration: none;
  border-radius: 40px; font-size: 0.8rem; font-weight: 800;
}

.btn-code {
  padding: 8px 18px;
  background: var(--bg-elevated);
  color: var(--text-primary);
  text-decoration: none; border-radius: 40px;
  font-size: 0.8rem; font-weight: 700;
}

@media (max-width: 768px) {
  .projects { padding: 60px 0; }
  .section-title { font-size: 2rem; }
  .project-links { flex-direction: column; }
  .btn-live, .btn-code { justify-content: center; }
}
</style>