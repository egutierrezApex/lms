import { makeStyles } from "@material-ui/styles";
import Colors from "../../utils/colors";

const card = {
  textAlign: "left",
  minHeight: "11.25rem",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
};
const useStyles = {
  card: {
    ...card,
    padding: ".5rem",
    justifyContent: "space-between",
  },
  cardButton: {
    ...card,
    backgroundColor: Colors.apexTeal1,
    color: Colors.apexWhite,
  },
  cardButtonAction: {
    flex: 1,
    padding: "2.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  titles: {
    fontWeight: "bold",
    fontFamily: "Libre Franklin",
    fontSize: "35px",
  },
  titlesSecondary: {
    fontWeight: "bold",
    fontFamily: "Libre Franklin",
    fontSize: "36px",
  },
  moreInfo:{
    fontFamily: "Libre Franklin",
    fontSize: "20px",
  }
};

export default makeStyles(useStyles);
