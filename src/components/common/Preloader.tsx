import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [mounted, setMounted] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    // Start exit transition after 900ms
    const timer = setTimeout(() => {
      setHiding(true);
    }, 1100);

    // Completely unmount after transition completes
    const unmountTimer = setTimeout(() => {
      setMounted(false);
    }, 1800);

    return () => {
      clearTimeout(timer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-ivory transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        hiding ? '-translate-y-full pointer-events-none' : 'translate-y-0'
      }`}
      aria-hidden="true"
    >
      <div className="relative flex flex-col items-center max-w-xs text-center p-6">
        {/* Architectural Logo Frame */}
        <div className="w-28 h-28 mb-4 overflow-hidden rounded-lg shadow-sm border border-brand-border bg-white flex items-center justify-center p-2">
          <img
            src="/assets/logo.jpeg"
            alt="Capsule Company Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <p className="text-xs font-semibold tracking-widest text-brand-copper uppercase mb-2">
          Bengaluru • Space Makers
        </p>

        {/* Minimal Progress line */}
        <div className="w-40 h-[2px] bg-brand-border overflow-hidden relative mt-2 rounded-full">
          <div className="absolute top-0 bottom-0 left-0 bg-brand-copper animate-[marquee_1.2s_ease-in-out_infinite] w-24" />
        </div>
      </div>
    </div>
  );
};
