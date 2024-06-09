module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		screens: {
			desktop: '1440px',
			mobile: '375px',
		},
		dropShadow: {
			base: '0 25px 25px rgba(0, 0, 0, 0.0477)'
		},
		colors: {
			white: 'hsl(0, 0%, 100%)',
			lightGray: 'hsl(212, 45%, 89%)',
			grayishBlue: 'hsl(220, 15%, 55%)',
			darkBlue: 'hsl(218, 44%, 22%)',
		},
		fontSize: {
			heading: ['24px', '32px'],
			paragraph: ['17px', '24px'],
		},
		fontFamily: {
			outfit: ['Outfit', 'sans-serif'],
		},
	},
	plugins: [],
}
