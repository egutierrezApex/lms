import axios, { AxiosResponse } from 'axios';
import { ISeat } from 'types/shared';
import { apiURL } from 'utils/constants';

const seatsURL = apiURL + 'Seats';

const SeatsApiWrapper = {
	getSeats: (): Promise<ISeat[]> => {
		const seats = axios.get(seatsURL).then((result) => result.data as ISeat[]);
		return seats;
	},

	putSeat: (seat: ISeat): Promise<AxiosResponse> => {
		return axios.put(seatsURL, seat);
	},

	getEmployeeSeats: (employeeId: number): Promise<ISeat[]> => {
		const seats = axios
			.get(`${apiURL?.replace('/api/v1/', '')}/Employees/${employeeId}/Seats`)
			.then((result) => result.data as ISeat[]);
		return seats;
	},
};

export default SeatsApiWrapper;
