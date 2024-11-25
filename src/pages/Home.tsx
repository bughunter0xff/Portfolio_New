import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from '../components/Terminal';
import { Stats } from '../components/Stats';
import { HexagonGrid } from '../components/HexagonGrid';
import { Certifications } from '../components/Certifications';
import { SecurityAdvisories } from '../components/SecurityAdvisories';
import { useTheme } from '../contexts/ThemeContext';

export const Home = () => {
  const { theme } = useTheme();

  return (
    <>
      <HexagonGrid />
      
      <div className="container mx-auto px-4 pt-32 space-y-24">
        <div className="text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r 
              ${theme === 'dark' 
                ? 'from-cyan-400 via-blue-500 to-purple-600' 
                : 'from-cyan-600 via-blue-600 to-purple-700'} 
              text-transparent bg-clip-text leading-[1.2] tracking-tight max-w-5xl mx-auto py-2`}
          >
            Securing the Digital Frontier
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`text-lg sm:text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}
          >
            Elite cybersecurity specialist with expertise in penetration testing, 
            malware analysis, and incident response. Protecting your digital assets 
            with military-grade precision.
          </motion.p>
        </div>

        <div className="flex justify-center">
          <Terminal />
        </div>

        <div className="py-16">
          <Stats />
        </div>

        <div>
          <Certifications />
        </div>

        <div>
          <SecurityAdvisories />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </>
  );
};