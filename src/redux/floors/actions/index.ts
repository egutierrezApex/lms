
import { IFloor } from 'types/shared';
import { FloorsActionTypes } from '../types';


export const selectFloor = (floor: IFloor | undefined) => ({
	type: FloorsActionTypes.SET_ACTIVE_FLOOR,
	payload: floor
});

