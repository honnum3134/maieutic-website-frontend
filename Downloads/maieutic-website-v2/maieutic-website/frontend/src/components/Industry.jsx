import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  { title: "Explore Solutions", icon: Search },
  { title: "Align Vision", icon: Target },
  { title: "Design & Produce", icon: PenTool },
  { title: "Review & Refine", icon: RefreshCcw },
  { title: "Deliver & Scale", icon: Rocket },
];

const LearningStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-white py-28">
      <div className="container mx-auto px-6">

        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Let’s Design Learning That Truly Works
          </h2>
        </div>

        <div className="relative flex items-start justify-between mb-16">
          <div className="absolute top-5 left-0 right-0 h-[2px] bg-gray-200" />

          <motion.div
            className="absolute top-5 left-0 h-[2px] bg-[#00615c]"
            animate={{
              width: `${(activeStep / (steps.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;
            const isCompleted = index < activeStep;

            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className="relative z-10 flex flex-col items-center focus:outline-none"
              >
                <motion.div
                  animate={{ scale: isActive ? 1.15 : 1 }}
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center
                    ${
                      isCompleted
                        ? "bg-[#00615c] border-[#00615c]"
                        : isActive
                        ? "border-[#00615c] bg-white"
                        : "border-gray-300 bg-white"
                    }
                  `}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <Icon className={`w-4 h-4 ${isActive ? "text-[#00615c]" : "text-gray-400"}`} />
                  )}
                </motion.div>

                <div className="mt-4 text-center">
                  <p className="text-sm font-semibold text-gray-900">
                    STEP {index + 1}
                  </p>
                  <p className={`text-sm mt-1 ${isActive ? "text-[#00615c] font-medium" : "text-gray-400"}`}>
                    {step.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {activeStep === steps.length - 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-[#00615c] to-[#004d49] text-white p-12 text-center shadow-2xl"
            >
              <Sparkles className="w-12 h-12 mx-auto text-[#F8847E] mb-6" />
              <h3 className="text-3xl font-bold mb-4">
                Learning That Delivers Real Impact
              </h3>
              <p className="text-lg text-gray-100 max-w-3xl mx-auto">
                Purpose-built learning ecosystems that scale seamlessly, engage deeply,
                and drive measurable performance across individuals and organizations.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

/* =====================================================
   CTA SECTION (NEW – FROM SCREENSHOT)
   ===================================================== */

const LearningCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-gradient-to-r from-[#eef6f5] to-[#f8efef]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Ready to transform your learning experience?
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/contact')}
          className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#00615c] text-white font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer"
        >
          Contact Us Today
        </motion.button>
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