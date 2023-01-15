const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Google Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gdsc: {
          grey: {
            light: '#F4F4F4',
          },
          green: {
            light: '#E8F5E9',
            DEFAULT: '#3CAB5A',
          },
          yellow: {
            light: '#FFF8E1',
            DEFAULT: '#FBBF0E',
          },
          blue: {
            light: '#75A5F7',
            lighter: '#E3F2FD',
            DEFAULT: '#EB4A3D',
          },
          red: {
            light: '#FFEBEE',
            DEFAULT: '#EB4A3D',
          },
          purple: {
            light: '#E9D1FE',
          },
        },
      },
    },
  },
  plugins: [],
};
