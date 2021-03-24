import { lighten, darken, readableColor } from 'polished';

export const theme = {
	// spacing: {
	//   unit: 5,
	//   sectionHorizontal: ({ spacing }) => spacing.unit * 8,
	//   sectionVertical: ({ spacing }) => spacing.unit * 8,
	// },
	breakpoints: {
		xs: 0,
		small: '550px',
		medium: '900px',
		large: '1200px',
	},
	colors: {
		// tonalOffset: 0.2,
		primary: {
			main: '#0C1141',
			// light: ({ colors }) => lighten(colors.tonalOffset, colors.primary.main),
			// dark: ({ colors }) => darken(colors.tonalOffset, colors.primary.main),
			// contrastText: ({ colors }) => readableColor(colors.primary.main),
		},
		// success: {
		//   main: '#70C9B7',
		//   light: ({ colors }) => lighten(colors.tonalOffset * 3, colors.success.main),
		//   dark: ({ colors }) => darken(colors.tonalOffset, colors.success.main),
		//   contrastText: ({ colors }) => readableColor(colors.success.main),
		// },
		// note: {
		//   main: '#F3C25D',
		//   light: ({ colors }) => lighten(colors.tonalOffset * 2, colors.note.main),
		//   dark: ({ colors }) => darken(colors.tonalOffset, colors.note.main),
		//   contrastText: ({ colors }) => readableColor(colors.note.main),
		// },
		// warning: {
		//   main: '#EE6D5F',
		//   light: ({ colors }) => lighten(colors.tonalOffset * 2, colors.warning.main),
		//   dark: ({ colors }) => darken(colors.tonalOffset, colors.warning.main),
		//   contrastText: ({ colors }) => readableColor(colors.warning.main),
		// },
		// info: {
		//   main: '#80E5E9',
		//   light: ({ colors }) => lighten(colors.tonalOffset * 2, colors.info.main),
		//   dark: ({ colors }) => darken(colors.tonalOffset, colors.info.main),
		//   contrastText: ({ colors }) => readableColor(colors.info.main),
		// },
		text: {
			primary: '#0C1141',
			secondary: '#3D4168',
		},
		// border: {
		//   dark: 'rgba(0,0,0, 0.15)',
		//   light: '#ffffff',
		// },
		// responses: {
		//   success: {
		//     color: ({ colors }) => colors.success.main,
		//     backgroundColor: ({ colors }) => transparentize(0.9, colors.success.main),
		//   },
		//   error: {
		//     color: ({ colors }) => colors.error.main,
		//     backgroundColor: ({ colors }) => transparentize(0.9, colors.error.main),
		//   },
		//   redirect: {
		//     color: ({ colors }) => colors.warning.main,
		//     backgroundColor: ({ colors }) => transparentize(0.9, colors.responses.redirect.color),
		//   },
		//   info: {
		//     color: ({ colors }) => colors.info.main,
		//     backgroundColor: ({ colors }) => transparentize(0.9, colors.responses.info.color),
		//   },
		// },
		http: {
			get: '#009E7E',
			post: '#3AB9F4',
			put: '#6964B2',
			options: '#d3ca12',
			patch: '#F3C25D',
			delete: '#EE6D5F',
			basic: '#999',
			link: '#31bbb6',
			head: '#c167e4',
		},
		// navbar: {
		//   main: ({ colors }) => colors.primary.main,
		//   gradient: ({ colors }) => darken(colors.tonalOffset / 2, colors.navbar.main),
		//   contrastText: 'white'
		// },
	},

	sidebar: {
		backgroundColor: '#fff',
		activeBgColor: '#fff',
		width: '360px',
		textColor: '#0C1141',
		textColorSecondary: '#239b56',
		activeTextColor: '#0C1141',
		separatorLineColor: '#e67e22',
		separatorLabelColor: '#e67e22',
		caretColor: '#0C1141',
		fontFamily: '"Graphik LCG Web", sans-serif',
		fontSize: '16px',
		offsetLeft: 8,
		spacing: {
			unit: 10,
			paddingHorizontal: 16,
			paddingVertical: 8,
		},
	},
	// tocPanel: {
	//   width: '240px',
	// },

	typography: {
		fontSize: '16px',
		lineHeight: '1.5em',
		fontWeightRegular: '400',
		fontWeightBold: '600',
		fontWeightLight: '300',
		fontFamily: '"Graphik LCG Web", sans-serif',
		headings: {
			fontFamily: '"Graphik LCG Web", sans-serif',
			fontWeight: '600',
		},
		heading1: {
			fontSize: '38px',
			fontWeight: '500',
			fontFamily: ({ typography }) => typography.headings.fontFamily,
			lineHeight: ({ typography }) => typography.lineHeight,
			color: ({ colors }) => colors.primary.main,
			capitalize: false,
		},
		heading2: {
			fontSize: '32px',
			fontWeight: '500',
			color: ({ colors }) => colors.text.primary,
			fontFamily: ({ typography }) => typography.headings.fontFamily,
			lineHeight: ({ typography }) => typography.lineHeight,
			capitalize: false,
		},
		heading3: {
			fontSize: '24px',
			fontWeight: '500',
			color: ({ colors }) => colors.text.primary,
			fontFamily: ({ typography }) => typography.headings.fontFamily,
			lineHeight: ({ typography }) => typography.lineHeight,
			capitalize: false,
			margin: 0,
		},
		// heading4: {
		// // ...
		// },
		// heading5: {
		// // ...
		// },
		// heading6: {
		// // ...
		// },
		code: {
			fontSize: '14px',
			fontFamily: 'Courier, monospace',
			fontWeight: ({ typography }) => typography.fontWeightRegular,
			color: '#0C1141',
			backgroundColor: '#E6E7EC',
			wrap: false,
		},
		pre: {
			border: '1px solid #E6E7EC',
			borderRadius: '8px',
		},
		links: {
			color: ({ colors }) => colors.primary.main,
			visited: ({ typography }) => typography.links.color,
			hover: ({ typography }) => lighten(0.2, typography.links.color),
		},
	},
	rightPanel: {
		backgroundColor: '#E6E7EC',
		width: '40%',
		textColor: '#0C1141',
	},
	schema: {
		nestedBackground: '#FFFFFF',
		// linesColor: theme => lighten( theme.colors.tonalOffset, desaturate(theme.colors.tonalOffset, theme.colors.primary.main) ),
		// defaultDetailsWidth: '75%',
		// typeNameColor: theme => theme.colors.text.secondary,
		// typeTitleColor: theme => theme.schema.typeNameColor,
		// requireLabelColor: theme => theme.colors.error.main,
		// labelsTextSize: '0.9em',
		// nestingSpacing: '1em',
		// arrow: {
		//   size: '1.1em',
		//   color: theme => theme.colors.text.secondary,
		// },
	},
	codeBlock: {
		backgroundColor: ({ rightPanel }) => darken(0.1, rightPanel.backgroundColor),
		tokens: {},
		textColor: '#0C1141',
	},
};
