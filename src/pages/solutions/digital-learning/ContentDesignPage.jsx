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

const pipeline = [
  'Content audit and gap analysis against existing material',
  'Curriculum design and module-level storyboarding for e-learning',
  'Writing, editing, and SME content collaboration and validation rounds',
  'Assessment and rubric design aligned to objectives',
  'Multi-format packaging — text, video, interactive, print-ready',
];

const capabilities = [
  {
    title: 'SME & Industry Expert Identification',
    body: 'We onboard highly qualified Subject Matter Experts and industry professionals based on domain relevance and experience — academic experts with strong research and teaching backgrounds, and industry professionals with deep, real-world expertise.',
  },
  {
    title: 'E-Content (SLMs) & Assessments',
    body: 'Structured Self-Learning Materials developed in alignment with the approved curriculum and academic framework. Assessments are carefully designed to map learning outcomes and follow Bloom\'s Taxonomy for depth and progression.',
  },
  {
    title: 'Storyboard Creation',
    body: 'We translate academic content into engaging visual narratives. Each storyboard is crafted with relevant visuals and media, a clear learning flow, and audience-centric design.',
  },
  {
    title: 'In-House Studio Recording',
    body: 'Content is recorded in our fully equipped in-house studios, featuring green screen setups, smartboard-based teaching, and pen-tab interactive delivery formats.',
  },
  {
    title: 'E-Tutorial Production',
    body: 'Recordings are transformed into structured, bite-sized video modules by integrating visuals, storyboards, and instructional elements — ensuring clarity, engagement, and retention in virtual learning environments.',
  },
];

const stats = [
  { value: '7500+', label: 'Content Hours Delivered' },
  { value: '50+',   label: 'Institutional Partners'  },
  { value: '100%',  label: 'On-Time Delivery Rate'   },
];

const ContentDesignPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>E-Learning Content Design & Development | Maieutic Edutech</title>
        <meta name="description" content="Instructional design and e-learning content development — SME onboarding, SLMs and assessments, storyboarding, in-house studio recording, and e-tutorial production by Maieutic Edutech." />
        <link rel="canonical" href="https://maieuticedutech.com/solutions/content-design-development" />
      </Helmet>

      <div style={{ paddingTop: '116px' }}>

        {/* ── HERO ── */}
        <section style={{
          background: 'linear-gradient(135deg, #00615c 0%, #004d49 60%, #800d07 100%)',
          padding: '72px 24px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top right, rgba(255,255,255,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FEF1DE', marginBottom: '16px' }}>
              Digital Learning Solutions
            </motion.p>
            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: '700', color: '#ffffff', lineHeight: 1.2, marginBottom: '24px' }}>
              Content Design &amp; Development
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, maxWidth: '700px' }}>
              Great e-learning content development starts long before a screen is designed. Our instructional design services begin with subject matter experts, source documents, and raw institutional knowledge — and end with a fully structured, sequenced, and assessed learning package ready for any platform.
            </motion.p>
          </div>
        </section>

        {/* ── STATS ── */}
        <section style={{ backgroundColor: '#f8fafb', padding: '48px 24px', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: '700', color: '#00615c' }}>{s.value}</div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.8rem', color: '#6b7280', marginTop: '6px' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── BODY ── */}
        <section style={{ padding: '72px 24px', maxWidth: '860px', margin: '0 auto' }}>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '700', color: '#111827', marginBottom: '20px' }}>
              Built around instructional science
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem', color: '#374151', lineHeight: 1.8, marginBottom: '40px' }}>
              Instructional designers, content writers, and SMEs work together through a disciplined pipeline built around SME content collaboration — content audit, content architecture, storyboarding for e-learning, review cycles, and final quality assurance — so nothing reaches the learner half-finished or inconsistently levelled.
            </p>
          </motion.div>

          {/* Pipeline */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            style={{ backgroundColor: '#f0faf9', borderRadius: '14px', padding: '36px 40px', marginBottom: '48px', borderLeft: '4px solid #00615c' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: '700', color: '#00615c', marginBottom: '24px' }}>
              Our development pipeline
            </h3>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {pipeline.map((step, i) => (
                <motion.li key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#374151', lineHeight: 1.65 }}>
                  <span style={{ flexShrink: 0, width: '26px', height: '26px', borderRadius: '50%', backgroundColor: '#00615c', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700', marginTop: '1px' }}>
                    {i + 1}
                  </span>
                  {step}
                </motion.li>
              ))}
            </ol>
          </motion.div>

          {/* Content Development capabilities (from the former /education page) */}
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '700', color: '#111827', marginBottom: '32px' }}>
            End-to-end content development
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px', marginBottom: '48px' }}>
            {capabilities.map((cap, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                style={{ backgroundColor: '#f0faf9', borderRadius: '14px', padding: '28px 32px', borderTop: '3px solid #00615c' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: '700', color: '#00615c', marginBottom: '10px' }}>
                  {cap.title}
                </h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.88rem', color: '#374151', lineHeight: 1.75, margin: 0 }}>
                  {cap.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Outcome */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '700', color: '#111827', marginBottom: '20px' }}>
              One coherent curriculum — not stitched together after the fact
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem', color: '#374151', lineHeight: 1.8 }}>
              The result is content that reads consistently whether it's delivered as a PDF, an interactive module, or a facilitator's guide — because our content architecture treats it as one coherent curriculum from the start, not assembled at the end.
            </p>
          </motion.div>
        </section>

        {/* ── CTA ── */}
        <section style={{ backgroundColor: '#f8fafb', padding: '64px 24px', textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
              Ready to build learning that actually works?
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#6b7280', marginBottom: '32px' }}>
              Let's talk about your content needs.
            </p>
            <button onClick={() => navigate('/contact')}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', fontWeight: '600', color: '#fff', backgroundColor: '#00615c', border: 'none', borderRadius: '8px', padding: '14px 36px', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#004d49'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#00615c'}>
              Get in Touch
            </button>
          </motion.div>
        </section>

      </div>
    </>
  );
};

export default ContentDesignPage;