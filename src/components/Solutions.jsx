import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, TrendingUp } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Solutions = () => {
  const { toast } = useToast();

  const solutions = [
    {
      icon: BookOpen,
      title: 'Teaching comes first',
      description: 'Every module starts from what the learner must be able to do, then we choose the format that teaches it best.',
      color: '#00615c',
      borderColor: 'border-[#00615c]'
    },
    {
      icon: Video,
      title: 'Content people finish',
      description: 'Animation, studio video and interactive exercises, produced in-house and built to hold attention to the last minute.',
      color: '#800d07',
      borderColor: 'border-[#800d07]'
    },
    {
      icon: TrendingUp,
      title: 'Built to grow with you',
      description: 'Start with one course or a full degree. The same structure carries you from a first cohort to thousands of learners.',
      color: '#00615c',
      borderColor: 'border-[#00615c]'
    }
  ];

  const handleLearnMore = () => {
    toast({
      title: "🚧 Feature Coming Soon",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-white to-[#FEF1DE]/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-[#00615c] mb-4"
           style={{ fontFamily: "'Playfair Display', serif" }}
          >
            How we work
          </h2>
          <p
            className="text-sm text-gray-700 max-w-3xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Three principles shape every course we build, for a university or a corporate training team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`bg-white rounded-xl shadow-lg p-8 cursor-pointer group hover:shadow-2xl transition-all duration-300 border-2 ${solution.borderColor} relative overflow-hidden`}
              onClick={handleLearnMore}
            >
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Centered content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${solution.color}20` }}
                >
                  <solution.icon size={32} style={{ color: solution.color }} />
                </div>

                <h3
                  className="text-xl font-bold mb-4"
                 style={{ fontFamily: "'Playfair Display', serif", color: solution.color }}
                >
                  {solution.title}
                </h3>

                <p
                  className="text-sm text-gray-600 leading-relaxed"
                 style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
