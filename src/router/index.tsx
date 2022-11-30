import React from "react";
import { lazy } from "react";
import { Navigate } from "react-router-dom";

// React 组件懒加载

// 快速导入工具函数
const lazyLoad = (moduleName: string) => {
  const Module = lazy(() => import(`@/views/${moduleName}`));
  return <Module />;
};
// 路由鉴权组件
// const AppraisalInit = () => {
//   const token = localStorage.getItem("token");
//   return token ? lazyLoad("sand-box") : <Navigate to="/login" />;
// };
// const Appraisal = ({ children }: any) => {
//   const token = localStorage.getItem("token");
//   return token ? children : <Navigate to="/login" />;
// };

interface Router {
  name?: string;
  path: string;
  children?: Array<Router>;
  element: any;
}

const routes: Array<Router> = [
  {
     path:"/",
     element: lazyLoad("login")
  },
  {
    path: "/login",
    element: lazyLoad("login"),
  },
  {
    path: "/home",
    element: lazyLoad("home"),
  },
  {
    path: "*",
    element: lazyLoad("not-found"),
  },
];

export default routes;
