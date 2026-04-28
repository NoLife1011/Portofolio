<template>
  <section id="projects" class="projects">
    <div class="container">

      <!-- Section Header -->
      <div class="section-header text-center mb-5">
        <div class="section-badge">Recent Works</div>
        <h2 class="section-title">
          My <span class="gradient-text">Projects</span>
        </h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">
          Here are some of my recent projects that I've been working on
        </p>
      </div>

      <div class="row g-4">

        <!-- PROJECT CARD -->
        <div 
          class="col-lg-4 col-md-6"
          v-for="(project, index) in projects"
          :key="project.title"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="project-card">

            <!-- IMAGE WRAPPER with overlay -->
            <div class="image-wrapper">
              <img :src="project.image" class="project-img" :alt="project.title" />
              <div class="image-overlay">
                <div class="overlay-buttons">
                  <a :href="project.demo" target="_blank" class="overlay-btn">
                    <i class="bi bi-eye"></i>
                  </a>
                  <a :href="project.github" target="_blank" class="overlay-btn">
                    <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <!-- CONTENT -->
            <div class="project-content">
              <div class="tech-stack">
                <span 
                  class="tech-badge"
                  v-for="tech in project.tech"
                  :key="tech"
                >
                  {{ tech }}
                </span>
              </div>

              <h5 class="project-title">{{ project.title }}</h5>

              <p class="project-description">
                {{ project.desc }}
              </p>

              <!-- BUTTONS -->
              <div class="project-links">
                <a :href="project.demo" target="_blank" class="btn-live">
                  <span>Live Demo</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
                <a :href="project.github" target="_blank" class="btn-code">
                  <i class="bi bi-github"></i>
                  Source Code
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
  {
    title: "Portfolio Website",
    desc: "Modern personal portfolio website built with Vue.js featuring smooth animations and responsive design.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop",
    tech: ["Vue.js", "Bootstrap", "AOS"],
    demo: "#",
    github: "#"
  },
  {
    title: "E-Commerce Platform",
    desc: "Fully responsive e-commerce platform with product filtering, cart system, and checkout flow.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop",
    tech: ["Vue.js", "Node.js", "Express", "MongoDB"],
    demo: "#",
    github: "#"
  },
  {
    title: "Task Management App",
    desc: "Productivity app for managing tasks with drag-and-drop functionality and local storage.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
    tech: ["JavaScript", "HTML", "CSS"],
    demo: "#",
    github: "#"
  },
  {
    title: "Weather Dashboard",
    desc: "Real-time weather application using OpenWeatherMap API with beautiful UI and forecasts.",
    image: "https://images.unsplash.com/photo-1592210454359-9043ad067a5f?w=800&h=500&fit=crop",
    tech: ["Vue.js", "API", "Axios"],
    demo: "#",
    github: "#"
  },
  {
    title: "Blog CMS",
    desc: "Content management system for blogs with markdown support and user authentication.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
    tech: ["Express.js", "MySQL", "Vue.js"],
    demo: "#",
    github: "#"
  },
  {
    title: "Dockerized App",
    desc: "Full-stack application containerized with Docker for easy deployment and scaling.",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335d?w=800&h=500&fit=crop",
    tech: ["Docker", "Node.js", "MySQL"],
    demo: "#",
    github: "#"
  }
];
</script>

<style scoped>
.projects {
  min-height: 100vh;
  padding: 100px 0;
  background: transparent;
  position: relative;
}

/* Section Header Styles */
.section-header {
  margin-bottom: 3rem;
}

.section-badge {
  display: inline-block;
  background: rgba(59, 130, 246, 0.15);
  backdrop-filter: blur(4px);
  padding: 6px 16px;
  border-radius: 40px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #60a5fa;
  margin-bottom: 1rem;
  border: 1px solid rgba(59, 130, 246, 0.25);
}

.section-title {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #ffffff;
}

.gradient-text {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.section-divider {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 4px;
  margin: 0 auto 1rem;
}

.section-subtitle {
  color: #94a3b8;
  font-size: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

/* PROJECT CARD */
.project-card {
  background: rgba(15, 20, 35, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(59, 130, 246, 0.15);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(59, 130, 246, 0.5);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* IMAGE WRAPPER */
.image-wrapper {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-img {
  transform: scale(1.1);
}

/* Image Overlay */
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .image-overlay {
  opacity: 1;
}

.overlay-buttons {
  display: flex;
  gap: 16px;
}

.overlay-btn {
  width: 48px;
  height: 48px;
  background: rgba(59, 130, 246, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.overlay-btn:hover {
  transform: scale(1.1);
  background: #3b82f6;
  color: white;
}

/* PROJECT CONTENT */
.project-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Tech Stack */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1rem;
}

.tech-badge {
  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

/* Project Title */
.project-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

/* Project Description */
.project-description {
  font-size: 0.85rem;
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  flex: 1;
}

/* Project Links */
.project-links {
  display: flex;
  gap: 12px;
  margin-top: auto;
}

.btn-live {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  text-decoration: none;
  border-radius: 40px;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
}

.btn-live:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  color: white;
}

.btn-code {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  background: rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
  text-decoration: none;
  border-radius: 40px;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.btn-code:hover {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 991px) {
  .projects {
    padding: 80px 0;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-subtitle {
    font-size: 0.9rem;
  }
  
  .project-content {
    padding: 1.2rem;
  }
  
  .project-title {
    font-size: 1.1rem;
  }
  
  .project-description {
    font-size: 0.8rem;
  }
  
  .btn-live, .btn-code {
    padding: 6px 14px;
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.6rem;
  }
  
  .project-links {
    flex-direction: column;
  }
  
  .btn-live, .btn-code {
    justify-content: center;
  }
}
</style>