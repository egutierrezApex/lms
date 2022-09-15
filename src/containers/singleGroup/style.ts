import { makeStyles, createStyles } from "@material-ui/styles";
import Colors from "../../utils/colors";

export default makeStyles(() =>
  createStyles({
    groupSearchWrapper: {
      display: "flex",
      borderRadius: "4px",
      width: "100%",
      flex: "0.75",
      padding: "5px 0",
      backgroundColor: "#f0f0f0",
      position: "relative",
      alignItems: "center",
    },

    searchIcon: {
      height: "18px",
      margin: "0",
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

    subtext: {
      textAlign: "right",
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
    card: {
      backgroundColor: "#ffffff",
      padding: "5px",
    },
    fullWidth: {
      width: "100%"
    }
  })
);
