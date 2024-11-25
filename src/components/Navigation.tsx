import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

interface NavigationProps {
  isScrolled: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ isScrolled }) => {
  const { theme } = useTheme();
  const { scrollY } = useScroll();

  const navBackground = useTransform(
    scrollY,
    [0, 50],
    [theme === 'dark' ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 0)', 
     theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)']
  );

  const navBlur = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  );

  const navY = useTransform(
    scrollY,
    [0, 50],
    ['1rem', '0.5rem']
  );

  const navScale = useTransform(
    scrollY,
    [0, 50],
    [1, 0.98]
  );

  return (
    <motion.nav
      style={{ y: navY, scale: navScale }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
    >
      <motion.div
        style={{ background: navBackground, backdropFilter: navBlur }}
        className={`mx-auto max-w-3xl transition-all duration-300 rounded-full
          ${isScrolled ? 'shadow-lg shadow-black/5' : ''}
          ${theme === 'dark' 
            ? 'border-white/10 hover:border-white/20' 
            : 'border-black/10 hover:border-black/20'}
          ${isScrolled ? 'border' : 'border-transparent'}
          overflow-hidden backdrop-blur-sm
        `}
      >
        <div className="px-6 py-3">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link to="/">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className={`relative w-10 h-10 group rounded-full ${
                    theme === 'dark' 
                      ? 'bg-black/80' 
                      : 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10'
                  }`}
                >
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        `0 0 0 ${theme === 'dark' ? 'rgba(6, 182, 212, 0)' : 'rgba(6, 182, 212, 0)'}`,
                        `0 0 20px ${theme === 'dark' ? 'rgba(6, 182, 212, 0.6)' : 'rgba(6, 182, 212, 0.3)'}`,
                        `0 0 0 ${theme === 'dark' ? 'rgba(6, 182, 212, 0)' : 'rgba(6, 182, 212, 0)'}`,
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-full h-full rounded-full overflow-hidden backdrop-blur-sm"
                  >
                    <motion.div
                      className={`w-full h-full flex items-center justify-center ${
                        theme === 'dark' 
                          ? 'text-cyan-400' 
                          : 'text-cyan-600'
                      }`}
                      animate={{
                        opacity: [0.7, 1, 0.7],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                      >
                        <path d="M4 17l6-6-6-6" />
                        <path d="M12 19h8" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <ThemeToggle />
              <Link to="/blog">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative p-2 rounded-full group transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'hover:bg-white/10'
                      : 'hover:bg-black/5'
                  }`}
                >
                  <BookOpen className={`w-5 h-5 ${
                    theme === 'dark' 
                      ? 'text-gray-400 group-hover:text-cyan-400' 
                      : 'text-gray-600 group-hover:text-cyan-600'
                  } transition-colors duration-300`} />
                  <span className="sr-only">Blog</span>
                </motion.div>
              </Link>
              {[
                { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:contact@example.com', label: 'Email' }
              ].map(({ Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative p-2 rounded-full group transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'hover:bg-white/10'
                      : 'hover:bg-black/5'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${
                    theme === 'dark' 
                      ? 'text-gray-400 group-hover:text-cyan-400' 
                      : 'text-gray-600 group-hover:text-cyan-600'
                  } transition-colors duration-300`} />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};