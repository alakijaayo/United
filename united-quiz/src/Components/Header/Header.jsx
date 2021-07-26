import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { useDispatch } from 'react-redux';
import { Button, Toolbar, Typography, Grid, Box } from '@material-ui/core';
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
        <div className={styles.root}>
          <Grid container align="center">
            <Box justifyContent="flex-start">
              <Button 
                variant="outlined" 
                color="secondary"
                onClick={onClick}
                href="/"
                data-cy="homepage"
              >
                Homepage
              </Button>
            </Box>
            <Grid item xs>
                <Typography 
                  variant="h4"
                  className={styles.title}
                  data-cy="title"
                >
                  Manchester United Quiz
                </Typography>
            </Grid>
              <Box justifyContent="flex-end">
                <Button
                  variant="outlined"
                  color="secondary"
                  className={styles.leaderboard}
                  data-cy="leaderboard"
                >
                  Leaderboard
                </Button>  
              </Box>
          </Grid>
        </div>
      </Toolbar>  
    </AppBar>
  )
}

export default Header;