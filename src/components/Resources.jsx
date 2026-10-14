import React, { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Stethoscope,
  Factory,
  Landmark,
  MonitorSmartphone,
  ShoppingBag,
  Scale,
  Utensils,
  Zap,
  ArrowRight,
} from "lucide-react";

/* ---------- Sectors (add a line to add a sector) ---------- */
const sectors = [
  { name: "Education",            icon: Building2,         color: "text-sky-600",     bg: "bg-sky-50" },
  { name: "Healthcare",           icon: Stethoscope,       color: "text-rose-600",    bg: "bg-rose-50" },
  { name: "Manufacturing",        icon: Factory,           color: "text-amber-600",   bg: "bg-amber-50" },
  { name: "BFSI",                 icon: Landmark,          color: "text-emerald-600", bg: "bg-emerald-50" },
  { name: "IT & Software",        icon: MonitorSmartphone, color: "text-indigo-600",  bg: "bg-indigo-50" },
  { name: "Govt & Public Sector", icon: Scale,             color: "text-slate-600",   bg: "bg-slate-100" },
  { name: "Retail",               icon: ShoppingBag,       color: "text-pink-600",    bg: "bg-pink-50" },
  { name: "Hospitality",          icon: Utensils,          color: "text-orange-600",  bg: "bg-orange-50" },
  { name: "Energy & Utilities",   icon: Zap,               color: "text-yellow-600",  bg: "bg-yellow-50" },
];

/* ---------- Client logos (add a line to add a logo) ---------- */
const logosA = [
  { name: "REVA University",       src: "/images/clients/education/Reva.png" },
  { name: "HDFC",                  src: "/images/clients/corporate/Hdfc.webp" },
  { name: "Symbiosis",             src: "/images/clients/education/Symbiosis.webp" },
  { name: "Saint-Gobain",          src: "/images/clients/corporate/Saint.webp" },
  { name: "Pearson",               src: "/images/clients/education/Pearson.jpg" },
  { name: "Narayana Health",       src: "/images/clients/corporate/Narayana.webp" },
  { name: "upGrad",                src: "/images/clients/education/upgrad.webp" },
  { name: "Mazars",                src: "/images/clients/corporate/Mazars.webp" },
  { name: "Amity",                 src: "/images/clients/education/Amity.webp" },
  { name: "Glenmark",              src: "/images/clients/corporate/glenmark.webp" },
];
const logosB = [
  { name: "Manipal",               src: "/images/clients/education/Manipal.webp" },
  { name: "TE Connectivity",       src: "/images/clients/corporate/TE.webp" },
  { name: "Wiley",                 src: "/images/clients/education/Wiley.webp" },
  { name: "Intas Pharma",          src: "/images/clients/corporate/Intas.webp" },
  { name: "Emeritus",              src: "/images/clients/education/Eme.webp" },
  { name: "Terumo",                src: "/images/clients/corporate/Terumo.webp" },
  { name: "IEEE",                  src: "/images/clients/education/IEEE.webp" },
  { name: "Firstsource",           src: "/images/clients/corporate/First.webp" },
  { name: "Wadhwani Foundation",   src: "/images/clients/education/Wadhwani-Foundation-Logo.webp" },
  { name: "Simplilearn",           src: "/images/clients/education/Simpli L.webp" },
];

const LogoColumn = ({ logos, reverse = false, duration = 36 }) => (
  <div className={`mx-vcol flex flex-col gap-3 ${reverse ? "mx-vcol-rev" : ""}`} style={{ animationDuration: `${duration}s` }}>
    {[...logos, ...logos].map((logo, index) => (
      <div
        key={`${logo.name}-${index}`}
        title={logo.name}
        className="flex h-16 w-full shrink-0 items-center justify-center rounded-xl bg-white px-5 ring-1 ring-gray-100 shadow-[0_1px_2px_rgba(7,26,47,0.05)]"
      >
        <img
          src={logo.src}
          alt={logo.name}
          loading="lazy"
          className="max-h-9 max-w-[120px] w-auto h-auto object-contain"
        />
      </div>
    ))}
  </div>
);


