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
  Lock,
  ArrowRight,
  Building2,
  Quote
} from 'lucide-react';
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

  const leadershipTeam = [
    {
      name: 'P.A. Issac',
      role: 'Founder/Chairman',
      image: '/images/leader_1_pa_issac.jpg',
      bio: 'P.A. Issac is the Founder/Chairman of Antidote Foundation of India, a non-profit organization dedicated to creating a drug-free society through awareness, education, prevention, and community engagement. Driven by a passion for empowering youth and strengthening families, he leads initiatives that promote healthy lifestyles, positive values, and hope for a better future. Under his leadership, the Foundation works with schools, communities, and organizations to inspire lasting social change and prevent substance abuse.'
    },
    {
      name: 'Binu Divakaran',
      role: 'President',
      image: '/images/leader_2_binu_divakaran.jpg'
    },
    {
      name: 'Adv. Pramod Varaprath',
      role: 'Vice President',
      image: '/images/leader_3_pramod_varaprath.jpg'
    },
    {
      name: 'Tomy J Alunkal',
      role: 'Vice President',
      image: '/images/leader_4_tomy_j_alunkal.jpg'
    },
    {
      name: 'Adv Bushra Valappil',
      role: 'General Secretary',
      image: '/images/leader_5_bushra_valappil.jpg'
    },
    {
      name: 'George Jacob',
      role: 'Joint Secretary',
      image: '/images/leader_6_george_jacob.jpg'
    },
    {
      name: 'Dr. Nakul',
      role: 'Joint Secretary',
      image: '/images/leader_7_dr_nakul.jpg'
    },
    {
      name: 'Joju Varghese',
      role: 'Treasurer',
      image: '/images/leader_8_joju_varghese.jpg'
    },
    {
      name: 'Praful S Kandath',
      role: 'Joint Treasurer',
      image: '/images/leader_9_praful_s_kandath.jpg'
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* 1. DISTINCTIVE HERO BANNER (Full-width background on desktop, photo first on mobile) */}
      <PageHero
        badge="About Antidote Foundation of India"
        badgeVariant="teal"
        badgeIcon={ShieldCheck}
        title="Who We Are & Our Journey"
        subtitle="Antidote Foundation of India is a voluntary, youth-focused initiative working to build a drug-free society through awareness, education, community engagement, and family support."
        breadcrumbs={[{ label: 'About Us' }]}
        imageSrc="/images/youth-empowerment.jpg"
        imageAlt="AFOI youth movement leadership and educators"
        imageBadgeText="Registered Society (Reg: DRB1/SOR/257/2025-2026)"
        variant="background"
        actions={
          <>
            <Button to="/programs-events" variant="accent" size="md">
              <span>Our Programmes & Events</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button to="/volunteer" variant="secondary" size="md" className="bg-white/15 hover:bg-white/25 text-white border-white/25 backdrop-blur-md">
              <Users className="w-4 h-4 mr-1 text-teal-300" />
              <span>Join Volunteer Force</span>
            </Button>
          </>
        }
      />

      {/* 2. Mission & Vision Section (Scroll-triggered slide in) */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            
            <SlideInLeft className="space-y-5">
              <div className="space-y-2">
                <Badge variant="navy">Our Purpose & Charter</Badge>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-navy-950">
                  Empowering Youth. Preventing Addiction. Transforming India.
                </h2>
              </div>

              <div className="space-y-3.5 text-xs sm:text-base text-slate-600 leading-relaxed">
                <p className="text-base sm:text-lg font-medium text-brand-navy-900">
                  We believe prevention begins with awareness, and recovery begins with empathy. We work directly with youth aged 13–30, schools, colleges, and families across India to break the cycle of substance abuse before it begins.
                </p>
                <p>
                  What began as awareness programmes in a few colleges has grown into a statewide movement. Today, Antidote Foundation of India conducts school workshops, college awareness drives, community campaigns, and provides free, confidential counselling to youth and families across India.
                </p>
                <p>
                  Substance dependency among adolescents is rarely a failure of moral character; it is a complex, neurobiological and psycho-social challenge triggered by anxiety, peer pressure, curiosity, academic strain, or domestic distress.
                </p>
                <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 font-bold text-sm flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Know the Signs. Know What to Do.</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-navy-50 border border-brand-navy-100 flex items-start gap-3 sm:gap-4">
                <Building2 className="w-5 h-5 text-brand-navy-800 shrink-0 mt-0.5" />
                <div className="text-xs text-brand-navy-950 leading-relaxed">
                  <strong>Registered Non-Profit Secretariat:</strong> No. 38, Lakshman Layout, J. P. Nagar, Bengaluru, Karnataka 560 078. Registered under Society Registration No. <strong className="underline">DRB1/SOR/257/2025-2026</strong>.
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight className="space-y-5">
              <div className="bg-slate-50 p-5 sm:p-7 rounded-3xl border border-slate-200 space-y-3 shadow-subtle hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-2xl bg-teal-600 text-white flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-navy-950">Our Vision</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  An India where every adolescent and young adult is equipped with the knowledge, emotional resilience, and community support necessary to reject harmful substances and realize their full leadership potential in a drug-free society.
                </p>
              </div>

              <div className="bg-slate-50 p-5 sm:p-7 rounded-3xl border border-slate-200 space-y-3 shadow-subtle hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-2xl bg-brand-navy-900 text-white flex items-center justify-center">
                  <Compass className="w-5 h-5 text-amber-400" />
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
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Ethical Foundation"
            title="Our Six Guiding Core Values"
            subtitle="The enduring moral principles that guide our counsellors, educators, and volunteers in every interaction."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <StaggerItem key={val.title} className="h-full">
                  <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200/90 shadow-subtle hover:shadow-xl hover:-translate-y-1 transition-all space-y-3 group h-full flex flex-col justify-between">
                    <div className="space-y-2.5">
                      <div className="w-11 h-11 rounded-xl bg-brand-navy-50 text-brand-navy-900 flex items-center justify-center group-hover:bg-brand-navy-900 group-hover:text-white transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-extrabold text-base sm:text-lg text-brand-navy-950">
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
      <section className="py-12 sm:py-16 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Institutional Milestones"
            title="Our Organizational Trajectory"
            subtitle="Verified milestones in establishing a transparent, community-rooted substance awareness movement."
          />

          <StaggerContainer className="space-y-6 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-slate-200">
            {milestones.map((m, idx) => (
              <StaggerItem key={m.title}>
                <div
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-5 ${
                    idx % 2 === 0 ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-teal-500 border-4 border-white shadow-md z-10" />

                  <div className="ml-10 md:ml-0 md:w-1/2 md:px-8 space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200 inline-block">
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
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <SlideInLeft className="rounded-2xl overflow-hidden shadow-elevated border border-slate-200 group">
              <img
                src="/images/parent-child-communication.jpg"
                alt="Supportive parent child communication"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
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
              <div className="pt-1">
                <Button to="/resources#parents" variant="outline" size="sm">
                  <span>Explore Parent Guidance Hub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. FOUNDER'S MESSAGE (Immediately before Leadership Team)     */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Founder Photograph (stacked first on mobile) */}
            <SlideInLeft className="order-1 md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                  <img
                    src="/images/leader_1_pa_issac.jpg"
                    alt="P.A. Issac, Founder/Chairman, Antidote Foundation of India"
                    className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500"
                  />
                </div>
                {/* Accent Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-brand-navy-950 text-white shadow-lg border border-white/20 text-xs font-bold whitespace-nowrap">
                  P.A. Issac · Founder/Chairman
                </div>
              </div>
            </SlideInLeft>

            {/* Right: Founder's Message */}
            <SlideInRight className="order-2 md:col-span-7 space-y-4 pt-4 md:pt-0">
              <div className="space-y-1.5">
                <Badge variant="navy">Founder's Message</Badge>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy-950 tracking-tight">
                  A Promise to Protect Young Lives
                </h2>
              </div>

              <div className="relative pl-6 border-l-4 border-brand-teal-500 space-y-3.5 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed italic">
                <p>
                  "I have watched addiction steal childhoods, break families, and silence futures that deserved to be loud. I founded AFOI because I believe the antidote to this crisis already exists inside every informed, empowered young person — we simply need to unlock it."
                </p>
                <p>
                  "Every school we visit, every helpline call we answer, and every family we support is a step toward an India where no young person has to fight this battle alone. Our work is far from finished — in many ways, it has only just begun."
                </p>
                <p className="font-semibold text-brand-navy-950 not-italic">
                  "We are not just an NGO. We are a promise — to India's youth, to their families, and to ourselves — that we will not look away."
                </p>
              </div>

              <div className="pt-2 text-sm">
                <div className="font-extrabold text-brand-navy-950 text-base">P.A. Issac</div>
                <div className="font-semibold text-teal-700 text-xs">Founder/Chairman</div>
                <div className="text-slate-500 text-xs">Antidote Foundation of India</div>
              </div>
            </SlideInRight>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. LEADERSHIP TEAM (Equal-sized cards: 4/row desktop, 2 tablet)*/}
      {/* ============================================================== */}
      <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Governance & Leadership"
            title="Leadership Team"
            subtitle="Dedicated founders, legal advocates, healthcare professionals, and social leaders guiding our mission nationwide."
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {leadershipTeam.map((member) => (
              <StaggerItem key={member.name} className="h-full">
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1">
                  
                  {/* Photo with uniform aspect ratio */}
                  <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden">
                    <img
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <div className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                        {member.role}
                      </div>
                      <h3 className="text-base font-extrabold leading-snug">
                        {member.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body with consistent dimensions and role alignment */}
                  <div className="p-4 flex-grow flex flex-col justify-between space-y-2.5">
                    <div>
                      <div className="text-xs font-semibold text-slate-500">{member.role}</div>
                      <div className="text-sm font-bold text-brand-navy-950">{member.name}</div>
                    </div>

                    {/* Only P.A. Issac has the supplied biography */}
                    {member.bio && (
                      <p className="text-[11px] text-slate-600 leading-relaxed pt-1.5 border-t border-slate-100 line-clamp-6">
                        {member.bio}
                      </p>
                    )}
                  </div>

                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* 8. Helpline Section */}
      <HelplineBanner />

      {/* 9. Governance & Trust Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <TrustDisclaimer />
          </FadeUp>
        </div>
      </section>

    </div>
  );
};
