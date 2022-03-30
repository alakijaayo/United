import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  (theme) => ({
    text: {
      fontWeight: "bold",
      padding: "20px",
      fontSize: "40px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "26px",
        padding: "0px",
      },
    },
    inputName: {
      margin: "20px",
      maxWidth: 450,
    },
    buttonBox: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
    container: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
    button: {
      margin: "25px",
      minHeight: "60px",
      minWidth: "250px",
      fontWeight: "bold",
      fontSize: "20px",
      "&:hover": {
        backgroundColor: "#000000",
      },
      [theme.breakpoints.down("sm")]: {
        margin: "10px",
        minHeight: "40px",
      },
    },
  }),
  { name: "Homepage" }
);
