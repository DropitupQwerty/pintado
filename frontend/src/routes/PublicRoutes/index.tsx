import React from 'react'
import { RouteObject } from 'react-router-dom'
import Container from './Container'
import { UserError } from 'pages/ErrorPage/userError'
import { Home } from 'pages/User/Home'


export const PublicRoutes: RouteObject = {
    element: <Container />,
    children: [
        { 
            path : '*',
            element : <UserError/>
        },            
        { 
            path : '/',
            element : <Home/>
        },
                  
    ],
}
