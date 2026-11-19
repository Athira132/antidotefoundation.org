import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Heart,
  Target,
  Sparkles,
  Users,
  Compass,
  CheckCircle2,
  Lock,
  ArrowRight,
  MapPin,
  Calendar,
  Building2,
  PhoneCall
} from 'lucide-react';
import { organizationData } from '../data/organization';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/ui/PageHero';
import { HelplineBanner } from '../components/common/HelplineBanner';
import { TrustDisclaimer } from '../components/common/TrustDisclaimer';
import {
  FadeUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem
} from '../components/animations/MotionComponents';

export const About: React.FC = () => {
  const coreValues = [
    {
      title: 'Integrity',
      desc: 'Transparent governance, total financial honesty, and uncompromising commitment to ethical public service.',
      icon: ShieldCheck,
      color: 'teal'
    },
    {
      title: 'Compassion',
      desc: 'Meeting individuals and families without blame, moralising lectures, or social condemnation.',
      icon: Heart,
      color: 'rose'
    },
    {
      title: 'Hope',
      desc: 'Believing firmly in the potential of every young person to heal, learn, lead, and thrive substance-free.',
      icon: Sparkles,
      color: 'amber'
    },
    {
      title: 'Community',
      desc: 'Mobilising collective neighbourhood vigilance, collegiate solidarity, and supportive domestic circles.',
      icon: Users,
      color: 'sky'
    },
    {
      title: 'Protection',
      desc: 'Safeguarding vulnerable adolescents from predatory supply rings through institutional education.',
      icon: Target,
      color: 'navy'
    },
    {
      title: 'Trust',
      desc: 'Absolute telephonic and psychological confidentiality, preserving personal dignity for all callers.',
      icon: Lock,
      color: 'teal'
    }
  ];

  const milestones = [
    {
      year: 'Foundation Phase',
      title: 'Formation & Society Incorporation',
      desc: 'Registered under the Karnataka Societies Registration Act (Reg: DRB1/SOR/257/2025-2026), headquartered in Bengaluru to coordinate regional substance prevention efforts.'
    },
    {
      year: 'Helpline Activation',
      title: 'Round-the-Clock Helpline (+91 77779 27742)',
      desc: 'Activated toll-free 24/7 telephonic crisis guidance providing confidential psychological first aid and referral navigation for youth and parents.'
    },
    {
      year: 'Flagship Campaign',
      title: 'Anti-Drug & Substance Abuse Campaign (ലഹരിവിരുദ്ധ ക്യാമ്പയിൻ)',
      desc: 'Launched statewide youth awareness drives, organizing student rallies, campus discussions, and bilingual educational pamphlets.'
    },
    {
      year: 'Institutional Safeguarding',
      title: 'Project SHIELD & Stakeholder Dialogues',
      desc: 'Initiated educator toolkits, parent counselling webinars, and consultative dialogues concerning youth health alongside regional initiatives.'
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* 1. DISTINCTIVE HERO BANNER (Split layout with youth imagery) */}
      <PageHero
        badge="About Antidote Foundation of India"
        badgeVariant="teal"
        badgeIcon={ShieldCheck}
        title="Protecting Young Lives. Building a Drug-Free India."
        subtitle="We are an autonomous, registered non-profit society dedicated to empowering youth aged 13–30, mitigating substance risks, and fostering compassionate community recovery."
        breadcrumbs={[{ label: 'About Us' }]}
        imageSrc="/images/youth-empowerment.jpg"
        imageAlt="AFOI youth movement leadership and educators"
        imageBadgeText="Registered Society (Reg: DRB1/SOR/257/2025-2026)"
        variant="split"
        actions={
          <>
            <Button to="/programs" variant="accent" size="md">
              <span>Our Programmes</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button to="/volunteer" variant="secondary" size="md" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              <Users className="w-4 h-4 mr-1 text-teal-300" />
              <span>Join Volunteer Force</span>
            </Button>
          </>
        }
      />

      {/* 2. Mission & Vision Section (Scroll-triggered slide in) */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            
            <SlideInLeft className="space-y-6">
              <div className="space-y-2">
                <Badge variant="navy">Our Purpose & Charter</Badge>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-navy-950">
                  Empowering Youth. Preventing Addiction. Transforming India.
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Substance dependency among adolescents is rarely a failure of moral character; it is a complex, neurobiological and psycho-social challenge triggered by anxiety, peer pressure, curiosity, academic strain, or domestic distress.
                </p>
                <p>
                  The <strong className="text-brand-navy-950">Antidote Foundation of India (AFOI)</strong> operates on the bedrock belief that early, evidence-based prevention is immeasurably more effective than delayed crisis response. By opening honest, stigma-free conversations in classrooms, collegiate lecture halls, and living rooms, we empower young people to make healthy, self-respecting choices.
                </p>
                <p>
                  Our registered society status in Bengaluru provides an accountable framework for working with educators, mental health specialists, civic volunteers, and public health institutions across the country.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-brand-navy-50 border border-brand-navy-100 flex items-start gap-3 sm:gap-4">
                <Building2 className="w-5 sm:w-6 h-5 sm:h-6 text-brand-navy-800 shrink-0 mt-0.5" />
                <div className="text-xs text-brand-navy-950 leading-relaxed">
                  <strong>Registered Non-Profit Secretariat:</strong> No. 38, Lakshman Layout, J. P. Nagar, Bengaluru, Karnataka 560 078. Registered under Society Registration No. <strong className="underline">DRB1/SOR/257/2025-2026</strong>.
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight className="space-y-6">
              <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-3.5 shadow-subtle hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-navy-950">Our Vision</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  An India where every adolescent and young adult is equipped with the knowledge, emotional resilience, and community support necessary to reject harmful substances and realize their full leadership potential in a drug-free society.
                </p>
              </div>

              <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-3.5 shadow-subtle hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-brand-navy-900 text-white flex items-center justify-center">
                  <Compass className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-navy-950">Our Mission</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To deliver scientific drug awareness education in schools and colleges, provide confidential psychological first aid and parent guidance through our 24/7 helpline, and foster compassionate community recovery pathways without stigma or punishment.
                </p>
              </div>
            </SlideInRight>

          </div>
        </div>
      </section>

      {/* 3. Core Values Section (Staggered Card Grid) */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Ethical Foundation"
            title="Our Six Guiding Core Values"
            subtitle="The enduring moral principles that guide our counsellors, educators, and volunteers in every interaction."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <StaggerItem key={val.title} className="h-full">
                  <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-subtle hover:shadow-xl hover:-translate-y-1 transition-all space-y-3 group h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-brand-navy-50 text-brand-navy-900 flex items-center justify-center group-hover:bg-brand-navy-900 group-hover:text-white transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-extrabold text-lg sm:text-xl text-brand-navy-950">
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Timeline Section (Staggered Milestones) */}
      <section className="py-14 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Institutional Milestones"
            title="Our Organizational Trajectory"
            subtitle="Verified milestones in establishing a transparent, community-rooted substance awareness movement."
          />

          <StaggerContainer className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-slate-200">
            {milestones.map((m, idx) => (
              <StaggerItem key={m.title}>
                <div
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                    idx % 2 === 0 ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-teal-500 border-4 border-white shadow-md z-10" />

                  {/* Content Box */}
                  <div className="ml-10 md:ml-0 md:w-1/2 md:px-8 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200 inline-block">
                      {m.year}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-brand-navy-950">
                      {m.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Visual Image Feature (Empathetic Listening) */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <SlideInLeft className="rounded-2xl overflow-hidden shadow-elevated border border-slate-200 group">
              <img
                src="/images/parent-child-communication.jpg"
                alt="Supportive parent child communication"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </SlideInLeft>
            <SlideInRight className="space-y-4">
              <Badge variant="teal">Community-Driven Approach</Badge>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy-950">
                Healing Starts with Empathetic Listening
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When a family discovers signs of chemical experimentation, initial reactions often lean toward panic, disciplinary hostility, or denial. Our educational and counselling interventions equip mothers, fathers, and teachers with empathetic communication strategies. We transform combative confrontation into collaborative recovery.
              </p>
              <div className="pt-2">
                <Button to="/resources#parents" variant="outline" size="sm">
                  <span>Explore Parent Guidance Hub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* 6. Helpline Section */}
      <HelplineBanner />

      {/* 7. Governance & Trust Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <TrustDisclaimer />
          </FadeUp>
        </div>
      </section>

    </div>
  );
};
