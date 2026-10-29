export interface SiteConfig {
  brandName: string;
  tagline: string;
  headline: string;
  subheadline: string;
  instagramUrl: string;
  instagramHandle: string;
  whatsappNumber?: string;
  contactEmail?: string;
  about: {
    sectionEyebrow: string;
    sectionHeading: string;
    storyParagraphs: string[];
    projectImage: string;
    projectImageAlt: string;
    projectCaptionTitle: string;
    projectCaptionSubtitle: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  brandName: 'Pink Lunna',
  tagline: 'Hand-Embroidery & Textile Art',
  headline: 'Little threads. Lovely things.',
  subheadline:
    'Hand embroidery shaped one stitch at a time. Original botanical needlework, custom commissions, and slow handmade pieces.',
  instagramUrl: 'https://www.instagram.com/pink._.lunna/',
  instagramHandle: '@pink._.lunna',
  whatsappNumber: '',
  contactEmail: '',
  about: {
    sectionEyebrow: 'Meet the Artist',
    sectionHeading: 'Hand embroidery and thoughtful garment redesign.',
    storyParagraphs: [
      'Pink Lunna is an independent creative studio dedicated to the art of detailed hand embroidery.',
      'We offer hand embroidery commissions and garment redesigns, transforming cherished textiles such as pre-loved sarees and heritage fabrics into contemporary dresses, kurtis, and wearable bespoke pieces.',
      'Every piece is shaped slowly by hand with quiet attention to thread, color, and lasting craftsmanship.',
    ],
    projectImage: '/images/creations/detail-pink-rose-embroidery.png',
    projectImageAlt: 'Hand-embroidered botanical floral detail in soft rose and sage thread',
    projectCaptionTitle: 'Botanical Needlework',
    projectCaptionSubtitle: 'Hand-stitched detail',
  },
};
