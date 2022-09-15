import { makeStyles } from '@material-ui/styles';
import Colors from '../../utils/colors';

const useStyles = {
  employeeitem: {
    padding: '.8rem',
    paddingLeft: '3rem',
    paddingRight: '3rem',
    '&:hover': {
      backgroundColor: Colors.apexBlueLighter,
    }
  },
  employeeitemTextRoot: {
    color: Colors.apexBlue,
    fontSize: '.875rem',
  },
  employeeitemTextPrimary:{
    fontWeight: 'bold',
    lineHeight: '.9rem'
  },
  avatarspace: {
    marginRight: '1.625rem'
  }
};

export default makeStyles(useStyles);