/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#031B33',
          DEFAULT: '#062B4F',
        },
        pool: {
          DEFAULT: '#0EA5E9',
          light: '#38BDF8',
        },
        safety: {
          DEFAULT: '#DC2626',
          dark: '#B91C1C',
        },
        surface: '#F8FAFC',
        ink: '#0F172A',
      },
      fontFamily: {
        display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 18px 60px rgba(14, 165, 233, 0.18)',
      },
    },
  },
  plugins: [],
};
