import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Shield, Hexagon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const certifications = [
  {
    title: 'OSCP',
    fullName: 'Offensive Security Certified Professional',
    icon: Shield,
    date: '2023',
    description: 'Advanced penetration testing certification demonstrating practical exploitation skills and methodology.',
    color: 'from-red-500/20 to-orange-500/20',
    borderColor: 'group-hover:border-red-500/50',
    iconColor: 'group-hover:text-red-400',
  },
  {
    title: 'CEH',
    fullName: 'Certified Ethical Hacker',
    icon: Award,
    date: '2022',
    description: 'Comprehensive certification covering ethical hacking methodologies, tools, and countermeasures.',
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'group-hover:border-cyan-500/50',
    iconColor: 'group-hover:text-cyan-400',
  },
  {
    title: 'CISSP',
    fullName: 'Certified Information Systems Security Professional',
    icon: CheckCircle,
    date: '2021',
    description: 'Industry-leading certification in information security management and operations.',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'group-hover:border-purple-500/50',
    iconColor: 'group-hover:text-purple-400',
  },
];

export const Certifications = () => {
  const { theme } = useTheme();
  
  return (
    <div className="w-full max-w-4xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <div className="flex items-center justify-center mb-12">
          <Hexagon className={`w-8 h-8 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} mr-3`} />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text">
            Professional Certifications
          </h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative group rounded-xl p-6 backdrop-blur-xl border border-transparent
                ${theme === 'dark' ? 'bg-black/40' : 'bg-white/40'}
                ${cert.borderColor} transition-all duration-300`}
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${cert.color} opacity-0 
                group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative">
                <div className={`p-3 rounded-xl ${
                  theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
                } w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className={`w-6 h-6 ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                  } ${cert.iconColor} transition-colors duration-300`} />
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-white to-gray-300 
                    text-transparent bg-clip-text">{cert.title}</h3>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  } mb-2 font-medium`}>
                    {cert.fullName}
                  </p>
                  <div className={`text-xs ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                  } mb-3 font-semibold`}>
                    Obtained {cert.date}
                  </div>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  } leading-relaxed`}>
                    {cert.description}
                  </p>
                </motion.div>
              </div>
              
              <div className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};