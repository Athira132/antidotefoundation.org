import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ShieldCheck,
  AlertCircle,
  Share2,
  Clock,
  Building,
  PhoneCall
} from 'lucide-react';
import { newsArticles } from '../data/news';
import { organizationData } from '../data/organization';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { HelplineBanner } from '../components/common/HelplineBanner';

export const NewsArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  return (
    <div className="space-y-0">
      
      {/* Hero Header */}
      <section className="bg-brand-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-xs font-semibold text-teal-300 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All News</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="teal">{article.category}</Badge>
            <span className="text-xs text-slate-300 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Main Image */}
          <div className="rounded-3xl overflow-hidden shadow-elevated border border-slate-200">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-80 sm:h-96 object-cover"
            />
          </div>

          {/* Verification Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="block font-bold">Editorial Verification Protocol:</strong>
              <p className="leading-relaxed">
                Status: <strong className="underline">{article.verificationStatus}</strong>. {article.verificationNote || 'Verified per registered institutional record and official public filing.'}
              </p>
            </div>
          </div>

          {/* Article Body */}
          <div className="space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base font-normal">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Registered Non-profit Signature */}
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              <strong className="text-brand-navy-950">Published by Secretariat:</strong> Antidote Foundation of India
              <div className="text-[11px] text-slate-400">Reg No: {organizationData.registrationNumber} • Bengaluru, Karnataka</div>
            </div>

            <Button to="/news" variant="outline" size="sm">
              <span>More News Dispatches</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>

        </div>
      </section>

      {/* Helpline Banner */}
      <HelplineBanner />

    </div>
  );
};
