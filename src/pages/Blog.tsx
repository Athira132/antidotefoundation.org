import React from 'react';
import { Link } from 'react-router-dom';
import {
  Newspaper,
  BookOpen,
  GraduationCap,
  AlertTriangle,
  HeartHandshake,
  School,
  Users,
  Brain,
  Sparkles,
  LifeBuoy,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { HelplineBanner } from '../components/common/HelplineBanner';
import { SEO } from '../components/common/SEO';
import { StaggerContainer, StaggerItem } from '../components/animations/MotionComponents';

export const Blog: React.FC = () => {
  const editorialTopics = [
    {
      id: 'topic-1',
      title: 'Effects of Drug Abuse on Young People',
      category: 'Youth Health & Neuroscience',
      icon: Brain,
      summary:
        'Examining the physical, psychological, and social impacts of substance abuse on adolescent development, cognitive functioning, and academic life.',
      link: '/resources',
      linkText: 'Explore Student Resources'
    },
    {
      id: 'topic-2',
      title: 'How to Prevent Substance Abuse Among Students',
      category: 'Student Prevention',
      icon: GraduationCap,
      summary:
        'Evidence-based life skills, refusal training, and mental resilience frameworks helping students make safe, autonomous choices on campus.',
      link: '/resources',
      linkText: 'View Prevention Guides'
    },
    {
      id: 'topic-3',
      title: 'Early Warning Signs of Drug Addiction',
      category: 'Early Detection',
      icon: AlertTriangle,
      summary:
        'Recognizing behavioural changes, emotional withdrawal, academic drop-offs, and physiological indicators requiring compassionate, prompt intervention.',
      link: '/resources',
      linkText: 'Read Warning Signs'
    },
    {
      id: 'topic-4',
      title: 'How Parents Can Prevent Drug Abuse',
      category: 'Parenting & Family Support',
      icon: LifeBuoy,
      summary:
        'Practical communication strategies, open dialogue techniques, and creating supportive home environments that protect youth from peer pressures.',
      link: '/resources',
      linkText: 'Parental Guidance Toolkit'
    },
    {
      id: 'topic-5',
      title: 'Importance of Drug-Free Schools',
      category: 'Institutional Safeguarding',
      icon: School,
      summary:
        'Creating safe educational environments through zero-tolerance supply vigilance, proactive peer mentoring, and campus counselling support.',
      link: '/programs-events',
      linkText: 'School Outreach Programs'
    },
    {
      id: 'topic-6',
      title: 'How Communities Can Prevent Drug Abuse',
      category: 'Community Action',
      icon: Users,
      summary:
        'Mobilising resident welfare associations, civic leaders, youth clubs, and local authorities to build protective community safety nets.',
      link: '/volunteer',
      linkText: 'Join Community Movement'
    },
    {
      id: 'topic-7',
      title: 'Understanding Substance Abuse and Addiction',
      category: 'Clinical Understanding',
      icon: ShieldCheck,
      summary:
        'Demystifying dependency as a treatable health disorder, dismantling social stigma, and encouraging early, evidence-based psychological help.',
      link: '/find-rehab-centres',
      linkText: 'De-Addiction Directory'
    },
    {
      id: 'topic-8',
      title: 'Importance of Youth Empowerment',
      category: 'Youth Leadership',
      icon: Sparkles,
      summary:
        'Fostering creative hobbies, leadership camps, outdoor sports, and civic engagement that channel youthful energy into constructive, healthy avenues.',
      link: '/programs-events',
      linkText: 'Youth Empowerment Camps'
    },
    {
      id: 'topic-9',
      title: 'How to Support Someone Experiencing Addiction',
      category: 'Family & Peer Care',
      icon: HeartHandshake,
      summary:
        'Compassionate communication, de-escalation methods, seeking professional counselling, and supporting recovery journeys without moral judgment.',
      link: '/contact',
      linkText: 'Connect With Counsellors'
    },
    {
      id: 'topic-10',
      title: 'Drug Awareness Programmes in Schools and Colleges',
      category: 'Campus Initiatives',
      icon: BookOpen,
      summary:
        'Collaborative institutional frameworks uniting educators, parents, and youth ambassadors for sustainable, impactful anti-drug campaigns across India.',
      link: '/programs-events',
      linkText: 'View Institutional Drives'
    }
  ];

  return (
    <div className="space-y-0">
      <SEO
        title="Drug Awareness & Addiction Prevention Blog | AFOI"
        description="Read educational articles about drug abuse prevention, substance use awareness, youth protection, family support and recovery resources."
        canonicalPath="/blog"
        keywords="Drug Awareness and Substance Abuse Prevention, Drug prevention blog India, Substance abuse education India, Youth drug prevention articles, Antidote Foundation blog"
        breadcrumbs={[{ name: 'Blog', path: '/blog' }]}
      />

      {/* Dedicated Hero with heading 'Blog' and left-to-centre dark gradient */}
      <PageHero
        badge="Antidote Foundation Journal"
        badgeVariant="teal"
        badgeIcon={Newspaper}
        title="Drug Awareness & Addiction Prevention Blog"
        subtitle="Educational commentary, evidence-based prevention guides, and community insights dedicated to youth empowerment and a substance-free generation across India."
        breadcrumbs={[{ label: 'Blog' }]}
        imageSrc="/images/campaign_awareness.jpg"
        imageAlt="Antidote Foundation of India drug awareness and prevention journal"
        variant="background"
      />

      {/* Educational Editorial Scope & Topic Pillars */}
      <section className="py-16 sm:py-24 bg-slate-50 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 inline-block mb-3">
              Editorial Scope & Educational Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy-950 tracking-tight">
              Essential Substance Abuse Prevention & Youth Guidance Topics
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              The Antidote Foundation of India (AFOI) editorial team and psychological advisors regularly develop research-backed awareness resources, prevention toolkits, and educational articles around these foundational pillars.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {editorialTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <StaggerItem key={topic.id} className="h-full">
                  <div className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between h-full shadow-xs hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-brand-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100">
                          {topic.category}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-slate-50 group-hover:bg-teal-50 text-brand-navy-900 group-hover:text-brand-teal-700 flex items-center justify-center transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-brand-navy-950 group-hover:text-brand-teal-700 transition-colors leading-snug">
                        {topic.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {topic.summary}
                      </p>
                    </div>

                    <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        to={topic.link}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal-700 hover:text-brand-navy-950 transition-colors group/link"
                      >
                        <span>{topic.linkText}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Internal Guidance Card */}
          <div className="mt-12 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <h3 className="text-xl font-bold text-brand-navy-950">
                Need Immediate Confidential Support or Educational Advice?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our counsellors and youth coordinators are available 24/7 to assist students, parents, and schools with free psychological first aid and institutional guidance.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-brand-navy-900 text-white font-bold text-xs hover:bg-brand-navy-950 transition-colors shadow-sm"
              >
                Contact Counsellors
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-teal-50 text-brand-teal-800 border border-teal-200 font-bold text-xs hover:bg-teal-100 transition-colors"
              >
                Browse All Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Helpline Banner */}
      <HelplineBanner />
    </div>
  );
};

export default Blog;
