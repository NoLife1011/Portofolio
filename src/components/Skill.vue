<template>
  <section id="skills" class="skills">
    <div class="container text-center">

      <h2 class="text-white mb-5">
        My <span class="highlight">Skills</span>
      </h2>

      <div class="row">

        <!-- SKILL CARD -->
        <div 
          class="col-6 col-md-3 mb-4"
          v-for="skill in skills"
          :key="skill.name"
        >
          <div class="skill-card text-start">

            <!-- HEADER -->
            <div class="d-flex align-items-center mb-3">
              <img :src="skill.icon" class="skill-icon me-2" />
              <h6 class="text-white mb-0">{{ skill.name }}</h6>
            </div>

            <!-- PROGRESS BAR -->
            <div class="progress custom-progress">
              <div 
                class="progress-bar"
                role="progressbar"
                :style="{ width: skill.percent + '%' }"
              ></div>
            </div>

            <!-- PERCENT -->
            <div class="text-end mt-2 text-secondary">
              {{ skill.percent }}%
            </div>

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
    percent: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS",
    percent: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    name: "JavaScript",
    percent: 75,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "Vue.js",
    percent: 70,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
  }
];
</script>

<style scoped>
.skills {
  min-height: 100vh;
  padding: 80px 0;
  background: #0d0d1f;
}

.highlight {
  color: #3b82f6;
}

/* CARD */
.skill-card {
  background: linear-gradient(145deg, #111827, #0d0d1f);
  border-radius: 20px;
  padding: 20px;
  transition: 0.3s;
  border: 1px solid transparent;
}

/* ICON */
.skill-icon {
  width: 30px;
  height: 30px;
}

/* PROGRESS */
.custom-progress {
  height: 8px;
  background: #1f2937;
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar {
  background: #3b82f6;
  transition: width 1s ease;
}

/* HOVER */
.skill-card:hover {
  transform: translateY(-5px);
  border: 1px solid rgba(59, 130, 246, 0.5);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
}
</style>