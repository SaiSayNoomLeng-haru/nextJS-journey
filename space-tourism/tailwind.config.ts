import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       'custom-white': '#ffffff',
       'accent': '#dod6f9',
       'dark': '#obod17'
      },
      fontSize: {
        'fs-900': '9rem',
        'fs-800': '6.25rem',
        'fs-700': '3.5rem',
        'fs-600': '2rem',
        'fs-500': '1.75rem',
        'fs-400': '1.25rem',
        'fs-300': '0.875rem' 
      },
      letterSpacing: {
        '1': '128px',
        '2': '96px',
        '3': '80px',
        '4': '64px',
        '5': '48px'
      },
      fontFamily: {
        barlow: ['var(--font-barlow)', 'sans-serif'],
        bellefair: ['var(--font-bellefair)', 'serif'],
        condensed: ['var(--font-barlow-condensed)', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
