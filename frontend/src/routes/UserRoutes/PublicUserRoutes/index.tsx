import React from 'react'
import { RouteObject } from 'react-router-dom'
import Container from './Container'

import { Login } from 'pages/User/Login'

import { Register } from 'pages/User/Register'



export const PublicUserRoutes: RouteObject = {
    element: <Container />,
    children: [      
        { 
            path : '/login',
            element : <Login/>
        },       
        { 
            path : '/register',
            element : <Register/>
        },              
    ],
}
