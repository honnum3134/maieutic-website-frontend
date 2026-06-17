import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '@/styles/global.css';

const WhoWeArePage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section-title-wrapper');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
        else entry.target.classList.remove('active');
      }),
      { threshold: 0.45 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      <Helmet><title>Who We Are | Maieutic Edutech</title></Helmet>
      <div style={{ paddingTop: '116px' }}>
        <main className="whoware-container">

          {/* HERO */}
          <section className="hero-section">
            <div className="hero-bg-wrapper">
              <img src="/images/who.png" alt="Team Session" className="hero-image-render" />
              <div className="hero-figma-mask"></div>
            </div>
            <div className="hero-text-frame">
              <h1 className="hero-main-title">Who We Are</h1>
              <p className="hero-description-text">
                From expert-led instruction and live academic engagement to continuous mentoring and
                performance tracking, we create a supportive learning environment that helps learners
                stay motivated, achieve their goals, and succeed throughout their educational journey.
              </p>
            </div>
          </section>

          {/* ABOUT */}
          <section className="about-section">
            <div className="about-content-left">
              <div className="section-title-wrapper">
                <h2 className="figma-serif-title text-teal">Driven by Learning</h2>
                <div className="figma-title-line line-teal"></div>
              </div>
              <p>We are a future-focused edtech company dedicated to transforming the way education is designed, delivered, and experienced.</p>
              <p>Our strength lies in blending academic rigor with engaging storytelling ensuring every learning experience is impactful.</p>
            </div>
            <div className="about-image-right">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop
" alt="Office Collaboration" />
            </div>
          </section>

          {/* WHAT WE DO */}
          <section className="what-we-do-section">
            <div className="section-title-wrapper">
              <h2 className="figma-serif-title text-white">What We Do</h2>
              <div className="figma-title-line line-white"></div>
            </div>
            <p className="section-subtitle">We provide end-to-end learning solutions across Higher Education and Enterprise segments.</p>
            <div className="cards-grid">
              {[
                { icon: '/images/icon 1.svg', title: 'Curriculum Design & Instructional Design', desc: 'Aligned with internal guidelines.' },
                { icon: '/images/icon 2.svg', title: 'Multimedia Content Development', desc: 'Immersive videos and simulations.' },
                { icon: '/images/icon 3.svg', title: 'Online Program Management (OPM)', desc: 'End-to-end services.' },
                { icon: '/images/icon 4.svg', title: 'Enterprise Learning Solutions', desc: 'Upskilling and professional development.' },
                { icon: '/images/icon 5.svg', title: 'LMS & Digital Learning Ecosystem Support', desc: 'Seamless integrations.' },
              ].map((card, i) => (
                <div key={i} className="card">
                  <div className="card-icon-container"><img src={card.icon} alt={card.title} /></div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* IMPACT */}
          <section className="impact-section">
            <div className="impact-left-content">
              <div className="section-title-wrapper">
                <h2 className="figma-serif-title text-teal">Our Impact</h2>
                <div className="figma-title-line line-teal"></div>
              </div>
              <ul className="impact-list impact-hover">
                {['Successfully launched 50+ scaling digital programs', 'Supported online program launches from concept to delivery', 'Advanced content aligned with industry standards', 'Enabled organizations to upskill their workforce'].map((item, i) => (
                  <li key={i}><span className="bullet-check">✓</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="impact-right-content">
              <div className="mini-card vision-box">
                <img src="/images/vision.svg" alt="vision" />
                <h3>Our Vision</h3>
                <p>To make learning reach its true potential.</p>
              </div>
              <div className="mini-card mission-box">
                <img src="/images/mission.svg" alt="mission" />
                <h3>Our Mission</h3>
                <p>To empower institutions and organizations with engaging, accessible digital solutions.</p>
              </div>
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section className="why-choose-us-section">
            <div className="section-title-wrapper center-title">
              <h2 className="figma-serif-title text-white">Why Choose Us</h2>
              <div className="figma-title-line line-white"></div>
            </div>
            <div className="why-choose-row">
              {['Academic + Industry Expertise', 'End-to-End Solutions', 'Scalable & Custom Solutions', 'Proven Track Record & Legacy'].map((item, i) => (
                <div key={i} className="why-choose-item"><h4>{item}</h4></div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default WhoWeArePage;
