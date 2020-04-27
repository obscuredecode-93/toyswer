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

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";



import UsersTable from "./admin/usersTable";
import ProductsTable from "./admin/productsTable";
import NotFound from "./NotFound";


const App = (props) => {
  const {isAuthenticated, role} = props;
  const PrivateRoute = ({component:Component, ...rest}) => (
    <Route {...rest} render={(props) => (
      isAuthenticated === true && role === "admin" ? 
        <Component {...props} />: <Redirect to='/signIn' />
    )} />
  );
  
  return (
    <React.Fragment>
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
          <PrivateRoute path="/usersTable" exact component={UsersTable} />
          <PrivateRoute path="/productsTable" exact component={ProductsTable} />
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/checkout" exact>
           <Checkout /> 
          </Route>
          <Route path="/aboutUs" exact>
           <AboutUs /> 
          </Route>
          <Route path="/notFound" exact>
           <NotFound /> 
          </Route>
          <Route path="*" exact>
           <NotFound /> 
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return{
    isAuthenticated: state.auth.isAuthenticated,
    role: state.auth.userShort.role
  }
}

export default connect(mapStateToProps)(withRoot(App));
