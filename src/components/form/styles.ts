import { makeStyles, createStyles } from "@material-ui/styles";

export default makeStyles(() =>
  createStyles({
    InputLabel: {
      "& .MuiInputLabel-root": {
        color: "#44546A",
      },
    },
    select: {
      "& .MuiInputBase-input": {
        textAlign: "left",
        font: "Libre Franklin",
        letterSpacing: "0px",
        color: "#C6C6C6",
        opacity: "1",
        fontWeight: "bold",
      },
      "& .MuiSelect-icon": {
        height: "9px",
        margin: "auto",
        padding: "6px",
      },
    },
  })
);
