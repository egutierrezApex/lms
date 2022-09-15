import React, { Dispatch, SetStateAction } from 'react';
import GenericModal from 'components/modals/generic/modal';
import { IBuilding } from 'types/shared';
import { Box, Button } from '@material-ui/core';
import useStyles from '../sideBar.styles';

interface RemoveBuildingModalProps {
	modalIsOpen: boolean;
	setModalIsOpen: Dispatch<SetStateAction<boolean>>;
	activeBuilding: IBuilding | undefined;
	deleteBuilding: () => void
}

function RemoveBuildingModal({
	modalIsOpen,
	setModalIsOpen,
	activeBuilding,
	deleteBuilding,
}: RemoveBuildingModalProps) {
	const classes = useStyles();
	return (
		<GenericModal
			title="Remove Building"
			isOpen={modalIsOpen}
			onClose={() => setModalIsOpen(false)}
			content={
				<p>
					Are you sure you want to remove{' '}
					<strong>{activeBuilding?.name}</strong>?
				</p>
			}
			footer={
				<Box className={classes.modalFooter}>
					<Button
						variant="outlined"
						color="secondary"
						className={classes.modalButton}
						onClick={() => setModalIsOpen(false)}
					>
						Cancel
					</Button>
					<Button
						variant="contained"
						color="secondary"
						className={classes.modalButton}
						onClick={() => {setModalIsOpen(false)
							            deleteBuilding()}}
					>
						Save
					</Button>
				</Box>
			}
		/>
	);
}

export default RemoveBuildingModal;
