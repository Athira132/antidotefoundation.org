import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldAlert,
  GraduationCap,
  Users,
  HeartHandshake,
  Building2,
  FileSearch,
  ArrowRight,
  CheckCircle2,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { programsData } from '../data/programs';
import { upcomingEvents } from '../data/events';
import { organizationData } from '../data/organization';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/ui/PageHero';
import { HelplineBanner } from '../components/common/HelplineBanner';
import {
  FadeUp,
  StaggerContainer,
  StaggerItem
} from '../components/animations/MotionComponents';

const iconMap: Record<string, React.ElementType> = {
  ShieldAlert,
  GraduationCap,
  Users,
  HeartHandshake,
  Building2,
  FileSearch
};

export const Programs: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* 1. DISTINCTIVE HERO BANNER */}
      <PageHero
        badge="Intervention Framework"
        badgeVariant="teal"
        badgeIcon={ShieldAlert}
        title="Programs & Community Initiatives"
        subtitle="Six comprehensive prevention, counselling, and advocacy pillars safeguarding Indian adolescents, collegiate campuses, and local communities."
        breadcrumbs={[{ label: 'Programs & Events' }]}
        imageSrc="/images/school-awareness.jpg"
        imageAlt="School and college youth awareness programs"
        imageBadgeText="Evidence-based peer education & life-skills"
        variant="split"
        actions={
          <>
            <Button to="/contact?subject=School+College+Workshop" variant="accent" size="md">
              <span>Request Campus Workshop</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button to="/volunteer" variant="secondary" size="md" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              <Users className="w-4 h-4 mr-1 text-teal-300" />
              <span>Join as Campus Ambassador</span>
            </Button>
          </>
        }
      />

      {/* 2. Programs List (Staggered Entrance Cards) */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Core Framework"
            title="Six Pillars of Action"
            subtitle="Explore each structured initiative designed to create permanent behavioural and systemic resistance against narcotics."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programsData.map((prog) => {
              const IconComp = iconMap[prog.iconName] || ShieldAlert;
              return (
                <StaggerItem key={prog.id} className="h-full">
                  <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-subtle hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group h-full">
                    <div>
                      {/* Image Header with hover zoom */}
                      <div className="relative h-52 overflow-hidden bg-slate-100">
                        <img
                          src={prog.image}
                          alt={prog.title}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/80 via-brand-navy-950/20 to-transparent" />
                        
                        <div className="absolute top-4 left-4">
                          <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-brand-navy-900 flex items-center justify-center shadow">
                            <IconComp className="w-5 h-5 text-brand-teal-600" />
                          </div>
                        </div>

                        <div className="absolute bottom-3 left-4 right-4">
                          <span className="text-[10px] font-bold text-teal-300 tracking-wider uppercase">
                            {prog.tagline}
                          </span>
                          <h3 className="text-xl font-bold text-white line-clamp-1">
                            {prog.title}
                          </h3>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                          {prog.shortDescription}
                        </p>

                        <div className="space-y-2 pt-2 border-t border-slate-100">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                            Key Deliverables:
                          </div>
                          <ul className="space-y-1 text-xs text-slate-700">
                            {prog.keyObjectives.slice(0, 2).map((obj, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{obj}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Card Bottom CTA */}
                    <div className="p-6 pt-0">
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] text-slate-400">
                          Target: {prog.targetAudience.split(',')[0]}
                        </span>
                        <Link
                          to={`/programs/${prog.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy-900 group-hover:text-brand-teal-600 transition-colors"
                        >
                          <span>Full Program Details</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. Events Section (Staggered Event Cards) */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Scheduled Engagements"
            title="Upcoming Workshops & Forums (2026–2027)"
            subtitle="Engage with clinical psychologists, adolescent guidance mentors, and youth ambassadors in open educational webinars."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {upcomingEvents.map((evt) => (
              <StaggerItem key={evt.id} className="h-full">
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-subtle hover:border-slate-300 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between space-y-6 h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="teal">{evt.category}</Badge>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {evt.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-brand-navy-950">
                      {evt.title}
                    </h3>

                    <div className="space-y-2 text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-brand-navy-800 shrink-0" />
                        <span>{evt.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-brand-navy-800 shrink-0" />
                        <span>{evt.location}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {evt.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <Button
                      to={`/contact?subject=Event+Registration+${encodeURIComponent(evt.title)}`}
                      variant="primary"
                      size="sm"
                      fullWidth
                    >
                      <span>Enquire & Register</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Institutional Booking Notice */}
          <FadeUp delay={0.2} className="mt-12 bg-brand-navy-50 p-6 sm:p-8 rounded-2xl border border-brand-navy-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-lg font-bold text-brand-navy-950">
                Want to Host an AFOI Workshop at Your School or University?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                We coordinate tailored campus assemblies, student ambassador trainings, and faculty safeguarding seminars.
              </p>
            </div>
            <Button to="/contact?subject=School+College+Workshop" variant="primary" size="md">
              <span>Request Campus Workshop</span>
            </Button>
          </FadeUp>

        </div>
      </section>

      {/* Helpline Banner */}
      <HelplineBanner />

    </div>
  );
};
