// import loadable from "@loadable/component";
import React from "react";
import { renderRoutes } from "react-router-config";
import loadable from "react-loadable-visibility/loadable-components";
// import HeaderComponent from "../components/headerComponent/headerComponent";
const HeaderComponent = loadable(
  () => import("../components/headerComponent/headerComponent"),
  {
    ssr: true,
  }
);

const Main = ({ route }) => {
  return (
    <div>
      <HeaderComponent />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default Main;
