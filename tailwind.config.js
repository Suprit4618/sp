/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'muted-foreground': 'var(--muted-foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        ring: 'var(--ring)',

        // Pink Lunna Fashion Atelier Palette
        'deep-plum': {
          DEFAULT: '#301923',
          light: '#422431',
          dark: '#221118',
        },
        chocolate: {
          DEFAULT: '#533630',
          light: '#6E4E47',
          dark: '#3E2722',
        },
        'burnt-orange': {
          DEFAULT: '#B8442D',
          hover: '#A33B26',
          light: '#CF5942',
          dark: '#933522',
        },
        'warm-beige': {
          DEFAULT: '#DEC5A3',
          light: '#EAD8C1',
          dark: '#C8A87F',
        },
        'soft-cream': {
          DEFAULT: '#F6EFE5',
          light: '#FCF8F2',
          dark: '#EBE2D4',
        },

        // Legacy palette aliases mapped to new palette for backward compatibility
        porcelain: {
          DEFAULT: '#F6EFE5',
          50: '#FCF8F2',
          100: '#F6EFE5',
          200: '#EBE2D4',
          300: '#DEC5A3',
        },
        ballet: {
          DEFAULT: '#DEC5A3',
          light: '#EAD8C1',
          dark: '#C8A87F',
        },
        rosewater: {
          DEFAULT: '#DEC5A3',
          light: '#EAD8C1',
          dark: '#C8A87F',
        },
        raspberry: {
          DEFAULT: '#B8442D',
          hover: '#A33B26',
          light: '#CF5942',
          dark: '#933522',
        },
        berry: {
          DEFAULT: '#301923',
          light: '#533630',
          dark: '#221118',
        },
        peach: {
          DEFAULT: '#DEC5A3',
          light: '#EAD8C1',
          dark: '#C8A87F',
        },
        butter: {
          DEFAULT: '#DEC5A3',
          light: '#EAD8C1',
          dark: '#C8A87F',
        },
        sage: {
          DEFAULT: '#533630',
          light: '#6E4E47',
          dark: '#3E2722',
        },
        ink: {
          DEFAULT: '#301923',
          muted: '#533630',
          faint: '#7D5D55',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-thread': '0 4px 20px -2px rgba(83, 54, 48, 0.08), 0 2px 6px -1px rgba(48, 25, 35, 0.04)',
        'embroidery': '0 10px 30px -4px rgba(184, 68, 45, 0.12), 0 4px 12px -2px rgba(48, 25, 35, 0.05)',
      },
      letterSpacing: {
        'embroidery': '0.15em',
        'loose-serif': '0.04em',
      },
    },
  },
  plugins: [],
}
