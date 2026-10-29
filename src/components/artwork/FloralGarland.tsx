import React from 'react';
import { motion } from 'framer-motion';
import { useMotionPreference } from '../../hooks/useMotionPreference';

export interface FloralGarlandProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  color?: string;
  flowerColor?: string;
  accentColor?: string;
}

export const FloralGarland: React.FC<FloralGarlandProps> = ({
  className = '',
  width = '100%',
  height = 48,
  color = '#533630',
  flowerColor = '#B8442D',
  accentColor = '#DEC5A3',
}) => {
  const prefersReducedMotion = useMotionPreference();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 50"
      fill="none"
      className={`max-w-full ${className}`}
      aria-hidden="true"
    >
      {/* Symmetrical gentle swags */}
      <motion.path
        d="M20 25 C100 45, 150 15, 200 25 C250 35, 300 15, 380 25"
        stroke={color}
        strokeWidth="1.2"
        strokeDasharray="4 2"
        strokeLinecap="round"
        initial={prefersReducedMotion ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
      />

      {/* Central Rosette */}
      <circle cx="200" cy="25" r="7" fill="#DEC5A3" stroke={flowerColor} strokeWidth="1.2" />
      <circle cx="200" cy="25" r="3" fill={accentColor} />
      <circle cx="200" cy="25" r="1" fill="#301923" />

      {/* Flanking mini blossoms */}
      <circle cx="120" cy="31" r="5" fill="#F6EFE5" stroke={flowerColor} strokeWidth="1" />
      <circle cx="120" cy="31" r="2" fill="#DEC5A3" />

      <circle cx="280" cy="26" r="5" fill="#F6EFE5" stroke={flowerColor} strokeWidth="1" />
      <circle cx="280" cy="26" r="2" fill="#DEC5A3" />

      {/* Leaf pairs */}
      <path d="M155 24 C158 18, 166 18, 168 23 C164 26, 158 26, 155 24 Z" fill="#DEC5A3" stroke="#533630" strokeWidth="0.8" />
      <path d="M245 28 C242 22, 234 22, 232 27 C236 30, 242 30, 245 28 Z" fill="#DEC5A3" stroke="#533630" strokeWidth="0.8" />
      <path d="M70 33 C67 27, 60 28, 59 34 C64 36, 68 36, 70 33 Z" fill="#DEC5A3" stroke="#533630" strokeWidth="0.8" />
      <path d="M330 20 C333 14, 340 15, 341 21 C336 23, 332 23, 330 20 Z" fill="#DEC5A3" stroke="#533630" strokeWidth="0.8" />
    </svg>
  );
};
