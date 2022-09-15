import { IBuildingData } from 'types/AppInterfaces';
import { IBuilding, IGroup } from 'types/shared';

export enum GroupsActionTypes {
	GET_BY_ID = 'GET_BY_ID',
	SET_ACTIVE_GROUP = 'SET_ACTIVE_GROUP',
	UNSET_ACTIVE_GROUP = 'UNSET_ACTIVE_GROUP',
	CREATE = 'CREATE',
	EDIT = 'EDIT',
	DELETE = 'DELETE'
}

export interface GroupInitialState {
	active?: IGroup;
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
