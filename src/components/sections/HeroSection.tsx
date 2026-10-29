import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';
import { InstagramIcon } from '../ui/InstagramIcon';
import { useMotionPreference } from '../../hooks/useMotionPreference';

export interface HeroSectionProps {
  onOpenCustomOrder?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCustomOrder }) => {
  const prefersReducedMotion = useMotionPreference();

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden bg-transparent"
      aria-label="Pink Lunna Welcome"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Editorial Text Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Expressive Editorial Headline */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-1"
            >
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-[#301923] leading-[1.08] tracking-tight">
                Little threads. <br />
                <span className="italic font-serif text-[#B8442D]">Lovely things.</span>
              </h1>
            </motion.div>

            {/* Authentic Brand Narrative */}
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-[#533630] max-w-xl leading-relaxed font-sans"
            >
              {SITE_CONFIG.subheadline}
            </motion.p>

            {/* Dual Actions with Clear Visual Hierarchy */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#creations"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium tracking-wide bg-[#B8442D] text-white hover:bg-[#A33B26] shadow-soft-thread transition-all duration-200"
              >
                <span>Explore Creations</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#custom-order"
                onClick={(e) => {
                  if (onOpenCustomOrder) {
                    e.preventDefault();
                    onOpenCustomOrder();
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium tracking-wide bg-[#DEC5A3]/30 text-[#301923] hover:bg-[#DEC5A3]/60 border border-[#DEC5A3] transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 text-[#B8442D]" />
                <span>Commission Custom Work</span>
              </a>
            </motion.div>

            {/* Verified Instagram Social Pill */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="pt-2 flex items-center gap-3 text-xs text-[#533630]"
            >
              <span className="font-serif italic text-sm text-[#301923]">Follow behind-the-scenes:</span>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#B8442D] hover:text-[#301923] font-medium underline underline-offset-4 decoration-[#DEC5A3]"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>{SITE_CONFIG.instagramHandle}</span>
              </a>
            </motion.div>
          </div>

          {/* Visual Showcase Column: Redesigned Hero Image Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[290px] sm:max-w-[320px] md:max-w-[340px] bg-[#F6EFE5]/90 backdrop-blur-xs rounded-2xl border border-[#DEC5A3] shadow-[0_8px_30px_rgba(48,25,35,0.06)] p-3 sm:p-4 flex flex-col"
            >
              {/* Image Container with Gentle Hover Zoom */}
              <motion.div
                className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-[#F6EFE5] flex items-center justify-center cursor-default"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <img
                  src="/images/creations/real-embroidery-hero.png"
                  alt="Botanical hand embroidery floral study"
                  className="w-full h-full object-contain select-none"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>

              {/* Understated Editorial Caption — Sits Below the Photograph Without Overlap */}
              <div className="pt-3 pb-1 px-1 border-t border-[#DEC5A3]/40 mt-2 flex items-baseline justify-between">
                <div>
                  <p className="font-serif text-base sm:text-lg font-semibold text-[#301923] leading-tight">
                    Botanical Embroidery
                  </p>
                  <p className="font-serif italic text-xs text-[#B8442D] mt-0.5">
                    Floral inspiration
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
