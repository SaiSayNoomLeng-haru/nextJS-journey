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
        'custom-black-100' : '#252525',
        'custom-orange': '#ff8c38',
        'custom-black-900': '#161616',
        'custom-white': '#fff7ed',
        'custom-gray': '#aaaaaa',
        'custom-pale': '#ffead0',
        'simple': '#e17654',
        'rugged': '#115e59',
        'luxury': '#161616',
      },
      fontFamily: {
        'inter': ['var(--font-inter)']
      },
      fontSize: {
        'fs-900': '2.5rem',
        'fs-800' : '2rem',
        'fs-700': '1.584rem',
        'fs-600' : '1.25rem',
        'fs-400': '1rem',
        'fs-300': '0.6rem'
      },
      screens: {
        'md': '35em',
        'lg': '45em'
      }
    },
  },
  plugins: [],
} satisfies Config;
