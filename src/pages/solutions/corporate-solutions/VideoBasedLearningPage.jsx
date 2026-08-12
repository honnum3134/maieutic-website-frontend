import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: 'easeOut' },
  }),
};

const learningJourney = [
  {
    id: 1,
    eyebrow: 'Understand',
    title: 'Explain Complex Ideas',
    subtitle: 'Explainer Videos',
    accent: '#800d07',
    description:
      'Some ideas are easier to show than to explain in text. Our explainer video production transforms complex concepts into short animated narratives that audiences understand in a single viewing.',
    highlight: 'Designed for onboarding, learning modules, product launches and marketing pages.',
    points: [
      'Scriptwriting and storyboard development',
      '2D animation and motion graphics',
      'Whiteboard explainers with professional voiceover',
      'Brand aligned visual language',
    ],
    pointDescs: [
      'Every video starts with a tightly written script and a visual storyboard — built around a single clear message the viewer leaves with.',
      'Flat 2D character animation and motion graphics that bring concepts to life without requiring live shooting or on-screen presenters.',
      'Clean, sequential whiteboard-style animation with professional voiceover — ideal for process explanations and educational content.',
      'Every colour, typeface, and motion style is derived from your brand system — so the video feels like yours, not a template.',
    ],
  },
  {
    id: 2,
    eyebrow: 'Perform',
    title: 'Show Every Step Clearly',
    subtitle: 'Product & Process Videos',
    accent: '#00615c',
    description:
      'When precision matters, product demonstrations and process videos eliminate ambiguity by showing every action exactly as it should happen.',
    highlight: 'Ideal for SOPs, software walkthroughs, manufacturing and compliance.',
    points: [
      'Software walkthrough videos',
      'Live action equipment demonstrations',
      'SOP documentation videos',
      'Feature launches and product updates',
    ],
    pointDescs: [
      'Narrated screen-capture demos that walk users through a product feature or workflow step by step — recorded, edited, and annotated for clarity.',
      'On-location filming of physical processes and equipment operation — ideal for manufacturing, lab procedures, and field training.',
      'Step-by-step standard operating procedure videos built for accuracy first, then edited for pace so any employee can follow along.',
      'Short, sharp product update videos that communicate what changed, why it matters, and how to use it — without a support ticket being raised.',
    ],
  },
  {
    id: 3,
    eyebrow: 'Apply',
    title: 'Practise Before Reality',
    subtitle: 'Scenario Based Videos',
    accent: '#c76817',
    description:
      'The most valuable skills are developed through practice. Scenario based learning videos immerse learners inside realistic workplace situations where every decision has a visible consequence.',
    highlight: 'Ideal for leadership, compliance, sales and customer interactions.',
    points: [
      'Role play training',
      'Situational judgement',
      'Sales conversations',
      'Branching learning experiences',
    ],
    pointDescs: [
      'Soft-skills and communication scenarios — negotiation, feedback conversations, customer service — played out realistically so learners can observe before practising.',
      'Compliance, ethics, and decision-making scenarios where learners choose a path and see the consequence — making abstract policies feel real and memorable.',
      'Sales conversations, objection handling, and service recovery — practised in a safe environment before going live with an actual customer.',
      'Multiple outcomes based on learner choice — every decision leads somewhere, and the immediate feedback is where the actual learning happens.',
    ],
  },
];

const capabilities = [
  {
    title: 'Instructional Design First',
    body: 'Every production begins with a learning objective. We simplify information before we animate it.',
  },
  {
    title: 'Visual Storytelling',
    body: 'Animation, motion graphics and live action are selected according to the message instead of following a fixed production style.',
  },
  {
    title: 'SME Validation',
    body: 'Every workflow, process and scenario is reviewed with subject matter experts before production.',
  },
  {
    title: 'Brand Consistency',
    body: 'Typography, colours, motion and narration align with your existing brand identity.',
  },
];

const stats = [
  { value: '60–120', suffix: 'sec', label: 'Average Explainer Duration' },
  { value: '3',      suffix: '',    label: 'Learning Video Formats'      },
  { value: '100',    suffix: '%',   label: 'Brand Aligned Output'        },
];

