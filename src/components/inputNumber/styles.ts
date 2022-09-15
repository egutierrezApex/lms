import { makeStyles, Theme } from '@material-ui/core/styles';
import Colors from 'utils/colors';

const useStyles = makeStyles((theme: Theme) => ({
  inputNumber: {
    display: 'flex',
    flexDirection: 'row',
    '& .buttons': {
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
      '& .MuiSvgIcon-root': {
        fontSize: '12px',
      },
      '& path':{
        color: Colors.apexTeal1,
      }
    },
  },
}));

export default useStyles;
