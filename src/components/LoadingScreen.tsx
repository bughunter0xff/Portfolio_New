import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Lock } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const LoadingScreen = () => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-black'
          : 'bg-white'
      }`} />
      
      <div className="relative flex flex-col items-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`w-16 h-16 mb-8 ${
            theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
          }`}
        >
          <Shield className="w-full h-full" />
        </motion.div>

        <div className="flex items-center gap-2 mb-8">
          {[Terminal, Lock, Shield].map((Icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`p-2 rounded-lg ${
                theme === 'dark' 
                  ? 'bg-white/5' 
                  : 'bg-black/5'
              }`}
            >
              <Icon className={`w-5 h-5 ${
                theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
              }`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className={`h-0.5 w-48 mb-4 rounded-full overflow-hidden ${
            theme === 'dark' ? 'bg-white/10' : 'bg-black/10'
          }`}
        >
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
            className={`h-full ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500'
                : 'bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600'
            }`}
          />
        </motion.div>

        <div className="relative">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`text-sm font-mono ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Initializing Security Protocols...
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};