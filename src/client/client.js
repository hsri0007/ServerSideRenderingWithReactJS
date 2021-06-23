import React from "react";
import { hydrate } from "react-dom";
import loadable from "react-loadable-visibility/loadable-components";
import { loadableReady } from "@loadable/component";
// import App from "./App";
const App = loadable(() => import("./App"), { ssr: true });

// hydrate(<App />, document.querySelector("#root"));

loadableReady(() => {
  hydrate(<App />, document.querySelector("#root"));
});

// const App = lazy(() => import("./App"));
//ReactDom.hydrate
// hydrate(
//   <Suspense fallback={<div>Loading...</div>}>
//     <App />
//   </Suspense>,
//   document.querySelector("#root")
// );
