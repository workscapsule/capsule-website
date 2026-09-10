import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Award, Phone, Sparkles, Pause, Play } from 'lucide-react';
import { companyConfig } from '../../config/company';

interface BannerSlide {
  id: string;
  categoryNumber: string;
  categoryName: string;
  headlineMain: string;
  headlineHighlight: string;
  description: string;
  serviceLink: string;
  image: string;
  badge: string;
  features: string[];
}

const bannerSlides: BannerSlide[] = [
  {
    id: 'construction',
    categoryNumber: '01',
    categoryName: 'CONSTRUCTION & CIVIL WORKS',
    headlineMain: 'FOUNDED ON STRENGTH.',
    headlineHighlight: 'BUILT TO ENDURE.',
    description: 'Turnkey residential villas, independent homes, and commercial structural works across Bengaluru with certified civil engineering and lab-tested materials.',
    serviceLink: '/services#construction-civil',
    image: '/assets/creatives/img8.jpeg',
    badge: 'Turnkey Civil Execution',
    features: ['Fe550D Steel & Lab-tested Cement', 'Supervised Structural Engineering', 'On-time Handover Guarantee']
  },
  {
    id: 'interiors',
    categoryNumber: '02',
    categoryName: 'TURNKEY INTERIOR DESIGN',
    headlineMain: 'IMAGINED WITH ELEGANCE.',
    headlineHighlight: 'CRAFTED WITH PRECISION.',
    description: 'Complete home and commercial interior transformations. Bespoke spatial layouts, architectural false ceilings, ambient lighting, and luxury European finishes.',
    serviceLink: '/services#turnkey-interiors',
    image: '/assets/creatives/img5.jpeg',
    badge: '45-Day Move-in Guarantee',
    features: ['Architectural False Ceilings', 'Custom Ambient Lighting', 'Turnkey End-to-End Design']
  },
  {
    id: 'kitchens',
    categoryNumber: '03',
    categoryName: 'MODULAR KITCHENS & CLOSETS',
    headlineMain: 'CULINARY MASTERY.',
    headlineHighlight: 'ENGINEERED LUXURY.',
    description: 'Bespoke island kitchens and walk-in wardrobes crafted with BWP 710 marine ply, anti-scratch acrylic, quartz counters, and German soft-close fittings.',
    serviceLink: '/services#modular-kitchens',
    image: '/assets/creatives/img7.jpeg',
    badge: 'German Blum Hardware',
    features: ['100% Waterproof Marine Ply', 'Soft-close Blum / Hafele Fittings', 'Custom Quartz Countertops']
  },
  {
    id: 'carpentry',
    categoryNumber: '04',
    categoryName: 'EXPERT CARPENTRY & MILLWORK',
    headlineMain: 'ARTISANAL WOODWORK.',
    headlineHighlight: 'TIMELESS DETAILING.',
    description: 'In-house master craftsmanship delivering architectural fluted timber feature walls, floating TV consoles, solid teak pivot doors, and bespoke joinery.',
    serviceLink: '/services#carpentry-fabrication',
    image: '/assets/creatives/img11.jpeg',
    badge: 'Master In-House Carpenters',
    features: ['Solid Teak & Engineered Wood', 'Acoustic Wooden Slat Walls', 'Heavy-duty Smooth Operation']
  },
  {
    id: 'exteriors',
    categoryNumber: '05',
    categoryName: 'EXTERIOR & FACADE ENGINEERING',
    headlineMain: 'STRIKING ELEVATIONS.',
    headlineHighlight: 'ARCHITECTURAL DISTINCTION.',
    description: 'Weather-resistant modern elevations, HPL facade cladding, acoustic double-glazed curtain walls, louvers, and bespoke terrace pergolas.',
    serviceLink: '/services#exterior-facades',
    image: '/assets/creatives/img2.jpeg',
    badge: 'Weatherproof Facades',
    features: ['Modern HPL & Stone Cladding', 'Acoustic Slimline Glazing', 'Terrace Pergola Architecture']
  },
  {
    id: 'renovation',
    categoryNumber: '06',
    categoryName: 'RENOVATION & UPGRADATION',
    headlineMain: 'REIMAGINE YOUR SPACE.',
    headlineHighlight: 'MODERNIZE WITH PURPOSE.',
    description: 'Full-scale villa and apartment refurbishments, structural space reconfigurations, modern bathroom waterproofing, and value-enhancing makeovers.',
    serviceLink: '/services#renovation-upgradation',
    image: '/assets/creatives/img1.jpeg',
    badge: 'Fixed-Price Guarantee',
    features: ['Zero Hidden Cost Assurance', 'Structural Wall Reconfiguration', 'Comprehensive Waterproofing']
  },
  {
    id: 'electrical',
    categoryNumber: '07',
    categoryName: 'ELECTRICAL & SMART AUTOMATION',
    headlineMain: 'POWERING HOMES.',
    headlineHighlight: 'SMART INTEGRATION.',
    description: 'Concealed fire-retardant conduit wiring, 3-phase DB panel balancing, app-controlled lighting scenes, home automation, and EV charger provisioning.',
    serviceLink: '/services#electrical-automation',
    image: '/assets/creatives/img4.jpeg',
    badge: 'Certified Safety Engineering',
    features: ['FR/FRLS Copper Wiring', 'Smart Lighting Automation', 'Balanced Distribution Boards']
  },
  {
    id: 'flooring',
    categoryNumber: '08',
    categoryName: 'FLOORING, TILES & FINISHES',
    headlineMain: 'FLAWLESS LEVELING.',
    headlineHighlight: 'MIRROR PERFECTION.',
    description: 'Imported Italian marble laying with diamond polishing, large-format 1200x1800mm zero-lippage vitrified tiles, micro-cement, and luxury wall textures.',
    serviceLink: '/services#flooring-finishes',
    image: '/assets/creatives/img3.jpeg',
    badge: 'Laser-Guided Precision',
    features: ['Italian Marble Diamond Polish', 'Large-Format Vitrified Tiles', 'Slimline Aluminium Partitions']
  }
];

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const active = bannerSlides[currentSlide];

  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-brand-ivory">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="max-w-7xl mx-auto h-full border-x border-brand-border/40 grid grid-cols-2 md:grid-cols-4">
          <div className="border-r border-brand-border/30 hidden md:block" />
          <div className="border-r border-brand-border/30" />
          <div className="border-r border-brand-border/30 hidden md:block" />
          <div />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Service Category Navigation Quick-Select Bar */}
        <div className="mb-6 overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-max pb-2">
            <span className="text-[11px] font-bold tracking-widest text-brand-black/70 uppercase pr-2 hidden md:inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-brand-copper animate-pulse" />
              SELECT SERVICE BANNER:
            </span>
            {bannerSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => {
                  setCurrentSlide(idx);
                  setIsAutoPlaying(false);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  idx === currentSlide
                    ? 'bg-brand-black text-white shadow-sm border border-brand-black'
                    : 'bg-white/80 hover:bg-white text-brand-black/80 hover:text-brand-copper border border-brand-border hover:border-brand-copper/40'
                }`}
              >
                <span className={`text-[10px] ${idx === currentSlide ? 'text-brand-copper' : 'text-brand-muted'}`}>
                  {slide.categoryNumber}
                </span>
                <span>{slide.categoryName.split('&')[0].trim()}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Banner Slider Hero Card */}
        <div 
          className="relative bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-brand-border shadow-xl overflow-hidden transition-all"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Subtle decorative background accent */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 rounded-full bg-brand-copper/5 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-5">
              
              {/* Category Badge & Slide Counter */}
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-copper/10 border border-brand-copper/25 text-brand-copper text-xs font-bold tracking-widest uppercase">
                  <Sparkles className="w-3 h-3" />
                  CATEGORY {active.categoryNumber} / 08 • {active.categoryName}
                </span>
                <span className="text-xs font-semibold text-brand-muted">
                  {active.badge}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-brand-black leading-[1.1]">
                <span>{active.headlineMain}</span><br />
                <span className="text-brand-copper">{active.headlineHighlight}</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-brand-muted max-w-xl leading-relaxed">
                {active.description}
              </p>

              {/* Feature Points of this Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full pt-1">
                {active.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-brand-black/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-copper shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Dual Action CTAs */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                <button
                  onClick={onOpenConsultation}
                  className="px-7 py-3.5 bg-brand-black hover:bg-brand-copper text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95 cursor-pointer"
                >
                  <span>GET FREE CONSULTATION</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigate('/services')}
                  className="px-7 py-3.5 bg-brand-ivory hover:bg-white text-brand-black border border-brand-border hover:border-brand-copper text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full transition-all duration-300 active:scale-95 text-center cursor-pointer shadow-xs"
                >
                  VIEW ALL 8 SERVICES
                </button>
              </div>

              {/* Trust Strip */}
              <div className="pt-3 border-t border-brand-border/60 w-full flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-brand-muted">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-copper shrink-0" />
                  <span className="font-semibold text-brand-black">100% Transparent BOQ</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-brand-copper shrink-0" />
                  <span className="font-semibold text-brand-black">Site Engineer Supervised</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-brand-copper shrink-0" />
                  <a href={`tel:${companyConfig.phoneRaw}`} className="font-semibold text-brand-black hover:text-brand-copper transition-colors">
                    {companyConfig.phone}
                  </a>
                </div>
              </div>

            </div>

            {/* Right Visual Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-brand-ivory border border-brand-border group aspect-4/3 sm:aspect-16/11 lg:aspect-4/3">
                <img
                  key={active.id}
                  src={active.image}
                  alt={`${active.categoryName} by Capsule Company`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 animate-fadeIn"
                  loading="eager"
                />

                {/* Floating Architectural Badge */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel-dark rounded-xl p-3 sm:p-4 text-white flex items-center justify-between shadow-xl">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-brand-copper uppercase block">
                      Bengaluru Delivery
                    </span>
                    <p className="text-xs sm:text-sm font-semibold tracking-wide">
                      {active.categoryName}
                    </p>
                  </div>
                  <button
                    onClick={() => navigate('/gallery')}
                    className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-brand-copper hover:bg-brand-copperLight text-white transition-all cursor-pointer"
                  >
                    Gallery
                  </button>
                </div>
              </div>

              {/* Slider Controls Bar */}
              <div className="flex items-center justify-between mt-4">
                {/* Dots indicator */}
                <div className="flex items-center gap-1.5">
                  {bannerSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrentSlide(idx);
                        setIsAutoPlaying(false);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentSlide ? 'w-6 bg-brand-copper' : 'w-2 bg-brand-border hover:bg-brand-muted'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Buttons & Auto-Play Toggle */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="w-8 h-8 rounded-full border border-brand-border bg-white hover:bg-brand-cream text-brand-black flex items-center justify-center transition-all cursor-pointer"
                    title={isAutoPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
                    aria-label={isAutoPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
                  >
                    {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                  </button>
                  <button
                    onClick={() => {
                      prevSlide();
                      setIsAutoPlaying(false);
                    }}
                    className="w-8 h-8 rounded-full border border-brand-border bg-white hover:bg-brand-cream text-brand-black flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      nextSlide();
                      setIsAutoPlaying(false);
                    }}
                    className="w-8 h-8 rounded-full border border-brand-border bg-white hover:bg-brand-cream text-brand-black flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Kinetic Typography Marquee Strip */}
      <div className="mt-12 sm:mt-16 py-3 bg-brand-black text-white overflow-hidden border-y border-brand-copper/30">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 sm:gap-10 mx-4 text-xs sm:text-sm font-bold tracking-widest uppercase text-gray-300">
              <span className="text-white">WE BUILD. WE PERFECT. YOU ENJOY.</span>
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
