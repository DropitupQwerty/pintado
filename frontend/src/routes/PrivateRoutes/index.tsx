import React from 'react'
import {  RouteObject } from 'react-router-dom'
import Container from './Container'
import { Login } from '../../pages/Login'


export const PrivateRoutes: RouteObject = {
    path:'/',
    element: <Container />,
    children: [
        {
            path:'/dashboard',
            index:true,
            element: <Login/>,
        },
    ],

}
