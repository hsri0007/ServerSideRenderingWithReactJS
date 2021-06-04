import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers";

//server Side Redux store and configuration
export default () => {
  const Store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });

  return Store;
};
