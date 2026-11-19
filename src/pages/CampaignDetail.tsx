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
import { HelplineBanner } from '../components/common/HelplineBanner';

export const CampaignDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const campaign = campaignsData.find((c) => c.slug === slug);

  if (!campaign) {
    return <Navigate to="/campaigns" replace />;
  }

  return (
    <div className="space-y-0">
      
      {/* Hero Header */}
      <section className="bg-brand-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <Link
            to="/campaigns"
            className="inline-flex items-center gap-2 text-xs font-semibold text-teal-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Campaigns</span>
          </Link>

          <div className="max-w-4xl space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="teal">{campaign.badge}</Badge>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500 text-slate-950">
                {campaign.status}
              </span>
            </div>

            {campaign.regionalTitle && (
              <div className="text-sm sm:text-base font-semibold text-teal-300">
                {campaign.regionalTitle}
              </div>
            )}

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {campaign.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              {campaign.summary}
            </p>
          </div>

        </div>
      </section>

      {/* Main Campaign Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left 2 Cols: Content & Narrative */}
            <div className="lg:col-span-2 space-y-10">
              
              <div className="rounded-3xl overflow-hidden shadow-elevated border border-slate-200">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-80 sm:h-96 object-cover"
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
                  <span>Strategic Campaign Deliverables</span>
                </h3>
                <div className="space-y-3 pt-2">
                  {campaign.objectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {obj}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Locations */}
              <div className="p-6 rounded-2xl bg-brand-navy-50 border border-brand-navy-100 space-y-2">
                <div className="flex items-center gap-2 text-brand-navy-950 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span>Active & Planned Operational Locations</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {campaign.targetLocations.map((loc) => (
                    <span key={loc} className="text-xs font-semibold bg-white text-brand-navy-900 px-3 py-1 rounded-lg border border-slate-200 shadow-xs">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar: Volunteer & Help */}
            <div className="space-y-6">
              
              <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6 shadow-subtle sticky top-28">
                <div className="space-y-2">
                  <Badge variant="teal">Take Action</Badge>
                  <h3 className="text-xl font-extrabold text-brand-navy-950">
                    Support this Campaign
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Become a campus volunteer, request a workshop at your institution, or contribute to awareness toolkits.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    to="/volunteer"
                    variant="accent"
                    size="md"
                    fullWidth
                  >
                    <span>Volunteer for this Campaign</span>
                  </Button>

                  <Button
                    to={`/contact?subject=Campaign+Partnership+${encodeURIComponent(campaign.title)}`}
                    variant="secondary"
                    size="md"
                    fullWidth
                  >
                    <span>Partner with AFOI</span>
                  </Button>

                  <Button
                    to="/donate"
                    variant="primary"
                    size="md"
                    fullWidth
                  >
                    <span>Donate to Campaign Funds</span>
                  </Button>
                </div>

                <div className="pt-6 border-t border-slate-200 space-y-2 text-xs text-slate-500">
                  <div className="font-bold text-slate-700">Need Immediate Help?</div>
                  <p>Our 24/7 confidential helpline is open for youth and family members needing immediate guidance.</p>
                  <a
                    href={`tel:${organizationData.contact.helpline}`}
                    className="inline-flex items-center gap-1.5 font-bold text-amber-600 hover:text-amber-700"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>{organizationData.contact.helplineDisplay}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Helpline Banner */}
      <HelplineBanner />

    </div>
  );
};
