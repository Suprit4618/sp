import React from 'react';
import { Sparkles, MessageSquareHeart, Palette, Scissors, PackageCheck, ArrowRight } from 'lucide-react';

export interface AtelierProcessSectionProps {
  onOpenCustomOrder?: () => void;
}

export const AtelierProcessSection: React.FC<AtelierProcessSectionProps> = ({ onOpenCustomOrder }) => {
  const steps = [
    {
      number: '01',
      title: 'Consultation & Silhouette',
      description:
        'Share your garment idea, personal neckline preferences, or heirloom textiles (such as a pre-loved saree) you wish to redesign into a contemporary wearable piece.',
      tag: 'Concept & Fabric',
      icon: MessageSquareHeart,
    },
    {
      number: '02',
      title: 'Design Trace & Palette',
      description:
        'We draft the botanical embroidery motifs to scale and select your custom silk, zari, or cotton thread palette to harmoniously complement the fabric ground.',
      tag: 'Swatches & Sketch',
      icon: Palette,
    },
    {
      number: '03',
      title: 'Slow Hand Needlework',
      description:
        'Every petal, vine, and border is stitched slowly by hand using traditional needlework techniques — stem stitches, satin embroidery, and delicate French knots.',
      tag: 'Crafted One Stitch at a Time',
      icon: Scissors,
    },
    {
      number: '04',
      title: 'Finishing & Atelier Delivery',
      description:
        'Your finished piece is carefully hand-pressed, inspected for seam longevity, wrapped in artisan linen packaging, and safely delivered to your doorstep.',
      tag: 'Worldwide Delivery',
      icon: PackageCheck,
    },
  ];

  return (
    <section
      id="process"
      className="py-20 sm:py-24 bg-transparent border-t border-[#DEC5A3]/40 relative"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B8442D] block">
            Bespoke Commission Journey
          </span>
          <h2 id="process-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#301923]">
            How a Custom Piece Comes to Life
          </h2>
          <p className="text-sm text-[#533630] leading-relaxed font-sans">
            From initial design inspiration to the final hand-stitched knot, every custom commission is shaped through a slow, collaborative craft process.
          </p>
        </div>

        {/* 4-Step Process Grid with Connecting Stitched Accents */}
        <div className="relative">
          {/* Subtle Tailor Running-Stitch Connecting Line on Large Screens */}
          <div
            className="hidden lg:block absolute top-12 left-16 right-16 h-px border-t border-dashed border-[#DEC5A3] pointer-events-none z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-[#F6EFE5]/95 backdrop-blur-xs border border-[#DEC5A3] hover:border-[#B8442D]/50 transition-all duration-300 shadow-soft-thread flex flex-col justify-between"
                >
                  <div>
                    {/* Step Header with Step Number and Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-serif text-2xl font-semibold text-[#B8442D]">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-[#DEC5A3]/30 border border-[#DEC5A3]/60 flex items-center justify-center text-[#B8442D] group-hover:bg-[#B8442D] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <h3 className="font-serif text-xl sm:text-2xl text-[#301923] mb-3 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#533630] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Sub-tag */}
                  <div className="pt-6 mt-6 border-t border-[#DEC5A3]/40 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-sans tracking-widest text-[#533630] font-medium">
                      {step.tag}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8442D]/40 group-hover:bg-[#B8442D] transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Call to Action Prompt */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() => onOpenCustomOrder?.()}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#B8442D] text-white hover:bg-[#A33B26] shadow-soft-thread transition-all duration-200 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8442D]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Begin Your Custom Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
