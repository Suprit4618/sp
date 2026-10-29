import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '../../data/siteConfig';

export const AboutSection: React.FC = () => {
  const { about } = SITE_CONFIG;

  return (
    <section
      id="about"
      className="py-20 sm:py-24 bg-[#533630] text-[#F6EFE5] border-t border-[#DEC5A3]/30"
      aria-labelledby="about-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center"
        >
          {/* Small Authentic Needlework Photograph Card */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <div className="w-full max-w-sm rounded-2xl bg-[#F6EFE5] border border-[#DEC5A3] p-3 sm:p-4 shadow-lg">
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-[#F6EFE5] flex items-center justify-center">
                <img
                  src={about.projectImage}
                  alt={about.projectImageAlt}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 px-1 flex flex-col">
                <span className="font-serif text-sm font-semibold text-[#301923]">
                  {about.projectCaptionTitle}
                </span>
                <span className="text-xs text-[#533630] italic">
                  {about.projectCaptionSubtitle}
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Text Column */}
          <div className="md:col-span-7 space-y-5">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#DEC5A3] block">
                {about.sectionEyebrow}
              </span>
              <h2
                id="about-heading"
                className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F6EFE5] leading-tight"
              >
                {about.sectionHeading}
              </h2>
            </div>

            <div className="space-y-3.5 text-sm sm:text-base text-[#F6EFE5]/90 font-sans leading-relaxed">
              {about.storyParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#custom-order"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#DEC5A3] hover:text-white transition-colors group"
              >
                <span>Discuss a custom project or redesign</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
