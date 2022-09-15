import { makeStyles, Theme } from '@material-ui/core/styles';
import { styleConstants } from 'utils/constants';

const useStyles = makeStyles((theme: Theme) => ({
	homeContainer: {
		display: 'flex',
		height: `calc(100vh - ${styleConstants.headerHeight} - 2 * ${styleConstants.headerToContentOffset})`,
		margin: `${styleConstants.headerToContentOffset} auto`,
		gap: '30px',		
		width: '100%',
	},
}));

export default useStyles;
