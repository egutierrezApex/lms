import React, { useEffect, useState } from 'react';
import { Box, Link, Typography } from '@material-ui/core';
import clsx from 'clsx';
import styles from './styles';
import EmployeeData from './employeeData';
import UserAvatar from 'components/avatar';
import Modal from 'components/modals/generic/modal';
import EmployeeList from 'components/employeeList';
import { IEmployee, ISeat } from 'types/shared';
import EmployeesApiWrapper from 'utils/apiWrappers/employeesApiWrapper';
import { useDispatch } from 'react-redux';
import { setSelectedEmpoyee } from 'redux/employees/actions';

const image =
	'https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg';
interface EmployeeAssignDataProps {
	employee: IEmployee;
	seat?: ISeat;
}
const EmployeeAssignData: React.FC<EmployeeAssignDataProps> = ({
	employee,
	seat = {},
}) => {
	const dispatch = useDispatch();
	const { employeeBox, remoteText, flexGrow, buttonModalStyle } = styles();
	const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
	const [employeeList, setEmployeeList] = useState<IEmployee[]>([]);
	const { fullName, projectName, workingRemotely } = employee;
	const {
		buildingName,
		floorName,
		zoneName,
		workStationName,
		description,
		id,
	} = seat;

	useEffect(() => {
		if (employee) {
			EmployeesApiWrapper.getEmployees({
				projectName: employee.projectName,
			}).then((employees) => setEmployeeList(employees));
		}
	}, [employee]);

	if (!employee) return null;

	const buttonModal = (
		<Link
			className={buttonModalStyle}
			component="button"
			color="secondary"
			onClick={() => setIsTeamModalOpen(true)}
		>
			{projectName}
		</Link>
	);

	const employeeData = [<b>{fullName}</b>, <>Project: {buttonModal}</>];
	const seatData = [
		`Building: ${buildingName}`,
		`Floor: ${floorName}`,
		`Zone: ${zoneName}`,
		`Workstation: ${workStationName}`,
		`Seat: ${description || id}`,
	];

	const onSelect = (employee: IEmployee) => {
		setIsTeamModalOpen(false);
		dispatch(setSelectedEmpoyee(employee));
	};

	return (
		<>
			<Box display="flex" justifyContent="center">
				<UserAvatar image={image} fullName={fullName} />
			</Box>
			<Box className={clsx(employeeBox, buildingName && flexGrow)}>
				{workingRemotely ? (
					<Typography className={remoteText}>Remote</Typography>
				) : (
					<Box p={2} />
				)}
				<EmployeeData items={employeeData} />
				{buildingName && (
					<>
						<Box p={3} />
						<EmployeeData items={seatData} />
					</>
				)}
			</Box>
			<Modal
				title={`${projectName} Team`}
				content={<EmployeeList employees={employeeList} onSelect={onSelect} />}
				isOpen={isTeamModalOpen}
				onClose={() => setIsTeamModalOpen(false)}
			/>
		</>
	);
};

export default EmployeeAssignData;
