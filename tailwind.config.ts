import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: "#ff9900",
                "amazon-dark": "#141B24",
                "amazon-dark-2": "#131921",
                "amazon-background": "#eef3f9",
                "amazon-primary": "#ff9900",
                "amazon-secondary": "#ffb700",
                "amazon-button-hover": "#ff8d3f",
                "amazon-blue": "#00a8e1",
                "amazon-light": "#f3f3f3",
                "amazon-gray": "#232f3e",
            },
        },
    },
    plugins: [],
});
export default config;
