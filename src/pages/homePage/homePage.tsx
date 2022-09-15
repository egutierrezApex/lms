import React, { useEffect, useState } from 'react';
import Sidebar from './components/sidebar/sidebar';
import BodySection from './components/bodySection/bodySection';
import BuildingImages from './components/buildingImages/buildingImages';
import TabsHome from '../../components/tabsHome';
import useStyles from './styles';
import { IBuilding, IFloor } from 'types/shared';
import BuildingsApiWrapper from 'utils/apiWrappers/buildingsApiWrapper';
import FloorsApiWrapper from 'utils/apiWrappers/floorsApiWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { IRootReducer } from 'types/AppInterfaces';
import Loading from '../../components/loading/loading';
import { selectBuilding } from 'redux/buildings/actions';

const HomePage: React.FC = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const activeBuilding = useSelector((state: IRootReducer) => state.buildings.active);
	const [tabSelected, setTabSelected] = useState<number>(-1);
	const activeFloor = useSelector((state: IRootReducer) => state.floors.selected);
	const tabsInfo = useSelector((state: IRootReducer) => state.home.tabs);
	const [buildings, setBuildings] = useState<IBuilding[]>([]);
	const [floors, setFloors] = useState<IFloor[]>([]);
	const [loading, setloading] = useState(true);

	const fetchFloors = async () => {
		const floors = await FloorsApiWrapper.getFloors();
		setFloors(floors);
	};

	const fetchBuildings = async () => {
		const buildings = await BuildingsApiWrapper.getBuildings();
		setBuildings(buildings);		
		setloading(false);
	};

	useEffect(() => {
		setloading(true);
		fetchFloors();
	}, []);

	useEffect(() => {
		fetchBuildings();
	}, [activeBuilding]);

	const buildingsComponent =
		activeBuilding || activeFloor ? (
			<BuildingImages
				activeBuilding={
					activeBuilding || buildings.find((building) => building.id === activeFloor?.id)!
				}
			/>
		) : (
			<BodySection />
		);

	const deleteBuilding = () => {
		const deleteRequest = async (buildingToDelete: IBuilding) => {
			const deleteResponse = await BuildingsApiWrapper.deleteBuilding(buildingToDelete.id);
			if (deleteResponse === 200) {
				fetchBuildings();
			}
		};
		if (activeBuilding) deleteRequest(activeBuilding);
	};

	if(loading) return <Loading />;

	return (
		<div className={classes.homeContainer}>
		
			<Sidebar
				buildings={buildings}
				floors={floors}
				setTabSelected={setTabSelected}
				deleteBuilding={deleteBuilding}
			/>
			{tabsInfo.showTabs ? (
				<TabsHome tabSelected={tabsInfo.tabIndex} activeBuilding={activeBuilding} />
			) : (
				buildingsComponent
			)}
		</div>
	);
};

export default HomePage;
