import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import AllProjects from '@/pages/AllProjects';
import RobotCharacter from '@/components/RobotCharacter';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Portfolio - 3D Interactive Experience</title>
        <meta name="description" content="Innovative portfolio website featuring 3D animated character, electric border effects, and modern interactive design" />
      </Helmet>
      <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </main>
        <RobotCharacter />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;