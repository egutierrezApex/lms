import React, { useEffect, useState } from 'react';
import Header from './components/header';
import EmployeesList from './components/employeesList';
import Group from './components/group';

import Grid from '@material-ui/core/Grid';
import { useLocation, useParams } from 'react-router-dom';
import EmployeesApiWrapper from 'utils/apiWrappers/employeesApiWrapper';
import { IEmployee } from 'types/shared';
import { Box } from '@material-ui/core';
import Loading from 'components/loading/loading';
import EmployeesGroupsApiWrapper from 'utils/apiWrappers/EmployeesGroupsApiWrapper';

export default function SingleGroup() {
	const location = useLocation();
	const { groupId } = useParams();
	const [loading, setloading] = useState(true);
	const [isEdit, setEdit] = useState(false);
	const [employeeList, setEmployeeList] = useState<IEmployee[]>([]);
	const [employeeSelected, setEmployeeSelected] = useState<IEmployee[]>([]);

	const fetchEmployees = async () => {
		EmployeesApiWrapper.getEmployees().then((employees) => setEmployeeList(employees));
		setloading(false);
	};

	useEffect(() => {
		if (location.pathname.includes('edit')) {
			setEdit(true);
		}
	}, [location]);

	useEffect(() => {
		setloading(true);
		if (employeeList) {
			fetchEmployees();
		}
	}, []);

	const selectEmployee = (employee: IEmployee) => {
		const found = handleCheck(employee);
		if (!found) {
			if(groupId) { EmployeesGroupsApiWrapper.postEmployeeGroup( Number(groupId), employee.id) }
			setEmployeeSelected(prevState => [...prevState, employee])
		}
	}

	const addEmployees = (employees: IEmployee[]) => {
		setEmployeeSelected( employees )
	}

	const removeEmployee = (employeeId: number) => {
		if(groupId) { EmployeesGroupsApiWrapper.deleteEmployeeGroup(Number(groupId), employeeId) }
		setEmployeeSelected((employee) => employee.filter((i) => i.id !== employeeId));
	};

	const removeEmployeeSelected = () => {
		setEmployeeSelected([]);
	};

	function handleCheck(employee: IEmployee) {
		return employeeSelected.some(e => e.id === employee.id);
	}


	if(loading) return <Loading />;

	return (
		<>
		 <Box sx={{
			width: '80%',
			margin: 'auto' 
			}}>
			<Header isEdit={isEdit}/>
			<Grid container spacing={8}  justifyContent="center" >
				<Grid item xs={6}>
					<EmployeesList employeeList={employeeList}  selectEmployee={selectEmployee}/>
				</Grid>
				<Grid item xs={6}>
					<Group employeeSelected={employeeSelected} removeEmployee={removeEmployee} removeEmployeeSelected={removeEmployeeSelected} groupId={groupId}  setEmployees={addEmployees}/>
				</Grid>
			</Grid>
			</Box>
		</>
	);
}
