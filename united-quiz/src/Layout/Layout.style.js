import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  (theme) => ({
    wrapper: {
      height: "100%",
      position: "relative",
    },
    body: {
      display: "flex",
      maxWidth: "100%",
    },
  }),
  { name: "Layout" }
);
