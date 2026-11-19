import React from 'react';
import { ShieldCheck, AlertCircle, Scale, FileText, CheckCircle2 } from 'lucide-react';
import { organizationData } from '../data/organization';
import { Badge } from '../components/ui/Badge';
import { PageHero } from '../components/ui/PageHero';
import { HelplineBanner } from '../components/common/HelplineBanner';
import { FadeUp } from '../components/animations/MotionComponents';

export const TermsOfUse: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* 1. DISTINCTIVE HERO BANNER */}
      <PageHero
        badge="Terms & Conditions"
        badgeVariant="teal"
        badgeIcon={Scale}
        title="Terms of Use"
        subtitle="Effective Date: April 2026 • Last Updated: November 2026"
        breadcrumbs={[{ label: 'Terms of Use' }]}
        variant="compact"
        actions={
          <div className="p-4 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs text-left flex items-start gap-3 mt-2">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold text-amber-300">Draft Notice for Legal Review:</strong>
              These terms of use represent the foundational operating terms for Antidote Foundation of India web resources and are published in draft status pending formal ratification by the society's legal advisory committee.
            </div>
          </div>
        }
      />

      {/* 2. Main Terms Content */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base font-normal">
            
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy-950">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing, browsing, or utilizing the web portals, educational toolkits, guides, or assistance channels offered by the <strong className="text-brand-navy-950">{organizationData.name}</strong> ("AFOI", "we", "our"), you agree to be bound by these Terms of Use and all applicable laws and regulations of the Republic of India. If you do not agree to these terms, you should discontinue use of this site.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy-950">
                2. Educational & Informational Purpose Only (Not Medical Triage)
              </h2>
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 text-xs space-y-2">
                <strong className="block font-bold">Crucial Medical Disclaimer:</strong>
                <p>
                  All content published on this website — including substance risk advisories, peer pressure guides, warning checklists, and telephonic counselling interactions — is provided solely for public health awareness, youth education, and peer support.
                </p>
                <p>
                  AFOI is not a hospital or emergency clinical triage facility. The information on this website is <strong>not a substitute for professional psychiatric diagnosis, clinical detoxification, pharmacological prescription, or emergency room care</strong>. In cases of acute overdose, severe withdrawal, or psychiatric crisis, immediately dial <strong>112</strong> or transport the individual to the nearest hospital casualty department.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy-950">
                3. Acceptable Use Policy
              </h2>
              <p>When utilizing our website and forms, you agree not to:</p>
              <ul className="space-y-2 list-disc pl-5 text-xs sm:text-sm">
                <li>Transmit any abusive, defamatory, harassing, obscene, fraudulent, or unlawful content.</li>
                <li>Impersonate another individual or misrepresent your affiliation with schools, NGOs, or healthcare institutions.</li>
                <li>Attempt to breach the security, probe vulnerabilities, or disrupt server infrastructure.</li>
                <li>Use our contact forms or helpline for commercial marketing, solicitation, or spamming.</li>
                <li>Promote, solicit, or facilitate the procurement or distribution of illicit or controlled chemical substances.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy-950">
                4. Intellectual Property & Fair Use of Educational Materials
              </h2>
              <p>
                All text, educational handbooks, infographics, layout designs, and downloadable PDFs published by AFOI are protected under Indian and international intellectual property laws. Educational institutions, teachers, and non-profit volunteer groups are granted permission to download, print, and distribute our downloadable toolkits for free non-commercial public health awareness, provided the Antidote Foundation of India attribution and registration credentials remain intact.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy-950">
                5. External Links & Rehabilitation Directory
              </h2>
              <p>
                Our website may contain reference links to third-party public resources, government portals, or medical institutions (such as NIMHANS or state health departments). While AFOI exercises diligent care to catalogue verified autonomous and government facilities, we do not exercise administrative control over third-party facilities and assume no liability for the independent clinical practices, fees, or outcomes at external hospitals.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy-950">
                6. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable Indian law, Antidote Foundation of India, its trustees, officers, counsellors, and volunteers shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of, or inability to use, our web materials or helpline recommendations.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy-950">
                7. Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms of Use shall be governed by and construed in accordance with the laws of the State of Karnataka and the Union of India. Any legal dispute or controversy arising out of these terms shall be subject to the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy-950">
                8. Modifications & Contact Information
              </h2>
              <p>
                AFOI reserves the right to revise these Terms of Use at any time. Continued use of the website following amendments signifies acceptance of the updated terms. For inquiries regarding acceptable usage or institutional licensing, contact:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <div><strong>Antidote Foundation of India (AFOI)</strong></div>
                <div>Secretariat: No. 38, Lakshman Layout, J. P. Nagar, Bengaluru, Karnataka 560 078, India</div>
                <div>Society Registration: {organizationData.registrationNumber}</div>
                <div>Helpline: {organizationData.contact.helplineDisplay}</div>
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
