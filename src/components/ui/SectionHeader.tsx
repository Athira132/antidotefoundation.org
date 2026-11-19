import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './Badge';
import { defaultViewport, smoothEase } from '../animations/MotionComponents';

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: 'navy' | 'teal' | 'amber' | 'green' | 'rose' | 'slate';
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = 'teal',
  title,
  subtitle,
  centered = true,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={defaultViewport}
      transition={{ duration: 0.6, ease: smoothEase }}
      className={`space-y-2 mb-6 sm:mb-8 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}
    >
      {badge && (
        <div className="inline-block">
          <Badge variant={badgeVariant}>
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy-950 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
