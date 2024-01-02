/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          50: "#f0f9ff",
        },
        blue: {
          100: "#dbeafe",
          200: "#93c5fd",
          300: "#60a5fa",
          400: "#2563eb",
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
