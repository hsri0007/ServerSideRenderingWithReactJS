import AppRouter from "../src/client/AppRouter";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import theme from "../src/theme/theme";
import { ServerStyleSheets, ThemeProvider } from "@material-ui/core/styles";
import serializeJavascript from "serialize-javascript";

export default (req, store) => {
  const sheets = new ServerStyleSheets();

  const context = {};
  const content = ReactDOMServer.renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <StaticRouter context={context} location={req.path}>
            {renderRoutes(AppRouter)}
          </StaticRouter>
        </Provider>
      </ThemeProvider>
    )
  );

  const css = sheets.toString();
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>My page</title>
      <style class="initial" id="jss-server-side">${css}</style>
    </head>
      <body> 
          <div id="root">${content}</div>
              <script>
                    window.INITIAL_STATE = ${serializeJavascript(
                      store.getState()
                    )}
              </script>
          <script src="bundle.js" ></script>
      </body>
  </html>
`;
};
