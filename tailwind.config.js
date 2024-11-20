/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Orange: "hsl(26, 100%, 55%)",
        PaleOrange: "hsl(25, 100%, 94%)",
        vdBlue: "hsl(220, 13%, 13%)",
        dgBlue: "hsl(219, 9%, 45%)",
        gBlue: "hsl(220, 14%, 75%)",
        lgBlue: "hsl(223, 64%, 98%)",
      },
      fontFamily: {
        Kumbh: ["Kumbh Sans", "serif"],
      },
    },
  },
  plugins: [],
};
