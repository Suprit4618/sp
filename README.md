# Pink Lunna — Artisanal Hand Embroidery Studio

> A bespoke digital art experience and commercial portfolio crafted for **Pink Lunna** (`@pink._.lunna`), dedicated to the slow craft of botanical hand embroidery, needlework, and heirloom textile art.

---

## 🌸 Overview

Pink Lunna is designed as a meeting point between traditional hand embroidery and contemporary digital editorial design. It avoids generic AI aesthetics, neon gradients, and cookie-cutter SaaS layouts in favor of tactile linen textures, organic silk thread curves, delicate satin stitches, and an editorial art direction.

---

## 🎨 Design System & Palette

The palette is built around refined textile tones:
* **Porcelain Blush** (`#FFF7F8`): Primary canvas and ground.
* **Ballet Pink** (`#F5DCE5`): Secondary cards and warm surfaces.
* **Rosewater** (`#EAB7CA`): Stitched borders and thread highlights.
* **Raspberry** (`#C83F70`): Primary interactive accents and CTA buttons.
* **Deep Berry** (`#752743`): Headings, needle stems, and rich contrasts.
* **Peach** (`#FFC5A8`): Warm blossom accents.
* **Butter Yellow** (`#F6E6A3`): Daisy cores and stamen details.
* **Soft Sage** (`#A9BBA0`): Embroidered leaves and botanicals.
* **Ink Brown** (`#38272D`): High-contrast readable typography.

### Typography
* **Editorial Headlines**: *Cormorant Garamond* (Serif)
* **Interface & Body**: *DM Sans* (Clean, legible sans-serif)

---

## 🪡 Original SVG Embroidery Motifs & Image Architecture

1. **`HeroComposition`**: 4 deterministic variations for session variety:
   - **Variant A (`vine-pink`)**: Delicate pink botanical vine with blooming satin-stitch flowers and leading needle.
   - **Variant B (`floral-peach-yellow`)**: Peach and buttercup yellow blossoms with sage leaves.
   - **Variant C (`garland-frame`)**: Framing floral garland with crest rose and trailing French knots.
   - **Variant D (`cluster-stitched`)**: Heirloom rose cluster with tactile thread tail and embroidery needle.
2. **`EmbroideryImage`**: Resilient image component with loading skeleton and an accessible, handcrafted wooden hoop fallback if an image path ever fails.
3. **`BotanicalSprig`**: Organic stem with sage leaf pairs and French knot buds, reversible and animated.
4. **`FloralGarland`**: Symmetrical hand-stitched swag framing titles and dividers.
5. **`StitchedBorder`**: Selective decorative embroidery frames with `signature`, `clean`, and `hoop` variants.
6. **`EmbroideryMotif`**: Modular vector motifs (`rose`, `daisy`, `leaf-sprig`, `french-knot`, `feather-stitch`, `needle-eye`, `bud`).
7. **`InteractiveThreadCanvas`**: Lightweight, non-blocking HTML5 canvas drawing an ephemeral silk thread ribbon following cursor or touch, automatically paused when off-screen or when reduced motion is preferred.

---

## 📂 File Architecture

```
d:/sp/
├── public/
│   ├── favicon.svg                  # Bespoke needle & rose favicon
│   └── images/
│       ├── artist/
│       │   └── artist-workspace.svg # Atelier studio illustration
│       └── creations/
│           ├── creation-1.svg       # Wildflower Linen Tote
│           ├── creation-2.svg       # Blush Peony Wall Hoop
│           ├── creation-3.svg       # Celestial Velvet Pouch
│           ├── creation-4.svg       # Buttercup & Sage Collar
│           ├── creation-5.svg       # Rosette Hair Barrette
│           └── creation-6.svg       # Monogram Bookmark
├── src/
│   ├── components/
│   │   ├── artwork/
│   │   │   ├── BotanicalSprig.tsx
│   │   │   ├── EmbroideryMotif.tsx
│   │   │   ├── FloralGarland.tsx
│   │   │   ├── HeroComposition.tsx
│   │   │   ├── InteractiveThreadCanvas.tsx
│   │   │   ├── StitchedBorder.tsx
│   │   │   └── ThreadPath.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   ├── sections/
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── CreationDetailModal.tsx
│   │   │   ├── CustomOrderSection.tsx
│   │   │   ├── FeaturedCreations.tsx
│   │   │   └── GallerySection.tsx
│   │   └── ui/
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       └── InstagramIcon.tsx
│   ├── data/
│   │   ├── creations.ts             # Centralized catalogue manifest
│   │   └── siteConfig.ts            # Brand narrative, contacts, Instagram
│   ├── hooks/
│   │   ├── useMotionPreference.ts   # Accessibility / reduced motion hook
│   │   └── useSessionMotif.ts       # Deterministic session motif selector
│   ├── styles/
│   │   ├── index.css
│   │   └── tokens.css               # Design tokens & stitched borders
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js
└── package.json
```

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```

### Production Build & Verification
```bash
npm run build
npm run preview
```

### Linting
```bash
npm run lint
```

---

## 🛠️ Customization & Owner Guide

### 1. Replacing Placeholder Images
All placeholder illustrations are located in `public/images/creations/` and clearly flagged with `isSamplePlaceholder: true` in `src/data/creations.ts`.
To replace with actual photographs:
1. Save high-resolution photographs to `public/images/creations/my-piece.jpg`.
2. Update the `image` field in `src/data/creations.ts`:
   ```ts
   image: '/images/creations/my-piece.jpg',
   isSamplePlaceholder: false,
   ```

### 2. Adding New Creations
Simply add a new object to the `CREATIONS` array in `src/data/creations.ts`:
```ts
{
  id: 'my-new-piece',
  title: 'Vintage Botanical Handkerchief',
  category: 'accessories',
  categoryLabel: 'Handmade Accessories',
  description: 'Pure handkerchief with corner sprig of lavender.',
  image: '/images/creations/handkerchief.jpg',
  alt: 'Hand-embroidered lavender on white linen handkerchief',
  availability: 'Available',
  technique: 'French Knots & Satin Stitch',
  materials: ['Organic Irish Linen', 'French Cotton Floss'],
  featured: true,
  isSamplePlaceholder: false,
}
```

### 3. Configuring Social & Contact Channels
In `src/data/siteConfig.ts`:
* **Instagram**: Verified link is already set to `https://www.instagram.com/pink._.lunna/`.
* **WhatsApp**: If the artist wants direct WhatsApp messaging, set `whatsappNumber: '1234567890'` (country code + number without plus or spaces). The site automatically generates the button with prefilled enquiry text.
* **Email**: Set `contactEmail: 'hello@pinklunna.com'`.

### 4. Connecting a Real Enquiry Backend
In `src/components/sections/CustomOrderSection.tsx`, locate `handleSubmit`:
Replace the prototype storage handler with your form endpoint (e.g. Formspree, Resend, Supabase, or custom server endpoint):
```ts
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```
