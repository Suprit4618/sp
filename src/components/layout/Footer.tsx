import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';
import { BotanicalSprig } from '../artwork/BotanicalSprig';
import { InstagramIcon } from '../ui/InstagramIcon';

const CURRENT_YEAR = 2026;

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#301923] text-[#F6EFE5] border-t border-[#DEC5A3]/25 pt-16 pb-12 overflow-hidden">
      {/* Decorative botanical sprig centered top */}
      <div className="flex justify-center -mt-20 mb-8 pointer-events-none">
        <BotanicalSprig width={180} height={45} color="#B8442D" leafColor="#DEC5A3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#DEC5A3]/20">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-3xl font-semibold text-[#DEC5A3] tracking-wide block">
              {SITE_CONFIG.brandName}
            </span>
            <p className="font-serif italic text-lg text-[#DEC5A3]/90">
              "{SITE_CONFIG.headline}"
            </p>
            <p className="text-sm text-[#F6EFE5]/80 max-w-sm leading-relaxed">
              Handcrafted embroidery born from patience, natural linen, and silk thread. Each piece is an intimate celebration of needlework art.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#DEC5A3]">
              Atelier
            </h4>
            <ul className="space-y-2 text-sm text-[#F6EFE5]/80">
              <li>
                <a href="#hero" className="hover:text-[#B8442D] transition-colors">Home</a>
              </li>
              <li>
                <a href="#creations" className="hover:text-[#B8442D] transition-colors">Creations Gallery</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#B8442D] transition-colors">About the Artist</a>
              </li>
              <li>
                <a href="#custom-order" className="hover:text-[#B8442D] transition-colors">Custom Orders</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#B8442D] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Community & Connection */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#DEC5A3]">
              Follow the Thread
            </h4>
            <p className="text-sm text-[#F6EFE5]/80 leading-relaxed">
              Explore behind-the-scenes sketches, work-in-progress hoops, and stitch studies on our official Instagram.
            </p>
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-[#DEC5A3]/15 text-[#DEC5A3] hover:bg-[#DEC5A3]/25 hover:text-white transition-colors border border-[#DEC5A3]/40"
            >
              <InstagramIcon className="w-4 h-4 text-[#B8442D]" />
              <span>{SITE_CONFIG.instagramHandle}</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F6EFE5]/60">
          <p>
            &copy; {CURRENT_YEAR} {SITE_CONFIG.brandName}. Handcrafted with love. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="italic text-[#DEC5A3]/80">Every stitch has a story</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-[#DEC5A3]/40 text-[#DEC5A3] hover:bg-[#DEC5A3]/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8442D]"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
