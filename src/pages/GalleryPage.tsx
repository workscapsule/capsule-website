import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { galleryData, galleryCategories, GalleryCategoryName } from '../data/galleryData';
import { ConsultationForm } from '../components/sections/ConsultationForm';

interface GalleryPageProps {
  onOpenConsultation: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategoryName>('Paints');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  // Filter gallery items for active category (exactly 30 images)
  const categoryItems = useMemo(() => {
    return galleryData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const currentItem = activeItemIndex !== null ? categoryItems[activeItemIndex] : null;

  const handleNext = () => {
    if (activeItemIndex === null || categoryItems.length === 0) return;
    setActiveItemIndex((activeItemIndex + 1) % categoryItems.length);
  };

  const handlePrev = () => {
    if (activeItemIndex === null || categoryItems.length === 0) return;
    setActiveItemIndex((activeItemIndex - 1 + categoryItems.length) % categoryItems.length);
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
  }, [activeItemIndex, categoryItems.length]);

  const getBentoClasses = (idx: number) => {
    // Elegant repeating 10-item bento cadence with dense packing
    const pattern = idx % 10;
    switch (pattern) {
      case 0:
        return 'col-span-2 row-span-2';
      case 3:
        return 'col-span-2 row-span-1';
      case 7:
        return 'col-span-1 row-span-2';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <div className="pt-20 sm:pt-24 pb-14 w-full overflow-x-hidden bg-brand-ivory/30">
      {/* Header Banner - Compact & Elegant */}
      <div className="bg-brand-black text-white py-10 sm:py-14 relative overflow-hidden border-b border-brand-copper/30">
        <div className="absolute inset-0 bg-[radial-gradient(#B86D43_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-brand-copper uppercase mb-2">
            <Link to="/" className="hover:underline">HOME</Link>
            <span>/</span>
            <span>GALLERY</span>
          </div>
          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase max-w-3xl leading-tight">
            WORK <span className="text-brand-copper">GALLERY</span>
          </h1>
          <p className="mt-2.5 text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
            Curated category-wise photography of actual execution across Bengaluru by Capsule Company.
          </p>
        </div>
      </div>

      {/* 9 Category Selector Tabs - Sleek Horizontal Strip without Excessive Padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-5 sm:-mt-6 relative z-20">
        <div className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg border border-brand-border/80">
          <div className="flex items-center justify-start lg:justify-center flex-nowrap gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none pb-1 sm:pb-0 px-0.5">
            {galleryCategories.map((catName) => {
              const isSelected = selectedCategory === catName;
              return (
                <button
                  key={catName}
                  onClick={() => {
                    setSelectedCategory(catName);
                    setActiveItemIndex(null);
                  }}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-[11px] font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${isSelected
                      ? 'bg-brand-black text-brand-copper shadow-md ring-1 ring-brand-copper/50 scale-[1.02]'
                      : 'bg-brand-ivory/80 text-brand-black/80 hover:text-brand-copper hover:bg-brand-cream border border-brand-border/60'
                    }`}
                >
                  {isSelected && <Sparkles className="w-3 h-3 text-brand-copper" />}
                  <span>{catName}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${isSelected ? 'bg-brand-copper/20 text-brand-copper' : 'bg-gray-200/70 text-brand-muted'}`}>
                    {galleryData.filter(i => i.category === catName).length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Category Title & Scope Bar - Tight Top Spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-brand-border/80 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-copper animate-pulse" />
          <h2 className="font-display text-lg sm:text-xl font-bold uppercase text-brand-black tracking-wide">
            {selectedCategory}
          </h2>
          <span className="text-xs font-mono text-brand-muted bg-white px-2 py-0.5 rounded border border-brand-border/60">
            {categoryItems.length} Execution Photos
          </span>
        </div>

        <a
          href="mailto:Workscapsule@gmail.com"
          className="self-start sm:self-auto px-4 py-1.5 bg-brand-copper hover:bg-brand-copperLight text-white text-[11px] font-bold tracking-widest uppercase rounded-full shadow-xs transition-all cursor-pointer inline-flex items-center justify-center whitespace-nowrap"
        >
          REQUEST QUOTE FOR {selectedCategory.toUpperCase()}
        </a>
      </div>

      {/* Optimized Bento Grid Architecture - Dense Packing with Tight Crisp Gaps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 sm:mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 auto-rows-[160px] sm:auto-rows-[190px] lg:auto-rows-[210px] grid-flow-dense">
          {categoryItems.map((item, idx) => {
            const bentoSpan = getBentoClasses(idx);
            return (
              <div
                key={item.id}
                onClick={() => setActiveItemIndex(idx)}
                className={`group overflow-hidden rounded-xl cursor-pointer relative bg-neutral-900 border border-brand-border/60 hover:border-brand-copper/70 shadow-xs hover:shadow-xl transition-all duration-300 ${bentoSpan}`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Subtle dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 sm:p-4">
                  <div className="flex justify-end">
                    <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-brand-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-copperLight font-bold">
                      {item.category}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-white leading-snug line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Clean Fullscreen Modal Lightbox */}
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

          {/* Previous image control */}
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

          {/* Next image control */}
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

          {/* Pure Image Display Container with subtle caption footer */}
          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[80vh] max-w-[90vw] w-auto h-auto object-contain rounded-xl shadow-2xl block"
            />
            <div className="mt-3 text-center">
              <span className="text-xs font-bold text-brand-copper uppercase tracking-wider block">
                {currentItem.category} • Execution Photo
              </span>
              <p className="text-xs text-gray-300 mt-0.5">
                {currentItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Consultation Section with tight top spacing */}
      <div className="mt-14 sm:mt-16">
        <ConsultationForm />
      </div>
    </div>
  );
};
