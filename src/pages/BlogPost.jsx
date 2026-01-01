import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Tag } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock data for blog posts
  const blogPosts = {
    1: {
      title: 'Mastering Three.js in 2024',
      category: '3D Graphics',
      date: 'Dec 15, 2023',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200&h=600',
      author: 'Eshant Verma',
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
        
        <h3 class="text-2xl font-bold text-white mb-4 mt-8 font-orbitron">Resources</h3>
        <p class="mb-6 text-gray-300 leading-relaxed"><a href="https://youtu.be/KM64t3pA4fs?si=xV7EP57laHVXzZRa" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:text-cyan-300 underline transition-colors">Three.js Complete Tutorial</a></p>
      `,
    },
    2: {
      title: 'The Art of Micro-Interactions',
      category: 'Design',
      date: 'Jan 10, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=80&w=1200&h=600',
      author: 'Eshant Verma',
      content: `
        <p class="mb-6 text-lg leading-relaxed text-gray-300">
          Micro-interactions play a crucial role in shaping how users experience digital products.
          These tiny animated moments may seem small, but they significantly impact usability,
          clarity, and emotional connection. In this guide, we explore how micro-interactions
          elevate modern interfaces and why they matter more than ever in 2024.
        </p>

        <h3 class="text-2xl font-bold text-white mb-4 mt-8 font-orbitron">Why Micro-Interactions Matter</h3>
        <p class="mb-6 text-gray-300 leading-relaxed">
          The digital world is shifting toward interfaces that feel responsive, intuitive, and alive.
          Micro-interactions provide real-time feedback, guide users through tasks, and make the interface
          easier to understand. From tapping a button to liking a post or filling out a form, these subtle
          details create smoother and more satisfying experiences.
        </p>

        <h3 class="text-2xl font-bold text-white mb-4 mt-8 font-orbitron">How Micro-Interactions Work</h3>
        <p class="mb-6 text-gray-300 leading-relaxed">
          Every micro-interaction follows a simple structure made of four parts:
          <strong>Trigger</strong>, <strong>Rules</strong>, <strong>Feedback</strong>, and <strong>Loops</strong>.
          The trigger starts the interaction (like click or hover).
          Rules define how it behaves.
          Feedback shows users what is happening (like animation or sound).
          Loops determine how it continues or ends.
          Understanding these elements helps designers build smooth and meaningful interactions.
        </p>

        <h3 class="text-2xl font-bold text-white mb-4 mt-8 font-orbitron">Real-World Examples</h3>
        <p class="mb-6 text-gray-300 leading-relaxed">
          Many micro-interactions appear so naturally that users often don't notice them.
          A heart animation on a like button, a ripple when tapping, a loading spinner, or
          a password strength indicator — all of these make UI feel alive and friendly.
          They help users feel confident about their actions.
        </p>

        <h3 class="text-2xl font-bold text-white mb-4 mt-8 font-orbitron">Designing Effective Micro-Interactions</h3>
        <p class="mb-6 text-gray-300 leading-relaxed">
          Good micro-interactions should be subtle, purposeful, and consistent.
          Animations should be quick (150–300ms).
          They must add clarity, not distraction.
          Consistent timing and behavior across UI builds trust and familiarity.
          When used well, micro-interactions elevate both functionality and emotional appeal.
        </p>

        <h3 class="text-2xl font-bold text-white mb-4 mt-8 font-orbitron">The Future of Micro-Interactions</h3>
        <p class="mb-6 text-gray-300 leading-relaxed">
          Modern tools, motion libraries, and AI-assisted design are making micro-interactions
          more intelligent and adaptable.
          Interfaces are becoming dynamic, context-aware, and motion-driven.
          As digital experiences evolve, micro-interactions will continue shaping how users feel and interact.
        </p>

        <h3 class="text-2xl font-bold text-white mb-4 mt-8 font-orbitron">Resources</h3>
        <p class="mb-6 text-gray-300 leading-relaxed">
          <a href="https://reallygooddesigns.com/micro-interactions-guide/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-cyan-400 hover:text-cyan-300 underline transition-colors">
            Micro-Interaction Complete Guide
          </a>
        </p>
      `,
    },
    3: {
      title: 'React Server Components Explained',
      category: 'Development',
      date: 'Feb 5, 2024',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200&h=600',
      author: 'Eshant Verma',
      content: `
        <p class="mb-6 text-lg leading-relaxed text-gray-300">
          React Server Components (RSCs) represent one of the biggest shifts in modern React development. 
          They allow developers to move heavy work to the server, reduce JavaScript sent to the client, 
          and create faster, more scalable applications. In this guide, we break down the core concepts 
          behind Server Components and why they matter in 2024.
        </p>

        <h3 class="text-2xl font-bold text-white mb-4 mt-8 font-orbitron">Why React Server Components Matter</h3>
        <p class="mb-6 text-gray-300 leading-relaxed">
          Traditional React apps rely heavily on client-side JavaScript, which increases bundle size 
          and slows down initial page loads. Server Components solve this by rendering parts of your UI 
          on the server. This means lighter client bundles, faster load times, and better performance—especially 
          on slower devices or networks.
        </p>

        <h3 class="text-2xl font-bold text-white mb-4 mt-8 font-orbitron">How Server Components Work</h3>
        <p class="mb-6 text-gray-300 leading-relaxed">
          React divides your components into two categories: Server Components and Client Components.
          Server Components run only on the server and never reach the browser as JavaScript.
          Client Components run on the browser for interactivity.
          This separation allows React to send only the necessary HTML and data to the user, 
          reducing the amount of JavaScript they need to download and execute.
        </p>

        <h3 class="text-2xl font-bold text-white mb-4 mt-8 font-orbitron">When to Use Server Components</h3>
        <p class="mb-6 text-gray-300 leading-relaxed">
          Server Components are ideal for tasks that don't require user interaction. Pages that load 
          database content, product listings, dashboards, blogs, and static content benefit greatly. 
          They allow you to fetch data directly on the server without extra API calls, making the UI 
          simpler and cleaner.
        </p>

        <h3 class="text-2xl font-bold text-white mb-4 mt-8 font-orbitron">Example Structure</h3>
        <p class="mb-6 text-gray-300 leading-relaxed">
          A typical RSC setup includes a server-rendered component and an interactive client-side component. 
          Server Components handle data loading, while client ones manage actions like clicking, form input, 
          or animations.
        </p>

        <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 my-8 font-mono text-sm text-cyan-300">
          import db from "@/lib/db";<br/><br/>
          export default async function Products() {<br/>
          &nbsp;&nbsp;const items = await db.product.findMany();<br/><br/>
          &nbsp;&nbsp;return (<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{items.map(item => (<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ProductCard key={item.id} item={item} /&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
          &nbsp;&nbsp;);<br/>
          }
        </div>

        <h3 class="text-2xl font-bold text-white mb-4 mt-8 font-orbitron">The Future of React with RSC</h3>
        <p class="mb-6 text-gray-300 leading-relaxed">
          With frameworks like Next.js 13+ embracing Server Components deeply, the web is moving toward 
          hybrid rendering where only interactive parts run in the browser. This shift enables more efficient 
          data handling, smaller bundles, and highly optimized user experiences. React Server Components are 
          becoming the new standard for building high-performance web applications.
        </p>

        <h3 class="text-2xl font-bold text-white mb-4 mt-8 font-orbitron">Resources</h3>
        <p class="mb-6 text-gray-300 leading-relaxed">
          <a href="https://youtu.be/T5y3gPkb1y8?si=vwFbYVKp_BgwNPyQ"
            target="_blank"
            rel="noopener noreferrer"
            class="text-cyan-400 hover:text-cyan-300 underline transition-colors">
            React Server Components Full Guide
          </a>
        </p>
      `,
    },
    4: {
      title: 'AI Fake Media Detector – Deepfake Detection System',
      category: 'Artificial Intelligence',
      date: 'Nov 20, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&q=80&w=1200&h=600',
      author: 'Eshant Verma',
      content: `
        <p class="mb-6 text-lg text-gray-300 leading-relaxed">
          This project identifies fake images, videos, and audio using deep learning.
          Built during Semester 5, our model detects deepfakes using CNN, OpenCV, and
          facial landmark analysis. The project received an official certification and
          also resulted in a team research paper.
        </p>

        <!-- Overview -->
        <h3 class="text-2xl font-bold text-white mt-8 mb-4 font-orbitron">Project Overview</h3>
        <p class="mb-6 text-gray-300 leading-relaxed">
          Deepfakes are becoming a major threat in the digital world. Our system uses
          convolutional neural networks, frame-by-frame analysis, and dataset-based
          classification to detect manipulated media with high accuracy.
        </p>

        <!-- Tech Stack -->
        <h3 class="text-2xl font-bold text-white mt-8 mb-4 font-orbitron">Tech Stack</h3>
        <ul class="list-disc ml-6 text-gray-300 leading-relaxed">
          <li>Python · TensorFlow · Keras</li>
          <li>OpenCV for frame extraction</li>
          <li>CNN (Convolutional Neural Network)</li>
          <li>Kaggle Deepfake Dataset</li>
          <li>Flask backend + React frontend</li>
          <li>Real-time media upload + analysis</li>
        </ul>

        <!-- Certification Section -->
        <h3 class="text-2xl font-bold text-white mt-10 mb-4 font-orbitron">Certification</h3>
        <p class="text-gray-300 leading-relaxed mb-4">
          I received the official <strong>Acroset Certification in AI Media Forensics</strong>
          for successfully building the Fake Media Detection System.
        </p>

        <!-- Certificate Image -->
        <div class="my-6">
          <img
            src="YOUR_CERTIFICATE_IMAGE_URL_HERE"
            alt="Acroset AI Certification"
            class="rounded-xl shadow-lg border border-slate-700"
          />
        </div>

        <p class="text-gray-400 mt-2">
          <em>Replace with your certificate image URL.</em>
        </p>

        <!-- Research Paper Section -->
        <h3 class="text-2xl font-bold text-white mt-10 mb-4 font-orbitron">Research Paper</h3>
        <p class="text-gray-300 leading-relaxed mb-4">
          Our Semester 5 team published a research paper titled:
        </p>

        <p class="text-cyan-400 text-xl font-semibold mb-3">
          "Deepfake Media Detection Using CNN & Computer Vision Techniques"
        </p>

        <!-- Abstract -->
        <h4 class="text-xl font-semibold text-white mb-2">Abstract</h4>
        <p class="text-gray-300 leading-relaxed mb-6">
          This research explores automated detection of deepfake images and video content
          using convolutional neural networks. The study evaluates dataset balancing,
          frame-level feature extraction, classification accuracy, and the impact of media
          compression on model performance. Our model achieved competitive accuracy across
          multiple dataset variations, demonstrating its reliability for real-world scenarios.
        </p>

        <!-- Research Paper Button -->
        <a
          href="YOUR_RESEARCH_PAPER_PDF_LINK"
          target="_blank"
          class="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl shadow-md transition"
        >
          📄 Download Research Paper (PDF)
        </a>

        <p class="text-gray-400 mt-3">
          <em>Replace with your actual research paper PDF link.</em>
        </p>
      `,
    },
    5: {
      title: 'Full Stack E-Commerce Website – MERN Case Study',
      category: 'Web Development',
      date: 'Dec 10, 2024',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200&h=600',
      author: 'Eshant Verma',
      content: `
        <p class="mb-6 text-lg text-gray-300 leading-relaxed">
          This MERN-based E-Commerce website includes product management, user authentication, 
          cart system, image uploads, and a complete responsive UI built using React and Tailwind.
        </p>

        <h3 class="text-2xl font-bold text-white mb-4 mt-8 font-orbitron">Key Features</h3>
        <ul class="list-disc ml-6 text-gray-300">
          <li>User Authentication (JWT)</li>
          <li>Product Upload with Images</li>
          <li>Cart and Wishlist System</li>
          <li>Admin Dashboard</li>
          <li>Responsive UI</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4 mt-8 font-orbitron">Tech Stack</h3>
        <ul class="list-disc ml-6 text-gray-300">
          <li>React + Tailwind CSS</li>
          <li>Node.js + Express.js</li>
          <li>MongoDB Database</li>
          <li>JWT Authentication</li>
          <li>Multer Image Uploads</li>
        </ul>

        <p class="mt-8 text-gray-300">
          This project helped me learn full-stack development, authentication flow, and API integration.
        </p>
      `,
    },
    6: {
      title: 'Personal Portfolio Website – Modern UI/UX Case Study',
      category: 'Web Design',
      date: 'Jan 5, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?auto=format&fit=crop&q=80&w=1200&h=600',
      author: 'Eshant Verma',
      content: `
        <p class="mb-6 text-lg text-gray-300 leading-relaxed">
          This project is my official portfolio website designed with modern animations, 
          glassmorphism UI, and responsive layout using React and Tailwind CSS.
        </p>

        <h3 class="text-2xl font-bold text-white mt-8 mb-4 font-orbitron">Sections Included</h3>
        <ul class="list-disc ml-6 text-gray-300">
          <li>Home + Hero Section</li>
          <li>Projects Showcase</li>
          <li>Skills Section</li>
          <li>Contact Form</li>
          <li>Blog Page</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mt-8 mb-4 font-orbitron">Tech Stack</h3>
        <ul class="list-disc ml-6 text-gray-300">
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>Framer Motion Animations</li>
          <li>Vite Build System</li>
        </ul>

        <p class="mt-8 text-gray-300">
          This website is built to impress MNC recruiters with clean design, smooth animations,
          performance, and fully responsive behavior.
        </p>
      `,
    },
    7: {
      title: 'The Future of Web Development',
      category: 'Development',
      date: 'Coming Soon',
      readTime: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&q=80&w=1200&h=600',
      author: 'Eshant Verma',
      content: `
              <div class="text-center py-20">
              <h2 class="text-3xl font-bold text-white mb-4 font-orbitron">Article Coming Soon</h2>
              <p class="text-gray-400 text-lg">
              I am currently studying this topic. A complete guide will be published here soon.
              </p>
              </div>
              `
    },
    8: {
      title: 'Building AI-Powered Web Apps',
      category: 'Artificial Intelligence',
      date: 'Coming Soon',
      readTime: 'Coming Soon',
      image: '/image/cards/ai poered web application.png',
      author: 'Eshant Verma',
      content: `
    <div class="text-center py-20">
      <h2 class="text-3xl font-bold text-white mb-4 font-orbitron">Article Coming Soon</h2>
      <p class="text-gray-400 text-lg">
        I will write this article after completing my research and hands-on practice.
      </p>
    </div>
  `
    },
    9: {
      title: 'Voice-Controlled Web Apps',
      category: 'Web Development',
      date: 'Coming Soon',
      readTime: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200&h=600',
      author: 'Eshant Verma',
      content: `
    <div class="text-center py-20">
      <h2 class="text-3xl font-bold text-white mb-4 font-orbitron">Article Coming Soon</h2>
      <p class="text-gray-400 text-lg">
        This article will be added soon as I explore voice UI and Web Speech API.
      </p>
    </div>
  `
    }

  };

  const numericId = Number(id);
  const post = blogPosts[numericId] || blogPosts[String(id)] || blogPosts[1];


  const relatedPosts = [
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
                    E
                  </div>
                  <div>
                    <div className="font-bold text-white">{post.author}</div>
                    <div className="text-sm text-gray-400">Independent Developer</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">Driven by curiosity, creativity, and a passion for turning ideas into working products.</p>
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