import { createBrowserRouter } from 'react-router-dom'
import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from 'routes/PrivateRoutes'
import { PublicUserRoutes } from './UserRoutes/PublicUserRoutes'
import { PrivateUserRoutes } from 'routes/UserRoutes/PrivateUserRoutes'

export const router = createBrowserRouter([PublicRoutes,PrivateRoutes , PublicUserRoutes, PrivateUserRoutes])
