<template>
  <section id="about" class="about d-flex align-items-center">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header text-center mb-5">
        <div class="section-badge">Get to know me</div>
        <h2 class="section-title">
          About <span class="gradient-text">Me</span>
        </h2>
        <div class="section-divider"></div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-10">
          <!-- Main Content Card -->
          <div class="about-card">
            <div class="row g-4">
              
              <!-- Left Side - Intro Text -->
              <div class="col-md-12">
                <div class="about-intro">
                  <div class="quote-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5">
                      <path d="M10 11h-4v-4h4v4zM18 11h-4v-4h4v4z"/>
                      <path d="M20 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"/>
                    </svg>
                  </div>
                  
                  <p class="intro-text">
                    Hello! I'm <span class="highlight">Farrel</span>, a passionate student 
                    who loves turning ideas into beautiful, functional websites.
                  </p>
                </div>
              </div>

              <!-- Description Cards -->
              <div class="col-md-4">
                <div class="info-card">
                  <div class="card-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <h4>My Journey</h4>
                  <p>I started coding as a student and quickly fell in love with web development, especially creating modern, responsive websites.</p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="info-card">
                  <div class="card-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                    </svg>
                  </div>
                  <h4>My Focus</h4>
                  <p>Vue.js is my go-to framework. I love building interactive UIs with clean code, great performance, and smooth user experiences.</p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="info-card">
                  <div class="card-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <h4>My Strength</h4>
                  <p>I work best independently, focusing deeply on clean designs, efficient solutions, and delivering quality results.</p>
                </div>
              </div>

            </div>

            <!-- Personal Info Grid -->
            <div class="personal-info mt-5">
              <h3 class="info-title">Personal Information</h3>
              <div class="info-grid">
                <div class="info-item">
                  <span class="info-label">Name</span>
                  <span class="info-value">Farrel</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Age</span>
                  <span class="info-value">16</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Status</span>
                  <span class="info-value">Student</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Focus</span>
                  <span class="info-value gradient-text">Web Developer</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Based In</span>
                  <span class="info-value">Indonesia</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Email</span>
                  <span class="info-value">farrel@example.com</span>
                </div>
              </div>
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
  margin: 0 auto;
}

/* About Card */
.about-card {
  background: rgba(15, 20, 35, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 32px;
  padding: 2.5rem;
  border: 1px solid rgba(59, 130, 246, 0.2);
  transition: all 0.3s ease;
}

.about-card:hover {
  border-color: rgba(59, 130, 246, 0.4);
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.1);
}

/* Intro Section */
.about-intro {
  background: rgba(59, 130, 246, 0.08);
  border-radius: 24px;
  padding: 1.8rem;
  margin-bottom: 1.5rem;
  border-left: 3px solid #3b82f6;
  position: relative;
}

.quote-icon {
  position: absolute;
  top: -15px;
  left: 20px;
  background: rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  padding: 8px;
  backdrop-filter: blur(4px);
}

.intro-text {
  font-size: 1.2rem;
  line-height: 1.7;
  color: #cbd5e1;
  margin-top: 0.5rem;
  margin-bottom: 0;
}

.highlight {
  color: #3b82f6;
  font-weight: 600;
}

/* Info Cards */
.info-card {
  background: rgba(10, 14, 26, 0.7);
  border-radius: 20px;
  padding: 1.5rem;
  height: 100%;
  transition: all 0.3s ease;
  border: 1px solid rgba(59, 130, 246, 0.15);
}

.info-card:hover {
  transform: translateY(-5px);
  border-color: rgba(59, 130, 246, 0.4);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.card-icon {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.1));
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
  color: #3b82f6;
}

.info-card h4 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: #ffffff;
}

.info-card p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #94a3b8;
  margin-bottom: 0;
}

/* Personal Info */
.personal-info {
  background: rgba(10, 14, 26, 0.5);
  border-radius: 24px;
  padding: 1.8rem;
  margin-top: 2rem;
}

.info-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #ffffff;
  position: relative;
  display: inline-block;
}

.info-title::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 40px;
  height: 2px;
  background: #3b82f6;
  border-radius: 2px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.info-label {
  font-size: 0.9rem;
  font-weight: 500;
  color: #94a3b8;
}

.info-value {
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
}

/* Responsive */
@media (max-width: 991px) {
  .about {
    padding: 80px 0;
  }
  
  .about-card {
    padding: 1.8rem;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .intro-text {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .about-card {
    padding: 1.5rem;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .info-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
  
  .info-value {
    font-size: 0.9rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .about-intro {
    padding: 1.5rem;
  }
  
  .quote-icon {
    position: relative;
    top: 0;
    left: 0;
    display: inline-flex;
    margin-bottom: 1rem;
  }
  
  .intro-text {
    margin-top: 0;
  }
}

@media (max-width: 480px) {
  .about-card {
    padding: 1.2rem;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .info-card {
    padding: 1.2rem;
  }
}
</style>