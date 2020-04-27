import withRoot from '../withRoot';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link, Redirect } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../actions/cart'
import Recipe from './Recipe'
import { List,
        ListItem,
        Box,
        Button, 
        Typography,
        Container, 
        CssBaseline,
        makeStyles,
        ListItemText,
        Divider,
        IconButton} from '@material-ui/core';
    import Image from 'material-ui-image';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      paddingTop:'6%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    cartImage:{
        width:'30%',
        height:'30%',
        borderRadius: '50%',
        marginRight: theme.spacing(3)
    },
    floatRight:{
        float:'right'
    }
  }));

const Cart= (props) => {
    //to remove the item completely
    const { isAuthenticated } = props;
    const handleRemove = (id)=>{
        props.removeItem(id);
    }
    //to add the quantity
    const handleAddQuantity = (id)=>{
        props.addQuantity(id);
    }
    //to substruct from the quantity
    const handleSubtractQuantity = (id)=>{
        props.subtractQuantity(id);
    }

    const classes = useStyles();
    if(!isAuthenticated){
        return <Redirect to="/signIn" />
    }
       
    return(
            <Container>
                <CssBaseline />
                <div className="cart">
                    <Typography variant="h5">You have ordered:</Typography>
                    {console.log(props)}
                    <List className={classes.root} >
                  {  props.items.length ?
        (  props.items.map(item=>{
            return(
                    <ListItem alignItems="flex-start" key={item.id}>
                        <Box className={classes.cartImage}>
                            <Image src={item.pImgLink} alt={item.pImgLink}  />
                        </Box>
                        <ListItemText
                            primary= {<Typography variant="h6">{item.pName}</Typography>}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                    >
                                        {item.pDetails}
                                    </Typography>
                                    <Typography
                                    variant="body1"
                                    className={classes.floatRight}
                                    color="textPrimary"
                                    align="right"
                                    >
                                        Price: {item.price}$
                                    </Typography>
                                    <Divider />
                                    <Typography
                                    component="p"
                                    variant="body1"
                                    className={classes.inline}
                                    color="textPrimary"
                                    >
                                        Quantity: {item.quantity}
                                    </Typography>
                                    <div className="add-remove">
                                            <IconButton onClick={()=>{handleAddQuantity(item)}}><ArrowDropUpIcon /></IconButton>
                                            <Link href="/cart"><IconButton onClick={()=>{handleSubtractQuantity(item)}}><ArrowDropDownIcon /></IconButton></Link>
                                    </div>
                                        <Button color="secondary"
                                                variant="contained"
                                                size="medium"
                                                className={classes.button}
                                                onClick={()=>{handleRemove(item)}
                                                }>Remove
                                        </Button>
                                </React.Fragment>
                            }
                        />
                        <Divider />
                    </ListItem>
                    )
                })
        ):             
        (
            <p>No items</p>
        )}
                    </List>
                <Divider />
                <br/>
                </div> 
                <Recipe />          
            </Container>
       )
    }


const mapStateToProps = (state)=>{
    return{
        items: state.cart.addedItems,
        products: state.products.products,
        isAuthenticated: state.auth.isAuthenticated
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRoot(Cart))