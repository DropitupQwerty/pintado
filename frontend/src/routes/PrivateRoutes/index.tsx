import React from 'react'
import {  RouteObject } from 'react-router-dom'
import Container from './Container'
import { Home } from 'pages/User/Home'


export const PrivateRoutes: RouteObject = {
    path:'/',
    element: <Container />,
    children: [
        { 
            path:'/',
            element : <Home/>
        },
        
    ],

}
