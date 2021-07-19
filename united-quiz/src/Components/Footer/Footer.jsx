import React from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import { Grid, Toolbar, Typography } from '@material-ui/core';
import useStyles from './Footer.style';

function Footer() {
  const styles = useStyles()  
  const score = useSelector((state) => state.score)
  const questionNumber = useSelector((state) => state.question)
  const username = useSelector((state) => state.name)

  return (
    <AppBar position="fixed" className={styles.appBar}>
      <Toolbar>
        <Grid container spacing={3}>
          <Grid item xs={4} lg={4}>
            <Typography variant="h5">{`Name: ${username}`}</Typography>
          </Grid>
          <Grid item xs={4} lg={4}>
              <Typography variant="h5" className={styles.question}>{`Question: ${questionNumber}/25`}</Typography>
          </Grid>
          <Grid item xs={4} lg={4}>
            <Typography variant="h5"  className={styles.score}>{`Score: ${score}/25`}</Typography>  
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Footer;