/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	theme: {
		extend: {
			colors: {
				"custom-pink": "#f11286",
			},
			fontFamily: {
				headers: ["Kaushan Script", "cursive"],
			},
			backgroundImage: {
				herobg: "url('/src/assets/herobg.png')",
				aboutdog: "url('/src/assets/dog1.webp')",
			},
		},
	},
	plugins: [],
};

