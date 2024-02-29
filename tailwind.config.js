/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#212731",
        button: "#1B88F4",
        footer: " #212731",
      },
    },
  },
  plugins: [],
};
