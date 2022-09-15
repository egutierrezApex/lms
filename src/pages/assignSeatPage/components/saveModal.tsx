import React from 'react';
import modal from 'components/modals/generic/modal';
import { Button } from '@material-ui/core';
import styles from '../styles';
import { IEmployee, ISeat } from 'types/shared';
import SeatsApiWrapper from 'utils/apiWrappers/seatsApiWrapper';
import { useNavigate } from 'react-router';

interface saveModalProps {
	selectedEmployee: IEmployee;
	selectedSeat: ISeat;
	isOpen: boolean;
	onClose: () => void;
}

const SaveModal: React.FC<saveModalProps> = ({
	selectedEmployee,
	selectedSeat,
	isOpen,
	onClose,
}) => {
	const navigate = useNavigate();
	const classes = styles();
	const title = 'Save assigned seat';
	const seat = selectedSeat.description || selectedSeat.id;

	const onAssign = async (selectedEmployee: IEmployee, selectedSeat: ISeat) => {
		const newSeatState: ISeat = {
			...selectedSeat,
			employeeId: selectedEmployee.id,
			seatState: { id: 2, name: 'In Use' },
		};

		await SeatsApiWrapper.putSeat(newSeatState);
		onClose();
	};

	const content = (
		<>
			<p>
				Are you sure you want to save the seat <b>{seat}</b> in{' '}
				<b>{selectedSeat.zoneName}</b> as {selectedEmployee.fullName} new seat?
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
						onAssign(selectedEmployee, selectedSeat).then(() => navigate(0));
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
						onAssign(selectedEmployee, selectedSeat).then(() =>
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

export default SaveModal;
