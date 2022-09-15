import { makeStyles, Theme } from '@material-ui/core/styles';
import Colors from 'utils/colors';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		gap: '10px',
		width: '73%'
	},
	tabs: {
		flexGrow: 1,
		marginTop: 10,
		'& .MuiPaper-elevation4': {
			boxShadow: 'none'
		}
	},
	AppBar: {
		backgroundColor: Colors.lighterGrey,
		color: Colors.apexBlue,
		'& .MuiTabs-flexContainer': {
			minHeight: '60px',
			flexWrap: 'wrap'
		},
		'& .MuiTab-root': {
			padding: '1px'
		},
		'& .MuiTab-textColorInherit': {
			opacity: 1
		},
		'& span.MuiTab-wrapper': {
			backgroundColor: Colors.apexBlueLighter,
			zIndex: 2,
			height: '80%',
			width: '100%',
			top: 0,
			position: 'absolute'
		},
		'& .Mui-disabled': {
			color: Colors.disabledText
		},
		'& .Mui-selected': {
			fontWeight: 'bold',
			'& span.MuiTouchRipple-root': {
				backgroundColor: Colors.apexBlueLighter
			},
			'& span.MuiTab-wrapper': {
				border: 'solid 3px ' + Colors.apexOrange2,
				borderBottom: 0,
				position: 'relative',
				borderColor: Colors.apexOrange2,
				borderLeft: 'solid 3px',
				borderRight: 'solid 3px ' + Colors.apexOrange2,
				borderTop: 'solid 3px',
				borderTopRightRadius: '5px',
				borderTopLeftRadius: '5px',
				marginRight: '4px',
				marginLeft: '1%'
			},
			'&::before,&::after': {
				content: '""',
				width: '95%',
				height: '80%',
				border: '3px solid ' + Colors.apexOrange2,
				position: 'absolute',
				borderTop: 0,
				bottom: 0
			},
			'&::after': {
				borderLeft: 0,
				borderRadius: '0 0 13px 0',
				left: '-93%'
			},
			'&::before': {
				borderRight: 0,
				borderRadius: '0 0 0 13px',
				right: '-93%',
				zIndex: 1
			},
			'&:last-child:before': {
				right: '-95%',
				marginRight: '1px',
				borderRadius: 0,
				borderBottom: 0,
				minWidth: '229px',
				maxWidth: '100%',
				width: '96%',
				marginLeft: '2%'
			},
			'&:first-child span.MuiTab-wrapper': {
				height: '71%',
				backgroundColor: 'transparent',
				width: '100%',
				padding: 0,
				marginLeft: 0
			},
			'&:first-child:after': {
				left: '-95%',
				borderRadius: 0,
				borderBottom: 0,
				borderBottomLeftRadius: '5px'
			},
			'&:first-child:before': {
				backgroundColor: Colors.lighterGrey,
				right: '1%',
				borderRadius: '10px 0 0 0',
				zIndex: '1',
				top: '84%',
				border: '3px solid #EE9F2D',
				width: '39%', //BUILDING(first) tab border
				borderRight: '0',
				borderBottomLeftRadius: '5px'
			}
		},
		'& .MuiButtonBase-root': {
			flex: 1,
			maxWidth: '100%',
			'&.Mui-selected:first-child': {
				flex: 2
			}
		}
	},
	indicator: {
		height: 0,
		top: 0
	},
	TabPanel: {
		'& > .MuiBox-root': {
			padding: 0,
			margin: ' -3px 0'
		}
	}
}));

export default useStyles;
