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
            DEFAULT: '#EEF7FE',
            dark: '#364656',
          },
          green: {
            light: '#E8F5E9',
            DEFAULT: '#C8E6C9',
            dark: '#3CAB5A',
          },
          yellow: {
            light: '#FFF8E1',
            DEFAULT: '#FBBF0E',
          },
          blue: {
            light: '#E3F2FD',
            DEFAULT: '#42A5F5',
            dark: '#498AF4',
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
      screens: {
        md: '875px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
