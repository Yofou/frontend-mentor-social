import plugins from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
	],
  theme: {
    colors: {
      'black': '#141414',
      'dark-grey': '#1F1F1F',
      'grey': '#333333',
      'white': '#FFFFFF',
      'neon-green': '#C4F82A',
    },
    fontFamily: {
      inter: ["'Inter Variable'", "sans-serif"]
    }
  },
  plugins: [
    plugins(({ addUtilities, theme }) => {
      addUtilities({
        '.heading': {
          fontFamily: theme('fontFamily.inter'),
          fontSize: '1.5rem',
          lineHeight: '150%',
        },
        '.body': {
          fontFamily: theme('fontFamily.inter'),
          fontSize: '0.875rem',
          lineHeight: '150%',
        },
      })
    })
  ],
}

