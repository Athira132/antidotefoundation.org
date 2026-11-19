import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  variant?: 'navy' | 'teal' | 'amber' | 'green' | 'rose' | 'slate';
  size?: 'sm' | 'md';
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'navy',
  size = 'md',
  className,
  children
}) => {
  const base = 'inline-flex items-center font-bold tracking-wide uppercase rounded-full';

  const variants = {
    navy: 'bg-brand-navy-100 text-brand-navy-900 border border-brand-navy-200/60',
    teal: 'bg-teal-50 text-teal-800 border border-teal-200',
    amber: 'bg-amber-50 text-amber-800 border border-amber-200',
    green: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    rose: 'bg-rose-50 text-rose-800 border border-rose-200',
    slate: 'bg-slate-100 text-slate-700 border border-slate-200'
  };

  const sizes = {
    sm: 'text-[10px] px-2.5 py-0.5',
    md: 'text-xs px-3 py-1'
  };

  return (
    <span className={twMerge(clsx(base, variants[variant], sizes[size], className))}>
      {children}
    </span>
  );
};
