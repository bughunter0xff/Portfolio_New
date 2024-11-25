import React from 'react';
import { Shield, Bug, Server, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export const Stats = () => {
  const { theme } = useTheme();
  const stats = [
    { icon: Shield, label: 'Security Audits', value: '100+' },
    { icon: Bug, label: 'Vulnerabilities Found', value: '300+' },
    { icon: Server, label: 'Systems Protected', value: '20+' },
    { icon: Lock, label: 'Zero-Day Discoveries', value: '5' },
  ];

  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mx-auto px-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${
              theme === 'dark' 
                ? 'bg-white/5 hover:bg-white/10' 
                : 'bg-black/5 hover:bg-black/10'
            } backdrop-blur-sm p-4 rounded-lg text-center group transition-all`}
          >
            <stat.icon className={`w-8 h-8 mx-auto mb-2 ${
              theme === 'dark' 
                ? 'text-cyan-400 group-hover:text-cyan-300' 
                : 'text-cyan-600 group-hover:text-cyan-500'
            }`} />
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};