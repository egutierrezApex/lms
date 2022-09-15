import { IZone } from 'types/shared';
import { IZoneQuery } from './state';

export interface IGetZonesAction {
	type: string;
	query: IZoneQuery;
}

export interface IGetZoneAction {
	type: string;
	zoneId: string;
}

export interface ISetZonesAction {
	type: string;
	zones: Array<IZone>;
}

export interface IsetZone {
	type: string;
	zone: IZone;
}

export interface ISetLoadingAction {
	type: string;
	isLoading: boolean;
}
