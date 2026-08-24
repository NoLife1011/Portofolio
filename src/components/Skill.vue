<template>
  <div class="skills">
    <div class="container text-center">
      <div class="section-header text-center mb-5">
        <div class="section-badge">What I Master</div>
        <h2 class="section-title">My <span class="gradient-text">Skills</span></h2>
        <div class="section-divider"></div>
      </div>

      <div class="row g-4 justify-content-center">
        <div class="col-6 col-md-4 col-lg-3" v-for="(skill, i) in skills" :key="skill.name"
          data-aos="fade-up" :data-aos-delay="i * 80">
          <div class="skill-card glass-panel">
            <div class="skill-icon-wrapper">
              <img :src="skill.icon" class="skill-icon" :alt="skill.name" />
            </div>
            <h6 class="skill-name tech-font">{{ skill.name }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
]
</script>

<style scoped>
.skills { padding: 100px 0; background: transparent; }

.skill-card {
  padding: 1.8rem 1rem;
  text-align: center;
  cursor: pointer;
}

.skill-icon-wrapper {
  width: 78px; height: 78px;
  margin: 0 auto 1rem;
  display: flex; align-items: center; justify-content: center;
  background: var(--bg-elevated);
  border: 1px solid var(--line);
  border-radius: 14px;
  transition: all 0.25s ease;
}

.skill-card:hover .skill-icon-wrapper {
  border-color: var(--accent);
  background: var(--accent-soft);
  box-shadow: var(--glow-shadow);
}

.skill-icon { width: 48px; height: 48px; transition: transform 0.3s ease; }
.skill-card:hover .skill-icon { transform: scale(1.15); }

.skill-name {
  font-size: 0.95rem; letter-spacing: 0.02em;
  color: var(--text-primary);
  margin-top: 0.5rem; margin-bottom: 0;
}

@media (max-width: 768px) {
  .skills { padding: 60px 0; }
  .section-title { font-size: 2rem; }
  .skill-icon-wrapper { width: 62px; height: 62px; }
  .skill-icon { width: 38px; height: 38px; }
}
</style>