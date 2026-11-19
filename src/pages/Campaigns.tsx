import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Megaphone,
  MapPin,
  Target,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  Users
} from 'lucide-react';
import { campaignsData } from '../data/campaigns';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { HelplineBanner } from '../components/common/HelplineBanner';

export const Campaigns: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Active' | 'Ongoing'>('All');

  const filteredCampaigns = filter === 'All' 
    ? campaignsData 
    : campaignsData.filter(c => c.status === filter);

  return (
    <div className="space-y-0">
      
      {/* Hero Header */}
      <section className="bg-brand-navy-950 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto relative z-10">
          <Badge variant="teal" className="mb-4">Grassroots Public Action</Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Our Public Campaigns
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            From regional campus assemblies to high-visibility public drives, our campaigns unite youth, schools, parents, and civic leaders to defend young lives.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {(['All', 'Active', 'Ongoing'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === status
                    ? 'bg-brand-teal-500 text-slate-950 shadow-md'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                {status === 'All' ? 'All Campaigns' : `${status} Campaigns`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Campaigns Listing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCampaigns.map((camp) => (
              <div
                key={camp.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image Banner */}
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <img
                      src={camp.image}
                      alt={camp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-navy-950/90 text-teal-300 backdrop-blur-sm border border-white/10">
                        {camp.badge}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500 text-slate-950 shadow">
                        {camp.status}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      {camp.regionalTitle && (
                        <div className="text-xs font-semibold text-teal-300">
                          {camp.regionalTitle}
                        </div>
                      )}
                      <h3 className="text-xl sm:text-2xl font-bold text-white line-clamp-1">
                        {camp.title}
                      </h3>
                    </div>
                  </div>

                  {/* Summary & Objectives */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {camp.summary}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Campaign Objectives:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {camp.objectives.slice(0, 3).map((obj, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      <span className="text-[11px] text-slate-400 font-semibold mr-1">Locations:</span>
                      {camp.targetLocations.slice(0, 4).map((loc) => (
                        <span key={loc} className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="p-6 sm:p-8 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <Link
                      to={`/campaigns/${camp.slug}`}
                      className="text-xs font-bold text-brand-navy-900 group-hover:text-brand-teal-600 inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Read Full Brief & Outcomes</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>

                    <Button to={camp.ctaLink} variant="accent" size="sm">
                      <span>{camp.callToAction}</span>
                    </Button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Helpline Banner */}
      <HelplineBanner />

    </div>
  );
};
