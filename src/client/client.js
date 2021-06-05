import React from "react";
import { hydrate } from "react-dom";
import "babel-polyfill";
import App from "./App";

//ReactDom.hydrate
hydrate(<App />, document.querySelector("#root"));
