<template>
  <section id="about" class="about d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">

        <!-- IMAGE -->
        <div class="col-md-5 text-center mb-4 mb-md-0">
          <img 
            src="" 
            alt="about"
            class="img-fluid about-img"
          />
        </div>

        <!-- TEXT -->
        <div class="col-md-7 text-white">
          <h2 class="fw-bold mb-3">
            About <span class="highlight">Me</span>
          </h2>

          <p>
            Hello! I'm Farrel, a student who is passionate about web development 
            and design. I enjoy building modern, responsive, and user-friendly websites.
          </p>

          <p>
            Even as a student, I love learning new technologies, especially working 
            with Vue.js, and improving my skills through real projects.
          </p>

          <p>
            I'm more comfortable working independently, focusing deeply on creating 
            clean and efficient designs.
          </p>

          <!-- INFO SINGKAT -->
          <div class="row mt-4">
            <div class="col-6">
              <p><strong>Name:</strong> Farrel</p>
              <p><strong>Age:</strong> 16</p>
            </div>
            <div class="col-6">
              <p><strong>Status:</strong> Student</p>
              <p><strong>Focus:</strong> Web Developer</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  min-height: 100vh;
  padding: 80px 0;

  /* Background konsisten */
  background: #0a0a14;
}

/* Highlight */
.highlight {
  color: #3b82f6;
}

/* Image */
.about-img {
  max-width: 280px;
  border-radius: 20px;

  box-shadow: 0 0 25px rgba(59, 130, 246, 0.25);
  transition: 0.3s;
}

.about-img:hover {
  transform: scale(1.05);
}
</style>