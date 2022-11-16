/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      square: "square",
    },
    textShadow: {
      default: "0 2px 0 #000",
      sm: "0 1px 1px #00FF41",
      md: "0 2px 2px #00FF41",
      mdf: "0 2px 2px #FFF",
      footer: "0 1px 2px #FFF",
      none: "0 0 0 #000",
      h2: "0 0 3px #008F11, 0 0 5px #008F11",
      h1: "0 2px 3px rgba(0, 143, 17, .8), 0 2px 5px rgba(0, 143, 17, .9)",
      h1before: "-2px 0 #008F11",
      h1after: "-2px 0 #008F11, 2px 2px #00FF41",
      row: "0 0px 0px #fff",
    },
    extend: {
      spacing: {
        "1/5": "20%",
      },
      colors: {
        green: {
          matrix: "#1ed934",
          mdark: "#008F11",
          mlight: "#00FF41",
        },
      },
      dropShadow: {
        nav: "0 3px 3px rgba(0, 143, 17, .9)",
      },
      fontFamily: {
        space: ["Space Mono", "monospace"],
      },
      keyframes: {
        appear: {
          "0%, 20%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glitch: {
          "2%,64%": {
            transform: "translate(2px,0) skew(0deg)",
          },
          "4%,60%": {
            transform: "translate(-2px,0) skew(0deg)",
          },
          "62%": {
            transform: "translate(0,0) skew(5deg)",
          },
        },
        glitchTop: {
          "2%,64%": {
            transform: "translate(2px,-2px)",
          },
          "4%,60%": {
            transform: "translate(-1px,2px)",
          },
          "62%": {
            transform: "translate(13px,-1px) skew(-13deg)",
          },
        },
        glitchBotom: {
          "2%,64%": {
            transform: "translate(-2px,0)",
          },
          "4%,60%": {
            transform: "translate(0px,0)",
          },
          "62%": {
            transform: "translate(-22px,5px) skew(21deg)",
          },
        },
        flipInX: {
          "0%": {
            transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)",
          },
          "40%": {
            transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)",
          },
          "60%": {
            transform: "perspective(400px) rotate3d(1, 0, 0, 10deg)",
          },
          "80%": {
            transform: "perspective(400px) rotate3d(1, 0, 0, -5deg)",
          },
          "100%": {
            transform: "perspective(400px)",
          },
        },
        zoomIn: {
          "0%": {
            opacity: "0",
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "50%": {
            opacity: "1",
          },
        },
        swing: {
          "20%": {
            transform: "rotate3d(0, 0, 1, 15deg)",
          },

          "40%": {
            transform: "rotate3d(0, 0, 1, -10deg)",
          },

          "60%": {
            transform: "rotate3d(0, 0, 1, 5deg)",
          },
          "80%": {
            transform: "rotate3d(0, 0, 1, -5deg)",
          },
          "100%": {
            transform: "rotate3d(0, 0, 1, 0deg)",
          },
        },
      },

      animation: {
        "glitch-anim": "glitch 1s linear infinite",
        "glitch-top": "glitchTop 1s linear infinite",
        "glitch-bot": "glitchBotom 1.5s linear infinite",
        flipIN: "flipInX 2s ease-in 1",
        appearBar: "appear 2s ease-in 1",
        swinging: "swing 2s ease-in 1"
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tailwindcss-textshadow"),
    require("daisyui"),
  ],
};
