import { IZone } from 'types/shared';

export interface IZonesIndexProps {
	get_zones: Function;
	isLoading: boolean;
	zonesByPage: Array<IZone>;
}

export interface IZoneIndividualProps {
	get_zone: Function;
	currentZone: IZone;
	isLoading: boolean;
	match: any;
}
