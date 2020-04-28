import { RETRIEVE_PRODUCTS, RETRIEVE_PRODUCTS_SUCCESS, SEARCH_PRODUCTS } from './types'
import axios from '../api/products';

//action for retrieving products
const retrieveProducts = () => {
    return{
        type:RETRIEVE_PRODUCTS
    }
}

//action for successfully retrieving products
const retrieveProductsSuccess = (products) => {
    return{
        type:RETRIEVE_PRODUCTS_SUCCESS,
        products,
    }
}

//action for retrieve products failure
const searchProductsSuccess = (products) => {
    return{
        type:SEARCH_PRODUCTS,
        products,
    }
}

//dispatch for getting products by category
export const getProductsByCategory = (category) => (dispatch) => {
    dispatch(retrieveProducts());
    axios.get(`/category/${category}`).then((response) => {
        console.log(response.data);
        const products = response.data;
        dispatch(retrieveProductsSuccess({products}));
    })
}

//dispatch for getting all products
export const getProducts = () => (dispatch) => {
    dispatch(retrieveProducts());
    axios.get(`/all`).then((response) => {
        console.log(response.data);
        const products = response.data;
        dispatch(retrieveProductsSuccess({products}));
    })
}


//dispatch from search products based on term
export const searchProducts = searchTerm => dispatch => {
    console.log(searchTerm)
    axios.get(`/search/${searchTerm}`).then((response) => {
        const products = response.data;
        console.log(products);
        dispatch(searchProductsSuccess({ products }));
    })
}