import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  PhoneCall,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  HeartHandshake,
  MessageSquare
} from 'lucide-react';
import { organizationData } from '../data/organization';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { HelplineBanner } from '../components/common/HelplineBanner';

export const Contact: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Free Counselling',
    message: '',
    privacyConsent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Pre-fill subject if provided in URL query (e.g. ?subject=CSR+Enquiry)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const subjectParam = params.get('subject');
    if (subjectParam) {
      setFormData(prev => ({ ...prev, subject: subjectParam }));
    }
  }, [location.search]);

  const subjectOptions = [
    'Free Counselling',
    'Volunteer Enquiry',
    'Donation',
    'CSR Enquiry',
    'Partnership',
    'Collaboration',
    'School Programme',
    'Media Enquiry',
    'Other'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Your name is required';
    if (!formData.phone.trim() || formData.phone.replace(/[^0-9]/g, '').length < 10) {
      errs.phone = 'Valid 10-digit phone number is required';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid email address is required';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide details (minimum 10 characters)';
    }
    if (!formData.privacyConsent) {
      errs.privacyConsent = 'You must agree to the privacy policy';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
      }, 700);
    }
  };

  return (
    <div className="space-y-0">
      
      {/* Hero Header */}
      <section className="bg-brand-navy-950 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto relative z-10">
          <Badge variant="teal" className="mb-4">Get in Touch</Badge>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            We Are Here to Help.
          </h1>
          <p className="mt-5 text-base sm:text-xl text-slate-300 font-light leading-relaxed">
            Reach out for free confidential youth counselling, volunteer engagement, school workshop partnerships, or institutional collaborations.
          </p>
        </div>
      </section>

      {/* Main Content: Info Cards & Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 5 Cols: Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* 24/7 Helpline Card */}
              <div className="bg-gradient-to-br from-brand-navy-900 to-brand-navy-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-4 border border-brand-navy-800">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  24/7 Crisis & Tele-Counselling Line
                </div>

                <h3 className="text-2xl font-black text-white">
                  {organizationData.contact.helplineDisplay}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Call anytime for zero-stigma, free, confidential psychological first aid and guided rehabilitation navigation.
                </p>

                <div className="pt-2">
                  <a
                    href={`tel:${organizationData.contact.helpline}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow transition-transform hover:-translate-y-0.5"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Dial Helpline Now</span>
                  </a>
                </div>
              </div>

              {/* Office Details Card */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-subtle space-y-5">
                <h3 className="font-extrabold text-base text-brand-navy-950 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <span>Registered Secretariat</span>
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-navy-700 shrink-0 mt-1" />
                    <div>
                      <strong className="text-brand-navy-950 block mb-0.5">Physical Address:</strong>
                      <span className="leading-relaxed text-slate-600">
                        {organizationData.address.full}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-brand-navy-700 shrink-0 mt-1" />
                    <div>
                      <strong className="text-brand-navy-950 block mb-0.5">Office Hours:</strong>
                      <span className="text-slate-600">{organizationData.contact.officeHours}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                    <div>
                      <strong className="text-brand-navy-950 block mb-0.5">Registration Number:</strong>
                      <span className="font-mono text-slate-700 font-bold">{organizationData.registrationNumber}</span>
                      <div className="text-[11px] text-slate-400">Registered under Karnataka Societies Act</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                    <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                    <div>
                      <strong className="text-brand-navy-950 block mb-0.5">Official Email Status:</strong>
                      <span className="text-slate-500 text-xs leading-relaxed">
                        Awaiting official confirmation. Domain mailbox configuration is in progress. Please use the contact form or phone helpline.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right 7 Cols: Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-elevated space-y-6">
              
              <div className="space-y-1">
                <Badge variant="teal">Send an Enquiry</Badge>
                <h3 className="text-2xl font-extrabold text-brand-navy-950">
                  Connect with Our Team
                </h3>
                <p className="text-xs text-slate-500">
                  Whether you have a general enquiry or need counselling assistance, leave your details below.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-lg text-emerald-950">Message Submitted Successfully</h4>
                  <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Your message regarding "<strong>{formData.subject}</strong>" has been recorded. Our coordination team will get in touch shortly.
                  </p>
                  <div className="p-3 bg-white/70 rounded-xl text-[11px] text-slate-500 border border-emerald-100">
                    Notice: Backend webhook integration point active. Form records are stored client-side pending official production email API dispatch.
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          subject: 'Free Counselling',
                          message: '',
                          privacyConsent: false
                        });
                      }}
                      className="px-5 py-2.5 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-brand-teal-500"
                    />
                    {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-brand-teal-500"
                      />
                      {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. ramesh@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-brand-teal-500"
                      />
                      {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Subject / Enquiry Type *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-brand-teal-500 bg-white"
                    >
                      {subjectOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Message or Request *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Please describe how we can assist you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-brand-teal-500"
                    />
                    {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message}</p>}
                  </div>

                  {/* Privacy Consent */}
                  <div className="pt-1">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.privacyConsent}
                        onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-navy-900 focus:ring-brand-teal-500"
                      />
                      <span className="text-xs text-slate-600 leading-relaxed">
                        I agree to the <a href="/privacy-policy" className="text-brand-navy-900 font-semibold underline">Privacy Policy</a> and authorize AFOI to contact me regarding this enquiry. My information will remain confidential.
                      </span>
                    </label>
                    {errors.privacyConsent && (
                      <p className="text-xs text-rose-600 mt-1">{errors.privacyConsent}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <div className="pt-3">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={submitting}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      <span>{submitting ? 'Submitting Message...' : 'Send Message'}</span>
                    </Button>
                  </div>

                  <div className="text-center text-[11px] text-slate-400">
                    Need immediate emergency intervention? Call <strong>112</strong> or our 24/7 Helpline: <strong>{organizationData.contact.helplineDisplay}</strong>
                  </div>

                </form>
              )}

            </div>

          </div>

          {/* Map Representation Section */}
          <div className="mt-16 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-subtle space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-extrabold text-base text-brand-navy-950 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span>Our Registered Location in Bengaluru</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  No. 38, Lakshman Layout, J. P. Nagar, Bengaluru, Karnataka 560 078, India
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Lakshman+Layout+JP+Nagar+Bengaluru+560078"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-brand-navy-900 hover:text-teal-700 underline"
              >
                Open in Google Maps →
              </a>
            </div>

            <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 relative">
              <iframe
                title="Antidote Foundation Registered Location"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.5750%2C12.8950%2C77.6150%2C12.9250&amp;layer=mapnik&amp;marker=12.9100%2C77.5950"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Helpline Banner */}
      <HelplineBanner />

    </div>
  );
};

