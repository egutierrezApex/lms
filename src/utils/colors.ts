const colors = {
	someYellow: '#EDAA48',
	apexBlue: '#44546A',
	apexBlueLight: '#7a8695',
	apexBlueLighter: '#F8FAFD',
	apexTeal1: '#37B3A2',
	apexTeal1Light: '#9AD9D0',
	apexTeal2: '#9FE2D8',
	apexTeal3: '#EAFDF8',
	apexOrange1: '#E7792B',
	apexOrange2: '#EE9F2D',
	apexOrange3: '#F7C85E',
	apexYellow: '#F9E661',
	apexLogoGrey: '#7C95A5',
	apexGrey1: '#808083',
	apexGrey2: '#D2DDE8',
	apexWhite: '#FFFFFF',
	colorDarkRed: '#D14732',
	apexBackgroundClearGrey: '#f9f9f9',
	lightGrey: '#B3B3B4',
	lighterGrey: '#EFF0F2',
	darkShadow: '#00000029',
	apexDarkGrey: '#464545',
	disabledText: '#C1C1C3'
};

export const colorsConfig: {
	[key: string]: { color: string; textColor: string };
} = {
	Available: { color: colors.lighterGrey, textColor: colors.lightGrey },
	'In Use': { color: colors.apexBlueLight, textColor: colors.apexWhite },
	Selected: { color: colors.apexOrange2, textColor: colors.apexWhite },
	'Pool seat': { color: colors.apexTeal1Light, textColor: colors.apexWhite },
	default: { color: 'transparent', textColor: colors.apexBlue }
};

export default colors;
