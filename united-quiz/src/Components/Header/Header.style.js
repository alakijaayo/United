import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  (theme) => ({
    toolbar: {
      maxWidth: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    title: {
      fontWeight: "bold",
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
    },
  }),
  { name: "Header" }
);
