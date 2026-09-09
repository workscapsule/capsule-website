import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ShieldCheck, Clock, CheckCircle2, PhoneCall } from 'lucide-react';
import { companyConfig } from '../../config/company';

interface OurPromiseProps {
  onOpenConsultation: () => void;
}

export const OurPromise: React.FC<OurPromiseProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 sm:py-28 bg-brand-black text-white relative overflow-hidden">
      {/* Copper Ambient Lighting */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-brand-copper/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image Composition matching img5 */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-brand-dark">
              <img
                src="/assets/creatives/img5.jpeg"
                alt="Capsule Company Promise & Workspaces"
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-700 max-h-[580px]"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 glass-panel-dark rounded-xl px-3.5 py-2 text-white border border-brand-copper/30">
                <span className="text-[10px] font-bold tracking-widest text-brand-copper uppercase">
                  Bengaluru Standard
                </span>
                <p className="text-xs font-semibold">Let's build something better.</p>
              </div>
            </div>
            
            {/* Geometric Copper Frame Corner */}
            <div className="absolute -bottom-4 -left-4 w-28 h-28 border-b-2 border-l-2 border-brand-copper/50 rounded-bl-2xl pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Promise Statement */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              label="OUR PROMISE"
              title="YOUR SPACE."
              highlight="OUR RESPONSIBILITY."
              subtitle="From the first conversation to the final handover, we aim to make the entire process clear, coordinated and reliable."
              dark
            />

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                Whether it is a <strong className="text-white">home, office, commercial space or renovation</strong>, we bring together the people, planning and execution needed to get it done right.
              </p>
              <p className="text-xs text-brand-copperLight leading-relaxed">
                No passing the blame between contractors. No unexpected hidden charges. Only dedicated architectural and craftsmanship ownership.
              </p>
            </div>

            {/* Commitments list */}
            <div className="space-y-2.5 pt-2">
              {[
                'Single Point of Coordination for civil, carpentry & MEP',
                'Milestone-linked transparent billing schedules',
                'Supervised on-site safety and quality compliance',
                'Prompt post-handover support & maintenance assistance',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-copper shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 bg-brand-copper hover:bg-brand-copperLight text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg active:scale-95 transition-all text-center"
              >
                REQUEST FREE SITE VISIT
              </button>
              
              <a
                href={`tel:${companyConfig.phoneRaw}`}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold tracking-widest uppercase rounded-full transition-all text-center flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-brand-copper" />
                <span>+91 96321 24422</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
