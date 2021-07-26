import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './QuestionsPage.style';

function QuestionsPage() {
  const styles = useStyles();

  return (
    <Grid 
      container
      spacing={10}
      className={styles.root}
    >
      <Grid item xs={12} lg={12}>
        <Typography 
          variant="h4" 
          align="left"
          className={styles.text}
        >
          Question
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Button
          variant="contained"
          color="primary"
          className={styles.answersTop}
        >
          A
        </Button>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Button
          variant="contained"
          color="primary"
          className={styles.answersTop}
        >
          B
        </Button>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Button
          variant="contained"
          color="primary"
          className={styles.answersBottom}
        >
          C
        </Button>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Button
          variant="contained"
          color="primary"
          className={styles.answersBottom}
        >
          D
        </Button>
      </Grid>
    </Grid>
  )
}

export default QuestionsPage;