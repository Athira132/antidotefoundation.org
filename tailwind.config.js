/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            50: '#F0F5FA',
            100: '#E1EBF5',
            200: '#C3D7EB',
            300: '#94B8DC',
            400: '#5F93CA',
            500: '#3872B5',
            600: '#265798',
            700: '#1D4379',
            800: '#15325C',
            900: '#0C2340',
            950: '#061324',
          },
          teal: {
            50: '#F0FDFA',
            100: '#CCFBF1',
            200: '#99F6E4',
            300: '#5EEAD4',
            400: '#2DD4BF',
            500: '#14B8A6',
            600: '#0D9488',
            700: '#0F766E',
            800: '#115E59',
            900: '#134E4A',
          },
          cyan: {
            500: '#06B6D4',
            600: '#0891B2',
          },
          gold: {
            400: '#FBBF24',
            500: '#F59E0B',
            600: '#D97706',
          },
          coral: {
            500: '#F43F5E',
            600: '#E11D48',
          }
        }
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(12, 35, 64, 0.05)',
        'elevated': '0 10px 30px -10px rgba(12, 35, 64, 0.12)',
        'glow': '0 0 25px rgba(20, 184, 166, 0.25)',
      }
    },
  },
  plugins: [],
}

