import React, { useEffect, useState } from 'react';
import DropDownList from 'components/dropdown-list/dropdown-list';
import BuildingsApiWrapper from 'utils/apiWrappers/buildingsApiWrapper';
import { IBuilding, IFloor, IZone } from 'types/shared';
import FloorsApiWrapper from 'utils/apiWrappers/floorsApiWrapper';
import ZonesApiWrapper from 'utils/apiWrappers/zonesApiWrapper';

interface ZoneSelectionProps {
	startBuildingId?: number;
	startFloorId?: number;
	startZoneId?: number;
	selectedZone: IZone | undefined;
	setSelectedZone: (selectedZone: IZone | undefined) => void;
}

const ZoneSelection: React.FC<ZoneSelectionProps> = ({
	startBuildingId,
	startFloorId,
	startZoneId,
	selectedZone,
	setSelectedZone,
}) => {
	const [buildingList, setBuildingList] = useState<IBuilding[]>([]);
	const [floorList, setFloorList] = useState<IFloor[]>([]);
	const [zoneList, setZoneList] = useState<IZone[]>([]);

	const [selectedBuilding, setSelectedBuilding] = useState<
		IBuilding | undefined
	>();
	const [selectedFloor, setSelectedFloor] = useState<IFloor | undefined>();

	useEffect(() => {
		if (!buildingList.length) {
			BuildingsApiWrapper.getBuildings().then((buildings) =>
				setBuildingList(buildings)
			);
		} else {
			const startBuilding =
				buildingList.find((building) => building.id === startBuildingId) ||
				buildingList[0];

			setSelectedBuilding(startBuilding);
		}
	}, [buildingList]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		setFloorList([]);
		setSelectedFloor(undefined);

		if (selectedBuilding) {
			FloorsApiWrapper.getBuildingFloors(selectedBuilding.id).then((result) => {
				setFloorList(result);
				const startFloor =
					startFloorId &&
					!selectedFloor &&
					result.find((floor) => floor.id === startFloorId);
				setSelectedFloor(startFloor || result[0]);
			});
		}
	}, [selectedBuilding]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		setZoneList([]);
		setSelectedZone(undefined);

		if (selectedFloor) {
			ZonesApiWrapper.getFloorZones(
				selectedFloor.buildingId,
				selectedFloor.id
			).then((result) => {
				setZoneList(result);
				const startZone =
					startZoneId &&
					!selectedZone &&
					result.find((zone) => zone.id === startZoneId);
				setSelectedZone(startZone || result[0]);
			});
		}
	}, [selectedFloor]); // eslint-disable-line react-hooks/exhaustive-deps

	const selectBuilding = (event: React.ChangeEvent<any>) => {
		const selectedBuilding = buildingList.find(
			(building) => building.shortName === event.target.value
		);
		setSelectedBuilding(selectedBuilding);
	};

	const selectFloor = (event: React.ChangeEvent<any>) => {
		const selectedFloor = floorList.find(
			(floor) => floor.name === event.target.value
		);
		setSelectedFloor(selectedFloor);
	};

	const selectZone = (event: React.ChangeEvent<any>) => {
		const selectedZone = zoneList.find(
			(zone) => zone.name === event.target.value
		);
		setSelectedZone(selectedZone);
	};

	return (
		<>
			<DropDownList
				name={'building'}
				items={buildingList.map((building) => building.shortName)}
				inputLabel={'Building'}
				handleSelect={selectBuilding}
				itemSelected={selectedBuilding?.shortName || ''}
			></DropDownList>
			<DropDownList
				name={'floor'}
				items={floorList.map((floor) => floor.name)}
				inputLabel={'Floor'}
				handleSelect={selectFloor}
				itemSelected={selectedFloor?.name || ''}
			></DropDownList>
			<DropDownList
				name={'zone'}
				items={zoneList.map((zone) => zone.name)}
				inputLabel={'Zone'}
				handleSelect={selectZone}
				itemSelected={selectedZone?.name || ''}
			></DropDownList>
		</>
	);
};

export default ZoneSelection;
