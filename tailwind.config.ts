import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A1931',
          50: '#EAEEF5',
          100: '#CBD5E5',
          200: '#9AACC7',
          300: '#6982A9',
          400: '#3D5A87',
          500: '#0A1931',
          600: '#081527',
          700: '#06101D',
          800: '#040B14',
          900: '#02050A',
        },
        gold: {
          DEFAULT: '#C9A227',
          50: '#FBF6E7',
          100: '#F3E4B4',
          200: '#EAD182',
          300: '#E0BE4F',
          400: '#D5AD3B',
          500: '#C9A227',
          600: '#A3831E',
          700: '#7C6417',
          800: '#554510',
          900: '#2E2508',
        },
        accent: '#F5F5F5',
        paper: '#FFFFFF',
        ink: '#08111F',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1360px',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E0BE4F 0%, #C9A227 50%, #9A7B1D 100%)',
        'ink-gradient': 'linear-gradient(180deg, #0A1931 0%, #08111F 100%)',
      },
      boxShadow: {
        gold: '0 8px 30px -10px rgba(201, 162, 39, 0.35)',
        deep: '0 30px 60px -20px rgba(8, 17, 31, 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
