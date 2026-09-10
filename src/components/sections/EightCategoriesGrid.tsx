import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  LayoutGrid, 
  ChefHat, 
  Hammer, 
  Building, 
  Sparkles, 
  Zap, 
  Grid, 
  ArrowRight, 
  CheckCircle2, 
  X,
  PhoneCall
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { ServiceItem } from '../../types';

interface EightCategoriesGridProps {
  onOpenConsultation: () => void;
  showAllDetails?: boolean;
}

export const EightCategoriesGrid: React.FC<EightCategoriesGridProps> = ({ 
  onOpenConsultation,
  showAllDetails = false 
}) => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-brand-copper" };
    switch (iconName) {
      case 'Building2': return <Building2 {...props} />;
      case 'LayoutGrid': return <LayoutGrid {...props} />;
      case 'ChefHat': return <ChefHat {...props} />;
      case 'Hammer': return <Hammer {...props} />;
      case 'Building': return <Building {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Grid': return <Grid {...props} />;
      default: return <Building2 {...props} />;
    }
  };

  return (
    <section id="services-grid" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#B86D43_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-brand-copper" />
              <span className="text-xs font-bold tracking-[0.25em] text-brand-copper uppercase">
                COMPREHENSIVE SPACE MAKING
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-black uppercase">
              OUR 8 CORE SERVICE CATEGORIES
            </h2>
            <p className="mt-3 text-base text-brand-muted leading-relaxed">
              From the foundational civil engineering to bespoke interior joinery, we offer seamless end-to-end execution with a single point of accountability in Bengaluru.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/services')}
              className="px-5 py-2.5 rounded-full border border-brand-copper/40 bg-brand-ivory hover:bg-brand-copper hover:text-white text-brand-black text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>EXPLORE ALL DETAILS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {servicesData.map((srv) => (
            <div
              key={srv.id}
              className="group relative bg-brand-ivory rounded-2xl border border-brand-border hover:border-brand-copper/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Category Image Header */}
              <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-brand-black/20 to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-3 left-3 bg-brand-black/85 backdrop-blur-xs text-white border border-white/20 text-[11px] font-mono font-bold px-2.5 py-1 rounded-md">
                  {srv.number}
                </div>

                {/* Service Icon Pill */}
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-md border border-brand-border">
                  {getServiceIcon(srv.iconName)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-base font-bold text-brand-black group-hover:text-brand-copper transition-colors uppercase leading-snug mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed mb-4">
                    {srv.shortDesc}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 pt-1 border-t border-brand-border/60 mb-5">
                    {srv.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-brand-black/80 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-brand-copper shrink-0 mt-0.5" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedService(srv)}
                    className="text-xs font-bold tracking-wider text-brand-black hover:text-brand-copper uppercase flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>DETAILS</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenConsultation}
                    className="px-3 py-1.5 rounded-full bg-brand-black hover:bg-brand-copper text-white text-[10px] font-bold tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    GET QUOTE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Strip for All 8 Categories */}
        <div className="mt-12 sm:mt-16 rounded-2xl bg-brand-black text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-brand-copper/30">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[11px] font-bold tracking-widest text-brand-copper uppercase block">
              NEED A COMBINED TURNKEY PACKAGE?
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase">
              Save Up to 15% with End-to-End Construction + Interiors
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
              From foundation civil works to fully furnished modular kitchens and wardrobes, our integrated team handles everything with a single point of contact.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-7 py-3.5 bg-brand-copper hover:bg-brand-copperLight text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg transition-all duration-300 whitespace-nowrap active:scale-95 cursor-pointer"
          >
            REQUEST COMBINED ESTIMATE
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="relative bg-brand-ivory rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-brand-border z-10 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white hover:bg-brand-cream text-brand-black border border-brand-border transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold px-2 py-0.5 bg-brand-copper text-white rounded">
                CATEGORY {selectedService.number}
              </span>
              <span className="text-xs font-bold tracking-widest text-brand-copper uppercase">
                Capsule Company Service
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-black uppercase mb-3">
              {selectedService.title}
            </h3>

            <p className="text-sm text-brand-muted leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="mb-6 rounded-xl overflow-hidden border border-brand-border h-48 sm:h-56">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h4 className="text-xs font-bold tracking-widest text-brand-black uppercase mb-3">
              WHAT IS INCLUDED IN THIS CATEGORY:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {selectedService.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs font-medium text-brand-black/90 p-2 rounded-lg bg-white border border-brand-border/60">
                  <CheckCircle2 className="w-4 h-4 text-brand-copper shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-brand-border">
              <span className="text-xs text-brand-muted">
                Free site inspection available across Bengaluru
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenConsultation();
                  }}
                  className="flex-1 sm:flex-none px-6 py-3 bg-brand-copper hover:bg-brand-copperLight text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-md transition-all cursor-pointer text-center"
                >
                  BOOK FREE SITE VISIT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
