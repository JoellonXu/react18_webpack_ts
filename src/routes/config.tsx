import { lazy } from 'react'
import { USER_ROLE_ENUM } from '@/constants/user'
import { RouteProps } from '@/types/routes'
import { Navigate, Outlet } from 'react-router-dom'
import { lazyLoad } from './index'
import React from 'react'

const routes: RouteProps[] = [
  {
    path: '/',
    element: <Outlet />,
    children: [
        
      { path:'/home', element: <Navigate replace to='/home' /> },
      {
        path: 'login',
        element: lazyLoad(lazy(() => import('@/views/login')))
      },
      {
        path: 'settings',
        meta: {
          auth: true,
          roles: [USER_ROLE_ENUM.ADMIN, USER_ROLE_ENUM.GUEST]
        },
        element: lazyLoad(lazy(() => import('@/views/settings')))
      },
      {
        path: 'user-center',
        element: lazyLoad(lazy(() => import('@/views/userCenter'))),
        meta: {
          auth: true,
          unRoles: [USER_ROLE_ENUM.GUEST]
        },
        children: []
      }
    ]
  },
  { path: '*', element: lazyLoad(lazy(() => import('@/views/404'))) }
]

export default routes