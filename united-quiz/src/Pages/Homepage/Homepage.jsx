import {
  Button,
  Container,
  Box,
  TextField,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import React from "react";
import useStyles from "./Homepage.style";
import Layout from "../../Layout/Layout";

function Homepage() {
  const styles = useStyles();
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch({ type: "addName", payload: e.target.value });
  };

  const updateQuestion = () => {
    dispatch({ type: "updateQuestion" });
  };

  const resetState = () => {
    dispatch({ type: "resetState" });
  };

  resetState();

  return (
    <Layout>
      <Container className={styles.container}>
        <Typography align="center" className={styles.text}>
          Welcome to the Manchester United Quiz
        </Typography>
        <Typography align="center" className={styles.text}>
          A Test of Knowledge for Fans of
        </Typography>
        <Typography align="center" className={styles.text}>
          the World's Best Football Club
        </Typography>
        <Typography align="center" className={styles.text}>
          Please Insert Your Name:
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          className={styles.inputName}
          onChange={onChange}
          data-cy="textfield"
        />
        <Typography variant="h3" align="center" className={styles.text}>
          Select Your Difficulty:
        </Typography>
        <Box className={styles.buttonBox}>
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            href="beginner"
            onClick={updateQuestion}
            data-cy="beginner"
          >
            Beginner
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            href="intermediate"
            onClick={updateQuestion}
            data-cy="intermediate"
          >
            Intermediate
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            href="expert"
            onClick={updateQuestion}
            data-cy="expert"
          >
            Expert
          </Button>
        </Box>
      </Container>
    </Layout>
  );
}

export default Homepage;
