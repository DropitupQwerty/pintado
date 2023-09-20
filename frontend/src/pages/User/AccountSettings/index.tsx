import { SideBar } from 'pages/User/AccountSettings/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const AccountSettings = () => {
    return (
        <div className='min-h-full flex bg-secondary-white'>
            <SideBar/>
            <div className='m-4 bg-white w-full p-4 rounded-md shadow-md'>
                <Outlet/>
            </div>
        </div>
    )
}
