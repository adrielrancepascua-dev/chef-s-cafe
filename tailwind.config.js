/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          base: '#F9F7F2',       // Warm Ivory (Background)
          primary: '#2A1B15',    // Deep Espresso (Text/Heads)
          accent: '#CCA43B',     // Muted Gold (Buttons/Highlights)
          secondary: '#8F9779',  // Soft Sage (Subtle backgrounds)
          
          // Keeping these mapped for compatibility but redirecting to new palette
          beige: '#F9F7F2',      // -> base
          brown: '#2A1B15',      // -> primary
          cream: '#FFFDF5',      // Lighter highlight
          light: '#F9F7F2',      // -> base
          dark: '#1F130F',       // Darker Espresso
          muted: '#8F9779',      // -> secondary
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
