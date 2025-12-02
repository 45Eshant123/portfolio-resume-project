import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import ElectricBorder from '@/components/ElectricBorder';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-x-hidden"
    >
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      
      {/* Latest Blog Teaser */}
      <section className="py-20 relative border-t border-slate-800/50 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                  Latest Thoughts
                </span>
              </h2>
              <p className="text-gray-400">Insights on technology and design</p>
            </div>
            <Link 
              to="/blog" 
              className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
            >
              View All Articles 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div key={i} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Link to={`/blog/${i}`} className="group block h-full">
                  <ElectricBorder color={i === 2 ? 'purple' : 'cyan'}>
                    <div className="bg-slate-900 rounded-2xl overflow-hidden h-full flex flex-col">
                      <div className="h-48 bg-slate-800 relative overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10" />
                         <img 
                           src={`https://source.unsplash.com/random/800x600?tech&sig=${i}`} 
                           alt="Blog cover"
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                         />
                      </div>
                      <div className="p-6 flex-grow">
                        <div className="text-xs font-bold text-purple-400 mb-2 uppercase tracking-wider">Tech Trend</div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          The Future of Web Animation {i}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2">
                          Exploring how 3D libraries and physics engines are reshaping modern web interfaces.
                        </p>
                      </div>
                    </div>
                  </ElectricBorder>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              View All Articles 
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <Contact />
    </motion.div>
  );
};

export default Home;