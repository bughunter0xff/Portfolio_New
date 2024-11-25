import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export const HexagonGrid = () => {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className={`absolute w-full h-full ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-black via-gray-900 to-blue-950'
          : 'bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-100'
      }`}></div>
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-12 h-12 rotate-45 ${
            theme === 'dark' 
              ? 'bg-blue-500/10' 
              : 'bg-gradient-to-br from-cyan-500/5 to-blue-500/10'
          }`}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-gradient-to-t from-black via-transparent to-transparent'
          : 'bg-gradient-to-t from-white/50 via-transparent to-transparent'
      }`} />
    </div>
  );
};