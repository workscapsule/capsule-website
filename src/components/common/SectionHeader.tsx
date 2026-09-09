import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  highlight,
  subtitle,
  centered = false,
  dark = false,
  className = '',
}) => {
  return (
    <div className={`mb-10 sm:mb-14 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {/* Label with copper architectural accent */}
      <div className={`inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3 ${
        dark ? 'text-brand-copperLight' : 'text-brand-copper'
      } ${centered ? 'justify-center' : ''}`}>
        <span className="w-6 h-[1.5px] bg-brand-copper inline-block" />
        <span>{label}</span>
        {centered && <span className="w-6 h-[1.5px] bg-brand-copper inline-block" />}
      </div>

      {/* Main Headline */}
      <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[1.15] ${
        dark ? 'text-white' : 'text-brand-black'
      }`}>
        {title}{' '}
        {highlight && (
          <span className="text-brand-copper inline-block">
            {highlight}
          </span>
        )}
      </h2>

      {/* Optional supporting subtitle */}
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg max-w-2xl leading-relaxed ${
          dark ? 'text-gray-300' : 'text-brand-muted'
        } ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
