/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#001e3c",
      secondary: "#007fff",
      tetiary: "#00509f",
      light: "#002345",
      white: "#fff",
      green: "#00CB51",
      red: "#FF0000",
      transparent: "transparent",
    },
    fontFamily: {
      grotesk: "Space Grotesk",
    },

    screens: {
      sm: "576px",

      md: "960px",
    },
    extend: {},
  },
  plugins: [],
};
