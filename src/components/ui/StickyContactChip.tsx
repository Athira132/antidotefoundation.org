import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PhoneCall, Sparkles } from 'lucide-react';

export const StickyContactChip: React.FC = () => {
  const location = useLocation();

  // If user is already on the contact page, we don't need to display the floating contact chip
  if (location.pathname === '/contact') {
    return null;
  }

  return (
    <motion.aside
      aria-label="Quick Contact Support"
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40"
    >
      <Link
        to="/contact"
        className="group flex items-center gap-2.5 px-4 py-2.5 sm:px-4.5 sm:py-3 bg-gradient-to-r from-brand-navy-950 via-brand-navy-900 to-brand-teal-800 text-white rounded-full shadow-xl hover:shadow-2xl border border-white/20 hover:border-brand-teal-400/50 backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-teal-400 focus:ring-offset-2"
        aria-label="Contact Us - Free & Confidential Support"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>

        <motion.div
          whileHover={{ rotate: 12, scale: 1.15 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className="p-1 rounded-full bg-white/10 group-hover:bg-brand-teal-600/50 transition-colors"
        >
          <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-teal-300 group-hover:text-white" />
        </motion.div>

        <span className="text-xs sm:text-sm font-bold tracking-wide text-white group-hover:text-brand-teal-100 transition-colors">
          Contact Us
        </span>
      </Link>
    </motion.aside>
  );
};

