import React from 'react'
import { RouteObject } from 'react-router-dom'
import Container from './Container'
import { UserError } from 'pages/ErrorPage/UserError'
import { Home } from 'pages/User/Home'
import { Profile } from 'pages/User/Profile'


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
        { 
            path : '/profile/:id',
            element : <Profile/>
        },
                  
    ],
}
