import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X as Cross, ShieldCheck, Award, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { WhyCapsule } from '../components/sections/WhyCapsule';
import { OurPromise } from '../components/sections/OurPromise';
import { ConsultationForm } from '../components/sections/ConsultationForm';

interface WhyCapsulePageProps {
  onOpenConsultation: () => void;
}

export const WhyCapsulePage: React.FC<WhyCapsulePageProps> = ({ onOpenConsultation }) => {
  const comparisonRows = [
    {
      feature: 'Transparent Line-by-Line BOQ',
      capsule: true,
      traditional: false,
      freelance: false,
      detail: 'Clear itemized costing before work begins with zero surprise escalation.'
    },
    {
      feature: 'In-House Master Carpenters & Civil Engineers',
      capsule: true,
      traditional: false,
      freelance: false,
      detail: 'Directly supervised execution without chaotic subcontracting layers.'
    },
    {
      feature: 'Strict 45-Day Interior Delivery Guarantee',
      capsule: true,
      traditional: false,
      freelance: false,
      detail: 'Penalty-backed timelines with dedicated milestone checklists.'
    },
    {
      feature: '10-Year Structural & Waterproofing Warranty',
      capsule: true,
      traditional: false,
      freelance: false,
      detail: 'Formal warranty document backed by licensed structural engineers.'
    },
    {
      feature: 'Daily WhatsApp Site Photos & Log Reports',
      capsule: true,
      traditional: false,
      freelance: 'Rarely',
      detail: 'Live visual tracking of your project without frequent site visits.'
    },
    {
      feature: 'Lab-Tested Fe550D Steel & BWP 710 Marine Ply',
      capsule: true,
      traditional: 'Unverified',
      freelance: false,
      detail: 'Verified manufacturer batch test certificates provided on request.'
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-16 w-full">
      {/* Header Banner */}
      <div className="bg-brand-black text-white py-14 sm:py-20 relative overflow-hidden border-b border-brand-copper/30">
        <div className="absolute inset-0 bg-[radial-gradient(#B86D43_1px,transparent_1px)] [background-size:28px_28px] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-brand-copper uppercase mb-3">
            <Link to="/" className="hover:underline">HOME</Link>
            <span>/</span>
            <span>WHY CAPSULE</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase max-w-3xl leading-tight">
            WHY CAPSULE COMPANY IS <span className="text-brand-copper">DIFFERENT</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            We bridge the gap between expensive architectural design firms and unreliable local contractors by offering institutional engineering standards with boutique personalized care.
          </p>
        </div>
      </div>

      {/* 4 Pillars Section */}
      <div className="mt-4">
        <WhyCapsule />
      </div>

      {/* Comparison Matrix Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-[0.25em] text-brand-copper uppercase block mb-2">
              RADICAL TRANSPARENCY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-brand-black">
              HOW WE COMPARE IN BENGALURU
            </h2>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-3xl border border-brand-border shadow-lg">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-brand-black text-white text-xs uppercase tracking-wider">
                  <th className="p-5 sm:p-6 font-bold w-2/5">Quality Parameter</th>
                  <th className="p-5 sm:p-6 font-extrabold text-brand-copper text-center w-1/5 bg-brand-black/95">
                    Capsule Company
                  </th>
                  <th className="p-5 sm:p-6 font-semibold text-gray-400 text-center w-1/5">
                    Traditional Contractors
                  </th>
                  <th className="p-5 sm:p-6 font-semibold text-gray-400 text-center w-1/5">
                    Freelance Designers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border/70 text-xs sm:text-sm">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-brand-ivory/50 transition-colors">
                    <td className="p-5 sm:p-6">
                      <div className="font-bold text-brand-black uppercase">{row.feature}</div>
                      <div className="text-xs text-brand-muted mt-1">{row.detail}</div>
                    </td>
                    <td className="p-5 sm:p-6 text-center bg-brand-copper/5 font-bold text-brand-black">
                      <div className="w-7 h-7 rounded-full bg-brand-copper text-white flex items-center justify-center mx-auto shadow-sm">
                        <Check className="w-4 h-4" />
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 text-center text-gray-400">
                      {typeof row.traditional === 'boolean' ? (
                        row.traditional ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <Cross className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs font-medium text-gray-500">{row.traditional}</span>
                      )}
                    </td>
                    <td className="p-5 sm:p-6 text-center text-gray-400">
                      {typeof row.freelance === 'boolean' ? (
                        row.freelance ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <Cross className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs font-medium text-gray-500">{row.freelance}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Our Promise Embed */}
      <OurPromise onOpenConsultation={onOpenConsultation} />

      {/* Free Site Visit Form */}
      <div className="mt-12">
        <ConsultationForm />
      </div>
    </div>
  );
};
