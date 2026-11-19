import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'danger' | 'glow-teal';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    to?: undefined;
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps & {
  to: string;
  href?: undefined;
};

type ButtonAsAnchor = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    to?: undefined;
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...props
}) => {
  const baseStyles = 'shimmer-btn inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed group active:scale-[0.98] select-none';

  const variants = {
    primary: 'bg-brand-navy-950 text-white hover:bg-brand-navy-900 hover:shadow-lg hover:shadow-brand-navy-950/20 focus:ring-brand-navy-700 shadow-sm hover:-translate-y-0.5 border border-white/10',
    secondary: 'bg-white text-brand-navy-950 border border-slate-200/90 hover:bg-slate-50 hover:border-slate-300 focus:ring-slate-300 shadow-sm hover:shadow hover:-translate-y-0.5',
    accent: 'bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 text-slate-950 font-extrabold hover:from-amber-400 hover:to-amber-500 focus:ring-amber-400 shadow-md hover:shadow-xl hover:shadow-amber-500/25 hover:-translate-y-0.5',
    'glow-teal': 'bg-gradient-to-r from-teal-500 to-teal-600 text-white font-extrabold hover:from-teal-400 hover:to-teal-500 focus:ring-teal-400 shadow-md hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5',
    outline: 'border-2 border-brand-navy-950 text-brand-navy-950 hover:bg-brand-navy-950 hover:text-white focus:ring-brand-navy-700',
    ghost: 'text-slate-700 hover:text-brand-navy-950 hover:bg-slate-100/80 focus:ring-slate-200',
    danger: 'bg-rose-600 text-white hover:bg-rose-700 focus:ring-rose-400 shadow-sm'
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 sm:px-7 py-3 sm:py-3.5 gap-2.5'
  };

  const combinedClasses = twMerge(
    clsx(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth && 'w-full',
      className
    )
  );

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a href={href} className={combinedClasses} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={combinedClasses} {...buttonProps}>
      {children}
    </button>
  );
};
