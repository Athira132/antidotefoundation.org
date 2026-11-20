import React, { useState } from 'react';
import {
  Heart,
  ShieldCheck,
  Building,
  CreditCard,
  QrCode,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Lock,
  Info
} from 'lucide-react';
import { organizationData } from '../data/organization';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/ui/PageHero';
import { HelplineBanner } from '../components/common/HelplineBanner';
import {
  FadeUp,
  SlideInLeft,
  SlideInRight
} from '../components/animations/MotionComponents';

export const Donate: React.FC = () => {
  const presetAmounts = [
    { amount: 500, label: '₹500', impact: 'One Free Youth Counselling Session' },
    { amount: 1000, label: '₹1,000', impact: 'Educational Awareness Workshop Materials' },
    { amount: 2500, label: '₹2,500', impact: 'Grassroots Community Drive & Flyers' },
    { amount: 5000, label: '₹5,000', impact: 'Comprehensive School Safeguarding Programme' },
    { amount: 10000, label: '₹10,000', impact: '24/7 Helpline Support & Call Infrastructure' },
    { amount: 25000, label: '₹25,000', impact: 'Monthly Regional Drive Sponsor & Mentoring' },
  ];

  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');

  return (
    <div className="space-y-0">
      
      {/* 1. DISTINCTIVE HERO BANNER (Desktop: Full background; Mobile: Photo first) */}
      <PageHero
        badge="Support Our Cause"
        badgeVariant="teal"
        badgeIcon={Heart}
        title="Empower a Youth, Save a Family"
        subtitle="Your tax-transparent contributions directly support collegiate preventive workshops, free psycho-social counselling, and community safeguarding against substance abuse."
        breadcrumbs={[{ label: 'Contribute' }]}
        imageSrc="/images/donation-impact.jpg"
        imageAlt="Antidote Foundation of India youth empowerment and counselling initiative"
        imageBadgeText="100% Directed to Grassroots Initiatives"
        variant="background"
        stats={[
          { value: '100%', label: 'Public Accountability' },
          { value: 'Zero', label: 'Commercial Overhead' },
          { value: '24/7', label: 'Toll-Free Helpline' },
          { value: 'KA/2025', label: 'Registered Society' },
        ]}
      />

      {/* 2. CONTRIBUTION WORKFLOW */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 7 Cols: Contribution Options & Direct Channels */}
            <SlideInLeft className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-subtle space-y-8">
              
              <div>
                <SectionHeader
                  badge="Direct Philanthropic Support"
                  title="Choose Your Contribution Level"
                  subtitle="All donations empower young people across India through free community education, school drives, and helpline navigation."
                  centered={false}
                  className="mb-6"
                />

                {/* Step 1: Frequency Toggle */}
                <div className="flex rounded-2xl bg-slate-100 p-1.5 max-w-xs">
                  <button
                    type="button"
                    onClick={() => setFrequency('one-time')}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                      frequency === 'one-time'
                        ? 'bg-brand-navy-900 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    One-Time Support
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                      frequency === 'monthly'
                        ? 'bg-brand-navy-900 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Monthly Sustainer
                  </button>
                </div>
              </div>

              {/* Step 2: Preset Contribution Amounts */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Select Contribution Tier
                </label>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {presetAmounts.map((p) => {
                    const isSelected = selectedAmount === p.amount;
                    return (
                      <button
                        key={p.amount}
                        type="button"
                        onClick={() => setSelectedAmount(p.amount)}
                        className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-brand-navy-50 border-brand-navy-900 ring-2 ring-brand-navy-900 shadow-sm'
                            : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <span className={`text-lg font-black ${isSelected ? 'text-brand-navy-950' : 'text-slate-800'}`}>
                          {p.label}
                        </span>
                        <span className="text-[10px] text-slate-500 mt-1 line-clamp-1 leading-tight">
                          {p.impact}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Direct Contribution Channels */}
              <div className="pt-6 border-t border-slate-200 space-y-6">
                <div>
                  <h3 className="font-extrabold text-base text-brand-navy-950 mb-1">
                    Direct Bank Transfer & Secretariat Contact
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To make a contribution or pledge support for Antidote Foundation of India, please connect directly with our treasury and leadership desk:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="tel:+917777927742"
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-teal-500 transition-all group flex items-start gap-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-brand-teal-50 text-brand-teal-700 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Helpline & Treasury</div>
                      <div className="text-sm font-bold text-brand-navy-950 group-hover:text-brand-teal-600">
                        +91 77779 27742
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Click to call directly</div>
                    </div>
                  </a>

                  <a
                    href="tel:+919148820193"
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-teal-500 transition-all group flex items-start gap-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-brand-teal-50 text-brand-teal-700 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Secretariat Support</div>
                      <div className="text-sm font-bold text-brand-navy-950 group-hover:text-brand-teal-600">
                        +91 91488 20193
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Click to call directly</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@antidotefoundation.org?subject=Contribution%20Support%20-%20Antidote%20Foundation%20of%20India"
                    className="sm:col-span-2 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-teal-500 transition-all group flex items-start gap-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-brand-teal-50 text-brand-teal-700 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Official Email Communication</div>
                      <div className="text-sm font-bold text-brand-navy-950 group-hover:text-brand-teal-600">
                        info@antidotefoundation.org
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Send payment receipts, CSR grant queries, and pledge confirmations
                      </div>
                    </div>
                  </a>
                </div>

                {/* Regulatory Payment Gateway Status Notice */}
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/90 text-xs text-amber-900 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>Official Bank & Compliance Verification:</span>
                  </div>
                  <p className="leading-relaxed text-[11px] text-amber-800">
                    Antidote Foundation of India is registered under the Karnataka Societies Registration Act (Reg No: DRB1/SOR/257/2025-2026). In accordance with non-profit statutory standards, official bank accounts and payment gateway accounts are verified directly through scheduled commercial banks. Direct bank transfer credentials (NEFT/RTGS) and official receipts are provided via our secretariat upon request.
                  </p>
                </div>

                <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  <span>Verified Non-Profit Entity • Karnataka Societies Registration Act</span>
                </div>

              </div>

            </SlideInLeft>

            {/* Right 5 Cols: Transparency & Tax Status */}
            <SlideInRight className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-subtle space-y-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-teal-600" />
                  <h3 className="font-extrabold text-base text-brand-navy-950">
                    How Your Support Is Deployed
                  </h3>
                </div>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <strong className="text-brand-navy-950 block">Youth Tele-Counselling</strong>
                    <span>Enables round-the-clock free guidance for young people struggling with chemical urges or emotional crisis.</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <strong className="text-brand-navy-950 block">School & College Outreach</strong>
                    <span>Funds anti-substance student workbooks, campus assemblies, and teacher safeguarding toolkits.</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <strong className="text-brand-navy-950 block">Family Assistance & Guidance</strong>
                    <span>Supports parents with confidential guidance on non-adversarial dialogue and rehabilitation navigation.</span>
                  </div>
                </div>

                {/* Statutory Certification Transparency */}
                <div className="pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-500 leading-relaxed">
                  <div className="font-bold text-slate-700 flex items-center gap-1">
                    <Info className="w-3.5 h-3.5 text-slate-500" />
                    <span>Statutory Tax Exemption Status:</span>
                  </div>
                  <p>
                    Application for 80G / 12A tax exemption certification is progressing through statutory evaluation with the Income Tax Department following society incorporation. Tax exemption certificates will be issued once regulatory approvals are sealed.
                  </p>
                </div>
              </div>

              {/* Direct Secretariat Contact */}
              <div className="bg-brand-navy-900 text-white rounded-3xl p-6 sm:p-8 space-y-4">
                <h4 className="font-bold text-base text-white">
                  Corporate CSR & Major Grants
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Companies seeking structured Corporate Social Responsibility (CSR) partnerships for collegiate health programs may contact our Bengaluru secretariat directly.
                </p>
                <div className="text-xs text-slate-300 space-y-1 pt-1">
                  <div>Bengaluru HQ: No. 38, Lakshman Layout, J. P. Nagar, Bengaluru 560 078</div>
                  <div>Helpline: <strong className="text-amber-400">{organizationData.contact.helplineDisplay}</strong></div>
                  <div>Alternate: <strong className="text-amber-400">+91 91488 20193</strong></div>
                </div>
                <div className="pt-2">
                  <Button to="/contact" variant="secondary" size="sm" fullWidth>
                    <span>Contact Secretariat</span>
                  </Button>
                </div>
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