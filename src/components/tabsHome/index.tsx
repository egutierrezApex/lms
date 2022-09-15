import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import useStyles from './styles';
import ZoneEditor from 'components/zoneEditor';
import WorkstationContainer from '../../containers/workstations';
import FloorScreen from 'pages/floorScreen';
import BuildingScreen from 'pages/buildingScreen';
import { useDispatch } from 'react-redux';
import { selectTab } from 'redux/home/home.action';
import { IBuilding } from 'types/shared';

interface TabsHomeProps {
	tabSelected: number;
	activeBuilding: IBuilding | undefined;
}

interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;
	const classes = useStyles();

	return (
	<div
		role="tabpanel"
			hidden={value !== index}
			id={`tabpanel-${index}`}
			aria-labelledby={`tab-${index}`}
			className={classes.TabPanel}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</div>
	);
}

function a11yProps(index: any) {
	return {
		id: `tab-${index}`,
		'aria-controls': `tabpanel-${index}`
	};
}

const TabsHome: React.FC<TabsHomeProps> = ({ tabSelected, activeBuilding }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const isDisabledTab = activeBuilding === undefined;

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		dispatch(selectTab(newValue));
	};

	return (
		<div className={classes.root}>
			<div className={classes.tabs}>
				<AppBar position="static" className={classes.AppBar}>
					<Tabs
						value={tabSelected}
						onChange={handleChange}
						aria-label="tabs"
						TabIndicatorProps={{ className: classes.indicator }}
					>
						<Tab label="BUILDING" {...a11yProps(0)} id="lmsHomeTabBuilding" />
						<Tab label="FLOOR" {...a11yProps(1)} disabled={isDisabledTab} id="lmsHomeTabFloor" />
						<Tab label="ZONES" {...a11yProps(2)} disabled={isDisabledTab} id="lmsHomeTabZones" />
						<Tab label="WORK STATIONS" {...a11yProps(3)} disabled={isDisabledTab} id="lmsHomeTabWorkStations" />
					</Tabs>
				</AppBar>
				<TabPanel value={tabSelected} index={0}>
					<BuildingScreen />
				</TabPanel>
				<TabPanel value={tabSelected} index={1}>
					<FloorScreen />
				</TabPanel>
				<TabPanel value={tabSelected} index={2}>
					<ZoneEditor />
				</TabPanel>
				<TabPanel value={tabSelected} index={3}>
					<WorkstationContainer />
				</TabPanel>
			</div>
		</div>
	);
};
export default TabsHome;
