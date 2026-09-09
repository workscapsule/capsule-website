import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { companyConfig } from '../../config/company';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${companyConfig.whatsappNumber}?text=${encodeURIComponent(
    companyConfig.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center group">
      {/* Clickable Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 relative focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat with Capsule Company on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Subtle ping animation on border */}
        <span className="absolute -inset-1 rounded-full border-2 border-[#25D366] animate-ping opacity-25 pointer-events-none" />
      </a>

      {/* Pop-up pill badge */}
      {showTooltip && (
        <div className="hidden sm:flex items-center ml-3 px-3.5 py-2 bg-brand-black text-white text-xs font-semibold rounded-full shadow-lg border border-white/10 animate-reveal">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-copper transition-colors whitespace-nowrap"
          >
            Chat on WhatsApp
          </a>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="ml-2 text-gray-400 hover:text-white"
            aria-label="Dismiss WhatsApp hint"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );
};
