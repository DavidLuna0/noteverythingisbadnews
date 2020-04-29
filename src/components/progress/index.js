import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: '#1188ff65',
  },
  barColorPrimary: {
    backgroundColor: '#1188ff',
  },
})(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function ProgressBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ColorLinearProgress />
    </div>
  );
}