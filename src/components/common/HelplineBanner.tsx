import React from 'react';
import { PhoneCall, Shield, Lock, HeartHandshake } from 'lucide-react';
import { organizationData } from '../../data/organization';

export const HelplineBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-brand-navy-950 via-brand-navy-900 to-brand-navy-950 text-white py-8 px-4 border-y border-brand-navy-800 relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
        
        <div className="space-y-2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-semibold uppercase tracking-wider border border-amber-400/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Immediate Confidential Crisis Intervention
          </div>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
            Need Guidance or Facing Substance Urges?
          </h2>
          
          <p className="text-sm text-slate-300 max-w-2xl">
            Our 24/7 helpline provides confidential, respectful psychological first aid. We do not judge, lecture, or report callers.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-slate-300">
            <span className="inline-flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-teal-400" />
              100% Confidential
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-teal-400" />
              Free Public Service
            </span>
            <span className="inline-flex items-center gap-1.5">
              <HeartHandshake className="w-3.5 h-3.5 text-teal-400" />
              Compassionate Specialists
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          <a
            href={`tel:${organizationData.contact.helpline}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-base rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 group"
          >
            <PhoneCall className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Call {organizationData.contact.helplineDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
