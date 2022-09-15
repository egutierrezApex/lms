import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { IBuilding, IFloor } from 'types/shared';
import useStyles from '../sideBar.styles';
import FloorButtons from './floorButtons';
import OptionButtons, { Option } from './optionButtons';
import SideBarButton from './sideBarButton';
import RemoveBuildingModal from '../sidebarModals/removeBuildingModal';
import { useDispatch, useSelector } from 'react-redux';
import { IRootReducer } from 'types/AppInterfaces';
import { selectBuilding } from 'redux/buildings/actions';
import { selectFloor } from 'redux/floors/actions';
import { selectTab, showTabs } from 'redux/home/home.action';

interface BuildingButtonProps {
	buildings: IBuilding[];
	floors: IFloor[];
	setTabSelected: (data: number) => void;
	deleteBuilding: () => void;
}

const BuildingButton: React.FC<BuildingButtonProps> = ({
	buildings,
	floors,
	setTabSelected,
	deleteBuilding
}) => {
	const dispatch = useDispatch();
	const activeBuilding = useSelector((state: IRootReducer) => state.buildings.active);
	const activeFloor = useSelector((state: IRootReducer) => state.floors.selected);
	const [expandAccordion, setExpandAccordion] = useState(activeBuilding?.id);
	const [showMore, setShowMore] = useState(-1);
	const [buildingFloors, setBuildingFloors] = useState<IFloor[]>([]);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const classes = useStyles();

	const handleRemoveBuilding = () => {
		setModalIsOpen(true);
	};
	const setFloor = () => {
		dispatch(selectTab(1));
		dispatch(selectFloor(undefined));
	};
	const buildingOptions: Option[] = [
		{ text: 'Edit', url: '#', callback: () => dispatch(selectTab(0)) },
		{ text: 'Clone', url: '#' },
		{ text: 'Remove', url: '#', callback: handleRemoveBuilding },
		{ text: '+Floor', url: '#', callback: setFloor}
	];

	useEffect(() => {
		if (activeBuilding) {
			setBuildingFloors(floors.filter((floor) => floor.buildingId === activeBuilding.id));
		}
	}, [floors, activeBuilding, setBuildingFloors]);

	const handleOnClick = (id: number) => {
		setShowMore(-1);
		setExpandAccordion((expand) => (expand === id ? -1 : id));
		dispatch(selectBuilding(buildings.find((building) => building.id === id)));
		dispatch(selectFloor(floors.length > 0 ? floors.find((floor) => floor.buildingId === id) : undefined));
		dispatch(selectTab(0));
		dispatch(showTabs(expandAccordion !== id));
	};

	const handleOptionsClick = (id: number) => {
		setExpandAccordion(-1);
		setShowMore((showMore) => (showMore === id ? -1 : id));
		dispatch(selectBuilding(buildings.find((building) => building.id === id)));
		dispatch(selectFloor(floors.length > 0 ? floors.find((floor) => floor.buildingId === id) : undefined));
		dispatch(selectTab(0));
	};

	const isBuildingActive = (building: IBuilding) => {
		return activeBuilding?.id === building.id;
	};

	const isBuildingSelected = (building: IBuilding) => {
		return activeBuilding?.id === building.id && !activeFloor;
	};

	const showFloors = (building: IBuilding) => {
		return expandAccordion === building.id;
	};

	const isShowingOptions = (building: IBuilding) => {
		return showMore === building.id;
	};

	return (
		<>
			<RemoveBuildingModal
				activeBuilding={activeBuilding}
				modalIsOpen={modalIsOpen}
				setModalIsOpen={setModalIsOpen}
				deleteBuilding={deleteBuilding}
			/>
			<div className={classes.buttonsContainer}>
				{buildings.map((building) => (
					<div key={'building' + building.id}>
						<SideBarButton
							id={building.id}
							text={building.shortName}
							isActive={isBuildingSelected(building)}
							onClick={handleOnClick}
							onOptionsClick={handleOptionsClick}
							showOptionsButton
						/>

						<div className={clsx(classes.floorButtonsContainer, showFloors(building) && 'active')}>
							{isBuildingActive(building) && (
								<FloorButtons
									floors={buildingFloors}
									setBuildingFloors={setBuildingFloors}
								/>
							)}
						</div>

						<OptionButtons isActive={isShowingOptions(building)} options={buildingOptions} name={building.shortName} />
					</div>
				))}
			</div>
		</>
	);
};

export default BuildingButton;
