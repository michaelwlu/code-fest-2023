import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: theme.spacing(10), // adjust as needed
    right: 0,
    bottom: 0,
    width: theme.spacing(30), // adjust as needed
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
}));

const RightPanel = ({ children }) => {
  const classes = useStyles();

  return <Paper className={classes.root}>{children}</Paper>;
};

export default RightPanel;
