import AppRouter from "../src/client/AppRouter";
import React from "react";
import "babel-polyfill";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import theme from "../src/theme/theme";
import { ServerStyleSheets, ThemeProvider } from "@material-ui/core/styles";
import serializeJavascript from "serialize-javascript";
import CleanCSS from "clean-css";
import path from "path";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";

const cleanCSS = new CleanCSS();
export default (req, store) => {
  const sheets = new ServerStyleSheets();
  const statsFile = path.resolve("client/loadable-stats.json");
  const extractor = new ChunkExtractor({
    statsFile,
    entrypoints: ["main"],
  });
  const context = {};

  const content = ReactDOMServer.renderToString(
    <ChunkExtractorManager extractor={extractor}>
      {sheets.collect(
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <StaticRouter context={context} location={req.path}>
              {renderRoutes(AppRouter)}
            </StaticRouter>
          </Provider>
        </ThemeProvider>
      )}
    </ChunkExtractorManager>
  );
  // You can now collect your script tags
  const scriptTags = extractor.getScriptTags();

  let css = sheets.toString();
  if (css) {
    css = cleanCSS.minify(css).styles;
  }

  return `
  <!DOCTYPE html>
  <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>My page</title>
      <style class="initial" id="jss-server-side">${css}</style> 
    </head>
      <body style="margin:0;padding:0;box-sizing:border-box" > 
          <div id="root">${content}</div>     
              <script >
                    window.INITIAL_STATE = ${serializeJavascript(
                      store.getState()
                    )}
              </script>
              ${scriptTags}
      </body>
  </html>
`;
};
