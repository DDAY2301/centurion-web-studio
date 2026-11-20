/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium dark charcoal design system
        brand: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadfe1',
          400: '#ccd0d4',
          500: '#b1b4b8',
          600: '#8a8d91',
          700: '#5f6368',
          800: '#202124',
          900: '#1a1a1a',
        },
        // Accent colors - sophisticated teal
        accent: {
          50: '#e8f5f0',
          100: '#d0ebd8',
          200: '#a2d5b9',
          300: '#74c098',
          400: '#51cf66',
          500: '#34d859',
          600: '#28a745',
          700: '#21863a',
          800: '#1e7e34',
          900: '#1a5e2e',
        },
        // Trust blue
        trust: {
          50: '#e6f0ff',
          100: '#cce5ff',
          200: '#99ccff',
          300: '#66b2ff',
          400: '#3399ff',
          500: '#007bff',
          600: '#0062cc',
          700: '#004999',
          800: '#003066',
          900: '#001733',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-inter)', 'serif'],
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