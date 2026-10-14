import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, animate, useMotionValue } from 'framer-motion';
import {
  Quote,
  UserCircle2,
  Star,
  Check,
  Search,
  Target,
  PenTool,
  RefreshCcw,
  Rocket,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
} from 'lucide-react';

/* =====================================================
   TESTIMONIALS (EXACT – UNCHANGED)
  

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Wadhwani Institute of Technology and Policy has been working Maieutic Consultant since last year! Ravi and his team are very hands on, open and flexible. We had a good experience so far and we continue to do business with them! Maieutic Consultant definitely makes it a point to understand the customer pov to deliver impact! They know the business and craft well! I wish them the best!",
      author: "Purabi Mitra",
      role: "Principal, Premier School",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjUYBlqE7vXPfk8Uvne1e6EwEhtViE0KTggo1JUItE81jHLjF6N-=w72-h72-p-rp-mo-br100",
      rating: 5
    },
    {
      quote: "Maieutic Edutech is a right platform for every client to get creative services made. From many years, I’ve been seeing the outputs of this company and its par excellence. Right from video making, to voice overs, to academic content creation and designing and end to end creative designs can be done here. The efficiency and diligence of work is appreciated.",
      author: "Kumaran P",
      role: "Marketing Professional",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjVexF21IfiU1AKaCKxTIbQMoObAqMXNe_lnugViNVDwKS8HfYXfjQ=w72-h72-p-rp-mo-br100",
      rating: 5
    },
    {
      quote: "Maieutic Edutech Pvt Ltd is a good vendor to deal, they own a professional Team and Subject Matter Expert and it’s headed by Mr. B. Ravishankara. They are good in content creation, development, and video editing, and timely delivering the content as per commitment.",
      author: "Yogesh Malhotra",
      role: "CEO, Tech Solutions Ltd",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjUcJFp1jnluDazCPxcy0YweSoRPhmSWobhAxR7lzuqgTairh-oS_A=w72-h72-p-rp-mo-ba3-br100",
      rating: 5
    }
  ];

  return (
    <section id="industry" className="py-24 bg-gradient-to-br from-[#00615c] via-[#004d49] to-[#800d07] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F8847E] rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-sm">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
            Discover how we've helped institutions and professionals achieve their educational goals through innovative technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.15 } }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl relative group flex flex-col h-full hover:bg-white/15 transition-all duration-300 shadow-xl"
            >
              <div className="absolute -top-6 left-8 bg-[#F8847E] w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                <Quote size={24} className="text-white fill-white" />
              </div>

              <div className="mt-6 flex-grow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-[#FFD700] fill-[#FFD700]" />
                  ))}
                </div>
                <p className="text-gray-100 text-lg leading-relaxed italic mb-6">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-4 border-t border-white/10 pt-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/30 shrink-0">
                  <img
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    src={testimonial.image}
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg leading-tight">
                    {testimonial.author}
                  </h4>
                  <p className="text-[#F8847E] text-sm font-medium mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

 ===================================================== */

/* =====================================================
   INTERACTIVE LEARNING STEPPER
   ===================================================== */

const steps = [
  { title: "Tell us what you need",        note: "A short call about goals, audience and timeline.",      icon: Search },
  { title: "Agree the scope and outcomes", note: "Deliverables, formats and success measures, in writing.", icon: Target },
  { title: "We design and produce",        note: "Curriculum, scripts, studio and animation, in-house.",   icon: PenTool },
  { title: "You review, we refine",        note: "Structured review rounds until it is right.",            icon: RefreshCcw },
  { title: "Launch and scale",             note: "Go live, then grow from one cohort to many.",            icon: Rocket },
];

