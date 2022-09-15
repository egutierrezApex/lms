import axios from 'axios';
import { BuildingRequestData } from 'redux/buildings/types';
import { IBuildingData } from 'types/AppInterfaces';
import { IBuilding } from 'types/shared';
import { apiURL, QueryParams } from 'utils/constants';

const buildingsURL = apiURL + 'Buildings';
const buildingDataURL = apiURL + 'Home/Buildings';

const BuildingsApiWrapper = {
	getBuildings: (params?: QueryParams): Promise<IBuilding[]> => {
		const buildings = axios
			.get(buildingsURL, { params })
			.then((result) => {
				const buildList = result.data as IBuilding[];
				return buildList.map((build) => {
					return { ...build, phoneNumber1: build.phoneNumber1 !== null ? build.phoneNumber1 : '',
					 phoneNumber2: build.phoneNumber2 !== null ? build.phoneNumber2 : '', phoneNumber3: build.phoneNumber3 !== null ? build.phoneNumber3 : ''} 
				})	
				} 
			)
		return buildings;
	},
	getBuildingData: (building: IBuilding): Promise<IBuildingData> => {
		const buildingData = axios
			.get(`${buildingDataURL}/${building.id}`)
			.then((result) => result.data as IBuildingData);
		return buildingData;
	},
	deleteBuilding: (buildingId: number) => {
		return axios.delete(`${buildingsURL}/${buildingId}`).then((result) => result.status);
	},
	postBuilding: (building: BuildingRequestData): Promise<IBuilding> => {
		return axios.post(buildingsURL, building).then((result) => result.data as IBuilding);
	},
	putBuilding: (building: BuildingRequestData) => {
		return axios.put(buildingsURL, building).then((result) => result.data);
	}
};

export default BuildingsApiWrapper;
