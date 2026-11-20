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
import { SEO } from '../components/common/SEO';
import {
  StaggerContainer,
  StaggerItem
} from '../components/animations/MotionComponents';

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
      <SEO
        title="Gallery | AFOI Drug Awareness & Youth Empowerment"
        description="Explore photographs of Antidote Foundation of India's awareness campaigns, youth empowerment camps, community activities and public initiatives."
        canonicalPath="/gallery"
        keywords="Drug Awareness and Youth Empowerment Activities, AFOI gallery, Anti-drug campaigns India photos, Youth empowerment camp Bengaluru, Antidote Foundation of India gallery"
        breadcrumbs={[{ name: 'Gallery', path: '/gallery' }]}
      />

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

          {/* Uniform Gallery Grid: 4 cols on xl desktop, 3 on lg, 2 on tablet, 1 on mobile */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
            {galleryItems.map((item) => (
              <StaggerItem key={item.id} className="h-full">
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1 overflow-hidden">

                  {/* 1. Uniform Image Display Area: Same dimensions for every card, 100% visible, zero cropping */}
                  <div
                    onClick={() => setActiveItem(item)}
                    className="relative w-full aspect-[4/3] flex items-center justify-center cursor-pointer p-2 overflow-hidden bg-white"
                  >
                    <img
                      src={item.image}
                      alt={item.title ? `${item.title} - Antidote Foundation of India (AFOI)` : 'Antidote Foundation of India gallery photograph'}
                      className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                      style={{ objectFit: 'contain' }}
                    />
                    <div className="absolute inset-0 bg-brand-navy-950/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-brand-navy-900 flex items-center justify-center shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* 2. Uniform Description Area: Same dimensions for every card, no card stretching */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between h-[140px] border-t border-slate-100 bg-white">
                    <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed line-clamp-3 overflow-hidden">
                      {item.description}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveItem(item)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal-700 hover:text-brand-navy-900 transition-colors cursor-pointer group/btn"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>

                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

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
