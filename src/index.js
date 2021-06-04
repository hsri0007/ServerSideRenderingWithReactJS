import express from "express";
import "babel-polyfill";
import RenderHtml from "../helpers/renderer";
import { matchRoutes } from "react-router-config";
import AppRouter from "./client/AppRouter";
import Store from "./redux/store";
const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  //getting Server Side Redux Store
  const store = Store();

  const promises = matchRoutes(AppRouter, req.url).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    const content = RenderHtml(req, store);
    res.send(content);
  });
});

app.listen(3000, () => {
  console.log("running on port 3000");
});
