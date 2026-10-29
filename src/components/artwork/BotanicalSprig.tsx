import React from 'react';
import { motion } from 'framer-motion';
import { useMotionPreference } from '../../hooks/useMotionPreference';

export interface BotanicalSprigProps {
  className?: string;
  width?: number;
  height?: number;
  flipped?: boolean;
  color?: string;
  secondaryColor?: string;
  leafColor?: string;
}

export const BotanicalSprig: React.FC<BotanicalSprigProps> = ({
  className = '',
  width = 120,
  height = 40,
  flipped = false,
  color = '#B8442D',
  secondaryColor = '#DEC5A3',
  leafColor = '#DEC5A3',
}) => {
  const prefersReducedMotion = useMotionPreference();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 50"
      fill="none"
      className={`${flipped ? 'scale-x-[-1]' : ''} ${className}`}
      aria-hidden="true"
    >
      {/* Delicate main stem */}
      <motion.path
        d="M10 40 C45 36, 85 24, 150 12"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        initial={prefersReducedMotion ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Hand-stitched leaves */}
      <motion.path
        d="M45 34 C42 24, 52 18, 58 23 C60 30, 52 34, 45 34 Z"
        fill={leafColor}
        stroke="#301923"
        strokeWidth="0.8"
        initial={prefersReducedMotion ? false : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.9 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      <motion.path
        d="M80 27 C84 17, 96 17, 98 24 C94 29, 87 29, 80 27 Z"
        fill={leafColor}
        stroke="#301923"
        strokeWidth="0.8"
        initial={prefersReducedMotion ? false : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.9 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      <motion.path
        d="M115 19 C113 9, 124 6, 128 12 C128 18, 122 20, 115 19 Z"
        fill={leafColor}
        stroke="#301923"
        strokeWidth="0.8"
        initial={prefersReducedMotion ? false : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.9 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />

      {/* Little buds / French knots along the branch */}
      <motion.circle
        cx="148"
        cy="12"
        r="3.5"
        fill={color}
        initial={prefersReducedMotion ? false : { scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 1 }}
      />
      <motion.circle
        cx="110"
        cy="28"
        r="2"
        fill={secondaryColor}
        initial={prefersReducedMotion ? false : { scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.9 }}
      />
      <motion.circle
        cx="72"
        cy="34"
        r="1.8"
        fill={secondaryColor}
        initial={prefersReducedMotion ? false : { scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      />
    </svg>
  );
};
