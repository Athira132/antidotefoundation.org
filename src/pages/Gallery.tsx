import React, { useState } from 'react';
import {
  Image,
  Eye,
  Filter,
  AlertCircle,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { galleryItems, galleryCategories } from '../data/gallery';
import { GalleryItem } from '../types';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { PageHero } from '../components/ui/PageHero';
import { Lightbox } from '../components/ui/Lightbox';
import { HelplineBanner } from '../components/common/HelplineBanner';
import {
  FadeUp,
  StaggerContainer,
  StaggerItem
} from '../components/animations/MotionComponents';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const currentIndex = activeItem ? filteredItems.findIndex(i => i.id === activeItem.id) : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveItem(filteredItems[currentIndex - 1]);
    } else {
      setActiveItem(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setActiveItem(filteredItems[currentIndex + 1]);
    } else {
      setActiveItem(filteredItems[0]);
    }
  };

  return (
    <div className="space-y-0">
      
      {/* 1. DISTINCTIVE HERO BANNER */}
      <PageHero
        badge="Visual Documentation"
        badgeVariant="teal"
        badgeIcon={Image}
        title="Our Visual Gallery"
        subtitle="Capturing the spirit of youth solidarity, campus awareness drives, compassionate counselling, and community outreach."
        breadcrumbs={[{ label: 'Gallery' }]}
        variant="centered"
        actions={
          <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left text-xs text-slate-300 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white font-semibold">Integrity Notice:</strong> In strict adherence to our non-profit truthfulness guidelines, imagery displayed is curated and marked as illustrative representations of field initiatives. We never fabricate fake documentary event records or misrepresent generated visuals.
            </div>
          </div>
        }
      />

      {/* 2. Main Gallery Section */}
      <section className="py-14 sm:py-20 bg-slate-50 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <FadeUp className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-navy-900 text-white shadow-md scale-105'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </FadeUp>

          {/* Image Grid with Staggered Entrance */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <StaggerItem key={item.id} className="h-full">
                <div
                  onClick={() => setActiveItem(item)}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-subtle hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-brand-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md text-brand-navy-900 flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-navy-950/80 text-teal-300 backdrop-blur-sm border border-white/10">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-1.5">
                    <h3 className="font-bold text-base text-brand-navy-950 group-hover:text-brand-teal-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <Lightbox
          isOpen={Boolean(activeItem)}
          item={activeItem}
          onClose={() => setActiveItem(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      {/* Helpline Banner */}
      <HelplineBanner />

    </div>
  );
};