/* ---------- Orbit: icons circle a hub. Positions are computed every frame, so the name tags never tilt. ---------- */
const Orbit = ({ sectors }) => {
  const boxRef = useRef(null);
  const itemRefs = useRef([]);
  const paused = useRef(false);
  const clock = useRef(0);
  const last = useRef(null);
  const outer = sectors.slice(0, 5);
  const inner = sectors.slice(5);
  const SPEED_OUTER = (2 * Math.PI) / 70;   // one lap in 70s, clockwise
  const SPEED_INNER = -(2 * Math.PI) / 55;  // one lap in 55s, anticlockwise

  useAnimationFrame((t) => {
    if (last.current === null) last.current = t;
    const dt = (t - last.current) / 1000;
    last.current = t;
    if (!paused.current) clock.current += dt;
    const box = boxRef.current;
    if (!box) return;
    const size = box.clientWidth;
    const compact = size < 360; // phones: pull the rings in so name tags stay on screen
    const place = (list, radiusFactor, speed, offset) => {
      list.forEach((sector, i) => {
        const el = itemRefs.current[offset + i];
        if (!el) return;
        const base = -Math.PI / 2 + (i * 2 * Math.PI) / list.length;
        const ang = base + clock.current * speed;
        const r = size * radiusFactor;
        const x = size / 2 + r * Math.cos(ang);
        const y = size / 2 + r * Math.sin(ang);
        el.style.transform = "translate(" + x + "px, " + y + "px) translate(-50%, -50%)";
      });
    };
    place(outer, compact ? 0.44 : 0.5, SPEED_OUTER, 0);
    place(inner, compact ? 0.26 : 0.32, SPEED_INNER, outer.length);
  });

  const renderItem = (sector, index, small) => (
    <div
      key={sector.name}
      ref={(el) => { itemRefs.current[index] = el; }}
      className="absolute left-0 top-0 flex flex-col items-center will-change-transform"
    >
      <div className={(small ? "w-10 h-10 sm:w-11 sm:h-11 " : "w-11 h-11 sm:w-12 sm:h-12 ") + "rounded-full " + sector.bg + " ring-4 ring-white shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110"}>
        <sector.icon className={"w-5 h-5 " + sector.color} strokeWidth={1.9} />
      </div>
      <span
        className="hidden sm:block mt-1.5 whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-gray-800 shadow-md ring-1 ring-gray-100"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {sector.name}
      </span>
    </div>
  );

  return (
    <div
      ref={boxRef}
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
      className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[440px] lg:h-[440px]"
    >
      <div className="absolute inset-0 rounded-full border border-dashed border-[#00615c]/25" />
      <div className="absolute inset-[18%] rounded-full border border-dashed border-[#00615c]/25" />
      <div className="absolute inset-[36%] rounded-full bg-[#00615c]/[0.04]" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[28%] aspect-square rounded-full bg-gradient-to-br from-[#00615c] to-[#063f3c] text-white shadow-2xl shadow-[#00615c]/30 flex flex-col items-center justify-center">
        <span className="text-3xl sm:text-4xl font-bold leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
          {sectors.length}
        </span>
        <span className="mt-1 text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-[#FEF1DE]" style={{ fontFamily: "'Poppins', sans-serif" }}>
          sectors
        </span>
      </div>

      {outer.map((sector, i) => renderItem(sector, i, false))}
      {inner.map((sector, i) => renderItem(sector, outer.length + i, true))}
    </div>
  );
};

const DiscoverUs = () => {
  return (
    <section id="discover-us" className="relative py-16 md:py-20 bg-white overflow-hidden">
      <style>{`
        @keyframes mx-up { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        @keyframes mx-down { from { transform: translateY(-50%); } to { transform: translateY(0); } }
        .mx-vcol { animation: mx-up 36s linear infinite; }
        .mx-vcol-rev { animation-name: mx-down; }
        .mx-vwrap:hover .mx-vcol { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .mx-vcol { animation: none; } }
      `}</style>

      <div className="container mx-auto px-6">
        {/* ---------- Header ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Who we build for
          </h2>
          <p
            className="mt-3 text-base md:text-lg text-gray-600 leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Degree programs for universities, and customised content creation in
            nine sectors.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {/* ---------- Left: sector orbit ---------- */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <Orbit sectors={sectors} />
            <div className="sm:hidden mt-6 flex flex-wrap justify-center gap-2 px-2">
              {sectors.map((sector) => (
                <span
                  key={sector.name}
                  className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <sector.icon className={"w-3.5 h-3.5 " + sector.color} strokeWidth={2} />
                  {sector.name}
                </span>
              ))}
            </div>
          </div>

          {/* ---------- Right: client logo panel ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="h-full rounded-3xl border border-gray-100 bg-[#FBF8F3] p-5 md:p-6 flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div
                    className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#00615c]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Trusted by
                  </div>
                  <div
                    className="mt-1 text-lg md:text-xl font-semibold text-gray-900 leading-tight"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    50+ universities and companies
                  </div>
                </div>
                <Link
                  to="/clients"
                  className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-[#00615c] hover:text-[#800d07] transition-colors group mt-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  See all
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div
                className="mx-vwrap relative flex-1 min-h-[300px] max-h-[360px] overflow-hidden grid grid-cols-2 gap-3"
                style={{
                  maskImage: "linear-gradient(180deg, transparent, black 12%, black 88%, transparent)",
                  WebkitMaskImage: "linear-gradient(180deg, transparent, black 12%, black 88%, transparent)",
                }}
              >
                <LogoColumn logos={logosA} duration={38} />
                <LogoColumn logos={logosB} reverse duration={44} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverUs;
