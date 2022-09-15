import React, { useEffect, useState } from 'react';
import { Popover, Typography } from '@material-ui/core';
import { ISeat } from 'types/shared';
import useStyles from './styles';
import EmployeesApiWrapper from 'utils/apiWrappers/employeesApiWrapper';

interface seatInfoPopOverProps {
	anchorEl: SVGRectElement | null;
	seat: ISeat | null;
	onClose: () => void;
}

const SeatInfoPopOver: React.FC<seatInfoPopOverProps> = ({
	anchorEl,
	seat,
	onClose,
}) => {
	const [project, setProject] = useState('');
	useEffect(() => {
		if (seat?.employeeId) {
			setProject('');
			EmployeesApiWrapper.getEmployee(seat.employeeId).then((employee) =>
				setProject(employee.projectName)
			);
		}
	}, [seat]);
	const classes = useStyles();

	return (
		<Popover
			id="seat-popover"
			classes={{
				paper: classes.popOverOverride,
			}}
			elevation={0}
			style={{
				pointerEvents: 'none',
			}}
			open={Boolean(anchorEl)}
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'center',
				horizontal: 'left',
			}}
			transformOrigin={{
				vertical: 'center',
				horizontal: 'right',
			}}
			onClose={onClose}
			disableRestoreFocus
		>
			{seat && (
				<div className={classes.seatInfoContainer}>
					<Typography className={classes.seatInfo}>
						{seat.description || `Seat ID: ${seat.id}`}
					</Typography>
					<Typography className={classes.seatInfo}>
						{seat.firstName} {seat.lastName}
					</Typography>
					<Typography className={classes.seatInfo}>{project}</Typography>
				</div>
			)}
		</Popover>
	);
};

export default SeatInfoPopOver;
