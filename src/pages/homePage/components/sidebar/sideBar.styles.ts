import { makeStyles, Theme } from '@material-ui/core/styles';
import colors from 'utils/colors';

const useStyles = makeStyles((theme: Theme) => ({
  sideBarContainer: {
    fontFamily: 'Libre Franklin',
    maxWidth: '250px',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  buttonsContainer: {
    flexGrow: 1,
    borderRadius: '5px',
    backgroundColor: colors.apexBackgroundClearGrey,
    overflow: 'auto',
    padding: '10px',
  },

  sideBarButton: {
    borderRadius: '5px',
    height: '40px',
    color: colors.apexBlue,
    boxShadow: `0px 2px 10px ${colors.darkShadow}`,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '8px',
  },

  optionsIcon: { height: '70%', margin: '15px' },

  sideBarButtonText: {
    fontWeight: 'bold',
    fontSize: '20px',
  },

  activeButton: {
    color: colors.apexWhite,
    backgroundColor: colors.apexOrange2,
  },

  newBuildingButton: {
    backgroundColor: colors.apexBlue,
    color: colors.apexWhite,
    minHeight: '40px',
    justifyContent: 'center',
    margin: '0 0 16px',
  },

  floorButtonsContainer: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    maxHeight: 0,
    transition: 'max-height 400ms ease',
    '&.active': {
      maxHeight: '800px',
    },
  },

  floorButtonWrapper: {
    width: '85%',
  },
  sidebarButtonMore: {
    maxHeight: 0,
    display: 'none',
    fontSize: '13px',
    transition: 'max-height 400ms ease',
    '&.active': {
      maxHeight: '100%',
      display: 'block',
    },
    '& ul': {
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '4px',
      margin: '0 8px 8px',
      border: `1px solid ${colors.apexOrange1}`,
      borderRadius: '5px',
    },
  },
  optionsLink: {
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bolder',
    },
  },
  modalFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  modalButton: {
    margin: theme.spacing(1),
  },
}));

export default useStyles;
