import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, CheckCircle2, ArrowRight, ShieldCheck, PhoneCall, Info, Building } from 'lucide-react';
import { organizationData } from '../data/organization';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/ui/PageHero';
import { FadeUp } from '../components/animations/MotionComponents';
import { SEO } from '../components/common/SEO';

export const DonateThankYou: React.FC = () => {
  const location = useLocation();
  const state = location.state as {
    donorName?: string;
    amount?: number;
    frequency?: string;
    paymentMethod?: string;
  } | null;

  return (
    <div className="space-y-0">
      <SEO
        title="Support Pledged | Antidote Foundation of India"
        description="Thank you for supporting Antidote Foundation of India's youth substance abuse prevention mission."
        noIndex={true}
      />
      
      {/* 1. DISTINCTIVE HERO BANNER */}
      <PageHero
        badge="Pledge Acknowledged"
        badgeVariant="amber"
        badgeIcon={Heart}
        title={`Thank You for Standing with Us${state?.donorName ? `, ${state.donorName}` : ''}!`}
        subtitle="Your generous willingness to support Antidote Foundation of India will help safeguard vulnerable young lives from substance harm."
        breadcrumbs={[
          { label: 'Donate', href: '/donate' },
          { label: 'Contribution Pledged' }
        ]}
        variant="centered"
      />

      <section className="py-14 sm:py-20 bg-slate-50 min-h-[50vh] flex items-center justify-center">
        <div className="max-w-xl w-full mx-auto px-4">
          <FadeUp className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-elevated text-center space-y-6">
            
            <div className="w-16 h-16 rounded-full bg-amber-50 border-4 border-amber-100 text-amber-500 flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 fill-current" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-navy-950">
                Pledge Successfully Logged
              </h2>
              {state?.amount ? (
                <p className="text-sm font-semibold text-brand-navy-900">
                  Pledged Contribution: <span className="text-lg font-black text-amber-600">₹{state.amount.toLocaleString('en-IN')}</span> ({state.frequency === 'monthly' ? 'Monthly' : 'One-time'})
                </p>
              ) : null}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                Your generous willingness to support Antidote Foundation of India will help safeguard vulnerable young lives from substance harm.
              </p>
            </div>

            {/* Regulatory Bank Mandate Transparency Note */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-700 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-brand-navy-950">
                <Building className="w-4 h-4 text-brand-navy-700 shrink-0" />
                <span>Treasury & Bank Remittance Follow-Up:</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600">
                Per our compliance guidelines, Antidote Foundation of India does not process dummy or simulated financial transactions. Our finance secretariat will connect with you using your provided contact details with official registered society bank mandates and instructions for direct NEFT/RTGS/UPI transfers.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <Button to="/programs" variant="primary" size="md" fullWidth>
                <span>Learn More About Our Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button to="/" variant="secondary" size="md" fullWidth>
                <span>Return to Homepage</span>
              </Button>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
              For CSR consultations or direct banking coordination, contact our registered office in Bengaluru or call{' '}
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
