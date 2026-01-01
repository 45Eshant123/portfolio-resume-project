import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ElectricBorder from '@/components/ElectricBorder';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Development', 'Design', '3D Graphics', 'Career', 'Artificial Intelligence', 'Web Development', 'Web Design'];

  const posts = [
    {
      id: 1,
      title: 'Mastering Three.js in 2024',
      excerpt: 'A comprehensive guide to building immersive 3D web experiences using React and Three.js.',
      category: '3D Graphics',
      readTime: '8 min',
      date: 'Dec 15, 2025',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800&h=400',
      resources: [
        {
          title: 'Three.js Tutorial Video',
          url: 'https://youtu.be/KM64t3pA4fs?si=xV7EP57laHVXzZRa'
        }
      ]
    },
    {
      id: 2,
      title: 'The Art of Micro-Interactions',
      excerpt: 'How subtle animations can drastically improve user experience and engagement metrics.',
      category: 'Design',
      readTime: '5 min',
      date: 'Dec 10, 2025',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
      id: 3,
      title: 'React Server Components Explained',
      excerpt: 'Understanding the future of React rendering patterns and performance optimizations.',
      category: 'Development',
      readTime: '10 min',
      date: 'Nov 28, 2025',
      image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
      id: 4,
      title: 'AI Fake Media Detector – Deepfake Detection System',
      excerpt: 'This AI system detects fake images, videos, and audio using CNN and Computer Vision.',
      category: 'Artificial Intelligence',
      readTime: '10 min',
      date: 'Nov 20, 2024',
      image: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
      id: 5,
      title: 'Full Stack E-Commerce Website – MERN Case Study',
      excerpt: 'This MERN-based E-Commerce website includes product management, user authentication, cart system, and responsive UI.',
      category: 'Web Development',
      readTime: '9 min',
      date: 'Dec 10, 2024',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
      id: 6,
      title: 'Personal Portfolio Website – Modern UI/UX Case Study',
      excerpt: 'This project is my official portfolio website designed with modern animations, glassmorphism UI, and responsive layout.',
      category: 'Web Design',
      readTime: '7 min',
      date: 'Jan 5, 2025',
      image: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
      id: 7,
      title: 'The Future of Web Development',
      excerpt: 'A deep dive into upcoming trends like AI automation, edge rendering, and next-gen frameworks.',
      category: 'Development',
      readTime: 'Coming Soon',
      date: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
      id: 8,
      title: 'Building AI-Powered Web Apps',
      excerpt: 'Understanding how AI features integrate into modern web applications and what tools enable them.',
      category: 'Artificial Intelligence',
      readTime: 'Coming Soon',
      date: 'Coming Soon',
      image: '/image/cards/ai poered web application.png'
    },
    {
      id: 9,
      title: 'Voice-Controlled Web Apps',
      excerpt: 'Exploring voice input, speech recognition and how voice interfaces change user experience.',
      category: 'Web Development',
      readTime: 'Coming Soon',
      date: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 min-h-screen bg-slate-950 relative">
      {/* Abstract Background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Tech Chronicles
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Exploring the frontiers of web development, design, and digital creativity.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-slate-900/50 p-6 rounded-2xl backdrop-blur-sm border border-slate-800">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link to={`/blog/${post.id}`} className="group block h-full">
                <ElectricBorder color={index % 2 === 0 ? 'cyan' : 'purple'}>
                  <article className="bg-slate-900/90 rounded-2xl overflow-hidden h-full flex flex-col relative">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-black/60 backdrop-blur-md text-cyan-400 px-3 py-1 rounded-full text-xs font-bold border border-cyan-500/30">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                        <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-400 mb-6 flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center text-cyan-400 font-medium group-hover:translate-x-2 transition-transform">
                        Read Article <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </article>
                </ElectricBorder>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;