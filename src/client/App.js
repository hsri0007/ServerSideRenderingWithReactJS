import { ThemeProvider } from "@material-ui/styles";
import { configureStore } from "@reduxjs/toolkit";
import React from "react";

import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import theme from "../theme/theme";
import AppRouter from "./AppRouter";
import counterReducer from "../redux/reducers";
// const AppRouter = loadable(() => import("./AppRouter"), {
//   ssr: true,
// });

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

const App = () => {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>{renderRoutes(AppRouter)}</BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
