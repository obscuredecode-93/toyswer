import { RETRIEVE_PRODUCTS, RETRIEVE_PRODUCTS_SUCCESS,RETRIEVE_PRODUCTS_FAILURE } from './types'
import { mockData } from '../mockData';
import axios from '../api/products';

const retrieveProducts = () => {
    return{
        type:RETRIEVE_PRODUCTS
    }
}

const retrieveProductsSuccess = (products) => {
    return{
        type:RETRIEVE_PRODUCTS_SUCCESS,
        products,
    }
}

const retrieveProductsFailure = () => {
    return{
        type:RETRIEVE_PRODUCTS_FAILURE,
    }
}

export const getProducts = () => (dispatch) => {
    dispatch(retrieveProducts());
    axios.get('/all').then((response) => {
        console.log(response.data);
        const products = response.data;
        dispatch(retrieveProductsSuccess({products}));
    })
}