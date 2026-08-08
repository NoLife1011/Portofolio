<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Brand -->
        <div class="footer-brand">
          <div class="brand-wrapper">
            <h2 class="footer-logo">Farrel<span class="logo-dot">.</span></h2>
            <p class="footer-description">
              Building modern web experiences with Vue.js.<br>
              Focused on clean design and great performance.
            </p>
          </div>
        </div>

        <!-- Links -->
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
              <li><a href="https://github.com/NoLife1011" target="_blank" class="social-link"><i class="bi bi-github"></i><span>GitHub</span></a></li>
              <li><a href="https://instagram.com/f_ar_el" target="_blank" class="social-link"><i class="bi bi-instagram"></i><span>Instagram</span></a></li>
              <li><a href="#" target="_blank" class="social-link"><i class="bi bi-linkedin"></i><span>LinkedIn</span></a></li>
              <li><a href="#" target="_blank" class="social-link"><i class="bi bi-twitter"></i><span>Twitter</span></a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Contact row -->
      <div class="contact-row">
        <div class="contact-item"><i class="bi bi-envelope-fill"></i><a href="mailto:ezfarelez1011@gmail.com">ezfarelez1011@gmail.com</a></div>
        <div class="contact-divider"></div>
        <div class="contact-item"><i class="bi bi-whatsapp"></i><a href="#">+62 812-3456-7890</a></div>
        <div class="contact-divider"></div>
        <div class="contact-item"><i class="bi bi-geo-alt-fill"></i><span>Indonesia</span></div>
      </div>

      <!-- Newsletter -->
      <div class="newsletter-section comic-panel">
        <div class="newsletter-content">
          <p class="newsletter-text comic-font">Get notified about my latest projects!</p>
          <form @submit.prevent="subscribeNewsletter" class="newsletter-form">
            <input type="email" v-model="newsletterEmail" placeholder="Your email address" required />
            <button type="submit" class="comic-btn">
              Subscribe
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </form>
          <p v-if="newsletterSuccess" class="newsletter-success">
            <i class="bi bi-check-circle-fill"></i> Subscribed!
          </p>
        </div>
      </div>

      <!-- Copyright -->
      <div class="copyright">
        <p>© 2026 Farrel. All rights reserved.</p>
        <div class="copyright-links">
          <a href="#">Privacy Policy</a>
          <span class="divider">|</span>
          <a href="#">Terms</a>
        </div>
      </div>

      <!-- Back to top -->
      <button v-show="showBackToTop" @click="scrollToTop" class="back-to-top" aria-label="Back to top">
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

