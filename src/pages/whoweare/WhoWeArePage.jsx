import React, { useState } from 'react';
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

const services = [
  {
    title: 'Online Program Management',
    desc: 'End-to-end OPM services for universities — from curriculum design and content production to LMS deployment, admissions, and student support.',
    accent: '#800d07',
    abbr: 'OPM',
  },
  {
    title: 'Instructional Design',
    desc: 'Sound pedagogical principles combined with advanced instructional design methodologies that ensure knowledge translates into measurable outcomes.',
    accent: '#00615c',
    abbr: 'ID',
  },
  {
    title: 'Multimedia Content Development',
    desc: 'Engaging interactive media, 2D and 3D animation, video production, and visual storytelling that makes learning immersive and effective.',
    accent: '#800d07',
    abbr: 'MCD',
  },
  {
    title: 'Enterprise Learning Solutions',
    desc: 'Customised LMS-based eLearning for corporates — onboarding, compliance, upskilling, and professional development at scale.',
    accent: '#00615c',
    abbr: 'ELS',
  },
];

const impact = [
  { value: '2018',  label: 'Founded in Bengaluru'           },
  { value: '50+',   label: 'Clients'     },
  { value: '1',     label: 'University OPM Partnerships'     },
  { value: '100%',  label: 'In-House Multidisciplinary Team' },
];

const strengths = [
  'Academic and industry expertise combined',
  'End-to-end solutions under one roof',
  'Scalable and custom-built for each client',
  'Proven track record since 2018',
  'Collaborative approach to creativity and innovation',
  'Trusted partner in digital transformation',
];

const teamRoles = [
  { role: 'Learning Specialists',       number: '01' },
  { role: 'Subject Matter Experts',     number: '02' },
  { role: 'Instructional Designers',    number: '03' },
  { role: 'Digital Content Creators',   number: '04' },
  { role: 'Animators & Motion Artists', number: '05' },
  { role: 'Technology Professionals',   number: '06' },
];

const impactPoints = [
  { stat: '50+',    desc: 'Successfully launched scaling digital programmes'               },
  { stat: '2018',   desc: 'Supported online programme launches from concept to delivery'   },
  { stat: 'Global', desc: 'Advanced content aligned with international industry standards' },
  { stat: '100%',   desc: 'Enabled organisations to upskill their workforce effectively'   },
];

// ── Service card — 2026 outlined glass design ─────────────────────────────────
const ServiceCard = ({ item, i }) => {
  const [hovered, setHovered] = useState(false);

  const hoverGradients = [
    'linear-gradient(135deg, #800d07 0%, #5a0905 100%)',
    'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
    'linear-gradient(135deg, #800d07 0%, #5a0905 100%)',
    'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
  ];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={i}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '20px',
        padding: '36px 28px 48px',
        cursor: 'default',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: hovered ? hoverGradients[i] : 'rgba(255,255,255,0.06)',
        border: `1px solid ${hovered ? 'transparent' : 'rgba(255,255,255,0.18)'}`,
        backdropFilter: 'blur(12px)',
        boxShadow: hovered
          ? '0 24px 56px rgba(0,0,0,0.35)'
          : '0 2px 12px rgba(0,0,0,0.08)',
        transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
      }}
    >
      {hovered && (
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '20px',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />
      )}

      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '3.5rem', fontWeight: '700', lineHeight: 1,
        marginBottom: '20px',
        WebkitTextStroke: `1.5px ${hovered ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.30)'}`,
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
        transition: 'all 0.4s',
        userSelect: 'none',
        letterSpacing: '-0.02em',
      }}>
        {item.abbr}
      </div>

      <div style={{
        width: '32px', height: '1.5px',
        backgroundColor: hovered ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.20)',
        marginBottom: '20px', transition: 'all 0.4s',
      }} />

      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.05rem', fontWeight: '700',
        color: '#ffffff', marginBottom: '12px',
        lineHeight: 1.35, transition: 'color 0.4s',
      }}>
        {item.title}
      </h3>

      <p style={{
        fontFamily: 'Poppins, sans-serif', fontSize: '0.82rem',
        color: hovered ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.58)',
        lineHeight: 1.8, margin: 0, transition: 'color 0.4s',
      }}>
        {item.desc}
      </p>

      <div style={{
        position: 'absolute', bottom: '24px', right: '24px',
        width: '28px', height: '28px', borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.35)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: hovered ? 1 : 0,
        transform: hovered ? 'scale(1)' : 'scale(0.6)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <span style={{ color: '#fff', fontSize: '13px', lineHeight: 1 }}>↗</span>
      </div>
    </motion.div>
  );
};

