import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import ElectricBorder from '@/components/ElectricBorder';
import { useToast } from '@/components/ui/use-toast';

const Projects = () => {
  const { toast } = useToast();

  const projects = [
    {
      title: '3D Portfolio',
      description: 'Interactive portfolio with Three.js and advanced animations',
      image: 'https://horizons-cdn.hostinger.com/39c0e5a1-b51d-4de5-a939-b54dc96fc5ea/a8997bff8a64627a225421a9bb276adc.jpg',
      color: 'cyan',
      github: 'https://github.com/45Eshant123/port-folio.git'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern UI',
      image: 'Modern e-commerce dashboard with product cards',
      color: 'purple',
      github: 'https://github.com/45Eshant123/E-Commerce-Platform.git'
    },
    {
      title: 'AI Dashboard',
      description: 'Data visualization dashboard with AI insights',
      image: 'Futuristic AI analytics dashboard',
      color: 'blue',
      // No github link provided for this one, will handle gracefully
    }
  ];

  const handleLinkClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Some of my recent work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
              whileHover={{ y: -10 }}
            >
              <ElectricBorder color={project.color}>
                <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl overflow-hidden h-full flex flex-col">
                  <div className="relative overflow-hidden h-48">
                    {project.image.startsWith('http') ? (
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <img 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        alt={project.title}
                       src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="bg-white text-slate-900 p-3 rounded-full shadow-lg hover:bg-cyan-50 transition-colors"
                            title="View Code on GitHub"
                          >
                            <Github size={20} />
                          </motion.button>
                        </a>
                      ) : (
                        <motion.button
                          onClick={handleLinkClick}
                          whileHover={{ scale: 1.1 }}
                          className="bg-white text-slate-900 p-3 rounded-full shadow-lg opacity-50 cursor-not-allowed"
                          title="Private Repository"
                        >
                          <Github size={20} />
                        </motion.button>
                      )}
                      
                      <motion.button
                        onClick={handleLinkClick}
                        whileHover={{ scale: 1.1 }}
                        className="bg-cyan-500 text-white p-3 rounded-full shadow-lg"
                        title="View Live Demo"
                      >
                        <ExternalLink size={20} />
                      </motion.button>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mt-auto">
                      <div className={`h-full w-0 group-hover:w-full transition-all duration-700 ease-out bg-${project.color === 'purple' ? 'purple-500' : project.color === 'blue' ? 'blue-500' : 'cyan-500'}`} />
                    </div>
                  </div>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;