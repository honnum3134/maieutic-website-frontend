import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' }
  }),
};

const pipeline = [
  {
    step: '01',
    title: 'AI Voiceover & Studio Recording',
    body: 'Narration is produced either through AI voiceover generation — fast, multilingual, and consistent — or through faculty and expert studio recording for programmes that require a human presence on screen.',
    accent: '#800d07',
  },
  {
    step: '02',
    title: '2D & 3D Animation',
    body: 'Character animation, concept illustration, technical diagrams, architectural walkthroughs, and product models — built in 2D or 3D depending on what the content demands, not what is fastest to produce.',
    accent: '#00615c',
  },
  {
    step: '03',
    title: 'Motion Graphics Production',
    body: 'Data visualisation, kinetic typography, logo animation, and branded motion sequences. Motion graphics are used where information density is high and animation alone would obscure rather than clarify.',
    accent: '#800d07',
  },
  {
    step: '04',
    title: 'Explainer Video Production',
    body: 'Short-form animated narratives — typically 60 to 120 seconds — that compress a complex idea, product, or process into a single, clear viewing experience. Scripted and produced in-house.',
    accent: '#00615c',
  },
  {
    step: '05',
    title: 'Post Production',
    body: 'Colour grading, sound design, subtitle generation, compression for LMS delivery, and format packaging for web, mobile, and broadcast. Every output is technically verified before handover.',
    accent: '#800d07',
  },
];

const audiences = [
  {
    label: 'Universities & HEIs',
    desc: 'MOOC content, faculty recordings, animated lecture supplements, and storyboarded SLMs for UGC-DEB compliant online programmes.',
    border: '#800d07',
  },
  {
    label: 'Corporate L&D Teams',
    desc: 'Onboarding videos, compliance animations, product demonstrations, and branded motion content for internal training platforms.',
    border: '#00615c',
  },
  {
    label: 'Ed-Tech Platforms',
    desc: 'Course explainers, marketing animations, feature walkthroughs, and motion-designed promotional content for learner acquisition.',
    border: '#800d07',
  },
];

const formats = [
  { label: '2D Character Animation',   tag: '2D' },
  { label: '3D Modelling & Rendering', tag: '3D' },
  { label: 'Motion Graphics',          tag: 'MG' },
  { label: 'Whiteboard Animation',     tag: 'WB' },
  { label: 'Kinetic Typography',       tag: 'KT' },
  { label: 'Explainer Videos',         tag: 'EX' },
  { label: 'AI Voiceover',            tag: 'AI' },
  { label: 'Faculty Studio Recording', tag: 'FS' },
  { label: 'Post Production',         tag: 'PP' },
];

