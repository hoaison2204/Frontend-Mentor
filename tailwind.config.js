module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		prefix: 'tw-',
		extend: {},
		boxShadow: {
			blackBoxShadow: '8px 8px 0 0 rgba(0, 0, 0, 1)'
		},
		screens: {
			desktop: '1440px',
			mobile: '375px',
		},
		dropShadow: {
			//QR-code
			base: '0 25px 25px rgba(0, 0, 0, 0.0477)',
		},
		colors: {
			white: 'hsl(0, 0%, 100%)',
			lightGray: 'hsl(212, 45%, 89%)',
			grayishBlue: 'hsl(220, 15%, 55%)',
			darkBlue: 'hsl(218, 44%, 22%)',
			roseWhite: 'hsl(330, 100%, 98%)',
			eggshell: 'hsl(30, 54%, 90%)',
			lightGrey: 'hsl(30, 18%, 87%)',
			wengeBrown: 'hsl(30, 10%, 34%)',
			darkCharcoal: 'hsl(24, 5%, 18%)',
			nutmeg: 'hsl(14, 45%, 36%)',
			darkRaspberry: 'hsl(332, 51%, 32%)',
			yellow: 'rgb(244, 208, 78)'
		},
		fontSize: {
			//QR-code
			heading: ['24px', '32px'],
			paragraph: ['17px', '24px'],
			'13': '13px',
			'28': '28px',
			'32': '32px',
		},
		fontFamily: {
			outfit: ['Outfit', 'sans-serif'],
			youngSerif: ['Young Serif', 'sans-serif']
		},
	},
	plugins: [],
}
