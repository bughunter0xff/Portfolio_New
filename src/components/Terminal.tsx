import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export const Terminal = () => {
  const { theme } = useTheme();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        theme === 'dark' ? 'bg-black/80' : 'bg-gray-900/90'
      } backdrop-blur-sm rounded-lg p-4 font-mono text-sm text-green-500 w-full max-w-2xl`}
    >
      <div className="flex gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="space-y-2">
        <p><span className="text-blue-400">$</span> whoami</p>
        <p>cybersecurity_specialist</p>
        <p><span className="text-blue-400">$</span> skills --list</p>
        <p>["Penetration Testing", "Malware Analysis", "Network Security", "Incident Response"]</p>
        <p><span className="text-blue-400">$</span> experience --years</p>
        <p>8+ years in cybersecurity</p>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-3 h-5 bg-green-500"
        ></motion.span>
      </div>
    </motion.div>
  );
};