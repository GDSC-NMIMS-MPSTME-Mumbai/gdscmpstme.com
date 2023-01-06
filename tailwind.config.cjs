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
                    'grey-light': '#F4F4F4',
                    'purple-light': '#E9D1FE',
                    'green': '#3CAB5A',
                    'green-light': '#E8F5E9',
                    'yellow': '#FBBF0E',
                    'yellow-light': '#FFF8E1',
                    'red': '#EB4A3D',
                    'red-light': '#FFEBEE',
                    'blue-light': '#75A5F7',
                    'blue-lighter': '#E3F2FD',
                }
            }
        },
    },
    plugins: [],
};
