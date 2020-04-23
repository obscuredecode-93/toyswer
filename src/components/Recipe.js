import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import Typography from '../shared/Typography';
import Button from '../shared/Button';
import { withRouter } from 'react-router-dom';
//import { addShipping } from './actions/cartActions'
class Recipe extends Component{


    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    render(){
        return(
            <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-end">
                <Typography variant="body1" component="b">
                    Total: {this.props.total}$
                </Typography>
                { console.log(this.props)}
                <Button onClick={() => this.props.history.push("/checkout")}> Proceed to Checkout</Button>
            </Grid>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.cart.addedItems,
        total: state.cart.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Recipe))