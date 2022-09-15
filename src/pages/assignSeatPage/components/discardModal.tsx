import React from 'react';
import modal from 'components/modals/generic/modal';
import { Button } from '@material-ui/core';
import styles from '../styles';

interface discardModalProps {
	fullName: string;
	isOpen: boolean;
	onClose: () => void;
	onDiscard: () => void;
}

const DiscardModal: React.FC<discardModalProps> = ({
	fullName,
	isOpen,
	onClose,
	onDiscard,
}) => {
	const classes = styles();
	const title = 'Discard Changes';
	const content = (
		<>
			<p>
				Are you sure you want to discard changes on the seat assigned to{' '}
				<b>{fullName}</b>?
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
						onDiscard();
						onClose();
					}}
				>
					Discard
				</Button>
			</div>
		</>
	);

	return modal({ title, content, onClose, isOpen });
};

export default DiscardModal;
