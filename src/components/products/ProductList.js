import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid } from '@material-ui/core';
import Typography from '../../shared/Typography';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import uuid from 'uuid/v1';
import  ProductsToolbar from './ProductsToolbar';
import ProductCard from './ProductCard';

import yellowCarImage from '../../Images/car.jpeg';
import wallEImage from '../../Images/walle.jpeg';
import starWarsImage from '../../Images/star-wars.jpeg';
import gameBoyImage from '../../Images/game-boy.jpeg';
import giJoeImage from '../../Images/gi-joe.jpg';
import blocksImage from '../../Images/blocks.jpeg';
import woodenToysImage from '../../Images/wooden-toys.jpeg';

//import threeandUpImage from '../img/ages3andUp.jpg';


const mockData = [{
      id: uuid(),
      title: 'Yellow Toy Car',
      description:
        'Speed off with your gang with this fun vehicle!',
      imageUrl: yellowCarImage
    },
    {
      id: uuid(),
      title: 'Star Wars Robot',
      description:
        'Boys and girls can imagine racing into the galactic action to save the day!',
      imageUrl: starWarsImage
    },
    {
      id: uuid(),
      title: 'Game Boy',
      description:
        'The Classic Nintendo Gameboy!',
      imageUrl: gameBoyImage
    },
    {
      id: uuid(),
      title: 'GI Joe',
      description:
        'Articulated intelligence specialist action figure comes with a weapons and a display stand.',
      imageUrl: giJoeImage
    },
    {
      id: uuid(),
      title: 'Blocks',
      description:
        'Help kids develop strong motor skills and even resilience as they experiment with building, knocking blocks over, and building again.',
      imageUrl: blocksImage
    },
    {
      id: uuid(),
      title: 'Wooden Animal Toys',
      description:
        'The beautiful toy set can be used in many different ways to give your little one endless hours of fun and games!',
      imageUrl: woodenToysImage
    }
  ];

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const ProductList = () => {
  const classes = useStyles();

  const [products] = useState(mockData);

  return (
    <div className={classes.root}>
      <ProductsToolbar />
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {products.map(product => (
            <Grid
              item
              key={product.id}
              lg={4}
              md={6}
              xs={12}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.pagination}>
        <Typography variant="caption">1-6 of 20</Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ProductList;