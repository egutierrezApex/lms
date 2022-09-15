import React from 'react';
import List from '@material-ui/core/List';
import EmployeeListItem from './item';
import { IEmployee } from 'types/shared';

interface EmployeeListProps {
	employees: IEmployee[];
	onSelect: (employee: IEmployee) => void;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees, onSelect }) => (
	<List component="nav" style={{ background: 'white' }}>
		{employees.map((employee) => {
			const { name, lastName } = employee;
			return (
				<div key={employee.id} onClick={() => onSelect(employee)}>
					<EmployeeListItem fullName={`${name} ${lastName}`} />
				</div>
			);
		})}
	</List>
);

export default EmployeeList;
