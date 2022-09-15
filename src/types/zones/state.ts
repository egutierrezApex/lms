import { IZone } from '../shared';

export interface IZoneQuery {
	limit: number;
	offset: number;
	sortField: string;
	sortOrder: string;
}

export interface IZoneInitialState {
	isLoading: boolean;
	selectedZone: IZone;
	zonesByPage: Array<IZone>;
	zones: { [k: string]: IZone };
	currentZone: IZone;
	query: IZoneQuery;
}
