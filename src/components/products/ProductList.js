import withRoot from "../../withRoot";
import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid } from '@material-ui/core';
import Typography from '../../shared/Typography';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ProductsToolbar from './ProductsToolbar';
import ProductCard from './ProductCard';
import {getProducts} from "../../actions";
import { connect } from 'react-redux';
import { mockData } from '../../mockData';

//import threeandUpImage from '../img/ages3andUp.jpg';




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

const ProductList = (props) => {
  const classes = useStyles();
  const { productsRetrieved,products} = props;
  const [cart, setCart] = React.useState([]);
  useEffect(()=> {
    const { dispatch } = props;
    dispatch(getProducts());
  },[])
  let renderList = (list) => {
    if(products.length === 0)
    {
      return <Typography>Loading</Typography>;
    }
    else {
      return (list.map(product => (
        <Grid
          item
          key={product.id}
          lg={4}
          md={6}
          xs={12}
        >
          <ProductCard product={product} />
        </Grid>
      )));
    }
  }
  return (
    <div className={classes.root}>
      <ProductsToolbar />
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          { renderList(products.products) }
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

function mapStateToProps(state){
  return{
    products: state.products.products,
    productsRetrieved: state.products.productsRetrieved
  }
}

export default connect(mapStateToProps)(withRoot(ProductList));