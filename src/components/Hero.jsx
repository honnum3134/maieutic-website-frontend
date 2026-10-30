import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useAnimationFrame, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight, GraduationCap, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ---------- Copy from the content sheet. `accent` is the phrase set in italic teal. ---------- */
const slides = [
  { title: 'We build and run online degree programs for universities', accent: 'online degree programs',
    subtitle: 'Curriculum design, content production, LMS deployment, admissions and student support from one team' },
  { title: 'Designed for institutions. Built for learners.',            accent: 'Built for learners.',
    subtitle: 'We help universities launch online programs that grow from a first cohort to thousands of students' },
];
const SLIDE_MS = 6000;

const stats = [
  { value: 50,   suffix: '+', label: 'universities & companies' },
  { value: 7500, suffix: '+', label: 'hours of content' },
  { value: 98,   suffix: '%', label: 'client satisfaction' },
];

const EASE = [0.22, 1, 0.36, 1];
const clamp01 = (v) => Math.max(0, Math.min(1, v));
const easeInOut = (p) => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2);
const easeOut = (p) => 1 - Math.pow(1 - p, 3);
/* 0..1 over the window [a, a+len] of the clock t */
const seg = (t, a, len) => clamp01((t - a) / len);

const Headline = ({ title, accent }) => {
  const start = title.indexOf(accent);
  const words = title.split(' ');
  let pos = 0;
  return (
    <>
      {words.map((word, i) => {
        const wordStart = pos; pos += word.length + 1;
        const inAccent = start >= 0 && wordStart >= start && wordStart < start + accent.length;
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.5, delay: 0.035 * i, ease: EASE }}
            className={(inAccent ? 'italic font-bold text-[#00615c]' : 'font-semibold text-gray-900') + ' inline-block mr-[0.25em]'}
          >
            {word}
          </motion.span>
        );
      })}
    </>
  );
};

/* ---------- Figures count up once on load ---------- */
const Counter = ({ value, suffix, delay = 0.9, duration = 1.8 }) => {
  const [shown, setShown] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) { setShown(value); return undefined; }
    let frame; let start;
    const tick = (now) => {
      if (start === undefined) start = now;
      const t = clamp01((now - start - delay * 1000) / (duration * 1000));
      setShown(Math.round(value * easeOut(t)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, delay, duration, reduced]);
  return <>{shown.toLocaleString('en-IN')}{suffix}</>;
};

/* =====================================================================
   Isometric scene, drawn in code.
   iso(): world (x, y, z) -> screen. x runs down-right, y runs down-left, z is up.
   One clock `t` (seconds, 0..CYCLE) drives the whole story:
     brief -> signal -> studio records -> signal -> LMS live -> signal -> learners complete -> cap -> reset
   ===================================================================== */
const COS = Math.cos(Math.PI / 6), SIN = Math.sin(Math.PI / 6);
const ORIGIN = { x: 400, y: 250 };
const iso = (x, y, z = 0) => ({ X: ORIGIN.x + (x - y) * COS, Y: ORIGIN.y + (x + y) * SIN - z });
const P = (pts) => pts.map((p) => `${p.X.toFixed(1)},${p.Y.toFixed(1)}`).join(' ');

const Box = ({ x, y, z = 0, w, d, h, c, stroke = 'rgba(0,0,0,0.05)', children }) => {
  const top = [iso(x, y, z + h), iso(x + w, y, z + h), iso(x + w, y + d, z + h), iso(x, y + d, z + h)];
  const left = [iso(x, y + d, z + h), iso(x + w, y + d, z + h), iso(x + w, y + d, z), iso(x, y + d, z)];
  const right = [iso(x + w, y, z + h), iso(x + w, y + d, z + h), iso(x + w, y + d, z), iso(x + w, y, z)];
  return (
    <g>
      <polygon points={P(left)} fill={c.left} stroke={stroke} />
      <polygon points={P(right)} fill={c.right} stroke={stroke} />
      <polygon points={P(top)} fill={c.top} stroke={stroke} />
      {children}
    </g>
  );
};

const TEAL = { top: '#0f7c75', left: '#00615c', right: '#04504b' };
const TEAL_LIGHT = { top: '#e3f2ef', left: '#c7e4df', right: '#b4d9d3' };
const CREAM = { top: '#FEF1DE', left: '#f0dfc3', right: '#e3cfae' };
const MAROON = { top: '#a2211a', left: '#800d07', right: '#650a05' };
const SLATE = { top: '#f7f4ee', left: '#e9e3d8', right: '#dbd3c5' };
const WHITE = { top: '#ffffff', left: '#f3efe8', right: '#e6e0d5' };
const DARK = { top: '#243036', left: '#111a1e', right: '#1a262b' };

