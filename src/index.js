import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import {loadState, saveState, destroyState} from './api/localStorage';
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { verifyAuth } from "./actions";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

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
const store = configureStore(persistedState);
ReactDOM.render(
    (<Provider store={store}><App/></Provider>),
    document.querySelector("#root")
);