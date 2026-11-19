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
  PhoneCall,
  FileText
} from 'lucide-react';
import { newsArticles } from '../data/news';
import { organizationData } from '../data/organization';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/ui/PageHero';
import { HelplineBanner } from '../components/common/HelplineBanner';
import {
  FadeUp,
  SlideInLeft,
  SlideInRight
} from '../components/animations/MotionComponents';

export const NewsArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  return (
    <div className="space-y-0">
      
      {/* 1. DISTINCTIVE HERO BANNER */}
      <PageHero
        badge={article.category}
        badgeVariant="teal"
        badgeIcon={FileText}
        title={article.title}
        subtitle={article.excerpt}
        breadcrumbs={[
          { label: 'News & Dispatches', href: '/news' },
          { label: article.title }
        ]}
        imageSrc={article.image}
        imageAlt={article.title}
        imageBadgeText={`Published: ${article.date} • ${article.verificationStatus}`}
        variant="split"
        actions={
          <Button to="/news" variant="secondary" size="md" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span>Back to All Dispatches</span>
          </Button>
        }
      />

      {/* 2. Main Content */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Main Image with subtle zoom */}
          <FadeUp className="rounded-3xl overflow-hidden shadow-elevated border border-slate-200 group">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </FadeUp>

          {/* Verification Box */}
          <FadeUp delay={0.1} className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="block font-bold">Editorial Verification Protocol:</strong>
              <p className="leading-relaxed">
                Status: <strong className="underline">{article.verificationStatus}</strong>. {article.verificationNote || 'Verified per registered institutional record and official public filing.'}
              </p>
            </div>
          </FadeUp>

          {/* Article Body */}
          <FadeUp delay={0.15} className="space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base font-normal">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </FadeUp>

          {/* Registered Non-profit Signature */}
          <FadeUp delay={0.2} className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              <strong className="text-brand-navy-950">Published by Secretariat:</strong> Antidote Foundation of India
              <div className="text-[11px] text-slate-400">Reg No: {organizationData.registrationNumber} • Bengaluru, Karnataka</div>
            </div>

            <Button to="/news" variant="outline" size="sm">
              <span>More News Dispatches</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </FadeUp>

        </div>
      </section>

      {/* Helpline Banner */}
      <HelplineBanner />

    </div>
  );
};
