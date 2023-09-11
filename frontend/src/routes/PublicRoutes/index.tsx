import React from 'react'
import { RouteObject } from 'react-router-dom'
import Container from './Container'
import { Login } from '../../pages/Login'


export const PublicRoutes: RouteObject = {
    element: <Container />,
    children: [
        { 
            path : '/',
            element : <Login/>
        },
    ],
}
