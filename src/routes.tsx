import { RouteObject } from "react-router";
import { Main, Store } from "./camping";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/store",
    element: <Store />
  },
]

export default routes;