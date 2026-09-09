import React from 'react';
import { Phone, MapPin, Mail, Instagram, Facebook, Globe, Youtube, ArrowUp } from 'lucide-react';
import { companyConfig } from '../../config/company';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-black text-white pt-16 pb-12 border-t border-brand-borderDark relative overflow-hidden">
      {/* Subtle architectural ambient background glow */}
      <div className="absolute -top-40 right-10 w-96 h-96 bg-brand-copper/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Column (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-5">
            {/* Original Provided Logo Frame */}
            <div className="inline-block bg-brand-ivory p-2.5 rounded-lg border border-brand-copper/30 shadow-md">
              <img
                src="/assets/logo.jpeg"
                alt="Capsule Company - Your Space Maker Official Logo"
                className="h-16 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
              Bengaluru-based construction, interiors, and exteriors company creating spaces that are thoughtfully designed, professionally executed, and built to last.
            </p>

            <div className="pt-2">
              <span className="inline-block text-xs font-bold tracking-widest text-brand-copper uppercase mb-2">
                Direct Line & WhatsApp
              </span>
              <a
                href={`tel:${companyConfig.phoneRaw}`}
                className="block text-xl font-bold tracking-tight text-white hover:text-brand-copper transition-colors"
              >
                {companyConfig.phone}
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-gray-400 block mb-3 uppercase tracking-wider">
                Follow Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={companyConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-brand-copper hover:border-brand-copper transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={companyConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-brand-copper hover:border-brand-copper transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={companyConfig.socialLinks.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-brand-copper hover:border-brand-copper transition-all"
                  aria-label="Google Business"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href={companyConfig.socialLinks.threads}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-brand-copper hover:border-brand-copper transition-all text-xs font-bold"
                  aria-label="Threads"
                >
                  @
                </a>
                <a
                  href={companyConfig.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-brand-copper hover:border-brand-copper transition-all"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-brand-copper uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {['Home', 'About Us', 'Services', 'Process', 'Projects', 'Why Capsule', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-brand-copper transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-brand-copper uppercase mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <a href="#services" className="hover:text-brand-copper transition-colors">
                  Construction & Civil
                </a>
              </li>
              <li>
                <a href="#interiors" className="hover:text-brand-copper transition-colors">
                  Turnkey Interiors
                </a>
              </li>
              <li>
                <a href="#kitchen" className="hover:text-brand-copper transition-colors">
                  Modular Kitchens
                </a>
              </li>
              <li>
                <a href="#carpentry" className="hover:text-brand-copper transition-colors">
                  Expert Carpentry
                </a>
              </li>
              <li>
                <a href="#exteriors" className="hover:text-brand-copper transition-colors">
                  Exterior & Facade
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-copper transition-colors">
                  Renovation & Upgradation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-copper transition-colors">
                  Electrical & Plumbing
                </a>
              </li>
              {companyConfig.features.enableRealEstate && (
                <li>
                  <span className="text-xs px-2 py-0.5 rounded bg-brand-copper/20 text-brand-copper">
                    Real Estate Advisory
                  </span>
                </li>
              )}
            </ul>
          </div>

          {/* Office & Consultation */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-brand-copper uppercase mb-4">
              Bengaluru Office
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-copper shrink-0 mt-1" />
                <span className="leading-relaxed">
                  {companyConfig.addressFull}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-copper shrink-0" />
                <a href={`tel:${companyConfig.phoneRaw}`} className="hover:text-brand-copper transition-colors">
                  {companyConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-copper shrink-0" />
                <a href={`mailto:${companyConfig.email}`} className="hover:text-brand-copper transition-colors">
                  {companyConfig.email}
                </a>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 px-4 bg-brand-copper hover:bg-brand-copperLight text-white text-xs font-bold tracking-widest uppercase rounded-lg transition-all text-center"
              >
                REQUEST FREE VISIT
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} CAPSULE COMPANY. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <span className="text-brand-copper font-medium">YOUR SPACE MAKER</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
