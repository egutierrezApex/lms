import axios from 'axios';
import { BuildingRequestData } from 'redux/buildings/types';
import { IEmployee, IEmployeeGroup, IGroup } from 'types/shared';
import { apiURL, QueryParams } from 'utils/constants';

const employeesGroupsURL = apiURL + 'EmployeesGroups';

//http://layoutapi.azurewebsites.net/api/v1/EmployeesGroups/groupId/1

const EmployeesGroupsApiWrapper = {
	getEmployeesGroups: (groupId: number): Promise<IEmployee[]> => {
		const employees = axios
			.get(`${employeesGroupsURL}/groupId/${groupId}`)
			.then((result) => {
				const employeesList = result.data as IEmployeeGroup[];
				return employeesList.map((emp) => {
					return { 
						id: emp.employeeId, 
						name: emp.employeeName,
						lastName: emp.employeeLastName,
						fullName: emp.employeeName+emp.employeeLastName,
						active: true,
						workingRemotely: true,
						projectId: 0,
						projectName: ""
					} 
				})	
				} 
			)
		return employees;
	},
	postEmployeeGroup: (groupId: number | undefined, employeeId: number): Promise<IGroup> => {
		return axios.post(`${employeesGroupsURL}/${groupId}/employees/${employeeId}`).then((result) => result.data as IGroup);
	},
	deleteEmployeeGroup: (groupId: number, employeeId: number): Promise<number> => {
		return axios.delete(`${employeesGroupsURL}/${groupId}/employees/${employeeId}`).then((result) => result.status);	
	},
};

export default EmployeesGroupsApiWrapper;
