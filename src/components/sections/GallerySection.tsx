import React, { useState } from 'react';
import { Eye, Filter } from 'lucide-react';
import { CREATIONS, CATEGORIES, type Creation } from '../../data/creations';
import { EmbroideryImage } from '../ui/EmbroideryImage';

export interface GallerySectionProps {
  onSelectCreation: (creation: Creation) => void;
  onOpenCustomOrder?: () => void;
  isContained?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onSelectCreation,
  onOpenCustomOrder,
  isContained = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCreations = CREATIONS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const innerContent = (
    <>
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 id="gallery-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#301923]">
          Gallery
        </h2>
      </div>

      {/* Category Filters */}
      <div
        className="flex flex-wrap items-center justify-center gap-2 mb-12"
        role="tablist"
        aria-label="Creation categories"
      >
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8442D] ${
                isActive
                  ? 'bg-[#B8442D] text-white shadow-soft-thread'
                  : 'bg-[#DEC5A3]/25 text-[#533630] border border-[#DEC5A3] hover:bg-[#DEC5A3]/45'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Creations Grid */}
      {filteredCreations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCreations.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between rounded-2xl bg-[#F6EFE5] border border-[#DEC5A3] hover:border-[#DEC5A3]/90 hover:shadow-soft-thread transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* Fixed aspect ratio container preventing CLS */}
                <div
                  className="relative aspect-[4/5] overflow-hidden cursor-pointer bg-[#F6EFE5] p-2"
                  onClick={() => onSelectCreation(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && onSelectCreation(item)}
                  aria-label={`View details for ${item.title}`}
                >
                  <EmbroideryImage
                    src={item.image}
                    alt={item.alt}
                    fit={item.objectFit || 'contain'}
                    fallbackTitle={item.title}
                    fallbackCategory={item.categoryLabel}
                    className="transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#301923]/35 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-[#F6EFE5] text-xs font-medium text-[#301923] border border-[#DEC5A3] shadow-md flex items-center gap-1.5 backdrop-blur-sm">
                      <Eye className="w-3.5 h-3.5 text-[#B8442D]" />
                      <span>View Details</span>
                    </span>
                  </div>
                </div>

                {/* Metadata */}
                <div className="p-5 space-y-2">
                  <span className="text-[10px] uppercase font-sans tracking-widest text-[#533630] block">
                    {item.categoryLabel}
                  </span>

                  <h3
                    className="font-serif text-xl text-[#301923] hover:text-[#B8442D] cursor-pointer transition-colors leading-snug"
                    onClick={() => onSelectCreation(item)}
                  >
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="text-xs text-[#533630] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-[#DEC5A3]/30 flex items-center justify-between text-xs">
                <button
                  onClick={() => onSelectCreation(item)}
                  className="font-medium text-[#B8442D] hover:text-[#301923] underline underline-offset-4 flex items-center gap-1"
                >
                  <span>Inspect details</span>
                </button>

                {item.suggestedTechniques && item.suggestedTechniques.length > 0 && (
                  <span className="text-[10px] text-[#533630] italic">
                    {item.suggestedTechniques[0]}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 bg-[#DEC5A3]/15 rounded-2xl border border-dashed border-[#DEC5A3] max-w-md mx-auto p-8 space-y-4">
          <Filter className="w-8 h-8 text-[#DEC5A3] mx-auto" />
          <h3 className="font-serif text-xl text-[#301923]">No creations in this category yet</h3>
          <p className="text-xs text-[#533630] leading-relaxed">
            New studies and design concepts are updated regularly. You can also enquire about a custom commission in this style.
          </p>
          <button
            onClick={() => setSelectedCategory('all')}
            className="px-4 py-2 rounded-full text-xs font-medium bg-[#DEC5A3]/30 text-[#301923] hover:bg-[#DEC5A3]/60"
          >
            Show all creations
          </button>
        </div>
      )}

      {/* Bottom Commission Prompt */}
      <div className="mt-16 text-center">
        <p className="text-xs text-[#533630] italic mb-3">
          Interested in having a custom design or personalized neckline embroidered?
        </p>
        <a
          href="#custom-order"
          onClick={(e) => {
            if (onOpenCustomOrder) {
              e.preventDefault();
              onOpenCustomOrder();
            }
          }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium tracking-wide bg-[#DEC5A3]/30 text-[#301923] hover:bg-[#DEC5A3]/60 border border-[#DEC5A3] transition-colors"
        >
          <span>Enquire about a custom commission &rarr;</span>
        </a>
      </div>
    </>
  );

  if (isContained) {
    return <div className="pt-4" aria-labelledby="gallery-heading">{innerContent}</div>;
  }

  return (
    <section id="creations" className="py-24 bg-[#F6EFE5]" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {innerContent}
      </div>
    </section>
  );
};
