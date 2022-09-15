import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFloor } from 'redux/floors/actions';
import { selectTab } from 'redux/home/home.action';
import { IRootReducer } from 'types/AppInterfaces';
import { IFloor } from 'types/shared';
import useStyles from '../sideBar.styles';
import RemoveFloorModal from '../sidebarModals/removeFloorModal';
import OptionButtons, { Option } from './optionButtons';
import SideBarButton from './sideBarButton';

interface FloorButtonsProps {
	floors: IFloor[];
	setBuildingFloors: (floors: IFloor[]) => void;
}

const FloorButtons: React.FC<FloorButtonsProps> = ({ floors, setBuildingFloors }) => {
	const activeFloor = useSelector((state: IRootReducer) => state.floors.selected);
	const classes = useStyles();
	const dispatch = useDispatch();
	const [showMore, setShowMore] = useState(-1);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleOnClick = (id: number) => {
		setShowMore(-1);
		dispatch(selectFloor(floors.find((floor) => floor.id === id)));
		dispatch(selectTab(1));
	};

	const handleOptionsClick = (id: number) => {
		setShowMore((showMore) => (showMore === id ? -1 : id));
		dispatch(selectFloor(floors.find((floor) => floor.id === id)));
		dispatch(selectTab(1));
	};

	const isFloorActive = (floor: IFloor) => {
		return activeFloor?.id === floor.id;
	};

	const isShowingOptions = (floor: IFloor) => {
		return isFloorActive(floor) && showMore === floor.id;
	};

	const handleRemoveFloor = () => {
		setIsError(false);
		setModalIsOpen(true);
	};

	const floorOptions: Option[] = [
		{ text: 'Remove', url: '#', callback: handleRemoveFloor },
		{ text: '+Zone', url: '#', callback: () => dispatch(selectTab(2)) }
	];

	return (
		<>
			<RemoveFloorModal
				activeFloor={activeFloor}
				modalIsOpen={modalIsOpen}
				setModalIsOpen={setModalIsOpen}
				setBuildingFloors={setBuildingFloors}
				floors={floors}
				isError={isError}
				setIsError={setIsError}
			/>

			{floors.length > 0 &&
				floors.map((floor) => (
					<div key={'floor' + floor.id} className={classes.floorButtonWrapper}>
						<SideBarButton
							id={floor.id}
							text={floor.name}
							isActive={isFloorActive(floor)}
							onClick={handleOnClick}
							showOptionsButton
							onOptionsClick={handleOptionsClick}
						/>
						<OptionButtons isActive={isShowingOptions(floor)} options={floorOptions} name={floor.name} />
					</div>
				))}
		</>
	);
};

export default FloorButtons;
