import { Box, Button } from '@material-ui/core';
import GenericModal from 'components/modals/generic/modal';
import React from 'react';
import { useDispatch } from 'react-redux';
import { selectTab, showTabs } from 'redux/home/home.action';
import useStyles from '../../components/modals/generic/modal.styles';

type ModalProps = {
	isOpen: boolean;
	onSubmit(): Promise<void>;
	onClose(): void;
};

export const SaveModal = ({ isOpen, onClose, onSubmit }: ModalProps) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const onCancel = () => {
		onClose();
	};

	const onSave = () => {
		onSubmit();
		onClose();
		dispatch(showTabs(false));
	};

	const onSaveAndContinue = () => {
		onSubmit();
		onClose();
		dispatch(selectTab(1));
	};
	return (
		<GenericModal
			title="Save Building"
			content={
				<div>
					are you sure you want to save <span className="bold">title</span> building?
				</div>
			}
			footer={
				<Box className={classes.modalFooter}>
					<Button
					 	id="lmsBuildingsCancelButtonBuilding"
						variant="outlined"
						color="secondary"
						className={classes.modalButton}
						onClick={onCancel}
					>
						Cancel
					</Button>
					<Button
						id="lmsBuildingsSaveButtonBuilding"
						variant="contained"
						color="secondary"
						className={classes.modalButton}
						onClick={onSave}
					>
						Save
					</Button>
					<Button
						id="lmsBuildingsSaveContinueButtonBuilding"
						variant="contained"
						color="secondary"
						className={classes.modalButton}
						onClick={onSaveAndContinue}
					>
						Save & Continue
					</Button>
				</Box>
			}
			onClose={onClose}
			isOpen={isOpen}
		/>
	);
};
