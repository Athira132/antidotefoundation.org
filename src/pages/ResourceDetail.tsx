import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Download,
  Share2,
  BookOpen,
  PhoneCall,
  HeartHandshake
} from 'lucide-react';
import { resourcesData } from '../data/resources';
import { organizationData } from '../data/organization';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { HelplineBanner } from '../components/common/HelplineBanner';

export const ResourceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const resource = resourcesData.find((r) => r.slug === slug);

  if (!resource) {
    return <Navigate to="/resources" replace />;
  }

  return (
    <div className="space-y-0">
      
      {/* Hero Header */}
      <section className="bg-brand-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-xs font-semibold text-teal-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Resources</span>
          </Link>

          <div className="max-w-4xl space-y-3">
            <Badge variant="teal">{resource.tagline}</Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {resource.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              {resource.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-10">
              
              {resource.image && (
                <div className="rounded-3xl overflow-hidden shadow-elevated border border-slate-200">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                </div>
              )}

              {/* Warning Signs */}
              {resource.warningSigns && (
                <div className="bg-rose-50/50 p-6 sm:p-8 rounded-3xl border border-rose-200 space-y-4">
                  <div className="flex items-center gap-2 text-rose-800 font-bold text-lg">
                    <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
                    <span>Identifiable Indicators & Warning Signals</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    {resource.warningSigns.map((w, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2" />
                        <span className="leading-relaxed">{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Actionable Steps or Guidance */}
              {(resource.actionableSteps || resource.guidancePoints) && (
                <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
                  <div className="flex items-center gap-2 text-brand-navy-950 font-bold text-lg">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                    <span>Actionable Recommendations & Protocol</span>
                  </div>
                  <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                    {(resource.actionableSteps || resource.guidancePoints)?.map((step, idx) => (
                      <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                        <span className="leading-relaxed font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {resource.takeawayQuote && (
                <div className="p-6 rounded-2xl bg-brand-navy-900 text-white text-sm sm:text-base font-bold italic leading-relaxed text-center">
                  "{resource.takeawayQuote}"
                </div>
              )}

            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-5 shadow-subtle sticky top-28">
                <Badge variant="teal">Need Help?</Badge>
                <h3 className="text-xl font-bold text-brand-navy-950">
                  Speak to a Counsellor
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Have a specific question about an adolescent or need guidance navigating a loved one's situation?
                </p>

                <div className="space-y-3">
                  <a
                    href={`tel:${organizationData.contact.helpline}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow transition-all"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Call {organizationData.contact.helplineDisplay}</span>
                  </a>

                  <Button to="/find-rehab-centres" variant="secondary" size="md" fullWidth>
                    <span>Find Rehab Centres</span>
                  </Button>
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

