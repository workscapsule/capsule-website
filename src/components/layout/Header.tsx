import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { companyConfig } from '../../config/company';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PROCESS', href: '#process' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'WHY CAPSULE', href: '#why-capsule' },
    { label: 'FAQ', href: '#faq' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-sm py-2 sm:py-3'
            : 'bg-brand-ivory/95 backdrop-blur-md py-3 sm:py-4 border-b border-brand-border/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper rounded-md"
            aria-label="Capsule Company Home"
          >
            <div className="h-12 sm:h-14 md:h-16 w-auto overflow-hidden rounded-md bg-brand-ivory flex items-center p-1 border border-brand-border/50 group-hover:border-brand-copper/60 transition-colors shadow-2xs">
              <img
                src="/assets/logo.jpeg"
                alt="Capsule Company - Your Space Maker Official Logo"
                className="h-full w-auto object-contain max-h-12 sm:max-h-14 md:max-h-15"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-xs font-bold tracking-widest text-brand-black/85 hover:text-brand-copper transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-copper hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${companyConfig.phoneRaw}`}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-brand-black hover:text-brand-copper border border-brand-border hover:border-brand-copper/50 rounded-full transition-all"
              title="Call Capsule Company"
            >
              <Phone className="w-3.5 h-3.5 text-brand-copper" />
              <span>{companyConfig.phone}</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="px-4 py-2.5 bg-brand-black text-white hover:bg-brand-copper text-xs font-bold tracking-widest uppercase rounded-full transition-all duration-300 shadow-sm hover:shadow active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-copper focus:ring-offset-2"
            >
              GET FREE CONSULTATION
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${companyConfig.phoneRaw}`}
              className="p-2.5 rounded-full bg-brand-cream border border-brand-border text-brand-black hover:text-brand-copper active:scale-95 transition-all"
              aria-label="Call Capsule Company"
            >
              <Phone className="w-4 h-4 text-brand-copper" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-md text-brand-black hover:text-brand-copper focus:outline-none focus:ring-2 focus:ring-brand-copper"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-brand-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[82%] max-w-sm bg-brand-ivory shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-brand-border mb-6">
              <div className="h-10">
                <img
                  src="/assets/logo.jpeg"
                  alt="Capsule Company Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-brand-cream text-brand-black"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-2.5 text-sm font-bold tracking-wider text-brand-black hover:text-brand-copper hover:bg-brand-cream/60 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-brand-border space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 bg-brand-copper text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-md active:scale-95 transition-all text-center"
            >
              GET FREE CONSULTATION
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${companyConfig.phoneRaw}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white border border-brand-border text-xs font-semibold text-brand-black rounded-lg active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-brand-copper" />
                <span>Call Us</span>
              </a>
              <a
                href={`https://wa.me/${companyConfig.whatsappNumber}?text=${encodeURIComponent(companyConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#25D366]/10 border border-[#25D366]/30 text-xs font-semibold text-[#128C7E] rounded-lg active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            <p className="text-[11px] text-brand-muted text-center pt-2">
              {companyConfig.addressShort}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