const CYCLE = 11;
/* story beats (seconds) */
const T = {
  windows: 0.4, windowsEach: 0.14,
  sig1: 2.3, sigLen: 1.2,
  rec: 3.4, recEnd: 6.6, tile: 4.8,
  sig2: 5.3,
  lms: 6.3, lmsEnd: 8.6,
  sig3: 7.3,
  bars: 8.1, barsEach: 0.35, barLen: 1.3,
  cap: 9.8,
  fade: 10.6,
};
const phaseOf = (t) => (t < T.rec ? 0 : t < T.lms ? 1 : t < T.bars ? 2 : 3);

const PHASES = [
  'Universities and enterprises share their programs and goals',
  'Our studio scripts, films and animates every lesson',
  'The LMS goes live with content, assessments and analytics',
  'Learners move from first login to completion',
];
const STATIONS = {
  university: 'Universities bring us degree programs and curricula',
  enterprise: 'Enterprises bring us training goals and their teams',
  studio:     'Instructional designers, video and animation teams',
  lms:        'LMS deployment, assessments, analytics and support',
  learners:   'Thousands of learners, from enrolment to completion',
};

/* Dashed route with a signal that travels when p is 0..1 */
const Route = ({ from, to, p, color = '#00615c', delay = 1.2 }) => {
  const a = iso(...from), b = iso(...to);
  const m = { X: (a.X + b.X) / 2, Y: Math.min(a.Y, b.Y) - 40 };
  const d = `M ${a.X} ${a.Y} Q ${m.X} ${m.Y} ${b.X} ${b.Y}`;
  const show = p > 0 && p < 1;
  const q = easeInOut(p), u = 1 - q;
  const X = u * u * a.X + 2 * u * q * m.X + q * q * b.X;
  const Y = u * u * a.Y + 2 * u * q * m.Y + q * q * b.Y;
  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay }}>
      <path d={d} fill="none" stroke={color} strokeOpacity="0.3" strokeWidth="2" strokeDasharray="4 8" strokeLinecap="round" />
      <g style={{ opacity: show ? 1 : 0, transition: 'opacity .25s' }}>
        <circle cx={X} cy={Y} r="11" fill={color} opacity="0.16" />
        <circle cx={X} cy={Y} r="5" fill="#FEF1DE" stroke={color} strokeWidth="2.5" />
      </g>
    </motion.g>
  );
};

/* A station: pops in on load, lifts and glows on hover */
const Station = ({ id, base, delay, hover, setHover, shadow, children }) => {
  const on = hover === id, dim = hover && !on;
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.55 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 140, damping: 15, delay }}
      style={{ transformOrigin: `${base.X}px ${base.Y}px` }}
    >
      <g
        onMouseEnter={() => setHover(id)}
        onMouseLeave={() => setHover(null)}
        style={{
          transform: on ? 'translateY(-8px)' : 'translateY(0px)',
          opacity: dim ? 0.55 : 1,
          transition: 'transform .45s cubic-bezier(.22,1,.36,1), opacity .35s',
          cursor: 'default',
        }}
      >
        {/* contact shadow on the ground, and the hover glow */}
        <ellipse cx={shadow.X} cy={shadow.Y} rx={shadow.rx} ry={shadow.rx * 0.5} fill="#06302d" opacity="0.12" filter="url(#mx-soft)" />
        <ellipse cx={shadow.X} cy={shadow.Y} rx={shadow.rx * 1.15} ry={shadow.rx * 0.58} fill="#8FE3DA" style={{ opacity: on ? 0.45 : 0, transition: 'opacity .4s' }} filter="url(#mx-soft)" />
        {children}
      </g>
    </motion.g>
  );
};

const Tree = ({ x, y, s = 1 }) => {
  const b = iso(x, y, 0), t1 = iso(x, y, 18 * s), t2 = iso(x, y, 30 * s);
  return (
    <g>
      <ellipse cx={b.X} cy={b.Y} rx={9 * s} ry={4.5 * s} fill="#06302d" opacity="0.1" />
      <line x1={b.X} y1={b.Y} x2={t1.X} y2={t1.Y} stroke="#6b4a2b" strokeWidth={3 * s} strokeLinecap="round" />
      <circle cx={t1.X} cy={t1.Y - 2} r={11 * s} fill="#2f8f85" />
      <circle cx={t2.X - 4 * s} cy={t2.Y + 2} r={8 * s} fill="#3fa397" />
      <circle cx={t2.X + 5 * s} cy={t2.Y + 4} r={7 * s} fill="#2a7f76" />
    </g>
  );
};

/* Window grid on one face of a box; lit(i) decides the colour */
const Windows = ({ pts, lit, offset = 0, total, dark }) => pts.map((w, i) => (
  <polygon key={i} points={P(w)} fill={lit((i + offset) / (total || pts.length)) ? '#FEF1DE' : dark} style={{ transition: 'fill .5s' }} />
));

