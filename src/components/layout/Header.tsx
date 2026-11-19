import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Search, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNavLinks } from '../../data/navigation';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-sm py-2 border-b border-slate-200/80' 
        : 'bg-white/90 backdrop-blur-md py-3 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          
          {/* Logo with proper aspect ratio preservation */}
          <Link 
            to="/" 
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-teal-500 rounded-lg p-0.5 group shrink-0"
            aria-label="Antidote Foundation of India Home"
          >
            <div className="relative h-9 sm:h-11 w-auto flex items-center transition-transform duration-200 group-hover:scale-[1.02]">
              <img
                src="/logo-new.png"
                alt="Antidote Foundation of India Logo"
                className="h-full w-auto object-contain max-w-[180px] sm:max-w-[220px]"
                width="863"
                height="289"
                loading="eager"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links (The 8 Main Pages) */}
          <nav className="hidden xl:flex items-center gap-0.5 text-[13px] font-semibold text-slate-700">
            {mainNavLinks.map((link) => {
              const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-2.5 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-brand-navy-950 bg-slate-100/90 font-bold shadow-xs text-brand-teal-700'
                      : 'hover:text-brand-navy-950 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <Link
              to="/find-rehab-centres"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-brand-navy-900 bg-slate-100/90 hover:bg-slate-200/80 rounded-xl transition-all border border-slate-200/80"
              title="Search Verified De-Addiction Facilities"
            >
              <Search className="w-3.5 h-3.5 text-brand-teal-600" />
              <span>Find Rehab</span>
            </Link>

            <Link
              to="/donate"
              className="shimmer-btn inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-extrabold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <Heart className="w-3.5 h-3.5 fill-current text-white group-hover:scale-110 transition-transform" />
              <span>Donate</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <Link
              to="/donate"
              className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 rounded-lg shadow-sm"
            >
              <Heart className="w-3 h-3 fill-current text-white" />
              <span>Donate</span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-800 hover:bg-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal-500 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer with the 8 Main Pages */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="xl:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 shadow-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 pt-2 pb-5 space-y-1">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
                Navigation
              </div>
              
              <div className="divide-y divide-slate-100">
                {mainNavLinks.map((link) => {
                  const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));

                  return (
                    <div key={link.label} className="py-0.5">
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                          isActive
                            ? 'text-brand-teal-700 bg-brand-teal-50/60 font-bold'
                            : 'text-slate-800 hover:bg-slate-50'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ArrowRight className={`w-3.5 h-3.5 ${isActive ? 'text-brand-teal-600' : 'text-slate-400'}`} />
                      </Link>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Bottom Actions */}
              <div className="pt-3 grid grid-cols-2 gap-2">
                <Link
                  to="/find-rehab-centres"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold text-brand-navy-900 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-200 transition-colors"
                >
                  <Search className="w-3.5 h-3.5 text-brand-teal-600" />
                  <span>Rehab Finder</span>
                </Link>

                <Link
                  to="/donate"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl shadow transition-transform"
                >
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>Donate Now</span>
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
