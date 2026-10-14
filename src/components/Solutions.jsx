import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { BookOpen, Video, TrendingUp, Check, Play, Users } from 'lucide-react';

/* ---------- Mini illustration: learning path that ticks off modules ---------- */
const TeachingVisual = () => {
  const modules = [
    { label: 'Outcome', width: '58%' },
    { label: 'Format', width: '74%' },
    { label: 'Module', width: '64%' },
  ];
  return (
    <div className="flex flex-col gap-3 w-[82%]">
      {modules.map((m, i) => (
        <div key={m.label} className="flex items-center gap-3">
          <motion.div
            className="w-7 h-7 rounded-lg flex items-center justify-center bg-white shadow-md ring-1 ring-[#00615c]/15"
            animate={{ backgroundColor: ['#ffffff', '#ffffff', '#00615c', '#00615c', '#ffffff'] }}
            transition={{ duration: 6, times: [0, 0.15 + i * 0.18, 0.2 + i * 0.18, 0.85, 1], repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.span
              animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1, 1, 0.5] }}
              transition={{ duration: 6, times: [0, 0.15 + i * 0.18, 0.2 + i * 0.18, 0.85, 1], repeat: Infinity, ease: 'easeInOut' }}
            >
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </motion.span>
          </motion.div>
          <div className="flex-1">
            <div className="h-2.5 rounded-full bg-[#00615c]/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#00615c] to-[#0b7d77]"
                animate={{ width: ['0%', '0%', m.width, m.width, '0%'] }}
                transition={{ duration: 6, times: [0, 0.1 + i * 0.18, 0.22 + i * 0.18, 0.85, 1], repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <div
              className="mt-1 text-[10px] font-semibold tracking-[0.14em] uppercase text-[#00615c]/70"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {m.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ---------- Mini illustration: video frame with play button and audio wave ---------- */
const ProductionVisual = () => {
  const bars = [0.4, 0.8, 0.55, 1, 0.7, 0.45, 0.9, 0.6, 0.35, 0.75, 0.5];
  return (
    <div className="relative w-[78%] aspect-[16/10] rounded-xl bg-gradient-to-br from-[#5a0905] to-[#800d07] shadow-xl ring-4 ring-white/70 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '14px 14px' }} />
      {/* REC badge */}
      <div className="absolute top-2.5 left-3 flex items-center gap-1.5">
        <motion.span
          className="w-2 h-2 rounded-full bg-[#ff4d4d]"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        <span className="text-[9px] font-bold tracking-[0.2em] text-white/80" style={{ fontFamily: "'Poppins', sans-serif" }}>REC</span>
      </div>
      <div className="absolute top-2.5 right-3 text-[9px] font-semibold text-white/70 tabular-nums" style={{ fontFamily: "'Poppins', sans-serif" }}>00:42</div>
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-11 h-11 rounded-full bg-white/95 flex items-center justify-center shadow-lg"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Play className="w-[18px] h-[18px] text-[#800d07] translate-x-[1px]" fill="#800d07" strokeWidth={0} />
        </motion.div>
        <motion.span
          className="absolute w-11 h-11 rounded-full border-2 border-white/60"
          animate={{ scale: [1, 1.9], opacity: [0.7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
        />
      </div>
      {/* Audio wave */}
      <div className="absolute bottom-2.5 left-3 right-3 h-6 flex items-end justify-between gap-[3px]">
        {bars.map((h, i) => (
          <motion.span
            key={i}
            className="flex-1 rounded-sm bg-[#FEF1DE]/90"
            style={{ height: `${h * 100}%`, transformOrigin: 'bottom' }}
            animate={{ scaleY: [0.3, 1, 0.5, 0.9, 0.3] }}
            transition={{ duration: 1.6 + (i % 4) * 0.25, repeat: Infinity, ease: 'easeInOut', delay: i * 0.07 }}
          />
        ))}
      </div>
    </div>
  );
};

/* ---------- Mini illustration: growth chart with learner counter ---------- */
const GrowthVisual = () => {
  const bars = [14, 24, 36, 52, 70, 100];
  const [count, setCount] = useState(1);
  useEffect(() => {
    let frame;
    let start;
    const target = 10000;
    const cycle = 6000;
    const tick = (t) => {
      if (start === undefined) start = t;
      const p = ((t - start) % cycle) / cycle;
      const eased = p < 0.75 ? Math.pow(p / 0.75, 2.2) : 1;
      setCount(Math.max(1, Math.round(eased * target)));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);
  return (
    <div className="w-[80%] flex flex-col gap-3">
      <div className="flex items-end justify-between gap-2 h-24">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-md bg-gradient-to-t from-[#00615c] to-[#0b7d77]"
            style={{ transformOrigin: 'bottom', height: `${h}%` }}
            animate={{ scaleY: [0, 0, 1, 1, 0] }}
            transition={{ duration: 6, times: [0, 0.05 + i * 0.1, 0.18 + i * 0.1, 0.9, 1], repeat: Infinity, ease: 'easeOut' }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between rounded-xl bg-white/90 px-3 py-2 shadow-md ring-1 ring-[#00615c]/10">
        <div className="flex items-center gap-1.5 text-[#00615c]">
          <Users className="w-4 h-4" strokeWidth={2} />
          <span className="text-[10px] font-semibold tracking-[0.14em] uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>Learners</span>
        </div>
        <span className="text-sm font-bold text-gray-900 tabular-nums" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {count.toLocaleString('en-IN')}+
        </span>
      </div>
    </div>
  );
};

/* ---------- 3D tilt stage that leans toward the cursor ---------- */
const TiltStage = ({ color, children, phase = 0 }) => {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 140, damping: 18 });
  const sry = useSpring(ry, { stiffness: 140, damping: 18 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 8);
    rx.set(-py * 8);
  };
  const onLeave = () => { rx.set(0); ry.set(0); };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="relative h-60 w-full" style={{ perspective: 900 }}>
      {/* Glow */}
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(ellipse at center, ${color}1f 0%, ${color}0a 40%, transparent 70%)` }}
      />
      <motion.div
        style={{ rotateX: srx, rotateY: sry, transformStyle: 'preserve-3d' }}
        className="relative h-full w-full flex items-center justify-center"
      >
        <motion.div
          style={{ transform: 'translateZ(40px)' }}
          className="w-full flex items-center justify-center"
          whileHover={{ scale: 1.08, transition: { duration: 0.35 } }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

const Solutions = () => {
  const solutions = [
    {
      icon: BookOpen,
      title: 'Teaching comes first',
      description:
        'Every module starts from what the learner must be able to do, then we choose the format that teaches it best.',
      color: '#00615c',
      Visual: TeachingVisual,
    },
    {
      icon: Video,
      title: 'Creative Digital Production',
      description:
        'Animation, studio video and interactive exercises, produced in-house and built to hold attention to the last minute.',
      color: '#800d07',
      Visual: ProductionVisual,
    },
    {
      icon: TrendingUp,
      title: 'Built to grow with you',
      description:
        'Start with one course or a full degree. The same structure carries you from a first cohort to thousands of learners.',
      color: '#00615c',
      Visual: GrowthVisual,
    },
  ];

  return (
    <section
      id="solutions"
      className="relative py-20 md:py-24 bg-gradient-to-br from-white to-[#FEF1DE]/40 overflow-hidden"
    >
      <style>{`
        @keyframes mx-shimmer { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        .mx-shimmer { background-size: 200% auto; animation: mx-shimmer 6s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .mx-shimmer { animation: none; } }
      `}</style>
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#00615c]/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-[#800d07]/[0.08] blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* ---------- Header ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2
            className="mx-shimmer inline-block text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent"
            style={{
              fontFamily: "'Playfair Display', serif",
              backgroundImage: 'linear-gradient(90deg, #00615c, #0b7d77, #800d07, #00615c)',
            }}
          >
            How we work
          </h2>
          <p
            className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Three principles shape every course we build, for a university or a corporate training team.
          </p>
        </motion.div>

        {/* ---------- Principles ---------- */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-6 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 + index * 0.15 }}
              className="group relative flex flex-col items-center text-center"
            >
              <motion.div
                className="w-full flex flex-col items-center"
                animate={{ y: [0, -10, 0], scale: [1, 1.04, 1] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: index * 1.4 }}
              >
              <TiltStage color={solution.color} phase={index * 1.4}>
                <solution.Visual />
              </TiltStage>

              <div className="mt-1 flex items-center gap-3">
                <motion.span
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-md"
                  style={{ background: solution.color }}
                >
                  <solution.icon className="w-[18px] h-[18px]" strokeWidth={1.9} />
                </motion.span>
                <h3
                  className="text-xl md:text-[22px] font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: solution.color }}
                >
                  {solution.title}
                </h3>
              </div>

              <span
                className="mt-3 block h-[3px] w-10 rounded-full transition-all duration-500 group-hover:w-20"
                style={{ background: `linear-gradient(90deg, ${solution.color}, #FEF1DE)` }}
              />

              <p
                className="mt-4 text-sm md:text-[15px] text-gray-600 leading-relaxed max-w-sm px-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {solution.description}
              </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Solutions;
