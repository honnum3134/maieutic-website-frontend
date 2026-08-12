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

const deliveryItems = [
  {
    title: 'MOOC Development',
    body: 'End-to-end MOOC production — from instructional design and script development through to video production, assessment design, and platform deployment on SWAYAM, Coursera, and institutional LMS environments.',
  },
  {
    title: 'SWAYAM Course Content Design',
    body: 'UGC-DEB aligned course content built for the SWAYAM platform — structured to meet the Four-Quadrant model requirements with e-content, self-assessment tools, discussion forums, and faculty-led video lectures.',
  },
  {
    title: 'Multi-Modal Lecture Content',
    body: 'Video lectures, transcripts, annotated reading materials, and formative assessments designed to work together as a cohesive learning unit — not as separate disconnected deliverables.',
  },
  {
    title: 'Faculty Translation Support',
    body: 'Higher education support services for faculty moving classroom content into digital formats — bridging the gap between subject expertise and instructional design without requiring faculty to become content producers.',
  },
  {
    title: 'Assessment & Rubric Design',
    body: 'Formative and summative assessment design aligned to Bloom\'s Taxonomy — MCQs, case-based questions, assignments, and rubrics that measure real learning outcomes, not just completion.',
  },
];

const stats = [
  { value: '921+', label: 'Storyboard Sub-units Produced' },
  { value: '14+',  label: 'Programmes Supported'          },
  { value: '4QM',  label: 'Four-Quadrant Model Aligned'   },
];

const approach = [
  {
    step: '01',
    title: 'Content Audit & Gap Analysis',
    body: 'We begin by reviewing existing course material, syllabi, and learning objectives to identify gaps before any production begins.',
    accent: '#00615c',
  },
  {
    step: '02',
    title: 'Instructional Architecture',
    body: 'Course structure, module sequencing, and learning pathway design — built around how learners actually progress through content, not just how the syllabus is ordered.',
    accent: '#800d07',
  },
  {
    step: '03',
    title: 'SME Collaboration & Validation',
    body: 'Subject matter experts are involved at every stage — content review, storyboard approval, and final quality checks before any material goes live.',
    accent: '#00615c',
  },
  {
    step: '04',
    title: 'Multi-Format Production',
    body: 'Video, text, interactive, and print-ready formats produced in parallel — so every learner has access to content in the format that works best for them.',
    accent: '#800d07',
  },
  {
    step: '05',
    title: 'Platform Deployment & QA',
    body: 'Final content is packaged, tested, and deployed on the institution\'s LMS or platform — with technical QA, accessibility checks, and compliance verification included.',
    accent: '#00615c',
  },
];

const AcademicDeliveryPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Academic Delivery & Student Success | Maieutic Edutech</title>
        <meta name="description" content="MOOC and SWAYAM content production, live session delivery, academic mentoring, learning analytics, and student success services for online degree programmes by Maieutic Edutech." />
        <link rel="canonical" href="https://maieuticedutech.com/solutions/academic-delivery-student-success" />
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
              Academic Delivery &amp; Student Success
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, maxWidth: '700px' }}>
              Universities carry a clear mandate — deliver rigorous, structured academic content at scale while meeting regulatory requirements. Our academic delivery services cover the full production pipeline: MOOC development, SWAYAM course content, multi-modal lecture production, and faculty support — built for institutions running online programmes at volume.
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

        {/* ── WHAT WE DELIVER ── */}
        <section style={{ padding: '72px 24px', backgroundColor: '#ffffff' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>

            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00615c', marginBottom: '14px' }}>
              What We Deliver
            </motion.p>

            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '700', color: '#111827', lineHeight: 1.2, marginBottom: '40px' }}>
              Academic Content Built for Scale.
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {deliveryItems.map((item, i) => (
                <motion.div key={i}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                  style={{
                    backgroundColor: '#f8fafb', borderRadius: '14px',
                    padding: '28px 32px', borderLeft: '4px solid #00615c',
                    display: 'grid', gridTemplateColumns: '220px 1fr',
                    gap: '24px', alignItems: 'start',
                  }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: '700', color: '#00615c', margin: 0, lineHeight: 1.35 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.88rem', color: '#374151', lineHeight: 1.75, margin: 0 }}>
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK — process accordion ── */}
        <section style={{ backgroundColor: '#f8fafb', padding: '72px 24px', borderTop: '1px solid #e5e7eb' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>

            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#800d07', marginBottom: '14px' }}>
              How We Work
            </motion.p>

            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '700', color: '#111827', lineHeight: 1.2, marginBottom: '40px' }}>
              A Disciplined Production Pipeline.
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {approach.map((item, i) => (
                <motion.div key={i}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                  style={{
                    backgroundColor: '#ffffff', borderRadius: '12px',
                    padding: '24px 28px', border: '1px solid #e5e7eb',
                    display: 'flex', gap: '24px', alignItems: 'flex-start',
                  }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: '700', color: item.accent, flexShrink: 0, minWidth: '32px' }}>
                    {item.step}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.88rem', color: '#374151', lineHeight: 1.75, margin: 0 }}>
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STUDENT SUCCESS (from the former /education page) ── */}
        <section style={{ backgroundColor: '#ffffff', padding: '72px 24px', borderTop: '1px solid #e5e7eb' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>

            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00615c', marginBottom: '14px' }}>
              Student Experience
            </motion.p>

            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '700', color: '#111827', lineHeight: 1.2, marginBottom: '20px' }}>
              Student Success &amp; Mentoring.
            </motion.h2>

            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem', color: '#374151', lineHeight: 1.8, marginBottom: '40px' }}>
              We facilitate qualified Subject Matter Experts, instructors, mentors, and teaching assistants for programme delivery — conducting synchronous live sessions, webinars, doubt-clearing sessions, and academic mentoring through the LMS platform. We manage faculty orientation, academic training, and performance monitoring, and coordinate faculty scheduling and session planning so academic delivery and learner engagement stay on track.
            </motion.p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              {[
                { title: 'Mentorship Support',  body: 'Continuous learner guidance and engagement'    },
                { title: 'Learning Analytics',  body: 'Tracking progress and student performance'     },
                { title: 'Student Outcomes',    body: 'Improving retention and academic success'      },
              ].map((f, i) => (
                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                  style={{ backgroundColor: '#f0faf9', borderRadius: '14px', padding: '28px 32px', borderTop: '3px solid #00615c' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: '700', color: '#00615c', marginBottom: '8px' }}>
                    {f.title}
                  </h3>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem', color: '#374151', lineHeight: 1.7, margin: 0 }}>
                    {f.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLOSING STATEMENT ── */}
        <section style={{ backgroundColor: '#ffffff', padding: '72px 24px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'center' }}>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: '700', color: '#111827', lineHeight: 1.2, marginBottom: '20px' }}>
                Content that meets regulatory requirements and actually teaches.
              </h2>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#374151', lineHeight: 1.85 }}>
                The Four-Quadrant model is a UGC-DEB requirement — but it is also a sound pedagogical framework when implemented properly. Our academic delivery work meets compliance requirements without treating them as a ceiling. Every unit we produce is designed to inform, engage, and assess — not just to fill a content quota.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              style={{ backgroundColor: '#f0faf9', borderRadius: '14px', padding: '32px 36px', borderLeft: '4px solid #00615c' }}>
              {[
                { title: 'UGC-DEB Compliant',        body: 'Every deliverable meets current UGC-DEB Online Education Regulations.'     },
                { title: 'Four-Quadrant Aligned',    body: 'E-content, video, discussion, and assessment — all four quadrants covered.' },
                { title: 'Platform Agnostic',        body: 'Delivered for Moodle, SWAYAM, or any institutional LMS environment.'       },
                { title: 'SME Verified',             body: 'Subject matter expert review is built into every production stage.'        },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', marginBottom: i === 3 ? 0 : '20px', alignItems: 'flex-start' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00615c', marginTop: '7px', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', fontWeight: '700', color: '#111827', marginBottom: '4px' }}>{item.title}</p>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.83rem', color: '#6b7280', lineHeight: 1.7, margin: 0 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ backgroundColor: '#f8fafb', padding: '64px 24px', textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
              Ready to build academic content that scales?
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#6b7280', marginBottom: '32px' }}>
              Talk to us about your academic delivery requirements.
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

export default AcademicDeliveryPage;