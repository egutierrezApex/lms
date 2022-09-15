import { BuildingInitialState, BuildingsActionTypes } from '../types';

const INITIAL_STATE = {};

const buildingReducer = (
	state = INITIAL_STATE,
	action: { type: BuildingsActionTypes; payload: any }
): BuildingInitialState => {
	switch (action.type) {
		case BuildingsActionTypes.SET_ACTIVE_BUILDING:
			return {
				...state,
				active: action.payload
			};
		case BuildingsActionTypes.UNSET_ACTIVE_BUILDING:
			return {};
		default:
			return state;
	}
};

export default buildingReducer;
