import Home from "./home";
import UserPage from "../pages/userpage/userpage";
import AdminPage from "../pages/adminPage/adminPage";

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
    path: "/admin",
    component: AdminPage,
    exact: true,
  },
  {
    ...UserPage,
    path: "/:id",
  },
];
