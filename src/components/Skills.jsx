import React from 'react';
import { motion } from 'framer-motion';
import { FileCode, Terminal, Coffee, Palette, Braces, Atom, PenTool, Layout } from 'lucide-react';
import ElectricBorder from '@/components/ElectricBorder';

const Skills = () => {
  const skills = [
    { name: 'C', icon: Terminal, color: 'blue' },
    { name: 'C++', icon: Braces, color: 'blue' },
    { name: 'Java', icon: Coffee, color: 'orange' },
    { name: 'HTML5', icon: Layout, color: 'orange' },
    { name: 'CSS', icon: Palette, color: 'blue' },
    { name: 'JavaScript', icon: FileCode, color: 'yellow' },
    { name: 'React', icon: Atom, color: 'cyan' },
    { name: 'Creative Design', icon: PenTool, color: 'purple' },
    { name: 'Express.js', icon: Atom, color: 'purple' },
    { name: 'MongoDB', icon: Layout, color: 'purple' },
    { name: 'Node.js', icon: Terminal, color: 'green' },
    { name: 'Tailwind CSS', icon: Palette, color: 'cyan' },
    { name: 'Git & GitHub', icon: FileCode, color: 'orange' },
    { name: 'Figma', icon: PenTool, color: 'purple' },
    { name: 'UI/UX Design', icon: PenTool, color: 'purple' },
    { name: 'Problem Solving', icon: Braces, color: 'yellow' },
    { name: 'Python', icon: Braces, color: 'yellow' },
    { name: 'Opencv', icon: Atom, color: 'green' },
    { name: 'Jquery', icon: FileCode, color: 'blue' },
    { name: 'Bootstrap', icon: Layout, color: 'purple' },
    { name: 'APIs', icon: Terminal, color: 'cyan' },
    { name: 'NPM', icon: Coffee, color: 'green' },

  ];

  const colorClasses = {
    blue: 'bg-blue-500/20',
    orange: 'bg-orange-500/20',
    yellow: 'bg-yellow-500/20',
    cyan: 'bg-cyan-500/20',
    purple: 'bg-purple-500/20',
    green: 'bg-green-500/20'
  };

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 relative bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies I master
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="h-full"
            >
              <ElectricBorder color={index % 2 === 0 ? 'cyan' : 'purple'}>
                <div className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center justify-center gap-4 min-h-[160px] group cursor-default">
                  <div className="p-4 rounded-full bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors duration-300 relative">
                    <skill.icon className="w-10 h-10 text-gray-300 group-hover:text-white transition-colors duration-300" />
                    <div className={`absolute inset-0 rounded-full blur-md ${colorClasses[skill.color]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors duration-300 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {skill.name}
                  </h3>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;