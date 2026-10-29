import React from 'react';
import { ClothingRailHero } from '@/components/ui/product-rail-gallery';
import { CLOTHES_RAIL_ITEMS } from '@/data/clothesRailItems';
import { ArrowRight } from 'lucide-react';

export interface ClothesRailSectionProps {
  onOpenCustomOrder?: () => void;
}

export const ClothesRailSection: React.FC<ClothesRailSectionProps> = ({
  onOpenCustomOrder,
}) => {
  return (
    <div className="w-full">
      <div className="w-full bg-[#F6EFE5]/90 backdrop-blur-xs rounded-3xl border border-[#DEC5A3] shadow-soft-thread py-4 overflow-hidden relative">
        {/* Ambient warm glow behind rail */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_40%_at_50%_35%,rgba(184,68,45,0.06),transparent_70%)]"
        />

        <ClothingRailHero
          items={CLOTHES_RAIL_ITEMS}
          hanger="none"
          heading="Clothing"
          autoplay={true}
          interval={3400}
          action={
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenCustomOrder?.()}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#B8442D] text-white hover:bg-[#A33B26] shadow-soft-thread transition-all duration-200 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8442D]"
              >
                <span>Discuss a Commission</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          }
        />
      </div>
    </div>
  );
};
