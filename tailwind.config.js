/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: [
    "variant",
    [
      "@media (prefers-color-scheme: dark) { &:not(.light *) }",
      "&:is(.dark *)",
    ],
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        s15: "1500px",
        s16: "1600px",
        s18: "1800px",
      },
      colors: {
        yellow: "#EBBC13",
        darkblue: "#0C2240",
        lightborderyellow: "rgba(235, 188, 19, 0.2)",
        bordercolor: "rgba(12, 34, 64, 0.2)",
        bluedarkmode: "#3A4C64",
        bluedarkmodecolor: "#243853",
        lightwhite: "rgba(255, 255, 255, 0.6)",
        lightwhiteborder: "rgba(255, 255, 255, 0.15)",
        extralightwhite: "rgba(255, 255, 255, 0.5)",
        doubleextralightwhite: "rgba(255, 255, 255, 0.2)",
        mutedblue: "#374151",
        darkGreen: "rgb(2, 25, 30)",
        shadeGreen: "rgb(6, 38, 45)",
        charcoal: "#02191E",
        forestGreen: "#136459",
        teal: "#0A3B3A",
      },
      fontSize: {
        '22': '22px',
      },
      boxShadow: {
        inputshadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.10)",
        dashboardshadow: "0px 4.532px 15.863px 0px rgba(0, 0, 0, 0.10)",
      },
      backgroundImage: {
        nav: "linear-gradient(180deg, rgb(15, 81, 73), #06262d 100%);",
        navHover: "linear-gradient(180deg,#06262d, rgb(15, 81, 73) 100%);",
        buttonGradient: "linear-gradient(180deg, #00c77a, #1b4334 100%)",
        buttonGradientHover: "linear-gradient(180deg, #1b4334, #00c77a 100%)",
      },
      borderRadius: {
        '5px': '5px',
        '50': '50%',
      },
      lineHeight: {
        '12': '1.12',
      },
    },
  },
};