const UniversityBuilding = ({ U, lit, reduced, loop }) => {
  const flagTop = iso(U.x + 60, U.y + 50, 160);
  const windows = [];
  for (let r = 0; r < 3; r++) for (let col = 0; col < 4; col++) windows.push([
    iso(U.x + 120, U.y + 14 + col * 22, 56 - r * 20), iso(U.x + 120, U.y + 28 + col * 22, 56 - r * 20),
    iso(U.x + 120, U.y + 28 + col * 22, 44 - r * 20), iso(U.x + 120, U.y + 14 + col * 22, 44 - r * 20)]);
  return (
    <>
      <Box x={U.x} y={U.y} w={120} d={100} h={70} c={TEAL_LIGHT}>
        <Windows pts={windows} lit={lit} dark="#8fc9c1" />
      </Box>
      {[0, 1, 2, 3].map((i) => (
        <Box key={i} x={U.x + 14 + i * 28} y={U.y + 100} w={10} d={8} h={54} c={WHITE} />
      ))}
      <Box x={U.x + 44} y={U.y + 100} w={32} d={10} h={6} c={WHITE} />
      <polygon points={P([iso(U.x + 52, U.y + 100, 6), iso(U.x + 68, U.y + 100, 6), iso(U.x + 68, U.y + 100, 34), iso(U.x + 52, U.y + 100, 34)])} fill="#0f7c75" />
      <Box x={U.x + 35} y={U.y + 25} w={50} d={50} h={32} z={70} c={TEAL} />
      <Box x={U.x + 52} y={U.y + 42} w={16} d={16} h={22} z={102} c={CREAM} />
      <line x1={iso(U.x + 60, U.y + 50, 124).X} y1={iso(U.x + 60, U.y + 50, 124).Y} x2={flagTop.X} y2={flagTop.Y} stroke="#065f5a" strokeWidth="2" />
      <motion.polygon
        points={`${flagTop.X},${flagTop.Y} ${flagTop.X + 26},${flagTop.Y + 6} ${flagTop.X},${flagTop.Y + 13}`}
        fill="#800d07"
        animate={reduced ? undefined : { skewY: [0, 6, 0, -4, 0] }}
        transition={{ duration: 3, repeat: loop, ease: 'easeInOut' }}
        style={{ transformOrigin: `${flagTop.X}px ${flagTop.Y}px` }}
      />
      <text x={iso(U.x - 10, U.y + 100, 0).X - 8} y={iso(U.x - 10, U.y + 100, 0).Y + 4} textAnchor="end" fontFamily="Poppins, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2" fill="#00615c">UNIVERSITY</text>
    </>
  );
};

const GLASS = { top: '#11857d', left: '#0b6b65', right: '#07544f' };
const EnterpriseBuilding = ({ E, lit, reduced, loop }) => {
  const tx = E.x, ty = E.y, tw = 54, td = 54, th = 88; // tower
  const right = [], left = [];
  for (let r = 0; r < 5; r++) for (let col = 0; col < 3; col++) {
    const z = th - 12 - r * 15;
    right.push([iso(tx + tw, ty + 6 + col * 16, z), iso(tx + tw, ty + 16 + col * 16, z), iso(tx + tw, ty + 16 + col * 16, z - 9), iso(tx + tw, ty + 6 + col * 16, z - 9)]);
    left.push([iso(tx + 6 + col * 16, ty + td, z), iso(tx + 16 + col * 16, ty + td, z), iso(tx + 16 + col * 16, ty + td, z - 9), iso(tx + 6 + col * 16, ty + td, z - 9)]);
  }
  const total = right.length + left.length;
  const mast = iso(tx + 12, ty + 12, th + 4), mastTop = iso(tx + 12, ty + 12, th + 16);
  const label = iso(tx - 4, ty + td + 2, th - 14); // beside the upper floors: above the campus roof, clear of the studio
  return (
    <>
      {/* low annex with the entrance, on the right of the tower */}
      <Box x={tx + tw} y={ty + 12} w={22} d={36} h={22} c={SLATE} />
      <polygon points={P([iso(tx + tw + 22, ty + 20, 4), iso(tx + tw + 22, ty + 32, 4), iso(tx + tw + 22, ty + 32, 18), iso(tx + tw + 22, ty + 20, 18)])} fill="#0f7c75" />
      {/* glass tower */}
      <Box x={tx} y={ty} w={tw} d={td} h={th} c={GLASS}>
        <Windows pts={right} lit={lit} total={total} dark="#1b8e86" />
        <Windows pts={left} lit={lit} offset={right.length} total={total} dark="#15807a" />
        <polygon points={P([iso(tx + tw, ty, th - 5), iso(tx + tw, ty + td, th - 5), iso(tx + tw, ty + td, th - 2), iso(tx + tw, ty, th - 2)])} fill="#a2211a" />
        <polygon points={P([iso(tx, ty + td, th - 5), iso(tx + tw, ty + td, th - 5), iso(tx + tw, ty + td, th - 2), iso(tx, ty + td, th - 2)])} fill="#800d07" />
      </Box>
      <Box x={tx + 30} y={ty + 30} w={14} d={12} h={6} z={th} c={SLATE} />
      <line x1={mast.X} y1={mast.Y} x2={mastTop.X} y2={mastTop.Y} stroke="#03302d" strokeWidth="2" />
      <motion.circle cx={mastTop.X} cy={mastTop.Y} r="2.5" fill="#ff5a5a" animate={reduced ? undefined : { opacity: [1, 0.2, 1] }} transition={{ duration: 1.6, repeat: loop }} />
      <text x={label.X - 6} y={label.Y + 4} textAnchor="end" fontFamily="Poppins, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2" fill="#00615c">ENTERPRISE</text>
    </>
  );
};

