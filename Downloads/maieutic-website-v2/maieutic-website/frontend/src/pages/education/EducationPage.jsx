import React from 'react';
import { Helmet } from 'react-helmet';
import '@/styles/global.css';

export default function EducationPage() {
  return (
    <>
      <Helmet>
        <title>Education | Maieutic Edutech</title>
      </Helmet>

      <div style={{ paddingTop: '116px' }}>
        <main className="opm-page">

          {/* =========================================
              HERO SECTION
          ========================================= */}

          <section className="hero-section">

            <div className="hero-overlay"></div>

            <div className="hero-content">

              <h1>
                Online Program Management (OPM)
                <br />
                A 360° Approach
              </h1>

              <p>
                The rising demand for flexible learning, along with the National Education Policy (NEP) 2020 vision for digital education, is redefining how universities deliver knowledge. We collaborate with universities to manage their online programs. Together, we build your online university. With an end-to-end approach, we partner with institutions to launch, manage, and grow high-impact online degree programs-covering everything from program strategy to student success. At the core of it all is one belief: quality content is the foundation of sustainable success in online education.
              </p>

            </div>

          </section>

          {/* =========================================
              CONTENT DEVELOPMENT
          ========================================= */}

          <section className="section-heading">

            <span>OPM SERVICES</span>

            <h2>
              Content Development
            </h2>

          </section>

          {/* =========================================
              CARDS
          ========================================= */}

          <section className="cards-grid">

            {/* CARD */}

            <div className="content-card">

              <img
                src="/images/indian-woman.jpg"
                alt=""
              />

              <div className="card-overlay"></div>

              <div className="card-content">

                <h3>
                  Subject Matter Expert (SME)/ Industry Expert Identification
                </h3>

                <p>
                  We onboard highly qualified Subject Matter Experts (SMEs) and industry professionals based on domain relevance and experience. Our selection criteria ensure:
                  Academic experts with strong research and teaching backgrounds
                  Industry professionals with deep, real-world expertise
                </p>

              </div>

            </div>

            {/* CARD */}

            <div className="content-card">

              <img
                src="/images/books.jpg"
                alt=""
              />

              <div className="card-overlay"></div>

              <div className="card-content">

                <h3>
                  ⁠E-Content (SLMs) & Assessments
                </h3>

                <p>
                  Structured Self-Learning Materials (SLMs) are developed in alignment with the approved curriculum and academic framework. Assessments are carefully designed to map learning outcomes and follow Bloom's Taxonomy for depth and progression.
                </p>

              </div>

            </div>

            {/* CARD */}

            <div className="content-card">

              <img
src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop
"
                alt=""
              />

              <div className="card-overlay"></div>

              <div className="card-content">

                <h3>
                  Storyboard Creation
                </h3>

                <p>
                  We translate academic content into engaging visual narratives.
                  Each storyboard is crafted with:
                </p>

                <ul className="chip-list">
                  <li>- Relevant visuals and media</li>
                  <li>- Clear learning flow</li>
                  <li>- Audience-centric design</li>
                </ul>

              </div>

            </div>

            {/* CARD */}

            <div className="content-card">

              <img
                src="/images/studio.png"
                alt=""
              />

              <div className="card-overlay"></div>

              <div className="card-content">

                <h3>
                  Recording
                </h3>

                <p>
                  Content is recorded in our fully equipped in-house studios, featuring:
                </p>

                <ul className="chip-list">
                  <li>- Green screen setups</li>
                  <li>- Smartboard-based teaching</li>
                  <li>- Pen-tab Interactive delivery formats</li>
                </ul>

              </div>

            </div>

            {/* CARD */}

            <div className="content-card">

              <img
                src="/images/4.png"
                alt=""
              />

              <div className="card-overlay"></div>

              <div className="card-content">

                <h3>
                  ⁠E-Tutorial Production
                </h3>

                <p>
                  We transform recordings into structured, bite-sized video modules by integrating visuals, storyboards, and instructional elements-ensuring clarity, engagement, and retention.
                </p>

              </div>

            </div>

          </section>

          {/* =========================================
              FEATURE SECTION 1
          ========================================= */}

          <section className="feature-section green-bg">

            {/* LEFT */}

            <div className="feature-content">

              <div className="top-label">

                <div className="small-icon">
                  <i className="ri-megaphone-line"></i>
                </div>

                <div>

                  <span>
                    GROWTH & OUTREACH
                  </span>

                  <div className="line"></div>

                </div>

              </div>

              <h2>
                Marketing, Digital Rights,
                <br />
                & Network Management
              </h2>

              <p>
                We take exclusive operational rights to plan, execute, manage, and optimize all digital marketing and student acquisition activities for the Online Programmes. We ensure the effective running and management of digital advertising campaigns across search engines, social media platforms, display networks, affiliate networks, and third-party aggregators to promote the programmes to student
              </p>

              {/* FEATURES */}

              <div className="feature-list">

                <div className="item">

                  <div className="circle">
                    <i className="ri-line-chart-line"></i>
                  </div>

                  <div>
                    <h4>Strategic Marketing</h4>

                    <span>
                      Data-driven campaigns for higher reach
                    </span>
                  </div>

                </div>

                <div className="item">

                  <div className="circle">
                    <i className="ri-team-line"></i>
                  </div>

                  <div>
                    <h4>Student Outreach</h4>

                    <span>
                      Connecting with learner communities
                    </span>
                  </div>

                </div>

                <div className="item">

                  <div className="circle">
                    <i className="ri-global-line"></i>
                  </div>

                  <div>
                    <h4>Network Partnerships</h4>

                    <span>
                      Building strong alliances
                    </span>
                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="feature-visual">

              <div className="visual-glow"></div>

              <img
                src="/images/growth.png"
                className="visual-image"
                alt=""
              />

            </div>

          </section>

          {/* =========================================
              FEATURE SECTION 2
          ========================================= */}

          <section className="feature-section red-bg">

            {/* LEFT */}

            <div className="feature-content">

              <div className="top-label">

                <div className="small-icon red-icon">
                  <i className="ri-computer-line"></i>
                </div>

                <div>

                  <span className="pink-text">
                    TECHNOLOGY INFRASTRUCTURE
                  </span>

                  <div className="line pink-line"></div>

                </div>

              </div>

              <h2>
                Learning Management System
                Deployment & Management
              </h2>

              <p>
                We ensure that the LMS complies with all UGC-DEB Online Education Regulations and applicable data security standards. The LMS supports the Four-Quadrant Academic Delivery Model, including: e-content and video lectures; e-SLM and digital reading materials; discussion forums and mentoring support; and assessments and proctored examinations.
              </p>

              {/* FEATURES */}

              <div className="feature-list">

                <div className="item">

                  <div className="circle">
                    <i className="ri-cloud-line"></i>
                  </div>

                  <div>
                    <h4>Smooth Deployment</h4>

                    <span>
                      Seamless LMS setup and integration
                    </span>
                  </div>

                </div>

                <div className="item">

                  <div className="circle">
                    <i className="ri-shield-check-line"></i>
                  </div>

                  <div>
                    <h4>Secure & Accessible</h4>

                    <span>
                      Ensuring reliability and learner accessibility
                    </span>
                  </div>

                </div>

                <div className="item">

                  <div className="circle">
                    <i className="ri-settings-3-line"></i>
                  </div>

                  <div>
                    <h4>Efficient Management</h4>

                    <span>
                      Continuous monitoring and performance optimization
                    </span>
                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="feature-visual">

              <div className="visual-glow"></div>

              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop
"
                alt=""
                className="visual-image"
              />

            </div>

          </section>

          {/* =========================================
              FINAL SECTION
          ========================================= */}

          <section className="student-success-section">

            <div className="success-overlay"></div>

            {/* LEFT */}

            <div className="success-content">

              <div className="top-label">

                <div className="small-icon success-icon">
                  <i className="ri-graduation-cap-line"></i>
                </div>

                <div>

                  <span className="gold-text">
                    STUDENT EXPERIENCE
                  </span>

                  <div className="line gold-line"></div>

                </div>

              </div>

              <h2>
                Academic Delivery &
                Student Success
              </h2>

              <p>
                We facilitate qualified Subject Matter Experts (SMEs), instructors, mentors, and teaching assistants for programme delivery. We conduct synchronous live sessions, webinars, doubt-clearing sessions, and academic mentoring through the LMS platform. We manage faculty orientation, academic training, and performance monitoring.We coordinate faculty scheduling and session planning to ensure smooth academic delivery and learner engagement. We also support the implementation of academic quality standards and facilitate continuous improvement in teaching and mentoring practices.
              </p>

              <div className="feature-list">

                <div className="item">

                  <div className="circle">
                    <i className="ri-user-star-line"></i>
                  </div>

                  <div>
                    <h4>Mentorship Support</h4>

                    <span>
                      Continuous learner guidance and engagement
                    </span>
                  </div>

                </div>

                <div className="item">

                  <div className="circle">
                    <i className="ri-bar-chart-box-line"></i>
                  </div>

                  <div>
                    <h4>Learning Analytics</h4>

                    <span>
                      Tracking progress and student performance
                    </span>
                  </div>

                </div>

                <div className="item">

                  <div className="circle">
                    <i className="ri-award-line"></i>
                  </div>

                  <div>
                    <h4>Student Outcomes</h4>

                    <span>
                      Improving retention and academic success
                    </span>
                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="success-visual">

              <div className="success-glow"></div>

              <img
                src="/images/students.png"
                alt="Academic Delivery and Student Success"
                className="visual-image"
              />

            </div>

          </section>

        </main>
      </div>
    </>
  );
}
