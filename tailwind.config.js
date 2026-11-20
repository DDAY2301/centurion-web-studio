/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // LUMELI design system
        brand: {
          // Warm ivory
          50: '#F8F5EF',
          100: '#F0ECE0',
          200: '#E3D8C3',
          300: '#D5C4A6',
          400: '#C8AFB9',
          500: '#B9A891',
          600: '#A69474',
          700: '#937F57',
          800: '#293B34', // Deep Ink
          900: '#1a1a1a',
        },
        // Soft sage accent
        accent: {
          50: '#f0f8f0',
          100: '#e1f0e1',
          200: '#c3e0c3',
          300: '#a5d0a5',
          400: '#88c088',
          500: '#416B59', // Forest Green
          600: '#3a5e4f',
          700: '#2e4b40',
          800: '#223831',
          900: '#172520',
        },
        // Dusty rose accent
        rose: {
          50: '#fef5f3',
          100: '#fcece8',
          200: '#f9d8d0',
          300: '#f5c4b8',
          400: '#f2b1a0',
          500: '#E9B8B0', // Dusty Rose
          600: '#d29d91',
          700: '#b78579',
          800: '#9c6d61',
          900: '#815650',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'ui-serif', 'Georgia', 'serif'],
      },
      spacing: {
        '4xl': '3rem',
        '5xl': '3.5rem',
        '6xl': '4rem',
      },
    },
  },
  plugins: [],
};