/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        '_purple': '#913BFF',
      },
      fontSize: {
        xs: '0.75rem',    // размер шрифта для экранов меньше 640px
        sm: '0.875rem',   // размер шрифта для экранов от 640px до 768px
        md: '14px',       // размер шрифта для экранов от 768px до 1024px
        lg: '1.125rem',   // размер шрифта для экранов от 1024px до 1280px
        xl: '1.25rem',    // размер шрифта для экранов от 1280px и больше
        '2xl': '1.5rem',  // размер шрифта для экранов от 1536px и больше
      },
    },
  },
  plugins: [],
}
