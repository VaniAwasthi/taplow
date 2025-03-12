/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(0)", opacity: "0.3" },
          "50%": { transform: "translateX(10px)", opacity: "1" },
          "100%": { transform: "translateX(20px)", opacity: "0.3" },
        },
      },
      animation: {
        moveRight: "moveRight 1.2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
