 import { IBuildingData } from 'types/AppInterfaces';
import { IBuilding } from 'types/shared';
import { BuildingsActionTypes } from '../types';

export const getBuilding = (buildingId: Pick<IBuilding, 'id'> | undefined) => ({
	type: BuildingsActionTypes.GET_BY_ID,
	payload: buildingId
});

export const selectBuilding = (building: IBuilding | undefined) => ({
	type: BuildingsActionTypes.SET_ACTIVE_BUILDING,
	payload: building
});

export const unselectBuilding = () => ({
	type: BuildingsActionTypes.UNSET_ACTIVE_BUILDING,
	payload: null
});

export const createBuilding = (building: IBuildingData) => ({
	type: BuildingsActionTypes.CREATE,
	payload: building
});

export const updateBuilding = (building: IBuildingData) => ({
	type: BuildingsActionTypes.EDIT,
	payload: building
});

export const deleteBuilding = (building: IBuildingData) => ({
	type: BuildingsActionTypes.DELETE,
	payload: building
});
