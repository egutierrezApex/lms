import React, { Dispatch, SetStateAction } from 'react';
import GenericModal from 'components/modals/generic/modal';
import { IFloor } from 'types/shared';
import { Box, Button } from '@material-ui/core';
import useStyles from '../sideBar.styles';
import FloorsApiWrapper from '../../../../../utils/apiWrappers/floorsApiWrapper';

interface RemoveFloorModalProps {
	modalIsOpen: boolean;
	setModalIsOpen: Dispatch<SetStateAction<boolean>>;
	activeFloor: IFloor | undefined;
	setBuildingFloors: (floors: IFloor[]) => void;
	floors: IFloor[];
	isError: boolean;
	setIsError: (isError: boolean) => void;
}

function RemoveFloorModal({
  modalIsOpen,
  setModalIsOpen,
  activeFloor,
  setBuildingFloors,
  floors,
  isError,
  setIsError
}: RemoveFloorModalProps) {
  const classes = useStyles();  

  const handlerDeleteFloor = () => {    
    if (activeFloor){      
      FloorsApiWrapper.deleteFloor(activeFloor.id)
				.then((result) => {
					if (result) {
						const currentFloors = floors.filter((floor) => floor.id !== activeFloor.id);
						setBuildingFloors(currentFloors);
						setModalIsOpen(false);
					}
				})
				.catch(() => setIsError(true));
    }
  }

  return (
    <GenericModal
      title="Remove Floor"
      isOpen={modalIsOpen}
      onClose={() => setModalIsOpen(false)}
      content={
        <p>
          Are you sure you want to remove <strong>{activeFloor?.name}</strong>?
        </p>
      }
      isError={isError}
      errorMessage="Please first remove all the zones and workstations from the floor selected"
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
            disabled={isError}
            variant="contained"
            color="secondary"
            className={classes.modalButton}
            onClick={handlerDeleteFloor}
          >
            Save
          </Button>
        </Box>
      }
    />
  );
}

export default RemoveFloorModal;
