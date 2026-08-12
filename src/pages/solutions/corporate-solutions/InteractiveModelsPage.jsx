import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' }
  }),
};

const interactions = [
  {
    title: 'Branching Scenario E-Learning',
    body: 'Consequence-based decision paths that place learners inside realistic situations — every choice leads somewhere, and learners see why.',
  },
  {
    title: 'Drag-and-Drop & Hotspot',
    body: 'Sorting, labelling, and hotspot interactions that require active recall — not passive reading — to move forward.',
  },
  {
    title: 'Interactive Simulations',
    body: 'Click-through software and process simulations that let learners practise the real workflow in a safe environment before going live.',
  },
  {
    title: 'Gamified Training Modules',
    body: 'Timed challenges, scored assessments, and achievement mechanics that keep completion rates high and make repetition feel deliberate.',
  },
];

const stats = [
  { value: 'SCORM', label: 'xAPI Standards Ready'       },
  { value: '100%',  label: 'Responsive by Default'       },
  { value: 'A360',  label: 'Articulate 360 Powered'      },
];

const InteractiveModelsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>E-Learning & Instructional Design Services | Maieutic Edutech</title>
        <meta name="description" content="From 2D/3D animation to instructional design and corporate training content — see the full range of e-learning services Maieutic Edutech offers." />
        <link rel="canonical" href="https://maieuticedutech.com/solutions/interactive-models-articulate" />
      </Helmet>

      <div style={{ paddingTop: '116px' }}>

        {/* HERO */}
        <section style={{
          background: 'linear-gradient(135deg, #800d07 0%, #600a05 60%, #00615c 100%)',
          padding: '72px 24px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top right, rgba(255,255,255,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FEF1DE', marginBottom: '16px' }}>
              Corporate Solutions
            </motion.p>
            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: '700', color: '#ffffff', lineHeight: 1.2, marginBottom: '24px' }}>
              Interactive Models &amp; Articulate 360
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, maxWidth: '700px' }}>
              Static slides don't hold attention — interaction does. Our Articulate 360 development work spans Storyline courses and Rise modules: drag-and-drop exercises, branching scenario e-learning, clickable simulations, and gamified training that requires learners to actually do something with the content, not just scroll past it.
            </motion.p>
          </div>
        </section>

        {/* STATS */}
        <section style={{ backgroundColor: '#f8fafb', padding: '48px 24px', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: '700', color: '#800d07' }}>{s.value}</div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.8rem', color: '#6b7280', marginTop: '6px' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* INTERACTION TYPES */}
        <section style={{ padding: '72px 24px', maxWidth: '860px', margin: '0 auto' }}>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '700', color: '#111827', marginBottom: '40px' }}>
            Interaction types we build
          </motion.h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '56px' }}>
            {interactions.map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                style={{ backgroundColor: '#fff5f5', borderRadius: '14px', padding: '28px 32px', borderLeft: '4px solid #800d07' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: '700', color: '#800d07', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.88rem', color: '#374151', lineHeight: 1.75, margin: 0 }}>
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Standards note */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ backgroundColor: '#f0faf9', borderRadius: '14px', padding: '32px 36px', borderLeft: '4px solid #00615c' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: '700', color: '#00615c', marginBottom: '12px' }}>
              Built to drop into any LMS
            </h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.88rem', color: '#374151', lineHeight: 1.75, margin: 0 }}>
              Every Articulate Storyline course and Rise module is responsive by default and packaged to SCORM/xAPI standards — so it integrates cleanly into any LMS and reports learner progress accurately, combining Articulate 360 development speed with instructional design built to hold attention.
            </p>
          </motion.div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: '#f8fafb', padding: '64px 24px', textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
              Ready to make your training actually interactive?
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#6b7280', marginBottom: '32px' }}>
              Tell us what you need and we'll scope it out.
            </p>
            <button onClick={() => navigate('/contact')}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', fontWeight: '600', color: '#fff', backgroundColor: '#800d07', border: 'none', borderRadius: '8px', padding: '14px 36px', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#600a05'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#800d07'}>
              Get in Touch
            </button>
          </motion.div>
        </section>

      </div>
    </>
  );
};

export default InteractiveModelsPage;