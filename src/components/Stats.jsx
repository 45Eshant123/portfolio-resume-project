import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const Counter = ({ value, label, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = display.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [display]);

  return (
    <div ref={ref} className="text-center group">
      <motion.div
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300"
        style={{ fontFamily: 'Orbitron, sans-serif' }}
      >
        {displayValue}{suffix}
      </motion.div>
      <p className="text-gray-400 font-medium">{label}</p>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Years Experience', value: 3, suffix: '+' },
    { label: 'Projects Completed', value: 6, suffix: '' },
    { label: 'Happy Clients', value: 35, suffix: '+' },
    { label: 'Awards Won', value: 2, suffix: '' }
  ];

  return (
    <section className="py-12 bg-slate-900/30 border-y border-cyan-500/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Counter key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;