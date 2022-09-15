import { makeStyles, Theme } from '@material-ui/core/styles';
import Colors from 'utils/colors';

const useStyles = makeStyles((theme: Theme) => ({
	dataItem: {
		paddingTop: 0,
		paddingBottom: 0,
	},
	dataItemText: {
		margin: '0',
		textAlign: 'center',
		color: Colors.apexBlue,
		'& span': {
			fontSize: '.95rem',
		},
	},
	employeeBox: {
		backgroundColor: Colors.apexWhite,
		borderRadius: '.625rem',
		paddingTop: 'min(120px,30%)',
		marginTop: 'max(-130px,-35%)',
		paddingBottom: '50px',
	},
	flexGrow: {
		flexGrow: 1,
	},
	remoteText: {
		width: 'fit-content',
		margin: 'auto',
		padding: '2px 9px',
		borderRadius: '5px',
		fontWeight: 'bold',
		color: 'white',
		fontSize: '0.9rem',
		backgroundColor: '#37B3A2',
		position: 'relative',
		marginBottom: '8px',
	},
	buttonModalStyle: {
		verticalAlign: 'initial',
		fontSize: 'inherit',
		textDecoration: 'underline',
	},
}));

export default useStyles;
