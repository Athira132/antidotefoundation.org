import React from 'react';
import { PhoneCall, ShieldCheck, Clock, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { organizationData } from '../../data/organization';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-brand-navy-950 text-slate-200 text-xs py-2 px-4 border-b border-brand-navy-800/60 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: 24/7 Helpline and Reg */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1">
          <a
            href={`tel:${organizationData.contact.helpline}`}
            className="inline-flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 transition-colors group"
            title="Confidential 24/7 Helpline"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <PhoneCall className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
            <span>24/7 Helpline: {organizationData.contact.helplineDisplay}</span>
            <span className="text-[10px] uppercase tracking-wider bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded font-semibold ml-1">
              Free & Confidential
            </span>
          </a>

          <span className="hidden sm:inline text-slate-600">|</span>

          <div className="hidden sm:flex items-center gap-1 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>Reg No: <strong className="text-slate-300 font-medium">{organizationData.registrationNumber}</strong></span>
          </div>
        </div>

        {/* Right: Hours & Quick Actions */}
        <div className="flex items-center gap-4 text-slate-400">
          <div className="hidden lg:flex items-center gap-1 text-[11px]">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>Bengaluru HQ: {organizationData.contact.officeHours}</span>
          </div>

          <div className="flex items-center gap-3 font-medium">
            <Link
              to="/volunteer"
              className="text-slate-300 hover:text-teal-300 transition-colors inline-flex items-center gap-1"
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Volunteer</span>
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              to="/donate"
              className="text-amber-400 hover:text-amber-300 transition-colors font-semibold"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

