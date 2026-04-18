<template>
  <section id="contact" class="contact">
    <div class="container">

      <h2 class="text-center text-white mb-5">
        Contact <span class="highlight">Me</span>
      </h2>

      <div class="row">

        <!-- INFO -->
        <div class="col-md-5 text-white mb-4">
          <h4>Get in touch</h4>
          <p class="text-secondary">
            Feel free to contact me for collaboration or just to say hello!
          </p>

          <div class="mt-4">
            <p><strong>Email:</strong> your@email.com</p>
            <p><strong>GitHub:</strong> github.com/yourusername</p>
            <p><strong>Instagram:</strong> @yourusername</p>
          </div>
        </div>

        <!-- FORM -->
        <div class="col-md-7">
          <form class="contact-form">

            <div class="mb-3">
              <input 
                type="text" 
                class="form-control" 
                placeholder="Your Name"
              >
            </div>

            <div class="mb-3">
              <input 
                type="email" 
                class="form-control" 
                placeholder="Your Email"
              >
            </div>

            <div class="mb-3">
              <textarea 
                class="form-control" 
                rows="5" 
                placeholder="Your Message"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary w-100">
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  min-height: 100vh;
  padding: 80px 0;
  background: #0d0d1f;
}

.highlight {
  color: #3b82f6;
}

/* FORM */
.contact-form {
  background: linear-gradient(145deg, #111827, #0d0d1f);
  padding: 25px;
  border-radius: 20px;
  border: 1px solid transparent;
}

/* INPUT */
.form-control {
  background: #1f2937;
  border: none;
  color: white;
}

.form-control::placeholder {
  color: #9ca3af;
}

/* FOCUS */
.form-control:focus {
  box-shadow: none;
  border: 1px solid #3b82f6;
  background: #1f2937;
  color: white;
}

/* BUTTON */
.btn-primary {
  background-color: #3b82f6;
  border: none;
}

.btn-primary:hover {
  background-color: #2563eb;
}
</style>