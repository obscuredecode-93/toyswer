import React from 'react';
import {useState, useEffect} from 'react';
import { connect } from "react-redux";
import { required } from '../form/validation';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { addToCart } from '../../actions/cart';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  form:{
    width:'100%'
  },
  fab:{
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
  imageContainer: {
    height: 320,
    width: 320,
    margin: '0 auto',
    // border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  },
  quantityField:{
    color: theme.palette.icon
  }
}));

const ProductCard = props => {
  const { className, product, ...rest } = props;
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(0);
  const classes = useStyles();
  const handleClick = (id)=>{
    props.addToCart(id); 
  }
  
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.imageContainer}>
          <img
            alt="Product"
            className={classes.image}
            src={product.imageUrl}
          />
        </div>
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          {product.title}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {product.description}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Fab className={classes.fab} color="primary" aria-label="add" onClick={() => {handleClick(product.id)}}> 
          <AddShoppingCartIcon />
        </Fab>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired,
};
const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}
const mapDispatchToProps= (dispatch)=>{
  return{
      addToCart: (id)=>{dispatch(addToCart(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductCard);