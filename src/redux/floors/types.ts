import { IFloor } from 'types/shared';

export enum FloorsActionTypes {
	SET_ACTIVE_FLOOR = 'SET_ACTIVE_FLOOR',
}

export interface FloorsInitialState {
	selected?: IFloor;
}
