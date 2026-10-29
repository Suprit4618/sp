import { useState } from 'react';

export type CompositionVariant = 'vine-pink' | 'floral-peach-yellow' | 'garland-frame' | 'cluster-stitched';

const VARIANTS: CompositionVariant[] = [
  'vine-pink',
  'floral-peach-yellow',
  'garland-frame',
  'cluster-stitched',
];

const STORAGE_KEY = 'pink_lunna_session_motif';

function getInitialMotif(overrideVariant?: CompositionVariant): CompositionVariant {
  if (overrideVariant) return overrideVariant;
  if (typeof window === 'undefined') return 'vine-pink';

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY) as CompositionVariant | null;
    if (stored && VARIANTS.includes(stored)) {
      return stored;
    }
    const randomIndex = Math.floor(Math.random() * VARIANTS.length);
    const selected = VARIANTS[randomIndex];
    sessionStorage.setItem(STORAGE_KEY, selected);
    return selected;
  } catch {
    return 'vine-pink';
  }
}

/**
 * Deterministically selects a motif composition variant for the current session.
 * Does not re-randomize on re-renders, scrolling, or page transitions.
 * Fallbacks gracefully if sessionStorage is inaccessible.
 */
export function useSessionMotif(overrideVariant?: CompositionVariant): CompositionVariant {
  const [variant] = useState<CompositionVariant>(() => getInitialMotif(overrideVariant));
  return variant;
}
