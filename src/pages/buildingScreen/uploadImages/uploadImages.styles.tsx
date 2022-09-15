import { makeStyles, Theme } from '@material-ui/core';
import colors from 'utils/colors';

const useStyles = makeStyles((theme: Theme) => ({
  thumbnailsContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: colors.apexWhite,
    padding: theme.spacing(2),
    borderRadius: '5px',
  },
  addMoreButton: {
    minWidth: '8rem',
    '& .MuiButton-label': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  thumbnail: {
    position: 'relative',
    margin: '0 1rem',
    '& img': {
      maxHeight: '10rem',
      width: 'auto',
      opacity: 0.6,
      cursor: 'pointer',
      verticalAlign: 'middle',
      '&.active': {
        opacity: 1,
        border: `2px solid ${colors.apexTeal1}`,
      },
    },
  },
  removeButton: {
    position: 'absolute',
    transform: 'translate(50%,-50%)',
    backgroundColor: colors.lighterGrey,
    top: 0,
    right: 0,
  },
  selectedImage: {
    marginLeft: 0,
    marginRight: 0,
    '& img': {
      maxHeight: 'calc(100vh / 3 * 2)',
      width: 'auto',
      maxWidth: '100%'
    },
  },
  imageCounterContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: colors.apexGrey1,
    '& span': {
      marginRight: theme.spacing(1),
    },
  },
  carrouselContainer: {
    display: 'flex',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    overflowX: 'auto',
  },
}));

export default useStyles;
