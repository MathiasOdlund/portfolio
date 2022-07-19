/** @type {import('tailwindcss').Config} */
module.exports = {
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#f43f5e',

					secondary: '#7D919B',

					accent: '#EB6B47',

					neutral: '#f3f4f6',

					'base-100': '#111111',

					info: '#0092D6',

					success: '#6CB288',

					warning: '#DAAD58',

					error: '#AB3D30'
				}
			}
		]
	},
	purge: ['./src/**/*.svelte', './src/**/*.css'],
	darkMode: false,
	content: [],
	theme: {
		extend: {
			fontFamily: {
				navbar: ['Poppins', 'sans-serif'],
				main: ['Lato', 'sans-serif'],
				maintext: ['Jost', 'sans-serif']
			}
		}
	},
	plugins: [require('daisyui')]
};
