<template>
  <footer class="footer text-white">
    <div class="container text-center">

      <!-- NAME -->
      <h5 class="mb-4">Farrel</h5>

      <div class="row justify-content-center">

        <!-- SOCIAL MEDIA -->
        <div class="col-md-4 mb-3">
          <h6 class="mb-3">Social Media</h6>
          <div class="d-flex justify-content-center gap-3">

            <a href="#" class="icon-link">
              <i class="bi bi-github"></i>
            </a>

            <a href="#" class="icon-link">
              <i class="bi bi-instagram"></i>
            </a>

            <a href="#" class="icon-link">
              <i class="bi bi-linkedin"></i>
            </a>

          </div>
        </div>

        <!-- CONTACT -->
        <div class="col-md-4 mb-3">
          <h6 class="mb-3">Contact</h6>
          <div class="d-flex justify-content-center gap-3">

            <a href="mailto:your@email.com" class="icon-link">
              <i class="bi bi-envelope-fill"></i>
            </a>

            <a href="#" class="icon-link">
              <i class="bi bi-whatsapp"></i>
            </a>

          </div>
        </div>

      </div>

      <!-- COPYRIGHT -->
      <p class="text-secondary small mt-4 mb-0">
        © 2026 Farrel. All rights reserved.
      </p>

    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 50px 0;
  background: #0a0a14;
  border-top: 1px solid rgba(59, 130, 246, 0.2);
}

/* ICON STYLE */
.icon-link {
  font-size: 22px;
  color: #9ca3af;
  transition: 0.3s;
}

/* HOVER */
.icon-link:hover {
  color: #3b82f6;
  transform: translateY(-3px);
}
</style>