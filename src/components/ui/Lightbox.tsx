import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { GalleryItem } from '../../types';

interface LightboxProps {
  isOpen: boolean;
  item: GalleryItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  item,
  onClose,
  onPrev,
  onNext
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev Button */}
        {onPrev && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors hidden sm:flex items-center justify-center"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {onNext && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors hidden sm:flex items-center justify-center"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Main Content Modal */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-4xl max-h-[90vh] flex flex-col bg-brand-navy-950 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative flex-grow flex items-center justify-center bg-black/40 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[70vh] w-auto object-contain mx-auto"
            />
          </div>

          {(item.title || item.description || item.isIllustrative) ? (
            <div className="p-5 sm:p-6 bg-brand-navy-950 border-t border-brand-navy-800 text-white space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                {item.category && (
                  <span className="text-xs uppercase tracking-wider font-bold text-teal-400">
                    {item.category}
                  </span>
                )}
                {item.isIllustrative && (
                  <span className="inline-flex items-center gap-1 text-[11px] bg-brand-navy-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                    <AlertCircle className="w-3 h-3 text-amber-400" />
                    Illustrative Representation
                  </span>
                )}
              </div>

              {item.title && (
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {item.title}
                </h3>
              )}

              {item.description && (
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          ) : (
            <div className="p-3 bg-brand-navy-950/90 text-center text-xs text-slate-400 border-t border-white/10">
              Antidote Foundation of India Photographic Archive
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

