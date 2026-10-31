import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, X, GraduationCap, Briefcase, BookOpen, Megaphone, Users, MonitorPlay, Layers, Film, Clapperboard, Brain } from 'lucide-react';

/* ---------- Content. Logos and case studies mirror /clients and /resources/case-studies. ---------- */
const WORK = {
  university: {
    icon: GraduationCap,
    eyebrow: 'For universities',
    title: 'Online programs we are building and running right now',
    intro: 'From curriculum to graduation, we operate the online degree portfolio for these universities as one team.',
    gradient: 'linear-gradient(135deg, #00615c 0%, #04504b 60%, #06302d 100%)',
    accent: '#00615c',
    partnersLabel: 'Programs in production',
    partners: [
      { name: 'REVA University Online',       logo: '/images/clients/education/Reva.png' },
      { name: 'P P Savani University Online', logo: '/images/clients/education/PPSU.png' },
      { name: 'BML Munjal University',        logo: '/images/clients/education/BML.png' },
      { name: 'Jaipur National University',   logo: '/images/clients/education/JNU.png' },
      { name: 'BIMTECH Birla Institute',      logo: '/images/clients/education/BIM Tech.jpg' },
      { name: 'DSU Online',                   logo: '/images/clients/education/DSU.jpg' },
    ],
    servicesLabel: 'What we deliver for each program',
    services: [
      { icon: BookOpen,    title: 'Content design & development',   text: 'SME onboarding, self-learning materials, assessments mapped to Bloom\'s taxonomy.', to: '/solutions/content-design-development' },
      { icon: MonitorPlay, title: 'LMS deployment & management',    text: 'Moodle set-up aligned to UGC-DEB four-quadrant requirements, run and supported by us.', to: '/solutions/lms-deployment-management' },
      { icon: Megaphone,   title: 'Marketing & digital products',   text: 'Student acquisition campaigns across search, social and aggregator networks.', to: '/solutions/marketing-digital-products' },
      { icon: Users,       title: 'Academic delivery & student success', text: 'Admissions, live sessions, mentoring and support from first login to completion.', to: '/solutions/academic-delivery-student-success' },
    ],
    casesLabel: 'Recent outcomes',
    cases: [
      { client: 'REVA University',      title: 'End-to-end OPM delivery for an expanding online programme portfolio', metrics: ['307 content units', 'MBA · BCA · MCA', 'LMS deployed'] },
      { client: 'P P Savani University', title: 'SLM production and Moodle LMS deployment for CDOE programmes',        metrics: ['Moodle LMS', 'UGC-DEB compliant', 'SLM pipeline'] },
    ],
    primary:   { label: 'Launch a program with us', to: '/contact' },
    secondary: { label: 'All university partners',  to: '/clients' },
  },
  enterprise: {
    icon: Briefcase,
    eyebrow: 'For enterprises',
    title: 'Learning we have built for companies',
    intro: 'Onboarding, compliance, product and leadership training, produced as custom digital learning for these teams.',
    gradient: 'linear-gradient(135deg, #800d07 0%, #650a05 60%, #3d0603 100%)',
    accent: '#800d07',
    partnersLabel: 'Enterprise clients',
    partners: [
      { name: 'HDFC',            logo: '/images/clients/corporate/Hdfc.webp' },
      { name: 'TE Connectivity', logo: '/images/clients/corporate/TE.webp' },
      { name: 'Saint Gobain',    logo: '/images/clients/corporate/Saint.webp' },
      { name: 'Narayana Health', logo: '/images/clients/corporate/Narayana.webp' },
      { name: 'Intas Pharma',    logo: '/images/clients/corporate/Intas.webp' },
      { name: 'Mazars',          logo: '/images/clients/corporate/Mazars.webp' },
      { name: 'Jade Global',     logo: '/images/clients/corporate/Jade.webp' },
      { name: 'Strides Ltd',     logo: '/images/clients/corporate/Strides.webp' },
      { name: 'Wurth Elektronik', logo: '/images/clients/corporate/Wurth.webp' },
      { name: 'Glenmark Pharma', logo: '/images/clients/corporate/glenmark.webp' },
    ],
    servicesLabel: 'What we build',
    services: [
      { icon: Layers,       title: 'Interactive modules, Articulate 360', text: 'SCORM-packaged microlearning with quizzes, simulations and branching scenarios.', to: '/solutions/interactive-models-articulate' },
      { icon: Film,         title: 'Video-based learning',              text: 'Explainer, product, process and scenario videos, short clips or full series.', to: '/solutions/video-based-learning' },
      { icon: Clapperboard, title: '2D / 3D motion graphics',           text: 'Animated explainers and walkthroughs that make complex processes clear.', to: '/solutions/2d-3d-motion-graphics' },
      { icon: Brain,        title: 'Training & psychometrics',          text: 'Instructor-led and virtual workshops, with Harrison Assessments for leadership programs.', to: '/contact' },
    ],
    casesLabel: 'Recent outcomes',
    cases: [
      { client: 'Enterprise client', title: 'Articulate 360 course suite for onboarding and compliance training', metrics: ['Articulate 360', 'SCORM packaged', 'Branching scenarios'] },
      { client: 'Ed-tech partner',   title: 'Explainer video series for a learning platform product launch',     metrics: ['6 videos', '90 s each', '2D animation'] },
    ],
    primary:   { label: 'Discuss your training needs', to: '/contact' },
    secondary: { label: 'All enterprise clients',      to: '/clients' },
  },
};

