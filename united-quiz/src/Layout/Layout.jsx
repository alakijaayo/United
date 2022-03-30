import React from "react";
import { Box } from "@material-ui/core";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import useStyles from "./Layout.style";

function Layout(props) {
  const styles = useStyles();

  return (
    <Box className={styles.wrapper}>
      <Header />
      <Box className={styles.body}>{props.children}</Box>
      <Footer />
    </Box>
  );
}
export default Layout;
