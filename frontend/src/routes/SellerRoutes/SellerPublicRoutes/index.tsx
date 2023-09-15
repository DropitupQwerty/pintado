import { Register } from 'pages/Seller/Register'
import React from 'react'
import { RouteObject } from 'react-router-dom'
import { Container } from 'routes/SellerRoutes/SellerPublicRoutes/Container'

export const SellerPublicRoutes : RouteObject = {
    element : <Container/> , 
    children : [
        {
            path:'/seller/register',
            element:<Register/>
        }
    ]
}