const MotionGraphicsPage = () => {
  const navigate = useNavigate();
  const [activePipeline, setActivePipeline] = useState(0);

  return (
    <>
      <Helmet>
        <title>E-Learning & Instructional Design Services | Maieutic Edutech</title>
        <meta name="description" content="From 2D/3D animation to instructional design and corporate training content — see the full range of e-learning services Maieutic Edutech offers." />
        <link rel="canonical" href="https://maieuticedutech.com/solutions/2d-3d-motion-graphics" />
      </Helmet>

      <div style={{ paddingTop: '116px' }}>

        {/* ── HERO ── */}
        <section style={{
          background: 'linear-gradient(135deg, #800d07 0%, #600a05 55%, #00615c 100%)',
          padding: '72px 24px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top right, rgba(255,255,255,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '56px', alignItems: 'center' }}>

            {/* Left */}
            <div>
              <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FEF1DE', marginBottom: '16px' }}>
                Corporate Solutions
              </motion.p>

              <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
                style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.2, fontWeight: '700', marginBottom: '24px' }}>
                2D / 3D / Motion Graphics
              </motion.h1>

              <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
                style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.88)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '40px' }}>
                Visual production for learning and communication — from brief to final export. We produce 2D and 3D animation, motion graphics, explainer videos, AI voiceover, and studio recordings for universities, corporate L&D teams, and ed-tech platforms.
              </motion.p>

              <motion.button variants={fadeUp} initial="hidden" animate="visible" custom={3}
                onClick={() => navigate('/contact')}
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: '0.9rem', background: '#ffffff', color: '#800d07', border: 'none', borderRadius: '8px', padding: '14px 36px', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#FEF1DE'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffffff'}>
                Start a Project
              </motion.button>
            </div>

            {/* Right — format tags */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {formats.map((f, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    backgroundColor: 'rgba(255,255,255,0.10)',
                    border: '1px solid rgba(255,255,255,0.20)',
                    borderRadius: '8px', padding: '10px 16px',
                  }}>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px', fontWeight: '700', color: '#FEF1DE', letterSpacing: '0.08em' }}>{f.tag}</span>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.88)' }}>{f.label}</span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* ── STATS ── */}
        <section style={{ backgroundColor: '#f8fafb', padding: '48px 24px', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {[
              { value: '5',     label: 'Production Stages'   },
              { value: '2D+3D', label: 'Animation Formats'   },
              { value: '100%',  label: 'In-House Production' },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: '700', color: '#800d07' }}>{s.value}</div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.8rem', color: '#6b7280', marginTop: '6px' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── PIPELINE ── */}
        <section style={{ padding: '72px 24px', backgroundColor: '#ffffff' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>

            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#800d07', marginBottom: '14px' }}>
              Production Pipeline
            </motion.p>

            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '700', color: '#111827', lineHeight: 1.2, marginBottom: '48px' }}>
              From Brief to Final Export — Five Stages.
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {pipeline.map((item, i) => (
                <motion.div key={i}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                  style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>

                  <button
                    onClick={() => setActivePipeline(activePipeline === i ? -1 : i)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', gap: '20px',
                      padding: '20px 24px', border: 'none', cursor: 'pointer', textAlign: 'left',
                      backgroundColor: activePipeline === i ? '#f8fafb' : '#fff',
                      transition: 'background 0.2s',
                    }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: '700', color: item.accent, flexShrink: 0, minWidth: '32px' }}>
                      {item.step}
                    </span>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: '700', color: '#111827', flex: 1 }}>
                      {item.title}
                    </span>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', color: item.accent, fontWeight: '300', flexShrink: 0, display: 'inline-block', transition: 'transform 0.2s', transform: activePipeline === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                      +
                    </span>
                  </button>

                  <AnimatePresence>
                    {activePipeline === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}>
                        <div style={{
                          padding: '0 24px 24px 76px',
                          backgroundColor: '#f8fafb',
                          borderTop: `2px solid ${item.accent}`,
                        }}>
                          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#374151', lineHeight: 1.8, margin: '16px 0 0' }}>
                            {item.body}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO WE SERVE ── */}
        <section style={{ backgroundColor: '#f8fafb', padding: '72px 24px', borderTop: '1px solid #e5e7eb' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>

            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00615c', marginBottom: '14px' }}>
              Who We Serve
            </motion.p>

            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '700', color: '#111827', lineHeight: 1.2, marginBottom: '40px' }}>
              Built for Institutions, Enterprises, and Platforms.
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {audiences.map((a, i) => (
                <motion.div key={i}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                  style={{ backgroundColor: '#ffffff', borderRadius: '14px', padding: '28px 32px', borderLeft: `4px solid ${a.border}`, display: 'grid', gridTemplateColumns: '220px 1fr', gap: '24px', alignItems: 'center' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: '700', color: a.border, margin: 0 }}>
                    {a.label}
                  </h3>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.88rem', color: '#374151', lineHeight: 1.75, margin: 0 }}>
                    {a.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY IN-HOUSE ── */}
        <section style={{ backgroundColor: '#ffffff', padding: '72px 24px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'start' }}>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#800d07', marginBottom: '14px' }}>
                Why In-House Production Matters
              </p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: '700', color: '#111827', lineHeight: 1.2, marginBottom: '20px' }}>
                Content and Production Under One Roof.
              </h2>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#374151', lineHeight: 1.8 }}>
                When instructional design and visual production are handled by separate vendors, quality gaps appear at the handover. Content that was designed for one format gets adapted into another without the original context — and it shows. At Maieutic, the same team that builds the curriculum builds the animation brief. The result is visual content that communicates accurately — not just attractively.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              {[
                { title: 'Instructional accuracy',  body: 'Every visual is verified against the learning objective before production begins.'     },
                { title: 'Brand consistency',       body: 'Typography, colour, motion, and narration align across every deliverable.'            },
                { title: 'SME review built in',     body: 'Subject matter expert rounds happen before animation, not after.'                     },
                { title: 'Format flexibility',      body: '2D, 3D, motion graphics, or live studio — chosen for the content, not convenience.'   },
              ].map((item, i) => (
                <motion.div key={i}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                  style={{ display: 'flex', gap: '16px', marginBottom: i === 3 ? 0 : '24px', alignItems: 'flex-start' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#800d07', marginTop: '8px', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: '700', color: '#111827', marginBottom: '4px' }}>{item.title}</p>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.7, margin: 0 }}>{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ backgroundColor: '#f8fafb', padding: '64px 24px', textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
              Ready to bring your content to life visually?
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#6b7280', marginBottom: '32px' }}>
              Tell us what you are building and we will recommend the right production format for it.
            </p>
            <button onClick={() => navigate('/contact')}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', fontWeight: '600', color: '#fff', backgroundColor: '#800d07', border: 'none', borderRadius: '8px', padding: '14px 36px', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#600a05'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#800d07'}>
              Start a Project
            </button>
          </motion.div>
        </section>

      </div>
    </>
  );
};

export default MotionGraphicsPage;