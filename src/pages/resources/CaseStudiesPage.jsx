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

const cases = [
  {
    client: 'REVA University',
    tag: 'Online Academic Partnership',
    title: 'End-to-End OPM Delivery for an Expanding Online Programme Portfolio',
    outcome: '307 content units produced across MBA, BCA, and MCA programmes with full LMS deployment and admissions pipeline integration.',
    metrics: ['307 Units', 'MBA · BCA · MCA', 'LMS Deployed'],
  },
  {
    client: 'PP Savani University',
    tag: 'Content & LMS',
    title: 'SLM Production and Moodle LMS Deployment for CDOE Programmes',
    outcome: 'Complete self-learning material production pipeline established alongside Moodle LMS configuration aligned to UGC-DEB Four-Quadrant requirements.',
    metrics: ['Moodle LMS', 'UGC-DEB Compliant', 'SLM Pipeline'],
  },
  {
    client: 'Enterprise Client',
    tag: 'Corporate Learning',
    title: 'Articulate 360 Course Suite for Onboarding and Compliance Training',
    outcome: 'A modular library of branching scenario and SCORM-packaged courses replacing a legacy classroom induction programme — reducing onboarding time significantly.',
    metrics: ['Articulate 360', 'SCORM Packaged', 'Branching Scenarios'],
  },
  {
    client: 'Ed-Tech Partner',
    tag: 'Video Production',
    title: 'Explainer Video Series for a Learning Platform Product Launch',
    outcome: 'Six 90-second animated explainer videos produced for a product launch — covering feature walkthroughs, onboarding flows, and a brand overview.',
    metrics: ['6 Videos', '90s Each', '2D Animation'],
  },
];

const CaseStudiesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Case Studies | Maieutic Edutech</title>
        <meta name="description" content="Real outcomes from Maieutic Edutech engagements — OPM delivery for REVA University, LMS deployment for PP Savani University, corporate learning, and video production." />
        <link rel="canonical" href="https://maieuticedutech.com/resources/case-studies" />
      </Helmet>

      <div style={{ paddingTop: '116px' }}>

        {/* HERO */}
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
              Resources
            </motion.p>
            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: '700', color: '#ffffff', lineHeight: 1.2, marginBottom: '24px' }}>
              Case Studies
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, maxWidth: '700px' }}>
              Real engagements, real outcomes. A look at how we have worked with universities, enterprises, and ed-tech partners to deliver learning that works.
            </motion.p>
          </div>
        </section>

        {/* CASE STUDY CARDS */}
        <section style={{ padding: '72px 24px', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {cases.map((c, i) => (
              <motion.div key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e5e7eb', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr auto', gap: '0' }}>

                <div style={{ padding: '36px 40px', borderLeft: `4px solid ${i % 2 === 0 ? '#00615c' : '#800d07'}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: '700', color: '#fff', backgroundColor: i % 2 === 0 ? '#00615c' : '#800d07', padding: '3px 10px', borderRadius: '4px' }}>
                      {c.client}
                    </span>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#6b7280' }}>
                      {c.tag}
                    </span>
                  </div>

                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: '700', color: '#111827', lineHeight: 1.35, marginBottom: '16px' }}>
                    {c.title}
                  </h2>

                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.88rem', color: '#374151', lineHeight: 1.75, marginBottom: '24px' }}>
                    {c.outcome}
                  </p>

                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {c.metrics.map((m, mi) => (
                      <span key={mi} style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: '500', color: i % 2 === 0 ? '#00615c' : '#800d07', backgroundColor: i % 2 === 0 ? '#f0faf9' : '#fff5f5', padding: '4px 12px', borderRadius: '20px', border: `1px solid ${i % 2 === 0 ? '#d1ede9' : '#f5cac8'}` }}>
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: '#f8fafb', padding: '64px 24px', textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
              Ready to be our next case study?
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#6b7280', marginBottom: '32px' }}>
              Tell us about your learning or content challenge.
            </p>
            <button onClick={() => navigate('/contact')}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', fontWeight: '600', color: '#fff', backgroundColor: '#00615c', border: 'none', borderRadius: '8px', padding: '14px 36px', cursor: 'pointer' }}
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

export default CaseStudiesPage;