import { HomeActionTypes } from './home.types';
import { IHomeActionTypes, IHomeReduxState } from '../../types/AppInterfaces';

const INITIAL_STATE: any = {
	filters: {
		location: '',
		floor: '',
		section: ''
	},
	isFetching: false,
	employeesData: [],
	errorMessage: '',
	tabs: {
		showTabs: false,
		tabIndex: 0
	}
};

const homeReducer = (state = INITIAL_STATE, action: IHomeActionTypes): IHomeReduxState => {
	switch (action.type) {
		case HomeActionTypes.FILTER_LOCATION:
			return {
				...state,
				filters: action.payload
			};
		case HomeActionTypes.FETCH_EMPLOYEES_START:
			return {
				...state,
				isFetching: true
			};
		case HomeActionTypes.FETCH_EMPLOYEES_SUCCESS:
			return {
				...state,
				isFetching: false,
				employeesData: action.payload
			};
		case HomeActionTypes.FETCH_EMPLOYEES_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			};
		case HomeActionTypes.HOME_SHOW_TAB:
			return {
				...state,
				tabs: {
					showTabs: action.payload,
					tabIndex: action.payload ? state.tabs.tabIndex : 0
				}
			};
		case HomeActionTypes.HOME_TAB_SELECTION:
			return {
				...state,
				tabs: {
					showTabs: true,
					tabIndex: action.payload
				}
			};
		default:
			return state;
	}
};

export default homeReducer;
