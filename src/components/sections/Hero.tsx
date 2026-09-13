import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Award, 
  Phone, 
  Pause, 
  Play,
  ArrowDown,
  Building2, 
  LayoutGrid, 
  ChefHat, 
  Hammer, 
  Building, 
  Sparkles, 
  Zap, 
  Grid 
} from 'lucide-react';
import { companyConfig } from '../../config/company';

interface BannerSlide {
  id: string;
  categoryNumber: string;
  categoryName: string;
  shortLabel: string;
  headlineMain: string;
  headlineHighlight: string;
  description: string;
  serviceLink: string;
  image: string;
  locationBadge: string;
  keySpecs: string[];
}

const bannerSlides: BannerSlide[] = [
  {
    id: 'construction',
    categoryNumber: '01',
    categoryName: 'CONSTRUCTION & CIVIL WORKS',
    shortLabel: '01 Civil Works',
    headlineMain: 'FOUNDED ON STRENGTH.',
    headlineHighlight: 'BUILT TO ENDURE.',
    description: 'Turnkey residential villas, independent homes, and structural engineering across Bengaluru with certified civil engineers and lab-tested Fe550D steel.',
    serviceLink: '/services#construction-civil',
    image: '/assets/gallery/gallery-elevation.jpg',
    locationBadge: 'Hebbal Kempapura • Villa Structure',
    keySpecs: ['Fe550D Lab-Tested Steel', 'RCC Structural Supervision', 'On-Time Handover Guarantee']
  },
  {
    id: 'interiors',
    categoryNumber: '02',
    categoryName: 'TURNKEY INTERIOR DESIGN',
    shortLabel: '02 Interiors',
    headlineMain: 'IMAGINED WITH ELEGANCE.',
    headlineHighlight: 'CRAFTED WITH PRECISION.',
    description: 'Bespoke spatial transformations with architectural false ceilings, concealed mood illumination, acoustic panelling, and luxury European finishes.',
    serviceLink: '/services#turnkey-interiors',
    image: '/assets/gallery/gallery-living.jpg',
    locationBadge: 'Yelahanka • Luxury Penthouse',
    keySpecs: ['Architectural False Ceilings', 'Custom Ambient Lighting', '45-Day Move-In Guarantee']
  },
  {
    id: 'kitchens',
    categoryNumber: '03',
    categoryName: 'MODULAR KITCHENS & CLOSETS',
    shortLabel: '03 Kitchens',
    headlineMain: 'CULINARY MASTERY.',
    headlineHighlight: 'ENGINEERED LUXURY.',
    description: 'Bespoke island kitchens and walk-in closets engineered with 100% boiling-water-proof (BWP) 710 marine ply and soft-close German fittings.',
    serviceLink: '/services#modular-kitchens',
    image: '/assets/gallery/gallery-kitchen.jpg',
    locationBadge: 'Sadashivanagar • Island Kitchen',
    keySpecs: ['100% Waterproof Marine Ply', 'Blum & Häfele Soft-Close', 'Custom Quartz Countertops']
  },
  {
    id: 'carpentry',
    categoryNumber: '04',
    categoryName: 'EXPERT CARPENTRY & MILLWORK',
    shortLabel: '04 Carpentry',
    headlineMain: 'ARTISANAL WOODWORK.',
    headlineHighlight: 'TIMELESS DETAILING.',
    description: 'In-house master craftsmanship delivering solid teak pivot doors, fluted timber acoustic feature walls, floating consoles, and architectural millwork.',
    serviceLink: '/services#carpentry-fabrication',
    image: '/assets/gallery/gallery-glassdoors.jpg',
    locationBadge: 'Indiranagar • Fluted Millwork',
    keySpecs: ['Solid Teak & Engineered Wood', 'Acoustic Wooden Slat Walls', 'Heavy-Duty Hardware']
  },
  {
    id: 'exteriors',
    categoryNumber: '05',
    categoryName: 'EXTERIOR & FACADE ENGINEERING',
    shortLabel: '05 Elevations',
    headlineMain: 'STRIKING ELEVATIONS.',
    headlineHighlight: 'ARCHITECTURAL DISTINCTION.',
    description: 'Weather-resistant contemporary facades, HPL cladding, acoustic double-glazed curtain walls, architectural CNC louvers, and terrace pergolas.',
    serviceLink: '/services#exterior-facades',
    image: '/assets/gallery/gallery-facade.jpg',
    locationBadge: 'North Bengaluru • Facade Cladding',
    keySpecs: ['Modern HPL & Stone Cladding', 'Acoustic Slimline Glazing', 'Terrace Pergola Systems']
  },
  {
    id: 'renovation',
    categoryNumber: '06',
    categoryName: 'RENOVATION & UPGRADATION',
    shortLabel: '06 Renovation',
    headlineMain: 'REIMAGINE YOUR SPACE.',
    headlineHighlight: 'MODERNIZE WITH PURPOSE.',
    description: 'Complete villa, apartment, and office refurbishments. Structural wall removals, space optimization, total bathroom waterproofing, and fixed-price assurance.',
    serviceLink: '/services#renovation-upgradation',
    image: '/assets/gallery/gallery-renovation.jpg',
    locationBadge: 'Koramangala • Full Remodeling',
    keySpecs: ['Fixed-Price BOQ Assurance', 'Structural Wall Reconfiguration', 'Zero-Disruption Scheduling']
  },
  {
    id: 'electrical',
    categoryNumber: '07',
    categoryName: 'ELECTRICAL & SMART AUTOMATION',
    shortLabel: '07 Automation',
    headlineMain: 'POWERING HOMES.',
    headlineHighlight: 'SMART INTEGRATION.',
    description: 'Certified concealed fire-retardant conduit wiring, 3-phase DB panel balancing, app-controlled lighting scenes, and dedicated EV charging provisioning.',
    serviceLink: '/services#electrical-automation',
    image: '/assets/gallery/gallery-electrical.jpg',
    locationBadge: 'Hebbal • Smart Automation',
    keySpecs: ['FR/FRLS Copper Wiring', 'Smart Lighting Automation', 'Balanced Distribution Boards']
  },
  {
    id: 'flooring',
    categoryNumber: '08',
    categoryName: 'FLOORING, TILES & FINISHES',
    shortLabel: '08 Finishes',
    headlineMain: 'FLAWLESS LEVELING.',
    headlineHighlight: 'MIRROR PERFECTION.',
    description: 'Imported Italian marble laying with diamond mirror polishing, 1200x1800mm zero-lippage vitrified tiles, micro-cement walls, and bespoke surface textures.',
    serviceLink: '/services#flooring-finishes',
    image: '/assets/gallery/gallery-marble.jpg',
    locationBadge: 'Jayanagar • Italian Marble Finish',
    keySpecs: ['Italian Marble Diamond Polish', 'Large-Format Vitrified Tiles', 'Zero-Lippage Precision']
  }
];

