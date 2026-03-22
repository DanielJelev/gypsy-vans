/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}','./components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#FAF8F5', card: '#E9E1D5', cocoa: '#6A4B3C', clay: '#8C6148',
        sienna: '#C47A5A', olive: '#8C8A6F', ink: '#2D221B', pebble: '#D6CEC3',
        fawn: '#EEDFCC', mocha: '#4E3B2F',
        coffee: '#453336', tan: '#fee5cf', orange: '#ef432a', beige: '#fff7ec',
        terracotta: '#B8654A',
        sand: '#E8D5C4',
        'desert-rose': '#C9A698',
        sage: '#9B9B7A',
        earth: '#3D2B1F',
        cream: '#FDF8F0',
        linen: '#F5EDE3',
      },
      boxShadow: {
        soft: '0 1px 1px rgba(45,34,27,0.05), 0 2px 6px rgba(45,34,27,0.06)',
        deep: '0 6px 12px rgba(45,34,27,0.08), 0 12px 24px rgba(45,34,27,0.06)',
        boho: '0 4px 20px rgba(184,101,74,0.10), 0 8px 32px rgba(61,43,31,0.06)',
      },
      borderRadius: { s: '8px', m: '16px', l: '24px', pill: '9999px' },
      fontFamily: {
        head: ['var(--font-head)'],
        body: ['var(--font-body)'],
        script: ['var(--font-script)'],
        serif: ['var(--font-serif)'],
      },
      keyframes: {
        marquee: { '0%':{ transform:'translateX(0)'}, '100%':{ transform:'translateX(-50%)'}},
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' }},
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
    }
  },
  plugins: []
};