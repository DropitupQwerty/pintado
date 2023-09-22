import { AccountSettings } from 'pages/Seller/AccountSettings'
import { Dashboard } from 'pages/Seller/Dashboard'
import { ManageArtworks } from 'pages/Seller/ManageArtworks'
import { ManageOrders } from 'pages/Seller/ManageOrders'
import { Shipping } from 'pages/Seller/Shipping'
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
            path:'/seller/dashboard',
            element:<Dashboard/>
        },
        {
            path:'/seller/upload',
            element:<UploadArt/>
        },
        {
            path:'/seller/manage-orders',
            element:<ManageOrders/>
        },
        {
            path:'/seller/shipping',
            element:<Shipping/>
        },
        {
            path:'/seller/account-settings',
            element:<AccountSettings/>
        },
        {
            path:'/seller/manage-artworks',
            element:<ManageArtworks/>
        },
    ]
}