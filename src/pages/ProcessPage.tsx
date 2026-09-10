import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, FileText, Wrench, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { ConsultationForm } from '../components/sections/ConsultationForm';

interface ProcessPageProps {
  onOpenConsultation: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenConsultation }) => {
  const detailedSteps = [
    {
      step: '01',
      title: 'Free Site Visit & Consultation',
      timeline: 'Day 1 - 3',
      description: 'Our senior architectural engineer visits your Bengaluru plot, villa, or apartment for thorough laser measurements, structural inspection, and understanding your lifestyle needs.',
      deliverables: ['Laser Site Measurement', 'Structural Feasibility Audit', 'Initial Budget & Requirement Mapping']
    },
    {
      step: '02',
      title: '3D Visualization & Transparent BOQ',
      timeline: 'Day 4 - 10',
      description: 'We develop realistic 3D architectural renders, modular kitchen configurations, and electrical schematics alongside an itemized, line-by-line Bill of Quantities (BOQ) with zero hidden charges.',
      deliverables: ['Photorealistic 3D Views', 'Itemized Line-by-Line BOQ', 'Brand & Material Specifications Contract']
    },
    {
      step: '03',
      title: 'Certified Material Procurement',
      timeline: 'Day 11 - 15',
      description: 'We source verified materials directly from authorized manufacturers: Fe550D TMT steel, 53-grade cement, boiling water-proof (BWP 710) plywood, and German Blum / Hafele fittings.',
      deliverables: ['Manufacturer Test Certificates', 'Factory Pre-lamination & Edge Banding', 'Batch Quality Verification']
    },
    {
      step: '04',
      title: 'Supervised In-House Execution',
      timeline: 'Milestone-Based Schedule',
      description: 'Dedicated site engineers oversee execution with daily photo/video logs sent to your WhatsApp. Weekly quality checks ensure precision millimeter alignment and clean site management.',
      deliverables: ['Daily WhatsApp Site Photo Logs', 'Stage-wise Engineer Sign-offs', 'Milestone Linked Progress Reports']
    },
    {
      step: '05',
      title: 'Deep Clean, Final Audit & Handover',
      timeline: 'Handover Day',
      description: 'Comprehensive 120-point quality audit, complete industrial deep cleaning, handover of appliance warranties, and issuance of Capsule Company 10-Year Structural Warranty certificate.',
      deliverables: ['120-Point QC Audit Checklist', '10-Year Warranty Certificate', 'Key Handover & Post-Care Support']
    }
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
            <span>PROCESS</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase max-w-3xl leading-tight">
            SMART PLANNING TO <span className="text-brand-copper">FLAWLESS HANDOVER</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Our disciplined 5-stage architectural execution pipeline guarantees predictable timelines, zero hidden cost surprises, and supervised quality at every milestone.
          </p>
        </div>
      </div>

      {/* Embed Process Timeline Component */}
      <div className="mt-6 sm:mt-10">
        <ProcessTimeline onOpenConsultation={onOpenConsultation} />
      </div>

      {/* In-Depth Process Breakdown Section */}
      <section className="py-16 bg-brand-ivory border-t border-brand-border/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-[0.25em] text-brand-copper uppercase block mb-2">
              THE 5-STAGE METHODOLOGY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-brand-black">
              HOW WE EXECUTE YOUR PROJECT
            </h2>
          </div>

          <div className="space-y-6">
            {detailedSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-black text-brand-copper font-mono text-xl font-extrabold flex items-center justify-center shrink-0 shadow-md">
                    {step.step}
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-brand-black">
                        {step.title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-copper/10 text-brand-copper text-xs font-bold tracking-wider uppercase">
                        {step.timeline}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-muted max-w-2xl leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="bg-brand-ivory rounded-xl p-4 border border-brand-border/60 min-w-[280px]">
                  <span className="text-[11px] font-bold tracking-widest text-brand-copper uppercase block mb-2">
                    KEY DELIVERABLES:
                  </span>
                  <div className="space-y-1.5">
                    {step.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-brand-black">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-copper shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Booking Form */}
      <div className="mt-12">
        <ConsultationForm />
      </div>
    </div>
  );
};
