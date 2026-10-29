import React from 'react';
import { MessageCircle, Mail, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';
import { InstagramIcon } from '../ui/InstagramIcon';

export interface ContactSectionProps {
  onOpenCustomOrder?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCustomOrder }) => {
  const hasWhatsapp = Boolean(SITE_CONFIG.whatsappNumber && SITE_CONFIG.whatsappNumber.trim());
  const hasEmail = Boolean(SITE_CONFIG.contactEmail && SITE_CONFIG.contactEmail.trim());

  return (
    <section id="contact" className="py-24 bg-transparent border-t border-[#DEC5A3]/40" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B8442D] block">
            Direct Atelier Channels
          </span>
          <h2 id="contact-heading" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#301923]">
            Connect with the Atelier
          </h2>
          <p className="text-sm text-[#533630] leading-relaxed font-sans">
            Whether you have an enquiry about an existing piece, wish to discuss a custom needlework commission, or simply want to say hello.
          </p>
        </div>

        {/* Contact Cards Grid: 2 balanced direct channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Official Instagram Card — Always active & verified */}
          <div className="p-6 rounded-2xl bg-[#F6EFE5]/95 backdrop-blur-xs border border-[#DEC5A3] hover:border-[#B8442D]/50 transition-all duration-300 flex flex-col justify-between space-y-5 shadow-soft-thread">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#DEC5A3]/30 text-[#B8442D] flex items-center justify-center">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#301923]">Instagram</h3>
              <p className="text-xs text-[#533630] leading-relaxed">
                Our active channel for studio updates, work-in-progress hoops, and direct messaging.
              </p>
            </div>
            <div>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-[#B8442D] text-white hover:bg-[#A33B26] transition-colors shadow-soft-thread"
              >
                <span>{SITE_CONFIG.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Direct Atelier Action */}
          <div className="p-6 rounded-2xl bg-[#F6EFE5]/95 backdrop-blur-xs border border-[#DEC5A3] hover:border-[#B8442D]/50 transition-all duration-300 flex flex-col justify-between space-y-5 shadow-soft-thread">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#DEC5A3]/30 text-[#B8442D] flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#B8442D]" />
              </div>
              <h3 className="font-serif text-2xl text-[#301923]">Direct Enquiries</h3>
              <p className="text-xs text-[#533630] leading-relaxed">
                Have a bespoke project, heirloom saree redesign, or custom embroidery enquiry? Get in touch to discuss design concepts, materials, and timelines.
              </p>
            </div>
            <div>
              {hasWhatsapp ? (
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Pink Lunna! I would love to enquire about your hand embroidery.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-[#25D366] text-white hover:opacity-90"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              ) : hasEmail ? (
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-[#301923] text-white hover:bg-[#533630]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send an Email</span>
                </a>
              ) : (
                <a
                  href="#custom-order"
                  onClick={(e) => {
                    if (onOpenCustomOrder) {
                      e.preventDefault();
                      onOpenCustomOrder();
                    }
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-[#DEC5A3]/30 text-[#301923] hover:bg-[#DEC5A3]/60 transition-colors border border-[#DEC5A3]"
                >
                  <Mail className="w-4 h-4 text-[#B8442D]" />
                  <span>Send an Enquiry</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
