import React from "react";
import { lazy } from "react";
// import { RouteObject } from "react-router-dom";
const Home = lazy(() => import('@/views/home'));
const Login = lazy(() => import('@/views/login'));

export interface RouteObject {
  caseSensitive?: boolean;
  children?: RouteObject[];
  component?: React.ReactNode;
  index?: boolean;
  path?: string;
  auth?: boolean;
}

const routes: RouteObject[] = [
  {
    path: "/home",
    component: <Home />,
    children: [
      {
        path: "/home/aa",
        component: <Login />,
      },
    ],
  },
  {
    path: "/t",
    component: <Home />,
  },
];

export default routes;