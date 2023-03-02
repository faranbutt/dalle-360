/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/*.jsx"],
	theme: {
		extend: {
			fontFamily: {
				sans: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
				// sans:'poppins'
			},
			screens: {
				sm: "576px",
				md: "768px",
				lg: "992px",
				xl: "1220px",
				xxl: "1400px",
				navsm: "560px",
			},
		},
	},
	plugins: [],
};
