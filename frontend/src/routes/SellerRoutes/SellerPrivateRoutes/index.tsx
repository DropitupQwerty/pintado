import { Dashboard } from 'pages/Seller/Dashboard'
import { UploadArt } from 'pages/Seller/UploadArt'
import React from 'react'
import { RouteObject } from 'react-router-dom'
import { Container } from 'routes/SellerRoutes/SellerPrivateRoutes/Container'

export const SellerPrivateRoutes : RouteObject = {
    element : <Container/>,
    children: [
        {
            path:'/seller',
            element:<Dashboard/>
        },
        {
            path:'/seller/upload',
            element:<UploadArt/>
        },
    ]
}