const initials = (name) => name.split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

const LogoTile = ({ name, logo }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className="flex flex-col items-center gap-2" title={name}>
      <div className="flex h-16 w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-3 shadow-sm">
        {logo && !failed
          ? <img src={logo} alt={name} loading="lazy" onError={() => setFailed(true)} className="max-h-10 max-w-full object-contain" />
          : <span className="text-sm font-bold text-[#00615c]" style={{ fontFamily: "'Playfair Display', serif" }}>{initials(name)}</span>}
      </div>
      <span className="text-center text-[11px] leading-tight text-gray-600 line-clamp-2">{name}</span>
    </div>
  );
};

const SectionLabel = ({ children, accent }) => (
  <div className="mb-3 flex items-center gap-3">
    <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: accent }}>{children}</span>
    <span className="h-px flex-1 bg-gray-200" />
  </div>
);

const HeroWorkModal = ({ kind, onClose }) => {
  const data = kind ? WORK[kind] : null;

  // Escape closes; lock page scroll while open
  useEffect(() => {
    if (!kind) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
  }, [kind, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {data && (
        <motion.div
          key="hero-work-modal"
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6"
          style={{ fontFamily: "'Poppins', sans-serif" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            role="dialog" aria-modal="true" aria-labelledby="hero-work-title"
            initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_rgba(0,0,0,0.3)]"
          >
            {/* header */}
            <div className="relative px-7 pb-7 pt-8 sm:px-9 text-white" style={{ background: data.gradient }}>
              <button
                type="button" onClick={onClose} aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
              >
                <X size={17} />
              </button>
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.26em] text-[#FEF1DE]">
                <data.icon className="h-4 w-4" strokeWidth={2.2} />
                {data.eyebrow}
              </div>
              <h2 id="hero-work-title" className="mt-3 max-w-xl text-2xl font-bold leading-snug sm:text-[1.9rem]" style={{ fontFamily: "'Playfair Display', serif" }}>
                {data.title}
              </h2>
              <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-white/85">{data.intro}</p>
            </div>

            {/* body */}
            <div className="overflow-y-auto px-7 py-7 sm:px-9">
              <div>
                <SectionLabel accent={data.accent}>{data.servicesLabel}</SectionLabel>
                <div className="grid gap-3 sm:grid-cols-2">
                  {data.services.map((s) => (
                    <Link
                      key={s.title} to={s.to} onClick={onClose}
                      className="group flex gap-3 rounded-xl border border-gray-200 bg-[#FEF1DE]/30 p-4 transition-colors hover:border-current hover:bg-white"
                      style={{ color: data.accent }}
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white" style={{ background: data.accent }}>
                        <s.icon className="h-[18px] w-[18px]" strokeWidth={2} />
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-center gap-1.5 text-[14px] font-semibold text-gray-900">
                          {s.title}
                          <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                        </span>
                        <span className="mt-1 block text-[12.5px] leading-relaxed text-gray-600">{s.text}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <SectionLabel accent={data.accent}>{data.partnersLabel}</SectionLabel>
                <div className={`grid grid-cols-3 gap-3 ${data.partners.length === 6 ? 'sm:grid-cols-6' : 'sm:grid-cols-5'}`}>
                  {data.partners.map((p) => <LogoTile key={p.name} {...p} />)}
                </div>
              </div>

              <div className="mt-8">
                <SectionLabel accent={data.accent}>{data.casesLabel}</SectionLabel>
                <div className="grid gap-3 sm:grid-cols-2">
                  {data.cases.map((c) => (
                    <div key={c.title} className="rounded-xl border-l-4 bg-gray-50 p-4" style={{ borderColor: data.accent }}>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">{c.client}</div>
                      <div className="mt-1 text-[14px] font-semibold leading-snug text-gray-900">{c.title}</div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {c.metrics.map((m) => (
                          <span key={m} className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-gray-700 ring-1 ring-gray-200">{m}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 bg-gray-50 px-7 py-4 sm:px-9">
              <Link to={data.secondary.to} onClick={onClose} className="text-[13px] font-semibold text-gray-600 underline-offset-4 hover:underline">
                {data.secondary.label}
              </Link>
              <Link
                to={data.primary.to} onClick={onClose}
                className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
                style={{ background: data.accent }}
              >
                {data.primary.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default HeroWorkModal;
