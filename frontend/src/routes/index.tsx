import { createBrowserRouter } from 'react-router-dom'


import { PublicRoutes } from './PublicRoutes'
import { PublicUserRoutes } from './UserRoutes/PublicUserRoutes'
import { PrivateUserRoutes } from 'routes/UserRoutes/PrivateUserRoutes'
import { AdminPrivateRoute } from 'routes/AdminRoutes/AdminPivateRoutes'
import { SellerPrivateRoutes } from 'routes/SellerRoutes/SellerPrivateRoutes'

export const router = createBrowserRouter([
    PublicRoutes,
    PublicUserRoutes, 
    PrivateUserRoutes,
    AdminPrivateRoute,
    SellerPrivateRoutes
])
