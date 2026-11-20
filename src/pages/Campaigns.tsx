import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import { PageHero } from '../components/ui/PageHero';
import { HelplineBanner } from '../components/common/HelplineBanner';
import { SEO } from '../components/common/SEO';
import {
  FadeUp,
  StaggerContainer,
  StaggerItem
} from '../components/animations/MotionComponents';

export const Campaigns: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Active' | 'Ongoing'>('All');

  const filteredCampaigns = filter === 'All' 
    ? campaignsData 
    : campaignsData.filter(c => c.status === filter);

  return (
    <div className="space-y-0">
      <SEO
        title="Anti-Drug Awareness Campaigns in India | AFOI"
        description="Explore national and community-level anti-drug campaigns by Antidote Foundation of India promoting a drug-free generation."
        canonicalPath="/campaigns"
        keywords="Anti-drug campaigns in India, Drug-free India campaign, Substance abuse awareness campaigns, Youth anti-drug rallies India, AFOI campaigns"
        breadcrumbs={[{ name: 'Campaigns', path: '/campaigns' }]}
      />
      
      {/* 1. DISTINCTIVE HERO BANNER (Desktop: Full background; Mobile: Photo first) */}
      <PageHero
        badge="Grassroots Public Action"
        badgeVariant="teal"
        badgeIcon={Megaphone}
        title="Our Public Campaigns"
        subtitle="From regional campus assemblies to high-visibility public drives, our campaigns unite youth, schools, parents, and civic leaders to defend young lives."
        breadcrumbs={[{ label: 'Campaigns' }]}
        imageSrc="/images/campaign-awareness.jpg"
        imageAlt="Antidote Foundation public anti-drug campaigns"
        imageBadgeText="Grassroots Action & Public Assemblies"
        variant="background"
        actions={
          <div className="flex items-center justify-center gap-2 pt-2">
            {(['All', 'Active', 'Ongoing'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === status
                    ? 'bg-brand-teal-500 text-slate-950 shadow-md scale-105'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                {status === 'All' ? 'All Campaigns' : `${status} Campaigns`}
              </button>
            ))}
          </div>
        }
      />

      {/* 2. Campaigns Listing (Staggered Cards) */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCampaigns.map((camp) => (
              <StaggerItem key={camp.id} className="h-full">
                <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-subtle hover:shadow-xl hover:-translate-y-1.5 transition-all flex flex-col justify-between group h-full">
                  <div>
                    {/* Image Banner */}
                    <div className="relative h-64 overflow-hidden bg-slate-100">
                      <img
                        src={camp.image}
                        alt={camp.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
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

                    {/* Content */}
                    <div className="p-6 sm:p-8 space-y-4">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {camp.summary}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <div className="text-xs font-bold text-brand-navy-950">
                          Active Initiatives & Milestones:
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {camp.objectives.map((h, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="p-6 sm:p-8 pt-0">
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-400">
                        AFOI Flagship Campaign
                      </span>
                      <Link
                        to={`/campaigns/${camp.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy-900 group-hover:text-brand-teal-600 transition-colors"
                      >
                        <span>Read Full Strategy</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>

                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Volunteer CTA Strip */}
          <FadeUp delay={0.2} className="mt-12 bg-brand-navy-900 text-white p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white">
                Want to Bring an AFOI Campaign to Your City or College?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Join our regional volunteer chapters to organize student rallies, distribution drives, and community dialogues.
              </p>
            </div>
            <Button to="/volunteer" variant="accent" size="md">
              <span>Sign Up to Lead a Drive</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </FadeUp>

        </div>
      </section>

      {/* Helpline Banner */}
      <HelplineBanner />

    </div>
  );
};
