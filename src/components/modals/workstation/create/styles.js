import { makeStyles } from "@material-ui/core";

const useStyles = {
  optionsBox: {
    display: "grid",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonsBox: {
    justifyContent: "flex-end",
  },
  button: {
    marginLeft: "6px",
  },
  checkbox: {
    alignSelf: "flex-start",
  },
};

export default makeStyles(useStyles);
