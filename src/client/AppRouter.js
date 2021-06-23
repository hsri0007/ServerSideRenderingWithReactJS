import loadable from "react-loadable-visibility/loadable-components";
import { getUsers } from "../redux/actions";

const UserPage = loadable(() => import("../pages/userpage/userpage"), {
  ssr: true,
});

const HomePage = loadable(() => import("../pages/homePage/homePage"), {
  ssr: true,
});
const LoginPage = loadable(() => import("../pages/loginPage/loginPage"), {
  ssr: true,
});
const AdminPage = loadable(() => import("../pages/adminPage/adminPage"), {
  ssr: true,
});
const Nothing = loadable(() => import("./nothing"), {
  ssr: true,
});
const NotFoundPage = loadable(
  () => import("../pages/notFoundPage/notFoundPage"),
  {
    ssr: true,
  }
);

export default [
  {
    component: Nothing,
    routes: [
      {
        path: "/",
        component: HomePage,
        exact: true,
      },
      {
        path: "/login",
        component: LoginPage,
        exact: true,
      },
      {
        path: "/admin",
        component: AdminPage,
        exact: true,
      },
      {
        component: UserPage,
        path: "/:id",
        loadData: (store, url) => store.dispatch(getUsers(url)),
      },
      {
        component: NotFoundPage,
      },
    ],
  },
];
