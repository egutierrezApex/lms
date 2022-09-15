import { makeStyles } from '@material-ui/core';
import Colors from 'utils/colors';

const large = '80%';
const small = '3.25rem';

const useStyles = {
	large: {
		maxWidth: '300px',
		maxHeight: '300px',
		width: large,
		height: 'auto',
		margin: 'auto',
		backgroundColor: Colors.apexLogoGrey,
	},
	small: {
		width: small,
		height: small,
		backgroundColor: Colors.apexLogoGrey,
	},
};

export default makeStyles(useStyles);
