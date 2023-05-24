/** @type {import('tailwindcss').Config} **/
import mt from "@material-tailwind/react/utils/withMT";

export default mt({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'Hero': 'url(/img/landing-page/herobg.png)'
      },
      fontFamily: { 
        'valorant' : ['valorant', 'sans-serif'],
        body: ["Source Sans Pro", "sans-serif"],
      }
    },
  },
  plugins: [],
  safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]']
});
