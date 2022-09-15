import React, { useState } from "react";
import { Box, Link } from "@material-ui/core";
import styles from "./styles";
import GenericModal from "../modals/generic/modal";
import {
  BuildingCloneModalContent,
  BuildingCloneModalFooter,
} from "../modals/building-clone";

type options = "EDIT" | "CLONE" | "REMOVE" | "ADD FLOOR";

const BuildingOptions = () => {
  const { box, link, activeLink } = styles();
  const [modal, setModal] = useState(false);
  const [draft, setDraft] = useState(false);
  const [selectedOption, setSelectedOption] = useState<options>();

  const onEditClickHandler = () => {
    setSelectedOption("EDIT");
  };

  const onCloneClickHandler = () => {
    setSelectedOption("CLONE");
    setModal(!modal);
  };

  const onRemoveClickHandler = () => {
    setSelectedOption("REMOVE");
  };

  const onAddFloorClickHandler = () => {
    setSelectedOption("ADD FLOOR");
  };

  const sampleModal = (
    <GenericModal
      title="Clone Building"
      content={<BuildingCloneModalContent buildingName="MDC" />}
      isOpen={modal}
      onClose={() => setModal(false)}
      footer={
        <BuildingCloneModalFooter
          asDraft={draft}
          onDraftChange={setDraft}
          onCancel={() => setModal(false)}
          onSave={() => setModal(false)}
        />
      }
    />
  );

  return (
    <>
      <div id="only-for-demo" style={{ width: "300px", margin: "20px auto" }}>
        {sampleModal}
        <Box className={box}>
          <Link
            underline="none"
            className={selectedOption === "EDIT" ? activeLink : link}
            onClick={onEditClickHandler}
          >
            Edit
          </Link>
          <Link
            underline="none"
            className={selectedOption === "CLONE" ? activeLink : link}
            onClick={onCloneClickHandler}
          >
            Clone
          </Link>
          <Link
            underline="none"
            className={selectedOption === "REMOVE" ? activeLink : link}
            onClick={onRemoveClickHandler}
          >
            Remove
          </Link>
          <Link
            underline="none"
            className={selectedOption === "ADD FLOOR" ? activeLink : link}
            onClick={onAddFloorClickHandler}
          >
            + Floor
          </Link>
        </Box>
      </div>
    </>
  );
};
export default BuildingOptions;
