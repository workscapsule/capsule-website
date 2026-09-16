import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { TiltCard } from '../common/TiltCard';
import { Award, Target, MessageSquare, UserCheck, CheckCircle2 } from 'lucide-react';

export const WhyCapsule: React.FC = () => {
  const pillars = [
    {
      title: 'QUALITY',
      tagline: 'We care about the finished result.',
      desc: 'Tested materials, multi-tier supervision, and zero tolerance for cut corners across civil and interior works.',
      icon: <Award className="w-7 h-7 text-brand-copper" />,
      metric: 'Superior Materials'
    },
    {
      title: 'PRECISION',
      tagline: 'Every detail matters.',
      desc: 'Laser alignment, millimetric carpentry accuracy, and architectural symmetry in every joint and tile finish.',
      icon: <Target className="w-7 h-7 text-brand-copper" />,
      metric: 'Millimetric Accuracy'
    },
    {
      title: 'TRANSPARENCY',
      tagline: 'Clear communication throughout.',
      desc: 'Transparent itemized BOQ quotes, regular site progress reports, and honest scheduling with no surprises.',
      icon: <MessageSquare className="w-7 h-7 text-brand-copper" />,
      metric: 'Zero Hidden Costs'
    },
    {
      title: 'ACCOUNTABILITY',
      tagline: 'One team taking responsibility.',
      desc: 'A single point of contact taking complete ownership from initial design consultation to final key handover.',
      icon: <UserCheck className="w-7 h-7 text-brand-copper" />,
      metric: 'Single Point of Contact'
    },
  ];

  return (
    <section id="why-capsule" className="py-20 sm:py-28 bg-brand-ivory relative overflow-hidden border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          label="WHY CAPSULE"
          title="MORE THAN JUST EXECUTION."
          highlight="WE TAKE OWNERSHIP."
          subtitle="We believe a successful project is built on more than materials and manpower. It requires relentless standards, disciplined supervision, and genuine care for your home or workspace."
          centered
        />

        {/* 4 Pillars Grid with 3D Tilt Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar, idx) => (
            <TiltCard key={idx} className="h-full">
              <div className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-brand-border hover:border-brand-copper transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-brand-cream border border-brand-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-ivory transition-all shadow-xs">
                    {pillar.icon}
                  </div>

                  <h3 className="text-base font-bold uppercase tracking-wider text-brand-black group-hover:text-brand-copper transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-semibold text-brand-copper mt-1 italic">
                    "{pillar.tagline}"
                  </p>

                  <p className="text-xs text-brand-muted mt-3 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center justify-between text-[11px] font-bold text-brand-black uppercase tracking-wider">
                  <span className="text-brand-muted">Capsule Standard</span>
                  <span className="text-brand-copper">{pillar.metric}</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Real site execution photography strip from img4 */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-brand-border bg-white p-4 sm:p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="rounded-xl overflow-hidden h-36 bg-brand-black">
              <img
                src="/assets/gallery/gallery-electrical.jpg"
                alt="Craftsmanship and Accuracy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-36 bg-brand-black">
              <img
                src="/assets/gallery/gallery-marble.jpg"
                alt="Electrical and Plumbing Supervision"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-36 bg-brand-black">
              <img
                src="/assets/gallery/gallery-renovation.jpg"
                alt="Precision Marble and Flooring"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-36 bg-brand-black">
              <img
                src="/assets/gallery/gallery-consultation.jpg"
                alt="Client Consultation & Material Selection"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-brand-muted font-medium">
              Real on-site execution by Capsule Company engineers and certified tradespeople across Bengaluru.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
