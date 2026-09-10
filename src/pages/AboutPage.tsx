import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Users, CheckCircle, Clock, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { AboutUs } from '../components/sections/AboutUs';
import { OurPromise } from '../components/sections/OurPromise';
import { ConsultationForm } from '../components/sections/ConsultationForm';
import { companyConfig } from '../config/company';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-16 w-full">
      {/* Page Header Banner */}
      <div className="bg-brand-black text-white py-14 sm:py-20 relative overflow-hidden border-b border-brand-copper/30">
        <div className="absolute inset-0 bg-[radial-gradient(#B86D43_1px,transparent_1px)] [background-size:28px_28px] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-brand-copper uppercase mb-3">
            <Link to="/" className="hover:underline">HOME</Link>
            <span>/</span>
            <span>ABOUT US</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase max-w-3xl leading-tight">
            CRAFTING ENDURING SPACES IN <span className="text-brand-copper">BENGALURU</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Founded with a vision to eliminate subcontractor chaos, Capsule Company brings turnkey civil construction, bespoke modular interiors, and elevations under one unified roof.
          </p>
        </div>
      </div>

      {/* Key Stats Counter Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-brand-border">
          <div className="text-center p-3 border-r border-brand-border/60 last:border-none">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-brand-copper">150+</div>
            <div className="text-xs font-bold tracking-wider text-brand-black uppercase mt-1">Projects Delivered</div>
            <div className="text-[11px] text-brand-muted">Across Bengaluru</div>
          </div>
          <div className="text-center p-3 md:border-r border-brand-border/60 last:border-none">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-brand-copper">10 Yr</div>
            <div className="text-xs font-bold tracking-wider text-brand-black uppercase mt-1">Structural Warranty</div>
            <div className="text-[11px] text-brand-muted">Assured Quality</div>
          </div>
          <div className="text-center p-3 border-r border-brand-border/60 last:border-none">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-brand-copper">100%</div>
            <div className="text-xs font-bold tracking-wider text-brand-black uppercase mt-1">Price Transparency</div>
            <div className="text-[11px] text-brand-muted">Itemized Clear BOQ</div>
          </div>
          <div className="text-center p-3">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-brand-copper">45 Day</div>
            <div className="text-xs font-bold tracking-wider text-brand-black uppercase mt-1">Interior Move-in</div>
            <div className="text-[11px] text-brand-muted">Strict Delivery Schedules</div>
          </div>
        </div>
      </div>

      {/* Embedded Deep Story / About Us Feature */}
      <div className="mt-8 sm:mt-12">
        <AboutUs onOpenConsultation={onOpenConsultation} />
      </div>

      {/* Detailed Pillars of Integrity */}
      <section className="py-16 sm:py-20 bg-brand-ivory border-t border-brand-border/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-[0.25em] text-brand-copper uppercase block mb-2">
              WHY CLIENTS CHOOSE US
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-brand-black">
              OUR FOUR CORNERSTONES OF EXCELLENCE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-copper/10 flex items-center justify-center text-brand-copper mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-display text-base font-bold uppercase text-brand-black mb-2">
                  Zero Subcontracting
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Every civil engineer, master carpenter, electrician, and finisher is directly managed and supervised by our core team.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-copper/10 flex items-center justify-center text-brand-copper mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-display text-base font-bold uppercase text-brand-black mb-2">
                  Lab-Tested Materials
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  From certified Fe550D TMT steel and 53-grade cement to BWP 710 marine plywood and Blum hardware fittings.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-copper/10 flex items-center justify-center text-brand-copper mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-display text-base font-bold uppercase text-brand-black mb-2">
                  Daily Project Updates
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Direct site log tracking and photo reports via WhatsApp keeping you updated without stressful site inspections.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-copper/10 flex items-center justify-center text-brand-copper mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-display text-base font-bold uppercase text-brand-black mb-2">
                  Local Bengaluru Roots
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Headquartered in Hebbal Kempapura, we understand local soil conditions, BBMP guidelines, and architectural preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <OurPromise onOpenConsultation={onOpenConsultation} />

      {/* Free Site Visit Form */}
      <div className="mt-12">
        <ConsultationForm />
      </div>
    </div>
  );
};
