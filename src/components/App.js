import withRoot from "../withRoot";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductHero from "./ProductHero";
import { CssBaseline } from "@material-ui/core";
import ProductValues from "./ProductValues";
import ProductCategories from "./ProductCategories";
import ProductCTA from "./ProductCTA";
import ProductSmokingHero from "./ProductSmokingHero";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Cart from './Cart';
import Checkout from './Checkout';
import ProductList from "./products/ProductList";
import AboutUs from './AboutUs';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import thunkMiddleware from "redux-thunk";
import { verifyAuth } from "../actions";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import UsersTable from "./admin/usersTable";
import ProductsTable from "./admin/productsTable";
import {loadState, saveState, destroyState} from '../api/localStorage';

const persistedState = loadState();
function configureStore(persistedState) {
  const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );

  store.subscribe(() => {
    saveState(store.getState());
    setTimeout(() => {destroyState()},86400);
  })

  store.dispatch(verifyAuth());
  return store;
}

const App = () => {
  const store = configureStore(persistedState);
  return (
    <Provider store={store}>
      <CssBaseline />
      <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/" exact>
            <ProductHero />
            <ProductValues />
            <ProductCategories />
            <ProductCTA />
            <ProductSmokingHero />
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
          <Route path="/usersTable" exact>
            <UsersTable />
          </Route>
          <Route path="/productsTable" exact>
            <ProductsTable />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/checkout" exact>
           <Checkout /> 
          </Route>
          <Route path="/aboutUs" exact>
           <AboutUs /> 
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </Provider>
  );
};

export default withRoot(App);
