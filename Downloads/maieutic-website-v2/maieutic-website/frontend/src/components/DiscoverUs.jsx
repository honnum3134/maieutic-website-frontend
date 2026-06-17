import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const Counter = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1800 });

  const numericValue = parseInt(value.replace(/[^0-9]/g, '') || '0', 10);
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (inView) motionValue.set(numericValue);
  }, [inView, numericValue, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const DiscoverUs = () => {
  const stats = [
    { number: '50+', label: 'Happy Customers' },
    { number: '7500+', label: 'Content Hours' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <section id="discover" className="py-20 bg-white">
      <div className="w-full px-0">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
         className="relative rounded-3xl bg-gradient-to-r from-[#00615c] to-[#800d07] p-6 sm:p-10 md:p-14 shadow-2xl overflow-hidden"
        >

          {/* Animated Gradient Noise Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12]" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/20"
              animate={{ opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-14 items-start"
>

            {/* Left Content */}
            <div className="text-white">
              <h2
                className="text-2xl md:text-4xl font-extrabold mb-5"
style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Trust-First & Professional
              </h2>

              <p
                className="text-base md:text-xl text-white/90 leading-relaxed max-w-xl"
style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                We are proud to collaborate with universities and enterprises
                that entrust us with transforming their learning visions into
                impactful digital experiences.
              </p>
            </div>

            {/* Right Stats */}
            <div className="flex flex-col gap-6 justify-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.15 }}
                  whileHover={{ y: -3 }}
                className="flex items-center justify-between bg-white/15 backdrop-blur-xl border border-white/20 rounded-xl px-4 sm:px-7 py-4 sm:py-5 shadow-lg"
                >
                  <span
                    className="text-white font-semibold text-sm md:text-lg"
style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {stat.label}
                  </span>

                  <span
                    className="text-3xl md:text-5xl font-extrabold text-[#FEF1DE] tabular-nums"
style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <Counter value={stat.number} />
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscoverUs;