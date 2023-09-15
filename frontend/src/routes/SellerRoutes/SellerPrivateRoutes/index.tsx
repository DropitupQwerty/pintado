import React from 'react'
import { RouteObject } from 'react-router-dom'
import { Container } from 'routes/SellerRoutes/SellerPrivateRoutes/Container'

export const SellerPrivateRoutes : RouteObject = {
    element : <Container/>,
    children: [
        {
            path:'/seller',
            element:<h1>This is a seller</h1>
        }
    ]
}