import axios from 'axios';
import { IEmployee } from 'types/shared';
import { apiURL, QueryParams } from 'utils/constants';

const employeesURL = apiURL + 'Employees';

type EmployeesParams = QueryParams & {
	fullname?: string;
	projectName?: string;
	limit?: number;
	offset?: number;
	sort?: string;
};

const EmployeesApiWrapper = {
	getEmployees: (params?: EmployeesParams): Promise<IEmployee[]> => {
		const employees = axios
			.get(`${employeesURL}?limit=500`, { params })
			.then((result) => result.data as IEmployee[]);
		return employees;
	},

	getEmployee: (employeeId: number): Promise<IEmployee> => {
		const employee = axios
			.get(`${employeesURL}/${employeeId}`)
			.then((result) => result.data as IEmployee);
		return employee;
	},
};

export default EmployeesApiWrapper;
