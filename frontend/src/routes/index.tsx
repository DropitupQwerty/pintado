import { createBrowserRouter } from 'react-router-dom'
import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from 'routes/PrivateRoutes'
import { UserRoutes } from './UserRoutes'

export const router = createBrowserRouter([PublicRoutes,PrivateRoutes , UserRoutes])
