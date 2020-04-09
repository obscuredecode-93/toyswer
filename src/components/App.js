import withRoot from '../withRoot';
import React, {useRef, createRef} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Header from './Header';
import Footer from './Footer';
import ProductHero from './ProductHero';
import {CssBaseline} from '@material-ui/core';
import ProductValues from './ProductValues';
import ProductCategories from './ProductCategories';
import ProductCTA from './ProductCTA';
import ProductSmokingHero from './ProductSmokingHero';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ProductList from './products/ProductList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { verifyAuth } from "../actions";
import rootReducer from "../reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Element } from 'react-scroll';

function configureStore(persistedState){
    const store = createStore(
        rootReducer,
        persistedState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
    store.dispatch(verifyAuth());
    return store;
}

const App = () => {
    const store = configureStore();
    const ref = useRef();
    console.log(ref);
    const refCategories = useRef();
    const refDonation = useRef();
    return(
        <Provider store={store} >
                <CssBaseline />
                <Header/>
            <BrowserRouter ref={ref}>
            <Switch>
                <Route path="/" exact>
                    <ProductHero categoryRef={refCategories}  />
                    <ProductValues />
                        <Element name="myScrollToElement"></Element>
                        <ProductCategories ref={refCategories} />
                    <ProductCTA />
                    <ScrollableAnchor id={'section2'}>
                        <ProductSmokingHero ref={refDonation} />
                    </ScrollableAnchor>
                </Route>
                <Route path="/signIn" exact>
                    <SignIn />    
                </Route>
                <Route path="/signUp" exact>
                    <SignUp />    
                </Route>
                <Route path="/ProductList" exact>
                    <ProductList />
                </Route>
            </Switch>
            </BrowserRouter>
                <Footer />
        </Provider>
    );
}

export default withRoot(App);