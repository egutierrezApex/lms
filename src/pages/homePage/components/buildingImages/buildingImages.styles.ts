import { makeStyles, Theme } from '@material-ui/core';
import colors from 'utils/colors';

const useStyles = makeStyles((theme: Theme) => ({
  buildingImagesContainer: {
    backgroundColor: colors.apexBackgroundClearGrey,
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    minHeight: '650px',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      flex: '0',
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  carousel: {
    width: '100%',
    flex: 1,
    backgroundColor: 'transparent',
  },
  buildingInfo: {
    backgroundColor: 'white',
    width: '400px',
    height: 'auto',
    minHeight: '160px',
    color: colors.apexBlue,
    padding: '5px 10px',
    position: 'absolute',
    bottom: 0,
    right: '20px',
    transition: 'height',
    [theme.breakpoints.up('lg')]: {
      maxWidth: 'calc(100% - 20px)',
      height: 'auto',
    },
    '& span': {
      display: 'block',
      fontSize: '14px',
      [theme.breakpoints.down('xs')]: {
        fontSize: '12px',
      },
    },
  },
  title: {
    fontWeight: 'bold',
    fontSize: '25px',
    marginBottom: '15px',
    marginTop: '5px',
  },
  seatsWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  iconAndText: {
    display: 'flex',
    margin: '10px 0',
    '& img': {
      width: '20px',
      height: 'auto',
      marginRight: '10px',
    },
    '& span': {
      textAlign: 'left',
    },
  },
  showMoreButton: {
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '14px',
    borderWidth: '2px',
    borderBottom: `3px solid ${colors.apexOrange2}`,
  },
}));

export default useStyles;
