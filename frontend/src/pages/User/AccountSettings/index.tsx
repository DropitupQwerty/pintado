import { SideBar } from 'pages/User/AccountSettings/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const AccountSettings = () => {
    return (
        <div className='min-h-full border bg-secondary-white'>
            <div className='h-full'>
                <SideBar/>
            </div>

            <div className=''>
                <Outlet/>
            </div>
        </div>
    )
}
