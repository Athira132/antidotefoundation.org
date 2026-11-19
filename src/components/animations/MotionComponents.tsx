import React from 'react';
import { motion, HTMLMotionProps, Variants, useReducedMotion } from 'framer-motion';

// Easing presets
export const smoothEase = [0.22, 1, 0.36, 1]; // Custom cubic-bezier for snappy, premium feel
export const gentleEase = [0.25, 0.1, 0.25, 1];

// Viewport default config to ensure animations trigger reliably without staying hidden
export const defaultViewport = {
  once: true,
  amount: 0.08,
  margin: '-20px'
};

// ============================================================================
// 1. FadeIn & FadeUp Components
// ============================================================================

interface FadeInProps extends HTMLMotionProps<'div'> {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  className?: string;
  children: React.ReactNode;
}

export const FadeIn: React.FC<FadeInProps> = ({
  delay = 0,
  duration = 0.5,
  direction = 'none',
  distance = 24,
  className = '',
  children,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  let initialX = 0;
  let initialY = 0;

  if (!shouldReduceMotion) {
    if (direction === 'up') initialY = distance;
    if (direction === 'down') initialY = -distance;
    if (direction === 'left') initialX = distance;
    if (direction === 'right') initialX = -distance;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={defaultViewport}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay,
        ease: smoothEase
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FadeUp: React.FC<Omit<FadeInProps, 'direction'>> = (props) => (
  <FadeIn direction="up" {...props} />
);

export const SlideInLeft: React.FC<Omit<FadeInProps, 'direction'>> = (props) => (
  <FadeIn direction="right" {...props} />
);

export const SlideInRight: React.FC<Omit<FadeInProps, 'direction'>> = (props) => (
  <FadeIn direction="left" {...props} />
);

// ============================================================================
// 2. StaggerContainer & StaggerItem (for Cards, Grids, Lists)
// ============================================================================

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  children: React.ReactNode;
}

const staggerContainerVariants = (stagger: number, delay: number): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: delay
    }
  }
});

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  staggerDelay = 0.1,
  delayChildren = 0.05,
  className = '',
  children,
  ...props
}) => {
  return (
    <motion.div
      variants={staggerContainerVariants(staggerDelay, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps extends HTMLMotionProps<'div'> {
  className?: string;
  children: React.ReactNode;
  yOffset?: number;
}

const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: smoothEase
    }
  }
};

export const StaggerItem: React.FC<StaggerItemProps> = ({
  className = '',
  children,
  yOffset = 28,
  ...props
}) => {
  return (
    <motion.div
      variants={staggerItemVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// 3. ScrollReveal & ScaleIn
// ============================================================================

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  variant?: 'fadeUp' | 'scale' | 'blur' | 'slideLeft' | 'slideRight';
  delay?: number;
  duration?: number;
  className?: string;
  children: React.ReactNode;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  variant = 'fadeUp',
  delay = 0,
  duration = 0.6,
  className = '',
  children,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  let initialValues: Record<string, any> = { opacity: 0 };
  let targetValues: Record<string, any> = { opacity: 1 };

  if (!shouldReduceMotion) {
    switch (variant) {
      case 'fadeUp':
        initialValues = { opacity: 0, y: 32 };
        targetValues = { opacity: 1, y: 0 };
        break;
      case 'scale':
        initialValues = { opacity: 0, scale: 0.93 };
        targetValues = { opacity: 1, scale: 1 };
        break;
      case 'blur':
        initialValues = { opacity: 0, filter: 'blur(8px)', y: 16 };
        targetValues = { opacity: 1, filter: 'blur(0px)', y: 0 };
        break;
      case 'slideLeft':
        initialValues = { opacity: 0, x: -36 };
        targetValues = { opacity: 1, x: 0 };
        break;
      case 'slideRight':
        initialValues = { opacity: 0, x: 36 };
        targetValues = { opacity: 1, x: 0 };
        break;
    }
  }

  return (
    <motion.div
      initial={initialValues}
      whileInView={targetValues}
      viewport={defaultViewport}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay,
        ease: smoothEase
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn: React.FC<{ delay?: number; duration?: number; className?: string; children: React.ReactNode }> = ({
  delay = 0,
  duration = 0.5,
  className = '',
  children
}) => (
  <ScrollReveal variant="scale" delay={delay} duration={duration} className={className}>
    {children}
  </ScrollReveal>
);

// ============================================================================
// 4. Floating & Ambient Ambient Animations
// ============================================================================

interface FloatingElementProps extends HTMLMotionProps<'div'> {
  duration?: number;
  distance?: number;
  delay?: number;
  className?: string;
  children?: React.ReactNode;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  duration = 5,
  distance = 8,
  delay = 0,
  className = '',
  children,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      animate={{
        y: [-distance, distance, -distance],
        rotate: [-0.5, 0.5, -0.5]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// 5. PageTransition (Route animations)
// ============================================================================

export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: smoothEase
    }
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.18,
      ease: 'easeIn'
    }
  }
};

export const PageTransition: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// 6. ImageReveal (masked zoom out effect)
// ============================================================================

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  aspectRatio?: string;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  aspectRatio
}) => {
  return (
    <div className={`overflow-hidden relative group ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1.08, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.85, ease: smoothEase }}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${imgClassName}`}
        style={aspectRatio ? { aspectRatio } : undefined}
        loading="lazy"
      />
    </div>
  );
};

