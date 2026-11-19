import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Shield } from 'lucide-react';
import { Badge } from './Badge';
import { smoothEase, FloatingElement } from '../animations/MotionComponents';

export interface PageHeroProps {
  badge?: string;
  badgeVariant?: 'teal' | 'navy' | 'amber' | 'green' | 'rose' | 'slate';
  badgeIcon?: React.ElementType;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  imageSrc?: string;
  imageAlt?: string;
  imageBadgeText?: string;
  actions?: React.ReactNode;
  variant?: 'background' | 'split' | 'centered' | 'editorial' | 'compact';
  stats?: Array<{ label: string; value: string }>;
  children?: React.ReactNode;
  bottomCurve?: boolean;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  badgeVariant = 'teal',
  badgeIcon: BadgeIcon,
  title,
  subtitle,
  breadcrumbs,
  imageSrc,
  imageAlt = 'Antidote Foundation hero photograph',
  imageBadgeText,
  actions,
  variant = 'background',
  stats,
  children,
  bottomCurve = true
}) => {
  return (
    <section className="relative bg-brand-navy-950 text-white overflow-hidden min-h-[440px] flex flex-col justify-between">
      
      {/* DESKTOP BACKGROUND IMAGE (Full-width background on md+ screens with left-to-centre dark gradient) */}
      {imageSrc && (
        <div className="absolute inset-0 z-0 hidden md:block overflow-hidden pointer-events-none">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover object-center"
          />
          {/* Dark gradient from left to centre ensuring text readability while right side stays visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-950 via-brand-navy-950/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/60 via-transparent to-brand-navy-950/40" />
        </div>
      )}

      {/* Decorative Ambience for No-Image or Subtle Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-cyan-600/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-12 pb-12 sm:pb-16 w-full flex-grow flex flex-col justify-center">
        
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: smoothEase }}
            className="flex items-center gap-2 text-xs text-slate-400 mb-5 flex-wrap"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-teal-300 transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb) => (
              <React.Fragment key={crumb.label}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-teal-300 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-teal-400 font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        )}

        {/* MOBILE VIEW: Photograph MUST appear FIRST at top of hero */}
        {imageSrc && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: smoothEase }}
            className="block md:hidden w-full mb-6"
          >
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-brand-navy-900">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/75 via-transparent to-transparent pointer-events-none" />
              {imageBadgeText && (
                <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-brand-navy-950/85 backdrop-blur-md text-[11px] text-teal-300 font-medium border border-white/10">
                  {imageBadgeText}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Text and Actions Layout */}
        <div className={`space-y-5 ${variant === 'centered' ? 'max-w-4xl mx-auto text-center' : 'max-w-3xl lg:max-w-4xl'}`}>
          
          {/* Badge / Label */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: smoothEase }}
              className={variant === 'centered' ? 'inline-flex justify-center' : ''}
            >
              <Badge variant={badgeVariant} className="px-3.5 py-1 text-xs uppercase tracking-wider font-extrabold shadow-sm">
                {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 mr-1.5" />}
                {badge}
              </Badge>
            </motion.div>
          )}

          {/* Heading animated with smooth fade-in from left */}
          <motion.h1
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: smoothEase }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
          >
            {title}
          </motion.h1>

          {/* Subtitle / Description */}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16, ease: smoothEase }}
              className="text-base sm:text-lg lg:text-xl text-slate-200/90 font-normal leading-relaxed max-w-3xl"
            >
              {subtitle}
            </motion.div>
          )}

          {/* Actions / Buttons */}
          {actions && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease: smoothEase }}
              className={`flex flex-wrap items-center gap-3 pt-2 ${variant === 'centered' ? 'justify-center' : ''}`}
            >
              {actions}
            </motion.div>
          )}

          {/* Key Stats Counter */}
          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32, ease: smoothEase }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 max-w-3xl"
            >
              {stats.map((s) => (
                <div key={s.label} className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md shadow-sm">
                  <div className="text-xl sm:text-2xl font-extrabold text-teal-300">{s.value}</div>
                  <div className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          )}

          {children}
        </div>

      </div>

      {/* Hero Bottom Organic Curved SVG Transition */}
      {bottomCurve && (
        <div className="relative w-full overflow-hidden leading-none z-10 -mb-px">
          <svg
            className="relative block w-full h-8 sm:h-12 lg:h-16 text-slate-50"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" />
          </svg>
        </div>
      )}
    </section>
  );
};
