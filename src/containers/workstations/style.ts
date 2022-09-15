import { makeStyles, Theme } from '@material-ui/core/styles';
import Colors from 'utils/colors';

const useStyles = makeStyles((theme: Theme) => ({
  inputsForm:{
    maxWidth: '90px'
  },
  optionsBox: {
    backgroundColor: Colors.apexBlueLighter,
    border: `3px solid ${Colors.apexOrange2}`,
    borderRadius: '5px 0 5px 5px',
    display: 'flex',
    flexDirection: 'row',
    margin: '0px 5px 5px 0',
    padding: '5px 15px',
    textAlign: 'left',
    justifyContent: 'space-between',

    '& textarea, input': {
      color: Colors.apexBlue,
    },
    '& label': {
      minWidth: 60,
    },
    '& .MuiInputLabel-root': {
      fontSize: '12px',
    },
    '& input.MuiInputBase-input.MuiInput-input': {
      padding: '2px',
      fontWeight: 'bolder',
    },
    '& textarea': {
      minWidth: '250px',
      fontSize: '14px',
    },
    '& input[type=tel]': {
      maxWidth: '50px',
    },
  },
  canvasContainer: {
    width: '100%',
    height: '70vh',
    display: 'flex',
    flexDirection: 'row',
    color: Colors.apexBlue,
    fontFamily: 'Lato',

    '& .yAxisLabels': {
      display: 'flex',
      flexDirection: 'column',
      fontWeight: 'bolder',
      justifyContent: 'space-between',
      height: '50%',
    },

    '& .content': {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',

      '& .xAxisLabels': {
        display: 'flex',
        flexDirection: 'row',
        fontWeight: 'bolder',
        justifyContent: 'space-between',
      },
      '& .spaces': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,

        '& .square': {
          width: '15px',
          height: '15px',
          border: `1px solid ${Colors.apexGrey2}`,
          borderRadius: 5,
          marginRight: 3,
          marginLeft: '1%',
        },

        '& .orange': {
          backgroundColor: Colors.apexOrange2,
        },
      },
      '& .dashedAxis': {
        padding: 4,
        display: 'flex',
        alignItems: 'end',
        borderLeft: `dashed 2px ${Colors.lightGrey}`,
        borderBottom: `dashed 2px ${Colors.lightGrey}`,
        margin: '20px 0 2px 10px',
        height: 'inherit',

        '& canvas': {
          width: '90%',
          height: '98%',
          borderRadius: 5,
        },
      },
    },
  },
}));

export default useStyles;
