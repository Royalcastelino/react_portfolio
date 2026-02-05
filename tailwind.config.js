/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                turquoise: {
                    DEFAULT: '#40e0d0',
                    light: '#70f0e0',
                    dark: '#30c0b0',
                },
                dark: {
                    DEFAULT: '#0a0a0a',
                    lighter: '#1a1a1a',
                    glass: 'rgba(10, 10, 10, 0.7)',
                }
            },
            backdropBlur: {
                xs: '2px',
            },
            boxShadow: {
                'turquoise-glow': '0 0 20px rgba(64, 224, 208, 0.4)',
                'turquoise-glow-strong': '0 0 35px rgba(64, 224, 208, 0.7)',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}
