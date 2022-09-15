import { IEmployee } from 'types/shared';

export enum EmployeesActionTypes {
	SET_SELECTED_EMPLOYEE = 'SET_SELECTED_EMPLOYEE',
}

export const setSelectedEmpoyee = (employee: IEmployee) => ({
	type: EmployeesActionTypes.SET_SELECTED_EMPLOYEE,
	payload: employee,
});
