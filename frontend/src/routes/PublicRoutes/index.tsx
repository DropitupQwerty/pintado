import React from 'react'
import { RouteObject } from 'react-router-dom'
import Container from './Container'
import { Login } from '../../pages/Login'
import { Home } from 'pages/Home'


export const PublicRoutes: RouteObject = {
    element: <Container />,
    children: [
        { 
            path : '/login',
            element : <Login/>
        },
        { 
            path : '/',
            element : <Home/>
        },
        { 
            path : '/test',
            element : <div className='text-3xl font-bold'>Test</div>
        },
    ],
}
