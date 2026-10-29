import React, { useState, useEffect } from 'react';
import { Menu, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';
import type { ShowcaseMode } from './WebsiteSidebar';

export interface NavbarProps {
  onOpenSidebar: () => void;
  onOpenCustomOrder?: () => void;
  onSelectShowcaseMode?: (mode: ShowcaseMode) => void;
  showcaseMode?: ShowcaseMode;
  activeSection?: string;
  onNavigateSection?: (sectionId: string, mode?: ShowcaseMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSidebar,
  onOpenCustomOrder,
  onSelectShowcaseMode,
  showcaseMode = 'embroidery',
  activeSection = 'home',
  onNavigateSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const next = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== next ? next : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string, sectionId: string, mode?: ShowcaseMode) => {
    if (mode && onSelectShowcaseMode) {
      onSelectShowcaseMode(mode);
    }
    if (onNavigateSection) {
      onNavigateSection(sectionId, mode);
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transform-gpu transition-colors duration-200 ${
        isScrolled
          ? 'bg-[#F6EFE5]/95 backdrop-blur-md border-b border-[#DEC5A3]/60 py-3 shadow-soft-thread'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Section: Single Menu Button aligned to Left Top Corner & Brand Wordmark */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onOpenSidebar}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-serif font-medium text-[#301923] hover:text-[#B8442D] bg-[#DEC5A3]/25 hover:bg-[#DEC5A3]/45 border border-[#DEC5A3] hover:border-[#B8442D]/50 transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8442D] shrink-0"
            aria-label="Open Sidebar Menu"
            title="Open website sidebar menu"
          >
            <Menu className="w-4 h-4 text-[#B8442D]" />
            <span className="text-xs font-serif font-medium tracking-wide">Menu</span>
          </button>

          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero', 'home');
            }}
            className="group flex items-center gap-2.5 text-[#301923] hover:text-[#B8442D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8442D] rounded-sm"
            aria-label="Pink Lunna Home"
          >
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="shrink-0 transition-transform group-hover:rotate-12 duration-300">
              <line x1="6" y1="26" x2="24" y2="8" stroke="#301923" strokeWidth="2" strokeLinecap="round" />
              <ellipse cx="23" cy="9" rx="1.5" ry="3" transform="rotate(-45 23 9)" fill="#F6EFE5" stroke="#301923" strokeWidth="1" />
              <path d="M24 8 C28 4, 31 12, 27 16 C23 20, 25 28, 30 26" stroke="#B8442D" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            </svg>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-semibold tracking-wide leading-none">
                Pink Lunna
              </span>
              <span className="text-[10px] uppercase font-sans tracking-widest text-[#533630] mt-0.5">
                Hand Embroidery
              </span>
            </div>
          </a>
        </div>

        {/* Center: Desktop Navigation Links with Active Scroll Indicator */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6" aria-label="Main Navigation">
          <button
            type="button"
            onClick={() => handleLinkClick('#hero', 'home')}
            className={`text-sm font-medium transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B8442D] rounded border-b-2 ${
              activeSection === 'home'
                ? 'text-[#B8442D] font-semibold border-[#B8442D]'
                : 'text-[#533630] hover:text-[#B8442D] border-transparent'
            }`}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('#creations', 'creations', 'embroidery')}
            className={`text-sm font-medium transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B8442D] rounded border-b-2 ${
              activeSection === 'creations' && showcaseMode === 'embroidery'
                ? 'text-[#B8442D] font-semibold border-[#B8442D]'
                : 'text-[#533630] hover:text-[#B8442D] border-transparent'
            }`}
          >
            Embroidery
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('#creations', 'creations', 'clothes')}
            className={`text-sm font-medium transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B8442D] rounded border-b-2 ${
              activeSection === 'creations' && showcaseMode === 'clothes'
                ? 'text-[#B8442D] font-semibold border-[#B8442D]'
                : 'text-[#533630] hover:text-[#B8442D] border-transparent'
            }`}
          >
            Clothing
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('#about', 'about')}
            className={`text-sm font-medium transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B8442D] rounded border-b-2 ${
              activeSection === 'about'
                ? 'text-[#B8442D] font-semibold border-[#B8442D]'
                : 'text-[#533630] hover:text-[#B8442D] border-transparent'
            }`}
          >
            About
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('#process', 'process')}
            className={`text-sm font-medium transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B8442D] rounded border-b-2 ${
              activeSection === 'process'
                ? 'text-[#B8442D] font-semibold border-[#B8442D]'
                : 'text-[#533630] hover:text-[#B8442D] border-transparent'
            }`}
          >
            Process
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('#custom-order', 'custom-order')}
            className={`text-sm font-medium transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B8442D] rounded border-b-2 ${
              activeSection === 'custom-order'
                ? 'text-[#B8442D] font-semibold border-[#B8442D]'
                : 'text-[#533630] hover:text-[#B8442D] border-transparent'
            }`}
          >
            Custom Orders
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('#contact', 'contact')}
            className={`text-sm font-medium transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B8442D] rounded border-b-2 ${
              activeSection === 'contact'
                ? 'text-[#B8442D] font-semibold border-[#B8442D]'
                : 'text-[#533630] hover:text-[#B8442D] border-transparent'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right Section: Social & Enquiry Action */}
        <div className="flex items-center gap-3">
          <a
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-xs text-[#533630] hover:text-[#B8442D] font-medium transition-colors"
            title="Follow Pink Lunna on Instagram"
          >
            {SITE_CONFIG.instagramHandle}
          </a>
          <button
            type="button"
            onClick={() => onOpenCustomOrder?.()}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium tracking-wide bg-[#B8442D] text-white hover:bg-[#A33B26] transition-all shadow-soft-thread hover:-translate-y-px"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Request a Piece</span>
          </button>
        </div>
      </div>
    </header>
  );
};
