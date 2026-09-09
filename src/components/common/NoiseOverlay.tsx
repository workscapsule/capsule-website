import React from 'react';

export const NoiseOverlay: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-40 opacity-[0.035] mix-blend-multiply"
      style={{
        backgroundImage: 'url(/assets/noise.svg)',
        backgroundRepeat: 'repeat',
      }}
      aria-hidden="true"
    />
  );
};
