import React from 'react';
import { motion } from 'framer-motion';
import { smoothEase, FloatingElement } from '../animations/MotionComponents';

interface DiagonalCapsuleCollageProps {
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export const DiagonalCapsuleCollage: React.FC<DiagonalCapsuleCollageProps> = ({
  imageSrc = '/images/hero-youth-leadership.jpg',
  imageAlt = 'Empowered Indian youth standing together for a drug-free India',
  className = ''
}) => {
  const clipId = 'diagonal-capsules-hero-mask';

  return (
    <div className={`relative w-full max-w-[480px] lg:max-w-[540px] xl:max-w-[580px] mx-auto select-none ${className}`}>
      
      {/* 
        Subtle Minimalist Floating Accent Dots matching the reference composition.
        Flat, clean, without rings, outlines, or heavy glows.
      */}
      <FloatingElement duration={7} distance={6} className="absolute -top-1 left-8 z-20 pointer-events-none">
        <div className="w-3 h-3 rounded-full bg-teal-400" />
      </FloatingElement>

      <FloatingElement duration={6} distance={5} delay={1} className="absolute top-1/4 -right-1 z-20 pointer-events-none">
        <div className="w-3.5 h-3.5 rounded-full bg-amber-400" />
      </FloatingElement>

      <FloatingElement duration={8} distance={6} delay={0.5} className="absolute bottom-24 -left-2 z-20 pointer-events-none">
        <div className="w-3 h-3 rounded-full bg-sky-400" />
      </FloatingElement>

      <FloatingElement duration={9} distance={5} delay={1.5} className="absolute -bottom-1 right-12 z-20 pointer-events-none">
        <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
      </FloatingElement>

      {/* Main Collage SVG Container: Borderless, outline-free, shadowless */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: smoothEase }}
        className="relative w-full"
      >
        <svg
          viewBox="0 0 700 700"
          className="w-full h-auto block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* 
              Multi-Capsule Mask:
              5 parallel, elongated diagonal capsules with fully rounded ends (rx = width/2).
              Each rect carries transform directly for 100% browser compatibility.
            */}
            <clipPath id={clipId}>
              {/* Capsule 1: Outer left (y: 170..570, cylinder y: 212.5..527.5) */}
              <rect x="75" y="170" width="85" height="400" rx="42.5" ry="42.5" transform="rotate(38 350 350)" />

              {/* Capsule 2: Mid-left (y: 75..635, cylinder y: 125..585) */}
              <rect x="176" y="75" width="100" height="560" rx="50" ry="50" transform="rotate(38 350 350)" />

              {/* Capsule 3: Center (y: 25..675, cylinder y: 83..617) */}
              <rect x="292" y="25" width="116" height="650" rx="58" ry="58" transform="rotate(38 350 350)" />

              {/* Capsule 4: Mid-right (y: 70..625, cylinder y: 120..575) */}
              <rect x="424" y="70" width="100" height="555" rx="50" ry="50" transform="rotate(38 350 350)" />

              {/* Capsule 5: Outer right (y: 140..565, cylinder y: 182.5..522.5) */}
              <rect x="540" y="140" width="85" height="425" rx="42.5" ry="42.5" transform="rotate(38 350 350)" />
            </clipPath>
          </defs>

          {/* 
            LAYER 1: Clean White Separation Gaps between the diagonal capsules.
            Pure white strips precisely nestled in the spaces between adjacent capsules,
            strictly contained between the straight edges of neighboring capsules so they NEVER protrude past the ends.
          */}
          <g fill="#FFFFFF">
            {/* Gap between Capsule 1 and 2 */}
            <rect x="160" y="235" width="16" height="260" rx="8" ry="8" transform="rotate(38 350 350)" />
            {/* Gap between Capsule 2 and 3 */}
            <rect x="276" y="160" width="16" height="380" rx="8" ry="8" transform="rotate(38 350 350)" />
            {/* Gap between Capsule 3 and 4 */}
            <rect x="408" y="160" width="16" height="380" rx="8" ry="8" transform="rotate(38 350 350)" />
            {/* Gap between Capsule 4 and 5 */}
            <rect x="524" y="210" width="16" height="280" rx="8" ry="8" transform="rotate(38 350 350)" />
          </g>

          {/* 
            LAYER 2: The Continuous Single High-Quality Photograph across all 5 capsules.
            Because it is ONE single image element clipped by the multi-capsule clipPath,
            it maintains 100% seamless visual continuity across all shapes!
            NO stroke, NO border, NO outline, NO shadow.
          */}
          <image
            href={imageSrc}
            x="0"
            y="0"
            width="700"
            height="700"
            preserveAspectRatio="xMidYMid slice"
            clipPath={`url(#${clipId})`}
            style={{ clipPath: `url(#${clipId})` }}
          >
            <title>{imageAlt}</title>
          </image>
        </svg>
      </motion.div>
    </div>
  );
};
