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
import { PageHero } from '../components/ui/PageHero';
import { HelplineBanner } from '../components/common/HelplineBanner';
import { SEO } from '../components/common/SEO';
import {
  FadeUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem
} from '../components/animations/MotionComponents';

export const ResourceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const resource = resourcesData.find((r) => r.slug === slug);

  if (!resource) {
    return <Navigate to="/resources" replace />;
  }

  return (
    <div className="space-y-0">
      <SEO
        title={`${resource.title} | Antidote Foundation of India`}
        description={resource.summary}
        canonicalPath={`/resources/${resource.slug}`}
        keywords={`${resource.title}, Substance abuse awareness and education, Drug prevention resources, AFOI educational guides`}
        breadcrumbs={[
          { name: 'Resources', path: '/resources' },
          { name: resource.title, path: `/resources/${resource.slug}` }
        ]}
      />
      
      {/* 1. DISTINCTIVE HERO BANNER */}
      <PageHero
        badge={resource.tagline}
        badgeVariant="teal"
        badgeIcon={BookOpen}
        title={resource.title}
        subtitle={resource.summary}
        breadcrumbs={[
          { label: 'Resources', href: '/resources' },
          { label: resource.title }
        ]}
        imageSrc={resource.image}
        imageAlt={resource.title}
        variant="split"
        actions={
          <>
            <Button to="/resources" variant="secondary" size="md" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>All Resources</span>
            </Button>
            <a
              href={`tel:${organizationData.contact.helpline}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Ask a Specialist</span>
            </a>
          </>
        }
      />

      {/* 2. Main Content */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            
            <SlideInLeft className="lg:col-span-2 space-y-10">
              
              {resource.image && (
                <div className="rounded-3xl overflow-hidden shadow-elevated border border-slate-200 group">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
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
                  <StaggerContainer className="space-y-3 text-xs sm:text-sm text-slate-700">
                    {(resource.actionableSteps || resource.guidancePoints)?.map((step, idx) => (
                      <StaggerItem key={idx}>
                        <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                          <span className="leading-relaxed font-medium">{step}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              )}

            </SlideInLeft>

            {/* Sidebar */}
            <SlideInRight className="space-y-6">
              
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
                <h3 className="font-extrabold text-base text-brand-navy-950">
                  Resource Quick Facts
                </h3>
                <div className="space-y-2.5 text-xs">
                  <div>
                    <span className="font-semibold text-slate-400 block text-[10px] uppercase">Category</span>
                    <span className="font-bold text-brand-navy-950 capitalize">{resource.category}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <span className="font-semibold text-slate-400 block text-[10px] uppercase">Format</span>
                    <span className="text-slate-700">Clinical practice guide / educational overview</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <span className="font-semibold text-slate-400 block text-[10px] uppercase">Issued By</span>
                    <span className="text-slate-700">Antidote Foundation of India Guidance Desk</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Button to="/contact?subject=Resource+Toolkit+Order" variant="primary" size="sm" fullWidth>
                    <span>Request Physical Print Copies</span>
                  </Button>
                </div>
              </div>

              {/* 24/7 Helpline Card */}
              <div className="bg-brand-navy-950 text-white p-6 rounded-3xl space-y-3">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <PhoneCall className="w-4 h-4" />
                  <span>24/7 Helpline</span>
                </div>
                <h4 className="text-base font-bold">Need Personal Guidance?</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Call our toll-free counselling team for private advice on any substance questions.
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
