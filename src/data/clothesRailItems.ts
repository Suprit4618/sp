import type { RailGarment } from '@/components/ui/product-rail-gallery';

/**
 * Curated South Indian clothing items for the interactive clothing rail.
 * Uses individual cleaned and properly cropped images from public/images/clothes/.
 * 09_emerald_floral_kurti is strictly excluded.
 * All items reference their own authentic photography with zero intruder crops.
 * Visual concept and design inspiration tags have been removed so clothes remain clean.
 */
export const CLOTHES_RAIL_ITEMS: RailGarment[] = [
  {
    id: 'rose-saree-blouse',
    name: 'Rose Saree with Embroidered Blouse',
    description: 'Traditional rose drape paired with hand-embroidered floral borderwork and zari accents.',
    details: ['South Indian drape', 'Floral embroidery', 'Artisanal border'],
    image: '/images/clothes/06_rose_saree_embroidered_blouse.jpg',
  },
  {
    id: 'cream-floral-kurti',
    name: 'Cream Floral Kurti Ensemble',
    description: 'Contemporary kurti silhouette highlighting delicate botanical sprigs and tonal borderwork.',
    details: ['Kurti silhouette', 'Botanical sprigs', 'Tonal borders'],
    image: '/images/clothes/07_cream_floral_kurti.jpg',
  },
  {
    id: 'purple-zari-saree',
    name: 'Royal Purple Zari Saree',
    description: 'Rich jewel-toned purple textile study with contrasting golden zari needlework borders.',
    details: ['Royal purple silk', 'Zari needlework', 'Border composition'],
    image: '/images/clothes/08_purple_zari_saree.jpg',
  },
  {
    id: 'cream-gold-saree',
    name: 'Cream & Gold Festive Saree',
    description: 'Classic South Indian festive ensemble combining warm cream silk with ornate gold zari embroidery.',
    details: ['Festive ensemble', 'Gilded needlework', 'Classic gold zari'],
    image: '/images/clothes/10_cream_gold_blouse_saree.jpg',
  },
  {
    id: 'emerald-zari-blouse',
    name: 'Emerald Zari Silk Ensemble',
    description: 'Study of an emerald silk blouse and drape featuring dense golden metallic embroidery along the neckline and borders.',
    details: ['Emerald silk drape', 'Zari embroidery', 'Blouse neckline'],
    image: '/images/clothes/01_emerald_zari_blouse.jpg',
  },
  {
    id: 'cream-floral-motif',
    name: 'Cream Floral Saree Ensemble',
    description: 'Textile study of delicate botanical vine work and floral sprigs draped along warm cream silk.',
    details: ['Botanical vine study', 'Silk drape', 'Floral sprigs'],
    image: '/images/clothes/02_cream_floral_saree.jpg',
  },
  {
    id: 'ruby-blouse-saree',
    name: 'Ruby Blouse & Saree Ensemble',
    description: 'Festive crimson study with delicate potli buttons and linear gold-embroidered plackets.',
    details: ['Festive crimson', 'Button placket', 'Linear embroidery'],
    image: '/images/clothes/03_ruby_blouse_and_saree.jpg',
  },
  {
    id: 'mustard-anarkali',
    name: 'Mustard Embroidered Anarkali',
    description: 'Warm mustard silhouette study with intricate floral needlework across the yoke and borders.',
    details: ['Anarkali silhouette', 'Yoke needlework', 'Floral accents'],
    image: '/images/clothes/04_mustard_embroidered_anarkali.jpg',
  },
  {
    id: 'teal-floral-border',
    name: 'Teal Silk Saree & Floral Border',
    description: 'Deep teal silk drape study with contrasting chain stitch and multicolored botanical vines.',
    details: ['Teal silk drape', 'Border needlework', 'Floral chain stitches'],
    image: '/images/clothes/05_teal_saree_floral_border.jpg',
  },
];
