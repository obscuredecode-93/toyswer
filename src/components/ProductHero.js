import React, {useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../shared/Button';
import Typography from '../shared/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import backgroundImage from '../img/backgroundBanner.jpg'
import { animateScroll } from 'react-scroll';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 100,
    marginTop: '1em',
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;
  console.log(props);
  useEffect(() => {
    animateScroll.scrollToTop({});
  });
  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Discover a new world for your child
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Buy new toys, donate old toys and earn up to 70% rebate
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="medium"
        className={classes.button}
        component="a"
        onClick={(event) => {
          animateScroll.scrollMore(1500, {
            smooth:true,
          });
        }}
      >
        Explore our wide catalogue
      </Button>
      <Button
        color="secondary"
        variant="contained"
        size="medium"
        className={classes.button}
        component="a"
        href="#section2"
        onClick={(event) => {
          animateScroll.scrollTo(2200, {
            smooth:true,
          });
        }}
      >
        Donate your toys now
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);