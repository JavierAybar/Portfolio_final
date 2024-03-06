import withMT from "@material-tailwind/react/utils/withMT";
import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [animations],
});