const Scene = ({ hint }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2 });
  const reduced = useReducedMotion();
  const [t, setT] = useState(reduced ? 9.5 : -1);
  const [hover, setHover] = useState(null);
  const clock = useRef({ start: null, pausedAt: null, last: -1 });

  // Wall-clock driven so slow frames never stretch the story; pauses while the scene is off-screen.
  useAnimationFrame((now) => {
    if (reduced) return;
    const c = clock.current;
    if (!inView) { if (c.pausedAt === null) c.pausedAt = now; return; }
    if (c.start === null) c.start = now + 1900; // the story starts after the entrance
    if (c.pausedAt !== null) { c.start += now - c.pausedAt; c.pausedAt = null; }
    const sec = (now - c.start) / 1000;
    const q = Math.floor(sec * 30);
    if (q !== c.last) { c.last = q; setT(sec < 0 ? -1 : sec % CYCLE); }
  });

  const fading = t >= T.fade;                 // everything settles back before the loop restarts
  const litWindow = (frac) => !fading && t >= T.windows + frac * 1.8; // frac 0..1 across a building's windows
  const focus = hover || hint;                // a hovered station, or the one a button points at
  const recOn = !fading && t >= T.rec && t < T.recEnd;
  const tileUp = !fading && t >= T.tile;
  const lmsOn = !fading && t >= T.lms && t < T.lmsEnd;
  const dotOn = (i) => !fading && t >= T.lms + i * 0.25;
  const progress = [0, 1, 2].map((i) => (fading ? 0 : easeOut(seg(t, T.bars + i * T.barsEach, T.barLen))));
  const avg = (progress[0] + progress[1] + progress[2]) / 3;
  const capP = fading ? 0 : seg(t, T.cap, 1.2);
  const phase = t < 0 ? 0 : phaseOf(t);
  const caption = focus ? STATIONS[focus] : PHASES[phase];
  const captionKey = focus || `p${phase}`;
  const loop = reduced ? undefined : Infinity;

  const U = { x: -170, y: -60 };   // university (back-left)
  const S = { x: 40, y: -170 };    // studio (back-right)
  const L = { x: -110, y: 120 };   // learners (front-left)
  const C = { x: 110, y: 50 };     // LMS core (front-right)
  const E = { x: -76, y: -186 };   // enterprise tower (back corner)

  const lmsTop = iso(C.x + 30, C.y + 30, 60);
  const capAt = iso(L.x + 46 + 18, L.y - 18 + 10, 64);
  const presenter = (x, y, z) => ({ foot: iso(x, y, z), hip: iso(x, y, z + 9), head: iso(x, y, z + 24) });
  const pr = presenter(S.x + 26, S.y + 40, 46);

  return (
    <div ref={ref} className="w-full">
      <svg viewBox="130 70 560 400" className="w-full h-auto overflow-visible" role="img" aria-label="How Maieutic connects universities, a content studio, the learning platform and learners">
        <defs>
          <radialGradient id="mx-ground" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00615c" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#00615c" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="mx-plat" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fbf9f4" />
            <stop offset="100%" stopColor="#ebe5d9" />
          </linearGradient>
          <filter id="mx-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="16" stdDeviation="16" floodColor="#06302d" floodOpacity="0.16" />
          </filter>
          <filter id="mx-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <filter id="mx-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* ground glow, reflection and the platform rising in */}
        <motion.g initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE }}>
          <ellipse cx="400" cy="325" rx="300" ry="140" fill="url(#mx-ground)" />
          <ellipse cx="400" cy="372" rx="230" ry="56" fill="#00615c" opacity="0.07" filter="url(#mx-soft)" />
          <g filter="url(#mx-shadow)">
            <Box x={-230} y={-210} w={440} d={400} h={14} c={{ ...SLATE, top: 'url(#mx-plat)' }} stroke="rgba(0,0,0,0.04)" />
          </g>
          {/* edge line on the platform top */}
          <polygon points={P([iso(-216, -196, 14), iso(196, -196, 14), iso(196, 176, 14), iso(-216, 176, 14)])} fill="none" stroke="#00615c" strokeOpacity="0.12" strokeDasharray="2 6" />
          <Tree x={-215} y={-125} s={0.85} />
          <Tree x={186} y={150} s={1.05} />
          <Tree x={-212} y={60} s={0.8} />
        </motion.g>

        {/* routes: university -> studio -> LMS -> learners */}
        <Route from={[U.x + 60, U.y + 50, 70]} to={[S.x + 30, S.y + 40, 45]} p={seg(t, T.sig1, T.sigLen)} delay={1.3} />
        <Route from={[E.x + 27, E.y + 54, 50]} to={[S.x + 16, S.y + 12, 46]} p={seg(t, T.sig1 + 0.25, T.sigLen)} delay={1.35} />
        <Route from={[S.x + 60, S.y + 40, 45]} to={[C.x + 30, C.y + 30, 90]} p={seg(t, T.sig2, T.sigLen)} color="#800d07" delay={1.45} />
        <Route from={[C.x + 30, C.y + 30, 90]} to={[L.x + 40, L.y + 20, 24]} p={seg(t, T.sig3, T.sigLen)} delay={1.6} />

        {/* ---------- Enterprise tower (back corner) ---------- */}
        <Station id="enterprise" base={iso(E.x + 27, E.y + 27, 0)} shadow={{ ...iso(E.x + 36, E.y + 32, 0), rx: 58 }} delay={0.65} hover={focus} setHover={setHover}>
          <EnterpriseBuilding E={E} lit={litWindow} reduced={reduced} loop={loop} />
        </Station>

        {/* ---------- University campus ---------- */}
        <Station id="university" base={iso(U.x + 60, U.y + 50, 0)} shadow={{ ...iso(U.x + 62, U.y + 56, 0), rx: 92 }} delay={0.55} hover={focus} setHover={setHover}>
          <UniversityBuilding U={U} lit={litWindow} reduced={reduced} loop={loop} />
        </Station>

        {/* ---------- Content studio ---------- */}
        <Station id="studio" base={iso(S.x + 60, S.y + 45, 0)} shadow={{ ...iso(S.x + 62, S.y + 50, 0), rx: 86 }} delay={0.8} hover={focus} setHover={setHover}>
          <Box x={S.x} y={S.y} w={120} d={90} h={46} c={MAROON} />
          {/* backdrop */}
          <polygon points={P([iso(S.x + 6, S.y + 6, 46), iso(S.x + 44, S.y + 6, 46), iso(S.x + 44, S.y + 6, 88), iso(S.x + 6, S.y + 6, 88)])} fill="#FEF1DE" opacity="0.9" />
          {/* presenter */}
          <ellipse cx={pr.foot.X} cy={pr.foot.Y} rx="7" ry="3.5" fill="#000" opacity="0.18" />
          <path d={`M ${pr.foot.X - 5} ${pr.foot.Y} L ${pr.foot.X - 6} ${pr.hip.Y - 6} Q ${pr.hip.X} ${pr.hip.Y - 12} ${pr.foot.X + 6} ${pr.hip.Y - 6} L ${pr.foot.X + 5} ${pr.foot.Y} Z`} fill="#03302d" />
          <circle cx={pr.head.X} cy={pr.head.Y} r="5.5" fill="#f1c9a5" />
          <motion.g animate={reduced ? undefined : { rotate: [0, -14, 0] }} transition={{ duration: 1.8, repeat: loop, ease: 'easeInOut' }} style={{ transformOrigin: `${pr.hip.X + 5}px ${pr.hip.Y - 10}px` }}>
            <line x1={pr.hip.X + 5} y1={pr.hip.Y - 10} x2={pr.hip.X + 13} y2={pr.hip.Y - 2} stroke="#03302d" strokeWidth="3" strokeLinecap="round" />
          </motion.g>
          {/* camera on a tripod */}
          <line x1={iso(S.x + 70, S.y + 52, 46).X} y1={iso(S.x + 70, S.y + 52, 46).Y} x2={iso(S.x + 70, S.y + 52, 64).X} y2={iso(S.x + 70, S.y + 52, 64).Y} stroke="#1a262b" strokeWidth="3" />
          <Box x={S.x + 56} y={S.y + 42} w={28} d={20} h={16} z={64} c={DARK} />
          <circle cx={iso(S.x + 84, S.y + 52, 72).X + 6} cy={iso(S.x + 84, S.y + 52, 72).Y} r="7" fill="#0b1316" stroke="#8FE3DA" strokeWidth="2" />
          <circle cx={iso(S.x + 84, S.y + 52, 72).X + 6} cy={iso(S.x + 84, S.y + 52, 72).Y} r="2.5" fill="#8FE3DA" style={{ opacity: recOn ? 1 : 0.3, transition: 'opacity .4s' }} />
          {/* ring light */}
          <circle cx={iso(S.x + 20, S.y + 72, 76).X} cy={iso(S.x + 20, S.y + 72, 76).Y} r="22" fill="#FEF1DE" filter="url(#mx-glow)" style={{ opacity: recOn ? 0.9 : 0, transition: 'opacity .6s' }} />
          <circle cx={iso(S.x + 20, S.y + 72, 76).X} cy={iso(S.x + 20, S.y + 72, 76).Y} r="16" fill="none" stroke="#FEF1DE" strokeWidth="5" style={{ opacity: recOn ? 1 : 0.55, transition: 'opacity .6s' }} />
          <line x1={iso(S.x + 20, S.y + 72, 60).X} y1={iso(S.x + 20, S.y + 72, 60).Y} x2={iso(S.x + 20, S.y + 72, 46).X} y2={iso(S.x + 20, S.y + 72, 46).Y} stroke="#FEF1DE" strokeWidth="3" />
          {/* REC */}
          <g style={{ opacity: recOn ? 1 : 0, transition: 'opacity .3s' }}>
            <motion.circle cx={iso(S.x + 104, S.y + 10, 46).X} cy={iso(S.x + 104, S.y + 10, 46).Y - 8} r="4" fill="#ff5a5a" animate={reduced ? undefined : { opacity: [1, 0.15, 1] }} transition={{ duration: 1, repeat: loop }} />
            <text x={iso(S.x + 104, S.y + 10, 46).X + 8} y={iso(S.x + 104, S.y + 10, 46).Y - 5} fontFamily="Poppins, sans-serif" fontSize="8" fontWeight="700" letterSpacing="1.5" fill="#ff5a5a">REC</text>
          </g>
          {/* finished lesson tile rises out of the studio */}
          <g style={{ opacity: tileUp ? 1 : 0, transform: tileUp ? 'translateY(0px)' : 'translateY(16px)', transition: 'opacity .5s, transform .7s cubic-bezier(.22,1,.36,1)' }}>
            <motion.g animate={reduced ? undefined : { y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: loop, ease: 'easeInOut' }}>
              <rect x={iso(S.x + 60, S.y + 45, 122).X - 20} y={iso(S.x + 60, S.y + 45, 122).Y - 14} width="40" height="28" rx="7" fill="#FEF1DE" stroke="#800d07" strokeWidth="2" />
              <polygon points={`${iso(S.x + 60, S.y + 45, 122).X - 5},${iso(S.x + 60, S.y + 45, 122).Y - 7} ${iso(S.x + 60, S.y + 45, 122).X + 8},${iso(S.x + 60, S.y + 45, 122).Y} ${iso(S.x + 60, S.y + 45, 122).X - 5},${iso(S.x + 60, S.y + 45, 122).Y + 7}`} fill="#800d07" />
            </motion.g>
          </g>
          <text x={iso(S.x + 60, S.y + 90, 0).X + 24} y={iso(S.x + 60, S.y + 90, 0).Y + 36} textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2" fill="#800d07">CONTENT STUDIO</text>
        </Station>

        {/* ---------- LMS core ---------- */}
        <Station id="lms" base={iso(C.x + 30, C.y + 30, 0)} shadow={{ ...iso(C.x + 32, C.y + 34, 0), rx: 58 }} delay={0.95} hover={focus} setHover={setHover}>
          <Box x={C.x} y={C.y} w={60} d={60} h={28} c={TEAL} />
          <Box x={C.x + 8} y={C.y + 8} w={44} d={44} h={24} z={28} c={TEAL} />
          <Box x={C.x + 16} y={C.y + 16} w={28} d={28} h={20} z={52} c={CREAM} />
          {/* core light when the platform goes live */}
          <circle cx={iso(C.x + 30, C.y + 30, 72).X} cy={iso(C.x + 30, C.y + 30, 72).Y} r="18" fill="#8FE3DA" filter="url(#mx-glow)" style={{ opacity: lmsOn ? 0.9 : 0, transition: 'opacity .6s' }} />
          <motion.ellipse cx={lmsTop.X} cy={lmsTop.Y} rx="64" ry="24" fill="none" stroke="#8FE3DA" strokeWidth="2" strokeDasharray="3 7"
            animate={reduced ? undefined : { rotate: 360 }} transition={{ duration: 18, repeat: loop, ease: 'linear' }}
            style={{ transformOrigin: `${lmsTop.X}px ${lmsTop.Y}px`, opacity: lmsOn ? 1 : 0.45, transition: 'opacity .5s' }} />
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={iso(C.x + 60, C.y + 12 + i * 16, 14).X} cy={iso(C.x + 60, C.y + 12 + i * 16, 14).Y} r="2.5" fill="#8FE3DA"
              style={{ opacity: dotOn(i) ? 1 : 0.25, transition: 'opacity .4s' }} />
          ))}
          <text x={iso(C.x + 70, C.y + 70, 0).X + 6} y={iso(C.x + 70, C.y + 70, 0).Y + 14} textAnchor="start" fontFamily="Poppins, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2" fill="#00615c">LMS</text>
        </Station>

        {/* ---------- Learners ---------- */}
        <Station id="learners" base={iso(L.x + 60, L.y + 10, 0)} shadow={{ ...iso(L.x + 62, L.y + 4, 0), rx: 96 }} delay={1.1} hover={focus} setHover={setHover}>
          {[0, 1, 2].map((i) => {
            const dx = L.x + i * 46, dy = L.y - i * 18;
            const screenTop = iso(dx + 12, dy + 4, 40);
            const done = progress[i] >= 1;
            return (
              <g key={i}>
                <Box x={dx} y={dy} w={36} d={30} h={16} c={SLATE} />
                <Box x={dx + 8} y={dy + 9} w={20} d={14} h={2} z={16} c={DARK} />
                <polygon points={P([iso(dx + 8, dy + 9, 18), iso(dx + 28, dy + 9, 18), iso(dx + 28, dy + 9, 36), iso(dx + 8, dy + 9, 36)])} fill="#102024" stroke="rgba(0,0,0,0.2)" />
                <polygon points={P([iso(dx + 9.5, dy + 9, 19.5), iso(dx + 26.5, dy + 9, 19.5), iso(dx + 26.5, dy + 9, 34.5), iso(dx + 9.5, dy + 9, 34.5)])} fill="#dff1ee" />
                <polygon points={P([iso(dx + 11, dy + 9, 24), iso(dx + 25, dy + 9, 24), iso(dx + 25, dy + 9, 21), iso(dx + 11, dy + 9, 21)])} fill="#b2d8d2" />
                <polygon points={P([iso(dx + 11, dy + 9, 24), iso(dx + 11 + 14 * progress[i], dy + 9, 24), iso(dx + 11 + 14 * progress[i], dy + 9, 21), iso(dx + 11, dy + 9, 21)])} fill="#00615c" />
                {/* learner */}
                <circle cx={iso(dx + 18, dy + 34, 30).X} cy={iso(dx + 18, dy + 34, 30).Y} r="7" fill={['#00615c', '#800d07', '#2f8f85'][i]} stroke="#fff" strokeWidth="2" />
                <ellipse cx={iso(dx + 18, dy + 34, 14).X} cy={iso(dx + 18, dy + 34, 14).Y} rx="10" ry="7" fill={['#0f7c75', '#a2211a', '#3fa397'][i]} />
                {/* tick pops when a bar completes */}
                <g style={{ opacity: done ? 1 : 0, transform: done ? 'scale(1)' : 'scale(0.4)', transformOrigin: `${screenTop.X}px ${screenTop.Y - 10}px`, transition: 'opacity .3s, transform .45s cubic-bezier(.34,1.56,.64,1)' }}>
                  <circle cx={screenTop.X} cy={screenTop.Y - 10} r="8" fill="#8FE3DA" />
                  <path d={`M ${screenTop.X - 4} ${screenTop.Y - 10} l 3 3 l 6 -6`} stroke="#03302d" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </g>
            );
          })}
          {/* graduation moment */}
          <g style={{ opacity: capP > 0 ? Math.min(1, Math.sin(capP * Math.PI) * 1.8) : 0, transform: `translateY(${-capP * 30}px)` }}>
            <polygon points={`${capAt.X},${capAt.Y - 12} ${capAt.X + 22},${capAt.Y} ${capAt.X},${capAt.Y + 12} ${capAt.X - 22},${capAt.Y}`} fill="#03302d" />
            <rect x={capAt.X - 12} y={capAt.Y} width="24" height="9" fill="#03302d" />
            <line x1={capAt.X + 22} y1={capAt.Y} x2={capAt.X + 22} y2={capAt.Y + 14} stroke="#800d07" strokeWidth="2" />
          </g>
          <text x={iso(L.x + 20, L.y + 70, 0).X} y={iso(L.x + 20, L.y + 70, 0).Y + 22} textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2" fill="#00615c">LEARNERS</text>
        </Station>

        {/* analytics bars grow as learners complete */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.6 }}>
          {[0, 1, 2, 3].map((i) => {
            const full = 18 + i * 9, h = full * (0.3 + 0.7 * avg);
            return <rect key={i} x={610 + i * 12} y={168 - h} width="8" height={h} rx="2" fill={i === 3 ? '#800d07' : '#00615c'} opacity={0.85} style={{ transition: 'height .3s, y .3s' }} />;
          })}
          <line x1="606" y1="169" x2="660" y2="169" stroke="#00615c" strokeOpacity="0.3" strokeWidth="1.5" />
        </motion.g>
      </svg>

      {/* one line that follows the story, or the station under the cursor */}
      <div className="mt-2 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 min-h-[24px] px-2 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <span className="flex items-center gap-1 shrink-0">
          {PHASES.map((_, i) => (
            <span key={i} className="h-1 rounded-full transition-all duration-500" style={{ width: i === phase ? 16 : 5, background: i === phase ? '#00615c' : '#cfd8d6' }} />
          ))}
        </span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={captionKey}
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="text-[12px] text-gray-500"
          >
            {caption}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

