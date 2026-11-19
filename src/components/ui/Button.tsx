import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'danger';
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
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed group';

  const variants = {
    primary: 'bg-brand-navy-900 text-white hover:bg-brand-navy-800 focus:ring-brand-navy-700 shadow-sm hover:shadow-md hover:-translate-y-0.5',
    secondary: 'bg-white text-brand-navy-950 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 focus:ring-slate-300 shadow-sm hover:shadow',
    accent: 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold hover:from-amber-600 hover:to-amber-700 focus:ring-amber-400 shadow-md hover:shadow-lg hover:-translate-y-0.5',
    outline: 'border-2 border-brand-navy-900 text-brand-navy-900 hover:bg-brand-navy-900 hover:text-white focus:ring-brand-navy-700',
    ghost: 'text-slate-700 hover:text-brand-navy-900 hover:bg-slate-100 focus:ring-slate-200',
    danger: 'bg-rose-600 text-white hover:bg-rose-700 focus:ring-rose-400 shadow-sm'
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5'
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
