import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
  },
}));

function AppBar(props) {
  const classes = useStyles();
  return <MuiAppBar elevation={0} className={classes.root} position="static" {...props} />;
}

AppBar.propTypes = {
  className: PropTypes.string.isRequired,
};

export default AppBar;