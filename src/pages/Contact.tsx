import React from 'react';
import {
  PhoneCall,
  MapPin,
  Clock,
  ShieldCheck,
  Mail,
  MessageSquare,
  Instagram,
  Youtube,
  Facebook,
  ExternalLink
} from 'lucide-react';
import { organizationData } from '../data/organization';
import { Badge } from '../components/ui/Badge';
import { PageHero } from '../components/ui/PageHero';
import { HelplineBanner } from '../components/common/HelplineBanner';
import { SEO } from '../components/common/SEO';
import {
  SlideInLeft,
  SlideInRight
} from '../components/animations/MotionComponents';

export const Contact: React.FC = () => {
  return (
    <div className="space-y-0">
      <SEO
        title="Contact Antidote Foundation of India | AFOI"
        description="Contact Antidote Foundation of India for drug awareness initiatives, volunteering, counselling support, partnerships and community programmes."
        canonicalPath="/contact"
        keywords="Antidote Foundation of India Contact, Drug awareness NGO Bengaluru contact, Free addiction counselling in India, AFOI helpline, Antidote Foundation phone"
        breadcrumbs={[{ name: 'Contact Us', path: '/contact' }]}
      />
      
      {/* 1. DISTINCTIVE HERO BANNER */}
      <PageHero
        badge="Get in Touch"
        badgeVariant="teal"
        badgeIcon={MessageSquare}
        title="We Are Here to Help."
        subtitle="Reach out to Antidote Foundation of India for free confidential youth counselling, volunteer engagement, school workshop partnerships, or institutional collaborations."
        breadcrumbs={[{ label: 'Contact Us' }]}
        imageSrc="/images/counselling-support.jpg"
        imageAlt="Free and confidential counselling support by Antidote Foundation of India"
        imageBadgeText="100% Confidential Psychological Aid"
        variant="background"
        stats={[
          { label: 'Helpline', value: '24/7 Active' },
          { label: 'Confidentiality', value: '100% Protected' },
          { label: 'Headquarters', value: 'Bengaluru, India' },
          { label: 'Service', value: 'Nationwide' }
        ]}
      />

      {/* 2. Main Contact Channels (Phone, Email, Office Address Only - No Forms) */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left 6 Cols: Direct Telephonic & Crisis Assistance */}
            <SlideInLeft className="lg:col-span-6 space-y-6">
              
              {/* Primary 24/7 Helpline Card */}
              <div className="bg-gradient-to-br from-brand-navy-900 via-brand-navy-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-5 border border-brand-navy-800">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  24/7 Crisis & Tele-Counselling Line
                </div>

                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold">Toll-Free Helpline</div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {organizationData.contact.helplineDisplay}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Call anytime for zero-stigma, free, confidential psychological first aid and guided rehabilitation navigation.
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={`tel:${organizationData.contact.helpline}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-transform hover:-translate-y-0.5"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Call {organizationData.contact.helplineDisplay}</span>
                  </a>
                </div>
              </div>

              {/* Additional Phone Numbers & Email Card */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-subtle space-y-5">
                <div className="space-y-1">
                  <Badge variant="teal">Direct Lines</Badge>
                  <h3 className="font-extrabold text-lg text-brand-navy-950">
                    Secretariat & Coordination Lines
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <PhoneCall className="w-4 h-4 text-brand-teal-600 shrink-0 mt-1" />
                    <div>
                      <strong className="text-brand-navy-950 block mb-0.5">Helpline Line 1:</strong>
                      <a
                        href="tel:+917777927742"
                        className="text-brand-navy-900 font-bold hover:text-brand-teal-600 hover:underline transition-colors"
                      >
                        +91 77779 27742
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <PhoneCall className="w-4 h-4 text-brand-teal-600 shrink-0 mt-1" />
                    <div>
                      <strong className="text-brand-navy-950 block mb-0.5">Secretariat Line 2:</strong>
                      <a
                        href="tel:+919148820193"
                        className="text-brand-navy-900 font-bold hover:text-brand-teal-600 hover:underline transition-colors"
                      >
                        +91 91488 20193
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                    <Mail className="w-4 h-4 text-brand-teal-600 shrink-0 mt-1" />
                    <div>
                      <strong className="text-brand-navy-950 block mb-0.5">Official Email Address:</strong>
                      <a
                        href="mailto:info@antidotefoundation.org"
                        className="text-brand-teal-700 font-bold hover:underline"
                      >
                        info@antidotefoundation.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </SlideInLeft>

            {/* Right 6 Cols: Office Address, Timings, & Official Registration */}
            <SlideInRight className="lg:col-span-6 space-y-6">
              
              {/* Office Details Card */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-subtle space-y-5">
                <div className="space-y-1">
                  <Badge variant="navy">Registered Office</Badge>
                  <h3 className="font-extrabold text-lg text-brand-navy-950 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-teal-600" />
                    <span>Headquarters & Postal Address</span>
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-navy-700 shrink-0 mt-1" />
                    <div>
                      <strong className="text-brand-navy-950 block mb-0.5">Physical Address:</strong>
                      <span className="leading-relaxed text-slate-600 font-medium">
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

                  <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                    <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                    <div>
                      <strong className="text-brand-navy-950 block mb-0.5">Registration Number:</strong>
                      <span className="font-mono text-slate-800 font-bold">{organizationData.registrationNumber}</span>
                      <div className="text-[11px] text-slate-500 mt-0.5">Registered under the Karnataka Societies Registration Act.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Official Social Media Channels */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-subtle space-y-4">
                <h4 className="font-extrabold text-base text-brand-navy-950">
                  Connect on Official Social Channels
                </h4>
                <p className="text-xs text-slate-600">
                  Follow Antidote Foundation of India on social media for youth awareness campaigns, webinars, and event announcements.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={organizationData.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-pink-600 hover:text-white text-slate-700 text-xs font-bold transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>

                  <a
                    href={organizationData.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-red-600 hover:text-white text-slate-700 text-xs font-bold transition-all"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>YouTube</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>

                  <a
                    href={organizationData.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 text-xs font-bold transition-all"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
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

export default Contact;
