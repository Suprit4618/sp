import React from 'react';
import { motion } from 'framer-motion';
import { useMotionPreference } from '../../hooks/useMotionPreference';
import type { CompositionVariant } from '../../hooks/useSessionMotif';

export interface HeroCompositionProps {
  variant?: CompositionVariant;
  className?: string;
  onAnimationComplete?: () => void;
}

export const HeroComposition: React.FC<HeroCompositionProps> = ({
  variant = 'vine-pink',
  className = '',
  onAnimationComplete,
}) => {
  const prefersReducedMotion = useMotionPreference();

  // Animation timings
  const threadDuration = prefersReducedMotion ? 0.01 : 1.6;
  const flowerDelay = prefersReducedMotion ? 0.01 : 0.8;

  const renderArtwork = () => {
    switch (variant) {
      case 'floral-peach-yellow':
        return (
          <g>
            {/* Thread Path: Curving botanical branch with peach and butter yellow blossoms */}
            <motion.path
              d="M30 260 C70 200, 110 240, 180 170 C240 100, 200 40, 310 30 C370 20, 420 70, 480 60"
              fill="none"
              stroke="#301923"
              strokeWidth="2"
              strokeLinecap="round"
              initial={prefersReducedMotion ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: threadDuration, ease: [0.16, 1, 0.3, 1] }}
              onAnimationComplete={onAnimationComplete}
            />

            {/* Leaves in soft sage */}
            <motion.path
              d="M130 200 C110 180, 125 150, 150 165 C155 185, 140 205, 130 200 Z"
              fill="#DEC5A3"
              stroke="#301923"
              strokeWidth="1.2"
              initial={prefersReducedMotion ? false : { scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.95 }}
              transition={{ duration: 0.6, delay: flowerDelay }}
            />
            <motion.path
              d="M230 110 C210 90, 230 65, 255 80 C260 100, 245 120, 230 110 Z"
              fill="#DEC5A3"
              stroke="#301923"
              strokeWidth="1.2"
              initial={prefersReducedMotion ? false : { scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.95 }}
              transition={{ duration: 0.6, delay: flowerDelay + 0.2 }}
            />
            <motion.path
              d="M360 45 C375 25, 400 35, 395 55 C385 65, 365 60, 360 45 Z"
              fill="#DEC5A3"
              stroke="#301923"
              strokeWidth="1.2"
              initial={prefersReducedMotion ? false : { scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.95 }}
              transition={{ duration: 0.6, delay: flowerDelay + 0.3 }}
            />

            {/* Peach blossom cluster */}
            <motion.g
              initial={prefersReducedMotion ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, delay: flowerDelay + 0.15 }}
            >
              <circle cx="180" cy="170" r="16" fill="#DEC5A3" stroke="#B8442D" strokeWidth="1.5" strokeDasharray="4 2" />
              <circle cx="180" cy="170" r="6" fill="#DEC5A3" stroke="#301923" strokeWidth="1" />
              <circle cx="180" cy="170" r="2" fill="#301923" />
            </motion.g>

            {/* Butter yellow main flower */}
            <motion.g
              initial={prefersReducedMotion ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, delay: flowerDelay + 0.35 }}
            >
              <circle cx="310" cy="30" r="22" fill="#DEC5A3" stroke="#301923" strokeWidth="1.6" strokeDasharray="5 2.5" />
              <circle cx="310" cy="30" r="8" fill="#DEC5A3" stroke="#B8442D" strokeWidth="1.2" />
              <circle cx="310" cy="30" r="3" fill="#B8442D" />
            </motion.g>

            {/* Little rosewater bud at the tip */}
            <motion.circle
              cx="480"
              cy="60"
              r="7"
              fill="#DEC5A3"
              stroke="#B8442D"
              strokeWidth="1.3"
              initial={prefersReducedMotion ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: flowerDelay + 0.5 }}
            />
          </g>
        );

      case 'garland-frame':
        return (
          <g>
            {/* Curved framing garland */}
            <motion.path
              d="M40 80 C120 20, 240 20, 320 80 C380 130, 420 200, 470 240"
              fill="none"
              stroke="#DEC5A3"
              strokeWidth="2.5"
              strokeDasharray="6 3"
              initial={prefersReducedMotion ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: threadDuration, ease: [0.16, 1, 0.3, 1] }}
              onAnimationComplete={onAnimationComplete}
            />
            {/* Secondary raspberry guiding thread */}
            <motion.path
              d="M60 95 C140 40, 260 40, 340 100 C390 145, 430 215, 470 240"
              fill="none"
              stroke="#B8442D"
              strokeWidth="1.2"
              initial={prefersReducedMotion ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: threadDuration * 0.9, delay: 0.1, ease: 'easeOut' }}
            />

            {/* Crest Rose */}
            <motion.g
              initial={prefersReducedMotion ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: flowerDelay }}
            >
              <ellipse cx="230" cy="35" rx="18" ry="14" fill="#DEC5A3" stroke="#B8442D" strokeWidth="1.5" />
              <path d="M222 32 C228 28, 234 28, 238 34 C236 38, 226 38, 224 35" stroke="#B8442D" strokeWidth="1.4" strokeLinecap="round" />
              <circle cx="230" cy="34" r="3" fill="#B8442D" />
            </motion.g>

            {/* Flanking florals */}
            <motion.circle
              cx="110"
              cy="52"
              r="10"
              fill="#DEC5A3"
              stroke="#301923"
              strokeWidth="1.2"
              initial={prefersReducedMotion ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: flowerDelay + 0.2 }}
            />
            <motion.circle
              cx="350"
              cy="110"
              r="12"
              fill="#DEC5A3"
              stroke="#301923"
              strokeWidth="1.2"
              initial={prefersReducedMotion ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: flowerDelay + 0.3 }}
            />

            {/* Trailing French knots */}
            {[
              { cx: 410, cy: 170, color: '#B8442D' },
              { cx: 440, cy: 205, color: '#DEC5A3' },
              { cx: 468, cy: 238, color: '#301923' },
            ].map((k, i) => (
              <motion.circle
                key={i}
                cx={k.cx}
                cy={k.cy}
                r="3"
                fill={k.color}
                initial={prefersReducedMotion ? false : { scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: flowerDelay + 0.4 + i * 0.1 }}
              />
            ))}
          </g>
        );

      case 'cluster-stitched':
        return (
          <g>
            {/* Organic Stitched Floral Cluster with visible needle */}
            <motion.path
              d="M50 200 C80 140, 160 120, 220 150 C280 180, 340 100, 420 80"
              fill="none"
              stroke="#301923"
              strokeWidth="1.8"
              strokeDasharray="4 2"
              strokeLinecap="round"
              initial={prefersReducedMotion ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: threadDuration, ease: [0.16, 1, 0.3, 1] }}
              onAnimationComplete={onAnimationComplete}
            />

            {/* Slender golden/steel needle stitching the path */}
            <motion.g
              initial={prefersReducedMotion ? false : { opacity: 0, x: -20, y: 15 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: flowerDelay + 0.4 }}
            >
              <line x1="420" y1="80" x2="455" y2="50" stroke="#301923" strokeWidth="2" strokeLinecap="round" />
              <ellipse cx="452" cy="52" rx="1.5" ry="3.5" transform="rotate(-40 452 52)" fill="#F6EFE5" stroke="#301923" strokeWidth="0.8" />
              {/* Loose silk thread tail */}
              <path d="M455 50 C470 35, 485 50, 475 65 C465 80, 490 85, 498 75" fill="none" stroke="#B8442D" strokeWidth="1.4" strokeLinecap="round" />
            </motion.g>

            {/* Central heirloom rose */}
            <motion.g
              initial={prefersReducedMotion ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, delay: flowerDelay }}
            >
              <circle cx="220" cy="150" r="20" fill="#DEC5A3" stroke="#B8442D" strokeWidth="1.5" strokeDasharray="3 2" />
              <circle cx="220" cy="150" r="11" fill="#F6EFE5" stroke="#B8442D" strokeWidth="1.2" />
              <circle cx="220" cy="150" r="4" fill="#B8442D" />
            </motion.g>

            {/* Small accent daisy */}
            <motion.g
              initial={prefersReducedMotion ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: flowerDelay + 0.2 }}
            >
              <circle cx="120" cy="140" r="10" fill="#DEC5A3" stroke="#301923" strokeWidth="1.2" />
              <circle cx="120" cy="140" r="3.5" fill="#B8442D" />
            </motion.g>
          </g>
        );

      case 'vine-pink':
      default:
        return (
          <g>
            {/* Composition A: Master delicate pink botanical vine with silk thread drawing */}
            <motion.path
              d="M20 230 C80 210, 120 260, 180 200 C240 140, 220 70, 310 50 C370 30, 410 90, 460 70 C480 60, 500 45, 510 35"
              fill="none"
              stroke="#B8442D"
              strokeWidth="2"
              strokeLinecap="round"
              initial={prefersReducedMotion ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: threadDuration, ease: [0.16, 1, 0.3, 1] }}
              onAnimationComplete={onAnimationComplete}
            />

            {/* Secondary stitch line creating tactile depth */}
            <motion.path
              d="M30 235 C90 215, 125 262, 182 205 C242 145, 222 75, 312 55"
              fill="none"
              stroke="#DEC5A3"
              strokeWidth="1"
              strokeDasharray="3 3"
              initial={prefersReducedMotion ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: threadDuration * 0.9, delay: 0.15, ease: 'easeOut' }}
            />

            {/* Hand-stitched leaves */}
            <motion.path
              d="M130 240 C110 225, 120 195, 145 208 C150 225, 140 245, 130 240 Z"
              fill="#DEC5A3"
              stroke="#301923"
              strokeWidth="1"
              initial={prefersReducedMotion ? false : { scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.95 }}
              transition={{ duration: 0.6, delay: flowerDelay }}
            />
            <motion.path
              d="M230 140 C215 120, 232 95, 255 110 C260 130, 245 150, 230 140 Z"
              fill="#DEC5A3"
              stroke="#301923"
              strokeWidth="1"
              initial={prefersReducedMotion ? false : { scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.95 }}
              transition={{ duration: 0.6, delay: flowerDelay + 0.15 }}
            />
            <motion.path
              d="M370 45 C385 28, 410 38, 405 58 C395 68, 375 62, 370 45 Z"
              fill="#DEC5A3"
              stroke="#301923"
              strokeWidth="1"
              initial={prefersReducedMotion ? false : { scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.95 }}
              transition={{ duration: 0.6, delay: flowerDelay + 0.25 }}
            />

            {/* Hand-stitched pink flowers */}
            <motion.g
              initial={prefersReducedMotion ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, delay: flowerDelay + 0.1 }}
            >
              <circle cx="180" cy="200" r="14" fill="#DEC5A3" stroke="#B8442D" strokeWidth="1.4" strokeDasharray="4 2" />
              <circle cx="180" cy="200" r="5" fill="#DEC5A3" stroke="#301923" strokeWidth="1" />
              <circle cx="180" cy="200" r="2" fill="#301923" />
            </motion.g>

            {/* Signature porcelain & raspberry blossom */}
            <motion.g
              initial={prefersReducedMotion ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, delay: flowerDelay + 0.3 }}
            >
              <circle cx="310" cy="50" r="20" fill="#F6EFE5" stroke="#B8442D" strokeWidth="1.6" />
              {/* Petal radial stitches */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <line
                  key={i}
                  x1={310 + 6 * Math.cos((deg * Math.PI) / 180)}
                  y1={50 + 6 * Math.sin((deg * Math.PI) / 180)}
                  x2={310 + 17 * Math.cos((deg * Math.PI) / 180)}
                  y2={50 + 17 * Math.sin((deg * Math.PI) / 180)}
                  stroke="#DEC5A3"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              ))}
              <circle cx="310" cy="50" r="6" fill="#DEC5A3" stroke="#301923" strokeWidth="1.2" />
              <circle cx="310" cy="50" r="2" fill="#301923" />
            </motion.g>

            {/* Needle at the leading edge */}
            <motion.g
              initial={prefersReducedMotion ? false : { opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: flowerDelay + 0.45 }}
            >
              <line x1="510" y1="35" x2="538" y2="15" stroke="#301923" strokeWidth="1.8" strokeLinecap="round" />
              <ellipse cx="535" cy="17" rx="1.2" ry="2.8" transform="rotate(-38 535 17)" fill="#F6EFE5" stroke="#301923" strokeWidth="0.8" />
            </motion.g>
          </g>
        );
    }
  };

  return (
    <div className={`relative overflow-visible select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 560 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm"
      >
        {renderArtwork()}
      </svg>
    </div>
  );
};

