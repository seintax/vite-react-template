/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				'fade-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					},
				}
			},
			animation: {
				'fade-in-left': 'fade-in-left 0.7s ease-out',
				'spin-slow': 'spin 7s linear infinite',
				'spin-slower': 'spin 9s linear infinite',
			}
		},
	},
	plugins: [],
}
