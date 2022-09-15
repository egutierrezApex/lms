import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
	grid: {
		paddingTop: '5%',
		width: '100%',
		[theme.breakpoints.down('xs')]: {
			display: 'block',
		},
	},
	userGrid: {
		display: 'flex',
		flexDirection: 'column',
	},
	canvasGrid: {
		borderRadius: '0.625rem',
		marginLeft: '5%',
		background: 'white',
		height: '100%',
		width: '95%',
		padding: '3%',
		[theme.breakpoints.down('xs')]: {
			marginLeft: 0,
			marginTop: '15px',
			width: '100%',
		},
	},
	seatLegend: {
		padding: '2%',
		display: 'flex',
		alignItems: 'end',
		[theme.breakpoints.between(350, 'sm')]: {
			justifyContent: 'center',
		},
	},
	buttonGrid: {
		display: 'flex',
		justifyContent: 'end',
	},
	buttons: {
		marginTop: '15px',
		fontSize: '14px',
		marginLeft: '20px',
		height: '25px',
		textTransform: 'none',
	},
	dropDown: {
		padding: '2%',
		minHeight: '150px',
		textAlign: 'left',
		display: 'flex',
		flexDirection: 'column',
		width: '190px',
		[theme.breakpoints.up('lg')]: {
			width: '240px',
		},
	},
	column: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
		[theme.breakpoints.up('md')]: {
			flexDirection: 'column',
		},
	},
	modal: {
		display: 'flex',
		justifyContent: 'flex-end',
		flexWrap: 'wrap',
	},
}));

export default useStyles;
