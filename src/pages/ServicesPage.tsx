import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Building2, 
  LayoutGrid, 
  ChefHat, 
  Hammer, 
  Building, 
  Sparkles, 
  Zap, 
  Grid, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Award, 
  PhoneCall 
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceItem } from '../types';
import { ConsultationForm } from '../components/sections/ConsultationForm';

interface ServicesPageProps {
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'construction' | 'interiors' | 'exteriors'>('all');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const filteredServices = servicesData.filter((s) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'construction') return s.category === 'construction' || s.id === 'construction-civil' || s.id === 'renovation-upgradation';
    if (activeFilter === 'interiors') return s.category === 'interiors' || s.id === 'turnkey-interiors' || s.id === 'modular-kitchens' || s.id === 'carpentry-fabrication';
    if (activeFilter === 'exteriors') return s.category === 'exteriors' || s.id === 'exterior-facades';
    return true;
  });

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
    <div className="pt-24 sm:pt-28 pb-16 w-full">
      {/* Header Banner */}
      <div className="bg-brand-black text-white py-14 sm:py-20 relative overflow-hidden border-b border-brand-copper/30">
        <div className="absolute inset-0 bg-[radial-gradient(#B86D43_1px,transparent_1px)] [background-size:28px_28px] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-brand-copper uppercase mb-3">
            <Link to="/" className="hover:underline">HOME</Link>
            <span>/</span>
            <span>SERVICES</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase max-w-3xl leading-tight">
            OUR 8 ARCHITECTURAL <span className="text-brand-copper">SERVICES</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Engineered with lab-tested materials, executed by in-house master craftsmen, and delivered with 100% price transparency across Bengaluru.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 bg-white rounded-2xl p-2.5 shadow-lg border border-brand-border">
          {[
            { key: 'all', label: 'ALL 8 SERVICES' },
            { key: 'construction', label: 'CONSTRUCTION & CIVIL' },
            { key: 'interiors', label: 'INTERIORS & MODULAR' },
            { key: 'exteriors', label: 'EXTERIORS & FACADES' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key as any)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                activeFilter === tab.key
                  ? 'bg-brand-black text-white shadow-sm'
                  : 'text-brand-black/80 hover:text-brand-copper hover:bg-brand-cream'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services List in High Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 space-y-12 sm:space-y-16">
        {filteredServices.map((srv, idx) => (
          <div
            key={srv.id}
            id={srv.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 border border-brand-border shadow-md hover:shadow-xl transition-all duration-300 ${
              idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
            }`}
          >
            {/* Visual Column */}
            <div className={`lg:col-span-5 relative ${idx % 2 === 1 ? 'lg:col-start-8' : ''}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-brand-border aspect-4/3 sm:aspect-16/11 group">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-brand-black/85 backdrop-blur-xs text-white border border-white/20 text-xs font-mono font-bold px-3 py-1.5 rounded-md">
                  CATEGORY {srv.number}
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className={`lg:col-span-7 flex flex-col items-start space-y-4 ${idx % 2 === 1 ? 'lg:col-start-1' : ''}`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-copper/10 flex items-center justify-center">
                  {getServiceIcon(srv.iconName)}
                </div>
                <span className="text-xs font-bold tracking-widest text-brand-copper uppercase">
                  Service Category {srv.number} of 08
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-brand-black">
                {srv.title}
              </h2>

              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                {srv.fullDesc}
              </p>

              {/* What is Included Checklist */}
              <div className="w-full pt-2">
                <h3 className="text-xs font-bold tracking-widest uppercase text-brand-black mb-3">
                  SPECIFICATIONS & SCOPE:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {srv.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-medium text-brand-black/90 p-2.5 rounded-lg bg-brand-ivory border border-brand-border/60">
                      <CheckCircle2 className="w-4 h-4 text-brand-copper shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-3 w-full">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 bg-brand-copper hover:bg-brand-copperLight text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>GET FREE ESTIMATE FOR THIS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <Link
                  to="/gallery"
                  className="px-5 py-3 bg-brand-ivory hover:bg-white text-brand-black border border-brand-border text-xs font-bold tracking-widest uppercase rounded-full transition-all"
                >
                  VIEW WORK PHOTOS
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Turnkey Combined Package Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="rounded-3xl bg-brand-black text-white p-8 sm:p-12 relative overflow-hidden border border-brand-copper/40">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-brand-copper uppercase block mb-2">
              SEAMLESS INTEGRATED EXECUTION
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase mb-4">
              Planning a Complete Home Construction + Turnkey Interiors?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              Skip the coordination headache between structural contractors and interior designers. Capsule Company manages the architectural foundation, plumbing, wiring, woodwork, modular kitchen, and luxury finishing with 100% schedule alignment.
            </p>
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-brand-copper hover:bg-brand-copperLight text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              BOOK YOUR FREE SITE CONSULTATION
            </button>
          </div>
        </div>
      </div>

      {/* Lead Generation Form */}
      <div className="mt-16">
        <ConsultationForm />
      </div>
    </div>
  );
};
