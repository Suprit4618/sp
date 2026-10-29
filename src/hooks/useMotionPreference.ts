import { useEffect, useState } from 'react';

/**
 * Hook to detect and listen for the user's OS-level motion preference.
 * Ensures complete accessibility compliance for animations.
 */
export function useMotionPreference(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else if ('addListener' in mediaQuery) {
      (mediaQuery as any).addListener(handleChange);
      return () => {
        (mediaQuery as any).removeListener(handleChange);
      };
    }
  }, []);

  return prefersReducedMotion;
}
