import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Heart, Search, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNavLinks } from '../../data/navigation';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<Record<string, boolean>>({});
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdowns on page change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setExpandedMobileMenus({});
  }, [location.pathname]);

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobileMenus(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-sm py-2.5 border-b border-slate-200/80' 
        : 'bg-white/80 backdrop-blur-md py-3.5 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo with proper aspect ratio preservation */}
          <Link 
            to="/" 
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-brand-teal-500 rounded-lg p-0.5 group"
            aria-label="Antidote Foundation of India Home"
          >
            <div className="relative h-10 sm:h-12 w-auto flex items-center transition-transform duration-200 group-hover:scale-[1.02]">
              <img
                src="/logo-new.png"
                alt="Antidote Foundation of India Logo"
                className="h-full w-auto object-contain max-w-[200px] sm:max-w-[240px]"
                width="863"
                height="289"
                loading="eager"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-[13.5px] font-semibold text-slate-700">
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
                      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'text-brand-navy-950 bg-slate-100/90 font-bold shadow-xs'
                          : 'hover:text-brand-navy-950 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                        activeDropdown === link.label ? 'rotate-180 text-brand-teal-600' : ''
                      }`} />
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.16, ease: 'easeOut' }}
                          className="absolute left-0 mt-2 w-72 rounded-2xl bg-white/95 backdrop-blur-xl shadow-xl border border-slate-100 p-2.5 z-50 overflow-hidden"
                        >
                          <div className="space-y-1">
                            {link.children?.map((child) => (
                              <Link
                                key={child.label}
                                to={child.href}
                                className="block px-3 py-2 rounded-xl hover:bg-brand-navy-50/70 transition-colors group"
                              >
                                <div className="text-[13px] font-semibold text-brand-navy-950 group-hover:text-brand-teal-700 transition-colors">
                                  {child.label}
                                </div>
                                {child.description && (
                                  <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
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
                  className={`px-3 py-2 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-brand-navy-950 bg-slate-100/90 font-bold shadow-xs'
                      : 'hover:text-brand-navy-950 hover:bg-slate-50'
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
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-brand-navy-900 bg-slate-100/90 hover:bg-slate-200/80 rounded-xl transition-all border border-slate-200/80"
              title="Search Verified De-Addiction Facilities"
            >
              <Search className="w-3.5 h-3.5 text-brand-teal-600" />
              <span>Find Rehab Centres</span>
            </Link>

            <Link
              to="/donate"
              className="shimmer-btn inline-flex items-center gap-2 px-4 py-2 text-xs font-extrabold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <Heart className="w-3.5 h-3.5 fill-current text-white group-hover:scale-110 transition-transform" />
              <span>Donate Now</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
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
              className="p-2.5 text-slate-800 hover:bg-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal-500 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer with Accordion Submenus */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="xl:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-3">
              
              {/* Navigation Links list */}
              <div className="divide-y divide-slate-100">
                {mainNavLinks.map((link) => {
                  const hasSubmenu = Boolean(link.children && link.children.length > 0);
                  const isExpanded = Boolean(expandedMobileMenus[link.label]);
                  const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));

                  if (hasSubmenu) {
                    return (
                      <div key={link.label} className="py-1">
                        <div className="flex items-center justify-between">
                          <Link
                            to={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex-grow py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors ${
                              isActive
                                ? 'text-brand-navy-950 font-bold bg-slate-50'
                                : 'text-slate-800 hover:bg-slate-50'
                            }`}
                          >
                            {link.label}
                          </Link>

                          {/* Accordion Toggle Chevron */}
                          <button
                            type="button"
                            onClick={() => toggleMobileSubmenu(link.label)}
                            className="p-2.5 text-slate-500 hover:text-brand-navy-950 hover:bg-slate-100 rounded-xl transition-all"
                            aria-label={`Toggle ${link.label} submenu`}
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isExpanded ? 'rotate-180 text-brand-teal-600' : ''
                              }`}
                            />
                          </button>
                        </div>

                        {/* Collapsible Submenu */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-3 pr-2 py-1.5 my-1 bg-slate-50/80 rounded-xl space-y-1"
                            >
                              {link.children?.map((sub) => (
                                <Link
                                  key={sub.label}
                                  to={sub.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-3 py-2 text-xs font-medium text-slate-700 hover:text-brand-navy-950 hover:bg-white rounded-lg transition-colors"
                                >
                                  <div className="font-semibold">{sub.label}</div>
                                  {sub.description && (
                                    <div className="text-[10px] text-slate-500 line-clamp-1">
                                      {sub.description}
                                    </div>
                                  )}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <div key={link.label} className="py-1">
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                          location.pathname === link.href
                            ? 'text-brand-navy-950 bg-slate-100 font-bold'
                            : 'text-slate-800 hover:bg-slate-50'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      </Link>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Bottom Actions */}
              <div className="pt-3 grid grid-cols-2 gap-2.5">
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
