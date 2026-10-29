import React from 'react';

export interface StitchedBorderProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'signature' | 'clean' | 'subtle' | 'frameless' | 'hoop';
}

export const StitchedBorder: React.FC<StitchedBorderProps> = ({
  children,
  className = '',
  variant = 'clean',
}) => {
  if (variant === 'hoop') {
    return (
      <div className={`relative p-3 rounded-full border-2 border-[#DEC5A3] shadow-soft-thread bg-[#F6EFE5] ${className}`}>
        <div className="absolute inset-1.5 rounded-full border border-dashed border-[#B8442D]/40 pointer-events-none" />
        {children}
      </div>
    );
  }

  if (variant === 'frameless') {
    return (
      <div className={`relative rounded-2xl ${className}`}>
        {children}
      </div>
    );
  }

  if (variant === 'signature') {
    return (
      <div className={`relative rounded-2xl border border-dashed border-[#B8442D]/50 bg-[#F6EFE5] p-4 transition-all duration-300 ${className}`}>
        {/* Subtle decorative corner stitch notches reserved only for signature focal pieces */}
        <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#B8442D]/70 rounded-tl" aria-hidden="true" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#B8442D]/70 rounded-tr" aria-hidden="true" />
        <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#B8442D]/70 rounded-bl" aria-hidden="true" />
        <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#B8442D]/70 rounded-br" aria-hidden="true" />
        {children}
      </div>
    );
  }

  // 'clean' or 'subtle' — clean, understated hairline boundary without repetitive corner brackets
  return (
    <div className={`relative rounded-2xl border border-[#DEC5A3]/50 bg-[#F6EFE5] hover:border-[#DEC5A3]/90 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};