const VideoBasedLearningPage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-story-section]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setActiveSection(Number(entry.target.dataset.index));
        });
      },
      { threshold: 0.55 }
    );
    sections.forEach((s) => observer.observe(s));

    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>E-Learning & Instructional Design Services | Maieutic Edutech</title>
        <meta name="description" content="From 2D/3D animation to instructional design and corporate training content — see the full range of e-learning services Maieutic Edutech offers." />
        <link rel="canonical" href="https://maieuticedutech.com/solutions/video-based-learning" />
      </Helmet>

      <div style={{ paddingTop: '116px' }}>

        {/* ── HERO ── */}
        <section style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #800d07 0%, #600a05 55%, #00615c 100%)',
          padding: '72px 24px 80px',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top right, rgba(255,255,255,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FEF1DE', marginBottom: '16px' }}>
              Corporate Learning Solutions
            </motion.p>

            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
              style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.2, fontWeight: '700', maxWidth: '860px', marginBottom: '24px' }}>
              Video Based Learning That Explains, Demonstrates And Builds Real Capability.
            </motion.h1>

            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
              style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.88)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '700px', marginBottom: '40px' }}>
              Every learning objective demands a different storytelling approach. Some topics need animation. Some require demonstrations. Others demand realistic practice. We create all three — helping organisations move learners from understanding to confident application.
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <button onClick={() => navigate('/contact')}
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: '0.9rem', background: '#ffffff', color: '#800d07', border: 'none', borderRadius: '8px', padding: '14px 36px', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#FEF1DE'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffffff'}>
                Discuss Your Project
              </button>
              <button
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500', fontSize: '0.9rem', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.35)', borderRadius: '8px', padding: '14px 36px', cursor: 'pointer' }}>
                Explore Solutions
              </button>
            </motion.div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section style={{ backgroundColor: '#f8fafb', padding: '48px 24px', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {stats.map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: '700', color: '#800d07' }}>
                  {item.value}
                  {item.suffix && <span style={{ fontSize: '1rem', marginLeft: '4px' }}>{item.suffix}</span>}
                </div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.8rem', color: '#6b7280', marginTop: '6px' }}>{item.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── INTRODUCTION ── */}
        <section style={{ padding: '72px 24px', backgroundColor: '#ffffff' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ fontFamily: 'Poppins, sans-serif', color: '#800d07', fontWeight: '600', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Why Video Based Learning
            </motion.p>
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: '#111827', lineHeight: 1.2, marginBottom: '24px', fontWeight: '700' }}>
              Different Learning Challenges Require Different Types Of Video.
            </motion.h2>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
              style={{ fontFamily: 'Poppins, sans-serif', color: '#4b5563', lineHeight: 1.8, fontSize: '1rem' }}>
              Instead of producing one style of corporate video, we design learning experiences that match the outcome you want. We help people understand concepts, perform processes and practise decisions using a structured progression that improves comprehension, confidence and workplace performance.
            </motion.p>
          </div>
        </section>

        {/* ── STORYTELLING — sticky left + scrolling right ── */}
        <section style={{ backgroundColor: '#f8fafb', padding: isMobile ? '48px 24px' : '0 24px 72px' }}>
          <div style={{
            maxWidth: '1000px', margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '64px', alignItems: 'start',
          }}>

            {/* LEFT sticky panel */}
            <div style={{ position: isMobile ? 'relative' : 'sticky', top: isMobile ? '0' : '140px', height: 'fit-content' }}>
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '14px',
                  padding: '32px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                  borderTop: `4px solid ${learningJourney[activeSection].accent}`,
                }}>

                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: learningJourney[activeSection].accent, fontWeight: '600', marginBottom: '12px' }}>
                  {learningJourney[activeSection].eyebrow}
                </p>

                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '8px', lineHeight: 1.2, fontWeight: '700' }}>
                  {learningJourney[activeSection].title}
                </h2>

                <p style={{ fontFamily: 'Poppins, sans-serif', color: learningJourney[activeSection].accent, fontWeight: '600', fontSize: '0.88rem', marginBottom: '20px' }}>
                  {learningJourney[activeSection].subtitle}
                </p>

                <p style={{ fontFamily: 'Poppins, sans-serif', color: '#4b5563', lineHeight: 1.8, fontSize: '0.88rem', marginBottom: '20px' }}>
                  {learningJourney[activeSection].description}
                </p>

                <div style={{ backgroundColor: '#f8fafb', borderRadius: '10px', padding: '16px 20px', marginBottom: '20px', borderLeft: `3px solid ${learningJourney[activeSection].accent}` }}>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: '0.8rem', color: '#111827', marginBottom: '6px' }}>Best suited for</p>
                  <p style={{ fontFamily: 'Poppins, sans-serif', lineHeight: 1.7, color: '#4b5563', fontSize: '0.85rem', margin: 0 }}>
                    {learningJourney[activeSection].highlight}
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {learningJourney[activeSection].points.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', marginTop: '7px', backgroundColor: learningJourney[activeSection].accent, flexShrink: 0 }} />
                      <span style={{ fontFamily: 'Poppins, sans-serif', color: '#374151', lineHeight: 1.7, fontSize: '0.88rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT scrolling content */}
            <div>
              {learningJourney.map((section, index) => (
                <motion.section
                  key={section.id}
                  data-story-section data-index={index}
                  variants={fadeUp} initial="hidden"
                  whileInView="visible" viewport={{ once: false, amount: 0.55 }}
                  style={{ minHeight: isMobile ? 'auto' : '90vh', paddingBottom: isMobile ? '48px' : '0', display: 'flex', alignItems: 'center' }}>

                  <div style={{ width: '100%' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: section.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: '700', marginBottom: '28px' }}>
                      {section.id}
                    </div>

                    <div style={{ display: 'grid', gap: '14px' }}>
                      {section.points.map((point, i) => (
                        <motion.div key={i} whileHover={{ y: -3 }} transition={{ duration: 0.2 }}
                          style={{ backgroundColor: '#ffffff', borderRadius: '14px', padding: '20px 24px', boxShadow: '0 4px 16px rgba(0,0,0,0.05)', borderLeft: `4px solid ${section.accent}` }}>
                          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', color: '#111827', marginBottom: '8px', fontWeight: '700' }}>
                            {point}
                          </h3>
                          <p style={{ fontFamily: 'Poppins, sans-serif', color: '#6b7280', lineHeight: 1.7, margin: 0, fontSize: '0.85rem' }}>
                            {section.pointDescs[section.points.indexOf(point)]}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.section>
              ))}
            </div>
          </div>
        </section>

        {/* ── SUPPORTING CAPABILITIES ── */}
        <section style={{ backgroundColor: '#ffffff', padding: '72px 24px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ fontFamily: 'Poppins, sans-serif', textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: '600', fontSize: '12px', color: '#800d07', marginBottom: '14px', textAlign: 'center' }}>
              Beyond Video Production
            </motion.p>

            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', lineHeight: 1.2, color: '#111827', textAlign: 'center', marginBottom: '16px', fontWeight: '700' }}>
              Every Video Is Built Around Learning Outcomes.
            </motion.h2>

            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
              style={{ maxWidth: '700px', margin: '0 auto 48px', textAlign: 'center', fontFamily: 'Poppins, sans-serif', color: '#6b7280', lineHeight: 1.8, fontSize: '0.95rem' }}>
              Great learning videos are not defined by animation quality alone. They are designed around how people absorb information, remember concepts and confidently apply knowledge in real workplace situations.
            </motion.p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {capabilities.map((item, i) => (
                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                  whileHover={{ y: -4 }} transition={{ duration: 0.25 }}
                  style={{ backgroundColor: '#fff5f5', borderRadius: '14px', padding: '28px 32px', borderTop: '3px solid #800d07' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#800d07', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: '700', marginBottom: '18px' }}>
                    {i + 1}
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#800d07', fontSize: '1.1rem', fontWeight: '700', marginBottom: '10px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: 'Poppins, sans-serif', color: '#374151', lineHeight: 1.75, margin: 0, fontSize: '0.88rem' }}>
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY ORGANISATIONS CHOOSE US ── */}
        <section style={{ backgroundColor: '#f8fafb', padding: '72px 24px', borderTop: '1px solid #e5e7eb' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '56px', alignItems: 'center' }}>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p style={{ fontFamily: 'Poppins, sans-serif', textTransform: 'uppercase', letterSpacing: '0.14em', color: '#00615c', fontWeight: '600', fontSize: '12px', marginBottom: '14px' }}>
                Why Organisations Choose This Approach
              </p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', lineHeight: 1.2, color: '#111827', marginBottom: '20px', fontWeight: '700' }}>
                One Learning Partner. Multiple Video Experiences.
              </h2>
              <p style={{ fontFamily: 'Poppins, sans-serif', color: '#4b5563', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '16px' }}>
                Most organisations need more than one type of learning video. They require explainers for awareness, demonstrations for operational consistency and realistic scenarios for behavioural capability.
              </p>
              <p style={{ fontFamily: 'Poppins, sans-serif', color: '#4b5563', lineHeight: 1.8, fontSize: '0.95rem' }}>
                Instead of managing multiple production partners, you work with one instructional design team that understands learning, storytelling, production and business outcomes together.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
              style={{ backgroundColor: '#fff5f5', borderRadius: '14px', padding: '36px', borderLeft: '4px solid #800d07' }}>
              {[
                'Explain ideas faster.',
                'Reduce onboarding time.',
                'Improve process consistency.',
                'Increase learner engagement.',
                'Create memorable learning experiences.',
                'Build practical workplace capability.',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', marginBottom: i === 5 ? 0 : '18px', alignItems: 'flex-start' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#800d07', marginTop: '8px', flexShrink: 0 }} />
                  <p style={{ fontFamily: 'Poppins, sans-serif', lineHeight: 1.75, margin: 0, color: '#374151', fontSize: '0.9rem' }}>
                    {item}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ backgroundColor: '#f8fafb', padding: '64px 24px', textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
              Ready to build learning that people remember?
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#6b7280', marginBottom: '32px' }}>
              Whether you need animated explainers, process demonstrations or immersive scenario based learning, we will help you design a video learning experience that delivers  impact.
            </p>
            <button onClick={() => navigate('/contact')}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', fontWeight: '600', color: '#fff', backgroundColor: '#800d07', border: 'none', borderRadius: '8px', padding: '14px 36px', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#600a05'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#800d07'}>
              Start Your Project
            </button>
          </motion.div>
        </section>

      </div>
    </>
  );
};

export default VideoBasedLearningPage;