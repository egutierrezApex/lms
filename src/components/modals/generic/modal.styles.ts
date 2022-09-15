import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
	modalFooter: {
		display: 'flex',
		justifyContent: 'flex-end'
	},
	modalButton: {
		margin: theme.spacing(1)
	}
}));

export default useStyles;
