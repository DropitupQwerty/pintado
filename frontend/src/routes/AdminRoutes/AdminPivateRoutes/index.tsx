import React from 'react'
import { RouteObject } from 'react-router-dom'
import { Container } from 'routes/AdminRoutes/AdminPivateRoutes/Container'

export const AdminPrivateRoute : RouteObject = {
    element : <Container/>,
    children : [
        {
            path:'/admin',
            element:<h1>This is admin</h1>
        }
    ]

}