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
          <div className={styles.root}>
            <Grid container>
              <Grid item xs={12} lg={5}>
                <Typography 
                  variant="h4" 
                  className={styles.text}
                  data-cy="username"
                >
                  {`Name: ${username}`}
                </Typography>
              </Grid>
              <Grid item xs={12} lg={5}>
                  <Typography 
                    variant="h4" 
                    className={styles.text}
                    data-cy="question"
                  >
                    {`Question: ${questionNumber}/25`}
                  </Typography>
              </Grid>
              <Grid item xs={12} lg={2}>
                <Typography 
                  variant="h4"  
                  className={styles.text}
                  data-cy="score"
                >
                  {`My Score: ${score}/25`}
                </Typography>  
              </Grid>
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
  )
}

export default Footer;