/* ---------- Hero ---------- */
const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [hint, setHint] = useState(null); // which client the scene should show while a button is hovered
  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  const scrollNext = () => {
    const next = document.getElementById('home')?.nextElementSibling;
    if (next) next.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-14 lg:pt-36 lg:pb-16 bg-gradient-to-b from-white via-[#FEF1DE]/40 to-white">
      <div className="pointer-events-none absolute -top-48 right-[-10%] w-[720px] h-[720px] rounded-full bg-[#00615c]/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 w-[480px] h-[480px] rounded-full bg-[#800d07]/[0.06] blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,97,92,0.14) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          maskImage: 'radial-gradient(ellipse at 72% 50%, black 15%, transparent 65%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 72% 50%, black 15%, transparent 65%)',
        }}
      />

      <div className="relative w-full px-6 lg:max-w-7xl lg:mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Left */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.24em] uppercase text-[#800d07]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span className="w-8 h-px bg-[#800d07]/70" />
              Maieutic Edutech
            </motion.div>

            <div className="mt-5 min-h-[130px] sm:min-h-[160px] lg:min-h-[190px] flex items-center w-full">
              <AnimatePresence mode="wait" initial={false}>
                <motion.h1
                  key={current}
                  className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.1rem] xl:text-[3.5rem] max-w-2xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <Headline title={slides[current].title} accent={slides[current].accent} />
                </motion.h1>
              </AnimatePresence>
            </div>

            <div className="mt-3 min-h-[56px] w-full">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={current}
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {slides[current].subtitle}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <Link
                to="/contact"
                onMouseEnter={() => setHint('university')} onMouseLeave={() => setHint(null)}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#00615c] px-6 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-[#00615c]/25 transition-transform hover:-translate-y-0.5"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <GraduationCap className="w-[18px] h-[18px]" strokeWidth={2.1} />
                For universities
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/clients"
                onMouseEnter={() => setHint('enterprise')} onMouseLeave={() => setHint(null)}
                className="group inline-flex items-center gap-2.5 rounded-full border border-gray-300 bg-white px-6 py-3.5 text-[15px] font-semibold text-gray-800 hover:border-[#800d07] hover:text-[#800d07] transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <Briefcase className="w-[18px] h-[18px]" strokeWidth={2.1} />
                For enterprises
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-7 gap-y-3"
            >
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-7">
                  <div style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <div className="text-xl font-bold text-gray-900 leading-none tabular-nums" style={{ fontFamily: "'Playfair Display', serif" }}>
                      <Counter value={s.value} suffix={s.suffix} delay={0.9 + i * 0.15} />
                    </div>
                    <div className="mt-1 text-[11px] text-gray-500">{s.label}</div>
                  </div>
                  {i < stats.length - 1 && <span className="hidden sm:block w-px h-8 bg-gray-300" />}
                </div>
              ))}
            </motion.div>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-xs tabular-nums text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button key={i} type="button" aria-label={`Go to slide ${i + 1}`} onClick={() => setCurrent(i)}
                    className="relative h-[3px] w-10 rounded-full bg-gray-200 overflow-hidden">
                    {i === current && (
                      <motion.span key={`bar-${current}`} initial={{ width: '0%' }} animate={{ width: '100%' }}
                        transition={{ duration: SLIDE_MS / 1000, ease: 'linear' }} className="absolute inset-y-0 left-0 bg-[#00615c]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: the scene */}
          <div className="lg:col-span-6">
            <Scene hint={hint} />
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.button
        type="button"
        onClick={scrollNext}
        aria-label="Scroll to the next section"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 0.8 }}
        className="hidden lg:flex absolute bottom-3 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-[10px] font-semibold tracking-[0.28em] uppercase text-gray-400 hover:text-[#00615c] transition-colors"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Scroll
        <span className="relative block w-px h-7 overflow-hidden bg-gray-200">
          <motion.span animate={{ y: ['-100%', '100%'] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }} className="absolute inset-x-0 h-full bg-[#00615c]" />
        </span>
      </motion.button>
    </section>
  );
};

export default Hero;
