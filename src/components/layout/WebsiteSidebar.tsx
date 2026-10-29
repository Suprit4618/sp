import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';
import { InstagramIcon } from '../ui/InstagramIcon';

export type ShowcaseMode = 'embroidery' | 'clothes';

export interface WebsiteSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  showcaseMode: ShowcaseMode;
  onSelectShowcaseMode: (mode: ShowcaseMode) => void;
  onOpenCustomOrder?: () => void;
  activeSection?: string;
  onNavigateSection?: (sectionId: string, mode?: ShowcaseMode) => void;
}

export const WebsiteSidebar: React.FC<WebsiteSidebarProps> = ({
  isOpen,
  onClose,
  showcaseMode,
  onSelectShowcaseMode,
  onOpenCustomOrder,
  activeSection = 'home',
  onNavigateSection,
}) => {
  // Close sidebar on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleNavigate = (hash: string, sectionId: string, targetMode?: ShowcaseMode) => {
    if (targetMode) {
      onSelectShowcaseMode(targetMode);
    }
    if (onNavigateSection) {
      onNavigateSection(sectionId, targetMode);
    }
    onClose();

    // Smooth scroll to anchor after sidebar begins closing
    setTimeout(() => {
      const targetEl = document.querySelector(hash);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 120);
  };

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      hash: '#hero',
    },
    {
      id: 'creations',
      label: 'Embroidery',
      hash: '#creations',
      mode: 'embroidery' as ShowcaseMode,
    },
    {
      id: 'creations',
      label: 'Clothing',
      hash: '#creations',
      mode: 'clothes' as ShowcaseMode,
    },
    {
      id: 'about',
      label: 'About',
      hash: '#about',
    },
    {
      id: 'process',
      label: 'Process',
      hash: '#process',
    },
    {
      id: 'custom-order',
      label: 'Custom Orders',
      hash: '#custom-order',
    },
    {
      id: 'contact',
      label: 'Contact',
      hash: '#contact',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Navigation Menu">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#301923]/50 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Sidebar Drawer Container */}
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed inset-y-0 left-0 w-full max-w-xs sm:max-w-sm bg-[#F6EFE5] text-[#301923] shadow-2xl border-r border-[#DEC5A3]/60 flex flex-col z-50 overflow-y-auto"
          >
            {/* Sidebar Header */}
            <div className="p-6 border-b border-[#DEC5A3]/40 bg-[#F6EFE5] flex items-center justify-between sticky top-0 z-10">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate('#hero', 'home');
                }}
                className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8442D] rounded-sm"
              >
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="shrink-0 transition-transform group-hover:rotate-12 duration-300">
                  <line x1="6" y1="26" x2="24" y2="8" stroke="#301923" strokeWidth="2" strokeLinecap="round" />
                  <ellipse cx="23" cy="9" rx="1.5" ry="3" transform="rotate(-45 23 9)" fill="#F6EFE5" stroke="#301923" strokeWidth="1" />
                  <path d="M24 8 C28 4, 31 12, 27 16 C23 20, 25 28, 30 26" stroke="#B8442D" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-semibold tracking-wide text-[#301923]">
                    Pink Lunna
                  </span>
                  <span className="text-[10px] uppercase font-sans tracking-widest text-[#533630]">
                    Hand Embroidery
                  </span>
                </div>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full text-[#533630] hover:text-[#B8442D] hover:bg-[#DEC5A3]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8442D]"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sidebar Navigation Body */}
            <div className="flex-1 p-6 space-y-2">
              <nav className="space-y-1" aria-label="Navigation">
                {navItems.map((item, index) => {
                  const isModeActive =
                    item.mode
                      ? activeSection === 'creations' && showcaseMode === item.mode
                      : activeSection === item.id;

                  return (
                    <button
                      key={`${item.id}-${item.mode || index}`}
                      type="button"
                      onClick={() => handleNavigate(item.hash, item.id, item.mode)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between font-serif text-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8442D] ${
                        isModeActive
                          ? 'bg-[#DEC5A3]/35 border border-[#DEC5A3] shadow-soft-thread text-[#B8442D] font-semibold'
                          : 'hover:bg-[#DEC5A3]/20 text-[#533630] hover:text-[#B8442D] border border-transparent'
                      }`}
                    >
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Sidebar Footer CTA & Social */}
            <div className="p-6 border-t border-[#DEC5A3]/40 bg-[#F6EFE5] space-y-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    onOpenCustomOrder?.();
                  }, 120);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#B8442D] text-white hover:bg-[#A33B26] shadow-soft-thread transition-all duration-200 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8442D]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Discuss a Commission</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center justify-center gap-2 pt-1 text-xs text-[#533630]">
                <InstagramIcon className="w-3.5 h-3.5 text-[#B8442D]" />
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B8442D] font-medium transition-colors"
                >
                  {SITE_CONFIG.instagramHandle}
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
};
