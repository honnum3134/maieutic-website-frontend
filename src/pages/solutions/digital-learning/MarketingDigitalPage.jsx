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

const capabilities = [
  {
    title: 'Marketing',
    body: 'Our ed-tech digital marketing work creates positioning, collateral, and campaign assets that help course catalogues, learning platforms, and ed-tech products get discovered and adopted — landing pages, promotional videos, and enrolment-focused messaging.',
  },
  {
    title: 'Digital Products',
    body: 'From learner-facing apps to internal training portals, our digital product development and design process builds tools with the same instructional rigour we apply to content — usable, tested, and aligned to the end user\'s actual workflow.',
  },
  {
    title: 'Network Management',
    body: 'Our platform administration services keep the platforms running: LMS network management, hosting coordination, integrations, uptime monitoring, and technical support — so institutions can focus on teaching, not troubleshooting servers.',
  },
];

const stats = [
  { value: '3-in-1', label: 'Marketing, Product & Platform' },
  { value: '50+',    label: 'Campaigns Managed'             },
  { value: '100%',   label: 'Uptime Commitment'             },
];

const MarketingDigitalPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Marketing, Digital Products & Network Management | Maieutic Edutech</title>
        <meta name="description" content="Ed-tech digital marketing, student acquisition for online degree programmes, digital product development, and LMS network management by Maieutic Edutech." />
        <link rel="canonical" href="https://maieuticedutech.com/solutions/marketing-digital-products" />
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
              Marketing, Digital Products &amp; Network Management
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, maxWidth: '700px' }}>
              Beyond content, institutions and businesses need the surrounding infrastructure to actually reach and support their audience. This service brings together three connected capabilities: ed-tech digital marketing, digital product development and design, and ongoing LMS network management.
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

        {/* THREE CAPABILITY CARDS */}
        <section style={{ padding: '72px 24px', maxWidth: '860px', margin: '0 auto' }}>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '700', color: '#111827', marginBottom: '40px' }}>
            Three connected capabilities
          </motion.h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {capabilities.map((cap, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                style={{ backgroundColor: '#f0faf9', borderRadius: '14px', padding: '32px 36px', borderLeft: '4px solid #00615c' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: '700', color: '#00615c', marginBottom: '12px' }}>
                  {cap.title}
                </h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#374151', lineHeight: 1.8, margin: 0 }}>
                  {cap.body}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* STUDENT ACQUISITION (from the former /education page) */}
        <section style={{ padding: '0 24px 72px', maxWidth: '860px', margin: '0 auto' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ backgroundColor: '#fef8f0', borderRadius: '14px', padding: '36px 40px', borderLeft: '4px solid #800d07' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: '700', color: '#800d07', marginBottom: '16px' }}>
              Student acquisition for online programmes
            </h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#374151', lineHeight: 1.8, marginBottom: '24px' }}>
              For university partners, we take exclusive operational rights to plan, execute, manage, and optimise all digital marketing and student acquisition activities for their online programmes — running advertising campaigns across search engines, social media platforms, display networks, affiliate networks, and third-party aggregators to bring the programmes to students.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}>
              {[
                { title: 'Strategic Marketing',  body: 'Data-driven campaigns for higher reach'   },
                { title: 'Student Outreach',     body: 'Connecting with learner communities'      },
                { title: 'Network Partnerships', body: 'Building strong alliances'                },
              ].map((f, i) => (
                <div key={i}>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', fontWeight: '700', color: '#111827', marginBottom: '4px' }}>{f.title}</h4>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.83rem', color: '#6b7280', lineHeight: 1.7, margin: 0 }}>{f.body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: '#f8fafb', padding: '64px 24px', textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
              Ready to grow your reach and keep your platform running?
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#6b7280', marginBottom: '32px' }}>
              Let's talk about your marketing and platform needs.
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

export default MarketingDigitalPage;