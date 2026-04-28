<template>
  <section id="contact" class="contact">
    <div class="container">

      <!-- Section Header -->
      <div class="section-header text-center mb-5">
        <div class="section-badge">Get In Touch</div>
        <h2 class="section-title">
          Contact <span class="gradient-text">Me</span>
        </h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">
          Have a project in mind? Let's work together!
        </p>
      </div>

      <div class="row g-4">
        
        <!-- LEFT SIDE - INFO & SOCIAL -->
        <div class="col-lg-5">
          <div class="contact-info">
            
            <div class="info-card">
              <div class="info-icon-wrapper">
                <div class="info-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
              </div>
              <div class="info-content">
                <h4>Phone</h4>
                <p>+62 812-3456-7890</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon-wrapper">
                <div class="info-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-10 7L2 7"/>
                  </svg>
                </div>
              </div>
              <div class="info-content">
                <h4>Email</h4>
                <p>ezfarelez1011@gmail.com</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon-wrapper">
                <div class="info-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
              </div>
              <div class="info-content">
                <h4>Location</h4>
                <p>Indonesia</p>
              </div>
            </div>

          </div>

          <!-- Social Links -->
          <div class="social-section">
            <h4 class="social-title">Connect with me</h4>
            <div class="social-links">
              <a href="https://github.com/NoLife1011" target="_blank" class="social-link github">
                <i class="bi bi-github"></i>
                <span>GitHub</span>
              </a>
              <a href="https://instagram.com/f_ar_el" target="_blank" class="social-link instagram">
                <i class="bi bi-instagram"></i>
                <span>Instagram</span>
              </a>
              <a href="#" target="_blank" class="social-link linkedin">
                <i class="bi bi-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a href="#" target="_blank" class="social-link twitter">
                <i class="bi bi-twitter"></i>
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <!-- RIGHT SIDE - FORM -->
        <div class="col-lg-7">
          <div class="form-wrapper">
            <form @submit.prevent="submitForm" class="contact-form">
              
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="input-group-custom">
                    <label>Your Name</label>
                    <input 
                      type="text" 
                      v-model="formData.name"
                      class="form-control-custom" 
                      placeholder="John Doe"
                      required
                    >
                    <span class="input-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                    </span>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="input-group-custom">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      v-model="formData.email"
                      class="form-control-custom" 
                      placeholder="john@example.com"
                      required
                    >
                    <span class="input-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="m22 7-10 7L2 7"/>
                      </svg>
                    </span>
                  </div>
                </div>

                <div class="col-12">
                  <div class="input-group-custom">
                    <label>Subject</label>
                    <input 
                      type="text" 
                      v-model="formData.subject"
                      class="form-control-custom" 
                      placeholder="Project Collaboration"
                    >
                    <span class="input-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                      </svg>
                    </span>
                  </div>
                </div>

                <div class="col-12">
                  <div class="input-group-custom">
                    <label>Message</label>
                    <textarea 
                      v-model="formData.message"
                      class="form-control-custom textarea-custom" 
                      rows="5" 
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                    <span class="input-icon textarea-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                      </svg>
                    </span>
                  </div>
                </div>

                <div class="col-12">
                  <button type="submit" class="btn-submit" :disabled="isSubmitting">
                    <span v-if="!isSubmitting">
                      Send Message
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </span>
                    <span v-else>
                      Sending...
                      <div class="spinner"></div>
                    </span>
                  </button>
                </div>

                <!-- Success Message -->
                <div v-if="showSuccess" class="col-12">
                  <div class="success-message">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    Message sent successfully! I'll get back to you soon.
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

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulasi pengiriman (ganti dengan API call asli)
  setTimeout(() => {
    console.log('Form Data:', formData.value)
    isSubmitting.value = false
    showSuccess.value = true
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
  }, 1500)
}
</script>

<style scoped>
.contact {
  min-height: 100vh;
  padding: 100px 0;
  background: transparent;
  position: relative;
}

/* Section Header */
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
  margin: 0 auto 1rem;
}

.section-subtitle {
  color: #94a3b8;
  font-size: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

/* Contact Info Cards */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background: rgba(15, 20, 35, 0.6);
  backdrop-filter: blur(10px);
  padding: 1.2rem;
  border-radius: 20px;
  border: 1px solid rgba(59, 130, 246, 0.15);
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateX(8px);
  border-color: rgba(59, 130, 246, 0.4);
  box-shadow: 0 5px 20px rgba(59, 130, 246, 0.1);
}

.info-icon-wrapper {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.1));
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-icon {
  color: #3b82f6;
}

.info-content h4 {
  font-size: 0.9rem;
  font-weight: 600;
  color: #94a3b8;
  margin-bottom: 0.25rem;
}

.info-content p {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0;
}

/* Social Section */
.social-section {
  background: rgba(15, 20, 35, 0.6);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 20px;
  border: 1px solid rgba(59, 130, 246, 0.15);
}

.social-title {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 40px;
  color: #cbd5e1;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link i {
  font-size: 1.2rem;
}

.social-link:hover {
  transform: translateY(-3px);
}

.social-link.github:hover {
  background: #333;
  color: white;
}

.social-link.instagram:hover {
  background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
  color: white;
}

.social-link.linkedin:hover {
  background: #0077b5;
  color: white;
}

.social-link.twitter:hover {
  background: #1da1f2;
  color: white;
}

/* Form Wrapper */
.form-wrapper {
  background: rgba(15, 20, 35, 0.6);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 24px;
  border: 1px solid rgba(59, 130, 246, 0.15);
}

.input-group-custom {
  position: relative;
  margin-bottom: 1rem;
}

.input-group-custom label {
  display: block;
  font-size: 0.85rem;
  font-weight: 500;
  color: #cbd5e1;
  margin-bottom: 0.5rem;
}

.form-control-custom {
  width: 100%;
  padding: 12px 40px 12px 16px;
  background: rgba(10, 14, 26, 0.8);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  color: white;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.form-control-custom:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-control-custom::placeholder {
  color: #64748b;
}

.textarea-custom {
  resize: vertical;
  font-family: inherit;
}

.input-icon {
  position: absolute;
  right: 12px;
  bottom: 12px;
  color: #64748b;
  transition: color 0.3s ease;
}

.form-control-custom:focus + .input-icon {
  color: #3b82f6;
}

.textarea-icon {
  bottom: auto;
  top: 42px;
}

/* Submit Button */
.btn-submit {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-submit svg {
  transition: transform 0.3s ease;
}

.btn-submit:hover:not(:disabled) svg {
  transform: translateX(4px);
}

/* Spinner */
.spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  display: inline-block;
  margin-left: 8px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Success Message */
.success-message {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: rgba(34, 197, 94, 0.15);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 12px;
  color: #4ade80;
  font-size: 0.9rem;
  margin-top: 1rem;
}

/* Responsive */
@media (max-width: 991px) {
  .contact {
    padding: 80px 0;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .form-wrapper {
    padding: 1.5rem;
  }
  
  .info-card:hover {
    transform: translateX(0);
  }
  
  .social-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.6rem;
  }
  
  .form-wrapper {
    padding: 1rem;
  }
  
  .social-link {
    flex: 1;
    justify-content: center;
  }
}
</style>