import React from "react";
import { Box, Button } from "@material-ui/core";
import CheckboxInput from "../../form/checkbox";
import styles from "./styles";

type ContentProps = {
  buildingName: string;
};

type FooterProps = {
  asDraft: boolean;
  onDraftChange: (newValue: boolean) => void;
  onCancel: () => void;
  onSave: () => void;
};

const BuildingCloneModalContent = ({ buildingName }: ContentProps) => {
  return (
    <p>
      Are you sure you want to clone <strong>{buildingName}</strong> building?
    </p>
  );
};

const BuildingCloneModalFooter = ({
  asDraft,
  onDraftChange,
  onCancel,
  onSave,
}: FooterProps) => {
  const { optionsBox, buttonsBox, button, checkbox } = styles();
  return (
    <Box className={optionsBox}>
      <Box className={checkbox}>
        <CheckboxInput
          checked={asDraft}
          label="As Draft"
          onChange={() => onDraftChange(!asDraft)}
        />
      </Box>
      <Box className={buttonsBox}>
        <Button
          variant="outlined"
          color="secondary"
          className={button}
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginLeft: "16px" }}
          onClick={onSave}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export { BuildingCloneModalContent, BuildingCloneModalFooter };
