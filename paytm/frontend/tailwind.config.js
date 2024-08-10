/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deepBlue': "#050C9C",       // A very dark, deep blue
        'brightBlue': '#3572EF',     // A vivid, bright blue
        'skyBlue': '#3ABEF9',        // A lighter, sky-like blue
        'paleBlue': '#A7E6FF',       // A very pale, almost pastel blue
        'purpleText': '#401F71',
        'darkTeal': "#003C43", 
        'deepTeal': '#135D66', 
        'softTeal': '#77B0AA', 
        'mintTeal': '#E3FEF7', 
      },
      boxShadow: {
        '3x-2xl':  '0 15px 70px -20px rgba(0, 0, 0, 0.3), 0 15px 70px -20px rgba(0, 0, 0, 0.3),0 15px 70px -20px rgba(0, 0, 0, 0.3), 0 15px 70px -20px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
    }

  },
  plugins: [],
}

