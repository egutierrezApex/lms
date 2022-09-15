import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import styles from './styles';

interface EmployeeDataProps {
	items: any[];
}

const EmployeeData: React.FC<EmployeeDataProps> = ({ items = [] }) => {
	const { dataItemText, dataItem } = styles();
	return (
		<List dense={true}>
			{items.map((item, index) => (
				<ListItem key={index} className={dataItem}>
					<ListItemText className={dataItemText}>{item}</ListItemText>
				</ListItem>
			))}
		</List>
	);
};

export default EmployeeData;
