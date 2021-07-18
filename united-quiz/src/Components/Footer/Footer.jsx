import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Grid, Toolbar, Typography } from '@material-ui/core';
import useStyles from './Footer.style';

function Footer() {
  const styles = useStyles()  
  return (
    <AppBar position="fixed" className={styles.appBar}>
      <Toolbar>
        <Grid container spacing={3}>
          <Grid item xs={4} lg={4}>
            <Typography variant="h5">Name:</Typography>
          </Grid>
          <Grid item xs={4} lg={4}>
              <Typography variant="h5" className={styles.question}>Question: 0/25</Typography>
          </Grid>
          <Grid item xs={4} lg={4}>
            <Typography variant="h5" className={styles.score}>Score: 0/25</Typography>  
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Footer;