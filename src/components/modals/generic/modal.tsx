import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { IModalOptions } from "../../../types/AppInterfaces";
import "./modal.scss";

const useStyles = makeStyles(
  createStyles({
    modal: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "90%",
      maxWidth: "500px",
      backgroundColor: "#fff",
      border: " 1px solid #3A80EB",
      borderRadius: "5px",
      boxShadow: "0 5px 5px rgba(0,0,0,0.2)",
      padding: "10px 0",
      "&:focus": {
        outline: "none",
      },
      color: "#44546A",
    },
    title: {
      padding: 0,
      margin: "10px 0px 0px 15px",
      fontSize: "24px",
      fontWeight: "bolder",
    },
    hr: {
      width: "95%",
      border: "1px solid #F8F8F9",
    },
    content: {
      margin: "30px 35px",
      maxHeight: "400px",
      overflowY: "hidden",
      overflowX: "hidden",
      fontSize: "14px",
    },
    closeBtn: {
      position: "absolute",
      fontWeight: "bolder",
      fontSize: "20px",
      top: "5px",
      right: "12px",
      cursor: "pointer",
      color: "#D1D4DB",
    },
    footer: { padding: "15px" },
    error:{
      color:"#C64545",
      fontSize: "14px",
      margin: "0 35px",
    }
  })
);

export default function GenericModal({
  title,
  content,
  onClose,
  isOpen,
  footer,
  isError,
  errorMessage
}: IModalOptions) {
  const classes = useStyles();

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div id="modal" className={classes.modal}>
        <div id="modal-title" className={classes.title}>
          {title}
        </div>
        <hr className={classes.hr}></hr>
        <span className={classes.closeBtn} onClick={onClose}>
          &#x2715;
        </span>
        <div id="modal-description" className={classes.content}>
          {content}
        </div>
        {!!isError && <div className={classes.error}>{errorMessage}</div>}        
        {!!footer && <div className={classes.footer}>{footer}</div>}
      </div>
    </Modal>
  );
}
