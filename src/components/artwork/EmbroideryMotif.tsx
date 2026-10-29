import React from 'react';
import { motion } from 'framer-motion';
import { useMotionPreference } from '../../hooks/useMotionPreference';

export type MotifType =
  | 'rose'
  | 'daisy'
  | 'leaf-sprig'
  | 'french-knot'
  | 'feather-stitch'
  | 'needle-eye'
  | 'bud'
  | 'botanical-cluster';

export interface EmbroideryMotifProps {
  type: MotifType;
  size?: number | string;
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  animated?: boolean;
  delay?: number;
}

export const EmbroideryMotif: React.FC<EmbroideryMotifProps> = ({
  type,
  size = 36,
  className = '',
  primaryColor = '#B8442D',
  secondaryColor = '#DEC5A3',
  accentColor = '#533630',
  animated = false,
  delay = 0,
}) => {
  const prefersReducedMotion = useMotionPreference();
  const shouldAnimate = animated && !prefersReducedMotion;

  const animationProps = shouldAnimate
    ? {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.8, delay, ease: 'easeOut' as const },
      }
    : {};

  const renderMotif = () => {
    switch (type) {
      case 'rose':
        return (
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
            {/* Outer satin-stitch rose petals */}
            <path
              d="M24 10 C32 10, 38 16, 38 24 C38 33, 30 38, 24 38 C16 38, 10 32, 10 24 C10 16, 17 10, 24 10 Z"
              fill={secondaryColor}
              fillOpacity="0.35"
              stroke={primaryColor}
              strokeWidth="1.2"
              strokeDasharray="4 2"
            />
            {/* Intermediate swirling petal contours */}
            <path
              d="M19 19 C23 15, 29 16, 31 20 C33 24, 29 28, 25 28 C20 28, 18 24, 20 21"
              stroke={primaryColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M16 26 C17 31, 23 34, 28 32 C33 30, 34 25, 32 22"
              stroke={primaryColor}
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            {/* Center tight bud */}
            <ellipse cx="24" cy="23" rx="3.5" ry="3" fill={primaryColor} />
            <circle cx="23" cy="22" r="1" fill="#F6EFE5" />
            {/* Little calyx leaf */}
            <path
              d="M12 30 C9 33, 11 37, 14 36 C17 35, 15 32, 12 30 Z"
              fill="#DEC5A3"
              stroke="#301923"
              strokeWidth="0.8"
            />
          </svg>
        );

      case 'daisy':
        return (
          <svg viewBox="0 0 44 44" fill="none" className="w-full h-full">
            {/* 8 radiating embroidered petals */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <g key={i} transform={`rotate(${angle} 22 22)`}>
                <path
                  d="M22 22 C20 15, 20 9, 22 7 C24 9, 24 15, 22 22 Z"
                  fill="#F6EFE5"
                  stroke={primaryColor}
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                {/* Center stitch highlight inside petal */}
                <line x1="22" y1="18" x2="22" y2="10" stroke={secondaryColor} strokeWidth="1" strokeLinecap="round" />
              </g>
            ))}
            {/* Center French knot cluster */}
            <circle cx="22" cy="22" r="5" fill={accentColor} stroke="#301923" strokeWidth="1" />
            <circle cx="21" cy="21" r="1.5" fill="#B8442D" />
            <circle cx="23.5" cy="22.5" r="1.2" fill="#301923" />
          </svg>
        );

      case 'leaf-sprig':
        return (
          <svg viewBox="0 0 50 40" fill="none" className="w-full h-full">
            {/* Central curved stem */}
            <path
              d="M6 34 C16 30, 26 22, 44 8"
              stroke="#301923"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            {/* Hand-stitched sage leaves */}
            <path
              d="M18 28 C17 22, 22 18, 27 20 C28 25, 23 28, 18 28 Z"
              fill="#DEC5A3"
              stroke="#301923"
              strokeWidth="1"
            />
            <path
              d="M28 22 C29 16, 35 14, 38 17 C38 22, 33 24, 28 22 Z"
              fill="#DEC5A3"
              stroke="#301923"
              strokeWidth="1"
            />
            <path
              d="M12 32 C8 28, 9 24, 13 25 C16 26, 15 30, 12 32 Z"
              fill="#DEC5A3"
              stroke="#301923"
              strokeWidth="1"
            />
            {/* Little berry bud */}
            <circle cx="44" cy="8" r="3.2" fill={primaryColor} stroke="#301923" strokeWidth="0.9" />
          </svg>
        );

      case 'french-knot':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <ellipse cx="12" cy="12" rx="4.5" ry="4" fill={primaryColor} stroke="#301923" strokeWidth="1" />
            <path
              d="M10 10 C11 9, 14 9, 14 11 C14 13, 11 14, 11 12"
              stroke="#F6EFE5"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        );

      case 'feather-stitch':
        return (
          <svg viewBox="0 0 60 20" fill="none" className="w-full h-full">
            <path
              d="M4 10 L12 4 L14 12 L22 6 L24 14 L32 8 L34 16 L42 10 L44 18 L52 12"
              stroke={primaryColor}
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="4" r="1.5" fill={accentColor} />
            <circle cx="22" cy="6" r="1.5" fill={accentColor} />
            <circle cx="32" cy="8" r="1.5" fill={accentColor} />
            <circle cx="42" cy="10" r="1.5" fill={accentColor} />
            <circle cx="52" cy="12" r="1.5" fill={accentColor} />
          </svg>
        );

      case 'needle-eye':
        return (
          <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
            {/* Needle */}
            <path d="M6 34 L32 8" stroke="#301923" strokeWidth="1.8" strokeLinecap="round" />
            {/* Needle Eye */}
            <ellipse cx="30" cy="10" rx="1.6" ry="4" transform="rotate(-45 30 10)" fill="#F6EFE5" stroke="#301923" strokeWidth="1" />
            {/* Thread winding through */}
            <path
              d="M30 10 C36 4, 40 14, 34 20 C28 26, 32 36, 38 34"
              stroke={primaryColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        );

      case 'bud':
        return (
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
            <path
              d="M16 28 C16 22, 16 16, 16 12"
              stroke="#301923"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <path
              d="M11 20 C11 16, 14 14, 16 15"
              stroke="#DEC5A3"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M13 14 C12 9, 16 6, 19 8 C21 11, 18 15, 16 16 C14 16, 13 15, 13 14 Z"
              fill={primaryColor}
              stroke="#301923"
              strokeWidth="1"
            />
            <circle cx="16.5" cy="10" r="1" fill={accentColor} />
          </svg>
        );

      case 'botanical-cluster':
      default:
        return (
          <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
            {/* Stem */}
            <path d="M14 50 C22 42, 34 32, 46 16" stroke="#301923" strokeWidth="1.5" strokeLinecap="round" />
            {/* Leaves */}
            <path d="M22 38 C18 32, 22 26, 28 28 C29 34, 25 38, 22 38 Z" fill="#DEC5A3" stroke="#301923" strokeWidth="1" />
            <path d="M34 28 C36 21, 43 20, 44 25 C43 30, 38 31, 34 28 Z" fill="#DEC5A3" stroke="#301923" strokeWidth="1" />
            {/* Blossom */}
            <circle cx="45" cy="18" r="8" fill={secondaryColor} stroke={primaryColor} strokeWidth="1.3" strokeDasharray="3 2" />
            <circle cx="45" cy="18" r="3.5" fill={accentColor} stroke="#301923" strokeWidth="1" />
            {/* Small stitched stars */}
            <line x1="45" y1="12" x2="45" y2="14" stroke={primaryColor} strokeWidth="1.2" strokeLinecap="round" />
            <line x1="45" y1="22" x2="45" y2="24" stroke={primaryColor} strokeWidth="1.2" strokeLinecap="round" />
            <line x1="39" y1="18" x2="41" y2="18" stroke={primaryColor} strokeWidth="1.2" strokeLinecap="round" />
            <line x1="49" y1="18" x2="51" y2="18" stroke={primaryColor} strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        );
    }
  };

  return (
    <motion.div
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      {...animationProps}
      aria-hidden="true"
    >
      {renderMotif()}
    </motion.div>
  );
};
