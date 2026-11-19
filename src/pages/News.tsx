import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  FileText,
  Clock,
  Sparkles,
  Search
} from 'lucide-react';
import { newsArticles } from '../data/news';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { HelplineBanner } from '../components/common/HelplineBanner';

export const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Institutional Dialogue', 'Official Announcement', 'Helpline Services', 'Campaign Updates'];

  const filteredArticles = selectedCategory === 'All'
    ? newsArticles
    : newsArticles.filter(a => a.category === selectedCategory);

  const featured = newsArticles[0];

  return (
    <div className="space-y-0">
      
      {/* Hero Header */}
      <section className="bg-brand-navy-950 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto relative z-10">
          <Badge variant="teal" className="mb-4">Official Communiques</Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            News & Press Dispatches
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Verified institutional updates, legal notices, campaign announcements, and public health engagements from the Antidote Foundation of India.
          </p>
        </div>
      </section>

      {/* Featured News Hero Card */}
      {featured && (
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 rounded-3xl border border-slate-200/90 overflow-hidden shadow-subtle hover:shadow-elevated transition-all grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-full bg-slate-100 overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 shadow">
                    Featured Brief
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="teal">{featured.category}</Badge>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{featured.date}</span>
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-brand-navy-950 leading-snug">
                    {featured.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {featured.excerpt}
                  </p>

                  {/* Verification Status Flag */}
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Verification Note:</strong> {featured.verificationNote}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <Link
                    to={`/news/${featured.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy-900 hover:text-brand-teal-700 transition-colors"
                  >
                    <span>Read Full Dispatch</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </section>
      )}

      {/* Main Articles Listing */}
      <section className="py-16 bg-slate-50 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-navy-900 text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-navy-950/80 text-teal-300 backdrop-blur-sm border border-white/10 uppercase tracking-wider">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.date}</span>
                    </div>

                    <h3 className="font-extrabold text-lg text-brand-navy-950 group-hover:text-brand-teal-700 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="pt-2 text-[10px] text-slate-500 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{article.verificationStatus}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                  <div className="pt-3">
                    <Link
                      to={`/news/${article.slug}`}
                      className="text-xs font-bold text-brand-navy-900 group-hover:text-brand-teal-600 inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Read Full Report</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
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
