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
import { HelplineBanner } from '../components/common/HelplineBanner';

export const Resources: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'students' | 'parents' | 'teachers' | 'downloads'>('all');

  const studentResource = resourcesData.find(r => r.category === 'students');
  const parentResource = resourcesData.find(r => r.category === 'parents');
  const teacherResource = resourcesData.find(r => r.category === 'teachers');
  const downloadResources = resourcesData.filter(r => r.category === 'downloads');

  return (
    <div className="space-y-0">
      
      {/* Hero Header */}
      <section className="bg-brand-navy-950 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto relative z-10">
          <Badge variant="teal" className="mb-4">Knowledge & Intervention Hub</Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Educational Resources & Toolkits
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Evidence-based guides, early indicator checklists, and practical action frameworks for students, parents, and educators.
          </p>

          {/* Golden Rule Banner */}
          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-extrabold text-amber-300">
            <span>FOR EVERYONE:</span>
            <span className="text-white">NOTICE</span>
            <span className="text-teal-400">→</span>
            <span className="text-white">TALK</span>
            <span className="text-teal-400">→</span>
            <span className="text-teal-300">GET HELP</span>
          </div>
        </div>
      </section>

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
      <section id="students" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-36">
              <Badge variant="teal">Youth & Adolescents</Badge>
              <h2 className="text-3xl font-extrabold text-brand-navy-950 leading-tight">
                Know the Risks. Know Your Choices.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Navigating peer pressure, academic anxiety, and modern chemical temptations with clarity, courage, and self-respect.
              </p>

              <div className="rounded-2xl overflow-hidden shadow-subtle border border-slate-200">
                <img
                  src="/images/youth-empowerment.jpg"
                  alt="Young Indian students smiling confidently"
                  className="w-full h-56 object-cover"
                />
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs font-bold leading-relaxed">
                "{studentResource?.takeawayQuote}"
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
              {/* Warning Signs Box */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-subtle space-y-4">
                <div className="flex items-center gap-2 text-rose-700 font-extrabold text-base">
                  <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>Crucial Warning Signs & Pressures to Recognize:</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {studentResource?.warningSigns?.map((sign, i) => (
                    <li key={i} className="flex items-start gap-3 bg-rose-50/40 p-3 rounded-xl border border-rose-100">
                      <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed font-medium">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Practical Tips Box */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-subtle space-y-4">
                <div className="flex items-center gap-2 text-teal-800 font-extrabold text-base">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>Practical Strategies for Making Confident Choices:</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {studentResource?.actionableSteps?.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 bg-teal-50/40 p-3 rounded-xl border border-teal-100">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between p-5 rounded-2xl bg-brand-navy-900 text-white">
                <div className="text-xs">
                  <div className="font-bold text-amber-300">Need to talk to someone right now?</div>
                  <div className="text-slate-300">Free, private, zero stigma. We are here to listen.</div>
                </div>
                <a
                  href={`tel:${organizationData.contact.helpline}`}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl transition-all shrink-0"
                >
                  Call Helpline
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 2. PARENT SECTION */}
      <section id="parents" className="py-20 bg-white border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-36">
              <Badge variant="navy">Parents & Families</Badge>
              <h2 className="text-3xl font-extrabold text-brand-navy-950 leading-tight">
                Notice. Listen. Support.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                How parents can identify early changes in behaviour, replace combative friction with open dialogue, and navigate medical recovery.
              </p>

              <div className="rounded-2xl overflow-hidden shadow-subtle border border-slate-200">
                <img
                  src="/images/parent-child-communication.jpg"
                  alt="Supportive Indian parents communicating warmly with adolescent"
                  className="w-full h-56 object-cover"
                />
              </div>

              <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-950 text-xs font-bold leading-relaxed">
                "{parentResource?.takeawayQuote}"
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
              
              {/* Warning Signs for Parents */}
              <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-subtle space-y-4">
                <div className="flex items-center gap-2 text-brand-navy-950 font-extrabold text-base">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>Early Indicators & Behavioural Shifts to Notice:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                  {parentResource?.warningSigns?.map((sign, i) => (
                    <div key={i} className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                      <span className="leading-relaxed font-medium">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guidance Protocol */}
              <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-subtle space-y-4">
                <div className="flex items-center gap-2 text-brand-navy-950 font-extrabold text-base">
                  <HeartHandshake className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>Step-by-Step Compassionate Action Framework:</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {parentResource?.guidancePoints?.map((pt, i) => (
                    <div key={i} className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                      <div className="font-bold text-brand-navy-950 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                        <span>{pt.split(':')[0]}</span>
                      </div>
                      <div className="text-slate-600 pl-6 leading-relaxed">
                        {pt.split(':')[1]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. TEACHER SECTION */}
      <section id="teachers" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-36">
              <Badge variant="teal">Educators & Schools</Badge>
              <h2 className="text-3xl font-extrabold text-brand-navy-950 leading-tight">
                Observe. Understand. Act.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Campus safeguarding protocols, identifying emotional disengagement, and adhering to professional child-protection standards.
              </p>

              <div className="rounded-2xl overflow-hidden shadow-subtle border border-slate-200">
                <img
                  src="/images/school-awareness.jpg"
                  alt="Educator interacting positively with high school students"
                  className="w-full h-56 object-cover"
                />
              </div>

              <div className="p-4 rounded-xl bg-brand-navy-900 text-white text-xs font-bold leading-relaxed">
                "{teacherResource?.takeawayQuote}"
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
              
              {/* Teacher Warning Signs */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-subtle space-y-4">
                <div className="flex items-center gap-2 text-brand-navy-950 font-extrabold text-base">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>Campus Behavioural Indicators:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                  {teacherResource?.warningSigns?.map((sign, i) => (
                    <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0 mt-1.5" />
                      <span className="leading-relaxed font-medium">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Teacher Guidance Steps */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-subtle space-y-4">
                <div className="flex items-center gap-2 text-brand-navy-950 font-extrabold text-base">
                  <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>Institutional Safeguarding Code:</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {teacherResource?.guidancePoints?.map((pt, i) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <div className="font-bold text-brand-navy-950 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                        <span>{pt.split(':')[0]}</span>
                      </div>
                      <div className="text-slate-600 pl-6 leading-relaxed">
                        {pt.split(':')[1]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. DOWNLOADS SECTION */}
      <section id="downloads" className="py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Free Toolkits"
            title="Downloadable Printables & Policy Templates"
            subtitle="Free vector posters, family guidance handbooks, and school safeguarding documentation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {downloadResources.map((dl) => (
              <div
                key={dl.id}
                className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-subtle flex flex-col justify-between space-y-6 group hover:border-slate-300 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                      {dl.fileFormat}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {dl.downloadSize}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-lg text-brand-navy-950">
                    {dl.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {dl.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <a
                    href={`/contact?subject=Download+Request+${encodeURIComponent(dl.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-navy-900 hover:bg-brand-navy-800 text-white text-xs font-bold rounded-xl transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resource Package</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Helpline Banner */}
      <HelplineBanner />

    </div>
  );
};