const SLIDE_DURATION = 6500;

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef<number | null>(null);
  
  // Touch swipe support for mobile
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const categoryBarRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
    setProgress(0);
  }, []);

  // Slide progress tracking
  useEffect(() => {
    if (!isAutoPlaying) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const stepMs = 50;
    const increment = (stepMs / SLIDE_DURATION) * 100;

    progressIntervalRef.current = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isAutoPlaying, nextSlide]);

  // Keep active category button centered within the horizontal bar WITHOUT scrolling the window
  useEffect(() => {
    const container = categoryBarRef.current;
    if (container) {
      const activeBtn = container.children[currentSlide] as HTMLElement;
      if (activeBtn) {
        const scrollLeft = activeBtn.offsetLeft - (container.clientWidth / 2) + (activeBtn.clientWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [currentSlide]);

  const active = bannerSlides[currentSlide];

  const getCategoryIcon = (id: string) => {
    const iconClass = "w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9 text-brand-copperLight";
    switch (id) {
      case 'construction': return <Building2 className={iconClass} strokeWidth={1.75} />;
      case 'interiors': return <LayoutGrid className={iconClass} strokeWidth={1.75} />;
      case 'kitchens': return <ChefHat className={iconClass} strokeWidth={1.75} />;
      case 'carpentry': return <Hammer className={iconClass} strokeWidth={1.75} />;
      case 'exteriors': return <Building className={iconClass} strokeWidth={1.75} />;
      case 'renovation': return <Sparkles className={iconClass} strokeWidth={1.75} />;
      case 'electrical': return <Zap className={iconClass} strokeWidth={1.75} />;
      case 'flooring': return <Grid className={iconClass} strokeWidth={1.75} />;
      default: return <Building2 className={iconClass} strokeWidth={1.75} />;
    }
  };

  const scrollToCategories = () => {
    const el = document.getElementById('services-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/services');
    }
  };

  // Touch swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      nextSlide();
      setIsAutoPlaying(false);
    } else if (distance < -minSwipeDistance) {
      prevSlide();
      setIsAutoPlaying(false);
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <section 
      id="home" 
      className="relative pt-20 sm:pt-24 pb-6 sm:pb-10 bg-brand-ivory overflow-visible selection:bg-brand-copper selection:text-white"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==========================================================================
            1. TOP CATEGORY SELECTOR BAR (Minimal, sleek, horizontal scroll, no scrollbars)
            ========================================================================== */}
        <div className="mb-3.5 sm:mb-5">
          <div 
            ref={categoryBarRef}
            className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none no-scrollbar py-1 px-1 -mx-2 sm:mx-0 lg:justify-center"
          >
            {bannerSlides.map((slide, idx) => {
              const isCurrent = idx === currentSlide;
              return (
                <button
                  key={slide.id}
                  onClick={() => {
                    setCurrentSlide(idx);
                    setProgress(0);
                    setIsAutoPlaying(false);
                  }}
                  className={`group relative shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer select-none flex items-center gap-2 border ${
                    isCurrent
                      ? 'bg-brand-black text-white border-brand-black shadow-md'
                      : 'bg-white/80 hover:bg-white text-brand-black/75 hover:text-brand-copper border-brand-border/70 hover:border-brand-copper/40 shadow-2xs'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full transition-colors shrink-0 ${
                    isCurrent ? 'bg-brand-copper animate-pulse' : 'bg-brand-border group-hover:bg-brand-copper/60'
                  }`} />
                  <span className="whitespace-nowrap">{slide.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ==========================================================================
            2. BIG BIG BANNER: Grand Cinematic Hero Showcase
               - Prominent Category Name & Icon
               - Rich Background Architectural Visual
               - Small, Refined Content & Sleek Actions
            ========================================================================== */}
        <div 
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] xl:min-h-[680px] flex flex-col justify-between p-5 sm:p-8 lg:p-12 border border-brand-black/10 group transition-all"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Background Visual with Subtle Zoom Effect */}
          <div className="absolute inset-0 z-0 bg-brand-black overflow-hidden pointer-events-none">
            <img
              key={active.id}
              src={active.image}
              alt={active.categoryName}
              className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
              loading="eager"
            />
            {/* Cinematic Gradient Vignette: Deep, soft, high readability on left and bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/75 to-brand-black/35 lg:bg-gradient-to-r lg:from-brand-black/95 lg:via-brand-black/70 lg:to-black/20" />
            {/* Subtle top subtle rim shadow */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-black/60 to-transparent" />
          </div>

          {/* --------------------------------------------------------------------------
              Top Row Inside Banner: Brand Tag & Location Pill
              -------------------------------------------------------------------------- */}
          <div className="relative z-10 flex items-center justify-between gap-3 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-copper shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-white uppercase">
                CAPSULE COMPANY
              </span>
              <span className="text-white/40 text-[10px] hidden sm:inline">•</span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-brand-copperLight uppercase hidden sm:inline">
                YOUR SPACE MAKER
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs text-gray-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="truncate max-w-[160px] sm:max-w-none">{active.locationBadge}</span>
            </div>
          </div>

          {/* --------------------------------------------------------------------------
              Core Center Content: BIG CATEGORY NAME & ICON, with Small Content
              -------------------------------------------------------------------------- */}
          <div className="relative z-10 my-auto py-4 sm:py-6 lg:py-8 max-w-3xl space-y-3 sm:space-y-4">
            
            {/* Minimal Category Number Breadcrumb */}
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-brand-copperLight">
              <span className="px-2 py-0.5 rounded bg-brand-copper/20 border border-brand-copper/30 font-bold">
                CATEGORY {active.categoryNumber}
              </span>
              <span className="text-white/40">/</span>
              <span className="text-gray-300 font-sans tracking-wider">08 ARCHITECTURAL DISCIPLINES</span>
            </div>

            {/* BIG PROMINENT CATEGORY NAME & ICON */}
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 pt-0.5 sm:pt-1">
              <div className="w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-brand-copper/50 flex items-center justify-center shrink-0 shadow-2xl transition-all duration-300 group-hover:border-brand-copper group-hover:bg-white/15">
                {getCategoryIcon(active.id)}
              </div>
              <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tight leading-[1.08] drop-shadow-lg">
                {active.categoryName}
              </h1>
            </div>

            {/* Small Aspirational Subtitle */}
            <div className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-brand-copperLight flex items-center gap-2">
              <span>{active.headlineMain}</span>
              <span className="text-white/30">•</span>
              <span className="text-white font-medium">{active.headlineHighlight}</span>
            </div>

            {/* Small, concise description (explicit user request: Content should be small) */}
            <p className="text-xs sm:text-sm text-gray-300/95 max-w-xl leading-relaxed font-light drop-shadow-sm line-clamp-3 sm:line-clamp-none">
              {active.description}
            </p>

            {/* Small, refined key specs chips */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-0.5">
              {active.keySpecs.map((spec, sIdx) => (
                <span
                  key={sIdx}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] font-normal text-gray-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-copper shrink-0" />
                  <span>{spec}</span>
                </span>
              ))}
            </div>

            {/* Sleek, Minimal Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenConsultation}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-brand-copper hover:bg-brand-copperLight text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn active:scale-95 cursor-pointer"
              >
                <span>GET FREE ESTIMATE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToCategories}
                className="px-4 sm:px-5 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 text-xs sm:text-sm font-medium tracking-wider uppercase rounded-full backdrop-blur-md transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>EXPLORE ALL SERVICES</span>
                <ArrowDown className="w-3 h-3 text-brand-copperLight" />
              </button>
            </div>

          </div>

          {/* --------------------------------------------------------------------------
              Bottom Control & Trust Dock (Minimal, Sleek, Mobile-Safe Spacing)
              -------------------------------------------------------------------------- */}
          <div className="relative z-10 pt-3.5 sm:pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full text-white">
            
            {/* Trust Points (Small, minimal) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-[10px] sm:text-xs text-gray-300">
              <div className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-copper shrink-0" />
                <span>100% Transparent BOQ</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-brand-copper shrink-0" />
                <span>Site Engineer Supervised</span>
              </div>
              <div className="hidden lg:inline-flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-copper shrink-0" />
                <a href={`tel:${companyConfig.phoneRaw}`} className="hover:text-brand-copperLight transition-colors">
                  {companyConfig.phone}
                </a>
              </div>
            </div>

            {/* Slider Controls & Progress Indicator */}
            <div className="flex items-center justify-between sm:justify-end gap-3 self-stretch sm:self-auto">
              
              {/* Progress Bar */}
              <div className="flex-1 sm:flex-none w-20 sm:w-28 h-[2px] bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand-copper transition-all duration-75 ease-linear rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Number Index */}
              <span className="font-mono text-xs font-bold tracking-wider text-white select-none">
                {active.categoryNumber} <span className="text-white/40">/ 08</span>
              </span>

              {/* Prev / Next / Pause Controls */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer border border-white/15 active:scale-95"
                  title={isAutoPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
                  aria-label={isAutoPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
                >
                  {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
                </button>
                <button
                  onClick={() => {
                    prevSlide();
                    setIsAutoPlaying(false);
                  }}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer border border-white/15 active:scale-95"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    nextSlide();
                    setIsAutoPlaying(false);
                  }}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer border border-white/15 active:scale-95"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Kinetic Typography Marquee Strip */}
      <div className="mt-6 sm:mt-8 py-2.5 sm:py-3 bg-brand-black text-white overflow-hidden border-y border-brand-copper/30">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-6 sm:gap-10 mx-3 text-[11px] sm:text-xs font-bold tracking-widest uppercase text-gray-300">
              <span className="text-white font-extrabold">WE BUILD. WE PERFECT. YOU ENJOY.</span>
              <span className="text-brand-copper">✦</span>
              <span>CONSTRUCTION & CIVIL WORKS</span>
              <span className="text-brand-copper">✦</span>
              <span>TURNKEY INTERIORS</span>
              <span className="text-brand-copper">✦</span>
              <span>MODULAR KITCHENS & CLOSETS</span>
              <span className="text-brand-copper">✦</span>
              <span>EXPERT CARPENTRY</span>
              <span className="text-brand-copper">✦</span>
              <span>EXTERIOR ELEVATIONS</span>
              <span className="text-brand-copper">✦</span>
              <span>RENOVATION & UPGRADATION</span>
              <span className="text-brand-copper">✦</span>
              <span>ELECTRICAL & AUTOMATION</span>
              <span className="text-brand-copper">✦</span>
              <span>FLOORING & FINISHES</span>
              <span className="text-brand-copper">✦</span>
              <span className="text-white">BENGALURU • YOUR SPACE MAKER</span>
              <span className="text-brand-copper">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
