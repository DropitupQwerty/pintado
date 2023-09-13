import { AppNavigationBar } from 'components/AppNavigationbar'
import React from 'react'
import { Outlet } from 'react-router-dom'


export const AppUserLayout = () => {
    return (
        <div className='h-screen relative flex flex-col '>
            <AppNavigationBar/>
            <div className='flex-1 '>
                <Outlet/>
            </div>
        </div>
    )
}
