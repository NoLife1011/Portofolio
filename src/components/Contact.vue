<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-header text-center mb-5">
        <div class="section-badge">Get In Touch</div>
        <h2 class="section-title">Contact <span class="gradient-text">Me</span></h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">Have a project in mind? Let's work together!</p>
      </div>

      <div class="row g-4">
        <!-- LEFT -->
        <div class="col-lg-5">
          <div class="contact-info">
            <div class="info-card" v-for="item in contacts" :key="item.label">
              <div class="info-icon-wrapper">
                <div class="info-icon" v-html="item.icon"></div>
              </div>
              <div class="info-content">
                <h4>{{ item.label }}</h4>
                <p>{{ item.value }}</p>
              </div>
            </div>
          </div>

          <div class="social-section">
            <h4 class="social-title">Connect with me</h4>
            <div class="social-links">
              <a href="https://github.com/NoLife1011" target="_blank" class="social-link">
                <i class="bi bi-github"></i><span>GitHub</span>
              </a>
              <a href="https://instagram.com/f_ar_el" target="_blank" class="social-link">
                <i class="bi bi-instagram"></i><span>Instagram</span>
              </a>
              <a href="#" target="_blank" class="social-link">
                <i class="bi bi-linkedin"></i><span>LinkedIn</span>
              </a>
              <a href="#" target="_blank" class="social-link">
                <i class="bi bi-twitter"></i><span>Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <!-- RIGHT - FORM -->
        <div class="col-lg-7">
          <div class="form-wrapper">
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="field">
                    <label>Your Name</label>
                    <input type="text" v-model="formData.name" placeholder="John Doe" required />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field">
                    <label>Email Address</label>
                    <input type="email" v-model="formData.email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div class="col-12">
                  <div class="field">
                    <label>Subject</label>
                    <input type="text" v-model="formData.subject" placeholder="Project Collaboration" />
                  </div>
                </div>
                <div class="col-12">
                  <div class="field">
                    <label>Message</label>
                    <textarea v-model="formData.message" rows="5" placeholder="Tell me about your project..." required></textarea>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn-submit" :disabled="isSubmitting">
                    <span v-if="!isSubmitting">
                      Send Message
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </span>
                    <span v-else class="sending">Sending <div class="spinner"></div></span>
                  </button>
                </div>
                <div v-if="showSuccess" class="col-12">
                  <div class="success-message">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    Message sent! I'll get back to you soon.
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const contacts = [
  { label: 'Phone', value: '+62 812-3456-7890', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>` },
  { label: 'Email', value: 'ezfarelez1011@gmail.com', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>` },
  { label: 'Location', value: 'Indonesia 🇮🇩', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>` },
]

const formData = ref({ name: '', email: '', subject: '', message: '' })
const isSubmitting = ref(false)
const showSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    showSuccess.value = true
    formData.value = { name: '', email: '', subject: '', message: '' }
    setTimeout(() => { showSuccess.value = false }, 5000)
  }, 1500)
}
</script>

<style scoped>
.contact { padding: 100px 0; background: transparent; }

.section-badge {
  display: inline-flex; align-items: center;
  background: rgba(0,191,255,0.1); border: 1px solid rgba(0,191,255,0.25);
  padding: 6px 16px; border-radius: 40px;
  font-size: 0.82rem; font-weight: 500; color: #00BFFF; margin-bottom: 1rem;
}
[data-theme="light"] .section-badge { background: rgba(0,140,140,0.08); border-color: rgba(0,140,140,0.25); color: #008C8C; }

.section-title {
  font-family: 'Syne', sans-serif; font-size: 2.8rem; font-weight: 800;
  margin-bottom: 1rem; color: var(--text-primary);
}

.gradient-text {
  background: linear-gradient(120deg, #00BFFF 0%, #008C8C 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}

.section-divider {
  width: 60px; height: 3px;
  background: linear-gradient(90deg, #00BFFF, #008C8C);
  border-radius: 4px; margin: 0 auto 1rem;
}

.section-subtitle { color: var(--text-muted); font-size: 0.95rem; }

.contact-info { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem; }

.info-card {
  display: flex; align-items: center; gap: 1.2rem;
  background: var(--bg-card); backdrop-filter: blur(10px);
  padding: 1.2rem; border-radius: 18px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateX(6px);
  border-color: rgba(0,191,255,0.35);
  box-shadow: 0 4px 20px rgba(0,191,255,0.08);
}

.info-icon-wrapper {
  width: 52px; height: 52px;
  background: linear-gradient(135deg, rgba(0,31,63,0.7), rgba(0,140,140,0.2));
  border: 1px solid rgba(0,191,255,0.2);
  border-radius: 14px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}

.info-icon { color: #00BFFF; }
[data-theme="light"] .info-icon { color: #008C8C; }
[data-theme="light"] .info-icon-wrapper { background: rgba(0,140,140,0.08); border-color: rgba(0,140,140,0.2); }

.info-content h4 { font-size: 0.8rem; font-weight: 500; color: var(--text-muted); margin-bottom: 3px; }
.info-content p { font-size: 0.95rem; font-weight: 600; color: var(--text-primary); margin: 0; }

.social-section {
  background: var(--bg-card); backdrop-filter: blur(10px);
  padding: 1.4rem; border-radius: 18px;
  border: 1px solid var(--border-color);
}

.social-title {
  font-family: 'Syne', sans-serif; font-size: 0.95rem; font-weight: 700;
  color: var(--text-primary); margin-bottom: 1rem;
}

.social-links { display: flex; flex-wrap: wrap; gap: 8px; }

.social-link {
  display: flex; align-items: center; gap: 7px;
  padding: 8px 16px; border-radius: 40px;
  color: var(--text-secondary); text-decoration: none;
  font-size: 0.85rem; font-weight: 500;
  border: 1px solid var(--border-color);
  background: var(--bg-elevated);
  transition: all 0.3s ease;
}

.social-link i { font-size: 1.1rem; }

.social-link:hover {
  transform: translateY(-3px);
  border-color: rgba(0,191,255,0.4);
  color: #00BFFF;
  background: rgba(0,191,255,0.08);
}

/* FORM */
.form-wrapper {
  background: var(--bg-card); backdrop-filter: blur(10px);
  padding: 2rem; border-radius: 22px;
  border: 1px solid var(--border-color);
}

.field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 0.25rem; }

.field label {
  font-size: 0.78rem; font-weight: 500;
  color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em;
}

.field input,
.field textarea {
  width: 100%; padding: 12px 16px;
  background: var(--bg-elevated);
  border: 1.5px solid var(--border-color);
  border-radius: 12px; color: var(--text-primary);
  font-size: 0.92rem; transition: all 0.3s ease;
  resize: vertical; font-family: inherit;
}

.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: #00BFFF;
  box-shadow: 0 0 0 3px rgba(0,191,255,0.1);
}

.field input::placeholder,
.field textarea::placeholder { color: var(--text-muted); }

.btn-submit {
  width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;
  padding: 14px;
  background: linear-gradient(135deg, #00BFFF, #008C8C);
  border: none; border-radius: 12px;
  color: #001828; font-weight: 700; font-size: 1rem;
  cursor: pointer; transition: all 0.3s ease; margin-top: 0.5rem;
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(0,191,255,0.35);
}

.btn-submit:disabled { opacity: 0.7; cursor: not-allowed; }

.sending { display: flex; align-items: center; gap: 8px; }

.spinner {
  width: 17px; height: 17px;
  border: 2px solid rgba(0,24,40,0.3);
  border-top-color: #001828;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.success-message {
  display: flex; align-items: center; gap: 10px;
  padding: 12px 16px;
  background: rgba(34,197,94,0.1);
  border: 1px solid rgba(34,197,94,0.25);
  border-radius: 12px; color: #4ade80; font-size: 0.88rem;
}

@media (max-width: 768px) {
  .contact { padding: 60px 0; }
  .section-title { font-size: 2rem; }
  .form-wrapper { padding: 1.4rem; }
  .info-card:hover { transform: translateX(0); }
}

@media (max-width: 480px) {
  .section-title { font-size: 1.7rem; }
  .form-wrapper { padding: 1rem; }
  .social-link { flex: 1; justify-content: center; }
}
</style>