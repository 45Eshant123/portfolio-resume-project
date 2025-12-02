import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Zap, Code } from 'lucide-react';
import ElectricBorder from '@/components/ElectricBorder';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-purple-950/20" />
        
        {/* Animated Mesh Gradient Simulation */}
        <motion.div 
          className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 0.8, 0],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for work
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              <span className="text-white">Hi, I'm</span> <br/>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse-slow">
                Eshant Verma
              </span>
            </motion.h1>
            
            <p className="text-xl text-gray-300 max-w-xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Creative Developer building immersive digital experiences with cutting-edge technology and innovative design.
            </p>

            <motion.button
              onClick={scrollToAbout}
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore More
              <ArrowDown className="group-hover:translate-y-1 transition-transform" size={20} />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center perspective-1000"
          >
            <motion.div
              whileHover={{ rotateY: 10, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="w-full max-w-lg"
            >
              <ElectricBorder color="cyan">
                <div className="bg-slate-900/90 backdrop-blur-xl rounded-2xl overflow-hidden min-h-[400px] relative group">
                  {/* Abstract Design Replacement for Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                    {/* Code Editor Header */}
                    <div className="h-8 bg-slate-950 flex items-center px-4 gap-2 border-b border-slate-800">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <div className="ml-4 text-xs text-gray-500 font-mono">eshant_verma.jsx</div>
                    </div>
                    
                    {/* Abstract Code Content */}
                    <div className="p-6 font-mono text-sm space-y-4">
                      <div className="flex gap-2">
                        <span className="text-purple-400">const</span>
                        <span className="text-blue-400">Developer</span>
                        <span className="text-white">=</span>
                        <span className="text-white">()</span>
                        <span className="text-purple-400">=&gt;</span>
                        <span className="text-white">{`{`}</span>
                      </div>
                      
                      <div className="pl-4 space-y-2">
                        <div className="flex gap-2">
                          <span className="text-purple-400">const</span>
                          <span className="text-yellow-400">name</span>
                          <span className="text-white">=</span>
                          <span className="text-green-400">"Eshant Verma"</span>;
                        </div>
                        <div className="flex gap-2">
                          <span className="text-purple-400">const</span>
                          <span className="text-yellow-400">skills</span>
                          <span className="text-white">=</span>
                          <span className="text-white">[</span>
                        </div>
                        <div className="pl-4 text-green-400">"C++", "Java", "React", "Creative"</div>
                        <div className="text-white">];</div>
                        
                        <div className="flex gap-2 mt-4">
                          <span className="text-purple-400">return</span>
                          <span className="text-white">(</span>
                        </div>
                        <div className="pl-4">
                          <span className="text-blue-300">&lt;ImmersiveExperience /&gt;</span>
                        </div>
                        <div className="text-white">);</div>
                      </div>
                      
                      <div className="text-white">{`};`}</div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div 
                      className="absolute bottom-10 right-10 p-4 bg-slate-800/80 backdrop-blur-md rounded-lg border border-cyan-500/30 shadow-lg shadow-cyan-500/20"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Zap className="text-yellow-400 w-8 h-8" />
                    </motion.div>

                    <motion.div 
                      className="absolute top-20 right-20 p-3 bg-slate-800/80 backdrop-blur-md rounded-lg border border-purple-500/30 shadow-lg shadow-purple-500/20"
                      animate={{ y: [0, 15, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                      <Code className="text-cyan-400 w-6 h-6" />
                    </motion.div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-cyan-400" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        Eshant Verma
                      </h3>
                      <p className="text-gray-300 mt-2">Digital Architect</p>
                    </div>
                  </div>
                </div>
              </ElectricBorder>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;