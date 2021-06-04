import React from "react";
import { Switch, Route, useParams, useHistory } from "react-router-dom";
import Home from "./home";
import UserPage from "../pages/userpage/userpage";

// const AppRouter = () => {
//   const id = useParams();

//   return (
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route path="/:id" component={Com} />
//     </Switch>
//   );
// };

// export default AppRouter;

export default [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    ...UserPage,
    path: "/:id",
  },
];
