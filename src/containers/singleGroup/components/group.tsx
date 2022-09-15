import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { ReactComponent as ApexRemoveIcon } from 'assets/icons/close.svg';
import styles from '../style';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, makeStyles } from '@material-ui/core';
import { IEmployee, IEmployeeGroup } from 'types/shared';
import GroupsApiWrapper from 'utils/apiWrappers/groupsApiWrapper';
import { IGroup } from 'types/shared';
import EmployeesGroupsApiWrapper from 'utils/apiWrappers/EmployeesGroupsApiWrapper';

interface IEmployeeList {
	employeeSelected: IEmployee[];
	groupId: string | undefined;
	setEmployees: any;
	removeEmployee: any;
	removeEmployeeSelected: any;
}

const useStyles = makeStyles({
	input: {
		color: '#EE9F2D',
		fontWeight: 'bold',
		fontsize: '16px'
	}
});

export default function Group(props: IEmployeeList) {
	const navigate = useNavigate();
	const classes = useStyles();
	const { subtext } = styles();
	const [group, setGroup] = useState<IGroup>();
	const [groupName, setGroupName] = useState<string | undefined>('');
	const [employees, setEmployees] = useState<IEmployee[]>();

	const fetchGroup = async () => {
		GroupsApiWrapper.getGroupData(Number(props.groupId))
			.then((group) => {
				setGroup(group);
				setGroupName(group?.name);
			})
			.catch(function (e) {
				console.log(e);
			});
	};

	const fetchEmployeesGroup = async () => {
		EmployeesGroupsApiWrapper.getEmployeesGroups(Number(props.groupId))
			.then((employees) => {
				// setEmployees(employees);
				props.setEmployees(employees);
			})
			.catch(function (e) {
				console.log(e);
			});
	};

	const createGroup = () => {
		console.log({ employee: props.employeeSelected, name: groupName });
	};

	const handleCancel = () => {
		setGroupName('');
		setEmployees([]);
		props.removeEmployeeSelected();
		if (props.groupId) {
			navigate('/groups/create');
		}
	};

	useEffect(() => {
		if (props.groupId) {
			fetchGroup();
			fetchEmployeesGroup();
		}
	}, [props.groupId]);

	const onSubmit = async () => {
		if (groupName) {
			const group = {
				name: groupName.trim(),
				description: '',
				active: true,
				links: []
			};
			if(!props.groupId) {
				await GroupsApiWrapper.postGroup(group)
					.then((group) => {
						console.log(group);
						props.employeeSelected.forEach(async (emp) => {
							await EmployeesGroupsApiWrapper.postEmployeeGroup(group?.id, emp.id).then((resp) => {
								console.log(resp);
							});
							if (props.employeeSelected[props.employeeSelected.length - 1] === emp) {
								console.log('Last item');
								navigate('/groups');
							}
						});
					})
					.catch(function (e) {
						console.log(e);
					})
			} else {
				await GroupsApiWrapper.putGroup({...group, id: Number(props.groupId)})
				.then((group) => {
					console.log(group);
					navigate('/groups');
				})
				.catch(function (e) {
					console.log(e);
				})
			}
				
		}
	};

	return (
		<Card>
			<CardContent>
				<form>
					<TextField
						fullWidth
						inputProps={{ className: classes.input }}
						placeholder="Insert group name"
						id="lmsGroupNampeInput"
						label="Group Name"
						variant="standard"
						value={groupName}
						onChange={(e) => setGroupName(e.target.value)}
					/>
				</form>
				<List>
					{props.employeeSelected.map((employee) => (
						<ListItem alignItems="flex-start" key={employee.id}>
							<ListItemAvatar>
								<Avatar alt={employee.fullName} />
							</ListItemAvatar>
							<ListItemText
								primary={<Box fontWeight="fontWeightBold">{employee.fullName}</Box>}
								secondary={
									<React.Fragment>
										<Typography component="span" variant="body2">
											{employee.projectName}
										</Typography>
									</React.Fragment>
								}
							/>
							<IconButton aria-label="comment" onClick={() => props.removeEmployee(employee.id)} id="lmsGroupRemoveIconButton">
								<ApexRemoveIcon />
							</IconButton>
						</ListItem>
					))}
					{props.employeeSelected && props.employeeSelected.length ? (
						<p className={subtext}>{props.employeeSelected.length} Employees added</p>
					) : (
						<p className={subtext}>No employees added</p>
					)}
				</List>
			</CardContent>
			<Box textAlign={'end'} p={2}>
				<Box paddingRight={2} display={'inline'}>
					<Button variant="outlined" color="secondary" onClick={handleCancel} id="lmsGroupCancelButton">
						Cancel
					</Button>
				</Box>
				<Button type="submit" variant="contained" color="secondary" onClick={onSubmit} id="lmsGroupSaveButton">
					Save
				</Button>
			</Box>
		</Card>
	);
}
