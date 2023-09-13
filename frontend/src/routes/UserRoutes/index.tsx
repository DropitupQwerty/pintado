import React from 'react'
import { RouteObject } from 'react-router-dom'
import Container from './Container'


import { Item } from 'pages/User/Item'
import { Home } from 'pages/User/Home'
import { ShoppingCart } from 'pages/User/ShoppingCart'
import { Register } from 'pages/User/Register'




export const UserRoutes: RouteObject = {
    element: <Container />,
    children: [
        {
            path:'*',
            element : <h1>Page is on progress</h1>
        },
        { 
            index:true,
            element :  <Home/>
        },
        { 
            path : '/:author/:category/:productId',
            element : <Item/>
        },
        { 
            path : 'cart',
            element : <ShoppingCart/>
        },
        { 
            path : 'register',
            element : <Register/>
        },
    ],
}
