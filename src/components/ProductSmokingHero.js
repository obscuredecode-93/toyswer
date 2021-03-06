import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../shared/Typography';
import { Redirect,useHistory } from 'react-router-dom';
const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  buoy: {
    width: 60,
  },
});

function ProductSmokingHero(props) {
  const { classes } = props;
  const history = useHistory();
  return (
    <Container className={classes.root} component="section">
      <Button className={classes.button} onClick={() => history.push("/aboutUs")}>
        <Typography variant="h4" component="span">
          Meet our Fabulous Team!!!
        </Typography>
      </Button>
      <Typography variant="subtitle1" className={classes.link}>
        We are here to help. Get in touch!
      </Typography>
      <img src="https://www.pinclipart.com/picdir/middle/130-1305533_graphic-transparent-stock-toy-duck-svg-png-icon.png" className={classes.buoy} alt="buoy" />
    </Container>
  );
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductSmokingHero);