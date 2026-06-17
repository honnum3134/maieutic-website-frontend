import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "From concept to classroom - online, blended, and beyond",
      subtitle: "Turning complex knowledge into clear, engaging digital learning solutions",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Blending pedagogy, technology, and creativity",
      subtitle: "We design meaningful digital learning experiences that educate, engage, and deliver impact",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Designed for institutions. Built for learners.",
      subtitle: "A trusted partner in building scalable, effective digital learning ecosystems",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Digital learning driven by insight and innovation",
      subtitle: "Transforming educational vision into impactful, learner-centered digital experiences",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Increased duration slightly to allow reading of new text
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Slideshow */}
      <div className="absolute inset-0 bg-[#00615c]">
        <AnimatePresence mode="popLayout">
          {slides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <img 
                  src={slide.image} 
                  alt="Hero Background" 
                  className="w-full h-full object-cover"
                />
                {/* Brand Color Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00615c]/90 via-[#00847e]/80 to-[#800d07]/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/30" />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Content */}
<div className="w-full px-4 sm:px-6 pb-32 lg:pb-0 lg:relative lg:max-w-7xl lg:mx-auto z-10 overflow-hidden">        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-5xl mx-auto lg:mx-0">
          <div className="min-h-[200px] flex items-center justify-center mb-6 lg:justify-start">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-md max-w-4xl"
style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {slides[currentSlide].title}
              </motion.h1>
            </AnimatePresence>
          </div>
          
          <div className="min-h-[80px] flex items-start justify-center lg:justify-start mb-10 w-full">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-lg md:text-2xl text-white/95 max-w-3xl drop-shadow-sm font-medium"
style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
           className="absolute bottom-24 left-0 right-0 z-20 flex justify-center lg:static lg:justify-start lg:w-full" 
          >
            <Button
              onClick={() => navigate('/contact')}
              className="bg-white text-[#00615c] hover:bg-[#FEF1DE] hover:text-[#00615c] transition-all duration-300 hover:scale-105 group px-8 py-6 text-lg shadow-lg border-2 border-transparent"
            >
              Get in Touch
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </motion.div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/40 w-2 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;