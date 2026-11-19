import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft, Home, PhoneCall, Search } from 'lucide-react';
import { organizationData } from '../data/organization';
import { Button } from '../components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-4 bg-slate-50">
      <div className="max-w-xl w-full bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-elevated text-center space-y-6">
        
        <div className="text-6xl sm:text-7xl font-black text-brand-navy-900 tracking-tight">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy-950">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            The link you followed may have changed, moved, or is no longer available. Please explore one of our main portals below.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto text-xs font-bold pt-2">
          <Link
            to="/programs"
            className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 text-slate-700"
          >
            Programs & Events
          </Link>
          <Link
            to="/find-rehab-centres"
            className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 text-slate-700"
          >
            Find Rehab Centres
          </Link>
          <Link
            to="/resources"
            className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 text-slate-700"
          >
            Educational Guides
          </Link>
          <Link
            to="/volunteer"
            className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 text-slate-700"
          >
            Volunteer with Us
          </Link>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button to="/" variant="primary" size="md">
            <Home className="w-4 h-4 mr-1.5" />
            <span>Return to Homepage</span>
          </Button>
          <a
            href={`tel:${organizationData.contact.helpline}`}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100"
          >
            <PhoneCall className="w-4 h-4 text-amber-500" />
            <span>24/7 Helpline: {organizationData.contact.helplineDisplay}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
