import { ManageArts } from 'pages/AdminPage/ManageArts'
import React from 'react'
import { RouteObject } from 'react-router-dom'
import { Container } from 'routes/AdminRoutes/AdminPivateRoutes/Container'

export const AdminPrivateRoute : RouteObject = {
    element : <Container/>,
    children : [
        {
            path:'/admin',
            element:<h1>This is admin</h1>
        },
        {
            path:'/admin/dashboard',
            element:<h1>admin Dashboard</h1>
        },
        {
            path:'/admin/user',
            element:<h1>User admininstration</h1>
        },
        {
            path:'/admin/seller',
            element:<h1>This is admin</h1>
        },
        {
            path:'/admin/art',
            element:<ManageArts/>
        },
        {
            path:'/admin/reports',
            element:<h1>This is admin</h1>
        },
        {
            path:'/admin/account-settings',
            element:<h1>This is admin</h1>
        },
    ]

}