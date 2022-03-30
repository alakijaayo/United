import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { useDispatch } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./Header.style";

function Header() {
  const styles = useStyles();
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch({ type: "resetState" });
  };

  return (
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>
        <Button onClick={onClick} href="/" data-cy="homepage" color="secondary">
          <HomeIcon />
        </Button>
        <Typography variant="h4" className={styles.title} data-cy="title">
          Manchester United Quiz
        </Typography>
        <Button color="secondary">
          <LeaderboardIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
