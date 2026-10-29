import React, { useState } from 'react';

export interface EmbroideryImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fit?: 'contain' | 'cover';
  fallbackTitle?: string;
  fallbackCategory?: string;
}

export const EmbroideryImage: React.FC<EmbroideryImageProps> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  fit = 'contain',
  fallbackTitle,
  fallbackCategory,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`w-full h-full bg-[#F6EFE5] flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden border border-[#DEC5A3]/50 ${className}`}
        role="img"
        aria-label={alt}
      >
        {/* Subtle linen texture simulation */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(rgba(83, 54, 48, 0.4) 1px, transparent 0)',
            backgroundSize: '16px 16px',
          }}
        />

        {/* Delicate Hand-Stitched Hoop Fallback Illustration */}
        <svg
          viewBox="0 0 120 120"
          fill="none"
          className="w-16 h-16 sm:w-20 sm:h-20 mb-3 drop-shadow-sm text-[#B8442D]"
          aria-hidden="true"
        >
          {/* Outer hoop */}
          <circle cx="60" cy="60" r="50" stroke="#DEC5A3" strokeWidth="6" />
          <circle cx="60" cy="60" r="46" stroke="#F6EFE5" strokeWidth="1" />
          <circle cx="60" cy="60" r="44" stroke="#DEC5A3" strokeWidth="1" strokeDasharray="3 3" />
          {/* Tension Screw */}
          <rect x="54" y="4" width="12" height="7" rx="1.5" fill="#DEC5A3" stroke="#301923" strokeWidth="1" />
          {/* Embroidered floral sprig inside hoop */}
          <path d="M42 75 C48 62, 60 55, 78 45" stroke="#301923" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M52 65 C48 58, 54 52, 58 56 Z" fill="#DEC5A3" stroke="#301923" strokeWidth="0.8" />
          <path d="M66 54 C70 48, 76 50, 74 56 Z" fill="#DEC5A3" stroke="#301923" strokeWidth="0.8" />
          {/* Blossom bloom */}
          <circle cx="78" cy="45" r="8" fill="#DEC5A3" stroke="#B8442D" strokeWidth="1.2" />
          <circle cx="78" cy="45" r="3.5" fill="#B8442D" />
          <circle cx="78" cy="45" r="1.2" fill="#533630" />
        </svg>

        <div className="relative z-10 space-y-1 max-w-[200px]">
          {fallbackCategory && (
            <p className="text-[10px] uppercase font-sans tracking-widest text-[#533630]">
              {fallbackCategory}
            </p>
          )}
          <p className="text-xs font-serif font-semibold text-[#301923] truncate">
            {fallbackTitle || 'Atelier Study'}
          </p>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-[#DEC5A3]/40 text-[#301923] border border-[#DEC5A3]/70 font-sans">
            Archived Piece
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#F6EFE5] ${className}`}>
      {/* Skeleton / Shimmer placeholder while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#F6EFE5] animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#DEC5A3] border-t-[#B8442D] animate-spin opacity-40" />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full ${
          fit === 'cover' ? 'object-cover' : 'object-contain'
        } transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${imgClassName}`}
        {...rest}
      />
    </div>
  );
};
