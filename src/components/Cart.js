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
        ListItemAvatar,
        Avatar,
        Button, 
        Typography,
        Container, 
        CssBaseline,
        makeStyles,
        ListItemText,
        Divider,
        IconButton} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      paddingTop:'17%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
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
                        {console.log("Refreshing")}
                        <ListItemAvatar>
                            <Avatar src={item.pImgLink} alt={item.pImgLink} />
                        </ListItemAvatar>
                        <ListItemText
                            primary= {<Typography variant="h6">{item.pName}</Typography>}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                    component="p"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                    >
                                        {item.desc}
                                    </Typography>
                                    <Typography
                                    component="p"
                                    variant="body1"
                                    className={classes.inline}
                                    color="textPrimary"
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