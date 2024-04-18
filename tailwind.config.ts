import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				blurple: "#5865f2",
				lightBlurple: "#7289da",
			},
		},
	},
	plugins: [require("daisyui"), require("@tailwindcss/typography")],
};

export default config;
