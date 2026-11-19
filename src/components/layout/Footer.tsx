import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, MapPin, Clock, ShieldCheck, Heart, Instagram, Youtube, Facebook, ArrowUpRight, AlertCircle, Sparkles } from 'lucide-react';
import { organizationData } from '../../data/organization';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy-950 text-slate-300 pt-16 pb-12 border-t border-brand-navy-900 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-brand-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-navy-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Emergency / Helpline Strip */}
        <div className="bg-gradient-to-r from-brand-navy-900 via-brand-navy-900 to-brand-navy-800/90 rounded-3xl p-6 sm:p-8 mb-16 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs tracking-wider uppercase">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
              24/7 Confidential Assistance & Psychological Support
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Someone you love needs help? You are never alone.
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
              Connect with our trained counsellors for confidential, non-judgemental psychological first aid and guided rehabilitation navigation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={`tel:${organizationData.contact.helpline}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call {organizationData.contact.helplineDisplay}</span>
            </a>

            <Link
              to="/find-rehab-centres"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm rounded-xl border border-white/15 transition-colors"
            >
              <span>Find Centres</span>
              <ArrowUpRight className="w-4 h-4 text-teal-400" />
            </Link>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-brand-navy-800">
          
          {/* Col 1 & 2: Brand Identity with Transparent Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block hover:opacity-90 transition-opacity">
              <div className="relative h-10 sm:h-12 w-auto flex items-center">
                <img
                  src="/logo-new.png"
                  alt="Antidote Foundation of India"
                  className="h-full w-auto object-contain max-w-[200px] sm:max-w-[240px]"
                  width="863"
                  height="289"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              <strong className="text-white font-semibold">{organizationData.name}</strong> is a registered non-profit society dedicated to youth empowerment, addiction prevention, free confidential counselling, and community action to build a drug-free India.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Society Reg. No: <strong className="text-slate-200">{organizationData.registrationNumber}</strong></span>
              </div>
              <div className="text-[11px] text-slate-400">
                Registered under the Karnataka Societies Registration Act.
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                Official Social Channels
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={organizationData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-brand-navy-900 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-brand-navy-800"
                  aria-label="AFOI Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={organizationData.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-brand-navy-900 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-brand-navy-800"
                  aria-label="AFOI YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={organizationData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-brand-navy-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-brand-navy-800"
                  aria-label="AFOI Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Key Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-teal-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-teal-300 transition-colors">About Our Movement</Link>
              </li>
              <li>
                <Link to="/programs-events" className="text-slate-400 hover:text-teal-300 transition-colors">Programs & Events</Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-teal-300 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/campaigns" className="text-slate-400 hover:text-teal-300 transition-colors">Active Campaigns</Link>
              </li>
              <li>
                <Link to="/find-rehab-centres" className="text-slate-400 hover:text-teal-300 transition-colors">Find Rehab Centres</Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-400 hover:text-teal-300 transition-colors">Educational Resources</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-teal-300 transition-colors">Visual Gallery</Link>
              </li>
              <li>
                <Link to="/news" className="text-slate-400 hover:text-teal-300 transition-colors">News & Press Updates</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Involvement */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Involvement
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/volunteer" className="text-slate-400 hover:text-teal-300 transition-colors">Become a Volunteer</Link>
              </li>
              <li>
                <Link to="/donate" className="text-slate-400 hover:text-amber-400 transition-colors">Donate & Support</Link>
              </li>
              <li>
                <Link to="/campaigns/anti-drug-substance-abuse-awareness" className="text-slate-400 hover:text-teal-300 transition-colors">Anti-Drug Campaign (ലഹരിവിരുദ്ധ)</Link>
              </li>
              <li>
                <Link to="/resources#students" className="text-slate-400 hover:text-teal-300 transition-colors">Student Safety Guide</Link>
              </li>
              <li>
                <Link to="/resources#parents" className="text-slate-400 hover:text-teal-300 transition-colors">Parent Advisory Guide</Link>
              </li>
              <li>
                <Link to="/resources#teachers" className="text-slate-400 hover:text-teal-300 transition-colors">Educator Toolkit</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-slate-400 hover:text-teal-300 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="text-slate-400 hover:text-teal-300 transition-colors">Terms of Use</Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Registered Office Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {organizationData.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Office: {organizationData.contact.officeHours}</span>
              </div>

              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Helpline: <a href={`tel:${organizationData.contact.helpline}`} className="text-amber-400 font-bold hover:underline">{organizationData.contact.helplineDisplay}</a></span>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 border-t border-brand-navy-900">
                Email: Official email domain setup currently in progress. Please use the <Link to="/contact" className="text-teal-400 hover:underline">contact form</Link> or phone helpline.
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer Strip */}
        <div className="py-6 border-b border-brand-navy-800 text-xs text-slate-400 leading-relaxed flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-300">Public Health & Medical Disclaimer:</strong> Antidote Foundation of India provides educational awareness, preventative mentoring, family guidance, and public referral navigation. Our resources and helpline do not constitute medical diagnosis, hospital casualty admission, or formal psychiatric prescriptions. In the event of acute clinical overdose, medical distress, or psychiatric emergencies, immediately call national emergency services at <strong>112</strong> or transport the individual to the nearest government or accredited emergency medical facility.
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Antidote Foundation of India. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-of-use" className="hover:text-slate-300 transition-colors">Terms of Use</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
