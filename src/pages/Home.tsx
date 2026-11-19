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
  GraduationCap,
  HeartHandshake,
  Building2,
  FileSearch,
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

export const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-brand-navy-950 text-white">
        {/* Background Image with Cinematic Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-youth-leadership.jpg"
            alt="Empowered Indian youth standing together for a drug-free India"
            className="w-full h-full object-cover object-center scale-105 transform animate-fade-in"
            loading="eager"
          />
          {/* Multi-layered cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/80 to-brand-navy-950/40" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-brand-navy-950/40 to-brand-navy-950/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
          
          {/* Top Pill / Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wide text-teal-300 mb-6"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Protect Young Lives • Build a Drug-Free India</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.12]"
          >
            Building a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-200 to-amber-300">Drug-Free India</span>
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-slate-200 max-w-3xl leading-relaxed font-light"
          >
            Empowering youth aged 13–30 through awareness, education, free counselling and community-driven action.
          </motion.p>

          {/* 3 Call-To-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Button
              to="/programs"
              variant="accent"
              size="lg"
              className="w-full sm:w-auto"
            >
              <span>Join Our Movement</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              to="/volunteer"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20"
            >
              <span>Become a Volunteer</span>
              <Users className="w-4 h-4" />
            </Button>

            <Button
              to="/donate"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto bg-brand-teal-600 hover:bg-brand-teal-500 border border-teal-400/30 text-white"
            >
              <Heart className="w-4 h-4 fill-current text-white" />
              <span>Donate Now</span>
            </Button>
          </motion.div>

          {/* Quick Trust Highlights under Hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl text-left"
          >
            <div className="flex items-center gap-3">
              <PhoneCall className="w-5 h-5 text-amber-400 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-white">24/7 Helpline</div>
                <div className="text-slate-400">Toll-free crisis aid</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-teal-400 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-white">100% Confidential</div>
                <div className="text-slate-400">Zero stigma or disclosure</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-white">Registered Society</div>
                <div className="text-slate-400">Reg: DRB1/SOR/257</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <HeartHandshake className="w-5 h-5 text-amber-300 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-white">Free Counselling</div>
                <div className="text-slate-400">For youth & parents</div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* 2. STATS & VERIFIED FOUNDATIONAL PILLARS */}
      <section className="bg-white py-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-subtle flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-navy-900 text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <h3 className="font-extrabold text-brand-navy-950 text-lg">Legally Registered & Transparent</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Registered under the Karnataka Societies Registration Act (DRB1/SOR/257/2025-2026), headquarters in Bengaluru.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-subtle flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-navy-900 text-white flex items-center justify-center shrink-0">
                <PhoneCall className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="font-extrabold text-brand-navy-950 text-lg">24/7 Dedicated Assistance</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Providing continuous telephonic guidance at <strong>+91 77779 27742</strong> with certified psychologists and peer advisors.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-subtle flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-navy-900 text-white flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <h3 className="font-extrabold text-brand-navy-950 text-lg">Youth-Led Movement</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Engaging students, campus ambassadors, educators, and parents across schools and universities nationwide.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. WHO WE ARE: A MOVEMENT, NOT JUST AN NGO */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Image with layered styling */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10">
                <img
                  src="/images/youth-empowerment.jpg"
                  alt="Young people collaborating for healthy drug-free community"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative background shape */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-brand-teal-500/10 rounded-3xl z-0" />
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-brand-navy-900/5 rounded-full blur-2xl z-0" />
              
              {/* Highlight card floating over image */}
              <div className="absolute -bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Zero Stigma. Total Care.</div>
                    <div className="text-[11px] text-slate-500">Dignity and empathy for every individual.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge variant="navy">Who We Are</Badge>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-950 tracking-tight leading-tight">
                  A Movement, Not Just an NGO
                </h2>
                <p className="text-base sm:text-lg font-medium text-brand-teal-700">
                  Empowering Youth. Preventing Addiction. Transforming India.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                The <strong className="text-brand-navy-950">Antidote Foundation of India (AFOI)</strong> was born out of an urgent imperative: to safeguard our nation’s most valuable resource — its youth. Between the ages of 13 and 30, young individuals face unprecedented academic pressures, social anxieties, and expanding exposure to synthetic and prescription substances.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We reject punitive stigma and fearful sensationalism. Instead, we combine clinical psychological insight, institutional education, compassionate family dialogue, and student-led leadership to dismantle addiction before it takes root.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    Scientifically grounded early intervention
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    Confidential parent and youth guidance
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    Campus Ambassador leadership network
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    Verified public rehabilitation navigation
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button to="/about" variant="primary" size="md">
                  <span>Explore Our Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button to="/volunteer" variant="secondary" size="md">
                  <span>Join as an Ambassador</span>
                </Button>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* 4. OUR MISSION JOURNEY: 5 PILLARS */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Approach"
            title="Our Mission Journey"
            subtitle="A structured, compassionate framework spanning early prevention to enduring empowerment."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {[
              {
                step: '01',
                title: 'Prevention',
                desc: 'Educating youth on neurobiology, peer resistance, and emotional coping before experimentation occurs.',
                icon: ShieldCheck,
                color: 'teal'
              },
              {
                step: '02',
                title: 'Awareness',
                desc: 'School rallies, college assemblies, and multimedia campaigns deconstructing myths around narcotics.',
                icon: BookOpen,
                color: 'sky'
              },
              {
                step: '03',
                title: 'Intervention',
                desc: '24/7 confidential crisis line and family counselling to catch early distress without punitive backlash.',
                icon: PhoneCall,
                color: 'amber'
              },
              {
                step: '04',
                title: 'Rehabilitation',
                desc: 'Connecting individuals and families with certified government and medical de-addiction institutions.',
                icon: HeartHandshake,
                color: 'rose'
              },
              {
                step: '05',
                title: 'Empowerment',
                desc: 'Fostering campus leadership, sports, creative arts, and peer mentoring for long-term sober thriving.',
                icon: Sparkles,
                color: 'navy'
              }
            ].map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.step}
                  className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-slate-300 group-hover:text-brand-navy-900 transition-colors">
                        {pillar.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-brand-navy-900 group-hover:bg-brand-navy-900 group-hover:text-white transition-all">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-extrabold text-lg text-brand-navy-950">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* 5. SIX CORE PROGRAMMES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Action Framework"
            title="Six Core Prevention & Support Programmes"
            subtitle="Tailored interventions addressing adolescents, families, campuses, workplaces, and public policy."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programsData.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/70 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-semibold tracking-wide text-teal-300 uppercase">
                      Core Initiative
                    </span>
                    <h3 className="text-lg font-bold text-white line-clamp-1">
                      {prog.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {prog.shortDescription}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-400">Target: {prog.targetAudience.split(',')[0]}</span>
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
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/programs" variant="outline" size="md">
              <span>View Full Programme Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>


      {/* 6. FIND A REHABILITATION CENTRE STRIP */}
      <section className="py-16 bg-gradient-to-br from-brand-navy-950 via-brand-navy-900 to-brand-navy-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-4">
              <Badge variant="amber">Public Guidance Service</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Find a Verified De-Addiction & Rehabilitation Centre
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Navigating recovery options can feel overwhelming. We curate accredited government medical college de-addiction departments, state mission facilities (such as Vimukthi centres), and premier autonomous institutes like NIMHANS to help families find credible, safe medical care.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Button to="/find-rehab-centres" variant="accent" size="md">
                  <span>Search Rehab Directory</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <a
                  href={`tel:${organizationData.contact.helpline}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Ask a Counsellor</span>
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/15 space-y-4">
              <h3 className="font-bold text-lg text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-400" />
                <span>Our Directory Standards</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Only verified government hospitals and accredited autonomous psychiatric departments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Zero commercial affiliations, kickbacks, or sponsored placements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Immediate access to 24/7 telephonic assistance for patient guidance.</span>
                </li>
              </ul>
              <div className="pt-2 text-[11px] text-slate-400">
                To submit an accredited public or recognized clinical centre for directory verification, contact our Bengaluru secretariat.
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 7. ACTIVE CAMPAIGNS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Public Action"
            title="Active Grassroots Campaigns"
            subtitle="High-impact initiatives uniting youth, educators, and communities across India."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaignsData.slice(0, 3).map((camp) => (
              <div
                key={camp.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={camp.image}
                      alt={camp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-brand-navy-950/80 text-teal-300 backdrop-blur-sm border border-white/10">
                        {camp.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    {camp.regionalTitle && (
                      <div className="text-xs font-semibold text-brand-teal-700">
                        {camp.regionalTitle}
                      </div>
                    )}
                    <h3 className="font-extrabold text-lg text-brand-navy-950 group-hover:text-brand-navy-700 transition-colors">
                      {camp.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {camp.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                  <div className="flex items-center justify-between text-xs pt-3">
                    <span className="font-semibold text-slate-500">Status: <strong className="text-teal-700 font-bold">{camp.status}</strong></span>
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
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/campaigns" variant="secondary" size="md">
              <span>View All Campaigns</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>


      {/* 8. UPCOMING EVENTS & WEBINARS */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Community Calendar"
            title="Upcoming Workshops & Dialogue Sessions"
            subtitle="Empowering educational webinars and interactive assemblies scheduled for 2026–2027."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 shadow-subtle hover:border-slate-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="teal">{evt.category}</Badge>
                    <span className="text-[11px] font-semibold text-slate-400">Open Public Registration</span>
                  </div>

                  <h3 className="font-bold text-base text-brand-navy-950">
                    {evt.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-brand-navy-700 shrink-0" />
                      <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-brand-navy-700 shrink-0" />
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
            ))}
          </div>
        </div>
      </section>


      {/* 9. HELPLINE BANNER */}
      <HelplineBanner />


      {/* 10. VOLUNTEER & DONATE DUAL CALL TO ACTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Volunteer Card */}
            <div className="bg-gradient-to-br from-brand-navy-900 to-brand-navy-950 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group">
              <div className="space-y-4 relative z-10">
                <Badge variant="teal">Join The Movement</Badge>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Be the Change. Become a Volunteer.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Join our passionate network of Campus Ambassadors, Event Coordinators, Counsellors, and Community Leaders standing up for healthy, substance-free lives.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    <span>Free workshop training on adolescent psychology & peer leadership</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    <span>Lead awareness drives in your college or neighbourhood</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 relative z-10">
                <Button to="/volunteer" variant="accent" size="lg">
                  <span>Sign Up as a Volunteer</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Donate Card */}
            <div className="bg-gradient-to-br from-white to-slate-50 text-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 flex flex-col justify-between shadow-elevated relative overflow-hidden group">
              <div className="space-y-4 relative z-10">
                <Badge variant="amber">Support Our Mission</Badge>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy-950">
                  Every Contribution Can Protect a Young Life.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Your contribution directly funds student guidance workbooks, free telephonic counselling sessions, school awareness toolkits, and community recovery assistance.
                </p>
                <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                  <div className="bg-slate-100 p-2.5 rounded-xl border border-slate-200">
                    <div className="font-extrabold text-brand-navy-950 text-sm">₹500</div>
                    <div className="text-[10px] text-slate-500">Counselling Session</div>
                  </div>
                  <div className="bg-slate-100 p-2.5 rounded-xl border border-slate-200">
                    <div className="font-extrabold text-brand-navy-950 text-sm">₹1,000</div>
                    <div className="text-[10px] text-slate-500">Workshop Materials</div>
                  </div>
                  <div className="bg-slate-100 p-2.5 rounded-xl border border-slate-200">
                    <div className="font-extrabold text-brand-navy-950 text-sm">₹5,000</div>
                    <div className="text-[10px] text-slate-500">School Programme</div>
                  </div>
                </div>
              </div>

              <div className="pt-8 relative z-10">
                <Button to="/donate" variant="primary" size="lg">
                  <Heart className="w-4 h-4 fill-current text-white" />
                  <span>Donate to AFOI</span>
                </Button>
              </div>
            </div>

          </div>

          {/* Trust Disclaimer Notice */}
          <div className="mt-12">
            <TrustDisclaimer />
          </div>

        </div>
      </section>

    </div>
  );
};

