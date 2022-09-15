import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Box, InputBase, SvgIcon } from '@material-ui/core';
import { ReactComponent as ApexSearchIcon } from 'assets/icons/search.svg';
import styles from '../style';
import EmployeesApiWrapper from 'utils/apiWrappers/employeesApiWrapper';
import { IEmployee } from 'types/shared';

interface IEmployeeList {
	employeeList: IEmployee[];
	selectEmployee: any;
}

export default function EmployeesList(props: IEmployeeList) {
	const { groupSearchWrapper, searchIcon, fullWidth, label } = styles();
	const [searchText, setSearchText] = useState('');

	const handleSearchChange = (e: any) => {
		const { value } = e.target;
		setSearchText(value);
	};

	return (
		<Card>
			<CardContent>
				<Typography gutterBottom align="left">
					All Employees
				</Typography>
				<form className={groupSearchWrapper}>
					<SvgIcon className={searchIcon}>
						<ApexSearchIcon />
					</SvgIcon>
					<InputBase
						name="searchTerm"
						id="lmsGroupSearchInput"
						placeholder={`Search by name`}
						autoComplete="off"
						className={fullWidth}
						classes={{
							root: 'inputRoot',
							input: 'inputText'
						}}
						inputProps={{ 'aria-label': 'search' }}
						onChange={handleSearchChange}
						value={searchText}
					/>
				</form>
				<Box mt={2} sx={{
				height: '500px',
				overflow: 'auto'
				}}>
				<List>
					{ props.employeeList.filter(e => e.fullName.toLowerCase().includes(searchText.toLowerCase())).map( (employee) => (
						<ListItem button alignItems="flex-start" key={employee.id} onClick={() => {props.selectEmployee(employee)}} id={`lmsGroupEmployeeButton${employee.id}`}>
								<ListItemAvatar>
									<Avatar alt={employee.fullName} />
								</ListItemAvatar>
								<ListItemText
									className={label}
									primary={<Box fontWeight="fontWeightBold">{employee.fullName}</Box>}
									secondary={
										<React.Fragment>
											<Typography component="span" variant="body2">
												{employee.projectName}
											</Typography>
										</React.Fragment>
									}
								/>
						</ListItem>
					))}
				</List>
				</Box>

			</CardContent>
		</Card>
	);
}
