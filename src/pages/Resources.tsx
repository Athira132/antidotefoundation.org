import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  GraduationCap,
  Users,
  Briefcase,
  Download,
  AlertTriangle,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  FileText,
  HeartHandshake,
  Sparkles,
  Eye,
  MessageCircle,
  LifeBuoy
} from 'lucide-react';
import { resourcesData } from '../data/resources';
import { organizationData } from '../data/organization';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/ui/PageHero';
import { HelplineBanner } from '../components/common/HelplineBanner';
import { SEO } from '../components/common/SEO';
import {
  FadeUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem
} from '../components/animations/MotionComponents';

export const Resources: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'students' | 'parents' | 'teachers' | 'everyone' | 'downloads'>('all');

  const downloadResources = resourcesData.filter(r => r.category === 'downloads');

  const substanceRisks = [
    {
      name: 'Alcohol & Binge Drinking',
      risk: 'Adolescent brain development, memory impairment, alcohol poisoning, and risk of traumatic injury.',
      warning: 'Binge drinking among youth impairs prefrontal cortex development and accelerates dependency patterns.'
    },
    {
      name: 'Nicotine & Vaping',
      risk: 'Severe lung inflammation from synthetic chemicals, rapid cognitive dependence, and behavioral irritability.',
      warning: 'E-cigarettes often contain unregulated chemical concentrations equivalent to dozens of cigarettes.'
    },
    {
      name: 'Cannabis',
      risk: 'Reduced motivation, memory retention deficit, triggered psychosis in genetically vulnerable adolescents.',
      warning: 'Modern high-potency cannabis extracts have drastically elevated THC levels causing psychoactive harm.'
    },
    {
      name: 'Prescription Drug Misuse',
      risk: 'Sedatives, painkillers (opioids), and ADHD stimulants misused without strict clinical supervision.',
      warning: 'Mixing prescription tranquilizers with alcohol can cause fatal respiratory depression within minutes.'
    },
    {
      name: 'Synthetic Drugs (MDMA, Meth, etc.)',
      risk: 'Hyperthermia, serotonin syndrome, acute cardiac distress, paranoia, and severe psychological crashes.',
      warning: 'Street pills are frequently adulterated with lethal fentanyl or chemical contaminants.'
    },
    {
      name: 'Inhalants',
      risk: 'Sudden Sniffing Death Syndrome (SSDS), permanent neurological damage, asphyxiation, and organ toxicity.',
      warning: 'Household chemicals and solvent glues starve the brain of oxygen and destroy myelin sheaths.'
    }
  ];

  return (
    <div className="space-y-0">
      <SEO
        title="Drug Awareness Resources & Education | AFOI"
        description="Explore educational resources about substance abuse, drug prevention, addiction awareness and guidance for students, parents and communities."
        canonicalPath="/resources"
        keywords="Substance Abuse Awareness and Education, Drug prevention for students, Substance abuse education for parents, Addiction prevention education, Drug awareness guides India"
        breadcrumbs={[{ name: 'Resources', path: '/resources' }]}
      />
      
      {/* 1. DISTINCTIVE HERO BANNER (Desktop: Full background; Mobile: Photo first) */}
      <PageHero
        badge="Knowledge & Intervention Hub"
        badgeVariant="teal"
        badgeIcon={BookOpen}
        title="Educational Resources & Practical Toolkits"
        subtitle="Empowering youth, parents, and educators across India with scientific drug awareness, warning indicator checklists, and life-saving guidance."
        breadcrumbs={[{ label: 'Resources' }]}
        imageSrc="/images/educational-resources.jpg"
        imageAlt="AFOI youth educational workshops and resources"
        imageBadgeText="Evidence-Based Prevention Materials"
        variant="background"
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-extrabold text-amber-300">
              <span className="text-white">NOTICE</span>
              <span className="text-teal-400">→</span>
              <span className="text-white">TALK</span>
              <span className="text-teal-400">→</span>
              <span className="text-teal-300">GET HELP</span>
            </div>
            <a
              href="#downloads"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-brand-teal-600 hover:bg-brand-teal-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Free PDFs</span>
            </a>
          </div>
        }
      />

      {/* Category Tabs Navigation */}
      <section className="bg-white border-b border-slate-200 sticky top-14 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {[
              { id: 'all', label: 'All Resources' },
              { id: 'students', label: 'For Students' },
              { id: 'parents', label: 'For Parents' },
              { id: 'teachers', label: 'For Teachers' },
              { id: 'everyone', label: 'For Everyone (3 Steps)' },
              { id: 'downloads', label: 'Downloadable Guides' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  if (tab.id !== 'all') {
                    const el = document.getElementById(tab.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-brand-navy-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-brand-navy-900 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 1. FOR STUDENTS: KNOW THE RISKS. KNOW YOUR CHOICES.           */}
      {/* ============================================================== */}
      <section id="students" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="For Students"
            title="Know the Risks. Know Your Choices."
            subtitle="Real facts about chemical substances and practical scripts to stay confident and in control."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
            
            {/* Left 7 Columns: The 6 Key Substance Categories */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-brand-navy-950 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <span>Substance Categories & Real Neurological Impacts</span>
              </h3>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {substanceRisks.map((item) => (
                  <StaggerItem key={item.name}>
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all h-full flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="font-extrabold text-sm sm:text-base text-brand-navy-950 block">
                          {item.name}
                        </span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          <strong>Direct Harm:</strong> {item.risk}
                        </p>
                      </div>
                      <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] text-amber-800 font-medium">
                        ⚠️ {item.warning}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Right 5 Columns: Tips for Students & Confidence Scripts */}
            <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-36">
              
              <div className="bg-gradient-to-br from-brand-navy-950 to-brand-navy-900 text-white p-6 sm:p-7 rounded-3xl border border-brand-navy-800 shadow-xl space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <h4 className="text-lg font-extrabold text-white">Tips for Students</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Navigating high school and college social circles doesn't require compromising your future. Remember these fundamental rules:
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong>Trust your gut:</strong> If an environment feels unsafe or substances appear, leave immediately.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong>Guard your drink:</strong> Never accept open cups or unsealed beverages from strangers at parties.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong>Choose real friends:</strong> True peers respect your boundaries and will never pressure you to consume substances.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong>Have an exit plan:</strong> Set up a discreet code with a trusted sibling or parent to pick you up anytime.</span>
                  </li>
                </ul>

                <div className="pt-3 border-t border-white/10">
                  <a
                    href={`tel:${organizationData.contact.helpline}`}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-brand-teal-600/80 hover:bg-brand-teal-500 text-white text-xs font-bold transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Call Confidential Youth Helpline</span>
                    </span>
                    <span>+91 77779 27742</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. FOR PARENTS: NOTICE. LISTEN. SUPPORT.                      */}
      {/* ============================================================== */}
      <section id="parents" className="py-14 sm:py-20 bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="For Parents"
            title="Notice. Listen. Support."
            subtitle="Recognizing early warning signs and transforming confrontation into collaborative recovery."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
            
            {/* Warning Signs Categorized */}
            <div className="lg:col-span-7 space-y-5">
              <h3 className="text-lg sm:text-xl font-bold text-brand-navy-950 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-500" />
                <span>Early Warning Signs Across Four Key Dimensions</span>
              </h3>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <StaggerItem>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 h-full">
                    <span className="font-extrabold text-sm text-brand-navy-950 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      Physical Signs
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                      <li>• Bloodshot eyes, pinpoint or abnormally dilated pupils</li>
                      <li>• Sudden dramatic weight loss or rapid fluctuations</li>
                      <li>• Chemical or smoke odor on clothing and bedding</li>
                      <li>• Unexplained nosebleeds, chronic cough, or tremors</li>
                      <li>• Constant extreme fatigue or sudden sleep disturbances</li>
                    </ul>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 h-full">
                    <span className="font-extrabold text-sm text-brand-navy-950 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      Behavioral Signs
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                      <li>• Heightened secrecy regarding phone passwords and whereabouts</li>
                      <li>• Abrupt abandonment of long-term hobbies and sports</li>
                      <li>• Frequent uncharacteristic demands for money</li>
                      <li>• Disappearance of cash, jewelry, or medication from home</li>
                      <li>• Avoiding eye contact and retreating to locked bedrooms</li>
                    </ul>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 h-full">
                    <span className="font-extrabold text-sm text-brand-navy-950 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-teal-500" />
                      Emotional Signs
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                      <li>• Sudden explosive hostility over minor requests</li>
                      <li>• Uncharacteristic anxiety, paranoia, or defensive anger</li>
                      <li>• Loss of enthusiasm, apathy, and emotional detachment</li>
                      <li>• Severe mood swings between hyper-energy and deep depression</li>
                      <li>• Defensiveness when questioned about friendships</li>
                    </ul>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 h-full">
                    <span className="font-extrabold text-sm text-brand-navy-950 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-sky-500" />
                      School & Social Signs
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                      <li>• Sudden drop in academic performance and missed deadlines</li>
                      <li>• Chronic unexplained school or college absenteeism</li>
                      <li>• Disciplinary notices from teachers or administrators</li>
                      <li>• Replacing trusted childhood friends with unknown circles</li>
                      <li>• Reluctance to introduce new acquaintances to family</li>
                    </ul>
                  </div>
                </StaggerItem>

              </StaggerContainer>
            </div>

            {/* What To Do for Parents */}
            <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-36">
              <div className="p-6 sm:p-7 rounded-3xl bg-amber-50/70 border border-amber-200/80 space-y-4">
                <h4 className="text-lg font-extrabold text-brand-navy-950 flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-amber-600" />
                  <span>What To Do (Parent Action Guide)</span>
                </h4>
                
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-amber-100 space-y-1">
                    <strong className="text-brand-navy-950 block">1. Stay Calm & Avoid Panic</strong>
                    <p className="text-slate-600">A furious reaction or punitive threats force youth into deeper isolation. Take a breath before speaking.</p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-amber-100 space-y-1">
                    <strong className="text-brand-navy-950 block">2. Speak During a Sober, Quiet Moment</strong>
                    <p className="text-slate-600">Never initiate a serious dialogue when either of you is tired, rushed, or intoxicated.</p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-amber-100 space-y-1">
                    <strong className="text-brand-navy-950 block">3. Reassure Unconditional Love</strong>
                    <p className="text-slate-600">Make it clear that you love them completely, and that you will tackle this health challenge together.</p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-amber-100 space-y-1">
                    <strong className="text-brand-navy-950 block">4. Seek Confidential Professional Help</strong>
                    <p className="text-slate-600">Contact certified de-addiction specialists and counselors rather than trying to handle clinical addiction alone.</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Button to="/contact" variant="primary" size="md" fullWidth>
                    <span>Request Confidential Parent Consultation</span>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. FOR TEACHERS: OBSERVE. UNDERSTAND. ACT.                     */}
      {/* ============================================================== */}
      <section id="teachers" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="For Teachers & Schools"
            title="Observe. Understand. Act."
            subtitle="Campus safeguarding protocols that protect students without punitive stigmatization."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8">
            
            {/* What to Look For */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-brand-navy-950 flex items-center gap-2">
                <Eye className="w-5 h-5 text-brand-teal-600" />
                <span>What to Look For in Classrooms & Campuses</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Educators often spend more waking hours with youth than parents do. Be alert to these classroom indicators:
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Frequent Restroom Breaks:</strong> Leaving classes repeatedly or lingering in campus corners with older outsiders.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Disruptive Slump or Agitation:</strong> Sleeping on desks, inability to sustain attention, or sudden erratic outbursts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Changes in Written Expression:</strong> Dark, nihilistic, or substance-referencing themes in student creative essays or artwork.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Suspicious Peer Networks:</strong> Sudden clustering around vulnerable students by known outside groups.</span>
                </li>
              </ul>
            </div>

            {/* What to Do */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-brand-navy-950 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-teal-600" />
                <span>What to Do (Campus Intervention Protocol)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Punitive suspension frequently pushes an adolescent into the hands of street distributors. Follow restorative protocols:
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-navy-950 block">Step 1: Document Without Humiliation</strong>
                  <span className="text-slate-600 text-xs">Note dates, observed behaviors, and academic shifts quietly. Never publicly accuse or search a student before peers.</span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-navy-950 block">Step 2: Connect with School Psychologist</strong>
                  <span className="text-slate-600 text-xs">Involve the institutional counselor under strict clinical confidentiality guidelines.</span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-navy-950 block">Step 3: Compassionate Parent Partnership</strong>
                  <span className="text-slate-600 text-xs">Convene parents collaboratively, sharing observations with empathy and guiding them to verified recovery avenues.</span>
                </div>
              </div>

              <div className="pt-2">
                <Button to="/contact" variant="outline" size="sm">
                  <span>Schedule an Institutional Awareness Session</span>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. FOR EVERYONE: REMEMBER THREE STEPS                          */}
      {/* ============================================================== */}
      <section id="everyone" className="py-14 sm:py-20 bg-gradient-to-br from-brand-navy-950 via-brand-navy-900 to-brand-navy-950 text-white border-b border-brand-navy-800 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="max-w-3xl mx-auto space-y-3">
            <Badge variant="amber" className="uppercase tracking-widest text-xs font-black">
              Crucial Protocol
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              For Everyone: Remember Three Steps
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light">
              Simple, powerful actions that every citizen, friend, parent, and teacher can take to save a young life.
            </p>
          </div>

          {/* The 3 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-white/10 border border-white/15 backdrop-blur-md space-y-3 text-left">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 text-brand-navy-950 font-black text-xl flex items-center justify-center">
                1
              </div>
              <h3 className="text-2xl font-black text-white">NOTICE</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Pay attention to sudden physical, emotional, and behavioral changes in those around you. Awareness is the first line of defence.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white/10 border border-white/15 backdrop-blur-md space-y-3 text-left">
              <div className="w-12 h-12 rounded-2xl bg-brand-teal-400 text-brand-navy-950 font-black text-xl flex items-center justify-center">
                2
              </div>
              <h3 className="text-2xl font-black text-white">TALK</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Open a calm, non-judgmental conversation. Listen more than you speak. Let them know they are supported and not alone.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white/10 border border-white/15 backdrop-blur-md space-y-3 text-left">
              <div className="w-12 h-12 rounded-2xl bg-sky-400 text-brand-navy-950 font-black text-xl flex items-center justify-center">
                3
              </div>
              <h3 className="text-2xl font-black text-white">GET HELP</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Reach out immediately to professional counsellors, the Antidote Helpline (<strong>+91 77779 27742</strong>), or verified medical rehab centres.
              </p>
            </div>

          </div>

          {/* Core Foundation Motto */}
          <div className="pt-6 border-t border-white/10 max-w-2xl mx-auto">
            <p className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-200 to-amber-300">
              Protect Young Lives. Build a Drug-Free India.
            </p>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. DOWNLOADABLE GUIDES & PRINTABLES                            */}
      {/* ============================================================== */}
      <section id="downloads" className="py-14 sm:py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Verified Printables"
            title="Downloadable Prevention Materials"
            subtitle="Free PDF toolkits, infographics, and awareness flyers developed for distribution across Indian campuses."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {downloadResources.map((dl) => (
              <StaggerItem key={dl.id} className="h-full">
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/90 shadow-subtle hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between space-y-4 h-full">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-brand-navy-900 flex items-center justify-center shadow-xs">
                      <FileText className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-teal-700 uppercase">{dl.fileFormat || 'PDF Document'}</span>
                      <h4 className="font-bold text-base text-brand-navy-950">{dl.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {dl.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60">
                    <Link
                      to={`/resources/${dl.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy-900 hover:text-brand-teal-600 transition-colors"
                    >
                      <span>Access Guide Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Helpline Banner */}
      <HelplineBanner />

    </div>
  );
};
