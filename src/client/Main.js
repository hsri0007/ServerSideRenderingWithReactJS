import React from "react";
import { renderRoutes } from "react-router-config";
import HeaderComponent from "../components/headerComponent/headerComponent";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(() => ({
//   root: {
//     margin: 0,
//     padding: 0,
//     boxSizing: "border-box",
//   },
// }));

const Main = ({ route }) => {
  // const classes = useStyles();
  return (
    <div>
      <HeaderComponent />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default { component: Main };
