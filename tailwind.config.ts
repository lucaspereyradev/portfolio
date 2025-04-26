import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            xs: '400px',
            sm: '876px',
            md: '1024px',
            lg: '1270px',
            xl: '1440px',
        },
        container: {
            center: true,
            screens: {
                xs: '100%',
                sm: '600px',
                md: '720px',
                lg: '900px',
                xl: '900px',
            },
        },
        extend: {
            colors: {
                primary: '#0070f3',
                secondary: '#6c757d',
                dark: '#1a1a1a',
                light: '#f8f9fa',
            },
            fontFamily: {
                sans: ['var(--font-onest)'],
                mono: ['var(--font-roboto-mono)'],
            },
        },
    },
    plugins: [],
    darkMode: 'class',
}
export default config
