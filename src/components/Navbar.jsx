import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', label: 'Home', type: 'scroll' },
    { id: 'about', label: 'About', type: 'scroll' },
    { id: 'skills', label: 'Skills', type: 'scroll' },
    { id: 'projects', label: 'Projects', type: 'scroll' },
    { id: 'blog', label: 'Blog', type: 'route' },
    { id: 'contact', label: 'Contact', type: 'scroll' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Don't update active section based on scroll if we're not on home page
      if (location.pathname !== '/') return;

      const sections = navItems.filter(i => i.type === 'scroll').map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  // Set active section based on current route
  useEffect(() => {
    if (location.pathname === '/') {
      // On home page, check scroll position or default to home
      const sections = navItems.filter(i => i.type === 'scroll').map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      setActiveSection(currentSection || 'home');
    } else if (location.pathname.startsWith('/blog')) {
      setActiveSection('blog');
    }
  }, [location.pathname]);

  const handleNavClick = (item) => {
    if (item.type === 'route') {
      navigate(`/${item.id}`);
      setActiveSection(item.id);
    } else {
      if (location.pathname !== '/') {
        navigate(`/#${item.id}`);
      } else {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
          setActiveSection(item.id);
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg shadow-cyan-500/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent uppercase tracking-wider"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
              whileHover={{ scale: 1.05 }}
            >
              Eshant Verma
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <button
                  onClick={() => handleNavClick(item)}
                  className={`text-base font-medium transition-all duration-300 relative py-2 ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                  }`}
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      style={{
                        boxShadow: '0 0 10px rgba(34, 211, 238, 0.8), 0 0 20px rgba(34, 211, 238, 0.5)'
                      }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-slate-900/98 backdrop-blur-lg border-t border-cyan-500/20"
        >
          <ul className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-l-4 border-cyan-400'
                      : 'text-gray-300 hover:bg-slate-800/50 hover:text-white'
                  }`}
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;