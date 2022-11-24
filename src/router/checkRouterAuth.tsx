import React, { Suspense, useEffect, useState } from "react";
import { NavigateFunction, useLocation, useNavigate, useRoutes } from "react-router-dom";
import { message } from "antd";
import routes from "./routes";
export interface RouteObject {
  caseSensitive?: boolean;
  children?: RouteObject[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
  auth?: boolean;
}
// 根据路径获取路由 
const checkAuth = (routers:any, path:String)=>{
  for (const data of routers) {
    if (data.path==path) return data
    if (data.children) {
      const res:any = checkAuth(data.children, path)
      if (res) return res
    }
  }
  return null
}

// 路由处理方式
const generateRouter = (routers:any) => {
  return routers.map((item:any) => {
    if (item.children) {
      item.children = generateRouter(item.children)
    }
    item.element = <Suspense fallback={
      <div>加载中...</div>
    }>
      {/* 把懒加载的异步路由变成组件装载进去 */}
      <item.component />
    </Suspense>
    return item
  })
}
  
const Router = () => useRoutes(generateRouter(routes))
const checkRouterAuth = (path:String)=>{
  let auth = null
  auth = checkAuth(routes,path)
  return auth
}
export{ Router,checkRouterAuth}
