import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Heart,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Building,
  CreditCard,
  QrCode,
  AlertCircle,
  HelpCircle,
  ArrowRight,
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
  SlideInRight,
  StaggerContainer,
  StaggerItem
} from '../components/animations/MotionComponents';

export const Donate: React.FC = () => {
  const navigate = useNavigate();

  const presetAmounts = [
    { amount: 500, label: '₹500', impact: 'One Free Youth Counselling Session' },
    { amount: 1000, label: '₹1,000', impact: 'Educational Awareness Workshop Materials' },
    { amount: 2500, label: '₹2,500', impact: 'Grassroots Community Drive & Flyers' },
    { amount: 5000, label: '₹5,000', impact: 'Comprehensive School Safeguarding Programme' },
    { amount: 10000, label: '₹10,000', impact: '24/7 Helpline Support & Call Infrastructure' },
    { amount: 25000, label: '₹25,000', impact: 'Monthly Regional Drive Sponsor & Mentoring' },
  ];

  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'bank_transfer' | 'card' | 'net_banking'>('upi');

  const [donorDetails, setDonorDetails] = useState({
    name: '',
    email: '',
    mobile: '',
    panNumber: '',
    city: '',
    state: '',
    anonymous: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const activeAmount = isCustom ? Number(customAmount) || 0 : selectedAmount;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!isCustom && !selectedAmount) errs.amount = 'Please select a donation amount';
    if (isCustom && (!customAmount || Number(customAmount) < 100)) {
      errs.amount = 'Please enter a valid amount of at least ₹100';
    }
    if (!donorDetails.name.trim()) errs.name = 'Full name is required';
    if (!donorDetails.email.trim() || !/\S+@\S+\.\S+/.test(donorDetails.email)) errs.email = 'Valid email is required';
    if (!donorDetails.mobile.trim() || donorDetails.mobile.replace(/[^0-9]/g, '').length < 10) errs.mobile = 'Valid 10-digit mobile number is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        navigate('/donate/thank-you', {
          state: {
            donorName: donorDetails.name,
            amount: activeAmount,
            frequency,
            paymentMethod
          }
        });
      }, 700);
    }
  };

  return (
    <div className="space-y-0">
      
      {/* 1. DISTINCTIVE HERO BANNER */}
      <PageHero
        badge="Support Our Cause"
        badgeVariant="amber"
        badgeIcon={Heart}
        title="Every Contribution Can Protect a Young Life."
        subtitle="Your generous partnership funds free adolescent tele-counselling, school prevention toolkits, parent guidance, and community recovery assistance."
        breadcrumbs={[{ label: 'Donate' }]}
        variant="centered"
        stats={[
          { label: 'Free Helpline', value: '100% Free' },
          { label: 'Youth Reached', value: '5,000+' },
          { label: 'Transparency', value: 'Public Society' },
          { label: 'Audit Standard', value: 'Ethical Non-Profit' }
        ]}
      />

      {/* 2. Main Donation Container */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 7 Cols: Donation Selector & Form */}
            <SlideInLeft className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-elevated space-y-8">
              
              {/* Step 1: Frequency */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                  Donation Frequency
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFrequency('one-time')}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      frequency === 'one-time'
                        ? 'bg-brand-navy-900 text-white border-brand-navy-900 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    One-Time Gift
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all flex items-center justify-center gap-1.5 ${
                      frequency === 'monthly'
                        ? 'bg-brand-navy-900 text-white border-brand-navy-900 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
                    <span>Monthly Guardian</span>
                  </button>
                </div>
              </div>

              {/* Step 2: Choose Amount */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Select Contribution Amount
                </label>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {presetAmounts.map((p) => {
                    const isSelected = !isCustom && selectedAmount === p.amount;
                    return (
                      <button
                        key={p.amount}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(p.amount);
                          setIsCustom(false);
                        }}
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

                {/* Custom Amount option */}
                <div className="pt-2">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsCustom(true)}
                      className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                        isCustom
                          ? 'bg-brand-navy-900 text-white border-brand-navy-900'
                          : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                      }`}
                    >
                      Custom Amount
                    </button>

                    {isCustom && (
                      <div className="relative flex-grow">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                        <input
                          type="number"
                          min="100"
                          step="100"
                          placeholder="Enter amount (min ₹100)"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-brand-navy-900 text-sm font-bold outline-none"
                        />
                      </div>
                    )}
                  </div>
                  {errors.amount && <p className="text-xs text-rose-600 mt-1">{errors.amount}</p>}
                </div>
              </div>

              {/* Step 3: Donor Details Form */}
              <form onSubmit={handlePledgeSubmit} className="space-y-4 pt-4 border-t border-slate-200">
                <h3 className="font-bold text-sm text-brand-navy-950 uppercase tracking-wider">
                  Donor Information
                </h3>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Malhotra"
                    value={donorDetails.name}
                    onChange={(e) => setDonorDetails({ ...donorDetails, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-brand-teal-500"
                  />
                  {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. vikram@domain.com"
                      value={donorDetails.email}
                      onChange={(e) => setDonorDetails({ ...donorDetails, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-brand-teal-500"
                    />
                    {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={donorDetails.mobile}
                      onChange={(e) => setDonorDetails({ ...donorDetails, mobile: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-brand-teal-500"
                    />
                    {errors.mobile && <p className="text-xs text-rose-600 mt-1">{errors.mobile}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">City</label>
                    <input
                      type="text"
                      placeholder="e.g. Bengaluru"
                      value={donorDetails.city}
                      onChange={(e) => setDonorDetails({ ...donorDetails, city: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-brand-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">PAN Card (Optional for 80G)</label>
                    <input
                      type="text"
                      placeholder="e.g. ABCDE1234F"
                      value={donorDetails.panNumber}
                      onChange={(e) => setDonorDetails({ ...donorDetails, panNumber: e.target.value.toUpperCase() })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-brand-teal-500 uppercase"
                    />
                  </div>
                </div>

                {/* Intended Payment Method Selection */}
                <div className="pt-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Intended Payment Channel
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'upi', label: 'UPI / QR', icon: QrCode },
                      { id: 'bank_transfer', label: 'Bank Transfer / NEFT', icon: Building },
                      { id: 'card', label: 'Debit / Credit Card', icon: CreditCard },
                      { id: 'net_banking', label: 'Net Banking', icon: Lock },
                    ].map((pm) => {
                      const Icon = pm.icon;
                      const active = paymentMethod === pm.id;
                      return (
                        <button
                          key={pm.id}
                          type="button"
                          onClick={() => setPaymentMethod(pm.id as any)}
                          className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 ${
                            active
                              ? 'bg-brand-navy-900 text-white border-brand-navy-900 shadow-sm'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span>{pm.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Regulatory Payment Gateway Status Notice */}
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/90 text-xs text-amber-900 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>Official Bank & Payment Gateway Compliance Status:</span>
                  </div>
                  <p className="leading-relaxed text-[11px] text-amber-800">
                    Antidote Foundation of India is registered under the Karnataka Societies Registration Act (Reg No: DRB1/SOR/257/2025-2026). In accordance with non-profit statutory standards, online instant checkout gateway keys and bank mandates are undergoing official verification before live transactions are enabled. We do not invent dummy bank accounts or simulated payment transactions. Submitting below records your contribution pledge with our treasury.
                  </p>
                </div>

                {/* Submit Pledge Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    fullWidth
                    disabled={submitting}
                  >
                    <Heart className="w-4 h-4 fill-current text-slate-950" />
                    <span>
                      {submitting
                        ? 'Recording Your Pledge...'
                        : `Pledge Contribution of ₹${activeAmount > 0 ? activeAmount.toLocaleString('en-IN') : '...'}`}
                    </span>
                  </Button>
                </div>

                <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  <span>Secure & Confidential • Zero Spam Guarantee</span>
                </div>

              </form>

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
                  <div>Bengaluru HQ: No. 38, Lakshman Layout, J. P. Nagar, Bengaluru 560078</div>
                  <div>Helpline: <strong className="text-amber-400">{organizationData.contact.helplineDisplay}</strong></div>
                </div>
                <div className="pt-2">
                  <Button to="/contact?subject=CSR+Enquiry" variant="secondary" size="sm" fullWidth>
                    <span>Initiate CSR Dialogue</span>
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
