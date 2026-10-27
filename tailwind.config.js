/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        fg: "#F2F2F2",
        muted: "#B3B3B3",
        line: "#323232",
        card: "#0E0E0E",
        accent: "#FF8A3D",
        live: "#3DDC84",
        built: "#6B6B6B",
      },
      fontFamily: {
        sans: ['"Outfit"', "system-ui", "sans-serif"],
      },
      maxWidth: { column: "1120px" },
    },
  },
  plugins: [],
};
