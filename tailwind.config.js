module.exports = {
    content: ["./index.html", "./main.js", "./src/**/*.njk", "./src/**/*.html"],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            /* Background */
            colors: {
                "light-primary": "#F5F5F5",
                "light-secondary": "#FFFFFF",
                "dark-primary": "#232325",
                "dark-secondary": "#262D3D",
                "dark-tertiary": "#3A445C",
                "dsev": "#993434"            },
            /* Extra fonts */
            fontFamily: {
                montserrat: ["Montserrat", '"-apple-system"', "BlinkMacSystemFont",  'system-ui'],
            },
        },
    },
    variants: {
        extend: {
            display: ['dark']
        },
    plugins: [
        require('tailwindcss-intersect')
    ],
    },
}