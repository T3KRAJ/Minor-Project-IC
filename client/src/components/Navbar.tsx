import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {GoMarkGithub} from 'react-icons/go'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: 10,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    github: {
        width: 24,
        height: 24,
        color: "#fff"
    },
    content: {
        padding: '0 20'
    }
  }),
);

const Navbar:React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.content}>
          <Typography variant="h6" className={classes.title}>
            AI Image Classifier
          </Typography>
              <a href="https://github.com/T3KRAJ/Minor-Project-IC" target="_blank">
              <GoMarkGithub className={classes.github}/>
              </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;