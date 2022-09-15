import { GroupInitialState, GroupsActionTypes } from '../types';

const INITIAL_STATE = {};

const groupsReducer = (
	state = INITIAL_STATE,
	action: { type: GroupsActionTypes; payload: any }
): GroupInitialState => {
	switch (action.type) {
		case GroupsActionTypes.SET_ACTIVE_GROUP:
			return {
				...state,
				active: action.payload
			};
		case GroupsActionTypes.UNSET_ACTIVE_GROUP:
			return {};
		default:
			return state;
	}
};

export default groupsReducer;
