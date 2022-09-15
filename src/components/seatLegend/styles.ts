import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
	listItem: {
		padding: '0px',
		paddingBottom: '15px',
	},
	lastListItem: {
		borderTop: '1px solid lightgray',
		paddingBottom: '0px',
	},
	avatar: {
		width: 32,
		height: 32,
		minWidth: 32,
		fontSize: 20,
		fontWeight: 'bold',
		marginRight: 6,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '4px',
		backgroundColor: ({ color }: { color: string }) => color,
		color: ({ textColor }: any) => textColor,
	},
}));

export default useStyles;
