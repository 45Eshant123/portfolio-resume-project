import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Tag } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock data for the single post
  const post = {
    title: 'Mastering Three.js in 2024',
    category: '3D Graphics',
    date: 'Dec 15, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200&h=600',
    author: 'Alex Dev',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-gray-300">Three.js has revolutionized how we create 3D graphics on the web. In this comprehensive guide, we'll explore the latest features and best practices for building immersive experiences in 2024.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-8 font-orbitron">Why Three.js?</h3>
      <p class="mb-6 text-gray-300 leading-relaxed">The web is evolving from flat 2D interfaces to rich, interactive 3D environments. Three.js provides the perfect abstraction layer over WebGL, making it accessible for developers to create stunning visuals without getting lost in low-level graphics programming.</p>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-8 font-orbitron">Setting Up the Scene</h3>
      <p class="mb-6 text-gray-300 leading-relaxed">The core of any Three.js application consists of three main components: the Scene, the Camera, and the Renderer. Think of it like a movie set. You need a stage (Scene), a camera to record (Camera), and a way to project that onto a screen (Renderer).</p>
      
      <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 my-8 font-mono text-sm text-cyan-300">
        const scene = new THREE.Scene();<br/>
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);<br/>
        const renderer = new THREE.WebGLRenderer();
      </div>
      
      <h3 class="text-2xl font-bold text-white mb-4 mt-8 font-orbitron">Lighting and Materials</h3>
      <p class="mb-6 text-gray-300 leading-relaxed">Lighting is what breathes life into your 3D objects. Without proper lighting, even the most detailed models will look flat and uninteresting. In 2024, PBR (Physically Based Rendering) materials are the standard, offering realistic interactions with light.</p>
    `
  };

  const relatedPosts = [
    { id: 2, title: 'The Art of Micro-Interactions', category: 'Design' },
    { id: 3, title: 'React Server Components', category: 'Development' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-950">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-cyan-400 transition-colors mb-8 group">
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-10 shadow-2xl shadow-cyan-500/10">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-gray-300">
                <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
                <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_300px] gap-12">
            <div>
              <div 
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />
              
              <div className="mt-12 pt-8 border-t border-slate-800 flex justify-between items-center">
                <div className="flex gap-2">
                  {['Three.js', 'React', 'WebDev'].map(tag => (
                    <span key={tag} className="bg-slate-900 text-gray-400 px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                      <Tag size={14} /> {tag}
                    </span>
                  ))}
                </div>
                <button className="text-cyan-400 hover:text-white flex items-center gap-2 transition-colors">
                  <Share2 size={20} /> Share
                </button>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-4 font-orbitron">About Author</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-xl">
                    A
                  </div>
                  <div>
                    <div className="font-bold text-white">{post.author}</div>
                    <div className="text-sm text-gray-400">Senior Developer</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">Passionate about creating immersive web experiences and teaching others.</p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-4 font-orbitron">Related Posts</h3>
                <div className="space-y-4">
                  {relatedPosts.map(related => (
                    <Link key={related.id} to={`/blog/${related.id}`} className="block group">
                      <div className="text-xs text-cyan-500 mb-1">{related.category}</div>
                      <div className="font-medium text-gray-300 group-hover:text-white transition-colors">
                        {related.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;