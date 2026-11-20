import React from 'react';
import {
  Users,
  GraduationCap,
  Sparkles,
  PhoneCall,
  MapPin,
  Mail,
  ShieldCheck,
  Award,
  ArrowRight
} from 'lucide-react';
import { organizationData } from '../data/organization';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { PageHero } from '../components/ui/PageHero';
import { HelplineBanner } from '../components/common/HelplineBanner';
import { SEO } from '../components/common/SEO';
import {
  FadeUp,
  StaggerContainer,
  StaggerItem
} from '../components/animations/MotionComponents';

export const Volunteer: React.FC = () => {
  const roles = [
    {
      title: 'Campus Ambassador',
      category: 'College & University',
      desc: 'Lead student assemblies, organize anti-drug rallies, distribute bilingual educational flyers, and serve as the peer contact on campus.',
      icon: GraduationCap,
      color: 'teal'
    },
    {
      title: 'Youth Community Mentor',
      category: 'Community & Peer Support',
      desc: 'Engage youth aged 13–30 in sports, creative arts, and constructive peer discussions to build resilience against substance pressure.',
      icon: Users,
      color: 'navy'
    },
    {
      title: 'School Outreach Speaker',
      category: 'Classroom Workshops',
      desc: 'Facilitate interactive workshops in high schools and higher secondary institutions using evidence-based life skills curricula.',
      icon: Sparkles,
      color: 'amber'
    },
    {
      title: 'Event & Campaign Coordinator',
      category: 'Public Outreach',
      desc: 'Coordinate public awareness walks, coordinate volunteers, manage logistics, and interface with community and municipal partners.',
      icon: Award,
      color: 'teal'
    },
    {
      title: 'Digital & Media Creator',
      category: 'Social Awareness',
      desc: 'Help craft engaging digital campaigns, video reels, educational infographics, and articles to amplify the drug-free India message.',
      icon: Sparkles,
      color: 'navy'
    }
  ];

  return (
    <div className="space-y-0">
      <SEO
        title="Volunteer for Drug Awareness | Antidote Foundation of India"
        description="Join Antidote Foundation of India as a volunteer and help promote drug awareness, youth empowerment and substance abuse prevention across India."
        canonicalPath="/volunteer"
        keywords="Volunteer for Drug Awareness Programmes, Youth volunteer India, Substance abuse prevention volunteer, NGO volunteer Bengaluru, Anti-drug campaign volunteer India"
        breadcrumbs={[{ name: 'Volunteer', path: '/volunteer' }]}
      />
      
      {/* 1. DISTINCTIVE HERO BANNER */}
      <PageHero
        badge="Youth Empowerment Movement"
        badgeVariant="teal"
        badgeIcon={Users}
        title="Be the Change. Become a Volunteer."
        subtitle="Stand with Antidote Foundation of India. Empower fellow young adults, break the silence on mental wellness, and protect communities from addiction."
        breadcrumbs={[{ label: 'Volunteer' }]}
        imageSrc="/images/community-volunteering.jpg"
        imageAlt="Antidote Foundation of India youth volunteers and community leaders"
        imageBadgeText="Over 500+ active student leaders nationwide"
        variant="background"
        actions={
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:info@antidotefoundation.org?subject=Volunteer%20Application%20-%20Antidote%20Foundation%20of%20India"
              className="shimmer-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-sm shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Email Volunteer Desk</span>
            </a>
            <a
              href={`tel:${organizationData.contact.helpline}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/20 backdrop-blur-md transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-teal-300" />
              <span>Call {organizationData.contact.helplineDisplay}</span>
            </a>
          </div>
        }
      />

      {/* 2. Roles & Opportunities */}
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
                  <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-subtle hover:border-brand-teal-500/50 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between space-y-4 h-full group">
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-brand-teal-600 group-hover:bg-brand-navy-900 group-hover:text-white transition-colors shadow-xs">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <Badge variant="teal">{r.category}</Badge>
                      <h3 className="text-lg font-bold text-brand-navy-950">
                        {r.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {r.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <a
                        href={`mailto:info@antidotefoundation.org?subject=Volunteer%20Application%20for%20${encodeURIComponent(r.title)}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy-900 group-hover:text-brand-teal-600 transition-colors"
                      >
                        <span>Apply via Email</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Training & Impact Guarantee Box */}
          <FadeUp delay={0.15} className="mt-12 bg-brand-navy-50 border border-brand-navy-100 rounded-3xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-brand-navy-950 mb-3">
              What You Receive as an Antidote Foundation of India Volunteer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-brand-navy-950">Formal Certification</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Certificate of Appreciation and verified service hours acknowledged for college internships and portfolios.
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

      {/* 3. Direct Contact Enrollment (Phone & Email Only - No Forms) */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeUp className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-12 shadow-elevated space-y-8">
            <div className="text-center space-y-2">
              <Badge variant="teal">Enrollment & Joining</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy-950">
                How to Join as a Volunteer
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
                Connect directly with the volunteer coordination secretariat of Antidote Foundation of India. We welcome youth, students, and community advocates.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Phone Contacts */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-navy-950">Call Volunteer Desk</h4>
                    <p className="text-xs text-slate-500">Direct telephonic guidance</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-500 text-xs block">Helpline:</span>
                    <a href="tel:+917777927742" className="text-brand-navy-900 font-bold hover:text-brand-teal-600 hover:underline">
                      +91 77779 27742
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs block">Secretariat Line:</span>
                    <a href="tel:+919148820193" className="text-brand-navy-900 font-bold hover:text-brand-teal-600 hover:underline">
                      +91 91488 20193
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Application */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-navy-950">Email Your Interest</h4>
                    <p className="text-xs text-slate-500">Send resume or statement</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-500 text-xs block">Official Email:</span>
                    <a href="mailto:info@antidotefoundation.org?subject=Volunteer%20Application%20-%20Antidote%20Foundation%20of%20India" className="text-brand-teal-700 font-bold hover:underline">
                      info@antidotefoundation.org
                    </a>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Mention your name, city, educational background, and preferred volunteer role.
                  </p>
                </div>
              </div>
            </div>

            {/* Postal Address & Secretariat */}
            <div className="p-6 rounded-2xl bg-brand-navy-50/70 border border-brand-navy-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-brand-navy-950">Secretariat Office Address</div>
                  <div className="text-xs text-slate-600">{organizationData.address.full}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Reg: {organizationData.registrationNumber}</span>
              </div>
            </div>

          </FadeUp>

        </div>
      </section>

      {/* Helpline Banner */}
      <HelplineBanner />

    </div>
  );
};

export default Volunteer;
