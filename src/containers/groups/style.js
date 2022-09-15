import { makeStyles } from "@material-ui/styles";
import Colors from "../../utils/colors";

const groupStyles = {
  groupSearchWrapper: {
    display: "flex",
    borderRadius: "4px",
    width: "100%",
    flex: "0.75",
    padding: "5px 0",
    backgroundColor: "#ffffff",
    position: "relative",
    alignItems: "center",
  },

  searchIcon: {
    height: "18px",
    margin: "auto",
    padding: "0 10px",
    width: "18px",
  },

  filterGroup: {
    border: "1px solid rgb(99, 99, 99)",
    borderRadius: "5px",
    width: "50px",
    padding: "3px",
  },

  filterIconSelect: {
    height: "15px",
  },

  header: {
    margin: "60px 10px 50px 10px",
  },

  label: {
    fontFamily: "Libre Franklin",
    fontWeight: "bold",
    color: Colors.apexBlue,
    fontSize: "26px",
  },

  content: {
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: Colors.apexBlueLighter,
    borderRadius: "10px",
  },
};

export default makeStyles(groupStyles);
