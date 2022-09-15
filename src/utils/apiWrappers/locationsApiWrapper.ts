import axios from 'axios';
import { Cities, Countries, States } from 'types/shared';
import { apiURL } from 'utils/constants';

const locationsUrl = `${apiURL}Locations`;
const citiesUrl = `${locationsUrl}/Cities`;
const statesUrl = `${locationsUrl}/States`;
const countriesUrl = `${locationsUrl}/Countries`;

const LocationsApiWrapper = {
	getCities: (): Promise<Cities[]> => {
		const cities = axios.get(citiesUrl).then((result) => {
			return result.data as Cities[];
		});
		return cities;
	},
	getStates: (): Promise<States[]> => {
		const states = axios.get(statesUrl).then((result) => {
			return result.data as States[];
		});
		return states;
	},
	getCountries: (): Promise<Countries[]> => {
		const countries = axios.get(countriesUrl).then((result) => {
			return result.data as Countries[];
		});
		return countries;
	}
};

export default LocationsApiWrapper;
