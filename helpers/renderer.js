import AppRouter from "../src/client/AppRouter";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import serializeJavascript from "serialize-javascript";

export default (req, store) => {
  const context = {};
  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.path}>
        <div>{renderRoutes(AppRouter)}</div>
      </StaticRouter>
    </Provider>
  );
  return `
    <html>
    <head></head>
    <body> 
    <div id="root">${content}</div>
    <script>
    window.INITIAL_STATE = ${serializeJavascript(store.getState())}
    </script>
    <script src="bundle.js" ></script>
    </body>
    </html>
    `;
};
