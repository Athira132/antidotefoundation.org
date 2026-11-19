import React from 'react';
import { ShieldCheck, AlertCircle, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { organizationData } from '../data/organization';
import { Badge } from '../components/ui/Badge';
import { HelplineBanner } from '../components/common/HelplineBanner';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* Hero Header */}
      <section className="bg-brand-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <Badge variant="teal">Legal & Data Protection</Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Effective Date: April 2026 • Last Updated: November 2026
          </p>

          <div className="p-4 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs text-left flex items-start gap-3 mt-4">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold text-amber-300">Draft Status Legal Notice:</strong>
              This privacy policy document serves as the preliminary operational data governance standard for the Antidote Foundation of India web platforms and is marked as a working draft subject to formal legal review and periodic statutory update under Indian Data Protection laws.
            </div>
          </div>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base font-normal">
          
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-navy-950">
              1. Introduction & Organizational Commitment
            </h2>
            <p>
              The <strong className="text-brand-navy-950">{organizationData.name}</strong> (referred to as "AFOI", "we", "us", or "our"), registered under the Karnataka Societies Registration Act (Reg: {organizationData.registrationNumber}) at {organizationData.address.full}, is deeply committed to protecting the privacy, anonymity, and dignity of our website visitors, helpline callers, volunteers, donors, and service users.
            </p>
            <p>
              Given the sensitive nature of substance abuse prevention, youth guidance, and emotional counselling, we adhere to the strictest standards of data confidentiality. We never sell, rent, commercialize, or weaponize user information.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-navy-950">
              2. Information We Collect
            </h2>
            <p>We only collect personal information that is voluntarily provided through our digital touchpoints:</p>
            <ul className="space-y-2 list-disc pl-5 text-xs sm:text-sm">
              <li><strong>Contact & Guidance Inquiries:</strong> Name, phone number, email address, topic of inquiry, and message content when submitting questions or requesting tele-counselling.</li>
              <li><strong>Volunteer Recruitment Applications:</strong> Name, age, mobile number, educational institution, city, state, preferred volunteer domain, and availability schedule.</li>
              <li><strong>Pledge & Donation Inquiries:</strong> Name, phone number, email address, PAN card details (for official statutory 80G tax receipting), and chosen contribution amount.</li>
              <li><strong>Helpline Records:</strong> Call logs for incoming helpline assistance are maintained with strict psychological confidentiality; callers are never required to state their legal identities to receive emotional support.</li>
              <li><strong>Technical Browsing Data:</strong> Non-personally identifiable log information such as browser version, operating system, and aggregate visit counters for performance optimization.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-navy-950">
              3. Purpose and Use of Collected Data
            </h2>
            <p>Collected information is strictly utilized to:</p>
            <ul className="space-y-2 list-disc pl-5 text-xs sm:text-sm">
              <li>Deliver requested psychological first aid, tele-counselling follow-ups, and rehabilitation navigation.</li>
              <li>Process and review volunteer fellowship and campus ambassador applications.</li>
              <li>Coordinate school awareness seminars, educational downloads, and institutional workshops.</li>
              <li>Issue donation receipts and comply with statutory financial auditing regulations.</li>
              <li>Maintain the security, performance, and legal integrity of our web portals.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-navy-950">
              4. Absolute Confidentiality in Counselling Services
            </h2>
            <p>
              All interactions conducted through our 24/7 dedicated helpline (+91 77779 27742) or private guidance meetings are protected by client-counsellor ethical privilege. We do not disclose caller identities, substance disclosures, or domestic situations to schools, employers, parents, or law enforcement, except under immediate, life-threatening imminent danger or where mandatory statutory child-protection disclosure is legally mandated by an Indian court of law.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-navy-950">
              5. Data Storage, Security & Retention
            </h2>
            <p>
              We enforce administrative, technical, and physical security measures to safeguard collected personal data against unauthorized access, destruction, alteration, or disclosure. All digital transmissions over this website utilize TLS 1.3 encryption. Personal records are retained only for the period necessary to fulfill non-profit operational purposes or statutory compliance, after which they are securely expunged.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-navy-950">
              6. Third-Party Sharing Restrictions
            </h2>
            <p>
              AFOI maintains a strict zero-third-party-commercialization policy. We do not sell data to marketing brokers, advertisers, or corporate entities. Information is shared only with accredited public hospitals or de-addiction medical units upon the explicit consent and request of the individual seeking clinical admission assistance.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-navy-950">
              7. Your Rights & Data Rectification
            </h2>
            <p>
              Every user has the right to request access to any personal data retained by us, request correction of inaccurate details, or request permanent deletion of their volunteer or enquiry records. Such requests may be submitted in writing to our registered office in Bengaluru.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-navy-950">
              8. Contacting Our Data Privacy Desk
            </h2>
            <p>
              For any questions, clarifications, or concerns regarding this draft privacy framework, please reach out to our Bengaluru Secretariat:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
              <div><strong>Antidote Foundation of India</strong></div>
              <div>No. 38, Lakshman Layout, J. P. Nagar, Bengaluru, Karnataka 560 078, India</div>
              <div>Registration Number: {organizationData.registrationNumber}</div>
              <div>24/7 Helpline: {organizationData.contact.helplineDisplay}</div>
            </div>
          </div>

        </div>
      </section>

      {/* Helpline Banner */}
      <HelplineBanner />

    </div>
  );
};

