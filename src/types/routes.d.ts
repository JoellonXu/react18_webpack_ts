import type { RouteObject } from 'react-router-dom'
import { USER_ROLE_ENUM } from '@/constants/user'

// 扩展Route定义
export interface RouteProps extends RouteObject {
  path: string
  meta?: {
    auth?: boolean
    roles?: USER_ROLE_ENUM[]
    unRoles?: USER_ROLE_ENUM[]
  }
  element: React.ReactNode
  children?: RouteProps[]
}