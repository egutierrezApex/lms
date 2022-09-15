import { makeStyles } from '@material-ui/styles';
import Colors from '../../utils/colors';

const font = {
  fontSize: '1.75rem',
  lineHeight: 'initial',
}

const useStyles = {
  arrow: font,
  pagination: font,
  button: {
    ...font,
    margin: '0 .75rem',
    padding: '.05rem .1rem',
    minWidth: '2.5rem',
    fontWeight: 'bold',
    fontFamily: "Libre Franklin",
    color: Colors.apexOrange2
  },
  buttonEnd: {
    fontWeight: 'normal',
    color: Colors.apexBlue
  }
};

export default makeStyles(useStyles);