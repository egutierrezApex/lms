import { makeStyles } from "@material-ui/core";
import { colorsConfig } from "../../utils/colors";

const useStyles = {
  box: {
    display: "flex",
    justifyContent: "space-between",
    border: `1px solid ${colorsConfig.Selected.color}`,
    borderRadius: "4px",
    paddingTop: "4px",
    paddingBottom: "4px",
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "12px",
  },
  link: { cursor: "pointer" },
  activeLink: { cursor: "pointer", fontWeight: "bold" },
};

export default makeStyles(useStyles);
