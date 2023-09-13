import React from 'react'
import { RouteObject } from 'react-router-dom'
import Container from './Container'


import { Home } from 'pages/User/Home'
import { Login } from 'pages/User/Login'
import { Register } from 'pages/User/Register'



export const PublicUserRoutes: RouteObject = {
    element: <Container />,
    children: [
        { 
            index:true,
            element : <Home/>
        },       
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
