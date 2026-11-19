import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, PhoneCall, Heart, Search, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNavLinks } from '../../data/navigation';
import { organizationData } from '../../data/organization';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-100' 
        : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-200/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-brand-teal-500 rounded-lg p-0.5"
            aria-label="Antidote Foundation of India Home"
          >
            <div className="relative h-11 sm:h-12 w-auto flex items-center">
              <img
                src="/logo.webp"
                alt="Antidote Foundation of India Logo"
                className="h-full w-auto object-contain max-w-[210px] sm:max-w-[240px]"
                width="639"
                height="214"
                loading="eager"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-[14px] font-semibold text-slate-700">
            {mainNavLinks.map((link) => {
              const hasDropdown = Boolean(link.children && link.children.length > 0);
              const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));

              if (hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={link.href}
                      className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg transition-colors duration-150 ${
                        isActive
                          ? 'text-brand-navy-900 bg-slate-100 font-bold'
                          : 'hover:text-brand-navy-900 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 mt-1 w-72 rounded-xl bg-white shadow-xl border border-slate-100 p-2 z-50 overflow-hidden"
                        >
                          <div className="py-1">
                            {link.children?.map((child) => (
                              <Link
                                key={child.label}
                                to={child.href}
                                className="block px-3 py-2 rounded-lg hover:bg-brand-navy-50/70 transition-colors group"
                              >
                                <div className="text-[13px] font-semibold text-brand-navy-950 group-hover:text-brand-navy-700">
                                  {child.label}
                                </div>
                                {child.description && (
                                  <div className="text-[11px] text-slate-500 line-clamp-1">
                                    {child.description}
                                  </div>
                                )}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-3 py-2 rounded-lg transition-colors duration-150 ${
                    isActive
                      ? 'text-brand-navy-900 bg-slate-100 font-bold'
                      : 'hover:text-brand-navy-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/find-rehab-centres"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-brand-navy-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all border border-slate-200/80"
              title="Search Accredited De-Addiction Centres"
            >
              <Search className="w-3.5 h-3.5 text-brand-teal-600" />
              <span>Find Rehab Centres</span>
            </Link>

            <Link
              to="/donate"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-lg shadow-sm hover:shadow transition-all group"
            >
              <Heart className="w-3.5 h-3.5 fill-current text-white group-hover:scale-110 transition-transform" />
              <span>Donate Now</span>
            </Link>

            <a
              href={`tel:${organizationData.contact.helpline}`}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 hover:text-brand-navy-900 bg-brand-navy-50/80 hover:bg-brand-navy-100/80 rounded-lg border border-slate-200/80 transition-all"
              title="Direct Call to 24/7 Helpline"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-navy-700" />
              <span>Helpline</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <Link
              to="/donate"
              className="sm:hidden inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 rounded-lg shadow-sm"
            >
              <Heart className="w-3 h-3 fill-current text-white" />
              <span>Donate</span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal-500"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="xl:hidden bg-white border-b border-slate-200 shadow-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-2">
              
              {/* Emergency Helpline Banner for Mobile */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-amber-600 animate-bounce" />
                  <div>
                    <div className="text-xs font-bold text-amber-900">24/7 Confidential Helpline</div>
                    <div className="text-[11px] text-amber-700">{organizationData.contact.helplineDisplay}</div>
                  </div>
                </div>
                <a
                  href={`tel:${organizationData.contact.helpline}`}
                  className="px-3 py-1.5 bg-amber-500 text-white font-bold text-xs rounded-lg shadow hover:bg-amber-600"
                >
                  Call Now
                </a>
              </div>

              {/* Navigation Links list */}
              <div className="divide-y divide-slate-100">
                {mainNavLinks.map((link) => (
                  <div key={link.label} className="py-1">
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                        location.pathname === link.href
                          ? 'text-brand-navy-900 bg-brand-navy-50 font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </Link>

                    {/* Sub-links in mobile */}
                    {link.children && (
                      <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/60 rounded-lg my-1">
                        {link.children.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-brand-navy-900 hover:bg-white rounded"
                          >
                            • {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="pt-4 grid grid-cols-2 gap-2">
                <Link
                  to="/find-rehab-centres"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold text-brand-navy-800 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-200"
                >
                  <Search className="w-3.5 h-3.5 text-brand-teal-600" />
                  <span>Rehab Finder</span>
                </Link>

                <Link
                  to="/donate"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl shadow"
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
