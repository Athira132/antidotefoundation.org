import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Shield, Compass } from 'lucide-react';
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
  variant?: 'split' | 'centered' | 'editorial' | 'compact';
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
  imageAlt = 'Antidote Foundation hero imagery',
  imageBadgeText,
  actions,
  variant = 'split',
  stats,
  children,
  bottomCurve = true
}) => {
  return (
    <section className="relative bg-brand-navy-950 text-white overflow-hidden border-b border-brand-navy-800/80">
      {/* Background Decorative Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft glowing mesh circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-teal-500/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-cyan-600/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl" />

        {/* Subtle geometric line pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Ambient floating ring */}
        <FloatingElement duration={7} distance={10} className="absolute top-12 right-1/4 hidden lg:block">
          <div className="w-48 h-48 rounded-full border border-teal-500/15" />
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 sm:pt-14 pb-14 sm:pb-20">
        
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: smoothEase }}
            className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-teal-300 transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
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

        {/* Variant: CENTERED */}
        {variant === 'centered' && (
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {badge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: smoothEase }}
                className="inline-flex justify-center"
              >
                <Badge variant={badgeVariant} className="px-3.5 py-1 text-xs uppercase tracking-wider font-bold">
                  {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 mr-1.5" />}
                  {badge}
                </Badge>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: smoothEase }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2, ease: smoothEase }}
                className="text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}

            {actions && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: smoothEase }}
                className="flex flex-wrap items-center justify-center gap-3 pt-2"
              >
                {actions}
              </motion.div>
            )}

            {stats && stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35, ease: smoothEase }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-3xl mx-auto"
              >
                {stats.map((s) => (
                  <div key={s.label} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="text-xl sm:text-2xl font-extrabold text-teal-300">{s.value}</div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            )}

            {children}
          </div>
        )}

        {/* Variant: EDITORIAL (Left aligned with optional stats) */}
        {variant === 'editorial' && (
          <div className="max-w-4xl space-y-6">
            {badge && (
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, ease: smoothEase }}
              >
                <Badge variant={badgeVariant} className="px-3.5 py-1 text-xs uppercase tracking-wider font-bold">
                  {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 mr-1.5" />}
                  {badge}
                </Badge>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: smoothEase }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2, ease: smoothEase }}
                className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl"
              >
                {subtitle}
              </motion.p>
            )}

            {actions && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: smoothEase }}
                className="flex flex-wrap items-center gap-3 pt-2"
              >
                {actions}
              </motion.div>
            )}

            {children}
          </div>
        )}

        {/* Variant: COMPACT (Legal / Utility) */}
        {variant === 'compact' && (
          <div className="max-w-3xl space-y-4">
            {badge && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Badge variant={badgeVariant} className="px-3 py-1 text-[11px] font-bold">
                  {BadgeIcon && <BadgeIcon className="w-3 h-3 mr-1" />}
                  {badge}
                </Badge>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: smoothEase }}
              className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16, ease: smoothEase }}
                className="text-sm sm:text-base text-slate-300 font-light leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}

            {actions && <div className="pt-2">{actions}</div>}
            {children}
          </div>
        )}

        {/* Variant: SPLIT (Text left, image right) */}
        {variant === 'split' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              {badge && (
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, ease: smoothEase }}
                >
                  <Badge variant={badgeVariant} className="px-3.5 py-1 text-xs uppercase tracking-wider font-bold">
                    {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 mr-1.5" />}
                    {badge}
                  </Badge>
                </motion.div>
              )}

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: smoothEase }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
              >
                {title}
              </motion.h1>

              {subtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.2, ease: smoothEase }}
                  className="text-base sm:text-lg text-slate-300 font-light leading-relaxed"
                >
                  {subtitle}
                </motion.p>
              )}

              {actions && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: smoothEase }}
                  className="flex flex-wrap items-center gap-3 pt-1"
                >
                  {actions}
                </motion.div>
              )}

              {stats && stats.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35, ease: smoothEase }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4"
                >
                  {stats.map((s) => (
                    <div key={s.label} className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      <div className="text-xl font-bold text-teal-300">{s.value}</div>
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">{s.label}</div>
                    </div>
                  ))}
                </motion.div>
              )}

              {children}
            </div>

            {/* Right Column: Visual Frame */}
            {imageSrc && (
              <motion.div
                initial={{ opacity: 0, scale: 0.94, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.15, ease: smoothEase }}
                className="lg:col-span-5 relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-brand-navy-900 group">
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/80 via-transparent to-transparent pointer-events-none" />

                  {imageBadgeText && (
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-brand-navy-950/80 backdrop-blur-md border border-white/15 text-xs text-slate-200">
                      <span className="font-semibold text-teal-300">Antidote Focus:</span> {imageBadgeText}
                    </div>
                  )}
                </div>

                {/* Floating decorative badge */}
                <FloatingElement
                  duration={6}
                  distance={6}
                  delay={1}
                  className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-navy-900/90 border border-teal-500/30 text-[11px] text-teal-300 shadow-xl backdrop-blur-md"
                >
                  <Shield className="w-3.5 h-3.5 text-teal-400" />
                  <span>Verified Public Charter</span>
                </FloatingElement>
              </motion.div>
            )}

          </div>
        )}

      </div>

      {/* Hero Bottom Curved SVG Transition */}
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

