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
                'gdsc-grey-light': '#F4F4F4',
                'gdsc-purple-light': '#E9D1FE',
                'gdsc-green': '#3CAB5A',
                'gdsc-green-light': '#E8F5E9',
                'gdsc-yellow': '#FBBF0E',
                'gdsc-yellow-light': '#FFF8E1',
                'gdsc-red': '#EB4A3D',
                'gdsc-red-light': '#FFEBEE',
                'gdsc-blue-light': '#75A5F7',
                'gdsc-blue-lighter': '#E3F2FD',
            }
        },
    },
    plugins: [],
};
