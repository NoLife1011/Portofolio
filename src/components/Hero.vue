<template>
  <section id="hero" class="hero d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center g-4">
        
        <!-- Left Column - Text Content -->
        <div class="col-lg-7 col-md-12 order-2 order-lg-1">
          <div class="hero-content">
            
            <!-- Badge / Label -->
            <div 
              class="hero-badge mb-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span class="badge-pulse"></span>
              Welcome to my portfolio
            </div>

            <!-- Main Title -->
            <h1 
              class="hero-title"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Hi, I'm <span class="gradient-text">Farrel</span>
            </h1>

            <!-- Subtitle -->
            <div 
              class="hero-subtitle mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span class="role-badge">Student</span>
              <span class="separator">|</span>
              <span class="role-highlight">Web Developer</span>
            </div>

            <!-- Description -->
            <p 
              class="hero-description"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              I build modern and interactive websites using Vue.js. 
              Focused on clean design, performance, and user experience.
            </p>

            <!-- CTA Buttons -->
            <div 
              class="hero-buttons"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <a href="#projects" class="btn btn-primary btn-lg">
                <span>View Projects</span>
                <svg class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#contact" class="btn btn-outline btn-lg">
                <svg class="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Contact Me
              </a>
            </div>

          </div>
        </div>

        <!-- Right Column - Profile Image -->
        <div class="col-lg-5 col-md-12 order-1 order-lg-2">
          <div class="hero-image-wrapper">
            <div class="hero-image-container">
              <div class="glow-effect"></div>
              <img
                src="/src/assets/profile.png"
                alt="Farrel - Web Developer"
                class="hero-profile-img"
                data-aos="zoom-in"
                data-aos-delay="300"
              />
              <div class="floating-card floating-card-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                <span>Vue.js</span>
              </div>
              <div class="floating-card floating-card-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <span>Responsive</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* ===== VARIABLES ===== */
.hero {
  background: transparent;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  display: flex;
  align-items: center;
}

/* Animated background overlay */
.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

/* ===== CONTENT LAYOUT ===== */
.hero-content {
  position: relative;
  z-index: 2;
}

/* ===== BADGE ===== */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(59, 130, 246, 0.12);
  backdrop-filter: blur(4px);
  padding: 6px 16px;
  border-radius: 40px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.25);
}

.badge-pulse {
  width: 8px;
  height: 8px;
  background: #3b82f6;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
  box-shadow: 0 0 8px #3b82f6;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}

/* ===== TITLE ===== */
.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #ffffff;
  line-height: 1.2;
}

.gradient-text {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #3b82f6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  display: inline-block;
}

.gradient-text::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 3px;
}

/* ===== SUBTITLE ===== */
.hero-subtitle {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.role-badge {
  background: rgba(255, 255, 255, 0.08);
  padding: 6px 14px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 500;
  color: #cbd5e1;
}

.separator {
  color: #3b82f6;
  font-size: 1.2rem;
  font-weight: 600;
}

.role-highlight {
  font-size: 1.2rem;
  font-weight: 600;
  color: #3b82f6;
  position: relative;
}

.role-highlight::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #3b82f6;
  opacity: 0.3;
}

/* ===== DESCRIPTION ===== */
.hero-description {
  font-size: 1.1rem;
  color: #94a3b8;
  line-height: 1.6;
  max-width: 90%;
  margin-bottom: 2rem;
}

/* ===== BUTTONS ===== */
.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.btn-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  border: none;
  padding: 12px 28px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  text-decoration: none;
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
}

.btn-primary .btn-icon {
  transition: transform 0.3s ease;
}

.btn-primary:hover .btn-icon {
  transform: translateX(4px);
}

.btn-outline {
  background: transparent;
  border: 1.5px solid rgba(59, 130, 246, 0.5);
  padding: 12px 28px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  color: #ffffff;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}

.btn-outline:hover {
  background: rgba(59, 130, 246, 0.1);
  border-color: #3b82f6;
  transform: translateY(-2px);
  color: white;
}

.btn-lg {
  padding: 12px 28px;
  font-size: 1rem;
}

/* ===== PROFILE IMAGE ===== */
.hero-image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image-container {
  position: relative;
  width: 100%;
  max-width: 380px;
}

.glow-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  animation: glowPulse 3s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(0.9);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

.hero-profile-img {
  width: 100%;
  max-width: 350px;
  height: auto;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.3));
  transition: all 0.4s ease;
}

.hero-profile-img:hover {
  transform: scale(1.02);
  filter: drop-shadow(0 25px 40px rgba(59, 130, 246, 0.2));
}

/* Floating Cards */
.floating-card {
  position: absolute;
  background: rgba(15, 20, 35, 0.85);
  backdrop-filter: blur(12px);
  padding: 8px 16px;
  border-radius: 40px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #60a5fa;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(59, 130, 246, 0.3);
  z-index: 3;
  animation: float 3s ease-in-out infinite;
}

.floating-card-1 {
  top: 10%;
  right: -10px;
  animation-delay: 0s;
}

.floating-card-2 {
  bottom: 15%;
  left: -20px;
  animation-delay: 1.5s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 991.98px) {
  .hero {
    min-height: auto;
    padding: 100px 0 80px;
  }
  
  .hero-content {
    text-align: center;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    justify-content: center;
  }
  
  .hero-description {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    font-size: 1rem;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .hero-image-container {
    margin: 0 auto;
    max-width: 300px;
  }
  
  .hero-profile-img {
    max-width: 280px;
  }
  
  .floating-card-1 {
    right: 0px;
    top: 0%;
  }
  
  .floating-card-2 {
    left: 0px;
    bottom: 5%;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    gap: 8px;
  }
  
  .role-badge {
    font-size: 0.85rem;
    padding: 4px 10px;
  }
  
  .role-highlight {
    font-size: 1rem;
  }
  
  .hero-description {
    font-size: 0.95rem;
  }
  
  .hero-buttons {
    gap: 12px;
  }
  
  .btn-primary, .btn-outline {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
  
  .hero-image-container {
    max-width: 260px;
  }
  
  .hero-profile-img {
    max-width: 240px;
  }
  
  .floating-card {
    padding: 5px 12px;
    font-size: 0.7rem;
  }
  
  .floating-card svg {
    width: 14px;
    height: 14px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 80px 0 60px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .gradient-text::after {
    height: 2px;
  }
  
  .hero-badge {
    font-size: 0.75rem;
    padding: 4px 12px;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: stretch;
  }
  
  .btn-primary, .btn-outline {
    justify-content: center;
  }
  
  .floating-card {
    display: none;
  }
  
  .hero-image-container {
    max-width: 220px;
  }
  
  .hero-profile-img {
    max-width: 200px;
  }
}

/* Smooth hover transitions */
.btn-primary, .btn-outline, .hero-profile-img {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>