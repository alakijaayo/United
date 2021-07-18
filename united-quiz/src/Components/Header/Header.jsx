import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Button, Toolbar, Typography, Grid } from '@material-ui/core';
import useStyles from './Header.style';

function Header() {
  const styles = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={3}>
          <Grid item xs={4} lg={4}>
            <Button 
              variant="outlined" 
              color="secondary"
              href="/"
            >Homepage</Button>
          </Grid>
          <Grid item xs={6} lg={6}>
            <Typography variant="h4" className={styles.title}>Manchester United Quiz</Typography>
          </Grid>
        </Grid>
      </Toolbar>  
    </AppBar>
  )
}

export default Header;