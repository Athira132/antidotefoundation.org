import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Calendar,
  Share2,
  Users,
  Megaphone,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';
import { campaignsData } from '../data/campaigns';
import { organizationData } from '../data/organization';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/ui/PageHero';
import { HelplineBanner } from '../components/common/HelplineBanner';
import {
  FadeUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem
} from '../components/animations/MotionComponents';

export const CampaignDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const campaign = campaignsData.find((c) => c.slug === slug);

  if (!campaign) {
    return <Navigate to="/campaigns" replace />;
  }

  return (
    <div className="space-y-0">
      
      {/* 1. DISTINCTIVE HERO BANNER */}
      <PageHero
        badge={campaign.badge}
        badgeVariant="teal"
        badgeIcon={Megaphone}
        title={
          <div>
            {campaign.regionalTitle && (
              <div className="text-sm sm:text-base font-semibold text-teal-300 mb-1">
                {campaign.regionalTitle}
              </div>
            )}
            {campaign.title}
          </div>
        }
        subtitle={campaign.summary}
        breadcrumbs={[
          { label: 'Campaigns', href: '/campaigns' },
          { label: campaign.title }
        ]}
        imageSrc={campaign.image}
        imageAlt={campaign.title}
        imageBadgeText={`Status: ${campaign.status}`}
        variant="split"
        actions={
          <>
            <Button to="/volunteer" variant="accent" size="md">
              <span>Volunteer for this Campaign</span>
            </Button>
            <Button to="/campaigns" variant="secondary" size="md" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>All Campaigns</span>
            </Button>
          </>
        }
      />

      {/* 2. Main Campaign Details */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            
            {/* Left 2 Cols: Content & Narrative */}
            <SlideInLeft className="lg:col-span-2 space-y-10">
              
              <div className="rounded-3xl overflow-hidden shadow-elevated border border-slate-200 group">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Full Description */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy-950">
                  Campaign Mission & Scope
                </h2>
                {campaign.description.map((paragraph, index) => (
                  <p key={index} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Objectives List */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
                <h3 className="text-xl font-bold text-brand-navy-950 flex items-center gap-2">
                  <Megaphone className="w-5 h-5 text-teal-600" />
                  <span>Key Actions & Deliverables</span>
                </h3>
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {campaign.objectives.map((h, i) => (
                    <StaggerItem key={i}>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                          {h}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

            </SlideInLeft>

            {/* Right Column: Campaign Metadata & Actions */}
            <SlideInRight className="space-y-6">
              
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
                <h3 className="font-extrabold text-lg text-brand-navy-950">
                  Campaign Details
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-slate-400 block text-[11px] uppercase tracking-wider">
                      Operational Status
                    </span>
                    <span className="font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 inline-block mt-0.5">
                      {campaign.status}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <span className="font-semibold text-slate-400 block text-[11px] uppercase tracking-wider">
                      Regional Scope
                    </span>
                    <span className="text-slate-700">
                      Bengaluru Secretariat coordinating student assemblies, distribution of vernacular literature, and statewide awareness rallies.
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <span className="font-semibold text-slate-400 block text-[11px] uppercase tracking-wider">
                      Target Audience
                    </span>
                    <span className="text-slate-700">
                      Adolescents aged 13–19, university students aged 18–25, parents, and secondary school educators.
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
                  <Button to="/volunteer" variant="accent" size="md" fullWidth>
                    <span>Become a Campaign Volunteer</span>
                  </Button>
                  <Button to="/donate" variant="primary" size="md" fullWidth>
                    <span>Sponsor Campaign Materials</span>
                  </Button>
                </div>
              </div>

              {/* 24/7 Helpline Card */}
              <div className="bg-brand-navy-950 text-white p-6 rounded-3xl space-y-3">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <PhoneCall className="w-4 h-4" />
                  <span>Confidential Support</span>
                </div>
                <h4 className="text-base font-bold">Have Questions About This Campaign?</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Connect with our public engagement team or seek confidential telephonic advice.
                </p>
                <a
                  href={`tel:${organizationData.contact.helpline}`}
                  className="block text-center py-2 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs rounded-xl transition-all"
                >
                  Call {organizationData.contact.helplineDisplay}
                </a>
              </div>

            </SlideInRight>

          </div>
        </div>
      </section>

      {/* Helpline Banner */}
      <HelplineBanner />

    </div>
  );
};
