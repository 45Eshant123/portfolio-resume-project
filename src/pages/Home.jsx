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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Latest Thoughts
              </span>
            </h2>
            <p className="text-gray-400">Insights on technology and design</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Blog 1 */}
            <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }} className="h-full">
              <Link to="/blog/7" className="group block h-full">
                <ElectricBorder color="cyan">
                  <div className="bg-slate-900 rounded-2xl overflow-hidden h-full flex flex-col min-h-[420px]">
                    <div className="h-48 bg-slate-800 relative overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10" />
                      <img
                        src="/image/cards/future of web.png"
                        alt="The Future of Web Development"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="text-xs font-bold text-cyan-400 mb-2 uppercase tracking-wider">Web Development</div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        The Future of Web Development
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-3">
                        Exploring emerging trends and technologies that will shape the future of web development in the coming years, including new frameworks and tools.
                      </p>
                    </div>
                  </div>
                </ElectricBorder>
              </Link>
            </motion.div>

            {/* Blog 2 */}
            <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }} className="h-full">
              <Link to="/blog/8" className="group block h-full">
                <ElectricBorder color="purple">
                  <div className="bg-slate-900 rounded-2xl overflow-hidden h-full flex flex-col min-h-[420px]">
                    <div className="h-48 bg-slate-800 relative overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10" />
                      <img
                        src="/image/cards/ai poered web application.png"
                        alt="Building AI-Powered Web Applications"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="text-xs font-bold text-purple-400 mb-2 uppercase tracking-wider">Artificial Intelligence</div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                        Building AI-Powered Web Applications Using JavaScript
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-3">
                        Exploring how modern JavaScript frameworks integrate with AI APIs and machine learning models to create intelligent, dynamic, and user-aware web applications.
                      </p>
                    </div>
                  </div>
                </ElectricBorder>
              </Link>
            </motion.div>

            {/* Blog 3 */}
            <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }} className="h-full">
              <Link to="/blog/9" className="group block h-full">
                <ElectricBorder color="cyan">
                  <div className="bg-slate-900 rounded-2xl overflow-hidden h-full flex flex-col min-h-[420px]">
                    <div className="h-48 bg-slate-800 relative overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10" />
                      <img
                        src="/image/cards/ai voice.png"
                        alt="Voice-Controlled Web Apps"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="text-xs font-bold text-cyan-400 mb-2 uppercase tracking-wider">AI Technologies</div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        Voice-Controlled Web Apps Using AI Speech Models
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-3">
                        A deep look into how speech recognition models enable hands-free navigation, voice commands, and conversational interfaces for next-generation web experiences.
                      </p>
                    </div>
                  </div>
                </ElectricBorder>
              </Link>
            </motion.div>
          </div>
          
          {/* View All Articles Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold rounded-full overflow-hidden shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70 transition-all"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                <span className="relative z-10">View All Articles</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
            <p className="text-gray-500 text-sm mt-4">
              Explore my thoughts on technology and design
            </p>
          </motion.div>
        </div>
      </section>

      <Testimonials />
      <Contact />
    </motion.div>
  );
};

export default Home;