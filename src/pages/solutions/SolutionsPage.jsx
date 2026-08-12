import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useInView, animate } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' }
  }),
};

/* Summaries are distilled from each solution page's own hero + body copy —
   keep them in sync if those pages change. */
const FAMILIES = [
  {
    id: 'digital',
    eyebrow: 'For Universities & Institutions',
    title: 'Digital Learning',
    intro: 'End-to-end support for online degree programmes — from the first storyboard to the analytics dashboard.',
    accent: '#00615c',
    tint: '#f0faf9',
    solutions: [
      {
        title: 'Content Design & Development',
        to: '/solutions/content-design-development',
        summary: 'From SME onboarding to a fully structured, assessed learning package — instructional design, SLMs, storyboarding, and in-house studio recording.',
        points: ['SME collaboration', 'SLMs & assessments', 'Studio recording'],
      },
      {
        title: 'LMS Deployment & Management',
        to: '/solutions/lms-deployment-management',
        summary: 'UGC-DEB compliant LMS setup and continuous management, built around the Four-Quadrant Academic Delivery Model.',
        points: ['UGC-DEB compliant', 'Four-Quadrant model', 'Continuous management'],
      },
      {
        title: 'Marketing, Digital Products & Network',
        to: '/solutions/marketing-digital-products',
        summary: 'The infrastructure around the content — ed-tech marketing, student acquisition campaigns, digital products, and LMS network management.',
        points: ['Student acquisition', 'Digital products', 'Network management'],
      },
      {
        title: 'Academic Delivery',
        to: '/solutions/academic-delivery-student-success',
        summary: 'MOOC and SWAYAM production, live sessions, academic mentoring, and learning analytics for programmes running at scale.',
        points: ['MOOC & SWAYAM', 'Live sessions & mentoring', 'Learning analytics'],
      },
    ],
  },
  {
    id: 'corporate',
    eyebrow: 'For Enterprises & L&D Teams',
    title: 'Corporate Solutions',
    intro: 'Training content that makes learners do something with it — interact, practise, and apply.',
    accent: '#800d07',
    tint: '#fff5f5',
    solutions: [
      {
        title: 'Interactive Models & Articulate 360',
        to: '/solutions/interactive-models-articulate',
        summary: 'Storyline courses and Rise modules — branching scenarios, simulations, and gamified training built to SCORM and xAPI standards.',
        points: ['Branching scenarios', 'Simulations', 'E-Learning'],
      },
      {
        title: 'Video Based Learning',
        to: '/solutions/video-based-learning',
        summary: 'Explainer, process, and scenario-based videos — moving learners from understanding to confident application.',
        points: ['Explainer videos', 'Process & SOP videos', 'Scenario practice'],
      },
      {
        title: '2D / 3D / Motion Graphics',
        to: '/solutions/2d-3d-motion-graphics',
        summary: '2D and 3D animation, motion graphics, AI voiceover, and studio recordings — produced fully in-house, brief to final export.',
        points: ['2D & 3D animation', 'Motion graphics', 'AI voiceover & studio'],
      },
    ],
  },
];

const MARQUEE_TERMS = [
  'Instructional Design', 'SLMs & Assessments', 'LMS Deployment', 'UGC-DEB Compliance',
  'SWAYAM & MOOCs', 'Student Success', 'Articulate 360', 'Scenario Videos',
  '2D / 3D Animation', 'Motion Graphics', 'AI Voiceover', 'Learning Analytics',
];

/* Self-hosted grain — a tiny inline SVG turbulence texture (no external fetch). */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")";

/* Count-up stat — animates via state (never mutates React-owned DOM directly). */
const Stat = ({ value, suffix, label, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4, ease: 'easeOut', delay: index * 0.12,
      onUpdate: v => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, index]);

  return (
    <div ref={ref}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', fontWeight: '700', color: '#00615c', lineHeight: 1 }}>
        {display.toLocaleString()}{suffix}
      </div>
      <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.8rem', color: '#6b7280', marginTop: '10px', letterSpacing: '0.04em' }}>
        {label}
      </div>
    </div>
  );
};

const SolutionRow = ({ solution, number, accent, tint, index }) => (
  <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index * 0.6}>
    <Link
      to={solution.to}
      className="solx-row"
      style={{ '--accent': accent, '--tint': tint, textDecoration: 'none', display: 'block' }}
    >
      <div className="solx-row-inner">
        <span className="solx-num" aria-hidden="true">{number}</span>

        <div style={{ minWidth: 0 }}>
          <h3 className="solx-title">{solution.title}</h3>
          <p className="solx-summary">{solution.summary}</p>
          <div className="solx-chips">
            {solution.points.map((p, i) => (
              <span key={i} className="solx-chip">{p}</span>
            ))}
          </div>
        </div>

        <span className="solx-arrow" aria-hidden="true">
          <ArrowUpRight size={20} strokeWidth={2.2} />
        </span>
      </div>
    </Link>
  </motion.div>
);

