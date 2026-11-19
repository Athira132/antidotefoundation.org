import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  Users,
  Target,
  Sparkles,
  PhoneCall,
  Calendar,
  Share2,
  BookOpen
} from 'lucide-react';
import { programsData } from '../data/programs';
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

export const ProgramDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = programsData.find((p) => p.slug === slug);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  return (
    <div className="space-y-0">
      
      {/* 1. DISTINCTIVE HERO BANNER */}
      <PageHero
        badge={program.tagline}
        badgeVariant="teal"
        badgeIcon={BookOpen}
        title={program.title}
        subtitle={program.shortDescription}
        breadcrumbs={[
          { label: 'Programs & Events', href: '/programs' },
          { label: program.title }
        ]}
        imageSrc={program.image}
        imageAlt={program.title}
        imageBadgeText={`Target: ${program.targetAudience.split(',')[0]}`}
        variant="split"
        actions={
          <>
            <Button to="/contact?subject=Program+Partnership" variant="accent" size="md">
              <span>Partner on this Initiative</span>
            </Button>
            <Button to="/programs" variant="secondary" size="md" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>All Programs</span>
            </Button>
          </>
        }
      />

      {/* 2. Main Content Area */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            
            {/* Left 2 Cols: Deep Program Description & Objectives */}
            <SlideInLeft className="lg:col-span-2 space-y-10">
              
              {/* Feature Image with subtle zoom */}
              <div className="rounded-3xl overflow-hidden shadow-elevated border border-slate-200 group">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-72 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Text Description */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy-950">
                  Detailed Program Architecture
                </h2>
                {program.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Objectives */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
                <h3 className="text-xl font-bold text-brand-navy-950 flex items-center gap-2">
                  <Target className="w-5 h-5 text-teal-600" />
                  <span>Strategic Objectives & Focus Areas</span>
                </h3>
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {program.keyObjectives.map((obj, i) => (
                    <StaggerItem key={i}>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                          {obj}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

            </SlideInLeft>

            {/* Right Column: Quick Stats & Direct Action Box */}
            <SlideInRight className="space-y-6">
              
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-5">
                <h3 className="font-extrabold text-lg text-brand-navy-950">
                  Program Overview
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-slate-400 block text-[11px] uppercase tracking-wider">
                      Target Demographics
                    </span>
                    <span className="font-bold text-brand-navy-950">
                      {program.targetAudience}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <span className="font-semibold text-slate-400 block text-[11px] uppercase tracking-wider">
                      Methodology
                    </span>
                    <span className="text-slate-700 leading-relaxed">
                      Clinical psycho-education, student peer ambassadorship, parent dialogue modules, and telephonic follow-ups.
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <span className="font-semibold text-slate-400 block text-[11px] uppercase tracking-wider">
                      Geographic Availability
                    </span>
                    <span className="text-slate-700 leading-relaxed">
                      Karnataka headquarters (Bengaluru) with pan-India webinar, bilingual toolkit distribution, and helpline coverage.
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 flex flex-col gap-2.5">
                  <Button to="/contact?subject=Book+Session" variant="primary" size="md" fullWidth>
                    <span>Request Institutional Session</span>
                  </Button>
                  <Button to="/volunteer" variant="outline" size="md" fullWidth>
                    <span>Volunteer for this Program</span>
                  </Button>
                </div>
              </div>

              {/* Confidential Help Quick Card */}
              <div className="bg-brand-navy-950 text-white p-6 rounded-3xl space-y-4">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <PhoneCall className="w-4 h-4" />
                  <span>Direct Guidance</span>
                </div>
                <h4 className="text-lg font-bold">Facing Urgent Substance Concerns?</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Speak directly with an accredited counsellor without revealing your identity.
                </p>
                <a
                  href={`tel:${organizationData.contact.helpline}`}
                  className="block text-center py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm rounded-xl transition-all"
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
