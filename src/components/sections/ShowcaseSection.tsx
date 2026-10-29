import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FeaturedCreations } from './FeaturedCreations';
import { GallerySection } from './GallerySection';
import { ClothesRailSection } from './ClothesRailSection';
import type { Creation } from '../../data/creations';
import type { ShowcaseMode } from '../layout/WebsiteSidebar';

export interface ShowcaseSectionProps {
  mode: ShowcaseMode;
  onModeChange: (mode: ShowcaseMode) => void;
  onSelectCreation: (creation: Creation) => void;
  onOpenCustomOrder: (creation?: Creation) => void;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  mode,
  onModeChange,
  onSelectCreation,
  onOpenCustomOrder,
}) => {
  return (
    <section
      id="creations"
      className="py-16 sm:py-20 lg:py-24 bg-transparent border-t border-[#DEC5A3]/40 relative"
      aria-label="Creations"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Collection Switcher */}
        <div className="flex flex-col items-center justify-center mb-12 sm:mb-14 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#301923] mb-6">
            Creations
          </h2>

          <div className="inline-flex items-center p-1 rounded-full bg-[#DEC5A3]/30 border border-[#DEC5A3] shadow-xs backdrop-blur-xs">
            <button
              type="button"
              onClick={() => onModeChange('embroidery')}
              className={`px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8442D] ${
                mode === 'embroidery'
                  ? 'bg-[#B8442D] text-white shadow-soft-thread'
                  : 'text-[#533630] hover:text-[#B8442D]'
              }`}
            >
              Embroidery
            </button>

            <button
              type="button"
              onClick={() => onModeChange('clothes')}
              className={`px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8442D] ${
                mode === 'clothes'
                  ? 'bg-[#B8442D] text-white shadow-soft-thread'
                  : 'text-[#533630] hover:text-[#B8442D]'
              }`}
            >
              Clothing
            </button>
          </div>
        </div>

        {/* Full-Width Showcase Content View */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            {mode === 'embroidery' ? (
              <motion.div
                key="embroidery-view"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-4"
              >
                <FeaturedCreations
                  onSelectCreation={onSelectCreation}
                  onOpenCustomOrder={onOpenCustomOrder}
                  isContained={true}
                />
                <GallerySection
                  onSelectCreation={onSelectCreation}
                  onOpenCustomOrder={() => onOpenCustomOrder()}
                  isContained={true}
                />
              </motion.div>
            ) : (
              <motion.div
                key="clothes-view"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="py-2"
              >
                <ClothesRailSection onOpenCustomOrder={() => onOpenCustomOrder()} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