const SolutionsPage = () => {
  const navigate = useNavigate();
  let counter = 0;

  return (
    <>
      <Helmet>
        <title>Our Solutions — Digital Learning & Corporate Training | Maieutic Edutech</title>
        <meta name="description" content="Seven specialised solutions for universities and enterprises — content design, LMS deployment, academic delivery, ed-tech marketing, Articulate 360 development, video-based learning, and 2D/3D motion graphics." />
        <link rel="canonical" href="https://maieuticedutech.com/solutions" />
      </Helmet>

      {/* Page-scoped styles: keyframes, hover choreography, and the responsive
          rules that inline styles can't express. Prefixed .solx- to avoid
          collisions with global.css. */}
      <style>{`
        .solx-row { border-top: 1px solid #e5e7eb; position: relative; overflow: hidden; }
        .solx-row:last-of-type { border-bottom: 1px solid #e5e7eb; }
        .solx-row::before {
          content: ''; position: absolute; inset: 0; background: var(--tint);
          transform: scaleX(0); transform-origin: left center;
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .solx-row:hover::before, .solx-row:focus-visible::before { transform: scaleX(1); }
        .solx-row:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }

        .solx-row-inner {
          position: relative; display: grid; grid-template-columns: 90px 1fr 56px;
          gap: 28px; align-items: center; padding: 34px 20px; max-width: 1080px; margin: 0 auto;
        }

        .solx-num {
          font-family: 'Playfair Display', serif; font-size: 3.2rem; font-weight: 700;
          line-height: 1; color: transparent; -webkit-text-stroke: 1.5px #d1d5db;
          transition: all 0.35s ease; user-select: none;
        }
        .solx-row:hover .solx-num { -webkit-text-stroke: 1.5px var(--accent); color: var(--accent); }

        .solx-title {
          font-family: 'Playfair Display', serif; font-size: clamp(1.25rem, 2.6vw, 1.8rem);
          font-weight: 700; color: #111827; margin: 0 0 8px; line-height: 1.25;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), color 0.3s;
        }
        .solx-row:hover .solx-title { transform: translateX(8px); color: var(--accent); }

        .solx-summary {
          font-family: 'Poppins', sans-serif; font-size: 0.88rem; color: #4b5563;
          line-height: 1.7; margin: 0 0 14px; max-width: 640px;
        }

        .solx-chips { display: flex; flex-wrap: wrap; gap: 8px; }
        .solx-chip {
          font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 600;
          color: var(--accent); background: #fff; border: 1px solid #e5e7eb;
          border-radius: 999px; padding: 5px 12px; transition: border-color 0.3s;
        }
        .solx-row:hover .solx-chip { border-color: var(--accent); }

        .solx-arrow {
          width: 52px; height: 52px; border-radius: 50%; border: 1.5px solid #d1d5db;
          display: flex; align-items: center; justify-content: center; color: #9ca3af;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .solx-row:hover .solx-arrow {
          background: var(--accent); border-color: var(--accent); color: #fff;
          transform: translate(3px, -3px);
        }

        .solx-marquee { overflow: hidden; white-space: nowrap; }
        .solx-marquee-track { display: inline-flex; animation: solx-scroll 36s linear infinite; }
        @keyframes solx-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        .solx-hero-num {
          position: absolute; right: 4%; bottom: -6%; font-family: 'Playfair Display', serif;
          font-size: clamp(10rem, 24vw, 20rem); font-weight: 700; line-height: 1;
          color: transparent; -webkit-text-stroke: 1.5px rgba(255,255,255,0.16);
          user-select: none; pointer-events: none;
        }

        @media (max-width: 720px) {
          .solx-row-inner { grid-template-columns: 1fr 44px; padding: 28px 20px; }
          .solx-num { display: none; }
          .solx-arrow { width: 44px; height: 44px; align-self: start; }
          .solx-hero-num { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .solx-marquee-track { animation: none; }
          .solx-row::before, .solx-num, .solx-title, .solx-arrow { transition: none; }
        }
      `}</style>

      <div style={{ paddingTop: '116px' }}>

        {/* ── HERO — oversized editorial type over the brand gradient ── */}
        <section style={{
          background: 'linear-gradient(135deg, #00615c 0%, #004d49 55%, #800d07 100%)',
          padding: '88px 24px 104px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top right, rgba(255,255,255,0.08) 0%, transparent 55%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: GRAIN, pointerEvents: 'none' }} />
          <span className="solx-hero-num">07</span>

          <div style={{ maxWidth: '1080px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FEF1DE', marginBottom: '24px' }}>
              What We Do — Seven Ways
            </motion.p>
            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.6rem, 7vw, 5rem)', fontWeight: '700', color: '#ffffff', lineHeight: 1.08, marginBottom: '28px', maxWidth: '820px' }}>
              Learning that learners{' '}
              <em style={{ fontStyle: 'italic', color: '#FEF1DE' }}>actually finish.</em>
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, maxWidth: '640px' }}>
              Seven specialised solutions across two families — digital learning for universities and institutions, training content for enterprises. Every engagement starts with instructional design and ends with measurable outcomes.
            </motion.p>
          </div>
        </section>

        {/* ── CAPABILITY MARQUEE — cream separator band ── */}
        <div className="solx-marquee" aria-hidden="true" style={{ backgroundColor: '#FEF1DE', padding: '16px 0', borderBottom: '1px solid #e5e7eb' }}>
          <div className="solx-marquee-track">
            {[0, 1].map(copy => (
              <span key={copy} style={{ display: 'inline-flex' }}>
                {MARQUEE_TERMS.map((term, i) => (
                  <span key={i} style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: '600', color: '#00615c', padding: '0 22px', display: 'inline-flex', alignItems: 'center', gap: '44px' }}>
                    {term}
                    <span style={{ color: '#800d07', fontSize: '9px' }}>✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* ── STATS — count-up on scroll ── */}
        <section style={{ backgroundColor: '#ffffff', padding: '64px 24px' }}>
          <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '40px', textAlign: 'center' }}>
            <Stat value={7}    suffix=""  label="Specialised Solutions"   index={0} />
            <Stat value={7500} suffix="+" label="Content Hours Delivered" index={1} />
            <Stat value={44}   suffix="+" label="Institutional Partners"  index={2} />
          </div>
        </section>

        {/* ── THE INDEX — numbered rows, continuous 01–07 ── */}
        {FAMILIES.map((family) => (
          <section key={family.id} style={{ backgroundColor: '#ffffff', paddingBottom: '8px' }}>
            <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '56px 20px 28px' }}>
              <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.14em', textTransform: 'uppercase', color: family.accent, marginBottom: '12px' }}>
                {family.eyebrow}
              </motion.p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', flexWrap: 'wrap' }}>
                <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '700', color: '#111827', lineHeight: 1.15, margin: 0 }}>
                  {family.title}
                </motion.h2>
                <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
                  style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.92rem', color: '#6b7280', lineHeight: 1.7, margin: 0, maxWidth: '460px' }}>
                  {family.intro}
                </motion.p>
              </div>
            </div>

            <div>
              {family.solutions.map((s, i) => {
                counter += 1;
                return (
                  <SolutionRow
                    key={s.to}
                    solution={s}
                    number={String(counter).padStart(2, '0')}
                    accent={family.accent}
                    tint={family.tint}
                    index={i}
                  />
                );
              })}
            </div>
          </section>
        ))}

        {/* ── CLOSING STATEMENT — dark editorial CTA ── */}
        <section style={{ backgroundColor: '#111827', padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at bottom left, rgba(0,97,92,0.35) 0%, transparent 55%), radial-gradient(ellipse at top right, rgba(128,13,7,0.30) 0%, transparent 55%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: GRAIN, pointerEvents: 'none' }} />

          <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', fontWeight: '700', color: '#ffffff', lineHeight: 1.25, marginBottom: '20px' }}>
              Not sure which solution fits?{' '}
              <em style={{ fontStyle: 'italic', color: '#FEF1DE' }}>Most engagements combine two or three.</em>
            </motion.h2>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '40px' }}>
              Tell us what you're building — we'll map the right combination for your programme, platform, or team.
            </motion.p>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
              <button onClick={() => navigate('/contact')}
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem', fontWeight: '600', color: '#00615c', backgroundColor: '#ffffff', border: 'none', borderRadius: '999px', padding: '16px 44px', cursor: 'pointer', transition: 'background 0.25s, transform 0.25s' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#FEF1DE'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.transform = 'none'; }}>
                Get in Touch
              </button>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};

export default SolutionsPage;
