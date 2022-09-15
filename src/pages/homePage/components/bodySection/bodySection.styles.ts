import { makeStyles, Theme } from '@material-ui/core';
import colors from 'utils/colors';

const $buttonHeight = '62px';
const $buttonWidth = '280px';
const $buttonText = '30px';

const useStyles = makeStyles((theme: Theme) => ({
	bodySection: {
		width: '80%',
		height: 'calc(100vh-120px)',
		marginLeft: '2vw',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	centerBody: {
		fontSize: '80px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	noData: {
		fontFamily: '"Lato", sans-serif',
		color: colors.apexGrey1,
		fontSize: '80px',
	},
	addBuildingButton: {
		fontFamily: '"Segoe UI", Arial, sans-serif',
		width: $buttonWidth,
		height: $buttonHeight,
		border: `1px solid ${colors.apexTeal1}`,
		borderRadius: '5px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '40px',
		cursor: 'pointer',
	},
	buildingButtonText: {
		fontSize: $buttonText,
		color: colors.apexTeal1,
		'&:hover': {
			fontSize: `calc(${$buttonText} +  1px)`,
		},
	},
}));

export default useStyles;
