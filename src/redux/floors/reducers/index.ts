import { FloorsInitialState, FloorsActionTypes } from '../types';

const INITIAL_STATE = {};

const floorReducer = (
	state = INITIAL_STATE,
	action: { type: FloorsActionTypes; payload: any }
): FloorsInitialState => {
	switch (action.type) {
		case FloorsActionTypes.SET_ACTIVE_FLOOR:
			return {
				...state,
				selected: action.payload
			};
		default:
			return state;
	}
};

export default floorReducer;
