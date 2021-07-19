import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import React from 'react';
import useStyles from './Homepage.style'

function Homepage() {
  const styles = useStyles()
  const dispatch = useDispatch()

  const onChange = (e) => {
    dispatch({ type: 'addName', payload: e.target.value });
  }

  const updateQuestion = () => {
    dispatch({ type: 'updateQuestion'})
  }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} lg={12}>
        <Typography variant="h2" align="center" className={styles.text}>Welcome to the Manchester United Quiz</Typography>
      </Grid>  
      <Grid item xs={12} lg={12}>
        <Typography variant="h3" align="center" className={styles.text}>A Test of Knowledge for Fans of</Typography>
      </Grid> 
      <Grid item xs={12} lg={12}>
        <Typography variant="h3" align="center" className={styles.text}>the World's Best Football Club</Typography>
      </Grid>
      <Grid item xs={12} lg={12}>
        <Typography variant="h4" align="center" className={styles.text}>Please Insert Your Name:</Typography>
      </Grid> 
      <Grid item xs={3} lg={3}>
        <TextField 
          variant="outlined" 
          fullWidth 
          className={styles.inputName}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} lg={12}>
        <Typography variant="h4" align="center" className={styles.text}>Select Your Difficulty:</Typography>
      </Grid> 
      <Grid item xs={12} lg={4}>
        <Button 
          variant="contained" 
          color="primary" 
          className={styles.button}
          href="beginner"
          onClick={updateQuestion}
        >Beginner</Button>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Button 
          variant="contained" 
          color="primary" 
          className={styles.button}
          href="intermediate"
          onClick={updateQuestion}
        >Intermediate</Button>
      </Grid> 
      <Grid item xs={12} lg={4}>
        <Button 
          variant="contained" 
          color="primary" 
          className={styles.button}
          href="expert"
          onClick={updateQuestion}
        >Expert</Button>
      </Grid> 
    </Grid>  
  )  
} 

export default Homepage;