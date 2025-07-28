/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-archivo)'],
            },
            colors: {
                fucsia: '#D91C55',
                purple: '#220E39',
                white: '#FFFFFF',
                orangeRed: '#FE3416',
                tomato: '#FD5C40',
                darkOrange: '#FF8621',
            },
        },
    },
    plugins: [],
}
