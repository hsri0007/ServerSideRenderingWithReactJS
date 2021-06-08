import HomePage from "../pages/homePage/homePage";
import UserPage from "../pages/userpage/userpage";
import AdminPage from "../pages/adminPage/adminPage";
import Main from "./Main";
import NotFoundPage from "../pages/notFoundPage/notFoundPage";

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
    ...Main,
    routes: [
      {
        path: "/",
        component: HomePage,
        exact: true,
      },
      {
        path: "/admin",
        component: AdminPage,
        exact: true,
      },
      {
        ...UserPage,
        path: "/users",
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
