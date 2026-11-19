import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, HeartHandshake, PhoneCall } from 'lucide-react';
import { organizationData } from '../data/organization';
import { Button } from '../components/ui/Button';

export const ThankYou: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-4 bg-slate-50">
      <div className="max-w-xl w-full bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-elevated text-center space-y-6">
        
        <div className="w-16 h-16 rounded-full bg-teal-50 border-4 border-teal-100 text-teal-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Action Completed
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy-950">
            Thank You for Connecting with Us!
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            Your request has been received by the Antidote Foundation of India coordination team. We appreciate your partnership in building a healthier, drug-free nation.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Button to="/programs" variant="primary" size="md" fullWidth>
            <span>Explore Prevention Programs</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button to="/" variant="secondary" size="md" fullWidth>
            <span>Return to Homepage</span>
          </Button>
        </div>

        <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
          In need of urgent emotional or counselling support? Call our 24/7 Helpline:{' '}
          <a href={`tel:${organizationData.contact.helpline}`} className="text-brand-navy-950 font-bold hover:underline">
            {organizationData.contact.helplineDisplay}
          </a>
        </div>

      </div>
    </div>
  );
};
