import React, { useState } from 'react';
import {
  Image,
  Maximize2,
  ArrowRight
} from 'lucide-react';
import { galleryItems } from '../data/gallery';
import { GalleryItem } from '../types';
import { PageHero } from '../components/ui/PageHero';
import { Lightbox } from '../components/ui/Lightbox';
import { HelplineBanner } from '../components/common/HelplineBanner';

export const Gallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const currentIndex = activeItem ? galleryItems.findIndex(i => i.id === activeItem.id) : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveItem(galleryItems[currentIndex - 1]);
    } else {
      setActiveItem(galleryItems[galleryItems.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < galleryItems.length - 1) {
      setActiveItem(galleryItems[currentIndex + 1]);
    } else {
      setActiveItem(galleryItems[0]);
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
        subtitle="Authentic photographic documentation of youth empowerment camps, community consultations, campus initiatives, and outreach by Antidote Foundation of India."
        breadcrumbs={[{ label: 'Gallery' }]}
        imageSrc="/images/gallery_06.jpg"
        imageAlt="Antidote Foundation of India youth empowerment and community moments"
        imageBadgeText="Official Photographic Documentation"
        variant="background"
      />

      {/* 2. Main Gallery Section */}
      <section className="py-12 sm:py-16 bg-slate-50 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Responsive Gallery Columns: 4 cols on xl desktop, 3 on lg, 2 on tablet, 1 on mobile */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 [column-fill:_balance]">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid mb-6 inline-block w-full"
              >
                <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">

                  {/* Photo Container: Natural Aspect Ratio, Fully Visible, Zero Cropping, object-fit contain */}
                  <div
                    onClick={() => setActiveItem(item)}
                    className="relative w-full cursor-pointer overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.title || 'Antidote Foundation of India gallery photograph'}
                      className="w-full h-auto object-contain block group-hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                      style={{ objectFit: 'contain' }}
                    />
                    <div className="absolute inset-0 bg-brand-navy-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-brand-navy-900 flex items-center justify-center shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Content Below Photo: 2-3 lines initially + Read More Option */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => setActiveItem(item)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal-700 hover:text-brand-navy-900 transition-colors cursor-pointer group/btn"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox / Clean Detail View */}
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

export default Gallery;
