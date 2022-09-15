import { makeStyles, createStyles } from "@material-ui/styles";
import Colors from "../../utils/colors";

const card = {
  minHeight: "11.25rem",
  display: "flex",
};

export default makeStyles(() => createStyles({
  card: {
    ...card,
    textAlign: 'left',
    boxSizing: `border-box`,
    flexDirection: "column",
    padding: ".5rem",
    justifyContent: "space-between",
  },
  cardButton: {
    ...card,
    textAlign: 'left',
    minHeight: "11.25rem",
    display: "flex",
    flexDirection: "column",
    boxSizing: `border-box`,
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
}));
