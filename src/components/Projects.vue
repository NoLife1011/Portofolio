<template>
  <section id="projects" class="projects">
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
          <div class="project-card">
            <div class="image-wrapper">
              <img :src="project.image" class="project-img" :alt="project.title" />
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
                <a :href="project.demo" target="_blank" class="btn-live">
                  Live Demo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a :href="project.github" target="_blank" class="btn-code">
                  <i class="bi bi-github"></i> Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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

.section-badge {
  display: inline-flex; align-items: center;
  background: rgba(0,191,255,0.1); border: 1px solid rgba(0,191,255,0.25);
  padding: 6px 16px; border-radius: 40px;
  font-size: 0.82rem; font-weight: 500;
  color: #00BFFF; margin-bottom: 1rem;
}

[data-theme="light"] .section-badge {
  background: rgba(0,140,140,0.08); border-color: rgba(0,140,140,0.25); color: #008C8C;
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
  border-radius: 4px; margin: 0 auto 1rem;
}

.section-subtitle { color: var(--text-muted); font-size: 0.95rem; max-width: 500px; margin: 0 auto; }

.project-card {
  background: var(--bg-card);
  backdrop-filter: blur(10px);
  border-radius: 22px; overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
  border: 1px solid var(--border-color);
  height: 100%; display: flex; flex-direction: column;
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0,191,255,0.45);
  box-shadow: 0 20px 50px rgba(0,0,0,0.3), 0 0 30px rgba(0,191,255,0.1);
}

.image-wrapper { position: relative; overflow: hidden; aspect-ratio: 16/10; }
.project-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.project-card:hover .project-img { transform: scale(1.08); }

.image-overlay {
  position: absolute; inset: 0;
  background: rgba(0, 15, 30, 0.8);
  backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.3s ease;
}

.project-card:hover .image-overlay { opacity: 1; }

.overlay-buttons { display: flex; gap: 14px; }

.overlay-btn {
  width: 46px; height: 46px;
  background: rgba(0,191,255,0.15);
  border: 1px solid rgba(0,191,255,0.4);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #00BFFF; font-size: 1.1rem;
  text-decoration: none; transition: all 0.3s ease;
}

.overlay-btn:hover {
  background: #00BFFF; color: #001828; transform: scale(1.1);
}

.project-content { padding: 1.4rem; flex: 1; display: flex; flex-direction: column; }

.tech-stack { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 0.9rem; }

.tech-badge {
  background: rgba(0,140,140,0.12);
  color: #008C8C; padding: 3px 10px;
  border-radius: 20px; font-size: 0.68rem; font-weight: 600;
  border: 1px solid rgba(0,140,140,0.25);
  letter-spacing: 0.03em;
}

[data-theme="light"] .tech-badge {
  background: rgba(0,140,140,0.08); border-color: rgba(0,140,140,0.2);
}

.project-title {
  font-family: 'Syne', sans-serif;
  font-size: 1.15rem; font-weight: 700;
  color: var(--text-primary); margin-bottom: 0.7rem;
}

.project-description {
  font-size: 0.84rem; color: var(--text-secondary);
  line-height: 1.65; margin-bottom: 1.2rem; flex: 1;
}

.project-links { display: flex; gap: 10px; margin-top: auto; }

.btn-live {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 18px;
  background: linear-gradient(135deg, #00BFFF, #008C8C);
  color: #001828; text-decoration: none;
  border-radius: 40px; font-size: 0.8rem; font-weight: 700;
  transition: all 0.3s ease;
}

.btn-live:hover {
  transform: translateY(-2px); color: #001828;
  box-shadow: 0 6px 16px rgba(0,191,255,0.35);
}

.btn-code {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 18px;
  background: transparent;
  color: var(--text-secondary);
  text-decoration: none; border-radius: 40px;
  font-size: 0.8rem; font-weight: 600;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.btn-code:hover {
  border-color: rgba(0,191,255,0.4);
  color: #00BFFF; transform: translateY(-2px);
}

@media (max-width: 768px) {
  .projects { padding: 60px 0; }
  .section-title { font-size: 2rem; }
  .project-links { flex-direction: column; }
  .btn-live, .btn-code { justify-content: center; }
}
</style>