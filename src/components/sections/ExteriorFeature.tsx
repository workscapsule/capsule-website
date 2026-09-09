import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ArrowRight, ShieldCheck, Sun, Umbrella, Layers, Sparkles } from 'lucide-react';
import { companyConfig } from '../../config/company';

interface ExteriorFeatureProps {
  onOpenConsultation: () => void;
}

export const ExteriorFeature: React.FC<ExteriorFeatureProps> = ({ onOpenConsultation }) => {
  const exteriorServices = [
    { title: 'EXTERIOR DESIGN & ELEVATIONS', desc: 'Contemporary 3D facade planning and structural balance tailored to Bengaluru climate.' },
    { title: 'FACADE WORK & CLADDING', desc: 'High-pressure laminates, stone veneer, aluminium composite, and exposed concrete panels.' },
    { title: 'WEATHER-RESISTANT PAINTING', desc: 'Multi-coat anti-fungal elastomeric exterior wall coatings with high UV reflectance.' },
    { title: 'OUTDOOR SPACES & TERRACES', desc: 'Pergolas, deck flooring, landscaped planter troughs, and sit-out architectural pavilions.' },
    { title: 'GLASS & FABRICATION', desc: 'Acoustic double-glazed sliding frames, frameless balcony glass railings, and MS gates.' },
  ];

  return (
    <section id="exteriors" className="py-20 sm:py-28 bg-brand-ivory relative overflow-hidden border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Copy & Services */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              label="ARCHITECTURAL PRESENCE"
              title="EXTERIOR &"
              highlight="FACADE WORKS"
              subtitle="From bold residential elevations to weather-proof commercial facades, we engineer exterior surfaces that command attention and resist Bengaluru's monsoon and tropical sun."
            />

            <div className="space-y-3 pt-2">
              {exteriorServices.map((srv, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-brand-border hover:border-brand-copper/40 transition-all shadow-2xs"
                >
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-black">
                    {srv.title}
                  </h4>
                  <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 bg-brand-black hover:bg-brand-copper text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-md active:scale-95 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>REQUEST EXTERIOR CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${companyConfig.phoneRaw}`}
                className="px-5 py-3.5 bg-brand-cream hover:bg-white text-brand-black border border-brand-border text-xs font-bold tracking-widest uppercase rounded-full transition-all text-center"
              >
                CALL +91 96321 24422
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Visual */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-brand-border group bg-brand-black">
              <img
                src="/assets/creatives/img8.jpeg"
                alt="Contemporary Villa Model and Architecture"
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-700 max-h-[580px]"
                loading="lazy"
              />

              <div className="absolute bottom-4 left-4 right-4 glass-panel-dark rounded-xl p-4 text-white">
                <span className="text-[10px] font-bold tracking-widest text-brand-copper uppercase block">
                  Turnkey Execution
                </span>
                <p className="text-xs sm:text-sm font-semibold mt-0.5">
                  From Smart Planning to Smooth Handover
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
