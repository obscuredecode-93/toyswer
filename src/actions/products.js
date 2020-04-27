import { RETRIEVE_PRODUCTS, RETRIEVE_PRODUCTS_SUCCESS } from './types'
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


export const getProductsByCategory = (category) => (dispatch) => {
    dispatch(retrieveProducts());
    axios.get(`/category/${category}`).then((response) => {
        console.log(response.data);
        const products = response.data;
        dispatch(retrieveProductsSuccess({products}));
    })
}