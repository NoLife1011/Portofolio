<template>
  <footer class="footer">
    <div class="container">
      
      <!-- Main Footer Content -->
      <div class="footer-content">
        
        <!-- Logo & Description -->
        <div class="footer-brand">
          <div class="brand-wrapper">
            <h2 class="footer-logo">
              Farrel<span class="logo-dot">.</span>
            </h2>
            <p class="footer-description">
              Building modern web experiences with Vue.js.<br>
              Focused on clean design and great performance.
            </p>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-links">
          <div class="links-column">
            <h6 class="links-title">Explore</h6>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div class="links-column">
            <h6 class="links-title">Resources</h6>
            <ul>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div class="links-column">
            <h6 class="links-title">Connect</h6>
            <ul class="social-links">
              <li>
                <a href="https://github.com/NoLife1011" target="_blank" class="social-link">
                  <i class="bi bi-github"></i>
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/f_ar_el" target="_blank" class="social-link">
                  <i class="bi bi-instagram"></i>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="social-link">
                  <i class="bi bi-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="social-link">
                  <i class="bi bi-twitter"></i>
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <!-- Contact Info Row -->
      <div class="contact-row">
        <div class="contact-item">
          <i class="bi bi-envelope-fill"></i>
          <a href="mailto:ezfarelez1011@gmail.com">ezfarelez1011@gmail.com</a>
        </div>
        <div class="contact-divider"></div>
        <div class="contact-item">
          <i class="bi bi-whatsapp"></i>
          <a href="#">+62 812-3456-7890</a>
        </div>
        <div class="contact-divider"></div>
        <div class="contact-item">
          <i class="bi bi-geo-alt-fill"></i>
          <span>Indonesia</span>
        </div>
      </div>

      <!-- Newsletter Section -->
      <div class="newsletter-section">
        <div class="newsletter-content">
          <p class="newsletter-text">Get notified about my latest projects</p>
          <form @submit.prevent="subscribeNewsletter" class="newsletter-form">
            <input 
              type="email" 
              v-model="newsletterEmail"
              placeholder="Your email address"
              required
            >
            <button type="submit">
              Subscribe
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </form>
          <p v-if="newsletterSuccess" class="newsletter-success">
            <i class="bi bi-check-circle-fill"></i> Subscribed successfully!
          </p>
        </div>
      </div>

      <!-- Copyright -->
      <div class="copyright">
        <p>&copy; 2026 Farrel. All rights reserved.</p>
        <div class="copyright-links">
          <a href="#">Privacy Policy</a>
          <span class="divider">|</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>

      <!-- Back to Top Button -->
      <button 
        v-show="showBackToTop" 
        @click="scrollToTop" 
        class="back-to-top"
      >
        <i class="bi bi-arrow-up"></i>
      </button>

    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showBackToTop = ref(false)
const newsletterEmail = ref('')
const newsletterSuccess = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const subscribeNewsletter = () => {
  if (newsletterEmail.value) {
    console.log('Newsletter subscription:', newsletterEmail.value)
    newsletterSuccess.value = true
    newsletterEmail.value = ''
    
    setTimeout(() => {
      newsletterSuccess.value = false
    }, 3000)
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.footer {
  background: linear-gradient(145deg, #0a0e1a, #0d0d1f);
  border-top: 1px solid rgba(59, 130, 246, 0.15);
  padding: 60px 0 30px;
  position: relative;
}

/* Footer Content Layout */
.footer-content {
  display: grid;
  grid-template-columns: 1.2fr 1.5fr;
  gap: 3rem;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* Brand Section */
.footer-brand {
  text-align: left;
}

.brand-wrapper {
  max-width: 300px;
}

.footer-logo {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff, #3b82f6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 0.75rem;
}

.logo-dot {
  color: #3b82f6;
  background: none;
  -webkit-background-clip: unset;
  background-clip: unset;
}

.footer-description {
  font-size: 0.85rem;
  color: #94a3b8;
  line-height: 1.6;
}

/* Links Section */
.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.links-title {
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.links-title::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 2px;
}

.links-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.links-column li {
  margin-bottom: 0.6rem;
}

.links-column a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.links-column a:hover {
  color: #3b82f6;
  transform: translateX(4px);
}

/* Social Links in Footer */
.social-links li {
  margin-bottom: 0.6rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #94a3b8;
  font-size: 0.85rem;
}

.social-link i {
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  color: #3b82f6;
}

.social-link:hover i {
  transform: scale(1.1);
}

/* Contact Row */
.contact-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
  padding: 1rem;
  background: rgba(59, 130, 246, 0.05);
  border-radius: 50px;
  border: 1px solid rgba(59, 130, 246, 0.1);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #cbd5e1;
  font-size: 0.85rem;
}

.contact-item i {
  font-size: 1.1rem;
  color: #3b82f6;
}

.contact-item a {
  color: #cbd5e1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: #3b82f6;
}

.contact-divider {
  width: 1px;
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
}

/* Newsletter Section */
.newsletter-section {
  margin-bottom: 2.5rem;
  padding: 2rem;
  background: rgba(15, 20, 35, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(59, 130, 246, 0.15);
}

.newsletter-content {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.newsletter-text {
  font-size: 0.9rem;
  color: #cbd5e1;
  margin-bottom: 1rem;
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.newsletter-form input {
  flex: 1;
  padding: 12px 16px;
  background: rgba(10, 14, 26, 0.8);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  color: white;
  font-size: 0.85rem;
  transition: all 0.3s ease;
}

.newsletter-form input:focus {
  outline: none;
  border-color: #3b82f6;
}

.newsletter-form input::placeholder {
  color: #64748b;
}

.newsletter-form button {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.newsletter-form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.newsletter-success {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 0.8rem;
  color: #4ade80;
  margin-top: 0.75rem;
}

/* Copyright */
.copyright {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.75rem;
}

.copyright p {
  color: #64748b;
  margin: 0;
}

.copyright-links {
  display: flex;
  gap: 0.5rem;
}

.copyright-links a {
  color: #64748b;
  text-decoration: none;
  transition: color 0.3s ease;
}

.copyright-links a:hover {
  color: #3b82f6;
}

.divider {
  color: #64748b;
}

/* Back to Top Button */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  z-index: 100;
}

.back-to-top:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

/* Responsive Design */
@media (max-width: 991px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-brand {
    text-align: center;
  }
  
  .brand-wrapper {
    max-width: 100%;
  }
  
  .footer-links {
    text-align: center;
  }
  
  .links-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .contact-row {
    flex-direction: column;
    border-radius: 24px;
    gap: 1rem;
  }
  
  .contact-divider {
    display: none;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 0 20px;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .newsletter-form {
    flex-direction: column;
  }
  
  .copyright {
    flex-direction: column;
    text-align: center;
  }
  
  .back-to-top {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .contact-item {
    font-size: 0.75rem;
  }
  
  .newsletter-section {
    padding: 1.5rem;
  }
}
</style>