import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ArrowRight, Check, Hammer, DoorOpen, Home, Boxes } from 'lucide-react';
import { companyConfig } from '../../config/company';

interface CarpentryFeatureProps {
  onOpenConsultation: () => void;
}

export const CarpentryFeature: React.FC<CarpentryFeatureProps> = ({ onOpenConsultation }) => {
  const cards = [
    {
      title: 'MODULAR KITCHENS',
      desc: 'Precision cabinetry, soft-close drawers, and scratch-resistant finishes.',
      tag: 'Kitchens',
      image: '/assets/gallery/gallery-kitchen.jpg',
    },
    {
      title: 'CUSTOM WARDROBES',
      desc: 'Floor-to-ceiling sliding & openable wardrobes with smart internal organizers.',
      tag: 'Wardrobes',
      image: '/assets/gallery/customized-wardrobe/customized-wardrobe-01.jpg',
    },
    {
      title: 'DOORS & WINDOWS',
      desc: 'Solid teakwood, acoustic veneered flush doors, and heavy-duty frame fixtures.',
      tag: 'Doors',
      image: '/assets/gallery/gallery-glassdoors.jpg',
    },
    {
      title: 'CUSTOM FURNITURE',
      desc: 'Fluted TV wall consoles, dining sets, acoustic paneling, and bespoke storage.',
      tag: 'Custom Work',
      image: '/assets/gallery/gallery-living.jpg',
    },
  ];

  const benefits = [
    'CUSTOM FURNITURE: Tailor-made furniture that fits your style',
    'DOORS & WINDOWS: Strong. Stylish. Built to last.',
    'MODULAR SOLUTIONS: Smart storage for modern living',
    'KITCHEN & WARDROBES: Practical design. Premium finish.',
    'QUALITY CRAFTSMANSHIP: Skilled workmanship with attention to detail'
  ];

  return (
    <section id="carpentry" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeader
            label="CRAFTED WITH PRECISION, BUILT TO LAST."
            title="EXPERT"
            highlight="CARPENTRY"
            subtitle="From furniture to fittings — we bring functionality, durability and elegance to every corner of your space. Supervised master carpentry using sustainable and premium-grade materials."
            className="mb-0"
          />

          <button
            onClick={onOpenConsultation}
            className="self-start md:self-auto px-6 py-3 bg-brand-black hover:bg-brand-copper text-white text-xs font-bold tracking-widest uppercase rounded-full transition-all active:scale-95 shrink-0"
          >
            GET FREE CARPENTRY CONSULTATION
          </button>
        </div>

        {/* 4 Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-brand-ivory border border-brand-border hover:border-brand-copper transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col"
            >
              <div className="h-48 overflow-hidden relative bg-brand-black">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-brand-black/80 text-white backdrop-blur-xs">
                  {card.tag}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-brand-black group-hover:text-brand-copper transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs font-semibold text-brand-black">
                  <span>Bengaluru Millwork</span>
                  <span className="text-brand-copper font-bold">Capsule Spec</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Craftsmanship Badges */}
        <div className="p-6 rounded-2xl bg-brand-ivory border border-brand-border">
          <h4 className="text-xs font-bold tracking-widest text-brand-copper uppercase mb-4 text-center sm:text-left">
            Why Our Woodwork Endures
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {benefits.map((b, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-brand-black">
                <Check className="w-4 h-4 text-brand-copper shrink-0 mt-0.5" />
                <span className="leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
