<template>
  <footer class="footer">
    <div class="footer-glow"></div>
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
      <div class="newsletter-section">
        <div class="newsletter-content">
          <p class="newsletter-text">Get notified about my latest projects</p>
          <form @submit.prevent="subscribeNewsletter" class="newsletter-form">
            <input type="email" v-model="newsletterEmail" placeholder="Your email address" required />
            <button type="submit">
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
  border-top: 1px solid var(--border-color);
  padding: 60px 0 30px; position: relative; overflow: hidden;
}

.footer-glow {
  position: absolute; top: -80px; left: 50%; transform: translateX(-50%);
  width: 700px; height: 200px;
  background: radial-gradient(ellipse, rgba(0,31,63,0.5) 0%, rgba(0,140,140,0.1) 50%, transparent 70%);
  filter: blur(40px); pointer-events: none;
}

.footer-content {
  display: grid; grid-template-columns: 1.2fr 1.5fr;
  gap: 3rem; margin-bottom: 3rem; padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
}

.footer-logo {
  font-family: 'Syne', sans-serif; font-size: 2rem; font-weight: 800;
  background: linear-gradient(120deg, #fff 20%, #00BFFF 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent;
  margin-bottom: 0.75rem;
}

[data-theme="light"] .footer-logo {
  background: linear-gradient(120deg, #001828 20%, #008C8C 100%);
  -webkit-background-clip: text; background-clip: text;
}

.logo-dot { color: #00BFFF; background: none; -webkit-background-clip: unset; background-clip: unset; }

.footer-description { font-size: 0.84rem; color: var(--text-muted); line-height: 1.65; }

.footer-links { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }

.links-title {
  font-family: 'Syne', sans-serif; font-size: 0.9rem; font-weight: 700;
  color: var(--text-primary); margin-bottom: 1rem;
  position: relative; display: inline-block;
}

.links-title::after {
  content: ''; position: absolute; bottom: -5px; left: 0;
  width: 28px; height: 2px;
  background: linear-gradient(90deg, #00BFFF, #008C8C);
  border-radius: 2px;
}

.links-column ul { list-style: none; padding: 0; margin: 0; }
.links-column li { margin-bottom: 0.6rem; }

.links-column a {
  color: var(--text-muted); text-decoration: none;
  font-size: 0.84rem; transition: all 0.3s ease; display: inline-block;
}

.links-column a:hover { color: #00BFFF; transform: translateX(4px); }

.social-links li { margin-bottom: 0.6rem; }

.social-link {
  display: flex; align-items: center; gap: 8px;
  color: var(--text-muted); font-size: 0.84rem;
  text-decoration: none; transition: all 0.3s ease;
}

.social-link i { font-size: 1rem; }
.social-link:hover { color: #00BFFF; }

/* Contact row */
.contact-row {
  display: flex; justify-content: center; align-items: center;
  gap: 2rem; flex-wrap: wrap; margin-bottom: 2.5rem;
  padding: 1rem 1.5rem;
  background: rgba(0,191,255,0.04);
  border-radius: 50px;
  border: 1px solid var(--border-color);
}

.contact-item {
  display: flex; align-items: center; gap: 8px;
  color: var(--text-secondary); font-size: 0.84rem;
}

.contact-item i { font-size: 1rem; color: #00BFFF; }
[data-theme="light"] .contact-item i { color: #008C8C; }
.contact-item a { color: var(--text-secondary); text-decoration: none; transition: color 0.3s ease; }
.contact-item a:hover { color: #00BFFF; }
.contact-divider { width: 1px; height: 18px; background: var(--border-color); }

/* Newsletter */
.newsletter-section {
  margin-bottom: 2.5rem; padding: 2rem;
  background: var(--bg-elevated);
  border-radius: 22px; border: 1px solid var(--border-color);
}

.newsletter-content { text-align: center; max-width: 500px; margin: 0 auto; }
.newsletter-text { font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1rem; }

.newsletter-form { display: flex; gap: 0.5rem; margin-bottom: 0.5rem; }

.newsletter-form input {
  flex: 1; padding: 11px 16px;
  background: var(--bg-card);
  border: 1.5px solid var(--border-color);
  border-radius: 12px; color: var(--text-primary);
  font-size: 0.84rem; transition: all 0.3s ease;
}

.newsletter-form input:focus {
  outline: none; border-color: #00BFFF;
  box-shadow: 0 0 0 3px rgba(0,191,255,0.08);
}

.newsletter-form input::placeholder { color: var(--text-muted); }

.newsletter-form button {
  display: flex; align-items: center; gap: 6px;
  padding: 11px 20px;
  background: linear-gradient(135deg, #00BFFF, #008C8C);
  border: none; border-radius: 12px;
  color: #001828; font-weight: 700; font-size: 0.84rem;
  cursor: pointer; transition: all 0.3s ease;
}

.newsletter-form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0,191,255,0.3);
}

.newsletter-success {
  display: flex; align-items: center; justify-content: center; gap: 6px;
  font-size: 0.8rem; color: #4ade80; margin-top: 0.75rem;
}

/* Copyright */
.copyright {
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 1rem; padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  font-size: 0.75rem;
}

.copyright p { color: var(--text-muted); margin: 0; }
.copyright-links { display: flex; gap: 0.5rem; }
.copyright-links a { color: var(--text-muted); text-decoration: none; transition: color 0.3s ease; }
.copyright-links a:hover { color: #00BFFF; }
.divider { color: var(--text-muted); }

/* Back to top */
.back-to-top {
  position: fixed; bottom: 28px; right: 28px;
  width: 46px; height: 46px;
  background: linear-gradient(135deg, #001F3F, #008C8C);
  border: 1px solid rgba(0,191,255,0.3);
  border-radius: 12px; color: #00BFFF;
  font-size: 1.1rem; cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0,31,63,0.4);
  z-index: 200;
  display: flex; align-items: center; justify-content: center;
}

.back-to-top:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0,191,255,0.25);
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