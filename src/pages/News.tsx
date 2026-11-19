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
import { PageHero } from '../components/ui/PageHero';
import { HelplineBanner } from '../components/common/HelplineBanner';
import {
  FadeUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem
} from '../components/animations/MotionComponents';

export const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Institutional Dialogue', 'Official Announcement', 'Helpline Services', 'Campaign Updates'];

  const filteredArticles = selectedCategory === 'All'
    ? newsArticles
    : newsArticles.filter(a => a.category === selectedCategory);

  const featured = newsArticles[0];

  return (
    <div className="space-y-0">
      
      {/* 1. DISTINCTIVE HERO BANNER (Desktop: Full background; Mobile: Photo first) */}
      <PageHero
        badge="Official Communiques"
        badgeVariant="teal"
        badgeIcon={FileText}
        title="News & Press Dispatches"
        subtitle="Verified institutional updates, legal notices, campaign announcements, and public health engagements from the Antidote Foundation of India."
        breadcrumbs={[{ label: 'News & Updates' }]}
        imageSrc="/images/youth-empowerment.jpg"
        imageAlt="Antidote Foundation news and press dispatches"
        imageBadgeText="Official Press & Public Dispatches"
        variant="background"
        actions={
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-teal-500 text-slate-950 shadow-md scale-105'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        }
      />

      {/* Featured News Hero Card */}
      {featured && (
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="bg-slate-50 rounded-3xl border border-slate-200/90 overflow-hidden shadow-subtle hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-full bg-slate-100 overflow-hidden group">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
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

            </FadeUp>
          </div>
        </section>
      )}

      {/* Articles Grid (Staggered Cards) */}
      <section className="py-14 sm:py-20 bg-slate-50 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="Archived Bulletins"
            title="All Press Updates & Field Records"
            subtitle="Browse verified press releases and factual activity logs documenting our prevention work."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article) => (
              <StaggerItem key={article.id} className="h-full">
                <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-subtle hover:shadow-xl hover:-translate-y-1.5 transition-all flex flex-col justify-between group h-full">
                  <div>
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-navy-950/80 text-teal-300 backdrop-blur-sm border border-white/10">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 space-y-2.5">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{article.date}</span>
                        </span>
                        <span className="flex items-center gap-1 text-teal-700 font-semibold text-[11px]">
                          <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                          <span>{article.verificationStatus}</span>
                        </span>
                      </div>

                      <h3 className="font-extrabold text-base text-brand-navy-950 group-hover:text-brand-teal-700 transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 mt-2">
                    <div className="pt-3 flex items-center justify-between text-xs">
                      <span className="text-[10px] text-slate-400">
                        AFOI Secretariat
                      </span>
                      <Link
                        to={`/news/${article.slug}`}
                        className="font-bold text-brand-navy-900 group-hover:text-brand-teal-600 inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Read Dispatch</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
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