const handleScroll = () => { showBackToTop.value = window.scrollY > 500 }
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
const subscribeNewsletter = () => {
  if (newsletterEmail.value) {
    newsletterSuccess.value = true
    newsletterEmail.value = ''
    setTimeout(() => { newsletterSuccess.value = false }, 3000)
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.footer {
  background: var(--bg-card);
  border-top: var(--border-w) solid var(--ink);
  padding: 60px 0 30px; position: relative; overflow: hidden;
}

.footer-content {
  display: grid; grid-template-columns: 1.2fr 1.5fr;
  gap: 3rem; margin-bottom: 3rem; padding-bottom: 2rem;
  border-bottom: 2px dashed var(--line);
}

.footer-logo {
  font-size: 2.1rem;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.logo-dot { color: var(--accent); }

.footer-description { font-size: 0.84rem; color: var(--text-muted); line-height: 1.65; }

.footer-links { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }

.links-title {
  font-size: 0.9rem; font-weight: 900;
  color: var(--text-primary); margin-bottom: 1rem;
  position: relative; display: inline-block;
  text-transform: uppercase;
}

.links-title::after {
  content: ''; position: absolute; bottom: -5px; left: 0;
  width: 30px; height: 3px;
  background: var(--accent);
}

.links-column ul { list-style: none; padding: 0; margin: 0; }
.links-column li { margin-bottom: 0.6rem; }

.links-column a {
  color: var(--text-muted); text-decoration: none;
  font-size: 0.84rem; transition: all 0.2s ease; display: inline-block;
}

.links-column a:hover { color: var(--accent); transform: translateX(4px); }

.social-links li { margin-bottom: 0.6rem; }

.social-link {
  display: flex; align-items: center; gap: 8px;
  color: var(--text-muted); font-size: 0.84rem;
  text-decoration: none; transition: all 0.2s ease;
}

.social-link i { font-size: 1rem; }
.social-link:hover { color: var(--accent); }

/* Contact row */
.contact-row {
  display: flex; justify-content: center; align-items: center;
  gap: 2rem; flex-wrap: wrap; margin-bottom: 2.5rem;
  padding: 1rem 1.5rem;
  background: var(--bg-elevated);
  border-radius: 50px;
  border: 2px solid var(--ink);
}

.contact-item {
  display: flex; align-items: center; gap: 8px;
  color: var(--text-secondary); font-size: 0.84rem;
}

.contact-item i { font-size: 1rem; color: var(--accent); }
.contact-item a { color: var(--text-secondary); text-decoration: none; transition: color 0.2s ease; }
.contact-item a:hover { color: var(--accent); }
.contact-divider { width: 1px; height: 18px; background: var(--line); }

/* Newsletter */
.newsletter-section {
  margin-bottom: 2.5rem; padding: 2rem;
}

.newsletter-content { text-align: center; max-width: 500px; margin: 0 auto; }
.newsletter-text { font-size: 1.2rem; color: var(--text-primary); margin-bottom: 1rem; }

.newsletter-form { display: flex; gap: 0.5rem; margin-bottom: 0.5rem; }

.newsletter-form input {
  flex: 1; padding: 11px 16px;
  background: var(--bg-card);
  border: 2px solid var(--ink);
  border-radius: 10px; color: var(--text-primary);
  font-size: 0.84rem; transition: all 0.2s ease;
}

.newsletter-form input:focus {
  outline: none; border-color: var(--accent);
  box-shadow: 3px 3px 0 var(--ink);
}

.newsletter-form input::placeholder { color: var(--text-muted); }

.newsletter-form button {
  padding: 11px 20px;
  background: var(--accent);
  border-radius: 10px;
  color: #fff; font-weight: 800; font-size: 0.84rem;
  cursor: pointer;
}

.newsletter-success {
  display: flex; align-items: center; justify-content: center; gap: 6px;
  font-size: 0.8rem; color: var(--text-primary); font-weight: 700; margin-top: 0.75rem;
}

/* Copyright */
.copyright {
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 1rem; padding-top: 1.5rem;
  border-top: 2px dashed var(--line);
  font-size: 0.75rem;
}

.copyright p { color: var(--text-muted); margin: 0; }
.copyright-links { display: flex; gap: 0.5rem; }
.copyright-links a { color: var(--text-muted); text-decoration: none; transition: color 0.2s ease; }
.copyright-links a:hover { color: var(--accent); }
.divider { color: var(--text-muted); }

/* Back to top */
.back-to-top {
  position: fixed; bottom: 28px; right: 28px;
  width: 48px; height: 48px;
  background: var(--accent);
  border: var(--border-w) solid var(--ink);
  border-radius: 12px; color: #fff;
  font-size: 1.2rem; cursor: pointer;
  transition: all 0.15s ease;
  box-shadow: var(--panel-shadow-sm);
  z-index: 200;
  display: flex; align-items: center; justify-content: center;
}

.back-to-top:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 var(--ink);
}

/* Responsive */
@media (max-width: 991px) {
  .footer-content { grid-template-columns: 1fr; }
  .footer-brand { text-align: center; }
  .brand-wrapper { max-width: 100%; }
  .footer-links { text-align: center; }
  .links-title::after { left: 50%; transform: translateX(-50%); }
  .contact-row { flex-direction: column; border-radius: 20px; }
  .contact-divider { display: none; }
}

@media (max-width: 768px) {
  .footer { padding: 40px 0 20px; }
  .footer-links { grid-template-columns: 1fr; gap: 1.5rem; }
  .newsletter-form { flex-direction: column; }
  .copyright { flex-direction: column; text-align: center; }
}
</style>