// ── Team role card ─────────────────────────────────────────────────────────────
const TeamCard = ({ item, i }) => {
  const [hovered, setHovered] = useState(false);
  const isEven = i % 2 === 0;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={i * 0.5}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '14px', padding: '22px 20px',
        overflow: 'hidden', cursor: 'default',
        transition: 'all 0.3s ease',
        backgroundColor: hovered ? (isEven ? '#800d07' : '#00615c') : '#f8fafb',
        boxShadow: hovered
          ? `0 12px 32px ${isEven ? 'rgba(128,13,7,0.2)' : 'rgba(0,97,92,0.2)'}`
          : '0 1px 4px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
        border: `1px solid ${hovered ? 'transparent' : '#e5e7eb'}`,
      }}
    >
      {hovered && (
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '14px',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.14) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
      )}
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '0.75rem', fontWeight: '700',
        color: hovered ? 'rgba(255,255,255,0.5)' : (isEven ? '#800d07' : '#00615c'),
        letterSpacing: '0.1em', marginBottom: '8px',
        transition: 'color 0.3s',
      }}>
        {item.number}
      </div>
      <p style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: '0.85rem', fontWeight: '600',
        color: hovered ? '#ffffff' : '#111827',
        margin: 0, lineHeight: 1.4,
        transition: 'color 0.3s',
      }}>
        {item.role}
      </p>
    </motion.div>
  );
};

