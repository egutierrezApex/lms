import { HomeActionTypes } from './home.types';
import { IFilters, IEmployeesData } from '../../types/AppInterfaces';

export const filterLocation = (filters: IFilters) => ({
	type: HomeActionTypes.FILTER_LOCATION,
	payload: filters
});

export const fetchEmployeesStart = () => ({
	type: HomeActionTypes.FETCH_EMPLOYEES_START
});

export const fetchEmployeesSuccess = (employeesData: IEmployeesData[]) => ({
	type: HomeActionTypes.FETCH_EMPLOYEES_SUCCESS,
	payload: employeesData
});

export const fetchEmployeesFailure = (errorMessage: string) => ({
	type: HomeActionTypes.FETCH_EMPLOYEES_FAILURE,
	payload: errorMessage
});

export const selectTab = (tabIndex: number) => ({
	type: HomeActionTypes.HOME_TAB_SELECTION,
	payload: tabIndex
});

export const showTabs = (show: boolean) => ({
	type: HomeActionTypes.HOME_SHOW_TAB,
	payload: show
});
