import axios from 'axios';
import { IWorkStation } from 'types/shared';
import { apiURL } from 'utils/constants';

const workStationURL = apiURL + 'WorkStation';

const WorkStationApiWrapper = {
	workStation: (): Promise<IWorkStation> => {
		const workStation = axios
			.get(`${workStationURL}/?limit=20&offset=0`)
			.then((result) => result.data as IWorkStation);
		return workStation;
	},

	getWorkStation: (workStationId: number): Promise<IWorkStation> => {
		const workStation = axios
			.get(`${workStationURL}/${workStationId}`)
			.then((result) => result.data as IWorkStation);
		return workStation;
	},

	getWorkStationsByZone: (zoneId: number): Promise<IWorkStation[]> => {
		const workStationsByZone = axios
			.get(`${apiURL}Zones/${zoneId}/Workstations`)
			.then((result) => result.data as IWorkStation[]);
		return workStationsByZone;
	},
};

export default WorkStationApiWrapper;
