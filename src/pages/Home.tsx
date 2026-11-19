import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  PhoneCall,
  Heart,
  Users,
  Compass,
  ArrowRight,
  BookOpen,
  Sparkles,
  MapPin,
  Calendar,
  Lock,
  HeartHandshake,
  Building2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { organizationData } from '../data/organization';
import { programsData } from '../data/programs';
import { campaignsData } from '../data/campaigns';
import { upcomingEvents } from '../data/events';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { SectionHeader } from '../components/ui/SectionHeader';
import { HelplineBanner } from '../components/common/HelplineBanner';
import { TrustDisclaimer } from '../components/common/TrustDisclaimer';
import {
  FadeUp,
  FadeIn,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
  ScrollReveal,
  FloatingElement,
  smoothEase
} from '../components/animations/MotionComponents';

export const Home: React.FC = () => {
  return (
    <div className="space-y-0 overflow-hidden">
      
      {/* ============================================================== */}
      {/* 1. CREATIVE ASYMMETRICAL EDITORIAL HERO SECTION               */}
      {/* ============================================================== */}
      <section className="relative bg-gradient-to-b from-brand-navy-950 via-[#07162C] to-brand-navy-950 text-white overflow-hidden pt-10 sm:pt-14 md:pt-18 lg:pt-22 pb-16 sm:pb-24 lg:pb-28">
        
        {/* Giant Subtle Ambient Typography in Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
          <span className="text-[14vw] font-black uppercase text-white/[0.025] tracking-widest translate-y-12 whitespace-nowrap">
            DRUG-FREE
          </span>
        </div>

        {/* Abstract Glowing Atmospheric Circles, Rings & Lighting Elements */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-teal-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 right-1/4 w-[500px] h-[500px] bg-brand-navy-800/40 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle geometric line curves & abstract background rings */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        
        <FloatingElement duration={8} distance={8} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full pointer-events-none hidden lg:block" />
        <FloatingElement duration={11} distance={12} delay={1} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] border border-brand-teal-500/10 rounded-full pointer-events-none hidden lg:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Asymmetrical Editorial Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 7 Columns: Editorial Typography & CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: smoothEase }}
              className="lg:col-span-7 space-y-4 sm:space-y-6 text-left"
            >
              
              {/* EXACT Supporting Label above heading */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: smoothEase }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-teal-500/15 border border-brand-teal-400/30 text-brand-teal-300 text-xs sm:text-sm font-extrabold tracking-widest uppercase shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
                </span>
                <span>FOR YOUTH AGED 13–30</span>
              </motion.div>

              {/* EXACT Main Headline: Strongest Visual Element on Homepage */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: smoothEase }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08]"
              >
                Building a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-200 to-amber-300">
                  Drug-Free India
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: smoothEase }}
                className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl"
              >
                Empowering youth aged 13–30 through awareness, education, free counselling and community-driven action.
              </motion.p>

              {/* 3 Call-To-Action Buttons: Distinctive with entrance and hover feedback */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: smoothEase }}
                className="pt-2 sm:pt-4 flex flex-wrap items-center gap-2.5 sm:gap-4"
              >
                <Button
                  to="/programs"
                  variant="accent"
                  size="lg"
                  className="w-full sm:w-auto shadow-xl"
                >
                  <span>Join Our Movement</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  to="/volunteer"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md"
                >
                  <Users className="w-4 h-4 mr-1 text-teal-300" />
                  <span>Become a Volunteer</span>
                </Button>

                <Button
                  to="/donate"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto bg-brand-teal-600 hover:bg-brand-teal-500 text-white border border-teal-400/30"
                >
                  <Heart className="w-4 h-4 mr-1 fill-current text-white group-hover:scale-110 transition-transform" />
                  <span>Donate Now</span>
                </Button>
              </motion.div>

              {/* Compact Trust Highlights: Clean responsive grid with staggered reveal */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="pt-4 sm:pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left"
              >
                <div className="flex items-center gap-2.5 bg-white/5 p-2 sm:p-2.5 rounded-xl border border-white/10 hover:border-amber-400/40 transition-colors">
                  <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                  <div className="text-[11px] sm:text-xs">
                    <div className="font-bold text-white leading-tight">24/7 Helpline</div>
                    <div className="text-slate-400 text-[10px]">Toll-free crisis aid</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 bg-white/5 p-2 sm:p-2.5 rounded-xl border border-white/10 hover:border-teal-400/40 transition-colors">
                  <Lock className="w-4 h-4 text-teal-400 shrink-0" />
                  <div className="text-[11px] sm:text-xs">
                    <div className="font-bold text-white leading-tight">100% Confidential</div>
                    <div className="text-slate-400 text-[10px]">Zero stigma or disclosure</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 bg-white/5 p-2 sm:p-2.5 rounded-xl border border-white/10 hover:border-sky-400/40 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                  <div className="text-[11px] sm:text-xs">
                    <div className="font-bold text-white leading-tight">Registered Society</div>
                    <div className="text-slate-400 text-[10px]">Reg: DRB1/SOR/257</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 bg-white/5 p-2 sm:p-2.5 rounded-xl border border-white/10 hover:border-amber-300/40 transition-colors">
                  <HeartHandshake className="w-4 h-4 text-amber-300 shrink-0" />
                  <div className="text-[11px] sm:text-xs">
                    <div className="font-bold text-white leading-tight">Free Counselling</div>
                    <div className="text-slate-400 text-[10px]">For youth & parents</div>
                  </div>
                </div>
              </motion.div>

            </motion.div>

            {/* Right 5 Columns: Dynamic Layered Visual Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
              className="lg:col-span-5 relative mt-4 lg:mt-0"
            >
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-teal-500/20 via-sky-500/10 to-amber-500/20 rounded-3xl blur-2xl pointer-events-none" />

              {/* Main Image Frame with Luxury Corner Accents */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-brand-navy-900 group">
                <img
                  src="/images/hero-youth-leadership.jpg"
                  alt="Empowered Indian youth standing together for a drug-free India"
                  className="w-full h-56 sm:h-72 md:h-80 lg:h-[430px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                
                {/* Subtle gradient vignette to blend with dark mode */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Card over photo */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-brand-navy-950/85 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/15 flex items-center justify-between gap-3 shadow-xl">
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>Empowering Youth • Ages 13–30</span>
                    </div>
                    <div className="text-xs sm:text-sm font-extrabold text-white">
                      Protect Young Lives. Build a Drug-Free India.
                    </div>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 rounded-xl text-[10px] font-bold bg-brand-teal-500/20 text-teal-300 border border-teal-400/30">
                    Active
                  </span>
                </div>
              </div>

              {/* Floating Decorative Accent Badge on top corner (desktop only) */}
              <FloatingElement
                duration={5}
                distance={6}
                className="hidden sm:flex absolute -top-4 -right-3 bg-white/95 text-brand-navy-950 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200 items-center gap-2 text-xs font-extrabold z-20"
              >
                <ShieldCheck className="w-4 h-4 text-brand-teal-600" />
                <span>Zero Stigma • Total Care</span>
              </FloatingElement>

            </motion.div>

          </div>

        </div>

        {/* HERO BOTTOM EDGE: Creative Responsive Organic Wave SVG Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg
            className="relative block w-full h-8 sm:h-14 md:h-18 lg:h-22 text-white"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,21.3C960,21,1056,43,1152,58.7C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
          </svg>
        </div>

      </section>

      {/* ============================================================== */}
      {/* 2. STATS & VERIFIED FOUNDATIONAL PILLARS (Animated Stagger)    */}
      {/* ============================================================== */}
      <section className="bg-white py-8 sm:py-12 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            <StaggerItem>
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex items-start gap-4 group h-full">
                <div className="w-11 h-11 rounded-xl bg-brand-navy-950 text-white flex items-center justify-center shrink-0 group-hover:bg-brand-teal-600 transition-colors">
                  <ShieldCheck className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <h3 className="font-extrabold text-brand-navy-950 text-base sm:text-lg">Legally Registered & Transparent</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Registered under the Karnataka Societies Registration Act (DRB1/SOR/257/2025-2026), headquarters in Bengaluru.
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex items-start gap-4 group h-full">
                <div className="w-11 h-11 rounded-xl bg-brand-navy-950 text-white flex items-center justify-center shrink-0 group-hover:bg-amber-500 transition-colors">
                  <PhoneCall className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="font-extrabold text-brand-navy-950 text-base sm:text-lg">24/7 Dedicated Assistance</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Providing continuous telephonic guidance at <strong>+91 77779 27742</strong> with certified psychologists and peer advisors.
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex items-start gap-4 group h-full">
                <div className="w-11 h-11 rounded-xl bg-brand-navy-950 text-white flex items-center justify-center shrink-0 group-hover:bg-brand-navy-800 transition-colors">
                  <Users className="w-5 h-5 text-sky-300" />
                </div>
                <div>
                  <h3 className="font-extrabold text-brand-navy-950 text-base sm:text-lg">Youth-Led Movement</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Engaging students, campus ambassadors, educators, and parents across schools and universities nationwide.
                  </p>
                </div>
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. WHO WE ARE: A MOVEMENT, NOT JUST AN NGO (Scroll Reveal)     */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            
            {/* Left Image with organic curvature & smooth reveal */}
            <SlideInLeft className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white relative z-10 group">
                <img
                  src="/images/youth-empowerment.jpg"
                  alt="Young people collaborating for healthy drug-free community"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-brand-teal-500/10 rounded-3xl z-0" />
              <div className="absolute -top-6 -left-6 w-36 h-36 bg-brand-navy-900/5 rounded-full blur-2xl z-0" />
              
              {/* Highlight card floating over image */}
              <FloatingElement
                duration={6}
                distance={6}
                className="absolute -bottom-4 left-4 z-20 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100 max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Zero Stigma. Total Care.</div>
                    <div className="text-[10px] text-slate-500">Dignity and empathy for every individual.</div>
                  </div>
                </div>
              </FloatingElement>
            </SlideInLeft>

            {/* Right Text Content with staggered fade up */}
            <SlideInRight className="space-y-4 sm:space-y-5">
              <div className="space-y-1.5">
                <Badge variant="navy">Who We Are</Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy-950 tracking-tight leading-tight">
                  A Movement, Not Just an NGO
                </h2>
                <p className="text-sm sm:text-base font-semibold text-brand-teal-700">
                  Empowering Youth. Preventing Addiction. Transforming India.
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The <strong className="text-brand-navy-950">Antidote Foundation of India (AFOI)</strong> was born out of an urgent imperative: to safeguard our nation’s most valuable resource — its youth. Between the ages of 13 and 30, young individuals face unprecedented academic pressures, social anxieties, and expanding exposure to synthetic and prescription substances.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We reject punitive stigma and fearful sensationalism. Instead, we combine clinical psychological insight, institutional education, compassionate family dialogue, and student-led leadership to dismantle addiction before it takes root.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our registered society status in Bengaluru provides an accountable framework for working with educators, mental health specialists, civic volunteers, and public health institutions across the country.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Scientifically grounded early intervention
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Confidential parent and youth guidance
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Campus Ambassador leadership network
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Verified public rehabilitation navigation
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button to="/about" variant="primary" size="md">
                  <span>Explore Our Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button to="/volunteer" variant="secondary" size="md">
                  <span>Join as an Ambassador</span>
                </Button>
              </div>

            </SlideInRight>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. OUR MISSION JOURNEY: 5 PILLARS (Staggered Interactive)     */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Approach"
            title="Our Mission Journey"
            subtitle="A structured, compassionate framework spanning early prevention to enduring empowerment."
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {[
              {
                step: '01',
                title: 'Prevention',
                desc: 'Educating youth on neurobiology, peer resistance, and emotional coping before experimentation occurs.',
                icon: ShieldCheck,
              },
              {
                step: '02',
                title: 'Awareness',
                desc: 'School rallies, college assemblies, and multimedia campaigns deconstructing myths around narcotics.',
                icon: BookOpen,
              },
              {
                step: '03',
                title: 'Intervention',
                desc: '24/7 confidential crisis line and family counselling to catch early distress without punitive backlash.',
                icon: PhoneCall,
              },
              {
                step: '04',
                title: 'Rehabilitation',
                desc: 'Connecting individuals and families with certified government and medical de-addiction institutions.',
                icon: HeartHandshake,
              },
              {
                step: '05',
                title: 'Empowerment',
                desc: 'Fostering campus leadership, sports, creative arts, and peer mentoring for long-term sober thriving.',
                icon: Sparkles,
              }
            ].map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <StaggerItem key={pillar.step} className="h-full">
                  <div className="bg-slate-50 hover:bg-slate-100/90 p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group h-full hover:-translate-y-1">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xl sm:text-2xl font-black text-slate-300 group-hover:text-brand-navy-950 transition-colors">
                          {pillar.step}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center text-brand-navy-900 group-hover:bg-brand-navy-950 group-hover:text-white transition-all">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>
                      <h3 className="font-extrabold text-base text-brand-navy-950">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. SIX CORE PROGRAMMES (Staggered Cards with Zoom)            */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Action Framework"
            title="Six Core Prevention & Support Programmes"
            subtitle="Tailored interventions addressing adolescents, families, campuses, workplaces, and public policy."
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {programsData.map((prog) => (
              <StaggerItem key={prog.id} className="h-full">
                <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group h-full hover:-translate-y-1">
                  <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/75 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[10px] font-bold tracking-wide text-teal-300 uppercase">
                        Core Initiative
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white line-clamp-1">
                        {prog.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {prog.shortDescription}
                    </p>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-400 text-[11px]">Target: {prog.targetAudience.split(',')[0]}</span>
                      <Link
                        to={`/programs/${prog.slug}`}
                        className="text-brand-navy-900 group-hover:text-brand-teal-600 inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.2} className="mt-8 sm:mt-10 text-center">
            <Button to="/programs" variant="outline" size="md">
              <span>View Full Programme Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. FIND A REHABILITATION CENTRE STRIP (Scroll Reveal)          */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-brand-navy-950 via-[#0C2340] to-brand-navy-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <SlideInLeft className="space-y-3.5">
              <Badge variant="amber">Public Guidance Service</Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Find a Verified De-Addiction & Rehabilitation Centre
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Navigating recovery options can feel overwhelming. We curate accredited government medical college de-addiction departments, state mission facilities (such as Vimukthi centres), and premier autonomous institutes like NIMHANS to help families find credible, safe medical care.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-1">
                <Button to="/find-rehab-centres" variant="accent" size="md">
                  <span>Search Rehab Directory</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <a
                  href={`tel:${organizationData.contact.helpline}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all hover:scale-102"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ask a Counsellor</span>
                </a>
              </div>
            </SlideInLeft>

            <SlideInRight className="bg-white/10 backdrop-blur-md p-5 sm:p-7 rounded-2xl border border-white/15 space-y-3">
              <h3 className="font-bold text-base text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>Our Directory Standards</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span>Only verified government hospitals and accredited autonomous psychiatric departments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span>Zero commercial affiliations, kickbacks, or sponsored placements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span>Immediate access to 24/7 telephonic assistance for patient guidance.</span>
                </li>
              </ul>
              <div className="pt-2 text-[10px] text-slate-400 border-t border-white/10">
                To submit an accredited public or recognized clinical centre for directory verification, contact our Bengaluru secretariat.
              </div>
            </SlideInRight>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. ACTIVE CAMPAIGNS (Staggered Cards)                         */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Public Action"
            title="Active Grassroots Campaigns"
            subtitle="High-impact initiatives uniting youth, educators, and communities across India."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaignsData.slice(0, 3).map((camp) => (
              <StaggerItem key={camp.id} className="h-full">
                <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group h-full hover:-translate-y-1">
                  <div>
                    <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                      <img
                        src={camp.image}
                        alt={camp.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-navy-950/80 text-teal-300 backdrop-blur-sm border border-white/10">
                          {camp.badge}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-2.5">
                      {camp.regionalTitle && (
                        <div className="text-[11px] font-semibold text-brand-teal-700">
                          {camp.regionalTitle}
                        </div>
                      )}
                      <h3 className="font-extrabold text-base sm:text-lg text-brand-navy-950 group-hover:text-brand-navy-700 transition-colors">
                        {camp.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {camp.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-slate-100 mt-2">
                    <div className="flex items-center justify-between text-xs pt-2.5">
                      <span className="font-semibold text-slate-500 text-[11px]">Status: <strong className="text-teal-700 font-bold">{camp.status}</strong></span>
                      <Link
                        to={`/campaigns/${camp.slug}`}
                        className="font-bold text-brand-navy-900 hover:text-brand-teal-600 inline-flex items-center gap-1 transition-colors"
                      >
                        <span>View Campaign</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.2} className="mt-8 sm:mt-10 text-center">
            <Button to="/campaigns" variant="secondary" size="md">
              <span>View All Campaigns</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. UPCOMING EVENTS & WEBINARS (Staggered Cards)               */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Community Calendar"
            title="Upcoming Workshops & Dialogue Sessions"
            subtitle="Empowering educational webinars and interactive assemblies scheduled for 2026–2027."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {upcomingEvents.map((evt) => (
              <StaggerItem key={evt.id} className="h-full">
                <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between space-y-3.5 h-full hover:-translate-y-1">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <Badge variant="teal">{evt.category}</Badge>
                      <span className="text-[10px] font-semibold text-slate-400">Open Public Registration</span>
                    </div>

                    <h3 className="font-bold text-sm sm:text-base text-brand-navy-950">
                      {evt.title}
                    </h3>

                    <div className="space-y-1 text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-brand-navy-700 shrink-0" />
                        <span>{evt.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-brand-navy-700 shrink-0" />
                        <span>{evt.location}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {evt.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60">
                    <Button to="/contact?subject=Event+Registration" variant="outline" size="sm" fullWidth>
                      <span>Register to Attend</span>
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. HELPLINE BANNER                                            */}
      {/* ============================================================== */}
      <HelplineBanner />

      {/* ============================================================== */}
      {/* 10. VOLUNTEER & DONATE DUAL CALL TO ACTION (Staggered Cards)  */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Volunteer Card */}
            <StaggerItem className="h-full">
              <div className="bg-gradient-to-br from-brand-navy-950 via-brand-navy-900 to-brand-navy-950 text-white rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group border border-white/10 h-full hover:shadow-2xl transition-all">
                <div className="space-y-3.5 relative z-10">
                  <Badge variant="teal">Join The Movement</Badge>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                    Be the Change. Become a Volunteer.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Join our passionate network of Campus Ambassadors, Event Coordinators, Counsellors, and Community Leaders standing up for healthy, substance-free lives.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                      <span>Free workshop training on adolescent psychology & peer leadership</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                      <span>Lead awareness drives in your college or neighbourhood</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 relative z-10">
                  <Button to="/volunteer" variant="accent" size="lg">
                    <span>Sign Up as a Volunteer</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </StaggerItem>

            {/* Donate Card */}
            <StaggerItem className="h-full">
              <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 flex flex-col justify-between shadow-md relative overflow-hidden group h-full hover:shadow-xl transition-all">
                <div className="space-y-3.5 relative z-10">
                  <Badge variant="amber">Support Our Mission</Badge>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-navy-950">
                    Every Contribution Can Protect a Young Life.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Your contribution directly funds student guidance workbooks, free telephonic counselling sessions, school awareness toolkits, and community recovery assistance.
                  </p>
                  <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                    <div className="bg-slate-50 p-2 sm:p-2.5 rounded-xl border border-slate-200/80">
                      <div className="font-extrabold text-brand-navy-950 text-xs sm:text-sm">₹500</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-500">Counselling Session</div>
                    </div>
                    <div className="bg-slate-50 p-2 sm:p-2.5 rounded-xl border border-slate-200/80">
                      <div className="font-extrabold text-brand-navy-950 text-xs sm:text-sm">₹1,000</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-500">Workshop Materials</div>
                    </div>
                    <div className="bg-slate-50 p-2 sm:p-2.5 rounded-xl border border-slate-200/80">
                      <div className="font-extrabold text-brand-navy-950 text-xs sm:text-sm">₹5,000</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-500">School Programme</div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 relative z-10">
                  <Button to="/donate" variant="primary" size="lg">
                    <Heart className="w-4 h-4 fill-current text-white mr-1" />
                    <span>Donate to AFOI</span>
                  </Button>
                </div>
              </div>
            </StaggerItem>

          </StaggerContainer>

          {/* Trust Disclaimer Notice */}
          <FadeUp delay={0.2} className="mt-10 sm:mt-12">
            <TrustDisclaimer />
          </FadeUp>

        </div>
      </section>

    </div>
  );
};
