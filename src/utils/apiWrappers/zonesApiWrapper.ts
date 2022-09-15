import axios from 'axios';
import { IZone } from 'types/shared';
import { apiURL, QueryParams } from 'utils/constants';

const zonesURL = apiURL + 'Zones';

const ZonesApiWrapper = {
	getZone: (zoneId: number | string): Promise<IZone> => {
		const zone = axios.get(`${zonesURL}/${zoneId}`).then((result) => result.data as IZone);
		return zone;
	},

	getZones: (params?: QueryParams): Promise<IZone[]> => {
		const zones = axios.get(zonesURL, { params }).then((result) => result.data as IZone[]);
		return zones;
	},

	getFloorZones: (buildingId: number, floorId: number): Promise<IZone[]> => {
		const zones = axios
			.get(`${apiURL}Buildings/${buildingId}/Floors/${floorId}/Zones`)
			.then((result) => result.data as IZone[]);

		return zones;
	}
};

export default ZonesApiWrapper;
