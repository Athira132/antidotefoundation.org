import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, ArrowRight, HeartHandshake, ShieldCheck, PhoneCall, Info } from 'lucide-react';
import { organizationData } from '../data/organization';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/ui/PageHero';
import { FadeUp } from '../components/animations/MotionComponents';

export const VolunteerThankYou: React.FC = () => {
  const location = useLocation();
  const state = location.state as { volunteerName?: string; role?: string } | null;

  return (
    <div className="space-y-0">

      {/* 1. DISTINCTIVE HERO BANNER */}
      <PageHero
        badge="Application Received"
        badgeVariant="teal"
        badgeIcon={CheckCircle2}
        title={`Thank You for Stepping Up${state?.volunteerName ? `, ${state.volunteerName}` : ''}!`}
        subtitle={`Your volunteer interest ${state?.role ? `for the role of "${state.role}"` : ''} has been registered in our prospective volunteer intake.`}
        breadcrumbs={[
          { label: 'Volunteer', href: '/volunteer' },
          { label: 'Application Confirmed' }
        ]}
        variant="centered"
      />

      <section className="py-14 sm:py-20 bg-slate-50 min-h-[50vh] flex items-center justify-center">
        <div className="max-w-xl w-full mx-auto px-4">
          <FadeUp className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-elevated text-center space-y-6">

            <div className="w-16 h-16 rounded-full bg-emerald-50 border-4 border-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-navy-950">
                Application Successfully Logged
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                Our volunteer coordination desk in Bengaluru coordinates chapter orientations and campus ambassador assignments.
              </p>
            </div>

            {/* Backend & Demonstration Status Note */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-left text-xs text-amber-900 space-y-1">
              <div className="flex items-center gap-1.5 font-bold">
                <Info className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Deployment & Form Processing Notice:</span>
              </div>
              <p className="text-[11px] leading-relaxed text-amber-800">
                This registration has successfully passed client-side validation. Once official production database webhooks (or Supabase/Formspree/Sheets API) are configured with organizational credentials, live email verification dispatch will follow.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <Button to="/resources" variant="primary" size="md" fullWidth>
                <span>Explore Educational Guides</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button to="/" variant="secondary" size="md" fullWidth>
                <span>Return to Homepage</span>
              </Button>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
              Have an urgent question regarding your volunteer involvement? Reach out via our 24/7 line at{' '}
              <a href={`tel:${organizationData.contact.helpline}`} className="text-brand-navy-950 font-bold hover:underline">
                {organizationData.contact.helplineDisplay}
              </a>
            </div>

          </FadeUp>
        </div>
      </section>

    </div>
  );
};
