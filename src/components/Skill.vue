<template>
  <section id="skills" class="skills">
    <div class="container text-center">

      <!-- Section Header -->
      <div class="section-header text-center mb-5">
        <div class="section-badge">What I Master</div>
        <h2 class="section-title">
          My <span class="gradient-text">Tools</span>
        </h2>
        <div class="section-divider"></div>
      </div>

      <div class="row g-4 justify-content-center">

        <!-- SKILL CARD -->
        <div 
          class="col-6 col-md-4 col-lg-3"
          v-for="skill in skills"
          :key="skill.name"
        >
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
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  }
];
</script>

<style scoped>
.skills {
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
  margin: 0 auto;
}

/* SKILL CARD */
.skill-card {
  background: rgba(15, 20, 35, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 1.8rem 1rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(59, 130, 246, 0.2);
  cursor: pointer;
}

.skill-card:hover {
  transform: translateY(-8px);
  border-color: rgba(59, 130, 246, 0.6);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
  background: rgba(15, 20, 35, 0.8);
}

/* Icon Wrapper */
.skill-icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.05));
  border-radius: 20px;
  transition: all 0.3s ease;
}

.skill-card:hover .skill-icon-wrapper {
  transform: scale(1.05);
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.1));
}

.skill-icon {
  width: 50px;
  height: 50px;
  transition: all 0.3s ease;
}

.skill-card:hover .skill-icon {
  transform: scale(1.1);
}

/* Skill Name */
.skill-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  margin-top: 0.5rem;
  margin-bottom: 0;
  letter-spacing: 0.5px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .skills {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .skill-card {
    padding: 1.5rem 0.8rem;
  }
  
  .skill-icon-wrapper {
    width: 65px;
    height: 65px;
  }
  
  .skill-icon {
    width: 40px;
    height: 40px;
  }
  
  .skill-name {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .skill-icon-wrapper {
    width: 55px;
    height: 55px;
  }
  
  .skill-icon {
    width: 35px;
    height: 35px;
  }
  
  .skill-name {
    font-size: 0.85rem;
  }
  
  .col-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

/* Animation on scroll */
.skill-card {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stagger animation for cards */
.skill-card:nth-child(1) { animation-delay: 0.1s; }
.skill-card:nth-child(2) { animation-delay: 0.2s; }
.skill-card:nth-child(3) { animation-delay: 0.3s; }
.skill-card:nth-child(4) { animation-delay: 0.4s; }
.skill-card:nth-child(5) { animation-delay: 0.5s; }
.skill-card:nth-child(6) { animation-delay: 0.6s; }
.skill-card:nth-child(7) { animation-delay: 0.7s; }
</style>