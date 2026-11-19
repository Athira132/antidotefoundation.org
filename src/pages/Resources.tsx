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
  HeartHandshake
} from 'lucide-react';
import { resourcesData, resourceCategories } from '../data/resources';
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

export const Resources: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'students' | 'parents' | 'teachers' | 'downloads'>('all');

  const studentResource = resourcesData.find(r => r.category === 'students');
  const parentResource = resourcesData.find(r => r.category === 'parents');
  const teacherResource = resourcesData.find(r => r.category === 'teachers');
  const downloadResources = resourcesData.filter(r => r.category === 'downloads');

  return (
    <div className="space-y-0">
      
      {/* 1. DISTINCTIVE HERO BANNER */}
      <PageHero
        badge="Knowledge & Intervention Hub"
        badgeVariant="teal"
        badgeIcon={BookOpen}
        title="Educational Resources & Toolkits"
        subtitle="Evidence-based guides, early indicator checklists, and practical action frameworks for students, parents, and educators."
        breadcrumbs={[{ label: 'Resources' }]}
        variant="centered"
        actions={
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-extrabold text-amber-300">
            <span>FOR EVERYONE:</span>
            <span className="text-white">NOTICE</span>
            <span className="text-teal-400">→</span>
            <span className="text-white">TALK</span>
            <span className="text-teal-400">→</span>
            <span className="text-teal-300">GET HELP</span>
          </div>
        }
      />

      {/* Category Tabs Navigation */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {[
              { id: 'all', label: 'All Resources' },
              { id: 'students', label: 'For Students' },
              { id: 'parents', label: 'For Parents' },
              { id: 'teachers', label: 'For Teachers' },
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
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
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

      {/* 1. STUDENT SECTION */}
      <section id="students" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            <SlideInLeft className="lg:col-span-4 space-y-4 lg:sticky lg:top-36">
              <Badge variant="teal">Youth & Adolescents</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy-950 leading-tight">
                Know the Risks. Know Your Choices.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Curiosity, peer pressure, exam anxiety, or seeking a temporary escape are natural feelings, but turning to chemical substances has long-term neurological consequences.
              </p>
              
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <span className="font-bold text-xs text-brand-navy-950 block">Got Questions Without The Lecture?</span>
                <p className="text-xs text-slate-500">
                  Our youth helpline is completely confidential. We do not report callers or notify schools.
                </p>
                <div className="pt-1">
                  <a
                    href={`tel:${organizationData.contact.helpline}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call {organizationData.contact.helplineDisplay}</span>
                  </a>
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight className="lg:col-span-8 space-y-6">
              
              {/* Myth Busters */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
                <h3 className="font-bold text-lg text-brand-navy-950 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  <span>Common Myths vs. Scientific Reality</span>
                </h3>
                
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-slate-50 space-y-1">
                    <strong className="text-rose-700 block">Myth: "Vapes and modern synthetic herbs are completely harmless."</strong>
                    <p className="text-slate-600">
                      <strong>Fact:</strong> E-cigarettes and designer synthetics contain ultra-concentrated nicotine, heavy metals, and uncontrolled chemical stimulants that cause accelerated neuro-addiction and respiratory inflammation in adolescent lungs.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 space-y-1">
                    <strong className="text-rose-700 block">Myth: "Prescription pills for ADHD or sleep are safe to share with friends."</strong>
                    <p className="text-slate-600">
                      <strong>Fact:</strong> Non-prescribed pharmaceutical misuse (opioids, sedatives, methylphenidate) carries severe risk of chemical dependency, cardiac irregularity, and lethal overdose when combined with other agents.
                    </p>
                  </div>
                </div>
              </div>

              {/* Peer Refusal Strategies */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
                <h3 className="font-bold text-lg text-brand-navy-950 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-teal-600" />
                  <span>Confidence Script: How to Say 'No' Without Losing Face</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>The Direct Blame Shift:</strong> "I’ve got medical sports training / coach blood tests early tomorrow — can’t touch anything."</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>The Firm Alternative:</strong> "I’m good with a soda. You guys do what you want, I’m chilling."</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>The Code Exit:</strong> Agree on a safe code emoji with an older sibling or parent so they call and demand you return home immediately.</span>
                  </li>
                </ul>
              </div>

            </SlideInRight>

          </div>
        </div>
      </section>

      {/* 2. PARENT SECTION */}
      <section id="parents" className="py-14 sm:py-20 bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            <SlideInLeft className="lg:col-span-4 space-y-4 lg:sticky lg:top-36">
              <Badge variant="amber">Parents & Families</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy-950 leading-tight">
                Listening Without Accusation
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Finding suspected substance paraphernalia or sudden behavioural shifts triggers natural panic. Your reaction in the first 48 hours determines whether your child isolates or accepts help.
              </p>
              
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                <span className="font-bold text-xs text-brand-navy-950 block">Need Parent Coaching?</span>
                <p className="text-xs text-amber-900">
                  Our family counsellors guide parents through non-combative confrontation and clinical assessment navigation.
                </p>
                <div className="pt-1">
                  <Button to="/contact?subject=Parent+Counselling" variant="primary" size="sm" fullWidth>
                    <span>Request Family Consultation</span>
                  </Button>
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight className="lg:col-span-8 space-y-6">
              
              {/* Warning Signs */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
                <h3 className="font-bold text-lg text-brand-navy-950">
                  Observable Warning Signs to Note (Not Conclusive Proof Alone)
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <strong className="text-brand-navy-950 block font-bold">Behavioural & Academic</strong>
                    <ul className="space-y-1.5 text-slate-600 text-xs">
                      <li>• Sudden drop in school grades & unexplained absenteeism</li>
                      <li>• Abrupt change in friendship circles, secretive phone locks</li>
                      <li>• Uncharacteristic cash requests or missing household valuables</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <strong className="text-brand-navy-950 block font-bold">Physical & Emotional</strong>
                    <ul className="space-y-1.5 text-slate-600 text-xs">
                      <li>• Drastic appetite changes, rapid weight fluctuation</li>
                      <li>• Severe mood swings, explosive hostility or extreme lethargy</li>
                      <li>• Bloodshot eyes, dilated pupils, heavy reliance on eye drops</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Dialogue Guide */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
                <h3 className="font-bold text-lg text-brand-navy-950">
                  Recommended Dialogue Rules
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Choose Calm Timing:</strong> Never start a confrontation when either you or your child is angry, intoxicated, or running late for school.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Use 'I' Statements:</strong> Say <em>"I noticed you've seemed exhausted and withdrawn lately, and I love you too much not to ask"</em> instead of <em>"What are you hiding from me?"</em>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Separate the Person from the Behaviour:</strong> Reassure your adolescent that your love is unconditional, but substance risk must be medically managed together.
                    </div>
                  </div>
                </div>
              </div>

            </SlideInRight>

          </div>
        </div>
      </section>

      {/* 3. TEACHER & EDUCATOR SECTION */}
      <section id="teachers" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            <SlideInLeft className="lg:col-span-4 space-y-4 lg:sticky lg:top-36">
              <Badge variant="teal">Teachers & Educational Institutions</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy-950 leading-tight">
                Campus Safeguarding Framework
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Secondary schools and universities are critical lines of defence. Punitive expulsion often pushes a struggling student deeper into predatory networks; structured restorative guidance saves lives.
              </p>
              
              <div className="pt-2">
                <Button to="/contact?subject=School+Safeguarding+Workshop" variant="primary" size="sm">
                  <span>Book Teacher Training Module</span>
                </Button>
              </div>
            </SlideInLeft>

            <SlideInRight className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6">
              <h3 className="font-bold text-lg text-brand-navy-950">
                Institutional SOP (Standard Operating Procedure) for Classrooms
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-xl bg-brand-navy-900 text-white flex items-center justify-center shrink-0 font-bold">1</div>
                  <div className="space-y-1">
                    <strong className="text-brand-navy-950 block">Discreet Clinical Observation</strong>
                    <p className="text-slate-600">Document observable facts (attendance, changes in physical appearance) without making public accusations in front of peers.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-xl bg-brand-navy-900 text-white flex items-center justify-center shrink-0 font-bold">2</div>
                  <div className="space-y-1">
                    <strong className="text-brand-navy-950 block">Designated Counsellor Referral</strong>
                    <p className="text-slate-600">Direct the student to the school psychologist or internal guidance committee under confidential protection.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-xl bg-brand-navy-900 text-white flex items-center justify-center shrink-0 font-bold">3</div>
                  <div className="space-y-1">
                    <strong className="text-brand-navy-950 block">Supportive Parent Conference</strong>
                    <p className="text-slate-600">Engage the family as care partners rather than disciplinary adversaries, providing external public de-addiction directory referrals.</p>
                  </div>
                </div>
              </div>
            </SlideInRight>

          </div>
        </div>
      </section>

      {/* 4. DOWNLOADABLE GUIDES */}
      <section id="downloads" className="py-14 sm:py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Verified Printables"
            title="Downloadable Prevention Materials"
            subtitle="Free PDF toolkits, infographics, and awareness flyers developed for distribution across Indian campuses."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
