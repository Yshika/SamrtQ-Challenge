import { lazy } from "react";

const RouteArr = [
  {
    route: "/",
    Component: lazy(() => import("../pages/home")),
  },
  {
    route: "/payment",
    Component: lazy(() => import("../pages/payment")),
  },
];

export default RouteArr;
