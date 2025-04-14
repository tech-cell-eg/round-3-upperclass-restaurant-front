/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bitter: ["Bitter Rose"],
        chillax: ["Chillax"],
      },
      colors: {
        // Define your colors for text
        text_default: "#FFFFFF",
        text_primary: "#FACE8D",
        text_inverse: "#081212", // navbar
        text_muted: "#CCCCCC",

        // Define your colors for background
        bg_default: "#081212",
        bg_primary: "#FACE8D",

        // Define your colors for border
        border_default: "#FFFFFF1A",

        // Define your colors for icons
        icon_default: "#FFFFFF",
        icon_primary: "#FACE8D",
        icon_inverse: "#081212",
      },

      borderRadius: {
        image: "10px",
        nav: "100px", // iclude Button in nav
        button: "500px",
        default: "16px",  // Default border div in menu section
      },
    },
  },
  plugins: [],
};
