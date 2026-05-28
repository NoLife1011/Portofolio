<template>
  <section id="skills" class="skills">
    <div class="container text-center">
      <div class="section-header text-center mb-5">
        <div class="section-badge">What I Master</div>
        <h2 class="section-title">My <span class="gradient-text">Skills</span></h2>
        <div class="section-divider"></div>
      </div>

      <div class="row g-4 justify-content-center">
        <div class="col-6 col-md-4 col-lg-3" v-for="(skill, i) in skills" :key="skill.name"
          data-aos="fade-up" :data-aos-delay="i * 80">
          <div class="skill-card">
            <div class="skill-icon-wrapper">
              <img :src="skill.icon" class="skill-icon" :alt="skill.name" />
            </div>
            <h6 class="skill-name">{{ skill.name }}</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
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
  border-radius: 4px; margin: 0 auto;
}

.skill-card {
  background: var(--bg-card);
  backdrop-filter: blur(10px);
  border-radius: 22px; padding: 1.8rem 1rem;
  text-align: center;
  transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
  border: 1px solid var(--border-color);
  cursor: pointer;
}

.skill-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0,191,255,0.5);
  box-shadow: 0 12px 36px rgba(0,191,255,0.15);
}

.skill-icon-wrapper {
  width: 76px; height: 76px;
  margin: 0 auto 1rem;
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, rgba(0,31,63,0.6), rgba(0,140,140,0.15));
  border: 1px solid var(--border-color);
  border-radius: 20px;
  transition: all 0.3s ease;
}

.skill-card:hover .skill-icon-wrapper {
  border-color: rgba(0,191,255,0.4);
  background: linear-gradient(135deg, rgba(0,31,63,0.9), rgba(0,140,140,0.25));
  box-shadow: 0 0 20px rgba(0,191,255,0.15);
}

[data-theme="light"] .skill-icon-wrapper {
  background: rgba(0,140,140,0.06);
  border-color: rgba(0,140,140,0.15);
}

.skill-icon { width: 48px; height: 48px; transition: transform 0.3s ease; }
.skill-card:hover .skill-icon { transform: scale(1.12); }

.skill-name {
  font-family: 'Syne', sans-serif;
  font-size: 1rem; font-weight: 700;
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