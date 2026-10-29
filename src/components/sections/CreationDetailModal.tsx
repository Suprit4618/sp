import React, { useEffect, useRef, useState } from 'react';
import { X, Sparkles, Scissors } from 'lucide-react';
import type { Creation } from '../../data/creations';
import { EmbroideryImage } from '../ui/EmbroideryImage';

export interface CreationDetailModalProps {
  creation: Creation | null;
  onClose: () => void;
  onEnquire: (creation: Creation) => void;
}

export const CreationDetailModal: React.FC<CreationDetailModalProps> = ({
  creation,
  onClose,
  onEnquire,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close on Escape & trap focus
  useEffect(() => {
    if (!creation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [creation, onClose]);

  if (!creation) return null;

  const currentDisplayImage = selectedImage || creation.image;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#301923]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative bg-[#F6EFE5] rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-[#DEC5A3] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setSelectedImage(null);
            onClose();
          }}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full text-[#301923] hover:bg-[#DEC5A3]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8442D] z-20"
          aria-label="Close creation details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Image Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#F6EFE5] border border-[#DEC5A3]/50 p-2 sm:p-3">
              <EmbroideryImage
                src={currentDisplayImage}
                alt={creation.alt}
                fit={creation.objectFit || 'contain'}
                fallbackTitle={creation.title}
                fallbackCategory={creation.categoryLabel}
              />
            </div>

            {/* Additional Views / Matching Studies Thumbnails */}
            {creation.additionalImages && creation.additionalImages.length > 1 && (
              <div className="flex items-center gap-2 pt-1 overflow-x-auto">
                {creation.additionalImages.map((imgSrc, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(imgSrc)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden bg-[#F6EFE5] border transition-all ${
                      currentDisplayImage === imgSrc
                        ? 'border-[#B8442D] ring-2 ring-[#B8442D]/30'
                        : 'border-[#DEC5A3]/70 opacity-70 hover:opacity-100'
                    }`}
                    aria-label={`View angle ${idx + 1}`}
                  >
                    <img
                      src={imgSrc}
                      alt=""
                      className="w-full h-full object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="md:col-span-6 space-y-5">
            <div>
              <span className="text-xs uppercase font-sans tracking-widest text-[#533630] block">
                {creation.categoryLabel}
              </span>
              <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl text-[#301923] mt-1">
                {creation.title}
              </h3>
            </div>

            {/* Description & Concept Note */}
            <div className="space-y-3">
              <p className="text-sm text-[#533630] leading-relaxed">
                {creation.description}
              </p>
              {creation.conceptNote && (
                <p className="text-xs text-[#533630] italic leading-relaxed bg-[#DEC5A3]/20 p-3 rounded-lg border-l-2 border-[#B8442D]">
                  "{creation.conceptNote}"
                </p>
              )}
            </div>

            {/* Suggested Stitch Techniques */}
            {creation.suggestedTechniques && creation.suggestedTechniques.length > 0 && (
              <div className="space-y-2 pt-2 text-xs">
                <span className="font-semibold text-[#301923] flex items-center gap-1.5">
                  <Scissors className="w-3.5 h-3.5 text-[#B8442D]" />
                  <span>Embroidery Techniques &amp; Placement:</span>
                </span>
                <p className="text-[#533630]">{creation.suggestedTechniques.join(', ')}</p>
              </div>
            )}

            {/* Actions */}
            <div className="pt-4 space-y-2">
              <button
                onClick={() => {
                  setSelectedImage(null);
                  onEnquire(creation);
                  onClose();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium bg-[#B8442D] text-white hover:bg-[#A33B26] shadow-soft-thread transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Enquire About a Piece Like This</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
