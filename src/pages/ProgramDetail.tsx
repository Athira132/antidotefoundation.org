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
import { HelplineBanner } from '../components/common/HelplineBanner';

export const ProgramDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = programsData.find((p) => p.slug === slug);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  return (
    <div className="space-y-0">
      
      {/* Top Breadcrumb & Hero */}
      <section className="bg-brand-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-xs font-semibold text-teal-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Programs</span>
          </Link>

          <div className="max-w-4xl space-y-4">
            <Badge variant="teal">{program.tagline}</Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {program.title}
            </h1>
            <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed">
              {program.shortDescription}
            </p>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left 2 Cols: Deep Program Description & Objectives */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Feature Image */}
              <div className="rounded-3xl overflow-hidden shadow-elevated border border-slate-200">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-80 sm:h-96 object-cover"
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {program.keyObjectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {obj}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Demographic */}
              <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 flex items-start gap-4">
                <Users className="w-6 h-6 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-teal-950">Primary Target Group</h4>
                  <p className="text-xs sm:text-sm text-teal-800 mt-1">
                    {program.targetAudience}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Sidebar: Take Action */}
            <div className="space-y-6">
              
              {/* Action Box */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6 shadow-subtle sticky top-28">
                <div className="space-y-2">
                  <Badge variant="navy">Get Involved</Badge>
                  <h3 className="text-xl font-extrabold text-brand-navy-950">
                    Collaborate on this Initiative
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Whether you are an institution leader, student coordinator, or community volunteer, help us scale this program.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    to={`/contact?subject=Program+Collaboration+${encodeURIComponent(program.title)}`}
                    variant="primary"
                    size="md"
                    fullWidth
                  >
                    <span>Request Institutional Session</span>
                  </Button>

                  <Button
                    to="/volunteer"
                    variant="secondary"
                    size="md"
                    fullWidth
                  >
                    <span>Join as Program Volunteer</span>
                  </Button>

                  <Button
                    to="/donate"
                    variant="outline"
                    size="md"
                    fullWidth
                  >
                    <span>Sponsor this Program</span>
                  </Button>
                </div>

                {/* 24/7 Helpline Box */}
                <div className="pt-6 border-t border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Immediate Support
                  </div>
                  <div className="text-xs text-slate-600">
                    Need confidential tele-counselling regarding this issue?
                  </div>
                  <a
                    href={`tel:${organizationData.contact.helpline}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 hover:text-amber-700"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>24/7 Line: {organizationData.contact.helplineDisplay}</span>
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
