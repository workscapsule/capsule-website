import React from 'react';
import { ArrowRight, Phone, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { companyConfig } from '../../config/company';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreServices }) => {
  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full border-x border-brand-border/40 grid grid-cols-2 md:grid-cols-4">
          <div className="border-r border-brand-border/30 hidden md:block" />
          <div className="border-r border-brand-border/30" />
          <div className="border-r border-brand-border/30 hidden md:block" />
          <div />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand, Headline, Supporting Copy, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Vertical Brand Lockup: CAPSULE COMPANY (Dominant) + YOUR SPACE MAKER (Secondary) */}
            <div className="flex flex-col items-start space-y-1.5 pt-1">
              <span className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold tracking-[0.2em] sm:tracking-[0.25em] text-brand-black uppercase">
                CAPSULE COMPANY
              </span>
              
              {/* Architectural thin divider with center accent */}
              <div className="flex items-center gap-2 w-full max-w-[260px] sm:max-w-[300px]">
                <span className="h-[1px] flex-1 bg-brand-copper/40" />
                <span className="w-1.5 h-1.5 rounded-full bg-brand-copper shrink-0" />
                <span className="h-[1px] flex-1 bg-brand-copper/40" />
              </div>

              <span className="text-[10px] sm:text-[11px] md:text-xs font-medium tracking-[0.28em] sm:tracking-[0.32em] text-brand-copper uppercase whitespace-nowrap pl-0.5">
                YOUR SPACE MAKER
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase text-brand-black leading-[1.08]">
              <span>WE BUILD.</span><br />
              <span>WE PERFECT.</span><br />
              <span className="text-brand-copper">YOU ENJOY.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-xl text-brand-muted max-w-xl leading-relaxed font-normal">
              Building spaces with <strong className="text-brand-black font-semibold">experience, precision and purpose</strong>. Complete architectural construction, bespoke modular interiors, and elevations in Bengaluru.
            </p>

            {/* Service Pillars Label */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold tracking-widest text-brand-black/80 uppercase pt-1">
              <span className="hover:text-brand-copper transition-colors">CONSTRUCTION</span>
              <span className="text-brand-copper">•</span>
              <span className="hover:text-brand-copper transition-colors">INTERIORS</span>
              <span className="text-brand-copper">•</span>
              <span className="hover:text-brand-copper transition-colors">EXTERIORS</span>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-4 bg-brand-black hover:bg-brand-copper text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>GET FREE CONSULTATION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-7 py-4 bg-white hover:bg-brand-cream text-brand-black border border-brand-border hover:border-brand-copper text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full transition-all duration-300 active:scale-95 text-center shadow-xs"
              >
                EXPLORE OUR SERVICES
              </button>
            </div>

            {/* Trust Pill / Verification Strip */}
            <div className="pt-4 border-t border-brand-border/60 w-full flex flex-wrap items-center gap-5 sm:gap-8 text-xs text-brand-muted">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-copper" />
                <span className="font-semibold text-brand-black">100% Price Transparency</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-brand-copper" />
                <span className="font-semibold text-brand-black">Supervised Craftsmanship</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-copper" />
                <a href={`tel:${companyConfig.phoneRaw}`} className="font-semibold text-brand-black hover:text-brand-copper">
                  {companyConfig.phone}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Visual Composition with Copper Framing */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Geometric Accent Border */}
            <div className="absolute -top-3 -right-3 w-full h-full border-2 border-brand-copper/40 rounded-2xl pointer-events-none hidden sm:block" />

            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-brand-border group">
              <img
                src="/assets/creatives/img1.jpeg"
                alt="Capsule Company Site Execution & Craftsmanship"
                className="w-full h-auto object-cover object-center group-hover:scale-103 transition-transform duration-700 max-h-[580px]"
                loading="eager"
              />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 glass-panel-dark rounded-xl p-3 sm:p-4 text-white flex items-center justify-between shadow-xl">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-brand-copper uppercase block">
                    Bengaluru Execution
                  </span>
                  <p className="text-xs sm:text-sm font-semibold tracking-wide">
                    Hebbal Kempapura • Turnkey Delivery
                  </p>
                </div>
                <div className="h-9 w-9 rounded-full bg-brand-copper flex items-center justify-center text-white shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Dot Matrix Decorative Accent */}
            <div className="absolute -bottom-6 -left-6 grid grid-cols-6 gap-1.5 pointer-events-none opacity-40 hidden sm:grid">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-copper" />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Kinetic Typography Marquee Strip */}
      <div className="mt-14 sm:mt-20 py-3 sm:py-4 bg-brand-black text-white overflow-hidden border-y border-brand-copper/30">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 sm:gap-12 mx-4 text-xs sm:text-sm font-bold tracking-widest uppercase text-gray-300">
              <span className="text-white">WE BUILD. WE PERFECT. YOU ENJOY.</span>
              <span className="text-brand-copper">✦</span>
              <span>CONSTRUCTION & CIVIL WORKS</span>
              <span className="text-brand-copper">✦</span>
              <span>MODULAR KITCHENS & CARPENTRY</span>
              <span className="text-brand-copper">✦</span>
              <span>ARCHITECTURAL EXTERIORS</span>
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
