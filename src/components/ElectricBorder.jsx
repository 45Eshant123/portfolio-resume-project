import React from 'react';
import { motion } from 'framer-motion';

const ElectricBorder = ({ children, color = 'cyan' }) => {
  const colorMap = {
    cyan: {
      primary: 'rgba(34, 211, 238, 0.8)',
      secondary: 'rgba(56, 189, 248, 0.6)',
      glow: 'rgba(34, 211, 238, 0.4)'
    },
    purple: {
      primary: 'rgba(168, 85, 247, 0.8)',
      secondary: 'rgba(147, 51, 234, 0.6)',
      glow: 'rgba(168, 85, 247, 0.4)'
    },
    blue: {
      primary: 'rgba(59, 130, 246, 0.8)',
      secondary: 'rgba(37, 99, 235, 0.6)',
      glow: 'rgba(59, 130, 246, 0.4)'
    }
  };

  const colors = colorMap[color] || colorMap.cyan;

  return (
    <div className="relative group">
      {/* Electric border animation */}
      <motion.div
        className="absolute -inset-0.5 rounded-2xl opacity-75 blur-sm"
        animate={{
          background: [
            `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`,
            `linear-gradient(135deg, ${colors.secondary}, ${colors.primary})`,
            `linear-gradient(225deg, ${colors.primary}, ${colors.secondary})`,
            `linear-gradient(315deg, ${colors.secondary}, ${colors.primary})`,
            `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          boxShadow: `0 0 20px ${colors.glow}, 0 0 40px ${colors.glow}`
        }}
      />

      {/* Animated corner sparks */}
      <motion.div
        className="absolute -top-1 -left-1 w-3 h-3 rounded-full"
        style={{ background: colors.primary }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
        style={{ background: colors.primary }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.div
        className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full"
        style={{ background: colors.primary }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full"
        style={{ background: colors.primary }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />

      {/* Content */}
      <div className="relative rounded-2xl overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default ElectricBorder;