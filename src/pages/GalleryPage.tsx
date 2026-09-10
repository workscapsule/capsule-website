import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  X, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { galleryData } from '../data/galleryData';
import { ConsultationForm } from '../components/sections/ConsultationForm';

interface GalleryPageProps {
  onOpenConsultation: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = () => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const currentItem = activeItemIndex !== null ? galleryData[activeItemIndex] : null;

  const handleNext = () => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((activeItemIndex + 1) % galleryData.length);
  };

  const handlePrev = () => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((activeItemIndex - 1 + galleryData.length) % galleryData.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) return;
      if (e.key === 'Escape') setActiveItemIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItemIndex]);

  return (
    <div className="pt-24 sm:pt-28 pb-16 w-full">
      {/* Header Banner */}
      <div className="bg-brand-black text-white py-14 sm:py-20 relative overflow-hidden border-b border-brand-copper/30">
        <div className="absolute inset-0 bg-[radial-gradient(#B86D43_1px,transparent_1px)] [background-size:28px_28px] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-brand-copper uppercase mb-3">
            <Link to="/" className="hover:underline">HOME</Link>
            <span>/</span>
            <span>GALLERY</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase max-w-3xl leading-tight">
            WORK <span className="text-brand-copper">GALLERY</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Real spaces, modular interiors, custom woodwork, and structural execution by Capsule Company in Bengaluru.
          </p>
        </div>
      </div>

      {/* Gallery Grid - Strict 2-Column Desktop, 1-Column Mobile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
          {galleryData.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveItemIndex(idx)}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-border/80 hover:border-brand-copper/50 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="w-full aspect-square bg-brand-ivory overflow-hidden relative">
                <img
                  src={item.image}
                  alt="Capsule Company Completed Project"
                  className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clean Fullscreen Modal with No Text Overlays */}
      {currentItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-brand-black/95 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveItemIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveItemIndex(null)}
            className="absolute top-5 right-5 sm:top-8 sm:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-brand-copper text-white flex items-center justify-center transition-all cursor-pointer z-20"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-brand-copper text-white flex items-center justify-center transition-all cursor-pointer z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-brand-copper text-white flex items-center justify-center transition-all cursor-pointer z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Clean Image Container without any text */}
          <div 
            className="relative max-w-5xl max-h-[90vh] flex items-center justify-center overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentItem.image}
              alt="Capsule Company Completed Project"
              className="max-h-[85vh] max-w-[90vw] w-auto h-auto object-contain rounded-xl shadow-2xl block"
            />
          </div>
        </div>
      )}

      {/* Consultation Form */}
      <div className="mt-20">
        <ConsultationForm />
      </div>
    </div>
  );
};
