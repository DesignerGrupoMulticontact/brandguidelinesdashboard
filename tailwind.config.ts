import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0872B1',
          green: '#6BAE2E',
          dark: '#3F4D58',
          deep: '#426E4E',
          gold: '#D6B66A',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          800: '#1F2937',
          900: '#111827',
        }
      },
      fontFamily: {
        primary: ['var(--font-poppins)', 'sans-serif'],
        secondary: ['var(--font-montserrat)', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.03)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    }
  },
  plugins: [],
}
export default config