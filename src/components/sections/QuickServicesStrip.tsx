import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface QuickServicesStripProps {
  onSelectService: (serviceId: string) => void;
}

export const QuickServicesStrip: React.FC<QuickServicesStripProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'construction',
      title: 'CONSTRUCTION',
      subtitle: 'Civil & Turnkey Structural Works',
      target: '#construction',
      icon: (
        // Custom copper architectural icon: Crane & Building (from img1 creative)
        <svg className="w-8 h-8 text-brand-copper" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22h16" />
          <path d="M6 22V7l5-3v18" />
          <path d="M11 4h9v3" />
          <path d="M14 7v6" />
          <path d="M14 13h4v4h-4z" />
          <path d="M8 10h1" />
          <path d="M8 14h1" />
          <path d="M8 18h1" />
        </svg>
      ),
    },
    {
      id: 'interiors',
      title: 'INTERIORS',
      subtitle: 'Modular Kitchens, Wardrobes & POP',
      target: '#interiors',
      icon: (
        // Custom copper architectural icon: Sofa & Lamp (from img1 creative)
        <svg className="w-8 h-8 text-brand-copper" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 11h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6z" />
          <path d="M2 13a2 2 0 0 1 2-2h1v8H4a2 2 0 0 1-2-2v-4z" />
          <path d="M22 13a2 2 0 0 0-2-2h-1v8h1a2 2 0 0 0 2-2v-4z" />
          <path d="M7 11V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5" />
          <path d="M6 22v-3" />
          <path d="M18 22v-3" />
        </svg>
      ),
    },
    {
      id: 'exteriors',
      title: 'EXTERIORS',
      subtitle: 'Elevations, Facades & Landscaping',
      target: '#exteriors',
      icon: (
        // Custom copper architectural icon: Villa & Tree (from img1 creative)
        <svg className="w-8 h-8 text-brand-copper" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M3 11l6-5 6 5v10H3V11z" />
          <path d="M8 21v-5h2v5" />
          <path d="M18 21v-8" />
          <path d="M18 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-brand-border">
        {services.map((srv, idx) => (
          <a
            key={srv.id}
            href={srv.target}
            onClick={(e) => {
              e.preventDefault();
              onSelectService(srv.id);
            }}
            className={`group flex items-center justify-between p-4 sm:p-5 rounded-xl transition-all duration-300 hover:bg-brand-cream/70 border border-transparent hover:border-brand-copper/30 ${
              idx !== services.length - 1 ? 'md:border-r md:border-brand-border/80' : ''
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-brand-ivory border border-brand-copper/30 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-white transition-all shadow-xs">
                {srv.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-widest uppercase text-brand-black group-hover:text-brand-copper transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-brand-muted mt-0.5">
                  {srv.subtitle}
                </p>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-brand-ivory border border-brand-border flex items-center justify-center text-brand-muted group-hover:text-white group-hover:bg-brand-copper group-hover:border-brand-copper transition-all shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
