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
import { Lightbox } from '../components/ui/Lightbox';
import { HelplineBanner } from '../components/common/HelplineBanner';

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
      
      {/* Hero Header */}
      <section className="bg-brand-navy-950 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto relative z-10">
          <Badge variant="teal" className="mb-4">Visual Documentation</Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Our Visual Gallery
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Capturing the spirit of youth solidarity, campus awareness drives, compassionate counselling, and community outreach.
          </p>

          {/* Transparency Disclaimer Notice */}
          <div className="mt-8 max-w-2xl mx-auto p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left text-xs text-slate-300 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white font-semibold">Integrity Notice:</strong> In strict adherence to our non-profit truthfulness guidelines, imagery displayed is curated and marked as illustrative representations of field initiatives. We never fabricate fake documentary event records or misrepresent generated visuals.
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-16 bg-slate-50 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {galleryCategories.map((cat) => (
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

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-subtle hover:shadow-elevated transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-lg">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-navy-950/80 text-teal-300 backdrop-blur-sm border border-white/10 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-base text-brand-navy-950 group-hover:text-brand-teal-700 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100">
                    <span className="inline-flex items-center gap-1 text-slate-500">
                      <AlertCircle className="w-3 h-3 text-amber-500" />
                      Illustrative
                    </span>
                    <span className="font-semibold text-brand-navy-900 group-hover:underline">
                      View Larger →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={Boolean(activeItem)}
        item={activeItem}
        onClose={() => setActiveItem(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* Helpline Banner */}
      <HelplineBanner />

    </div>
  );
};

