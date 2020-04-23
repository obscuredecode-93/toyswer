import withRoot from '../withRoot';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom'
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
    let addedItems = props.items.length ?
        (  props.items.map(item=>{
            return(
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar src={item.imageUrl} alt={item.imageUrl} />
                        </ListItemAvatar>
                        <ListItemText
                            primary= {item.title}
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
                                    <Typography
                                    component="p"
                                    variant="body1"
                                    className={classes.inline}
                                    color="textPrimary"
                                    >
                                        Quantity: {item.quantity}
                                    </Typography>
                                    <div className="add-remove">
                                            <Link to="/cart"><IconButton onClick={()=>{handleAddQuantity(item.id)}}><ArrowDropUpIcon /></IconButton></Link>
                                            <Link to="/cart"><IconButton onClick={()=>{handleSubtractQuantity(item.id)}}><ArrowDropDownIcon /></IconButton></Link>
                                    </div>
                                        <Button className="waves-effect waves-light btn pink remove" onClick={()=>{handleRemove(item.id)}}>Remove</Button>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    )
                })
        ):             
        (
            <p>No items</p>
        )
       
    return(
            <Container>
                <CssBaseline />
                <div className="cart">
                    <Typography variant="h5">You have ordered:</Typography>
                    <List className={classes.root}>
                        {addedItems}
                    </List>
                </div> 
                <Recipe />          
            </Container>
       )
    }


const mapStateToProps = (state)=>{
    return{
        items: state.cart.addedItems,
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