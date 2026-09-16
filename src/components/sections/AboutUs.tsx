import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Check, ArrowRight, Shield, Award, Users } from 'lucide-react';

interface AboutUsProps {
  onOpenConsultation: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenConsultation }) => {
  const steps = [
    { num: '01', title: 'UNDERSTAND', desc: 'Active listening to your spatial needs, lifestyle, and financial framework.' },
    { num: '02', title: 'PLAN', desc: 'Architectural blueprints, detailed 3D renders, and transparent BOQ estimations.' },
    { num: '03', title: 'EXECUTE', desc: 'Precision civil & interior craftsmanship supervised by senior engineers.' },
    { num: '04', title: 'DELIVER', desc: 'Punctual handover with rigorous quality checks and zero snag residue.' },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-brand-ivory relative overflow-hidden border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Brand Story & 4-Stage Approach */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              label="WHO WE ARE"
              title="BUILT ON EXPERIENCE."
              highlight="DRIVEN BY A NEW VISION."
              subtitle="Capsule Company is a Bengaluru-based construction, interiors and exteriors company focused on creating spaces that are thoughtfully designed, professionally executed and built to last."
            />

            {/* Approach Framework */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-brand-black uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-brand-copper" />
                <span>Our Approach is Simple:</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {steps.map((step) => (
                  <div
                    key={step.num}
                    className="p-4 rounded-xl bg-white border border-brand-border hover:border-brand-copper/50 transition-all duration-300 shadow-2xs group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold tracking-widest text-brand-copper uppercase group-hover:text-brand-black transition-colors">
                        {step.num}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-copper/40 group-hover:bg-brand-copper" />
                    </div>
                    <h4 className="text-sm font-bold tracking-wider uppercase text-brand-black">
                      {step.title}
                    </h4>
                    <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bengaluru Commitment Callout */}
            <div className="p-4 rounded-xl bg-brand-cream border-l-4 border-brand-copper flex items-center justify-between gap-4">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-brand-black">
                  Bengaluru Focused Execution
                </h5>
                <p className="text-xs text-brand-muted mt-0.5">
                  Direct site supervision across Hebbal, Yelahanka, North & Central Bengaluru.
                </p>
              </div>
              <button
                onClick={onOpenConsultation}
                className="px-4 py-2 bg-brand-black hover:bg-brand-copper text-white text-[11px] font-bold tracking-widest uppercase rounded-full shrink-0 transition-colors"
              >
                MEET US
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Photography Grid matching img2 */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-3 sm:gap-4">
              {/* Main Feature Image */}
              <div className="col-span-12 rounded-2xl overflow-hidden shadow-lg border border-brand-border h-64 sm:h-80 bg-brand-black group">
                <img
                  src="/assets/gallery/gallery-elevation.jpg"
                  alt="Capsule Company Contemporary Architecture and Engineering"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Supporting Image 1: Precision Finishes */}
              <div className="col-span-6 rounded-xl overflow-hidden shadow-md border border-brand-border h-40 sm:h-48 bg-brand-black group">
                <img
                  src="/assets/gallery/gallery-marble.jpg"
                  alt="High Precision Marble and Surface Finishes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Supporting Image 2: Architectural Facade */}
              <div className="col-span-6 rounded-xl overflow-hidden shadow-md border border-brand-border h-40 sm:h-48 bg-brand-black group">
                <img
                  src="/assets/gallery/gallery-facade.jpg"
                  alt="Contemporary Residential Facade"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
