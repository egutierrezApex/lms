import { makeStyles, Theme } from '@material-ui/core/styles';
import colors from 'utils/colors';

const useStyles = makeStyles((theme: Theme) => ({
	seatInfoContainer: {
		backgroundColor: colors.apexDarkGrey,
		color: colors.apexWhite,
		position: 'relative',
		marginRight: '10px',
		width: '110px',
		borderRadius: '5px',
		padding: '10px',

		'&::after': {
			top: 'calc(50% - 10px)',
			right: '-10px',
			border: 'solid transparent',
			borderRight: 'none',
			borderLeft: `solid ${colors.apexDarkGrey}`,
			content: '""',
			height: 0,
			width: 0,
			position: 'absolute',
			borderRightColor: colors.apexDarkGrey,
			borderWidth: '10px',
		},
	},

	popOverOverride: {
		background: 'none',
	},

	seatInfo: {
		fontFamily: 'Lato',
		fontSize: '14px',
	},
}));

export default useStyles;
