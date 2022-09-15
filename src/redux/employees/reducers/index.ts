import { AnyAction } from 'redux';
import { EmployeesActionTypes } from '../actions';

const employeesReducer = (state = {}, action: AnyAction) => {
	switch (action.type) {
		case EmployeesActionTypes.SET_SELECTED_EMPLOYEE:
			return { ...state, selectedEmployee: action.payload };
		default:
			return state;
	}
};

export default employeesReducer;
