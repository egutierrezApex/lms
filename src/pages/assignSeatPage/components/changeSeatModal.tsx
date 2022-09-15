import React from 'react';
import modal from 'components/modals/generic/modal';
import { Button } from '@material-ui/core';
import styles from '../styles';
import { IEmployee, ISeat } from 'types/shared';
import SeatsApiWrapper from 'utils/apiWrappers/seatsApiWrapper';
import { useNavigate } from 'react-router';

interface changeSetModalProps {
	selectedEmployee: IEmployee;
	selectedSeat: ISeat;
	isOpen: boolean;
	employeeCurrentSeat: ISeat;
	onClose: () => void;
}

const ChangeSeatModal: React.FC<changeSetModalProps> = ({
	selectedEmployee,
	selectedSeat,
	isOpen,
	employeeCurrentSeat,
	onClose
}) => {
	const navigate = useNavigate();
	const classes = styles();
	const title = 'Change assigned seat';
	const seat = selectedSeat.description || selectedSeat.id;

	const onAssign = async (
		selectedEmployee: IEmployee,
		selectedSeat: ISeat,
		employeeCurrentSeat: ISeat
	) => {
		const newSeatState: ISeat = {
			...selectedSeat,
			employeeId: selectedEmployee.id,
			seatState: { id: 2, name: 'In Use' }
		};

		const oldSeatState: ISeat = {
			...employeeCurrentSeat,
			employeeId: undefined,
			seatState: { id: 1, name: 'Available' }
		};
		await SeatsApiWrapper.putSeat(oldSeatState);
		await SeatsApiWrapper.putSeat(newSeatState);
		onClose();
	};

	const content = (
		<>
			<p>
				Employee <b>{selectedEmployee.fullName}</b> already has assigned the seat{' '}
				<b>{employeeCurrentSeat?.id}</b> in <b>{employeeCurrentSeat?.zoneName}</b>. Are you sure you
				want to change to the seat <b>{seat}</b> in <b>{selectedSeat.zoneName}</b> as{' '}
				{selectedEmployee.fullName} new seat?
			</p>
			<div className={classes.modal}>
				<Button
					className={classes.buttons}
					type="submit"
					variant="outlined"
					color="secondary"
					onClick={() => onClose()}
				>
					Cancel
				</Button>
				<Button
					className={classes.buttons}
					type="submit"
					variant="contained"
					color="secondary"
					onClick={() => {
						onAssign(selectedEmployee, selectedSeat, employeeCurrentSeat).then(() => navigate(0));
					}}
				>
					Assign
				</Button>
				<Button
					className={classes.buttons}
					type="submit"
					variant="contained"
					color="secondary"
					onClick={() => {
						onAssign(selectedEmployee, selectedSeat, employeeCurrentSeat).then(() =>
							navigate('/')
						);
					}}
				>
					Assign & go Home
				</Button>
			</div>
		</>
	);

	return modal({ title, content, onClose, isOpen });
};

export default ChangeSeatModal;
