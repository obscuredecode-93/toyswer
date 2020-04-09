import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '../shared/Typography';

import threeandUpImage from '../img/ages3andUp.jpg';
import sixandUpImage from '../img/6andUp.jpg';
import twelveandUpImage from '../img/12andUp.jpg';
import apparelImage from '../img/Apparel.jpg';
import accesoriesImage from '../img/Accessories.jpg';
import electronicsImage from '../img/Electronics.jpg';
import comicsImage from '../img/comic.jpg';
import merchandiseImage from '../img/Merchandise.jpg';
import petToysImage from '../img/petToys.jpg';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        threeandUpImage,
      title: 'Ages 3 and Up',
      width: '40%',
    },
    {
      url:
        sixandUpImage,
      title: 'Ages 6 and Up',
      width: '20%',
    },
    {
      url:
        twelveandUpImage,
      title: 'Ages 12 and up',
      width: '40%',
    },
    {
      url:
        apparelImage,
      title: 'Apparel',
      width: '38%',
    },
    {
      url:
        accesoriesImage,
      title: 'Accesories',
      width: '38%',
    },
    {
      url:
        electronicsImage,
      title: 'Electronics',
      width: '24%',
    },
    {
      url:
        comicsImage,
      title: 'Comics',
      width: '40%',
    },
    {
      url:
        merchandiseImage,
      title: 'Merchandise',
      width: '20%',
    },
    {
      url:
        petToysImage,
      title: 'Pet Toys',
      width: '40%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Have a look at our exquisite collection
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                <Link href="/ProductList">{image.title}</Link> 
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);