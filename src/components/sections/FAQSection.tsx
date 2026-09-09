import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { faqData } from '../../data/faqData';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          label="FREQUENTLY ASKED QUESTIONS"
          title="EVERY QUESTION."
          highlight="ANSWERED WITH CLARITY."
          subtitle="Clear, transparent answers about our construction standards, turnkey interior methodology, modular systems, and consultation process."
          centered
        />

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-brand-border bg-brand-ivory/60 hover:border-brand-copper/40 transition-all duration-200 overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-brand-black tracking-wide">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-brand-copper text-white border-brand-copper' : 'bg-white text-brand-black border-brand-border'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 animate-reveal">
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed border-t border-brand-border/60 pt-4">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Question Help Prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs text-brand-muted">
            Have a specific question not listed here?{' '}
            <a href="#contact" className="text-brand-copper font-bold hover:underline">
              Speak with our Bengaluru team
            </a>{' '}
            or tap the Chatbot assistant.
          </p>
        </div>

      </div>
    </section>
  );
};
