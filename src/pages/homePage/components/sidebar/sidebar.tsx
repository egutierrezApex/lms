import Button from '@material-ui/core/Button';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { unselectBuilding } from 'redux/buildings/actions';
import { selectTab } from 'redux/home/home.action';

import { IBuilding, IFloor } from 'types/shared';
import useStyles from './sideBar.styles';
import BuildingButtons from './sideBarButtons/buildingButtons';

interface SideBarProps {
	buildings: IBuilding[];
	floors: IFloor[];
	setTabSelected: (data: number) => void;
	deleteBuilding: () => void;
}

const SideBar: React.FC<SideBarProps> = ({
	buildings,
	floors,
	setTabSelected,
	deleteBuilding
}) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleNewBuilding = () => {
		dispatch(unselectBuilding());
		dispatch(selectTab(0));
	};

	return (
		<div className={classes.sideBarContainer}>
			<Button
				component={Link}
				to={'/'}
				className={`${classes.newBuildingButton} ${classes.sideBarButtonText}`}
				onClick={handleNewBuilding}
				id="lmsHomeButtonNewBuilding"
			>
				NEW
			</Button>
			<BuildingButtons
				buildings={buildings}
				floors={floors}
				setTabSelected={setTabSelected}
				deleteBuilding={deleteBuilding}
			/>
		</div>
	);
};

export default SideBar;
