import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CREATIONS, type Creation } from '../../data/creations';
import { EmbroideryImage } from '../ui/EmbroideryImage';
import { StitchedBorder } from '../artwork/StitchedBorder';

export interface FeaturedCreationsProps {
  onSelectCreation: (creation: Creation) => void;
  onOpenCustomOrder?: (creation?: Creation) => void;
  isContained?: boolean;
}

export const FeaturedCreations: React.FC<FeaturedCreationsProps> = ({
  onSelectCreation,
  onOpenCustomOrder,
  isContained = false,
}) => {
  const featured = CREATIONS.filter((c) => c.featured);
  const primaryHero = featured[0] || CREATIONS[0];
  const supportingPieces = featured.slice(1, 3);

  const innerContent = (
    <>
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-4 border-b border-[#DEC5A3]/40">
        <div>
          <h2 id="featured-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#301923]">
            Featured Needlework
          </h2>
        </div>
      </div>

      {/* Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Primary Creation — Signature Full Garment Focal Point */}
        {primaryHero && (
          <div className="lg:col-span-7 space-y-6">
            <StitchedBorder variant="signature" className="overflow-hidden">
              <div
                className="relative aspect-[3/4] sm:aspect-[4/5] rounded-xl overflow-hidden cursor-pointer group bg-[#F6EFE5] p-2 sm:p-4"
                onClick={() => onSelectCreation(primaryHero)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onSelectCreation(primaryHero)}
                aria-label={`View details for ${primaryHero.title}`}
              >
                <EmbroideryImage
                  src={primaryHero.image}
                  alt={primaryHero.alt}
                  fit={primaryHero.objectFit || 'contain'}
                  fallbackTitle={primaryHero.title}
                  fallbackCategory={primaryHero.categoryLabel}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="pt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-sans uppercase tracking-widest text-[#533630]">
                    {primaryHero.categoryLabel}
                  </span>
                  {primaryHero.suggestedTechniques && (
                    <span className="text-xs text-[#B8442D] italic">
                      {primaryHero.suggestedTechniques.join(' • ')}
                    </span>
                  )}
                </div>

                <h3
                  className="font-serif text-2xl sm:text-3xl text-[#301923] hover:text-[#B8442D] cursor-pointer transition-colors"
                  onClick={() => onSelectCreation(primaryHero)}
                >
                  {primaryHero.title}
                </h3>

                <p className="text-sm text-[#533630] leading-relaxed">
                  {primaryHero.description}
                </p>

                <div className="pt-3 flex flex-wrap items-center gap-4 border-t border-[#DEC5A3]/40">
                  <button
                    onClick={() => onSelectCreation(primaryHero)}
                    className="text-xs font-medium tracking-wide text-[#B8442D] hover:text-[#301923] inline-flex items-center gap-1.5 underline underline-offset-4"
                  >
                    <span>Explore details &amp; notes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {onOpenCustomOrder && (
                    <button
                      onClick={() => onOpenCustomOrder(primaryHero)}
                      className="text-xs font-medium tracking-wide text-[#301923] hover:text-[#B8442D] inline-flex items-center gap-1.5 ml-auto"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#B8442D]" />
                      <span>Enquire about similar piece</span>
                    </button>
                  )}
                </div>
              </div>
            </StitchedBorder>
          </div>
        )}

        {/* Supporting Pieces — Detailed Neckline & Border Studies */}
        <div className="lg:col-span-5 space-y-8">
          {supportingPieces.map((piece) => (
            <div
              key={piece.id}
              className="group p-5 rounded-2xl bg-[#F6EFE5]/95 backdrop-blur-xs border border-[#DEC5A3] hover:border-[#DEC5A3]/90 transition-all duration-300 shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                <div
                  className="sm:col-span-5 aspect-square rounded-xl overflow-hidden cursor-pointer bg-[#F6EFE5] p-1"
                  onClick={() => onSelectCreation(piece)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && onSelectCreation(piece)}
                  aria-label={`View details for ${piece.title}`}
                >
                  <EmbroideryImage
                    src={piece.image}
                    alt={piece.alt}
                    fit={piece.objectFit || 'contain'}
                    fallbackTitle={piece.title}
                    fallbackCategory={piece.categoryLabel}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="sm:col-span-7 space-y-2">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#533630]">
                    {piece.categoryLabel}
                  </span>
                  <h4
                    className="font-serif text-xl text-[#301923] hover:text-[#B8442D] cursor-pointer transition-colors leading-snug"
                    onClick={() => onSelectCreation(piece)}
                  >
                    {piece.title}
                  </h4>
                  <p className="text-xs text-[#533630] leading-relaxed line-clamp-2">
                    {piece.description}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => onSelectCreation(piece)}
                      className="text-xs font-medium text-[#B8442D] hover:text-[#301923] inline-flex items-center gap-1 underline underline-offset-4"
                    >
                      <span>View details</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Custom Commission Invitation Banner with Authenticated Terracotta Embroidered Textile Backdrop */}
          <div
            className="p-6 rounded-2xl border border-[#DEC5A3]/60 text-[#F6EFE5] space-y-3 shadow-soft-thread relative overflow-hidden"
            style={{
              backgroundImage: 'linear-gradient(rgba(83, 54, 48, 0.88), rgba(48, 25, 35, 0.92)), url(/images/textures/embroidered-terracotta-fabric.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <span className="text-xs uppercase tracking-widest font-semibold text-[#DEC5A3]">
              Bespoke Studio Work
            </span>
            <h4 className="font-serif text-xl text-[#F6EFE5]">
              Have a favorite garment or neckline idea?
            </h4>
            <p className="text-xs text-[#F6EFE5]/90 leading-relaxed">
              Whether embellishing a custom kurti, bridal placket, or personal border, we would love to collaborate on your embroidery concept.
            </p>
            <a
              href="#custom-order"
              onClick={(e) => {
                if (onOpenCustomOrder) {
                  e.preventDefault();
                  onOpenCustomOrder();
                }
              }}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#DEC5A3] hover:text-white underline underline-offset-4 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B8442D]" />
              <span>Tell us what you would love to have stitched &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );

  if (isContained) {
    return <div className="pb-16" aria-labelledby="featured-heading">{innerContent}</div>;
  }

  return (
    <section className="py-24 bg-transparent border-t border-[#DEC5A3]/40" aria-labelledby="featured-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {innerContent}
      </div>
    </section>
  );
};