const AboutUs = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('vision');

  const tabs = [
    { id: 'vision',  label: 'Our Vision'  },
    { id: 'mission', label: 'Our Mission' },
    { id: 'impact',  label: 'Our Impact'  },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Maieutic Edutech Private Limited</title>
        <meta name="description" content="Maieutic Edutech is a Bengaluru-based online education company providing end-to-end online degree program support and e-learning content solutions since 2018." />
        <meta name="keywords" content="Maieutic Edutech, about us, online degree support, e-learning content development, Bengaluru EdTech company, online program management" />
        <meta property="og:url" content="https://maieuticedutech.com/about-us" />
        <meta property="og:title" content="About Us | Maieutic Edutech Private Limited" />
        <meta property="og:description" content="Maieutic Edutech is a Bengaluru-based online education company providing end-to-end online degree program support and e-learning content solutions since 2018." />
        <meta name="twitter:title" content="About Us | Maieutic Edutech Private Limited" />
        <meta name="twitter:description" content="Maieutic Edutech is a Bengaluru-based online education company providing end-to-end online degree program support and e-learning content solutions since 2018." />
        <link rel="canonical" href="https://maieuticedutech.com/about-us" />
      </Helmet>

      <div style={{ paddingTop: '116px' }}>

        {/* ── HERO — eyebrow removed, H1 renamed to About Maieutic ── */}
        <section style={{
          background: 'linear-gradient(135deg, #00615c 0%, #004d49 60%, #800d07 100%)',
          padding: '72px 24px 80px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top right, rgba(255,255,255,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={0}
              style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.2, fontWeight: '700', marginBottom: '24px' }}>
              About Maieutic Edutech
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={1}
              style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.88)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '700px' }}>
              Founded in 2018 and headquartered in Bengaluru, Maieutic is a leading eLearning solutions company committed to transforming digital learning experiences — bridging the gap between learning and real-world application.
            </motion.p>
          </div>
        </section>

        {/* ── STATS ── */}
        <section style={{ backgroundColor: '#f8fafb', padding: '48px 24px', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {impact.map((s, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: '700', color: '#00615c' }}>{s.value}</div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.8rem', color: '#6b7280', marginTop: '6px' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── ABOUT BODY ── */}
        <section style={{ padding: '72px 24px', backgroundColor: '#ffffff' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '56px', alignItems: 'start' }}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00615c', marginBottom: '14px' }}>
                Who We Are
              </p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '700', color: '#111827', lineHeight: 1.2, marginBottom: '24px' }}>
                Driven by Learning. Built for Impact.
              </h2>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#374151', lineHeight: 1.85, marginBottom: '18px' }}>
                At Maieutic, we combine sound pedagogical principles, advanced instructional design methodologies, and engaging interactive media to create impactful learning experiences. Our mission is to bridge the gap between learning and real-world application, ensuring that knowledge translates into meaningful outcomes.
              </p>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#374151', lineHeight: 1.85 }}>
                More than an eLearning provider, Maieutic is a strategic partner in digital transformation. We empower educational institutions and enterprises to achieve their learning, training, and communication objectives through innovative, customised, and interactive solutions.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              <div style={{ backgroundColor: '#f8fafb', borderRadius: '14px', padding: '32px', borderLeft: '4px solid #00615c' }}>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00615c', marginBottom: '16px' }}>
                  What Distinguishes Us
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {strengths.map((s, i) => (
                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00615c', marginTop: '7px', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.88rem', color: '#374151', lineHeight: 1.7 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CEO QUOTE — right side blend fixed ──
             id="ceo" is the deep-link target for the legacy /management.php
             301 (see public/.htaccess) — don't rename it. */}
        <section id="ceo" style={{ backgroundColor: '#111827', padding: '0', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'stretch' }}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ padding: '72px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '5rem', color: '#800d07', lineHeight: 0.6, marginBottom: '24px', userSelect: 'none' }}>
                "
              </div>
              <blockquote style={{ margin: 0, padding: 0 }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#ffffff', lineHeight: 1.4, fontWeight: '600', fontStyle: 'italic', marginBottom: '32px' }}>
                  Learning becomes meaningful when creativity meets real world application.
                </p>
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: '#800d07' }} />
                <div>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.88rem', fontWeight: '700', color: '#ffffff', margin: 0 }}>Ravi Shankara</p>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', margin: '2px 0 0' }}>CEO & Managing Director, Maieutic Edutech</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65, ease: 'easeOut' }}
              style={{ position: 'relative', minHeight: '420px', overflow: 'hidden' }}>
              <img src="/images/ravi-shankara-ceo.png" alt="Ravi Shankara — CEO & Managing Director, Maieutic Edutech"
                loading="lazy" decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
              {/* ── Blend on RIGHT side to merge into dark background ── */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #111827 0%, transparent 20%, transparent 80%, #111827 100%)' }} />
            </motion.div>
          </div>
        </section>

        {/* ── VISION / MISSION / IMPACT TABS ── */}
        <section style={{ backgroundColor: '#ffffff', padding: '72px 24px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#800d07', marginBottom: '14px' }}>
              Our Direction
            </motion.p>
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '700', color: '#111827', lineHeight: 1.2, marginBottom: '40px' }}>
              Vision, Mission &amp; Impact.
            </motion.h2>

            <div style={{ display: 'flex', gap: '4px', marginBottom: '32px', backgroundColor: '#f8fafb', borderRadius: '10px', padding: '4px', width: 'fit-content', flexWrap: 'wrap' }}>
              {tabs.map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  style={{
                    fontFamily: 'Poppins, sans-serif', fontSize: '0.88rem', fontWeight: '600',
                    padding: '10px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                    backgroundColor: activeTab === tab.id ? '#00615c' : 'transparent',
                    color: activeTab === tab.id ? '#fff' : '#6b7280',
                    transition: 'all 0.2s',
                  }}>
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === 'vision' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <div style={{ backgroundColor: '#f8fafb', borderRadius: '14px', padding: '36px 40px', borderLeft: '4px solid #00615c' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: '700', color: '#00615c', marginBottom: '16px' }}>
                    A future where education has no boundaries.
                  </h3>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#374151', lineHeight: 1.85, marginBottom: '16px' }}>
                    At Maieutic Edutech, we envision a future where education is not limited by geography, technology, or opportunity. We aspire to create an inclusive and innovative learning ecosystem that empowers learners, educators, and institutions to thrive in a rapidly evolving world.
                  </p>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#374151', lineHeight: 1.85, marginBottom: '16px' }}>
                    Our vision is to become a trusted leader in educational technology by transforming the way knowledge is delivered, experienced, and applied. We believe that education should inspire curiosity, encourage critical thinking, foster creativity, and equip individuals with the skills and confidence needed to excel in both their academic and professional journeys.
                  </p>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#374151', lineHeight: 1.85 }}>
                    Through continuous innovation, meaningful collaboration, and a commitment to excellence, we strive to bridge the gap between traditional education and the demands of the modern world — enabling every learner to unlock their true potential.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'mission' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <div style={{ backgroundColor: '#f8fafb', borderRadius: '14px', padding: '36px 40px', borderLeft: '4px solid #800d07' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: '700', color: '#800d07', marginBottom: '16px' }}>
                    Empowering institutions and learners through technology.
                  </h3>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#374151', lineHeight: 1.85, marginBottom: '16px' }}>
                    Our mission is to empower educational institutions, educators, and learners by delivering innovative, technology-driven solutions that simplify academic processes, enhance learning experiences, and improve institutional effectiveness.
                  </p>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#374151', lineHeight: 1.85, marginBottom: '16px' }}>
                    We are committed to developing intelligent and scalable digital solutions that support every stage of the educational journey — from admissions and academic administration to teaching, learning, assessment, and student engagement.
                  </p>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#374151', lineHeight: 1.85 }}>
                    At Maieutic Edutech, we are driven by the belief that every learner deserves access to quality education and every institution deserves the tools to deliver it effectively. Through innovation, integrity, and a relentless focus on customer success, we aim to build lasting partnerships that shape the future of education.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'impact' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '16px' }}>
                  {impactPoints.map((item, i) => (
                    <div key={i} style={{
                      backgroundColor: '#f8fafb', borderRadius: '14px', padding: '28px 32px',
                      borderLeft: `4px solid ${i % 2 === 0 ? '#00615c' : '#800d07'}`,
                      display: 'flex', gap: '20px', alignItems: 'flex-start',
                    }}>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: '700', color: i % 2 === 0 ? '#00615c' : '#800d07', flexShrink: 0, lineHeight: 1 }}>
                        {item.stat}
                      </div>
                      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.88rem', color: '#374151', lineHeight: 1.75, margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* ── WHAT WE DO ── */}
        <section style={{
          background: 'linear-gradient(160deg, #00615c 0%, #004d49 50%, #003d3a 100%)',
          padding: '80px 24px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse at 80% 20%, rgba(128,13,7,0.12) 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, rgba(255,255,255,0.04) 0%, transparent 45%)',
          }} />
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'flex-end', marginBottom: '56px' }}>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: '600', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FEF1DE', marginBottom: '14px' }}>
                  What We Do
                </p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', color: '#ffffff', lineHeight: 1.15, margin: 0 }}>
                  End-to-End Digital<br />Learning Solutions.
                </h2>
              </motion.div>
              <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, margin: 0, maxWidth: '420px' }}>
                We provide end-to-end learning solutions across Higher Education and Enterprise segments — designed, developed, and delivered in-house.
              </motion.p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
              {services.map((item, i) => (
                <ServiceCard key={i} item={item} i={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR TEAM ── */}
        <section style={{ backgroundColor: '#ffffff', padding: '72px 24px', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '64px', alignItems: 'center' }}>

            {/* Left — text + role cards */}
            <div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#800d07', marginBottom: '14px' }}>
                  Our Team
                </p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: '700', color: '#111827', lineHeight: 1.2, marginBottom: '20px' }}>
                  A Multidisciplinary Team Built for Learning.
                </h2>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#374151', lineHeight: 1.85, marginBottom: '32px' }}>
                  Our strength lies in our multidisciplinary team of learning specialists, subject matter experts, digital content creators, instructional designers, animators, and technology professionals. Together, they bring expertise and innovation to every project — ensuring high-quality learning solutions that drive engagement and measurable results.
                </p>
              </motion.div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                {teamRoles.map((item, i) => (
                  <TeamCard key={i} item={item} i={i} />
                ))}
              </div>
            </div>

            {/* Right — Conf.png image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.12)' }}>
              <img
                src="/images/growth.png"
                alt="Maieutic Edutech Team"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '420px' }}
              />
              {/* Subtle teal overlay at bottom */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,97,92,0.35) 0%, transparent 50%)', pointerEvents: 'none' }} />
            </motion.div>

          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ backgroundColor: '#f8fafb', padding: '64px 24px', textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
              Ready to partner with us?
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#6b7280', marginBottom: '32px' }}>
              Let us show you what a strategic learning partner looks like in practice.
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

export default AboutUs;