/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // same brand as the Lanka-Link web and mobile app
      colors: {
        brand: {
          DEFAULT: "#2a5bdb",
          50: "#eef4ff", 100: "#dce7fe", 200: "#bacffd", 300: "#8cb0fa", 400: "#5b8def",
          500: "#3a6fe6", 600: "#2a5bdb", 700: "#2349b5", 800: "#1f3d8f", 900: "#1e3672", 950: "#142250",
        },
        accent: { DEFAULT: "#3ddc97", 50: "#ecfdf5", 100: "#d1fae5", 400: "#3ddc97", 500: "#22c483", 600: "#14a46c" },
        ink: { DEFAULT: "#0b1220", 900: "#0b1220", 800: "#111a2e", 700: "#1a2440" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-rubik)", "var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        "fade-up": { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "none" } },
        "grow-x": { from: { transform: "scaleX(0)" }, to: { transform: "scaleX(1)" } },
        "pulse-ring": { "0%": { transform: "scale(.9)", opacity: ".7" }, "100%": { transform: "scale(1.6)", opacity: "0" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "fade-up": "fade-up .7s ease-out both",
        "pulse-ring": "pulse-ring 1.8s ease-out infinite",
      },
    },
  },
  plugins: [],
};
