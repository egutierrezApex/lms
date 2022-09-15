import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import Colors from './colors';

const Theme = createTheme({
	palette: {
		primary: {
			light: Colors.apexBlueLight,
			main: Colors.apexBlue,
			contrastText: Colors.apexWhite,
		},
		secondary: {
			light: Colors.apexTeal1Light,
			main: Colors.apexTeal1,
			contrastText: Colors.apexWhite,
		},
		info: {
			main: Colors.apexLogoGrey,
		},
	},
});

export default ({ children }: { children: React.ReactNode }) => (
	<ThemeProvider theme={Theme}>{children}</ThemeProvider>
);
