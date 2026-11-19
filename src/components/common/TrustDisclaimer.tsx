import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';
import { organizationData } from '../../data/organization';

interface TrustDisclaimerProps {
  className?: string;
}

export const TrustDisclaimer: React.FC<TrustDisclaimerProps> = ({ className = '' }) => {
  return (
    <div className={`bg-slate-50 border border-slate-200/90 rounded-xl p-4 sm:p-5 text-xs text-slate-600 leading-relaxed ${className}`}>
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-brand-navy-700 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div className="font-bold text-brand-navy-950 flex flex-wrap items-center gap-2">
            <span>Verified Non-Profit Governance & Transparency Notice</span>
            <span className="bg-brand-navy-100 text-brand-navy-900 text-[10px] font-bold px-2 py-0.5 rounded">
              Reg: {organizationData.registrationNumber}
            </span>
          </div>
          <p>
            Antidote Foundation of India is officially registered under the Karnataka Societies Registration Act. We uphold the highest standards of non-profit transparency. In strict compliance with charitable trust governance, all official financial disclosures, bank account mandates, and statutory certifications (including 80G / 12A / FCRA) are published solely upon formal completion of regulatory filings. Unverified statistical claims or third-party endorsements are never fabricated.
          </p>
          <div className="flex items-center gap-1.5 text-slate-500 pt-1 text-[11px]">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>To verify our registered constitution or inspect foundational society documents, contact our registered office in J. P. Nagar, Bengaluru.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

