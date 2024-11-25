import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Shield, CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const advisories = [
  {
    severity: 'Critical',
    platform: 'Major Cloud Provider',
    bounty: '$7,500',
    description: 'Authentication bypass in OAuth2 implementation allowing unauthorized access to user accounts.',
    impact: 'Potential unauthorized access to millions of user accounts',
    status: 'Patched',
    date: 'May 2024'
  },
  {
    severity: 'High',
    platform: 'E-commerce Platform',
    bounty: '$5,000',
    description: 'SQL injection vulnerability in product search functionality leading to potential data exfiltration.',
    impact: 'Access to customer records and payment information',
    status: 'Patched',
    date: 'February 2024'
  },
  {
    severity: 'Critical',
    platform: 'Identity Provider',
    bounty: '$2,000',
    description: 'Race condition in MFA implementation allowing bypass of two-factor authentication.',
    impact: 'Complete account takeover possibility',
    status: 'Patched',
    date: 'December 2023'
  }
];

export const SecurityAdvisories = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 mb-8"
      >
        <AlertTriangle className={`w-6 h-6 ${
          theme === 'dark' ? 'text-red-400' : 'text-red-600'
        }`} />
        <h2 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-600 
          text-transparent bg-clip-text">
          Recent Security Advisories
        </h2>
      </motion.div>

      <div className="space-y-6">
        {advisories.map((advisory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative overflow-hidden rounded-xl border ${
              theme === 'dark' 
                ? 'bg-black/40 border-white/10' 
                : 'bg-white/40 border-black/10'
            } backdrop-blur-sm`}
          >
            <div className={`absolute top-0 left-0 w-1 h-full ${
              advisory.severity === 'Critical' 
                ? 'bg-red-500' 
                : 'bg-orange-500'
            }`} />
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    advisory.severity === 'Critical'
                      ? 'bg-red-500/10 text-red-400'
                      : 'bg-orange-500/10 text-orange-400'
                  }`}>
                    {advisory.severity}
                  </span>
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {advisory.date}
                  </span>
                </div>
                <div className={`flex items-center gap-2 ${
                  theme === 'dark' ? 'text-green-400' : 'text-green-600'
                }`}>
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">{advisory.status}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold">{advisory.platform}</h3>
                  <span className={`text-lg font-mono ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                  }`}>
                    {advisory.bounty}
                  </span>
                </div>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  {advisory.description}
                </p>
                <div className={`text-sm ${
                  theme === 'dark' ? 'text-red-400' : 'text-red-600'
                }`}>
                  <strong>Potential Impact:</strong> {advisory.impact}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};