/* Route geometry (viewBox units). Nodes alternate high/low to make an S-shaped road. */
const VB_W = 1200;
const VB_H = 340;
const NODES = [
  { x: 90,   y: 115 },
  { x: 345,  y: 235 },
  { x: 600,  y: 115 },
  { x: 855,  y: 235 },
  { x: 1110, y: 115 },
];
const ROUTE = NODES.reduce((d, p, i) => {
  if (i === 0) return `M ${p.x} ${p.y}`;
  const prev = NODES[i - 1];
  const k = (p.x - prev.x) * 0.5;
  return `${d} C ${prev.x + k} ${prev.y}, ${p.x - k} ${p.y}, ${p.x} ${p.y}`;
}, "");

const STEP_MS = 1000;

const LearningStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const progress = activeStep / (steps.length - 1);
  const trackRef = useRef(null);
  const sparkRef = useRef(null);
  const prog = useMotionValue(0);

  // Animate the trail to the active step; the spark always sits at the trail's tip.
  useEffect(() => {
    const placeSpark = (v) => {
      const path = trackRef.current, spark = sparkRef.current;
      if (!path || !spark) return;
      const p = path.getPointAtLength(v * path.getTotalLength());
      spark.setAttribute('cx', p.x);
      spark.setAttribute('cy', p.y);
    };
    const unsub = prog.on('change', placeSpark);
    const controls = animate(prog, progress, {
      duration: activeStep === 0 ? 0 : 0.6,
      ease: [0.22, 1, 0.36, 1],
    });
    placeSpark(prog.get());
    return () => { unsub(); controls.stop(); };
  }, [activeStep, progress, prog]);

  useEffect(() => {
    const id = setInterval(() => setActiveStep((s) => (s + 1) % steps.length), STEP_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="process"
      className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-b from-white via-[#FEF1DE]/35 to-white"
    >
      <div className="pointer-events-none absolute -top-24 right-[-120px] w-[420px] h-[420px] rounded-full bg-[#00615c]/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-[-120px] w-[420px] h-[420px] rounded-full bg-[#800d07]/[0.06] blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* ---------- Header ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-6 md:mb-10"
        >
          <div
            className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] uppercase text-[#00615c]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="w-8 h-px bg-[#00615c]" />
            The process
            <span className="w-8 h-px bg-[#00615c]" />
          </div>
          <h2
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            How a project runs
          </h2>
        </motion.div>

        {/* ---------- Desktop: the road ---------- */}
        <div
          className="hidden md:block relative w-full max-w-6xl mx-auto"
          style={{ aspectRatio: `${VB_W} / ${VB_H}` }}
        >
          <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="absolute inset-0 w-full h-full overflow-visible">
            <defs>
              <filter id="mx-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* Track */}
            <path ref={trackRef} d={ROUTE} fill="none" stroke="#071a2f" strokeOpacity="0.1" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />

            {/* Progress */}
            <motion.path
              d={ROUTE}
              fill="none"
              stroke="#00615c"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ pathLength: prog }}
            />

            {/* Spark at the tip of the trail */}
            <circle ref={sparkRef} r="7" fill="#FEF1DE" stroke="#00615c" strokeWidth="3" filter="url(#mx-glow)" />

            {/* Nodes */}
            {NODES.map((p, i) => {
              const done = i < activeStep;
              const active = i === activeStep;
              return (
                <g key={i} onClick={() => setActiveStep(i)} className="cursor-pointer">
                  {active && (
                    <>
                      <motion.circle cx={p.x} cy={p.y} r="26" fill="#00615c" fillOpacity="0.15"
                        animate={{ r: [26, 44], opacity: [0.6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }} />
                      <motion.circle cx={p.x} cy={p.y} r="26" fill="#00615c" fillOpacity="0.15"
                        animate={{ r: [26, 44], opacity: [0.6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay: 0.6 }} />
                    </>
                  )}
                  <motion.circle
                    cx={p.x} cy={p.y} r="26"
                    animate={{
                      fill: done || active ? '#00615c' : '#ffffff',
                      stroke: done || active ? '#00615c' : '#cbd5e1',
                      scale: active ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                    strokeWidth="3"
                    style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Node icons + labels (HTML overlay, positioned in viewBox percentages) */}
          {NODES.map((p, i) => {
            const step = steps[i];
            const done = i < activeStep;
            const active = i === activeStep;
            const Icon = done ? Check : step.icon;
            const labelAbove = p.y > VB_H / 2;
            return (
              <div key={i} className="absolute" style={{ left: `${(p.x / VB_W) * 100}%`, top: `${(p.y / VB_H) * 100}%` }}>
                {/* icon */}
                <button
                  type="button"
                  onClick={() => setActiveStep(i)}
                  aria-label={`Step ${i + 1}: ${step.title}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full focus:outline-none"
                >
                  <Icon className={`w-5 h-5 transition-colors duration-300 ${done || active ? 'text-white' : 'text-gray-400'}`} strokeWidth={2.2} />
                </button>

                {/* label */}
                <div
                  className={`absolute left-0 w-56 ${labelAbove ? 'bottom-10' : 'top-10'} ${
                    i === 0 ? '-translate-x-[22%] text-left' : i === NODES.length - 1 ? '-translate-x-[78%] text-right' : '-translate-x-1/2 text-center'
                  }`}
                >
                  <div
                    className={`text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors ${active ? 'text-[#00615c]' : 'text-gray-400'}`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Step {i + 1}
                  </div>
                  <div
                    className={`mt-1 font-semibold leading-snug transition-all duration-300 ${active ? 'text-gray-900 text-[17px]' : 'text-gray-500 text-[15px]'}`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {step.title}
                  </div>
                  <AnimatePresence>
                    {active && (
                      <motion.div
                        initial={{ opacity: 0, y: labelAbove ? 6 : -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="mt-1.5 text-xs text-gray-500 leading-relaxed"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {step.note}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        {/* ---------- Mobile: vertical road ---------- */}
        <div className="md:hidden relative pl-12 mt-4">
          <div className="absolute left-[22px] top-2 bottom-2 w-px border-l-2 border-dashed border-gray-200" />
          <motion.div
            className="absolute left-[21px] top-2 w-[3px] rounded-full bg-gradient-to-b from-[#00615c] to-[#800d07]"
            animate={{ height: `${progress * 100}%` }}
            transition={{ duration: 0.6 }}
          />
          <div className="flex flex-col gap-7">
            {steps.map((step, i) => {
              const done = i < activeStep;
              const active = i === activeStep;
              const Icon = done ? Check : step.icon;
              return (
                <button key={i} type="button" onClick={() => setActiveStep(i)} className="relative text-left focus:outline-none">
                  <span className={`absolute -left-12 top-0 w-11 h-11 rounded-full flex items-center justify-center border-2 transition-colors ${done || active ? 'bg-[#00615c] border-[#00615c] text-white' : 'bg-white border-gray-300 text-gray-400'}`}>
                    <Icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
                  </span>
                  <div className={`text-[11px] font-semibold tracking-[0.18em] uppercase ${active ? 'text-[#00615c]' : 'text-gray-400'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>Step {i + 1}</div>
                  <div className={`mt-0.5 font-semibold ${active ? 'text-gray-900' : 'text-gray-500'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>{step.title}</div>
                  {active && (
                    <div className="mt-1 text-xs text-gray-500" style={{ fontFamily: "'Poppins', sans-serif" }}>{step.note}</div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ---------- Progress dots ---------- */}
        <div className="mt-8 md:mt-4 flex items-center justify-center gap-2">
          {steps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to step ${i + 1}`}
              onClick={() => setActiveStep(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === activeStep ? 'w-8 bg-[#00615c]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* =====================================================
   CTA SECTION (NEW – FROM SCREENSHOT)
   ===================================================== */

/* Types and retypes the alternating part of the headline */
const useTypewriter = (phrases, { typeMs = 55, deleteMs = 32, holdMs = 1700 } = {}) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = phrases[index];
    let timer;
    if (!deleting && text === full) {
      timer = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
    } else {
      timer = setTimeout(
        () => setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)),
        deleting ? deleteMs : typeMs,
      );
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases, typeMs, deleteMs, holdMs]);

  return text;
};

const LearningCTA = () => {
  const typed = useTypewriter(['an online program', 'a training rollout']);

  return (
    <section id="contact-cta" className="relative overflow-hidden py-20 md:py-24 bg-gradient-to-r from-[#eef6f5] to-[#f8efef]">
      <style>{`
        @keyframes mx-caret { 0%, 45% { opacity: 1; } 50%, 95% { opacity: 0; } 100% { opacity: 1; } }
        .mx-caret { animation: mx-caret 1s steps(1) infinite; }
        @keyframes mx-ring { 0%, 100% { transform: rotate(0); } 10% { transform: rotate(-14deg); } 20% { transform: rotate(12deg); } 30% { transform: rotate(-10deg); } 40% { transform: rotate(8deg); } 50% { transform: rotate(0); } }
        .mx-ring { animation: mx-ring 3.6s ease-in-out infinite; transform-origin: 50% 50%; }
        @keyframes mx-ripple { 0% { transform: scale(1); opacity: 0.7; } 100% { transform: scale(1.35); opacity: 0; } }
        .mx-ripple { animation: mx-ripple 3.6s ease-out infinite; }
        .mx-ripple-2 { animation-delay: 0.5s; }
        @media (prefers-reduced-motion: reduce) { .mx-caret, .mx-ring, .mx-ripple { animation: none; } }
      `}</style>

      {/* Soft moving colour behind the headline */}
      <motion.div
        aria-hidden
        animate={{ x: [-40, 40, -40] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[260px] rounded-full bg-[#00615c]/[0.08] blur-3xl"
      />

      <div className="container mx-auto px-6 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div
            className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] uppercase text-[#00615c]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="w-8 h-px bg-[#00615c]/60" />
            Let&rsquo;s talk
            <span className="w-8 h-px bg-[#00615c]/60" />
          </div>

          {/* Headline with the alternating phrase typed live */}
          <h2
            className="mt-5 text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.2] text-gray-900 min-h-[2.4em]"
            style={{ fontFamily: "'Playfair Display', serif" }}
            aria-label="Planning an online program or a training rollout?"
          >
            Planning{' '}
            <span className="text-[#00615c] whitespace-nowrap">
              {typed}
              <span className="mx-caret inline-block w-[3px] h-[0.9em] align-[-0.12em] bg-[#800d07] ml-1 rounded-full" />
            </span>
            ?
          </h2>

          {/* Ringing call button */}
          <div className="relative mt-9 inline-block">
            <span className="mx-ripple pointer-events-none absolute inset-0 rounded-full border-2 border-[#00615c]/40" />
            <span className="mx-ripple mx-ripple-2 pointer-events-none absolute inset-0 rounded-full border-2 border-[#00615c]/25" />
            <motion.a
              href="tel:+919663727955"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-3 rounded-full bg-[#00615c] px-9 py-4 text-base font-semibold text-white shadow-lg shadow-[#00615c]/25 hover:shadow-xl overflow-hidden"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[420%] transition-transform duration-700 ease-out" />
              <Phone className="mx-ring relative w-5 h-5" strokeWidth={2} />
              <span className="relative">Book a call</span>
              <ArrowRight className="relative w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>

          {/* Quiet secondary ways in */}
          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-600"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <a href="tel:+919663727955" className="inline-flex items-center gap-2 hover:text-[#00615c] transition-colors">
              <Phone className="w-4 h-4" strokeWidth={2} />
              +91 96637 27955
            </a>
            <span className="hidden sm:block w-px h-4 bg-gray-300" />
            <a href="mailto:info@maieuticedutech.com" className="inline-flex items-center gap-2 hover:text-[#00615c] transition-colors">
              <Mail className="w-4 h-4" strokeWidth={2} />
              info@maieuticedutech.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* =====================================================
   FINAL EXPORT
   ===================================================== */

const CombinedSection = () => (
  <>
     {/* <Testimonials /> */}
    <LearningStepper />
    <LearningCTA />
  </>
);

export default CombinedSection;