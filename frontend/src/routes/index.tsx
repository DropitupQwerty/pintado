import { createBrowserRouter } from 'react-router-dom'
import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from 'routes/PrivateRoutes'

export const router = createBrowserRouter([PublicRoutes,PrivateRoutes])
