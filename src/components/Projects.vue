<template>
  <section id="projects" class="projects">
    <div class="container text-center">

      <h2 class="text-white mb-5">
        My <span class="highlight">Projects</span>
      </h2>

      <div class="row">

        <!-- PROJECT CARD -->
        <div 
          class="col-md-4 mb-4"
          v-for="project in projects"
          :key="project.title"
        >
          <div class="project-card">

            <!-- IMAGE -->
            <div class="image-wrapper">
              <img :src="project.image" class="project-img" />
            </div>

            <!-- CONTENT -->
            <div class="p-3 text-start">
              <h5 class="text-white">{{ project.title }}</h5>

              <p class="text-secondary small">
                {{ project.desc }}
              </p>

              <!-- TECH -->
              <div class="mb-3">
                <span 
                  class="badge me-1"
                  v-for="tech in project.tech"
                  :key="tech"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- BUTTON -->
              <div class="d-flex gap-2">
                <a :href="project.demo" target="_blank" class="btn btn-sm btn-primary">
                  Live
                </a>
                <a :href="project.github" target="_blank" class="btn btn-sm btn-outline-light">
                  Code
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
    desc: "Personal portfolio using Vue.js with modern UI design.",
    image: "https://via.placeholder.com/400x250",
    tech: ["Vue", "Bootstrap"],
    demo: "#",
    github: "#"
  },
  {
    title: "Landing Page",
    desc: "Responsive landing page with clean layout.",
    image: "https://via.placeholder.com/400x250",
    tech: ["HTML", "CSS"],
    demo: "#",
    github: "#"
  },
  {
    title: "UI Design App",
    desc: "Simple UI design project with modern style.",
    image: "https://via.placeholder.com/400x250",
    tech: ["Figma"],
    demo: "#",
    github: "#"
  }
];
</script>

<style scoped>
.projects {
  min-height: 100vh;
  padding: 80px 0;
  background: #0a0a14;
}

.highlight {
  color: #3b82f6;
}

/* CARD */
.project-card {
  background: linear-gradient(145deg, #111827, #0d0d1f);
  border-radius: 20px;
  overflow: hidden;
  transition: 0.3s;
  border: 1px solid transparent;
}

/* IMAGE */
.image-wrapper {
  overflow: hidden;
}

.project-img {
  width: 100%;
  transition: 0.4s;
}

/* HOVER EFFECT */
.project-card:hover {
  transform: translateY(-8px);
  border: 1px solid rgba(59, 130, 246, 0.5);
  box-shadow: 0 0 25px rgba(59, 130, 246, 0.2);
}

.project-card:hover .project-img {
  transform: scale(1.1);
}

/* TECH BADGE */
.badge {
  background: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
  font-size: 12px;
}
</style>