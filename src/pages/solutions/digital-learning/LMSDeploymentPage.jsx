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

const features = [
  {
    title: 'Smooth Deployment',
    body: 'Seamless LMS setup and integration aligned to your institutional workflows — configured, tested, and handed over ready to use.',
  },
  {
    title: 'UGC-DEB Compliance',
    body: 'Every deployment meets UGC-DEB Online Education Regulations and applicable data security standards, supporting the Four-Quadrant Academic Delivery Model.',
  },
  {
    title: 'Secure & Accessible',
    body: 'Reliable uptime, role-based access controls, and learner accessibility standards built in from day one — not added later.',
  },
  {
    title: 'Efficient Management',
    body: 'Continuous monitoring, performance optimisation, integrations, and technical support so institutions can focus on teaching, not troubleshooting.',
  },
];

const quadrants = [
  'E-content and video lectures',
  'E-SLM and digital reading materials',
  'Discussion forums and mentoring support',
  'Assessments and proctored examinations',
];

const stats = [
  { value: '2',      label: 'University LMS Deployments' },
  { value: 'UGC',    label: 'DEB Regulation Compliant'   },
  { value: '4QM',    label: 'Four-Quadrant Model Support' },
];

const LMSDeploymentPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>LMS Deployment & Management | Maieutic Edutech</title>
        <meta name="description" content="UGC-DEB compliant LMS deployment and management supporting the Four-Quadrant Academic Delivery Model — secure, accessible, and continuously managed by Maieutic Edutech." />
        <link rel="canonical" href="https://maieuticedutech.com/solutions/lms-deployment-management" />
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
              Digital Learning Solutions
            </motion.p>
            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: '700', color: '#ffffff', lineHeight: 1.2, marginBottom: '24px' }}>
              LMS Deployment &amp; Management
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, maxWidth: '700px' }}>
              We ensure every LMS we deploy complies with all UGC-DEB Online Education Regulations and applicable data security standards — fully supporting the Four-Quadrant Academic Delivery Model so universities can launch, manage, and scale their online programmes with confidence.
            </motion.p>
          </div>
        </section>

        {/* STATS */}
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

        {/* FEATURES GRID */}
        <section style={{ padding: '72px 24px', maxWidth: '860px', margin: '0 auto' }}>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '700', color: '#111827', marginBottom: '40px' }}>
            What we deliver
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px', marginBottom: '56px' }}>
            {features.map((f, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                style={{ backgroundColor: '#f0faf9', borderRadius: '14px', padding: '28px 32px', borderTop: '3px solid #00615c' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: '700', color: '#00615c', marginBottom: '10px' }}>
                  {f.title}
                </h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.88rem', color: '#374151', lineHeight: 1.75, margin: 0 }}>
                  {f.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Four Quadrant */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ backgroundColor: '#fef8f0', borderRadius: '14px', padding: '36px 40px', borderLeft: '4px solid #800d07' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: '700', color: '#800d07', marginBottom: '20px' }}>
              Four-Quadrant Academic Delivery Model
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
              {quadrants.map((q, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontFamily: 'Poppins, sans-serif', fontSize: '0.88rem', color: '#374151', lineHeight: 1.6 }}>
                  <span style={{ flexShrink: 0, width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#800d07', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', marginTop: '1px' }}>
                    {i + 1}
                  </span>
                  {q}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: '#f8fafb', padding: '64px 24px', textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
              Ready to deploy a compliant, scalable LMS?
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#6b7280', marginBottom: '32px' }}>
              Talk to us about your platform requirements.
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

export default LMSDeploymentPage;