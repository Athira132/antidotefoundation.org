import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, HeartHandshake, PhoneCall } from 'lucide-react';
import { organizationData } from '../data/organization';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/ui/PageHero';
import { FadeUp } from '../components/animations/MotionComponents';
import { SEO } from '../components/common/SEO';

export const ThankYou: React.FC = () => {
  return (
    <div className="space-y-0">
      <SEO
        title="Message Received | Antidote Foundation of India"
        description="Thank you for contacting Antidote Foundation of India."
        noIndex={true}
      />
      
      {/* 1. DISTINCTIVE HERO BANNER */}
      <PageHero
        badge="Action Completed"
        badgeVariant="teal"
        badgeIcon={CheckCircle2}
        title="Thank You for Connecting with Us!"
        subtitle="Your request has been received by the Antidote Foundation of India coordination team. We appreciate your partnership in building a healthier, drug-free nation."
        breadcrumbs={[{ label: 'Thank You' }]}
        variant="centered"
      />

      <section className="py-14 sm:py-20 bg-slate-50 min-h-[50vh] flex items-center justify-center">
        <div className="max-w-xl w-full mx-auto px-4">
          <FadeUp className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-elevated text-center space-y-6">
            
            <div className="w-16 h-16 rounded-full bg-teal-50 border-4 border-teal-100 text-teal-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-navy-950">
                Connection Confirmed
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                Your partnership fuels our adolescent awareness workshops, parent guidance modules, and free confidential tele-counselling across India.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <Button to="/programs" variant="primary" size="md" fullWidth>
                <span>Explore Prevention Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button to="/" variant="secondary" size="md" fullWidth>
                <span>Return to Homepage</span>
              </Button>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
              In need of urgent emotional or counselling support? Call our 24/7 Helpline:{' '}
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
