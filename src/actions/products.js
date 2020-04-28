import { RETRIEVE_PRODUCTS, RETRIEVE_PRODUCTS_SUCCESS, SEARCH_PRODUCTS } from './types'
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
const searchProductsSuccess = (products) => {
    return{
        type:SEARCH_PRODUCTS,
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

export const searchProducts = searchTerm => dispatch => {
    console.log(searchTerm)
    axios.get(`/search/${searchTerm}`).then((response) => {
        const products = response.data;
        console.log(products);
        dispatch(searchProductsSuccess({ products }));
    })
}