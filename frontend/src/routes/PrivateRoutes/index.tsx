import React from 'react'
import {  RouteObject } from 'react-router-dom'
import Container from './Container'


export const PrivateRoutes: RouteObject = {
    path:'/',
    element: <Container />,
    children: [
        {
            path:'/dashboard',
            index:true,
            element: <h1>H1</h1>,
        },
    ],

}
