const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");
const daisyui = require("daisyui");

/** @type {import("tailwindcss").Config} */
const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		fontFamily: {},
		extend: {},
	},

	plugins: [forms, typography, daisyui],

	daisyui: {
		styled: false,
		themes: [],
		base: false,
	},
};

module.exports = config;
