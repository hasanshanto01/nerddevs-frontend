/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#4caf50",
        "primary-dark-green": "#388e3c",
        "primary-red": "#FF1A30",
        "common-white": "#ffffff",
        "common-black": "#000000",
        "primary-gradient": "linear-gradient(135deg, #f9f9f9 0%, #e0f7fa 100%)",
      },
    },
  },
  plugins: [],
};
