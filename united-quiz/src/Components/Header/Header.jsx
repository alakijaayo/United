import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { useDispatch } from 'react-redux';
import { Button, Toolbar, Typography, Grid } from '@material-ui/core';
import useStyles from './Header.style';

function Header() {
  const styles = useStyles();
  const dispatch = useDispatch(); 

  const onClick = () => {
    dispatch({ type: 'resetState'})
  } 

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={3}>
          <Grid item xs={4} lg={4}>
            <Button 
              variant="outlined" 
              color="secondary"
              onClick={onClick}
              href="/"
            >
              Homepage
            </Button>
          </Grid>
          <Grid item xs={4} lg={4}>
            <Typography variant="h4" className={styles.title}>Manchester United Quiz</Typography>
          </Grid>
          <Grid item xs={4} lg={4}>
            <Button
              variant="outlined"
              color="secondary"
              className={styles.leaderboard}
            >
              Leaderboard
            </Button>  
          </Grid>
        </Grid>
      </Toolbar>  
    </AppBar>
  )
}

export default Header;