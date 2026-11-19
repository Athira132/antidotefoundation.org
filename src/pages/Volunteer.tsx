import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  GraduationCap,
  HeartHandshake,
  Calendar,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Info,
  Clock,
  Award
} from 'lucide-react';
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

export const Volunteer: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    age: '',
    city: '',
    state: '',
    preferredRole: 'Campus Ambassador',
    availability: 'Part-time (3-5 hours/week)',
    message: '',
    privacyConsent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const roles = [
    {
      title: 'Campus Ambassador',
      desc: 'Lead awareness drives, distribute prevention guides, and organize student dialogues in your college or university.',
      icon: GraduationCap
    },
    {
      title: 'Trained Counsellor',
      desc: 'Qualified psychology graduates providing empathetic listening, crisis de-escalation, and telephonic guidance.',
      icon: HeartHandshake
    },
    {
      title: 'Event Coordinator',
      desc: 'Plan and execute school workshops, community marathons, webinar series, and stakeholder dialogue forums.',
      icon: Calendar
    },
    {
      title: 'Creative Volunteer',
      desc: 'Design inspiring digital graphics, video stories, multilingual posters, and social media campaigns.',
      icon: Sparkles
    },
    {
      title: 'Community Leader',
      desc: 'Mobilise neighbourhood associations, youth clubs, and sports groups to champion substance-free living.',
      icon: Users
    }
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required';
    if (!formData.mobile.trim() || formData.mobile.replace(/[^0-9]/g, '').length < 10) errs.mobile = 'Valid 10-digit mobile number is required';
    if (!formData.age.trim() || isNaN(Number(formData.age)) || Number(formData.age) < 13 || Number(formData.age) > 75) {
      errs.age = 'Age must be between 13 and 75';
    }
    if (!formData.city.trim()) errs.city = 'City is required';
    if (!formData.state.trim()) errs.state = 'State is required';
    if (!formData.privacyConsent) errs.privacyConsent = 'You must agree to the privacy policy & volunteer code of conduct';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        navigate('/volunteer/thank-you', { state: { volunteerName: formData.name, role: formData.preferredRole } });
      }, 700);
    }
  };

  return (
    <div className="space-y-0">
      
      {/* 1. DISTINCTIVE HERO BANNER (Desktop: Full-width background; Mobile: Photo first) */}
      <PageHero
        badge="Youth Empowerment Movement"
        badgeVariant="teal"
        badgeIcon={Users}
        title="Be the Change. Become a Volunteer."
        subtitle="Stand with Antidote Foundation of India. Empower fellow young adults, break the silence on mental wellness, and protect communities from addiction."
        breadcrumbs={[{ label: 'Volunteer' }]}
        imageSrc="/images/community-volunteering.jpg"
        imageAlt="AFOI youth volunteers and community leaders"
        imageBadgeText="Over 500+ active student leaders nationwide"
        variant="background"
        actions={
          <a
            href="#volunteer-form"
            className="shimmer-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-sm shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <span>Fill Volunteer Application</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        }
      />

      {/* 2. Roles & Opportunities (Staggered Cards) */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Opportunities"
            title="Five Meaningful Ways to Contribute"
            subtitle="Choose a volunteer pathway that matches your skills, academic background, and passion."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((r) => {
              const IconComp = r.icon;
              return (
                <StaggerItem key={r.title} className="h-full">
                  <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-subtle hover:shadow-xl hover:-translate-y-1 transition-all space-y-3 group h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-2xl bg-brand-navy-900 text-white flex items-center justify-center group-hover:bg-brand-teal-600 transition-colors">
                        <IconComp className="w-6 h-6 text-teal-300 group-hover:text-white" />
                      </div>
                      <h3 className="font-extrabold text-lg text-brand-navy-950">
                        {r.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {r.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Volunteer Benefits */}
          <FadeUp delay={0.2} className="mt-14 bg-brand-navy-50 p-6 sm:p-10 rounded-3xl border border-brand-navy-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-brand-navy-950">Comprehensive Training</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Learn practical adolescent psychology, peer refusal negotiation, and crisis de-escalation from certified specialists.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-brand-navy-950">Skill & Leadership Growth</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Gain verified experience in public health campaigning, institutional organizing, public speaking, and peer mentorship.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-brand-navy-950">Solidarity Network</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Join a nationwide fellowship of proactive college students, young professionals, and civic advocates dedicated to service.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-navy-200/60 text-[11px] text-slate-500">
              * Note on certifications: Official community service certificates and academic credits are awarded based on verified active attendance and completion of assigned institutional hours.
            </div>
          </FadeUp>

        </div>
      </section>

      {/* 3. Registration Form Section */}
      <section id="volunteer-form" className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeUp className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-12 shadow-elevated space-y-8">
            <div className="text-center space-y-2">
              <Badge variant="teal">Enrollment Application</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy-950">
                Volunteer Registration Form
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Fill out the form below. Our volunteer coordination team will review your application and invite you to an orientation session.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                      errors.name ? 'border-rose-500 bg-rose-50/50' : 'border-slate-200 focus:border-brand-teal-500 focus:ring-1 focus:ring-brand-teal-500'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. ananya@university.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                      errors.email ? 'border-rose-500 bg-rose-50/50' : 'border-slate-200 focus:border-brand-teal-500 focus:ring-1 focus:ring-brand-teal-500'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Row 2: Mobile & Age */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                      errors.mobile ? 'border-rose-500 bg-rose-50/50' : 'border-slate-200 focus:border-brand-teal-500 focus:ring-1 focus:ring-brand-teal-500'
                    }`}
                  />
                  {errors.mobile && <p className="text-xs text-rose-600 mt-1">{errors.mobile}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Age (Years) *
                  </label>
                  <input
                    type="number"
                    required
                    min="13"
                    max="75"
                    placeholder="e.g. 21"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                      errors.age ? 'border-rose-500 bg-rose-50/50' : 'border-slate-200 focus:border-brand-teal-500 focus:ring-1 focus:ring-brand-teal-500'
                    }`}
                  />
                  {errors.age && <p className="text-xs text-rose-600 mt-1">{errors.age}</p>}
                </div>
              </div>

              {/* Row 3: City & State */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    City / Town *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bengaluru, Kochi, etc."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                      errors.city ? 'border-rose-500 bg-rose-50/50' : 'border-slate-200 focus:border-brand-teal-500 focus:ring-1 focus:ring-brand-teal-500'
                    }`}
                  />
                  {errors.city && <p className="text-xs text-rose-600 mt-1">{errors.city}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    State *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Karnataka, Kerala, etc."
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                      errors.state ? 'border-rose-500 bg-rose-50/50' : 'border-slate-200 focus:border-brand-teal-500 focus:ring-1 focus:ring-brand-teal-500'
                    }`}
                  />
                  {errors.state && <p className="text-xs text-rose-600 mt-1">{errors.state}</p>}
                </div>
              </div>

              {/* Row 4: Preferred Role & Availability */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Volunteer Role
                  </label>
                  <select
                    value={formData.preferredRole}
                    onChange={(e) => setFormData({ ...formData, preferredRole: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-brand-teal-500 bg-white"
                  >
                    <option value="Campus Ambassador">Campus Ambassador (Colleges/Schools)</option>
                    <option value="Trained Counsellor">Counsellor / Psychological Guidance</option>
                    <option value="Event Coordinator">Event & Workshop Coordinator</option>
                    <option value="Creative Volunteer">Creative Design & Media</option>
                    <option value="Community Leader">Community & Neighbourhood Leader</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Time Availability
                  </label>
                  <select
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-brand-teal-500 bg-white"
                  >
                    <option value="Part-time (3-5 hours/week)">Part-time (3–5 hours/week)</option>
                    <option value="Weekends Only">Weekends Only</option>
                    <option value="Full-time during Campaign Drives">Full-time during Campaign Drives</option>
                    <option value="Virtual / Remote Support">Virtual / Remote Support</option>
                  </select>
                </div>
              </div>

              {/* Row 5: Statement of Motivation */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Why do you wish to volunteer with AFOI? (Optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Share a brief note about your interest, academic background, or personal drive..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-brand-teal-500 placeholder:text-slate-400"
                />
              </div>

              {/* Privacy Consent */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.privacyConsent}
                    onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-navy-900 focus:ring-brand-teal-500"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    I agree to the <a href="/privacy-policy" className="text-brand-navy-900 font-semibold underline">Privacy Policy</a> and agree to adhere to the non-profit volunteer code of conduct. I confirm that all provided details are true and accurate.
                  </span>
                </label>
                {errors.privacyConsent && (
                  <p className="text-xs text-rose-600 mt-1">{errors.privacyConsent}</p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={submitting}
                >
                  {submitting ? 'Processing Registration...' : 'Submit Volunteer Application'}
                </Button>
              </div>

              <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                <span>Your application is held under strict confidentiality.</span>
              </div>

            </form>
          </FadeUp>

        </div>
      </section>

      {/* Helpline Banner */}
      <HelplineBanner />

    </div>
  );
};
