import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import ElectricBorder from '@/components/ElectricBorder';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CTO, TechStart",
      content: "The 3D interactive elements completely transformed our user engagement metrics. Absolutely stunning work.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Michael Chen",
      role: "Product Lead, InnovateLab",
      content: "Incredible attention to detail. The animations are buttery smooth and the performance is outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director, CreativeMinds",
      content: "A perfect blend of creative artistry and technical engineering. Highly recommended for premium web projects.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Client Feedback
            </span>
          </h2>
          <p className="text-gray-400 text-lg">What people are saying about my work</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full -z-0 px-4 md:-mx-12">
            <button 
              onClick={prev}
              className="p-2 rounded-full bg-slate-800/50 border border-slate-700 text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all z-20"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="p-2 rounded-full bg-slate-800/50 border border-slate-700 text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all z-20"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="relative overflow-hidden min-h-[300px] md:min-h-[250px] px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center p-1"
              >
                <div className="w-full max-w-2xl">
                  <ElectricBorder color="purple">
                    <div className="bg-slate-900/80 backdrop-blur-md p-8 md:p-10 rounded-2xl relative group h-full">
                      <Quote className="absolute top-6 left-6 text-cyan-500/20 w-12 h-12 -z-10 group-hover:text-cyan-500/40 transition-colors" />
                      
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-cyan-500/50 ring-4 ring-cyan-500/10">
                            <img 
                              src={testimonials[currentIndex].image} 
                              alt={testimonials[currentIndex].name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        
                        <div className="flex-1 text-center md:text-left">
                          <div className="flex justify-center md:justify-start gap-1 mb-2">
                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                              <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                          <p className="text-gray-300 text-lg italic mb-4 leading-relaxed">
                            "{testimonials[currentIndex].content}"
                          </p>
                          <div>
                            <h4 className="text-white font-bold font-orbitron text-lg">
                              {testimonials[currentIndex].name}
                            </h4>
                            <p className="text-cyan-400 text-sm">
                              {testimonials[currentIndex].role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ElectricBorder>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-cyan-500' : 'w-2 bg-slate-700 hover:bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;