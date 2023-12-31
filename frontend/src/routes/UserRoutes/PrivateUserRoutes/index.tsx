import React from 'react'
import { RouteObject } from 'react-router-dom'
import Container from './Container'


import { Item } from 'pages/User/Item'
import { ShoppingCart } from 'pages/User/ShoppingCart'
import { Register } from 'pages/User/Register'
import { Purchase } from 'pages/User/Purchase'
import { AccountSettings } from 'pages/User/AccountSettings'
import { PrivacySettings } from 'pages/User/AccountSettings/PrivacySettings'
import { SecuritySettings } from 'pages/User/AccountSettings/SecuritySettings'




export const PrivateUserRoutes: RouteObject = {
    element: <Container />,
    children: [
        { 
            path : '/:author/:category/:productId',
            element : <Item/>
        },
        { 
            path : 'purchase-item/:author/:category/:productId',
            element : <Purchase/>
        },
        { 
            path : 'cart',
            element : <ShoppingCart/>
        },
        { 
            path : 'register',
            element : <Register/>
        },
        { 
            path : 'account-settings',
            element : <AccountSettings/>,
            children: [
                {
                    path: '',
                    element:<PrivacySettings/>
                },
                {
                    path: 'security',
                    element:<SecuritySettings/>
                },
            ]
        },
    ],
}
