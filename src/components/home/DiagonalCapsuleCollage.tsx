import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck } from 'lucide-react';
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
  const clipId = 'diagonal-capsules-mask';
  const shadowId = 'capsule-elevation-shadow';

  return (
    <div className={`relative w-full max-w-[500px] lg:max-w-[580px] xl:max-w-[620px] mx-auto select-none ${className}`}>
      
      {/* Ambient background glow behind the collage */}
      <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-tr from-brand-teal-500/25 via-sky-500/20 to-amber-500/25 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Decorative Accent Dots (matching the reference composition) */}
      <FloatingElement duration={7} distance={8} className="absolute -top-2 left-10 z-20">
        <div className="w-3.5 h-3.5 rounded-full bg-teal-400 shadow-[0_0_14px_rgba(45,212,191,0.9)] ring-2 ring-white/20" />
      </FloatingElement>

      <FloatingElement duration={6} distance={6} delay={1} className="absolute top-1/4 -right-1 z-20">
        <div className="w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_16px_rgba(251,191,36,0.9)] ring-2 ring-white/20" />
      </FloatingElement>

      <FloatingElement duration={8} distance={7} delay={0.5} className="absolute bottom-20 -left-2 z-20">
        <div className="w-3.5 h-3.5 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)] ring-2 ring-white/20" />
      </FloatingElement>

      <FloatingElement duration={9} distance={5} delay={1.5} className="absolute -bottom-2 right-14 z-20">
        <div className="w-2.5 h-2.5 rounded-full bg-rose-400 shadow-[0_0_10px_rgba(251,113,133,0.9)] ring-2 ring-white/20" />
      </FloatingElement>

      {/* Main SVG Composition */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.85, ease: smoothEase }}
        className="relative w-full"
      >
        <svg
          viewBox="0 0 700 720"
          className="w-full h-auto drop-shadow-[0_25px_40px_rgba(0,0,0,0.5)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Filter for subtle luxury shadow on the individual capsules */}
            <filter id={shadowId} x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000000" floodOpacity="0.4" />
            </filter>

            {/* 
              Multi-Capsule Mask:
              5 parallel, elongated diagonal capsules with fully rounded ends (rx = width/2).
              Rotated uniformly at 38 degrees around center (360, 360).
            */}
            <clipPath id={clipId}>
              <g transform="rotate(38, 360, 360)">
                {/* Capsule 1: Outer left (offset, lower) */}
                <rect x="106" y="220" width="80" height="360" rx="40" ry="40" />

                {/* Capsule 2: Mid-left (tall, prominent) */}
                <rect x="204" y="90" width="95" height="540" rx="47.5" ry="47.5" />

                {/* Capsule 3: Center (longest, anchors the composition across main subjects) */}
                <rect x="317" y="40" width="110" height="620" rx="55" ry="55" />

                {/* Capsule 4: Mid-right (tall, balances the right side) */}
                <rect x="445" y="100" width="95" height="520" rx="47.5" ry="47.5" />

                {/* Capsule 5: Outer right (shorter, offset) */}
                <rect x="558" y="210" width="76" height="350" rx="38" ry="38" />
              </g>
            </clipPath>
          </defs>

          {/* 
            LAYER 1: Pure White Solid Backing under the capsules.
            Guarantees that the separation channels between the shapes are 100% crisp pure white!
          */}
          <g transform="rotate(38, 360, 360)" fill="#FFFFFF">
            <rect x="100" y="214" width="92" height="372" rx="46" ry="46" />
            <rect x="198" y="84" width="107" height="552" rx="53.5" ry="53.5" />
            <rect x="311" y="34" width="122" height="632" rx="61" ry="61" />
            <rect x="439" y="94" width="107" height="532" rx="53.5" ry="53.5" />
            <rect x="552" y="204" width="88" height="362" rx="44" ry="44" />
          </g>

          {/* 
            LAYER 2: The Continuous Single High-Quality Photograph across all 5 capsules.
            Because it is ONE single image element clipped by the multi-capsule clipPath,
            it maintains 100% seamless visual continuity across all shapes!
          */}
          <image
            href={imageSrc}
            xlinkHref={imageSrc}
            x="0"
            y="0"
            width="700"
            height="720"
            preserveAspectRatio="xMidYMid slice"
            clipPath={`url(#${clipId})`}
          />

          {/* 
            LAYER 3: Clean White Separation Gaps & Borders.
            Thick, crisp white strokes (width: 8px) around every capsule,
            delivering the clean white separation gaps specified in the design requirements.
          */}
          <g transform="rotate(38, 360, 360)" fill="none" stroke="#FFFFFF" strokeWidth="8">
            <rect x="106" y="220" width="80" height="360" rx="40" ry="40" />
            <rect x="204" y="90" width="95" height="540" rx="47.5" ry="47.5" />
            <rect x="317" y="40" width="110" height="620" rx="55" ry="55" />
            <rect x="445" y="100" width="95" height="520" rx="47.5" ry="47.5" />
            <rect x="558" y="210" width="76" height="350" rx="38" ry="38" />
          </g>
        </svg>

        {/* Floating Mini Pill over bottom of collage */}
        <FloatingElement
          duration={5}
          distance={5}
          delay={0.8}
          className="absolute -bottom-2 left-4 sm:left-8 z-30"
        >
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-brand-navy-950/90 backdrop-blur-md border border-white/20 text-white shadow-2xl text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
            </span>
            <span className="font-bold text-teal-300">Empowering Youth</span>
            <span className="text-slate-400 text-[10px]">Ages 13–30</span>
          </div>
        </FloatingElement>

        {/* Floating Top-Right Shield Pill */}
        <FloatingElement
          duration={6}
          distance={5}
          delay={1.2}
          className="hidden sm:flex absolute -top-3 right-6 z-30 items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-brand-navy-950 shadow-xl border border-slate-200 text-[11px] font-extrabold"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
          <span>Verified Non-Profit</span>
        </FloatingElement>

      </motion.div>
    </div>
  );
};
