import {
    RETRIEVE_PRODUCTS,
    RETRIEVE_PRODUCTS_SUCCESS,
    RETRIEVE_PRODUCTS_FAILURE
} from '../actions/types';

export default (
    state={
        productsRetrieved:false,
        products:[]
    },
    action
) => {
    switch(action.type){
    case RETRIEVE_PRODUCTS:
        return {
            ...state,
            productsRetrieved:false,
        };
    case RETRIEVE_PRODUCTS_SUCCESS:
        return {
            ...state,
            productsRetrieved: true,
            products: action.products
        };
        default:
            //console.log("Inside");
            return state;
    }
};
