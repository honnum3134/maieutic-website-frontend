import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';

/* ---------- Count-up number: rushes up fast, keeps flickering, locks in late ---------- */
const Counter = ({ value, className, style, duration = 4 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.6 });
  const [shown, setShown] = useState(0);

  const numericValue = parseInt(value.replace(/[^0-9]/g, "") || "0", 10);
  const suffix = value.replace(/[0-9,]/g, "");

  useEffect(() => {
    if (!inView) { setShown(0); return undefined; }
    let frame;
    let start;
    const tick = (now) => {
      if (start === undefined) start = now;
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);                 // fast start, slow finish
      const flutter = (1 - t) * numericValue * 0.08 * Math.abs(Math.sin(t * 60)); // keeps digits moving until the end
      const v = t >= 1 ? numericValue : Math.max(0, Math.round(numericValue * eased - flutter));
      setShown(v);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, numericValue, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {shown.toLocaleString("en-IN")}{suffix}
    </span>
  );
};

const stats = [
  { value: '50+',   label: 'Institutions and companies served' },
  { value: '7500+', label: 'Hours of learning content' },
  { value: '98%',   label: 'Client satisfaction' },
];

/* Real partnership moments from the gallery (add a line to add a photo) */
const moments = [
  { src: '/images/trust/trust-ppsu-signing.webp',    caption: 'Agreement signing with P P Savani University' },
  { src: '/images/trust/trust-northcap.webp',        caption: 'Partnership with The NorthCap University' },
  { src: '/images/trust/trust-university-visit.webp', caption: 'On campus with a partner university' },
  { src: '/images/trust/trust-team.webp',            caption: 'The Maieutic team with university leadership' },
];

const ROTATE_MS = 2500;

const DiscoverUs = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => setActive((i) => (i + 1) % moments.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="discover" className="relative overflow-hidden text-white">
      {/* Background: slow-zooming photo under a deep teal wash */}
      <motion.img
        src={moments[0].src}
        alt=""
        aria-hidden
        initial={{ scale: 1.05 }}
        animate={{ scale: [1.05, 1.15, 1.05] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(100deg, rgba(3,48,45,0.97) 0%, rgba(0,97,92,0.92) 45%, rgba(3,48,45,0.72) 100%)',
        }}
      />
      <div className="pointer-events-none absolute -bottom-40 -left-24 w-[520px] h-[520px] rounded-full bg-[#800d07]/35 blur-3xl" />

      <div className="container mx-auto px-6 relative py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* ---------- Left: message + counters ---------- */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] uppercase text-[#FEF1DE]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span className="w-8 h-px bg-[#FEF1DE]/70" />
                Trusted by
              </div>
              <h2
                className="mt-4 text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.15]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Trusted by universities and enterprises
              </h2>
              <p
                className="mt-4 text-base md:text-lg text-white/80 leading-relaxed max-w-lg"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Universities and companies hand us their programs and their
                reputation. We treat both with care.
              </p>
            </motion.div>

            <div className="mt-10 flex flex-wrap gap-x-12 gap-y-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
                >
                  <Counter
                    value={stat.value}
                    className="block text-4xl md:text-5xl font-bold text-[#FEF1DE] tabular-nums leading-none"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  />
                  <span
                    className="mt-2 block text-xs md:text-sm text-white/70 max-w-[180px] leading-snug"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ---------- Right: cycling partnership photos ---------- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative mx-auto max-w-[560px]">
              {/* Back photos, fanned */}
              <div className="absolute inset-0 rotate-[-4deg] translate-y-3 rounded-2xl bg-white/10 ring-1 ring-white/15" />
              <div className="absolute inset-0 rotate-[3deg] translate-y-1.5 rounded-2xl bg-white/10 ring-1 ring-white/15" />

              {/* Front photo */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/30 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] bg-black/20">
                <AnimatePresence mode="sync">
                  <motion.img
                    key={moments[active].src}
                    src={moments[active].src}
                    alt={moments[active].caption}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 pt-16">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={moments[active].caption}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.4 }}
                      className="text-sm md:text-[15px] font-medium text-white"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {moments[active].caption}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              {/* Dots */}
              <div className="mt-5 flex items-center justify-center gap-2">
                {moments.map((m, i) => (
                  <button
                    key={m.src}
                    type="button"
                    aria-label={`Show photo ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-[#FEF1DE]' : 'w-2.5 bg-white/40 hover:bg-white/70'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverUs;
