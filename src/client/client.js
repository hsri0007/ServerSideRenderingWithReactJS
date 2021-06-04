import React from "react";
import { hydrate } from "react-dom";
import { renderRoutes } from "react-router-config";
import "babel-polyfill";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter.js";
import counterReducer from "../redux/reducers";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

//gettingInitialProps from server and setting to redux initial Store
const preloadedState = JSON.parse(JSON.stringify(window.INITIAL_STATE));

//Redux middleware
const middleware = [thunk];

//Client Side Redux store and configuration
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  preloadedState: preloadedState,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middleware),
});

//ReactDom.hydrate
hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(AppRouter)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
