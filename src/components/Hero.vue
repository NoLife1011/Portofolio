<template>
  <section id="hero" class="hero d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">

        <div class="col-md-6 text-white">
          <h1 class="fw-bold display-4">
            Hi, I'm <span class="highlight">Farrel</span>
          </h1>

          <h4 class="text-secondary mb-3">
            Student | Web Developer
          </h4>

          <p class="mb-4">
            I build modern and interactive websites using Vue.js.
            Focused on clean design, performance, and user experience.
          </p>

          <div>
            <a href="#projects" class="btn btn-primary me-2">
              View Projects
            </a>
            <a href="#contact" class="btn btn-outline-light">
              Contact Me
            </a>
          </div>
        </div>

        <div class="col-md-6 text-center mt-5 mt-md-0">
          <img
            src="/src/assets/profile.png"
            alt="profile"
            class="img-fluid profile-img"
          />
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;

  /* Gradient halus banget (ciri khas kamu) */
  background: radial-gradient(
    circle at 80% 20%,
    rgba(59, 130, 246, 0.15),
    transparent 40%
  ),
  #0d0d1f;
}

/* Highlight nama */
.highlight {
  color: #3b82f6;
}

/* Foto */
.profile-img {
  max-width: 300px;
  border-radius: 20px;

  /* Glow halus */
  box-shadow: 0 0 25px rgba(59, 130, 246, 0.3);
  transition: 0.3s;
}

.profile-img:hover {
  transform: scale(1.05);
}

/* Tombol */
.btn-primary {
  background-color: #3b82f6;
  border: none;
}

.btn-primary:hover {
  background-color: #2563eb;
}

.btn-outline-light:hover {
  background-color: white;
  color: black;
}
</style>