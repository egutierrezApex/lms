import { IBuildingData } from 'types/AppInterfaces';
import { IBuilding } from 'types/shared';

export enum BuildingsActionTypes {
	GET_BY_ID = 'GET_BY_ID',
	SET_ACTIVE_BUILDING = 'SET_ACTIVE_BUILDING',
	UNSET_ACTIVE_BUILDING = 'UNSET_ACTIVE_BUILDING',
	CREATE = 'CREATE',
	EDIT = 'EDIT',
	DELETE = 'DELETE'
}

export interface BuildingInitialState {
	active?: IBuilding;
}

export type BuildingRequestData = Pick<
	IBuildingData,
	| 'name'
	| 'shortName'
	| 'phoneNumber1'
	| 'phoneNumber2'
	| 'phoneNumber3'
	| 'address'
	| 'cityId'
	| 'stateId'
	| 'countryId'
	| 'description'
> & {
	id?: number;
};
