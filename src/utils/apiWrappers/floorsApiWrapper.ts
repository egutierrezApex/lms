import axios from 'axios';
import { IFloor } from 'types/shared';
import { apiURL, QueryParams } from 'utils/constants';

const floorsURL = apiURL + 'Floors';

const FloorsApiWrapper = {
	getFloors: (params?: QueryParams): Promise<IFloor[]> => {
		const floors = axios
			.get(floorsURL, { params })
			.then((result) => {
				const floorsList = result.data as IFloor[];
				return floorsList.map((floor) => {
					return { ...floor, description: floor.description !== null ? floor.description : ''} 
				})	
				} 
			)
		return floors;
	},

	getBuildingFloors: (buildingId: number): Promise<IFloor[]> => {
		const floors = axios
			.get(`${apiURL}Buildings/${buildingId}/Floors`)
			.then((result) => result.data as IFloor[]);

		return floors;
	},

	deleteFloor: (floorId: number): Promise<boolean> => {
		const result = axios
			.delete(`${floorsURL}/${floorId}`)
			.then(() => true);

		return result;
	},
};

export default FloorsApiWrapper;
