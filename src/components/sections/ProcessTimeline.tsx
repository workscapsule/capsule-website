import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Clock, ShieldCheck, ArrowRight, MessageSquare, Compass, FileSpreadsheet, Hammer, Key } from 'lucide-react';

interface ProcessTimelineProps {
  onOpenConsultation: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      step: '01',
      title: 'CONNECT',
      desc: 'Reach out to us with your space requirements, ideas, or architectural drawings.',
      icon: <MessageSquare className="w-5 h-5 text-brand-copper" />
    },
    {
      step: '02',
      title: 'ASSESS',
      desc: 'Our engineers conduct an in-person site visit to assess dimensions and technical conditions.',
      icon: <Compass className="w-5 h-5 text-brand-copper" />
    },
    {
      step: '03',
      title: 'PLAN',
      desc: 'We develop transparent BOQs, 3D interior renders, and structured milestone schedules.',
      icon: <FileSpreadsheet className="w-5 h-5 text-brand-copper" />
    },
    {
      step: '04',
      title: 'EXECUTE',
      desc: 'Supervised craftsmanship, quality materials, and weekly photo progress updates.',
      icon: <Hammer className="w-5 h-5 text-brand-copper" />
    },
    {
      step: '05',
      title: 'DELIVER',
      desc: 'Flawless snag-free finishing, thorough cleanup, and key handover with complete satisfaction.',
      icon: <Key className="w-5 h-5 text-brand-copper" />
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          label="OUR PROCESS"
          title="FROM SMART PLANNING"
          highlight="TO SMOOTH HANDOVER"
          subtitle="Our 5-stage disciplined execution framework ensures every millimeter of your space is coordinated with absolute clarity and zero surprises."
          centered
        />

        {/* Dual Core Value Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-14">
          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-brand-ivory border border-brand-copper/30 shadow-xs">
            <div className="w-8 h-8 rounded-full bg-brand-copper/15 flex items-center justify-center text-brand-copper">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-black block">
                ON-TIME DELIVERY
              </span>
              <span className="text-[11px] text-brand-muted">Disciplined milestone tracking</span>
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-brand-ivory border border-brand-copper/30 shadow-xs">
            <div className="w-8 h-8 rounded-full bg-brand-copper/15 flex items-center justify-center text-brand-copper">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-black block">
                PRICE TRANSPARENCY
              </span>
              <span className="text-[11px] text-brand-muted">Itemized BOQ without surprises</span>
            </div>
          </div>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="relative p-5 sm:p-6 rounded-2xl bg-brand-ivory border border-brand-border hover:border-brand-copper transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-brand-border flex items-center justify-center group-hover:bg-brand-cream transition-colors shadow-2xs">
                    {item.icon}
                  </div>
                  <span className="text-xl font-display font-extrabold text-brand-copper group-hover:scale-110 transition-transform">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-black group-hover:text-brand-copper transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-brand-border/60 text-[10px] uppercase font-bold tracking-widest text-brand-copper">
                Stage {item.step}
              </div>
            </div>
          ))}
        </div>

        {/* Process Footer CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 bg-brand-black hover:bg-brand-copper text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg active:scale-95 transition-all inline-flex items-center gap-2"
          >
            <span>START STEP 01 — CONNECT WITH US</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
