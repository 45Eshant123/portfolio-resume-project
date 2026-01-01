import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ElectricBorder from '@/components/ElectricBorder';
import { useToast } from '@/components/ui/use-toast';

const AllProjects = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [filter, setFilter] = useState('all');

  const allProjects = [
    {
      title: '3D Portfolio',
      description: 'Interactive portfolio with Three.js and advanced animations',
      image: '/image/portfolio.png',
      color: 'cyan',
      github: 'https://github.com/45Eshant123/port-folio.git',
      category: 'web',
      tags: ['React', 'Three.js', 'Framer Motion']
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern UI',
      image: '/image/ChatGPT Image Dec 2, 2025, 05_34_28 PM.png',
      color: 'purple',
      github: 'https://github.com/45Eshant123/E-Commerce-Platform.git',
      category: 'web',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'AI Dashboard',
      description: 'Data visualization dashboard with AI insights',
      image: '/image/cards/ai-dashboard.png',
      color: 'blue',
      category: 'ai',
      tags: ['React', 'AI', 'Data Viz']
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application with interactive maps',
      image: '/image/cards/weather-app.png',
      color: 'cyan',
      github: 'https://github.com/45Eshant123/weather-app.git',
      category: 'web',
      tags: ['React', 'API', 'Maps']
    },
    {
      title: 'Task Manager',
      description: 'Productivity app with drag-and-drop functionality',
      image: '/image/cards/task-manager.png',
      color: 'purple',
      github: 'https://github.com/45Eshant123/task-manager.git',
      category: 'web',
      tags: ['React', 'Firebase', 'DnD']
    },
    {
      title: 'Chat Application',
      description: 'Real-time messaging app with WebSocket integration',
      image: '/image/cards/chat-app.png',
      color: 'blue',
      github: 'https://github.com/45Eshant123/chat-app.git',
      category: 'web',
      tags: ['React', 'WebSocket', 'Node.js']
    },
    {
      title: 'Machine Learning Model',
      description: 'Predictive analytics model for data classification',
      image: '/image/cards/ml-model.png',
      color: 'cyan',
      github: 'https://github.com/45Eshant123/ml-model.git',
      category: 'ai',
      tags: ['Python', 'TensorFlow', 'ML']
    },
    {
      title: 'Mobile Game',
      description: '2D platformer game with engaging gameplay mechanics',
      image: '/image/GenAI Image Dec 2, 2025, 05_45_12 PM.png',
      color: 'purple',
      github: 'https://github.com/45Eshant123/mobile-game.git',
      category: 'game',
      tags: ['Unity', 'C#', 'Game Dev']
    },
    {
      title: 'Blockchain Wallet',
      description: 'Secure cryptocurrency wallet with transaction tracking',
      image: '/image/cards/blockchain-wallet.png',
      color: 'blue',
      github: 'https://github.com/45Eshant123/blockchain-wallet.git',
      category: 'blockchain',
      tags: ['React', 'Web3', 'Blockchain']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'game', label: 'Games' },
    { id: 'blockchain', label: 'Blockchain' }
  ];

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  const handleLinkClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <div className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
            <span>Back to Home</span>
          </button>

          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              All Projects
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Explore my complete portfolio of {allProjects.length} projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          <div className="flex items-center gap-2 text-cyan-400 mr-2">
            <Filter size={20} />
            <span className="font-semibold">Filter:</span>
          </div>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
              whileHover={{ y: -10 }}
            >
              <ElectricBorder color={project.color}>
                <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl overflow-hidden h-full flex flex-col">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300/1e293b/64748b?text=' + encodeURIComponent(project.title);
                      }}
                    />
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
                    
                    {/* Tags */}
                    {project.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-slate-800 text-cyan-400 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mt-auto">
                      <div className={`h-full w-0 group-hover:w-full transition-all duration-700 ease-out bg-${project.color === 'purple' ? 'purple-500' : project.color === 'blue' ? 'blue-500' : 'cyan-500'}`} />
                    </div>
                  </div>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-xl">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;
