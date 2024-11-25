import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none"
      style={{
        backgroundColor: theme === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(219, 234, 254)'
      }}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className={`${
          theme === 'dark' ? 'bg-slate-700' : 'bg-white'
        } flex h-6 w-6 items-center justify-center rounded-full shadow-md absolute ${
          theme === 'dark' ? 'left-1' : 'left-7'
        }`}
      >
        {theme === 'dark' ? (
          <Moon className="h-3 w-3 text-cyan-400" />
        ) : (
          <Sun className="h-3 w-3 text-yellow-500" />
        )}
      </motion.span>
    </motion.button>
  );
};