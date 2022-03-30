import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  (theme) => ({
    toolbar: {
      maxWidth: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    appBar: {
      top: "auto",
      bottom: 0,
    },
    nameText: {
      fontWeight: "bold",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    text: {
      fontWeight: "bold",
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
    },
  }),
  { name: "Footer" }
);
